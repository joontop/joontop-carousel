# joontop-carousel

## Usage

```js
import CircleChart from 'joontop-carousel';

let start = function() {
  let options = {
    isAutoRolling: false, // default : false
    isBounce: false, // default : false
    isPaginate: true, // default : false
    rollingSecond: 2, // default : 5
    startIndex: 0, // default : 0
    transitionSeconds: 0.2, // default : 0.2s
    limitVelocity: 0.5, // default : 0.5 m/s
    moveRange: 0.3, // default : 0.3, max : 1
    data: [
      '<div class="a a1">1<a href="#" style="position:absolute;top:10px;left:10px;width:20px;height:20px;background:#f00;"></a></div>',
      '<div class="a a2">2</div>',
      '<div class="a a3">3</div>',
      '<div class="a a4">4</div>',
      '<div class="a a5">5</div>',
      '<div class="a a6">6</div>',
    ],
    paginateData: [
      '<div class="b b1">1</div>',
      '<div class="b b2">2</div>',
      '<div class="b b3">3</div>',
      '<div class="b b4">4</div>',
      '<div class="b b5">5</div>',
      '<div class="b b6">6</div>',
    ],
    target: document.querySelector('.carousel'),
  };
  const carousel = new Carousel(options);
  carousel.start();
  carousel.emitter.on('prev', function(idx){console.log(idx);});
  carousel.emitter.on('next', function(idx){console.log(idx);});
  carousel.emitter.on('paginate', function(idx){console.log(idx);});
};
start();
```

## Sample URL
https://joontop.github.io/joontop-carousel/sample/

## License

