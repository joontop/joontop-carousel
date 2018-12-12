import EventEmitter from 'events';
import utilDefault from 'util';
import CONFIG from './Config';
import util from './util/Util';
import Options from './Options';

function MyEmitter() {
  EventEmitter.call(this);
}
utilDefault.inherits(MyEmitter, EventEmitter);

export default class Carousel {
  constructor(options = {}) {
    this.timer = null;
    this.emitter = new MyEmitter();
    this.carouselElement = null;
    this.paginateElement = null;
    this.paginateDataArray = [];
    Options.setDatas(options);
    this.state = {
      isOnTouching: false,
      isOnAutoRolling: false,
      isPossible: true,
    };
    this.value = {
      idx: {
        after: 0,
        before: 0,
        current: Options.getStartIndex(),
        last: Options.getDataLastIndex(),
      },
      time: { end: 0, start: 0 },
      x: { end: 0, move: 0, start: 0 },
      y: { end: 0, move: 0, start: 0 },
    };
  }
  start() {
    this.setCarousel();
    this.setEvent();
    if (Options.getIsAutoRolling()) {
      this.startRolling();
    }
    if (Options.getIsPaginate()) {
      this.setPaginate();
      this.setPaging();
    }
  }
  getCarouseElement() {
    const element = document.createElement('div');
    element.className = Options.getCarouselClassname();
    Object.assign(element.style, CONFIG.CAROUSEL.CSS);
    return element;
  }
  setCarouselData() {
    if (Options.getDataLastIndex() === 0) {
      // data 가 한개일때
      this.carouselElement.appendChild(this.getCarouselDataElement(0));
    } else {
      // data 가 두개 이상일때
      this.setIdx();
      if (!Options.getIsBounce()) {
        this.carouselElement.appendChild(this.getCarouselDataElement(this.value.idx.before));
      }
      this.carouselElement.appendChild(this.getCarouselDataElement(this.value.idx.current));
      this.carouselElement.appendChild(this.getCarouselDataElement(this.value.idx.after));
    }
  }
  getCarouselDataElement(idx) {
    const element = document.createElement('div');
    element.className = Options.getCarouselDataClassname();
    element.innerHTML = Options.getData()[idx] || '';
    return element;
  }
  getPaginateElement() {
    const element = document.createElement('div');
    element.className = CONFIG.PAGINATE.CLASSNAME;
    for (let i = 0; i < Options.getDataLength(); i++) {
      const item = this.getPaginateDataElement(i);
      element.appendChild(item);
    }
    return element;
  }
  getPaginateDataElement(idx) {
    const element = document.createElement('div');
    element.className = CONFIG.PAGINATE_DATA.CLASSNAME;
    element.setAttribute(CONFIG.PAGINATE_DATA.INDEX_KEY, idx);
    element.addEventListener(
      'click',
      function(e) {
        e.preventDefault();
        if (
          e.target.getAttribute(CONFIG.PAGINATE_DATA.INDEX_KEY) &&
          this.state.isPossible
        ) {
          this.value.idx.current = parseInt(
            e.target.getAttribute(CONFIG.PAGINATE_DATA.INDEX_KEY)
          );
          this.carouselElement.innerHTML = '';
          this.setIdx();
          this.setCarouselData();
          this.setDataTransition();
          // this.emitter.emit(CONFIG.EMITTER_NAME.PAGINATE, this.value.idx.current);
        }
      }.bind(this)
    );
    if (Options.getPaginateData()) {
      element.innerHTML = Options.getPaginateData()[idx];
    }
    this.paginateDataArray.push(element);
    return element;
  }
  getDirection() {
    const distance = Math.abs(this.value.x.end - this.value.x.start) / 1000; // 대충 미터로 환산
    const second = (this.value.time.end - this.value.time.start) / 1000; // 대충 초로 환산
    const velocity = (distance / second).toFixed(2); // 거리 / 시간 = 속도 (m/s)
    let direction = CONFIG.DIRECTION.DEFAULT;

    if (Options.getIsAutoRolling() && this.state.isOnAutoRolling) {
      // 오토롤링 상태일 경우
      direction = CONFIG.DIRECTION.NEXT;
      return direction;
    }

    if (
      this.value.x.start > this.value.x.end &&
      velocity > Options.getLimitVelocity()
    ) {
      // next 상태
      if (
        Options.getIsBounce() &&
        this.value.idx.current === this.value.idx.last
      ) {
        // bounce 이고 마지막 일떄 아무것도 하지않음
      } else {
        direction = CONFIG.DIRECTION.NEXT;
      }
    } else if (
      this.value.x.start < this.value.x.end &&
      velocity > Options.getLimitVelocity()
    ) {
      // prev 상태
      if (Options.getIsBounce() && this.value.idx.current === 0) {
        // bounce 이고 처음일때 아무것도 하지 않음
      } else {
        direction = CONFIG.DIRECTION.PREV;
      }
    }
    return direction;
  }
  setCarousel() {
    Options.getTarget().innerHTML = '';
    this.carouselElement = this.getCarouseElement();
    this.setCarouselData();
    Options.getTarget().appendChild(this.carouselElement);
    this.setDataTransition();
  }
  setPaginate() {
    this.paginateElement = this.getPaginateElement();
    Options.getTarget().appendChild(this.paginateElement);
  }
  setDataTransition() {
    const dataElements = this.carouselElement.querySelectorAll(
      '.' + Options.getCarouselDataClassname()
    );
    for (let i = 0, j = dataElements.length; i < j; i++) {
      Object.assign(dataElements[i].style, CONFIG.CAROUSEL_DATA.CSS);
    }
    if (dataElements.length > 1) {
      if (dataElements.length === 2) {
        if (this.value.idx.current === 0) {
          util.setTransformPrefix(dataElements[0], '0');
          util.setTransformPrefix(dataElements[1], '100%');
        } else {
          util.setTransformPrefix(dataElements[0], '-100%');
          util.setTransformPrefix(dataElements[1], '0');
        }
      } else {
        util.setTransformPrefix(dataElements[0], '-100%');
        util.setTransformPrefix(dataElements[1], '0');
        util.setTransformPrefix(dataElements[2], '100%');
      }
    }
  }
  setIdx() {
    if (this.value.idx.current < 0) {
      this.value.idx.current = this.value.idx.last;
    }
    if (this.value.idx.current > this.value.idx.last) {
      this.value.idx.current = 0;
    }
    this.value.idx.before =
      this.value.idx.current === 0
        ? this.value.idx.last
        : this.value.idx.current - 1;
    this.value.idx.after =
      this.value.idx.current === this.value.idx.last
        ? 0
        : this.value.idx.current + 1;
    this.setPaging();
    this.emitter.emit(CONFIG.EMITTER_NAME.PAGINATE, this.value.idx.current + 1);
  }
  setPaging() {
    if (Options.getIsPaginate() && this.paginateDataArray.length > 0) {
      for (let i = 0, j = this.paginateDataArray.length; i < j; i++) {
        this.paginateDataArray[i].classList.remove('on');
      }
      this.paginateDataArray[this.value.idx.current].classList.add('on');
    }
  }
  setEvent() {
    if (util.isMobile()) {
      this.carouselElement.addEventListener(
        'touchstart',
        this.onStartEvent.bind(this)
      );
      document.addEventListener('touchmove', this.onMoveEvent.bind(this));
      document.addEventListener('touchend', this.onEndEvent.bind(this));
    } else {
      this.carouselElement.addEventListener(
        'mouseover',
        this.onMouseoverEvent.bind(this)
      );
      this.carouselElement.addEventListener(
        'mouseout',
        this.onMouseoutEvent.bind(this)
      );
      this.carouselElement.addEventListener(
        'mousedown',
        this.onStartEvent.bind(this)
      );
      document.addEventListener('mousemove', this.onMoveEvent.bind(this));
      document.addEventListener('mouseup', this.onEndEvent.bind(this));
    }
  }
  prev() {
    util.setTransformPrefix(this.carouselElement, '100%');
    setTimeout(
      function() {
        if (Options.getIsBounce() && this.value.idx.current === 0) {
        } else {
          if (
            Options.getIsBounce() &&
            this.value.idx.current === this.value.idx.last
          ) {
          } else {
            this.carouselElement.removeChild(this.carouselElement.lastChild);
          }
          this.value.idx.current--;
          this.setIdx();
          if (Options.getIsBounce() && this.value.idx.current === 0) {
          } else {
            this.carouselElement.insertBefore(
              this.getCarouselDataElement(this.value.idx.before),
              this.carouselElement.firstChild
            );
          }
          util.setTransitionPrefix(this.carouselElement, 'none');
          util.setTransformPrefix(this.carouselElement, '0');
          this.setDataTransition();
        }
      }.bind(this),
      Options.getTransitionSeconds() * 1000
    );
    this.emitter.emit(CONFIG.EMITTER_NAME.PREV, 'prev');
  }
  next() {
    util.setTransformPrefix(this.carouselElement, '-100%');
    setTimeout(
      function() {
        if (
          Options.getIsBounce() &&
          this.value.idx.current === this.value.idx.last
        ) {
        } else {
          if (Options.getIsBounce() && this.value.idx.current === 0) {
          } else {
            this.carouselElement.removeChild(this.carouselElement.firstChild);
          }
          this.value.idx.current++;
          this.setIdx();
          if (
            Options.getIsBounce() &&
            this.value.idx.current === this.value.idx.last
          ) {
          } else {
            this.carouselElement.appendChild(
              this.getCarouselDataElement(this.value.idx.after)
            );
          }
          util.setTransitionPrefix(this.carouselElement, 'none');
          util.setTransformPrefix(this.carouselElement, '0');
          this.setDataTransition();
        }
      }.bind(this),
      Options.getTransitionSeconds() * 1000
    );
    this.emitter.emit(CONFIG.EMITTER_NAME.NEXT, 'next');
  }
  onStartEvent(e) {
    if (!this.state.isOnTouching) {
      e.preventDefault();
      if (!this.state.isPossible) {
        return;
      }
      // 롤링이라면 롤링 멈춤
      this.stopRolling();
      this.state.isPossible = false;
      this.state.isOnTouching = true;
      const pageXY = util.getPageXY(e);
      this.value.x.start = pageXY.x;
      this.value.y.start = pageXY.y;
      this.value.time.start = new Date().getTime();
      util.setTransitionPrefix(this.carouselElement, 'none');
    }
  }
  onMoveEvent(e) {
    if (this.state.isOnTouching) {
      e.preventDefault();
      const pageXY = util.getPageXY(e);
      this.value.x.move = pageXY.x;
      this.value.y.move = pageXY.y;
      let startPercent =
        (this.value.x.start / this.carouselElement.offsetWidth) * 100;
      let movePercent =
        (this.value.x.move / this.carouselElement.offsetWidth) * 100;
      let currentPercent =
        (movePercent - startPercent) * Options.getMoveRange();
      util.setTransformPrefix(this.carouselElement, currentPercent + '%');
    }
  }
  onEndEvent(e) {
    if (this.state.isOnTouching) {
      this.state.isOnTouching = false;
      const pageXY = util.getPageXY(e);
      this.value.x.end = pageXY.x;
      this.value.y.end = pageXY.y;
      this.value.time.end = new Date().getTime();
      this.actionByDirection();
      setTimeout(
        function() {
          this.state.isPossible = true;
          // 롤링이라면 다시 롤링을 시작
          this.startRolling();
        }.bind(this),
        Options.getTransitionSeconds() * 1000
      );
    }
  }
  onMouseoverEvent() {
    if (Options.getIsAutoRolling() && this.state.isOnAutoRolling) {
      this.stopRolling();
    }
  }
  onMouseoutEvent() {
    if (Options.getIsAutoRolling() && !this.state.isOnAutoRolling) {
      this.startRolling();
    }
  }
  actionByDirection() {
    // 방향에 따라 액션을 수행
    switch (this.getDirection()) {
      case CONFIG.DIRECTION.PREV: {
        this.prev();
        break;
      }
      case CONFIG.DIRECTION.NEXT: {
        this.next();
        break;
      }
      case CONFIG.DIRECTION.DEFAULT: {
        util.setTransformPrefix(this.carouselElement, '0');
        break;
      }
    }
    util.setTransitionPrefix(
      this.carouselElement,
      Options.getTransitionSeconds() + 's ease-out',
      'transform'
    );
  }
  startRolling() {
    if (Options.getIsAutoRolling()) {
      this.state.isOnAutoRolling = true;
      this.timer = setInterval(
        function() {
          this.actionByDirection();
        }.bind(this),
        Options.getRollingSecond() * 1000
      );
    }
  }
  stopRolling() {
    if (Options.getIsAutoRolling()) {
      this.state.isOnAutoRolling = false;
      clearInterval(this.timer);
    }
  }
}
