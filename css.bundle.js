!function(e){var o={};function i(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=o,i.d=function(n,t,e){i.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)i.d(e,o,function(n){return t[n]}.bind(null,o));return e},i.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(t,"a",t),t},i.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},i.p="",i(i.s=9)}([,,,,function(n,t){n.exports=function(e){var a=[];return a.toString=function(){return this.map(function(n){var t=function(n,t){var e=n[1]||"",o=n[3];if(!o)return e;if(t&&"function"==typeof btoa){var i=function(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}(o),r=o.sources.map(function(n){return"/*# sourceURL="+o.sourceRoot+n+" */"});return[e].concat(r).concat([i]).join("\n")}return[e].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t}).join("")},a.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var e={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(e[i]=!0)}for(o=0;o<n.length;o++){var r=n[o];"number"==typeof r[0]&&e[r[0]]||(t&&!r[2]?r[2]=t:t&&(r[2]="("+r[2]+") and ("+t+")"),a.push(r))}},a}},function(n,t,o){var e,i,r,l={},d=(e=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=e.apply(this,arguments)),i}),a=(r={},function(n,t){if("function"==typeof n)return n();if(void 0===r[n]){var e=function(n,t){return t?t.querySelector(n):document.querySelector(n)}.call(this,n,t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}),s=null,p=0,c=[],f=o(13);function h(n,t){for(var e=0;e<n.length;e++){var o=n[e],i=l[o.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](o.parts[r]);for(;r<o.parts.length;r++)i.parts.push(x(o.parts[r],t))}else{var a=[];for(r=0;r<o.parts.length;r++)a.push(x(o.parts[r],t));l[o.id]={id:o.id,refs:1,parts:a}}}}function g(n,t){for(var e=[],o={},i=0;i<n.length;i++){var r=n[i],a=t.base?r[0]+t.base:r[0],s={css:r[1],media:r[2],sourceMap:r[3]};o[a]?o[a].parts.push(s):e.push(o[a]={id:a,parts:[s]})}return e}function u(n,t){var e=a(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=c[c.length-1];if("top"===n.insertAt)o?o.nextSibling?e.insertBefore(t,o.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),c.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=a(n.insertAt.before,e);e.insertBefore(t,i)}}function m(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=c.indexOf(n);0<=t&&c.splice(t,1)}function b(n){var t=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var e=function(){0;return o.nc}();e&&(n.attrs.nonce=e)}return v(t,n.attrs),u(n,t),t}function v(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function x(t,n){var e,o,i,r;if(n.transform&&t.css){if(!(r="function"==typeof n.transform?n.transform(t.css):n.transform.default(t.css)))return function(){};t.css=r}if(n.singleton){var a=p++;e=s=s||b(n),o=k.bind(null,e,a,!1),i=k.bind(null,e,a,!0)}else i=t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var t=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",v(t,n.attrs),u(n,t),t}(n),o=function(n,t,e){var o=e.css,i=e.sourceMap,r=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||r)&&(o=f(o));i&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([o],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,e,n),function(){m(e),e.href&&URL.revokeObjectURL(e.href)}):(e=b(n),o=function(n,t){var e=t.css,o=t.media;o&&n.setAttribute("media",o);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),function(){m(e)});return o(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;o(t=n)}else i()}}n.exports=function(n,a){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(a=a||{}).attrs="object"==typeof a.attrs?a.attrs:{},a.singleton||"boolean"==typeof a.singleton||(a.singleton=d()),a.insertInto||(a.insertInto="head"),a.insertAt||(a.insertAt="bottom");var s=g(n,a);return h(s,a),function(n){for(var t=[],e=0;e<s.length;e++){var o=s[e];(i=l[o.id]).refs--,t.push(i)}n&&h(g(n,a),a);for(e=0;e<t.length;e++){var i;if(0===(i=t[e]).refs){for(var r=0;r<i.parts.length;r++)i.parts[r]();delete l[i.id]}}}};var w,y=(w=[],function(n,t){return w[n]=t,w.filter(Boolean).join("\n")});function k(n,t,e,o){var i=e?"":o.css;if(n.styleSheet)n.styleSheet.cssText=y(t,i);else{var r=document.createTextNode(i),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(r,a[t]):n.appendChild(r)}}},,,,function(n,t,e){"use strict";e.r(t);e(11),e(14),e(16),e(18),e(20),e(22)},,function(n,t,e){var o=e(12);"string"==typeof o&&(o=[[n.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(5)(o,i);o.locals&&(n.exports=o.locals)},function(n,t,e){(n.exports=e(4)(!1)).push([n.i,"@font-face {\n  font-family: 'open sans bold';\n  src: url('assets/open-sans-800.woff') format('woff');\n}\n\nbody {\n\tmargin: 0px;\n\twidth: 100vw;\n\toverflow-x: hidden;\n\t/*default text sans-serif font*/\n\tfont-family: 'Open Sans', sans-serif;\n}\n\np\n{\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.67;\n  letter-spacing: normal;\n  text-align: left;\n  color: #2c2c2c;\n}\n\n\n.huge-first\n    {\n        float: left;\n        font-size: 60px;\n        margin-right: 8px;\n        line-height: 52px;\n        font-family: 'ZCOOL XiaoWei', serif;\n    }\n\n.margin\n{\n  margin: 4vh;\n}\n\n.container{\n\tmargin: 0 15px;\n\t/*to allow fullwidth elements be shown*/\n\t/*overflow: hidden; */\n}\n\n.row{\n\twidth: 100%;\n\tflex-direction: row;\n}\n\n.center{\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.mobile-hidden{\n\tdisplay: none;\n}\n\n.desktop-hidden{\n\tdisplay: block;\n}\n\n.serif {\n\t/*title serif font */\n\tfont-family: 'ZCOOL XiaoWei', serif;\n\tdisplay: none;\n}\n\n.white {\n\tcolor: #fff;\n}\n\n\n.white a {\n\tcolor: #fff;\n\ttext-decoration: none;\n  display: block;\n}\n\n.yellow {\n\tcolor: #dcba7d;\n}\n\n.container a {\n\tcolor: black;\n\ttext-decoration: underline;\n\ttext-decoration-color: #dcba7d;\n\ttransition: all .3s ease-in-out;\n}\n\n.container a:hover {\n\tcolor: white;\n\tbackground: #dcba7d;\n}\n\n.icon > a:hover, .footer-icon > a:hover{\n\tbackground: none;\n}\n\n.header{\n\twidth: 100vw;\n\theight: 100vh;\n\toverflow: hidden;\n\tbackground: url(assets/images/header-thumbnail-portrait.jpg) no-repeat center center;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n\n  /*IE compatibility*/\n  filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='assets/images/header-image-v4.jpg', sizingMethod='scale');\n\t-ms-filter: \"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='myBackground.jpg', sizingMethod='scale')\";\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tposition: relative;\n}\n\n#header-video {\n  position: absolute;\n  left: 0;\n  top: 0;\n  min-width: 100%;\n  min-height: 100%;\n  z-index: 0;\n}\n\n#header-caption {\n  padding: 10px 0;\n  margin: 0 50px;\n}\n\n.header-container{\n\tmargin: 0 8%;\n\twidth: auto;\n\theight: auto;\n\tz-index: 1;\n\tpadding-bottom: 20vh;\n}\n\n.header-title img{\n\twidth: 85vw;\n}\n\n.header-intro{\n\tmargin-top: 2vh;\n\tfont-size: 0.8em;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  letter-spacing: normal;\n  text-align: left;\n  color: #dcba7d;\n}\n\n.header-indent{\n\tmargin-left: 35px;\n}\n\n.header-button button\n{\n\tbackground-color: #dcba7d;\n\tfont-size: 1em;\n\tborder-color: #dcba7d;\n\tcolor: #000000;\n\tborder-radius: 1vh;\n\tpadding: 1vh 5vw;\n\ttransition: all .3s ease-in-out;\n\tcursor: pointer;\n\tmargin-top: 1vh;\n}\n\n.header-button\n{\n\tmargin-top: 2vh;\n}\n\n.nav {\n\twidth: 100vw;\n\tbox-sizing: border-box;\n\tpadding: 0 10px;\n\theight: 35px;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tbackground-color: #1d1d1d;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tz-index: 999;\n}\n\n.nav-left, .nav-right{\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-around;\n\tfont-size: 15px;\n\tline-height: 12px;\n  position: relative;\n}\n\n.country-list\n{\n  display: none;\n  position: absolute;\n  height: 100vh;\n  width: 100vw;\n  top: 24px;\n  right: -70vw;\n  background-color: #dcba7d;\n\n  color: #3b3b3b;\n  display: none;\n  font-family: 'open sans bold';\n  text-transform: uppercase;\n  font-size: 2vh;\n  text-align: left;\n  padding: 3vh 15vw;\n  box-sizing: border-box;\n\n}\n\n.country-list li\n{\n  margin: 4vh 0;\n  list-style: none;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.country-list li a\n{\n  color: #3b3b3b;\n  text-decoration: none;\n}\n\n.country-list .active\n{\n  color: #9c5e18;\n}\n\n#dropdownctn\n{\n  position: absolute;\n  height: 100vh;\n  width: 100vw;\n  top: 35px;\n  right: 0;\n  box-sizing: border-box;\n  display: none;\n\n  background-color: #dcba7d;\n  margin: 0 -11px 0 0;\n  padding: 8vh 10vw;\n\n  font-family: open sans bold;\n  text-transform: uppercase;\n  color: #3b3b3b;\n  line-height: 1.25;\n}\n\n#dropdownctn li\n{\npadding: 0;\nlist-style: none;\nmargin: 0 0 7vh 0;\n}\n\n#dropdownctn li img, #dropdownctn li form\n{\nmargin-top: 2vh;\ndisplay: block;\n}\n\n#dropdownctn input[type=\"email\"]{\ndisplay: inherit;\nbackground-color: #eaeaea;\nborder: none;\nz-index: 1000;\n\nwidth: 100%;\nheight: 5vh;\npadding: 0 1vw;\nline-height: 25px;\nmargin-bottom: 1vh;\nbox-sizing: border-box;\n}\n\n#dropdownctn button{\n\ncolor: #dcba7d;\nfont-weight: bold;\nletter-spacing: 2px;\ntext-transform: uppercase;\nborder: solid 2px #3b3b3b;\nbackground-color: #3b3b3b;\nz-index: 1000;\ncursor: pointer;\n\nwidth: 100%;\npadding: 1.8vh 0;\n}\n\n#dropdownctn #submit-message{\ndisplay: inherit;\nfont-size: 10px;\ncolor: red;\n}\n\n#dropdownctn .menu-logo\n{\npadding: 0;\n}\n\n#dropdownctn .menu-logo li\n{\ndisplay: inline-block;\nmargin: 0 3vw 0 0;\n}\n\n.num\n{\n  background-color: #fc7a00 !important;\n  color: white !important;\n  font-style: normal !important;\n  border-radius: 15px;\n  padding: 0.5px 6px;\n  font-family: open sans bold;\n}\n\n.icon {\n\twidth: 35px;\n\theight: 100%;\n\tmax-height: 35px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbox-sizing: border-box;\n\tborder-left: 1px solid #dcba7d;\n\tcursor: pointer;\n}\n\n.nav-right:last-child{\n\tborder-right: 1px solid #dcba7d;\n}\n\n.icon:hover{\n\tbackground: #fff;\n}\n\n.pangolin-logo {\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n  object-fit: contain;\n}\n\n/*content styles*/\n.chapter-anchor\n{\n  margin-top: 8vh;\n}\n\n.chapter-title{\n\ttext-align: center;\n  width: 100%;\n  position: relative;\n}\n\n.chapter-title h3{\n\tfont-family: 'ZCOOL XiaoWei', serif;\n\tfont-size: 25px;\n\tcolor: #3b3b3b;\n\ttext-align: center;\n\tpadding-bottom: 1vh;\n\tborder-bottom: #dcba7d 1px solid;\n\tfont-style: 100;\n}\n\n.chapter-title h3 span{\n\tdisplay: block;\n\tfont-family: open sans bold;\n  font-size: 30px;\n  font-weight: 900;\n  line-height: 1.37;\n  text-align: center;\n  color: #dcba7d;\n\ttext-transform: uppercase;\n}\n\n.byline{\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-transform: uppercase;\n\tfont-size: 10px;\n\tcolor: #dcba7d;\n}\n\n.bookmark{\n  width: 8%;\n\tdisplay: block;\n\talign-items: center;\n  margin: 0 46%;\n}\n\n.footer{\n\theight: auto;\n\tmin-height: 250px;\n\tmargin-bottom: 50px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-end;\n\talign-items: flex-end;\n\tfont-size: 10px;\n\tcolor: #220f07;\n\ttext-align: right;\n}\n\n.pangolin-logo-footer {\n  width: 68.6px;\n  height: 75px;\n  object-fit: contain;\n}\n\n.footer-icon {\n\twidth: 30px;\n\theight: 100%;\n\tmax-height: 23px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbox-sizing: border-box;\n\tcursor: pointer;\n}\n\n.footer-icons{\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\talign-items: center;\n}\n\n.article-image{\n  margin-top: 5vh;\n\twidth: 100%;\n\theight: auto;\n}\n\n.article-image-v{\n  margin-top: 5vh;\n  margin-left: 5px;\n  margin-right: 5px;\n\twidth: 50%;\n\theight: auto;\n}\n/*content styles*/\n\n/*component*/\n\n.quote{\n\tposition: relative;\n\ttop: 0;\n\tleft: 0;\n\twidth: 70%;\n  margin: 0 15%;\n\tpadding: 0 0 10px 0;\n\tborder-bottom: 1px solid #dcba7d;\n\tbox-sizing: border-box;\n  font-family: 'ZCOOL XiaoWei', serif;\n  font-size: 28px;\n  font-weight: normal;\n  line-height: 1.2;\n  color: #9c5e18;\n}\n\n.caption{\n  font-size: 13px;\n  font-weight: 300;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.3;\n  color: #000000;\n  border-bottom: 1px solid #dcba7d;\n  margin: 10px 0 5vh 0;\n  padding-bottom: 10px;\n}\n\n.caption span{\n  font-style: italic;\n  color: #5e5e5e;\n}\n\n.img-cluster\n{\n  display: block;\n}\n\n.float-left\n{\n  width: 100%;\n}\n\n.float-right\n{\n  width: 100%;\n}\n\n/*component*/\n\n#geo-map-container{\n\twidth: 100%;\n\theight: auto;\n\tbackground: #fff;\n\toverflow: hidden;\n\tmargin: 15px 0;\n}\n\n#geo-map{\n\twidth: 100%;\n}\n\n.vis-title {\n  font: 16px 'Open Sans';\n  font-weight: bold;\n  fill: white;\n}\n\n.seizure-total{\n\tfont: 4em 'Open Sans';\n  font-weight: bold;\n  fill: white;\n}\n\n.legend-text{\n\tfill: white;\n\tfont-family: 'Open Sans', sans-serif;\n\tfont-size: 14px;\n}\n\n.circle-hover {\n  stroke: #000;\n  stroke-width: 1px;\n}\n\n.area {\n  fill: steelblue;\n  fill-opacity: 0.7;\n}\n\n.axis path,\n.axis line {\n  fill: none;\n  stroke: #000;\n  shape-rendering: crispEdges;\n}\n\n.brush .extent {\n  stroke: #fff;\n  fill: #000;\n  fill-opacity: .25;\n  shape-rendering: crispEdges;\n}\n\n.bartip{\n  position: absolute;\n  text-align: center;\n  max-width: 70px;\n  max-height: 30px;\n  padding: 8px;\n  border: none;\n  border-radius : 8px;\n  margin-top: -30px;\n  font: 10px sans-serif;\n  background: black;\n  color: white;\n  pointer-events: none;\n}\n\ndiv.d3-tooltip{\n\tposition: absolute;\n  padding: 10px 15px;\n  font: 14px 'Open Sans', sans-serif;\n  background: rgba(0, 0, 0, 0.6);\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  pointer-events: none;\n}\n\ndiv.d3-tooltip span{\n  color: #dcba7d;\n}\n\n.timeline .axis .tick:hover{\n\tcursor: pointer;\n\tfill: #dcba7d;\n}\n\n.timeline .axis .tick:hover text{\n\tfill: #dcba7d;\n}\n\n.credits\n{\n  margin-top: 10vh;\n  text-align: center;\n  border-top: #dcba7d solid 1px;\n  padding-top: 5vh;\n}\n\n.credits h2\n{\n  font-family: Open Sans bold;\n\nfont-weight: 800;\nfont-style: normal;\nfont-stretch: normal;\nline-height: 1.37;\nletter-spacing: normal;\ntext-align: center;\ncolor: #dcba7d;\ntext-transform: uppercase;\n}\n\n.credits h3\n{\n  font-family: Open Sans bold;\n  text-transform: uppercase;\n  font-weight: 800;\n  line-height: 1;\n  font-size: 15px;\n  margin-bottom: 0;\n}\n\n.credits li\n{\n  font-size: 13px;\n}\n\n.credits li\n{\n    list-style: none;\n}\n\n.credits ul\n{\n    padding: 0;\n    margin-bottom: 3.5vh;\n    margin-top: 5px;\n}\n\n.partner-logo\n{\n  padding: 0;\n  text-align: center;\n}\n\n.partner-logo .top-logo\n{\n  margin: 1vh 0.7vw;\n  width: 14%;\n}\n\n.partner-logo .bottom-logo\n{\n  margin: 1vh 0.35vw;\n  width: 12.5%;\n}\n\n.show\n{\n  display: block !important;\n}\n",""])},function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var i=t.protocol+"//"+t.host,r=i+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var e,o=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?n:(e=0===o.indexOf("//")?o:0===o.indexOf("/")?i+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(e)+")")})}},function(n,t,e){var o=e(15);"string"==typeof o&&(o=[[n.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(5)(o,i);o.locals&&(n.exports=o.locals)},function(n,t,e){(n.exports=e(4)(!1)).push([n.i,"@media only screen and (min-device-width: 480px) {\n\t.container{\n\t\tmargin: 0 25%;\n\t}\n\n\t.mobile-hidden{\n\t\tdisplay: block;\n\t}\n\n\t.desktop-hidden{\n\t\tdisplay: none;\n\t}\n\n  .header {\n    background-image: url('assets/images/header-image-desktop.jpg');\n  }\n\n  .header-container{\n\t\tmargin: 5% 0 0 50%;\n\t}\n\n\t.header-title {\n\tpadding-left: 0;\n}\n\n.header-title img {\n\twidth: 40vw;\n}\n\n\t.header-intro{\n\t\tmargin-bottom: 2vh;\n\t\tfont-size: 1vw;\n\t\twidth: 55%;\n\n\t}\n\n\t.header-indent{\n\t\tmargin-left: 5vw;\n\t}\n\n\t.header-button button\n\t{\n\t\tbackground-color: #dcba7d;\n\t\tfont-size: 1.2em;\n\t\tborder-radius: 1vh;\n\t\tpadding: 1vh 1vw;\n\t\ttransition: all .3s ease-in-out;\n\t\tmargin-top: 0;\n\t}\n\n\t.header-button\n\t{\n\t\tmargin-top: 2.5vh;\n\t}\n\n\t.nav {\n\t\theight: 40px;\n\t\tpadding: 0 30px;\n\t}\n\n\t.country-list\n\t{\n\t\tcolor: gray;\n\t\tdisplay: none;\n\t\tfont-family: 'open sans bold';\n\t\ttext-transform: uppercase;\n\t\tfont-size: 0.8vw;\n\n\t\tposition: relative;\n\t  height: auto;\n\t  width: auto;\n\t  background-color: transparent;\n\t\ttop: auto;\n\t\tright: auto;\n\t\tpadding: 0 2vw;\n\t}\n\n\t.country-list li\n\t{\n\t\tdisplay: inline-block;\n\t\tmargin: 0 0.5vw;\n\t}\n\n\t.country-list li a\n\t{\n\t\tcolor: gray;\n\t\ttext-decoration: none;\n\t}\n\n\t.country-list .active\n\t{\n\t\tcolor: #ffffff;\n\t}\n\n\t#dropdownctn\n\t{\n\t\twidth: 20vw;\n\t\ttop: 40px;\n\t\tmargin: 0 -30px 0 0;\n\t\tpadding: 5vh 3vw;\n\t}\n\n#dropdownctn li\n{\n\tmargin: 5vh 0;\n}\n\n#dropdownctn li img, #dropdownctn li form\n{\n\tmargin-top: 1vh;\n}\n\n#dropdownctn .menu-logo li\n{\n\tmargin: 0 1.5vw 0 0;\n}\n\n\n\t#progress-div{\n    top: 40px !important;\n  }\n\n\t.chapter-title{\n\t\ttext-align: center;\n\t}\n\n\t.bookmark{\n\t\tposition: absolute;\n\t\tright: 0;\n\t\tbottom: 1vh;\n\t\twidth: 20px;\n\t\theight: 30px;\n\t\tmargin: 0;\n\t}\n\n\t.img-cluster\n\t{\n\tposition: relative;\n\twidth: 135%;\n\tright: 15%;\n\t}\n\n\t.float-left\n\t{\n\tmargin-bottom: 10px;\n\twidth: 60%;\n\t}\n\n\t.float-right\n\t{\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\twidth: 38.5%\n\n\t}\n\n  .footer{\n  \tflex-direction: row;\n  \tjustify-content: space-between;\n  \talign-items: flex-end;\n  }\n\n  .quote-para{\n  \tposition: relative;\n  \twidth: 60%;\n  }\n\n  .quote-para .quote{\n\t\t  margin:0 40px;\n  \tposition: absolute;\n  \ttop: 0;\n  \tleft: 100%;\n  }\n\n  #geo-map-container{\n  \twidth: 70vw;\n\t\tmargin: 15px -10vw;\n\t}\n\n\t.credits\n\t{\n\t\tmargin-top: 10vh;\n\t\ttext-align: center;\n\t\tborder-top: #dcba7d solid 1px;\n\t\tpadding-top: 5vh;\n\t}\n\n\t.credits h2\n\t{\n\t\tfont-family: Open Sans bold;\n\n  font-weight: 800;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.37;\n  letter-spacing: normal;\n  text-align: center;\n  color: #dcba7d;\n\ttext-transform: uppercase;\n\t}\n\n\t.credits h3\n\t{\n\t\tfont-family: Open Sans bold;\n\t\ttext-transform: uppercase;\n  \tfont-weight: 800;\n\t\tline-height: 1;\n\t\tfont-size: 15px;\n\t\tmargin-bottom: 0;\n\t}\n\n\t.credits li\n\t{\n\t\tfont-size: 13px;\n\t}\n\n\t.names {\n  display: grid;\n  grid-template-columns: 33.33% 33.33% 33.33%;\n  grid-template-rows: 100%;\n\n\twidth: 70vw;\n\tmargin: 0 0 0 -10vw;\n\t}\n\n\t.names .col\n\t{\n\t\ttext-align: center;\n\n\t}\n\n\t.credits li\n\t{\n\t\t\tlist-style: none;\n\t}\n\n\n\t.credits ul\n\t{\n\t\t\tpadding: 0;\n\t\t\tmargin-bottom: 3.5vh;\n\t\t\tmargin-top: 5px;\n\t}\n\n\t.partner-logo\n\t{\n\t  padding: 0;\n\t}\n\n\t.partner-logo .top-logo\n\t{\n\t  margin: 1vh 0.5vw;\n\t  width: 13%;\n\t}\n\n\t.partner-logo .bottom-logo\n\t{\n\t  margin: 1vh 0.38vw;\n\t  width: 11%;\n\t}\n\n}\n",""])},function(n,t,e){var o=e(17);"string"==typeof o&&(o=[[n.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(5)(o,i);o.locals&&(n.exports=o.locals)},function(n,t,e){(n.exports=e(4)(!1)).push([n.i,".routes-map-container{\n\t/*1466 : 1080*/\n\twidth: 100vw;\n\theight: 73.67vw;\n\tbackground-size: cover;\n\tposition: relative;\n}\n\n.routes-map-svg, .routes-map-bg{\n\twidth: 100%;\n}\n\n.routes-map-svg{\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\tz-index: 1;\n}\n\n.routes-map-bg{\n\tposition: absolute;\n\tdisplay: block;\n\theight: auto;\n\tleft: 0;\n\ttop: 0;\n}\n\n.routes-map-para{\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tbox-sizing: border-box;\n\twidth: 100vw;\n\theight: 100vh;\n\n\tpadding-left: 10vw;\n\tpadding-right: 10vw;\n\n\tmargin-left: -15px;\n\n}\n\n.routes-map-para-icon{\n\twidth: 40vw\n}\n\n.routes-map-para p{\n\tpadding: 8vw 5vw;\n\tborder: 1px solid #ccc;\n\tbackground: rgba(255, 255, 255, 0.85);\n\tz-index: 2;\n}\n\n.routes-map-static{\n\twidth: 100vw;\n\tmargin: 0 -15px;\n\theight: auto;\n}\n\n.routes-map-static img{\n\twidth: 100%;\n}\n\n.routes-map-static-caption{\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tbox-sizing: border-box;\n\twidth: 100vw;\n\theight: 100vh;\n\n\tpadding-left: 10vw;\n\tpadding-right: 10vw;\n\n\tmargin-left: -15px;\n}\n\n.routes-map-static-caption p{\n\tpadding: 8vw 5vw;\n\tborder: 1px solid #ccc;\n\tbackground: rgba(255, 255, 255, 0.85);\n\tz-index: 2;\n}\n\n.routes-map-para b{\n\ttext-transform: uppercase;\n\tcolor: #9c5e18;\n\tfont-family: open sans bold;\n\tline-height: 1.2;\n\tfont-size: 20px;\n}\n\n.routes-map-container-m{\n\t/*750 : 1334*/\n\twidth: 100vw;\n\theight: 177.87vw;\n\tbackground-size: cover;\n\tposition: relative;\n\tmargin: 0 -15px;\n\toverflow: hidden;\n}\n\n.routes-map-bg-m{\n\twidth: 100%;\n\tposition: absolute;\n\tdisplay: block;\n\theight: auto;\n\tleft: 0;\n\ttop: 0;\n}\n\n/*specific cases*/\n.routes-map-mobile-hidden{\n\tdisplay: none;\n}\n\n/* Desktop */\n@media only screen and (min-device-width: 480px) {\n\t.routes-map-container{\n\t\t/*1466 : 1080*/\n\t\twidth: 75vw;\n\t\theight: 55.25vw;\n\t\tmargin: 0 0 0 -25vw !important;\n\t}\n\n\t.routes-map-para-static{\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tbox-sizing: border-box;\n\t\twidth: 100vw;\n\t\theight: 100vh;\n\n\t\tpadding-left: 80vw;\n\t\tpadding-right: 5vw;\n\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tz-index: 0;\n\t}\n\n.routes-map-para-static p\n\t{\n\t\tborder-bottom: 1px solid #dcba7d;\n\t\tpadding-bottom: 2vh;\n\t\tfont-size: 16px;\n\t\tline-height: 1.5;\n\t}\n\n\t.routes-map-para{\n\t\tdisplay: block;\n\t\tpadding-left: 80vw;\n\t\tpadding-right: 5vw;\n\t\tmargin: 0 0 0 -25vw !important;\n\t}\n\n\t.routes-map-para-icon{\n\t\twidth: 5vw;\n\t}\n\n\t.routes-map-para p{\n\t\tpadding: 0 0 2vh 0;\n\t\tborder-bottom: 1px solid #dcba7d;\n\t\tborder-top: none;\n\t\tborder-right: none;\n\t\tborder-left: none;\n\t\tbackground: none;\n\t\tfont-size: 16px;\n\t\tline-height: 1.5;\n\t}\n\n\t.routes-map-para p b{\n\t\tfont-family: open sans bold;\n\t\ttext-transform: uppercase;\n\t}\n\n\t.routes-map-para h2, .routes-map-para-static h2{\n\t\ttext-transform: uppercase;\n\t\tcolor: #9c5e18;\n\t\tfont-family: open sans bold;\n\t\tline-height: 1.2;\n\t\tfont-size: 22px;\n\t}\n\n\t.routes-map-static{\n\t\tmargin: 0 -25vw;\n\t}\n\n\t.routes-map-static-caption{\n\t\tdisplay: block;\n\t\theight: auto;\n\t\tmargin: 0 -25vw;\n\t}\n\n\t.routes-map-static-caption p{\n\t\tpadding: 10px 0;\n\t\tmargin: 0;\n\t\tcolor: #3b3b3b;\n\t\tbackground: none;\n\t\tborder-top: none;\n\t\tborder-right: none;\n\t\tborder-left: none;\n  \tborder-bottom: 1px solid #dcba7d;\n\n\t}\n\n\t.scrollmagic-pin-spacer{\n\t\tmargin: 0 !important;\n\t}\n\n\t#indonesia-text-mobile, #nepal-text-mobile, .routes-map-desktop-hidden{\n\t\tdisplay: none;\n\t}\n}\n",""])},function(n,t,e){var o=e(19);"string"==typeof o&&(o=[[n.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(5)(o,i);o.locals&&(n.exports=o.locals)},function(n,t,e){(n.exports=e(4)(!1)).push([n.i,"/* Progress Bar */\n#progress-div{\n    position:fixed;\n    width:100%;\n    height:3.5px;\n    background-color: #dcba7d;\n    top:35px;\n    left:0px;\n    z-index: 999;\n}\n#progress-bar{\n    position: absolute;\n    float:left;\n    height:100%;\n    background-color: #fc7a00;\n    -webkit-transition: width 0.3s; /* Safari */\n    transition: width 0.3s;\n}\n#progress-div:hover, #progress-bar:hover{\n    cursor: pointer;\n}\n/* Progress Bar */\n",""])},function(n,t,e){var o=e(21);"string"==typeof o&&(o=[[n.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(5)(o,i);o.locals&&(n.exports=o.locals)},function(n,t,e){(n.exports=e(4)(!1)).push([n.i,'#overlay{\n\tdisplay: none;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100vw;\n\theight: 100vh;\n\tz-index: 999;\n\tbackground: rgba(0, 0, 0, 0.4);\n\toverflow: hidden;\n}\n\n#overlay form {\n\tdisplay: inherit;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\theight: auto;\n\tbackground-color: #fff;\n\n\twidth: 80vw;\n\tpadding: 10vh 5vw;\n}\n\n#overlay input[type="email"]{\n\tdisplay: inherit;\n\tbackground-color: #eaeaea;\n\tborder: none;\n\tz-index: 1000;\n\n\twidth: 100%;\n\theight: 5vh;\n\tpadding: 0 3vw;\n\tline-height: 25px;\n\tmargin-bottom: 1vh;\n\tbox-sizing: border-box;\n}\n\n#overlay button{\n\n\tcolor: #fff;\n\tfont-weight: bold;\n\tletter-spacing: 3.8px;\n\ttext-transform: uppercase;\n\tborder: solid 1px #3b3b3b;\n  background-color: #3b3b3b;\n\tz-index: 1000;\n\tcursor: pointer;\n\n\twidth: 100%;\n\tpadding: 1.8vh 0;\n}\n\n#submit-message{\n\tdisplay: inherit;\n\tfont-size: 10px;\n\tcolor: red;\n}\n\n/* Desktop */\n@media only screen and (min-device-width: 480px) {\n\n\t#overlay form {\n\n\t\twidth: 40vw;\n\t\tpadding: 8vh 4.5vw;\n\t\tbox-sizing: border-box;\n\t}\n\n\t#overlay input[type="email"]{\n\t\twidth: 80%;\n\t\theight: 5vh;\n\t\tpadding: 0 1vw;\n\t\tmax-width: 550px;\n\t\tline-height: 25px;\n\n\t}\n\n\t#overlay button{\n\t\twidth: auto;\n\t\tpadding: 2vh 2.5vw;\n\t\tmargin: 20px;\n\t}\n\n}\n',""])},function(n,t,e){var o=e(23);"string"==typeof o&&(o=[[n.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(5)(o,i);o.locals&&(n.exports=o.locals)},function(n,t,e){(n.exports=e(4)(!1)).push([n.i,"/* Style the Image Used to Trigger the Modal */\n.modal-image {\n  border-radius: 5px;\n  cursor: pointer;\n  transition: 0.3s;\n}\n\n.modal-image:hover {opacity: 0.7;}\n\n/* The Modal (background) */\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  padding-top: 100px; /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0,0,0); /* Fallback color */\n  background-color: rgba(0,0,0,0.9); /* Black w/ opacity */\n}\n\n/* Modal Content (Image) */\n.modal-content {\n  margin: auto;\n  display: block;\n  max-width: 90vw;\n  max-height: 80vh;\n  min-height: 80vh;\n}\n\n/* Add Animation - Zoom in the Modal */\n.modal-content {\n  animation-name: zoom;\n  animation-duration: 0.6s;\n}\n\n@keyframes zoom {\n  from {transform:scale(0)}\n  to {transform:scale(1)}\n}\n\n/* The Close Button */\n.close {\n  position: absolute;\n  top: 50px;\n  right: 50px;\n  color: #f1f1f1;\n  font-size: 40px;\n  font-weight: bold;\n  transition: 0.3s;\n}\n\n.close:hover,\n.close:focus {\n  color: #bbb;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n/* 100% Image Width on Smaller Screens */\n@media only screen and (max-width: 700px){\n  .modal-content {\n    width: 100%;\n  }\n}\n",""])}]);