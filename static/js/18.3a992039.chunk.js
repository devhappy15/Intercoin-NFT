(this["webpackJsonpnft-front"]=this["webpackJsonpnft-front"]||[]).push([[18],{1109:function(e,t,n){"use strict";n.r(t),n.d(t,"PortisConnector",(function(){return c}));var r=n(141),o=n(39);function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u={1:"mainnet",3:"ropsten",4:"rinkeby",5:"goerli",42:"kovan",100:"xdai",30:"orchid",31:"orchidTestnet",99:"core",77:"sokol",61:"classic",8:"ubiq",108:"thundercore",18:"thundercoreTestnet",163:"lightstreams",122:"fuse",15001:"maticTestnet"},c=function(e){var t,r;function c(t){var n,r=t.dAppId,i=t.networks,c=t.config,a=void 0===c?{}:c,f=i.map((function(e){return"number"===typeof e?e:Number(e.chainId)}));return f.every((function(e){return!!u[e]}))||Object(o.a)(!1),(n=e.call(this,{supportedChainIds:f})||this).dAppId=r,n.networks=i,n.config=a,n.handleOnLogout=n.handleOnLogout.bind(s(n)),n.handleOnActiveWalletChanged=n.handleOnActiveWalletChanged.bind(s(n)),n.handleOnError=n.handleOnError.bind(s(n)),n}r=e,(t=c).prototype=Object.create(r.prototype),t.prototype.constructor=t,i(t,r);var a=c.prototype;return a.handleOnLogout=function(){this.emitDeactivate()},a.handleOnActiveWalletChanged=function(e){this.emitUpdate({account:e})},a.handleOnError=function(e){this.emitError(e)},a.activate=function(){try{var e=this,t=function(){return e.portis.onLogout(e.handleOnLogout),e.portis.onActiveWalletChanged(e.handleOnActiveWalletChanged),e.portis.onError(e.handleOnError),Promise.resolve(e.portis.provider.enable().then((function(e){return e[0]}))).then((function(t){return{provider:e.portis.provider,account:t}}))},r=function(){if(!e.portis)return Promise.resolve(n.e(13).then(n.t.bind(null,898,7)).then((function(e){var t;return null!=(t=null==e?void 0:e.default)?t:e}))).then((function(t){e.portis=new t(e.dAppId,"number"===typeof e.networks[0]?u[e.networks[0]]:e.networks[0],e.config)}))}();return Promise.resolve(r&&r.then?r.then(t):t())}catch(o){return Promise.reject(o)}},a.getProvider=function(){try{return Promise.resolve(this.portis.provider)}catch(e){return Promise.reject(e)}},a.getChainId=function(){try{return Promise.resolve(this.portis.provider.send("eth_chainId"))}catch(e){return Promise.reject(e)}},a.getAccount=function(){try{return Promise.resolve(this.portis.provider.send("eth_accounts").then((function(e){return e[0]})))}catch(e){return Promise.reject(e)}},a.deactivate=function(){this.portis.onLogout((function(){})),this.portis.onActiveWalletChanged((function(){})),this.portis.onError((function(){}))},a.changeNetwork=function(e,t){try{var n=this;return"number"===typeof e?(u[e]||Object(o.a)(!1),n.portis.changeNetwork(u[e],t),n.emitUpdate({chainId:e})):(n.portis.changeNetwork(e,t),n.emitUpdate({chainId:Number(e.chainId)})),Promise.resolve()}catch(r){return Promise.reject(r)}},a.close=function(){try{var e=this;return Promise.resolve(e.portis.logout()).then((function(){e.emitDeactivate()}))}catch(t){return Promise.reject(t)}},c}(r.a)},134:function(e,t,n){"use strict";var r,o="object"===typeof Reflect?Reflect:null,i=o&&"function"===typeof o.apply?o.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};r=o&&"function"===typeof o.ownKeys?o.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var s=Number.isNaN||function(e){return e!==e};function u(){u.init.call(this)}e.exports=u,e.exports.once=function(e,t){return new Promise((function(n,r){function o(n){e.removeListener(t,i),r(n)}function i(){"function"===typeof e.removeListener&&e.removeListener("error",o),n([].slice.call(arguments))}y(e,t,i,{once:!0}),"error"!==t&&function(e,t,n){"function"===typeof e.on&&y(e,"error",t,n)}(e,o,{once:!0})}))},u.EventEmitter=u,u.prototype._events=void 0,u.prototype._eventsCount=0,u.prototype._maxListeners=void 0;var c=10;function a(e){if("function"!==typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function f(e){return void 0===e._maxListeners?u.defaultMaxListeners:e._maxListeners}function h(e,t,n,r){var o,i,s,u;if(a(n),void 0===(i=e._events)?(i=e._events=Object.create(null),e._eventsCount=0):(void 0!==i.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),i=e._events),s=i[t]),void 0===s)s=i[t]=n,++e._eventsCount;else if("function"===typeof s?s=i[t]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),(o=f(e))>0&&s.length>o&&!s.warned){s.warned=!0;var c=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");c.name="MaxListenersExceededWarning",c.emitter=e,c.type=t,c.count=s.length,u=c,console&&console.warn&&console.warn(u)}return e}function p(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function v(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},o=p.bind(r);return o.listener=n,r.wrapFn=o,o}function l(e,t,n){var r=e._events;if(void 0===r)return[];var o=r[t];return void 0===o?[]:"function"===typeof o?n?[o.listener||o]:[o]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(o):m(o,o.length)}function d(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"===typeof n)return 1;if(void 0!==n)return n.length}return 0}function m(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}function y(e,t,n,r){if("function"===typeof e.on)r.once?e.once(t,n):e.on(t,n);else{if("function"!==typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function o(i){r.once&&e.removeEventListener(t,o),n(i)}))}}Object.defineProperty(u,"defaultMaxListeners",{enumerable:!0,get:function(){return c},set:function(e){if("number"!==typeof e||e<0||s(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");c=e}}),u.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},u.prototype.setMaxListeners=function(e){if("number"!==typeof e||e<0||s(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},u.prototype.getMaxListeners=function(){return f(this)},u.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,o=this._events;if(void 0!==o)r=r&&void 0===o.error;else if(!r)return!1;if(r){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var u=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw u.context=s,u}var c=o[e];if(void 0===c)return!1;if("function"===typeof c)i(c,this,t);else{var a=c.length,f=m(c,a);for(n=0;n<a;++n)i(f[n],this,t)}return!0},u.prototype.addListener=function(e,t){return h(this,e,t,!1)},u.prototype.on=u.prototype.addListener,u.prototype.prependListener=function(e,t){return h(this,e,t,!0)},u.prototype.once=function(e,t){return a(t),this.on(e,v(this,e,t)),this},u.prototype.prependOnceListener=function(e,t){return a(t),this.prependListener(e,v(this,e,t)),this},u.prototype.removeListener=function(e,t){var n,r,o,i,s;if(a(t),void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0===--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!==typeof n){for(o=-1,i=n.length-1;i>=0;i--)if(n[i]===t||n[i].listener===t){s=n[i].listener,o=i;break}if(o<0)return this;0===o?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,o),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,s||t)}return this},u.prototype.off=u.prototype.removeListener,u.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0===--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var o,i=Object.keys(n);for(r=0;r<i.length;++r)"removeListener"!==(o=i[r])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"===typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},u.prototype.listeners=function(e){return l(this,e,!0)},u.prototype.rawListeners=function(e){return l(this,e,!1)},u.listenerCount=function(e,t){return"function"===typeof e.listenerCount?e.listenerCount(t):d.call(e,t)},u.prototype.listenerCount=d,u.prototype.eventNames=function(){return this._eventsCount>0?r(this._events):[]}},141:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(134),o=n(44);var i=function(e){var t,n;function r(t){var n,r=(void 0===t?{}:t).supportedChainIds;return(n=e.call(this)||this).supportedChainIds=r,n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.emitUpdate=function(e){this.emit(o.a.Update,e)},i.emitError=function(e){this.emit(o.a.Error,e)},i.emitDeactivate=function(){this.emit(o.a.Deactivate)},r}(r.EventEmitter)}}]);
//# sourceMappingURL=18.3a992039.chunk.js.map