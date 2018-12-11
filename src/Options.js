import CONFIG from './Config';

class Options {
  constructor() {
    this.options = {
      carouselClassname: CONFIG.CAROUSEL.CLASSNAME,
      carouselDataClassname: CONFIG.CAROUSEL_DATA.CLASSNAME,
      data: [],
      paginateData: [],
      isAutoRolling: false,
      isBounce: false,
      isFixHeight: false,
      isPaginate: false,
      maxPage: CONFIG.DEFAULT_VALUE.MAX_PAGE,
      rollingSecond: CONFIG.DEFAULT_VALUE.ROLLING_SECOND,
      startIndex: 0,
      target: null,
      transitionSeconds: CONFIG.DEFAULT_VALUE.TRANSITION_SECOND,
      limitVelocity: CONFIG.DEFAULT_VALUE.LIMIT_VELOCITY,
      moveRange: CONFIG.DEFAULT_VALUE.MOVE_RANGE,
      type: 0,
    };
  }

  setDatas(datas) {
    // 사용자가 설정한 옵션을 가져옴
    Object.assign(this.options, datas);

    // bounce 일때는 autoRolling 이 꺼져있어야함
    if (this.options.isBounce) {
      this.options.isAutoRolling = false;
    }

    // bounce 가 아니고 data가 2개일때 왼쪽에 컨텐츠를 채워넣기위해 4개로 만들어줌
    if (!this.options.isBounce && this.options.data.length === 2) {
      this.options.data = [
        ...this.options.data,
        this.options.data[0],
        this.options.data[1],
      ];
    }

    // moveRange 값 세팅
    if (this.options.moveRange > 1) {
      this.options.moveRange = 1;
    } else if (this.options.moveRange < 0.1) {
      this.options.moveRange = 0.1;
    }
    this.options.moveRange = this.options.moveRange.toFixed(2);
  }

  getCarouselClassname() {
    return this.options.carouselClassname;
  }

  getCarouselDataClassname() {
    return this.options.carouselDataClassname;
  }

  getData() {
    return this.options.data;
  }

  getDataLastIndex() {
    return this.getDataLength() - 1;
  }

  getDataLength() {
    return this.options.data.length;
  }

  getIsAutoRolling() {
    return this.options.isAutoRolling;
  }

  getMoveRange() {
    return this.options.moveRange;
  }

  getStartIndex() {
    return this.options.startIndex;
  }

  getRollingSecond() {
    return this.options.rollingSecond;
  }

  getIsBounce() {
    return this.options.isBounce;
  }

  getIsPaginate() {
    return this.options.isPaginate;
  }

  getTarget() {
    return this.options.target;
  }

  getTransitionSeconds() {
    return this.options.transitionSeconds;
  }

  getLimitVelocity() {
    return this.options.limitVelocity;
  }

  getPaginateData() {
    return this.options.paginateData;
  }
}

export default new Options();
