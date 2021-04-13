module.exports=function(e){function t(n){if(r[n])return r[n].exports;var u=r[n]={exports:{},id:n,loaded:!1};return e[n].call(u.exports,u,u.exports,t),u.loaded=!0,u.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=r(1);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n(u).default}}),Object.defineProperty(t,"sitemapBuilder",{enumerable:!0,get:function(){return u.sitemapBuilder}}),Object.defineProperty(t,"routesParser",{enumerable:!0,get:function(){return u.routesParser}}),Object.defineProperty(t,"pathsFilter",{enumerable:!0,get:function(){return u.pathsFilter}}),Object.defineProperty(t,"paramsApplier",{enumerable:!0,get:function(){return u.paramsApplier}})},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.pathsSplitter=t.sitemapBuilder=t.paramsApplier=t.pathsFilter=t.routesParser=t.routesCreater=void 0;var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(2);Object.defineProperty(t,"routesCreater",{enumerable:!0,get:function(){return n(a).default}});var o=r(4);Object.defineProperty(t,"routesParser",{enumerable:!0,get:function(){return n(o).default}});var l=r(6);Object.defineProperty(t,"pathsFilter",{enumerable:!0,get:function(){return n(l).default}});var f=r(8);Object.defineProperty(t,"paramsApplier",{enumerable:!0,get:function(){return n(f).default}});var c=r(14);Object.defineProperty(t,"sitemapBuilder",{enumerable:!0,get:function(){return n(c).default}});var s=r(16);Object.defineProperty(t,"pathsSplitter",{enumerable:!0,get:function(){return n(s).default}});var d=r(17),p=n(d),h=r(18),v=n(h),m=r(15),g=n(m),y=n(a),_=n(o),b=n(l),P=n(f),O=n(s),j=n(c),M=function(){function e(t){if(u(this,e),!t)throw new Error("Need pass router in module");var r=(0,y.default)(t);return this.paths=(0,_.default)(r),this}return i(e,[{key:"filterPaths",value:function(e){return this.paths=(0,b.default)(this.paths,e.rules,e.isValid||!1),this}},{key:"applyParams",value:function(e){return this.paths=(0,P.default)(this.paths,e),this}},{key:"build",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.limitCountPaths,n=void 0===r?49999:r;return this.hostname=e,this.splitted=(0,O.default)(this.paths,n),this.sitemaps=this.splitted.map(function(t){return(0,j.default)(e,t)}),this}},{key:"save",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",n=[];if(1===this.sitemaps.length)return p.default.writeFileSync(e,this.sitemaps[0].toString()),this;this.sitemaps.map(function(u,i){var a=e.replace(".xml","-"+i+".xml");p.default.writeFileSync(a,u.toString()),n.push(t.hostname+r+v.default.basename(a))});var u=g.default.buildSitemapIndex({urls:n,hostname:this.hostname});return p.default.writeFileSync(e,u),this}}]),e}();t.default=M},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3),u=function(e){return(0,n.isReactChildren)(e)?e=(0,n.createRoutesFromReactChildren)(e):e&&!Array.isArray(e)&&(e=[e]),e};t.default=u},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.createRoutesFromReactChildren=t.isReactChildren=t.isValidChild=void 0;var u=r(!function(){var e=new Error('Cannot find module "react"');throw e.code="MODULE_NOT_FOUND",e}()),i=n(u),a=function(e){return null===e||i.default.isValidElement(e)},o=function(e){return a(e)||Array.isArray(e)&&e.every(a)},l=function e(t){var r=[],n=function(t){var r=t.type,n=Object.assign({},r.defaultProps,t.props);if(n.children){var u=e(n.children,n);u.length&&(n.childRoutes=u),delete n.children}return n};return i.default.Children.forEach(t,function(e){if(i.default.isValidElement(e))if(e.type.createRouteFromReactElement){var t=e.type.createRouteFromReactElement(e);t&&r.push(t)}else r.push(n(e))}),r};t.isValidChild=a,t.isReactChildren=o,t.createRoutesFromReactChildren=l},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=r(5),i=n(u),a=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=Array.isArray(t);if(!n){var u=(0,i.default)(r,t.path),a=t.childRoutes,o=a&&a.length;if(!o)return[u];var l=e(a,u);return[u].concat(l)}return t.reduce(function(n,u){var a=(0,i.default)(r,t.path),o=e(u,a);return n.concat(o)},[])};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return("/"+e+"/"+t).replace(new RegExp("/+","g"),"/").replace(new RegExp("^.*?|/$","g"),"")}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=r(7),i=n(u);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=(0,i.default)(e,t);return e=n.paths,t=n.rules,e.filter(function(n,u){if(n=n.trim(),!n.length)return!1;var i=e.indexOf(n)===u,a=t.some(function(e){return e.test(n)})===r;return i&&a})}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=Array.isArray(e),n=Array.isArray(t);return r||(e="string"==typeof e?[e]:[]),n||(t="string"==typeof t?[t]:[]),{paths:e,rules:t}}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=r(9),i=n(u),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return!!t[e]};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];return t?e.reduce(function(e,r){return a(r,t)?e.concat((0,i.default)(r,t[r])):e.concat([r])},[]):e}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=r(10),i=n(u);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.map(function(t){return(0,i.default)(e,t)}).reduce(function(e,t){return e.concat(t)},[]).map(function(e){return e=e.replace(/\((.*:.*)\)/g,""),e=e.replace(/(\(|\))/g,"")})}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=r(11),i=n(u);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=Object.keys(t);return(0,i.default)([e],r,t)}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=r(12),i=n(u),a=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!r.length)return t;var u=r.shift(),a=n[u];return t=(0,i.default)(t,u,a),e(t,r,n)};t.default=a},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=r(13),i=n(u);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=new RegExp(":"+t);return r=Array.isArray(r)?r:[r],r.map(function(t){return(0,i.default)(e,n,t)}).reduce(function(e,t){return e.concat(t)})}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return e.map(function(e){return e.replace(t,r)})}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=r(15),i=n(u);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"http://localhost",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return i.default.createSitemap({hostname:e,urls:t.map(function(e){return{url:e}})})}},function(e,t){e.exports=require("sitemap")},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){return e.map(function(r,n){return n%t===0?e.slice(n,n+t):null}).filter(function(e){return e})};t.default=r},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("path")}]);