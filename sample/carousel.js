!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.carousel=e():t.carousel=e()}(window,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/lib/",n(n.s=6)}([function(t,e){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function i(t){return"function"==typeof t}function r(t){return"object"==typeof t&&null!==t}function s(t){return void 0===t}t.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(t){if(!function(t){return"number"==typeof t}(t)||t<0||isNaN(t))throw TypeError("n must be a positive number");return this._maxListeners=t,this},n.prototype.emit=function(t){var e,n,o,a,u,l;if(this._events||(this._events={}),"error"===t&&(!this._events.error||r(this._events.error)&&!this._events.error.length)){if((e=arguments[1])instanceof Error)throw e;var c=new Error('Uncaught, unspecified "error" event. ('+e+")");throw c.context=e,c}if(s(n=this._events[t]))return!1;if(i(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:a=Array.prototype.slice.call(arguments,1),n.apply(this,a)}else if(r(n))for(a=Array.prototype.slice.call(arguments,1),o=(l=n.slice()).length,u=0;u<o;u++)l[u].apply(this,a);return!0},n.prototype.addListener=function(t,e){var o;if(!i(e))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",t,i(e.listener)?e.listener:e),this._events[t]?r(this._events[t])?this._events[t].push(e):this._events[t]=[this._events[t],e]:this._events[t]=e,r(this._events[t])&&!this._events[t].warned&&(o=s(this._maxListeners)?n.defaultMaxListeners:this._maxListeners)&&o>0&&this._events[t].length>o&&(this._events[t].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[t].length),"function"==typeof console.trace&&console.trace()),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(t,e){if(!i(e))throw TypeError("listener must be a function");var n=!1;function r(){this.removeListener(t,r),n||(n=!0,e.apply(this,arguments))}return r.listener=e,this.on(t,r),this},n.prototype.removeListener=function(t,e){var n,s,o,a;if(!i(e))throw TypeError("listener must be a function");if(!this._events||!this._events[t])return this;if(o=(n=this._events[t]).length,s=-1,n===e||i(n.listener)&&n.listener===e)delete this._events[t],this._events.removeListener&&this.emit("removeListener",t,e);else if(r(n)){for(a=o;a-- >0;)if(n[a]===e||n[a].listener&&n[a].listener===e){s=a;break}if(s<0)return this;1===n.length?(n.length=0,delete this._events[t]):n.splice(s,1),this._events.removeListener&&this.emit("removeListener",t,e)}return this},n.prototype.removeAllListeners=function(t){var e,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[t]&&delete this._events[t],this;if(0===arguments.length){for(e in this._events)"removeListener"!==e&&this.removeAllListeners(e);return this.removeAllListeners("removeListener"),this._events={},this}if(i(n=this._events[t]))this.removeListener(t,n);else if(n)for(;n.length;)this.removeListener(t,n[n.length-1]);return delete this._events[t],this},n.prototype.listeners=function(t){return this._events&&this._events[t]?i(this._events[t])?[this._events[t]]:this._events[t].slice():[]},n.prototype.listenerCount=function(t){if(this._events){var e=this._events[t];if(i(e))return 1;if(e)return e.length}return 0},n.listenerCount=function(t,e){return t.listenerCount(e)}},function(t,e,n){(function(t,i){var r=/%[sdj%]/g;e.format=function(t){if(!y(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(a(arguments[n]));return e.join(" ")}n=1;for(var i=arguments,s=i.length,o=String(t).replace(r,function(t){if("%%"===t)return"%";if(n>=s)return t;switch(t){case"%s":return String(i[n++]);case"%d":return Number(i[n++]);case"%j":try{return JSON.stringify(i[n++])}catch(t){return"[Circular]"}default:return t}}),u=i[n];n<s;u=i[++n])d(u)||!A(u)?o+=" "+u:o+=" "+a(u);return o},e.deprecate=function(n,r){if(m(t.process))return function(){return e.deprecate(n,r).apply(this,arguments)};if(!0===i.noDeprecation)return n;var s=!1;return function(){if(!s){if(i.throwDeprecation)throw new Error(r);i.traceDeprecation?console.trace(r):console.error(r),s=!0}return n.apply(this,arguments)}};var s,o={};function a(t,n){var i={seen:[],stylize:l};return arguments.length>=3&&(i.depth=arguments[2]),arguments.length>=4&&(i.colors=arguments[3]),p(n)?i.showHidden=n:n&&e._extend(i,n),m(i.showHidden)&&(i.showHidden=!1),m(i.depth)&&(i.depth=2),m(i.colors)&&(i.colors=!1),m(i.customInspect)&&(i.customInspect=!0),i.colors&&(i.stylize=u),c(i,t,i.depth)}function u(t,e){var n=a.styles[e];return n?"["+a.colors[n][0]+"m"+t+"["+a.colors[n][1]+"m":t}function l(t,e){return t}function c(t,n,i){if(t.customInspect&&n&&x(n.inspect)&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var r=n.inspect(i,t);return y(r)||(r=c(t,r,i)),r}var s=function(t,e){if(m(e))return t.stylize("undefined","undefined");if(y(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string")}if(g(e))return t.stylize(""+e,"number");if(p(e))return t.stylize(""+e,"boolean");if(d(e))return t.stylize("null","null")}(t,n);if(s)return s;var o=Object.keys(n),a=function(t){var e={};return t.forEach(function(t,n){e[t]=!0}),e}(o);if(t.showHidden&&(o=Object.getOwnPropertyNames(n)),_(n)&&(o.indexOf("message")>=0||o.indexOf("description")>=0))return h(n);if(0===o.length){if(x(n)){var u=n.name?": "+n.name:"";return t.stylize("[Function"+u+"]","special")}if(E(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(T(n))return t.stylize(Date.prototype.toString.call(n),"date");if(_(n))return h(n)}var l,A="",b=!1,S=["{","}"];(v(n)&&(b=!0,S=["[","]"]),x(n))&&(A=" [Function"+(n.name?": "+n.name:"")+"]");return E(n)&&(A=" "+RegExp.prototype.toString.call(n)),T(n)&&(A=" "+Date.prototype.toUTCString.call(n)),_(n)&&(A=" "+h(n)),0!==o.length||b&&0!=n.length?i<0?E(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special"):(t.seen.push(n),l=b?function(t,e,n,i,r){for(var s=[],o=0,a=e.length;o<a;++o)R(e,String(o))?s.push(f(t,e,n,i,String(o),!0)):s.push("");return r.forEach(function(r){r.match(/^\d+$/)||s.push(f(t,e,n,i,r,!0))}),s}(t,n,i,a,o):o.map(function(e){return f(t,n,i,a,e,b)}),t.seen.pop(),function(t,e,n){if(t.reduce(function(t,e){return 0,e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60)return n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1];return n[0]+e+" "+t.join(", ")+" "+n[1]}(l,A,S)):S[0]+A+S[1]}function h(t){return"["+Error.prototype.toString.call(t)+"]"}function f(t,e,n,i,r,s){var o,a,u;if((u=Object.getOwnPropertyDescriptor(e,r)||{value:e[r]}).get?a=u.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):u.set&&(a=t.stylize("[Setter]","special")),R(i,r)||(o="["+r+"]"),a||(t.seen.indexOf(u.value)<0?(a=d(n)?c(t,u.value,null):c(t,u.value,n-1)).indexOf("\n")>-1&&(a=s?a.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+a.split("\n").map(function(t){return"   "+t}).join("\n")):a=t.stylize("[Circular]","special")),m(o)){if(s&&r.match(/^\d+$/))return a;(o=JSON.stringify(""+r)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(o=o.substr(1,o.length-2),o=t.stylize(o,"name")):(o=o.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),o=t.stylize(o,"string"))}return o+": "+a}function v(t){return Array.isArray(t)}function p(t){return"boolean"==typeof t}function d(t){return null===t}function g(t){return"number"==typeof t}function y(t){return"string"==typeof t}function m(t){return void 0===t}function E(t){return A(t)&&"[object RegExp]"===b(t)}function A(t){return"object"==typeof t&&null!==t}function T(t){return A(t)&&"[object Date]"===b(t)}function _(t){return A(t)&&("[object Error]"===b(t)||t instanceof Error)}function x(t){return"function"==typeof t}function b(t){return Object.prototype.toString.call(t)}function S(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(t){if(m(s)&&(s=i.env.NODE_DEBUG||""),t=t.toUpperCase(),!o[t])if(new RegExp("\\b"+t+"\\b","i").test(s)){var n=i.pid;o[t]=function(){var i=e.format.apply(e,arguments);console.error("%s %d: %s",t,n,i)}}else o[t]=function(){};return o[t]},e.inspect=a,a.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},a.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=v,e.isBoolean=p,e.isNull=d,e.isNullOrUndefined=function(t){return null==t},e.isNumber=g,e.isString=y,e.isSymbol=function(t){return"symbol"==typeof t},e.isUndefined=m,e.isRegExp=E,e.isObject=A,e.isDate=T,e.isError=_,e.isFunction=x,e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=n(4);var O=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function R(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){console.log("%s - %s",function(){var t=new Date,e=[S(t.getHours()),S(t.getMinutes()),S(t.getSeconds())].join(":");return[t.getDate(),O[t.getMonth()],e].join(" ")}(),e.format.apply(e,arguments))},e.inherits=n(5),e._extend=function(t,e){if(!e||!A(e))return t;for(var n=Object.keys(e),i=n.length;i--;)t[n[i]]=e[n[i]];return t}}).call(this,n(2),n(3))},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){var n,i,r=t.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(t){n=s}try{i="function"==typeof clearTimeout?clearTimeout:o}catch(t){i=o}}();var u,l=[],c=!1,h=-1;function f(){c&&u&&(c=!1,u.length?l=u.concat(l):h=-1,l.length&&v())}function v(){if(!c){var t=a(f);c=!0;for(var e=l.length;e;){for(u=l,l=[];++h<e;)u&&u[h].run();h=-1,e=l.length}u=null,c=!1,function(t){if(i===clearTimeout)return clearTimeout(t);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(t);try{i(t)}catch(e){try{return i.call(null,t)}catch(e){return i.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function d(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];l.push(new p(t,e)),1!==l.length||c||a(v)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=d,r.addListener=d,r.once=d,r.off=d,r.removeListener=d,r.removeAllListeners=d,r.emit=d,r.prependListener=d,r.prependOnceListener=d,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},function(t,e){t.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},function(t,e,n){"use strict";n.r(e);var i=n(0),r=n.n(i),s=n(1),o=n.n(s),a={CAROUSEL_DOM_INFORMATION:{CAROUSEL_TAGNAME:"div",CAROUSEL_CLASSNAME:"_carousel",CAROUSEL_DATA_TAGNAME:"div",CAROUSEL_DATA_CLASSNAME:"_carousel_data",CAROUSEL_CSS:{"-webkit-backface-visibility":"hidden","backface-visibility":"hidden",position:"absolute",top:0,right:0,bottom:0,left:0,width:"100%",height:"100%",margin:0,padding:0,border:0},CAROUSEL_DATA_CSS:{overflow:"hidden",position:"absolute",top:0,right:0,bottom:0,left:0}},PAGING:{CLASSNAME:"__paging",TAGNAME:"div"},PAGING_ITEM:{CLASSNAME:"__paging_data",TAGNAME:"div"},CSS_TRANSFORM_PREFIX:["-webkit-","-moz-","-ms-","-o-",""],DIRECTION:{DEFAULT:"DEFAULT",PREV:"PREV",NEXT:"NEXT"},EMITTER_NAME:{PREV:"prev",NEXT:"next"},TAG_ATTRIBUTE:{CLASS:"class"},DEFAULT_VALUE:{LIMIT_VELOCITY:.5,MAX_PAGE:10,MOVE_RANGE:.3,ROLLING_SECOND:5,TRANSITION_SECOND:.2}},u=function(){var t=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)};return{isMobile:t,setTransitionPrefix:function(){for(var t=0,e=a.CSS_TRANSFORM_PREFIX.length;t<e;t++)2===arguments.length?arguments[0].style.setProperty(a.CSS_TRANSFORM_PREFIX[t]+"transition",arguments[1]):arguments[0].style.setProperty(a.CSS_TRANSFORM_PREFIX[t]+"transition",a.CSS_TRANSFORM_PREFIX[t]+arguments[2]+" "+arguments[1])},setTransformPrefix:function(t,e){for(var n=0,i=a.CSS_TRANSFORM_PREFIX.length;n<i;n++)t.style.setProperty(a.CSS_TRANSFORM_PREFIX[n]+"transform","translateX("+e+") translateZ(0)")},getPageXY:function(e){return{x:t()?e.changedTouches[0].pageX:e.pageX,y:t()?e.changedTouches[0].pageY:e.pageY}}}}();function l(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function h(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var f=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options={carouselClassname:a.CAROUSEL_DOM_INFORMATION.CAROUSEL_CLASSNAME,carouselDataClassname:a.CAROUSEL_DOM_INFORMATION.CAROUSEL_DATA_CLASSNAME,data:[],isAutoRolling:!1,isBounce:!1,isFixHeight:!1,isPaginate:!1,maxPage:a.DEFAULT_VALUE.MAX_PAGE,rollingSecond:a.DEFAULT_VALUE.ROLLING_SECOND,startIndex:0,target:null,transitionSeconds:a.DEFAULT_VALUE.TRANSITION_SECOND,limitVelocity:a.DEFAULT_VALUE.LIMIT_VELOCITY,moveRange:a.DEFAULT_VALUE.MOVE_RANGE,type:0}}return function(t,e,n){e&&h(t.prototype,e),n&&h(t,n)}(t,[{key:"setDatas",value:function(t){c(this.options,t),this.options.isBounce&&(this.options.isAutoRolling=!1),this.options.isBounce||2!==this.options.data.length||(this.options.data=l(this.options.data).concat([this.options.data[0],this.options.data[1]])),this.options.moveRange>1?this.options.moveRange=1:this.options.moveRange<.1&&(this.options.moveRange=.1),this.options.moveRange=this.options.moveRange.toFixed(2)}},{key:"getCarouselClassname",value:function(){return this.options.carouselClassname}},{key:"getCarouselDataClassname",value:function(){return this.options.carouselDataClassname}},{key:"getData",value:function(){return this.options.data}},{key:"getDataLastIndex",value:function(){return this.getDataLength()-1}},{key:"getDataLength",value:function(){return this.options.data.length}},{key:"getIsAutoRolling",value:function(){return this.options.isAutoRolling}},{key:"getMoveRange",value:function(){return this.options.moveRange}},{key:"getStartIndex",value:function(){return this.options.startIndex}},{key:"getRollingSecond",value:function(){return this.options.rollingSecond}},{key:"getIsBounce",value:function(){return this.options.isBounce}},{key:"getIsPaginate",value:function(){return this.options.isPaginate}},{key:"getTarget",value:function(){return this.options.target}},{key:"getTransitionSeconds",value:function(){return this.options.transitionSeconds}},{key:"getLimitVelocity",value:function(){return this.options.limitVelocity}}]),t}());function v(){return(v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function p(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function d(){r.a.call(this)}o.a.inherits(d,r.a);var g=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.carousel=null,this.timer=null,this.emitter=new d,f.setDatas(e),this.state={isOnTouch:!1,isOnAutoRolling:!1,isPossible:!0},this.value={idx:{after:0,before:0,current:0,last:0},time:{end:0,start:0},x:{end:0,move:0,start:0},y:{end:0,move:0,start:0}}}return function(t,e,n){e&&p(t.prototype,e),n&&p(t,n)}(t,[{key:"start",value:function(){v(this.value.idx,{current:f.getStartIndex(),last:f.getDataLastIndex()}),this.setCarousel(),this.setEvent(),f.getIsAutoRolling()&&this.startRolling(),this.setPaging()}},{key:"setCarousel",value:function(){f.getTarget().innerHTML="",this.carousel=this.getCarouseElement(),f.getTarget().appendChild(this.carousel),this.setDataTransition()}},{key:"setPaging",value:function(){this.paging=this.getPagingElement(),f.getTarget().appendChild(this.paging)}},{key:"getPagingElement",value:function(){var t=document.createElement(a.PAGING.TAGNAME);t.setAttribute(a.TAG_ATTRIBUTE.CLASS,a.PAGING.CLASSNAME);for(var e=0;e<f.getDataLength();e++)console.log(e);return t}},{key:"getCarouseElement",value:function(){var t=document.createElement(a.CAROUSEL_DOM_INFORMATION.CAROUSEL_TAGNAME);return t.setAttribute(a.TAG_ATTRIBUTE.CLASS,f.getCarouselClassname()),v(t.style,a.CAROUSEL_DOM_INFORMATION.CAROUSEL_CSS),0===f.getDataLastIndex()?t.appendChild(this.getDataElement(0)):(this.setIdx(),f.getIsBounce()||t.appendChild(this.getDataElement(this.value.idx.before)),t.appendChild(this.getDataElement(this.value.idx.current)),t.appendChild(this.getDataElement(this.value.idx.after))),t}},{key:"getDataElement",value:function(t){var e=document.createElement(a.CAROUSEL_DOM_INFORMATION.CAROUSEL_DATA_TAGNAME);return e.setAttribute(a.TAG_ATTRIBUTE.CLASS,f.getCarouselDataClassname()),e.innerHTML=f.getData()[t],e}},{key:"setDataTransition",value:function(){for(var t=this.carousel.querySelectorAll("."+f.getCarouselDataClassname()),e=0,n=t.length;e<n;e++)v(t[e].style,a.CAROUSEL_DOM_INFORMATION.CAROUSEL_DATA_CSS);t.length>1&&(2===t.length?0===this.value.idx.current?(u.setTransformPrefix(t[0],"0"),u.setTransformPrefix(t[1],"100%")):(u.setTransformPrefix(t[0],"-100%"),u.setTransformPrefix(t[1],"0")):(u.setTransformPrefix(t[0],"-100%"),u.setTransformPrefix(t[1],"0"),u.setTransformPrefix(t[2],"100%")))}},{key:"setEvent",value:function(){u.isMobile()?(this.carousel.addEventListener("touchstart",this.onStartEvent.bind(this)),document.addEventListener("touchmove",this.onMoveEvent.bind(this)),document.addEventListener("touchend",this.onEndEvent.bind(this))):(this.carousel.addEventListener("mouseover",this.onMouseoverEvent.bind(this)),this.carousel.addEventListener("mouseout",this.onMouseoutEvent.bind(this)),this.carousel.addEventListener("mousedown",this.onStartEvent.bind(this)),document.addEventListener("mousemove",this.onMoveEvent.bind(this)),document.addEventListener("mouseup",this.onEndEvent.bind(this)))}},{key:"prev",value:function(){u.setTransformPrefix(this.carousel,"100%"),setTimeout(function(){f.getIsBounce()&&0===this.value.idx.current||(f.getIsBounce()&&this.value.idx.current===this.value.idx.last||this.carousel.removeChild(this.carousel.lastChild),this.value.idx.current--,this.setIdx(),f.getIsBounce()&&0===this.value.idx.current||this.carousel.insertBefore(this.getDataElement(this.value.idx.before),this.carousel.firstChild),u.setTransitionPrefix(this.carousel,"none"),u.setTransformPrefix(this.carousel,"0"),this.setDataTransition())}.bind(this),1e3*f.getTransitionSeconds()),this.emitter.emit(a.EMITTER_NAME.PREV,this.value.idx.current)}},{key:"next",value:function(){u.setTransformPrefix(this.carousel,"-100%"),setTimeout(function(){f.getIsBounce()&&this.value.idx.current===this.value.idx.last||(f.getIsBounce()&&0===this.value.idx.current||this.carousel.removeChild(this.carousel.firstChild),this.value.idx.current++,this.setIdx(),f.getIsBounce()&&this.value.idx.current===this.value.idx.last||this.carousel.appendChild(this.getDataElement(this.value.idx.after)),u.setTransitionPrefix(this.carousel,"none"),u.setTransformPrefix(this.carousel,"0"),this.setDataTransition())}.bind(this),1e3*f.getTransitionSeconds()),this.emitter.emit(a.EMITTER_NAME.NEXT,this.value.idx.current)}},{key:"onStartEvent",value:function(t){if(t.preventDefault(),!this.state.isOnTouch){if(!this.state.isPossible)return;this.stopRolling(),this.state.isPossible=!1,this.state.isOnTouch=!0;var e=u.getPageXY(t);this.value.x.start=e.x,this.value.y.start=e.y,this.value.time.start=(new Date).getTime(),u.setTransitionPrefix(this.carousel,"none")}}},{key:"onMoveEvent",value:function(t){if(t.preventDefault(),this.state.isOnTouch){var e=u.getPageXY(t);this.value.x.move=e.x,this.value.y.move=e.y;var n=this.value.x.start/this.carousel.offsetWidth*100,i=(this.value.x.move/this.carousel.offsetWidth*100-n)*f.getMoveRange();u.setTransformPrefix(this.carousel,i+"%")}}},{key:"onEndEvent",value:function(t){if(this.state.isOnTouch){this.state.isOnTouch=!1;var e=u.getPageXY(t);this.value.x.end=e.x,this.value.y.end=e.y,this.value.time.end=(new Date).getTime(),this.actionByDirection(),setTimeout(function(){this.state.isPossible=!0,this.startRolling()}.bind(this),1e3*f.getTransitionSeconds())}}},{key:"onMouseoverEvent",value:function(){f.getIsAutoRolling()&&this.state.isOnAutoRolling&&this.stopRolling()}},{key:"onMouseoutEvent",value:function(){f.getIsAutoRolling()&&!this.state.isOnAutoRolling&&this.startRolling()}},{key:"actionByDirection",value:function(){switch(this.getDirection()){case a.DIRECTION.PREV:this.prev();break;case a.DIRECTION.NEXT:this.next();break;case a.DIRECTION.DEFAULT:u.setTransformPrefix(this.carousel,"0")}u.setTransitionPrefix(this.carousel,f.getTransitionSeconds()+"s ease-out","transform")}},{key:"getDirection",value:function(){var t=(Math.abs(this.value.x.end-this.value.x.start)/1e3/((this.value.time.end-this.value.time.start)/1e3)).toFixed(2),e=a.DIRECTION.DEFAULT;return f.getIsAutoRolling()&&this.state.isOnAutoRolling?e=a.DIRECTION.NEXT:(this.value.x.start>this.value.x.end&&t>f.getLimitVelocity()?f.getIsBounce()&&this.value.idx.current===this.value.idx.last||(e=a.DIRECTION.NEXT):this.value.x.start<this.value.x.end&&t>f.getLimitVelocity()&&(f.getIsBounce()&&0===this.value.idx.current||(e=a.DIRECTION.PREV)),e)}},{key:"setIdx",value:function(){this.value.idx.current<0&&(this.value.idx.current=this.value.idx.last),this.value.idx.current>this.value.idx.last&&(this.value.idx.current=0),this.value.idx.before=0===this.value.idx.current?this.value.idx.last:this.value.idx.current-1,this.value.idx.after=this.value.idx.current===this.value.idx.last?0:this.value.idx.current+1}},{key:"startRolling",value:function(){f.getIsAutoRolling()&&(this.state.isOnAutoRolling=!0,this.timer=setInterval(function(){this.actionByDirection()}.bind(this),1e3*f.getRollingSecond()))}},{key:"stopRolling",value:function(){f.getIsAutoRolling()&&(this.state.isOnAutoRolling=!1,clearInterval(this.timer))}}]),t}();!function(){var t={isAutoRolling:!1,isBounce:!1,isPaginate:!0,rollingSecond:2,startIndex:0,transitionSeconds:.2,limitVelocity:.5,moveRange:.3,data:['<div class="a a1">1<a href="#" style="position:absolute;top:10px;left:10px;width:20px;height:20px;background:#f00;"></a></div>','<div class="a a2">2</div>','<div class="a a3">3</div>','<div class="a a4">4</div>','<div class="a a5">5</div>','<div class="a a6">6</div>'],target:document.querySelector(".carousel")},e=new g(t);e.start(),e.emitter.on("prev",function(){console.log("prev")}),e.emitter.on("next",function(){console.log("next")})}()}])});