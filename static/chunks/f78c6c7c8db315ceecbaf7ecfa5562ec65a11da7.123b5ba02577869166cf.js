(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"20a2":function(t,r,e){t.exports=e("nOHt")},Ff2n:function(t,r,e){"use strict";function n(t,r){if(null==t)return{};var e,n,o=function(t,r){if(null==t)return{};var e,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||(o[e]=t[e]);return o}(t,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}e.d(r,"a",(function(){return n}))},KQm4:function(t,r,e){"use strict";function n(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function o(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,r){if(t){if("string"===typeof t)return n(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(t,r):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.d(r,"a",(function(){return o}))},NsBw:function(t,r,e){"use strict";e.d(r,"b",(function(){return C})),e.d(r,"a",(function(){return M})),e.d(r,"c",(function(){return J}));var n=e("rePB"),o=function(t,r){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)r.hasOwnProperty(e)&&(t[e]=r[e])})(t,r)};function i(t,r){function e(){this.constructor=t}o(t,r),t.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)}function s(t){return"function"===typeof t}var c=!1,u={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){t&&(new Error).stack;c=t},get useDeprecatedSynchronousErrorHandling(){return c}};function a(t){setTimeout((function(){throw t}),0)}var f={closed:!0,next:function(t){},error:function(t){if(u.useDeprecatedSynchronousErrorHandling)throw t;a(t)},complete:function(){}},l=function(){return Array.isArray||function(t){return t&&"number"===typeof t.length}}();var p=function(){function t(t){return Error.call(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map((function(t,r){return r+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t,this}return t.prototype=Object.create(Error.prototype),t}(),h=function(){function t(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._ctorUnsubscribe=!0,this._unsubscribe=t)}return t.prototype.unsubscribe=function(){var r;if(!this.closed){var e,n=this,o=n._parentOrParents,i=n._ctorUnsubscribe,c=n._unsubscribe,u=n._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,o instanceof t)o.remove(this);else if(null!==o)for(var a=0;a<o.length;++a){o[a].remove(this)}if(s(c)){i&&(this._unsubscribe=void 0);try{c.call(this)}catch(d){r=d instanceof p?b(d.errors):[d]}}if(l(u)){a=-1;for(var f=u.length;++a<f;){var h=u[a];if(null!==(e=h)&&"object"===typeof e)try{h.unsubscribe()}catch(d){r=r||[],d instanceof p?r=r.concat(b(d.errors)):r.push(d)}}}if(r)throw new p(r)}},t.prototype.add=function(r){var e=r;if(!r)return t.EMPTY;switch(typeof r){case"function":e=new t(r);case"object":if(e===this||e.closed||"function"!==typeof e.unsubscribe)return e;if(this.closed)return e.unsubscribe(),e;if(!(e instanceof t)){var n=e;(e=new t)._subscriptions=[n]}break;default:throw new Error("unrecognized teardown "+r+" added to Subscription.")}var o=e._parentOrParents;if(null===o)e._parentOrParents=this;else if(o instanceof t){if(o===this)return e;e._parentOrParents=[o,this]}else{if(-1!==o.indexOf(this))return e;o.push(this)}var i=this._subscriptions;return null===i?this._subscriptions=[e]:i.push(e),e},t.prototype.remove=function(t){var r=this._subscriptions;if(r){var e=r.indexOf(t);-1!==e&&r.splice(e,1)}},t.EMPTY=function(t){return t.closed=!0,t}(new t),t}();function b(t){return t.reduce((function(t,r){return t.concat(r instanceof p?r.errors:r)}),[])}var d=function(){return"function"===typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}(),y=function(t){function r(e,n,o){var i=t.call(this)||this;switch(i.syncErrorValue=null,i.syncErrorThrown=!1,i.syncErrorThrowable=!1,i.isStopped=!1,arguments.length){case 0:i.destination=f;break;case 1:if(!e){i.destination=f;break}if("object"===typeof e){e instanceof r?(i.syncErrorThrowable=e.syncErrorThrowable,i.destination=e,e.add(i)):(i.syncErrorThrowable=!0,i.destination=new v(i,e));break}default:i.syncErrorThrowable=!0,i.destination=new v(i,e,n,o)}return i}return i(r,t),r.prototype[d]=function(){return this},r.create=function(t,e,n){var o=new r(t,e,n);return o.syncErrorThrowable=!1,o},r.prototype.next=function(t){this.isStopped||this._next(t)},r.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},r.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},r.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},r.prototype._next=function(t){this.destination.next(t)},r.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},r.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},r.prototype._unsubscribeAndRecycle=function(){var t=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this},r}(h),v=function(t){function r(r,e,n,o){var i,c=t.call(this)||this;c._parentSubscriber=r;var u=c;return s(e)?i=e:e&&(i=e.next,n=e.error,o=e.complete,e!==f&&(s((u=Object.create(e)).unsubscribe)&&c.add(u.unsubscribe.bind(u)),u.unsubscribe=c.unsubscribe.bind(c))),c._context=u,c._next=i,c._error=n,c._complete=o,c}return i(r,t),r.prototype.next=function(t){if(!this.isStopped&&this._next){var r=this._parentSubscriber;u.useDeprecatedSynchronousErrorHandling&&r.syncErrorThrowable?this.__tryOrSetError(r,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},r.prototype.error=function(t){if(!this.isStopped){var r=this._parentSubscriber,e=u.useDeprecatedSynchronousErrorHandling;if(this._error)e&&r.syncErrorThrowable?(this.__tryOrSetError(r,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(r.syncErrorThrowable)e?(r.syncErrorValue=t,r.syncErrorThrown=!0):a(t),this.unsubscribe();else{if(this.unsubscribe(),e)throw t;a(t)}}},r.prototype.complete=function(){var t=this;if(!this.isStopped){var r=this._parentSubscriber;if(this._complete){var e=function(){return t._complete.call(t._context)};u.useDeprecatedSynchronousErrorHandling&&r.syncErrorThrowable?(this.__tryOrSetError(r,e),this.unsubscribe()):(this.__tryOrUnsub(e),this.unsubscribe())}else this.unsubscribe()}},r.prototype.__tryOrUnsub=function(t,r){try{t.call(this._context,r)}catch(e){if(this.unsubscribe(),u.useDeprecatedSynchronousErrorHandling)throw e;a(e)}},r.prototype.__tryOrSetError=function(t,r,e){if(!u.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{r.call(this._context,e)}catch(n){return u.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=n,t.syncErrorThrown=!0,!0):(a(n),!0)}return!1},r.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},r}(y);var O=function(){return"function"===typeof Symbol&&Symbol.observable||"@@observable"}();function g(t){return t}function m(t){return 0===t.length?g:1===t.length?t[0]:function(r){return t.reduce((function(t,r){return r(t)}),r)}}var w=function(){function t(t){this._isScalar=!1,t&&(this._subscribe=t)}return t.prototype.lift=function(r){var e=new t;return e.source=this,e.operator=r,e},t.prototype.subscribe=function(t,r,e){var n=this.operator,o=function(t,r,e){if(t){if(t instanceof y)return t;if(t[d])return t[d]()}return t||r||e?new y(t,r,e):new y(f)}(t,r,e);if(n?o.add(n.call(o,this.source)):o.add(this.source||u.useDeprecatedSynchronousErrorHandling&&!o.syncErrorThrowable?this._subscribe(o):this._trySubscribe(o)),u.useDeprecatedSynchronousErrorHandling&&o.syncErrorThrowable&&(o.syncErrorThrowable=!1,o.syncErrorThrown))throw o.syncErrorValue;return o},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(r){u.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=r),!function(t){for(;t;){var r=t,e=r.closed,n=r.destination,o=r.isStopped;if(e||o)return!1;t=n&&n instanceof y?n:null}return!0}(t)?console.warn(r):t.error(r)}},t.prototype.forEach=function(t,r){var e=this;return new(r=j(r))((function(r,n){var o;o=e.subscribe((function(r){try{t(r)}catch(e){n(e),o&&o.unsubscribe()}}),n,r)}))},t.prototype._subscribe=function(t){var r=this.source;return r&&r.subscribe(t)},t.prototype[O]=function(){return this},t.prototype.pipe=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return 0===t.length?this:m(t)(this)},t.prototype.toPromise=function(t){var r=this;return new(t=j(t))((function(t,e){var n;r.subscribe((function(t){return n=t}),(function(t){return e(t)}),(function(){return t(n)}))}))},t.create=function(r){return new t(r)},t}();function j(t){if(t||(t=u.Promise||Promise),!t)throw new Error("no Promise impl found");return t}var _=function(){function t(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return t.prototype=Object.create(Error.prototype),t}(),E=function(t){function r(r,e){var n=t.call(this)||this;return n.subject=r,n.subscriber=e,n.closed=!1,n}return i(r,t),r.prototype.unsubscribe=function(){if(!this.closed){this.closed=!0;var t=this.subject,r=t.observers;if(this.subject=null,r&&0!==r.length&&!t.isStopped&&!t.closed){var e=r.indexOf(this.subscriber);-1!==e&&r.splice(e,1)}}},r}(h),S=function(t){function r(r){var e=t.call(this,r)||this;return e.destination=r,e}return i(r,t),r}(y),x=function(t){function r(){var r=t.call(this)||this;return r.observers=[],r.closed=!1,r.isStopped=!1,r.hasError=!1,r.thrownError=null,r}return i(r,t),r.prototype[d]=function(){return new S(this)},r.prototype.lift=function(t){var r=new P(this,this);return r.operator=t,r},r.prototype.next=function(t){if(this.closed)throw new _;if(!this.isStopped)for(var r=this.observers,e=r.length,n=r.slice(),o=0;o<e;o++)n[o].next(t)},r.prototype.error=function(t){if(this.closed)throw new _;this.hasError=!0,this.thrownError=t,this.isStopped=!0;for(var r=this.observers,e=r.length,n=r.slice(),o=0;o<e;o++)n[o].error(t);this.observers.length=0},r.prototype.complete=function(){if(this.closed)throw new _;this.isStopped=!0;for(var t=this.observers,r=t.length,e=t.slice(),n=0;n<r;n++)e[n].complete();this.observers.length=0},r.prototype.unsubscribe=function(){this.isStopped=!0,this.closed=!0,this.observers=null},r.prototype._trySubscribe=function(r){if(this.closed)throw new _;return t.prototype._trySubscribe.call(this,r)},r.prototype._subscribe=function(t){if(this.closed)throw new _;return this.hasError?(t.error(this.thrownError),h.EMPTY):this.isStopped?(t.complete(),h.EMPTY):(this.observers.push(t),new E(this,t))},r.prototype.asObservable=function(){var t=new w;return t.source=this,t},r.create=function(t,r){return new P(t,r)},r}(w),P=function(t){function r(r,e){var n=t.call(this)||this;return n.destination=r,n.source=e,n}return i(r,t),r.prototype.next=function(t){var r=this.destination;r&&r.next&&r.next(t)},r.prototype.error=function(t){var r=this.destination;r&&r.error&&this.destination.error(t)},r.prototype.complete=function(){var t=this.destination;t&&t.complete&&this.destination.complete()},r.prototype._subscribe=function(t){return this.source?this.source.subscribe(t):h.EMPTY},r}(x);function T(t,r){return function(e){return e.lift(new D(t,r))}}var D=function(){function t(t,r){this.predicate=t,this.thisArg=r}return t.prototype.call=function(t,r){return r.subscribe(new k(t,this.predicate,this.thisArg))},t}(),k=function(t){function r(r,e,n){var o=t.call(this,r)||this;return o.predicate=e,o.thisArg=n,o.count=0,o}return i(r,t),r.prototype._next=function(t){var r;try{r=this.predicate.call(this.thisArg,t,this.count++)}catch(e){return void this.destination.error(e)}r&&this.destination.next(t)},r}(y);function N(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function A(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?N(Object(e),!0).forEach((function(r){Object(n.a)(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):N(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}var C={onAlert:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H;return I.asObservable().pipe(T((function(r){return r&&r.id===t})))},success:function(t,r){U(A(A({},r),{},{type:M.Success,message:t}))},error:function(t,r){U(A(A({},r),{},{type:M.Error,message:t}))},info:function(t,r){U(A(A({},r),{},{type:M.Info,message:t}))},warn:function(t,r){U(A(A({},r),{},{type:M.Warning,message:t}))},alert:U,clear:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H;I.next({id:t})}},M={Success:"Success",Error:"Error",Info:"Info",Warning:"Warning"},I=new x,H="default-alert";function U(t){t.id=t.id||H,t.autoClose=void 0===t.autoClose||t.autoClose,I.next(t)}var L={get:function(t){return fetch(t,{method:"GET"}).then(R)},post:function(t,r){var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)};return fetch(t,e).then(R)},put:function(t,r){var e={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)};return fetch(t,e).then(R)},delete:function(t){return fetch(t,{method:"DELETE"}).then(R)}};function R(t){return t.text().then((function(r){var e=r&&JSON.parse(r);if(!t.ok){var n=e&&e.message||t.statusText;return Promise.reject(n)}return e}))}e("KQm4"),e("xROn"),e("csVp");var J={getAll:function(){return L.get(V)},getById:function(t){return L.get("".concat(V,"/").concat(t))},create:function(t){return L.post(V,t)},update:function(t,r){return L.put("".concat(V,"/").concat(t),r)},delete:function(t){return L.delete("".concat(V,"/").concat(t))}},V="".concat("http://localhost:3000/api","/users")},YFqc:function(t,r,e){t.exports=e("cTJO")},cTJO:function(t,r,e){"use strict";var n=e("J4zp"),o=e("284h");r.__esModule=!0,r.default=void 0;var i=o(e("q1tI")),s=e("elyg"),c=e("nOHt"),u=e("vNVm"),a={};function f(t,r,e,n){if(t&&(0,s.isLocalURL)(r)){t.prefetch(r,e,n).catch((function(t){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:t&&t.locale;a[r+"%"+e+(o?"%"+o:"")]=!0}}var l=function(t){var r=!1!==t.prefetch,e=(0,c.useRouter)(),o=e&&e.pathname||"/",l=i.default.useMemo((function(){var r=(0,s.resolveHref)(o,t.href,!0),e=n(r,2),i=e[0],c=e[1];return{href:i,as:t.as?(0,s.resolveHref)(o,t.as):c||i}}),[o,t.href,t.as]),p=l.href,h=l.as,b=t.children,d=t.replace,y=t.shallow,v=t.scroll,O=t.locale;"string"===typeof b&&(b=i.default.createElement("a",null,b));var g=i.Children.only(b),m=g&&"object"===typeof g&&g.ref,w=(0,u.useIntersection)({rootMargin:"200px"}),j=n(w,2),_=j[0],E=j[1],S=i.default.useCallback((function(t){_(t),m&&("function"===typeof m?m(t):"object"===typeof m&&(m.current=t))}),[m,_]);(0,i.useEffect)((function(){var t=E&&r&&(0,s.isLocalURL)(p),n="undefined"!==typeof O?O:e&&e.locale,o=a[p+"%"+h+(n?"%"+n:"")];t&&!o&&f(e,p,h,{locale:n})}),[h,p,E,O,r,e]);var x={ref:S,onClick:function(t){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(t),t.defaultPrevented||function(t,r,e,n,o,i,c,u){("A"!==t.currentTarget.nodeName||!function(t){var r=t.currentTarget.target;return r&&"_self"!==r||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which}(t)&&(0,s.isLocalURL)(e))&&(t.preventDefault(),null==c&&(c=n.indexOf("#")<0),r[o?"replace":"push"](e,n,{shallow:i,locale:u,scroll:c}))}(t,e,p,h,d,y,v,O)},onMouseEnter:function(t){(0,s.isLocalURL)(p)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(t),f(e,p,h,{priority:!0}))}};if(t.passHref||"a"===g.type&&!("href"in g.props)){var P="undefined"!==typeof O?O:e&&e.locale,T=e&&e.isLocaleDomain&&(0,s.getDomainLocale)(h,P,e&&e.locales,e&&e.domainLocales);x.href=T||(0,s.addBasePath)((0,s.addLocale)(h,P,e&&e.defaultLocale))}return i.default.cloneElement(g,x)};r.default=l},csVp:function(t){t.exports=JSON.parse('[{"title":"Mr","firstName":"Amitoj","lastName":"Singh","email":"testhost20@gmail.com","role":"User","password":"123456","id":1,"dateCreated":"2021-09-14T09:45:49.145Z","dateUpdated":"2021-09-14T09:45:49.145Z"}]')},"e+cM":function(t,r,e){"use strict";e.d(r,"a",(function(){return l})),e.d(r,"b",(function(){return v})),e.d(r,"c",(function(){return O})),e.d(r,"d",(function(){return w}));var n=e("nKUr"),o=e("rePB"),i=e("KQm4"),s=e("q1tI"),c=e("20a2"),u=e("NsBw");function a(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?a(Object(e),!0).forEach((function(r){Object(o.a)(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function l(t){var r=t.id,e=t.fade,a=Object(c.useRouter)(),l=Object(s.useState)([]),p=l[0],h=l[1];function b(t){if(e){var r=f(f({},t),{},{fade:!0});h((function(e){return e.map((function(e){return e===t?r:e}))})),setTimeout((function(){h((function(t){return t.filter((function(t){return t!==r}))}))}),250)}else h((function(r){return r.filter((function(r){return r!==t}))}))}function d(t){var r;if(t){var e=["alert","alert-dismissable"],n=(r={},Object(o.a)(r,u.a.Success,"alert-success"),Object(o.a)(r,u.a.Error,"alert-danger"),Object(o.a)(r,u.a.Info,"alert-info"),Object(o.a)(r,u.a.Warning,"alert-warning"),r);return e.push(n[t.type]),t.fade&&e.push("fade"),e.join(" ")}}return Object(s.useEffect)((function(){var t=u.b.onAlert(r).subscribe((function(t){t.message?(h((function(r){return[].concat(Object(i.a)(r),[t])})),t.autoClose&&setTimeout((function(){return b(t)}),3e3)):h((function(t){var r=t.filter((function(t){return t.keepAfterRouteChange}));return r.forEach((function(t){return delete t.keepAfterRouteChange})),r}))})),e=function(){return u.b.clear(r)};return a.events.on("routeChangeStart",e),function(){t.unsubscribe(),a.events.off("routeChangeStart",e)}}),[]),p.length?Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"m-3",children:p.map((function(t,r){return Object(n.jsxs)("div",{className:d(t),children:[Object(n.jsx)("a",{className:"close",onClick:function(){return b(t)},children:"\xd7"}),Object(n.jsx)("span",{dangerouslySetInnerHTML:{__html:t.message}})]},r)}))})}):null}l.defaultProps={id:"default-alert",fade:!0};var p=e("Ff2n"),h=e("YFqc"),b=e.n(h);function d(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function y(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?d(Object(e),!0).forEach((function(r){Object(o.a)(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function v(t){var r=t.href,e=t.children,o=Object(p.a)(t,["href","children"]);return Object(n.jsx)(b.a,{href:r,children:Object(n.jsx)("a",y(y({},o),{},{children:e}))})}function O(){return Object(n.jsx)("nav",{className:"navbar navbar-expand navbar-dark bg-dark",children:Object(n.jsxs)("div",{className:"navbar-nav",children:[Object(n.jsx)("h4",{style:{color:"white",padding:"5px"},children:"Technocodz Next.js CRUD!"}),Object(n.jsx)(w,{href:"/",exact:!0,className:"nav-item nav-link",children:"Home"}),Object(n.jsx)(w,{href:"/users",className:"nav-item nav-link",children:"Users"})]})})}function g(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?g(Object(e),!0).forEach((function(r){Object(o.a)(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):g(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function w(t){var r=t.children,e=t.href,o=t.exact,i=Object(p.a)(t,["children","href","exact"]),s=Object(c.useRouter)().pathname;return(o?s===e:s.startsWith(e))&&(i.className+=" active"),Object(n.jsx)(v,m(m({href:e},i),{},{children:r}))}w.defaultProps={exact:!1}},rePB:function(t,r,e){"use strict";function n(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}e.d(r,"a",(function(){return n}))},vNVm:function(t,r,e){"use strict";var n=e("J4zp");r.__esModule=!0,r.useIntersection=function(t){var r=t.rootMargin,e=t.disabled||!s,u=(0,o.useRef)(),a=(0,o.useState)(!1),f=n(a,2),l=f[0],p=f[1],h=(0,o.useCallback)((function(t){u.current&&(u.current(),u.current=void 0),e||l||t&&t.tagName&&(u.current=function(t,r,e){var n=function(t){var r=t.rootMargin||"",e=c.get(r);if(e)return e;var n=new Map,o=new IntersectionObserver((function(t){t.forEach((function(t){var r=n.get(t.target),e=t.isIntersecting||t.intersectionRatio>0;r&&e&&r(e)}))}),t);return c.set(r,e={id:r,observer:o,elements:n}),e}(e),o=n.id,i=n.observer,s=n.elements;return s.set(t,r),i.observe(t),function(){s.delete(t),i.unobserve(t),0===s.size&&(i.disconnect(),c.delete(o))}}(t,(function(t){return t&&p(t)}),{rootMargin:r}))}),[e,r,l]);return(0,o.useEffect)((function(){if(!s&&!l){var t=(0,i.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,i.cancelIdleCallback)(t)}}}),[l]),[h,l]};var o=e("q1tI"),i=e("0G5g"),s="undefined"!==typeof IntersectionObserver;var c=new Map},xROn:function(t,r){(function(r){t.exports=function(){var t={533:function(){}},e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{}},i=!0;try{t[r](o,o.exports,n),i=!1}finally{i&&delete e[r]}return o.exports}return n.ab=r+"/",n(533)}()}).call(this,"/")}}]);