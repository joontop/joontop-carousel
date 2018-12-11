export default {
  CAROUSEL: {
    CLASSNAME: '__carousel',
    TAGNAME: 'div',
    CSS: {
      '-webkit-backface-visibility': 'hidden',
      'backface-visibility': 'hidden',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      width: '100%',
      height: '100%',
      margin: 0,
      padding: 0,
      border: 0,
    },
  },
  CAROUSEL_DATA: {
    CLASSNAME: '__carousel_data',
    TAGNAME: 'div',
    CSS: {
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  PAGINATE: {
    CLASSNAME: '__paginate',
    TAGNAME: 'div',
  },
  PAGINATE_DATA: {
    INDEX_KEY: 'paginate-data-idx',
    CLASSNAME: '__paginate_data',
    TAGNAME: 'div',
  },
  CSS_TRANSFORM_PREFIX: ['-webkit-', '-moz-', '-ms-', '-o-', ''],
  DIRECTION: {
    DEFAULT: 'DEFAULT',
    PREV: 'PREV',
    NEXT: 'NEXT',
  },
  EMITTER_NAME: {
    PREV: 'prev',
    NEXT: 'next',
    PAGINATE: 'paginate',
  },
  DEFAULT_VALUE: {
    LIMIT_VELOCITY: 0.5,
    MAX_PAGE: 10,
    MOVE_RANGE: 0.3,
    ROLLING_SECOND: 5,
    TRANSITION_SECOND: 0.2,
  },
};
