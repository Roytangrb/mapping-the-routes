!function(t){function n(n){for(var r,i,s=n[0],l=n[1],d=n[2],p=0,u=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&u.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);for(c&&c(n);u.length;)u.shift()();return a.push.apply(a,d||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],r=!0,s=1;s<e.length;s++){var l=e[s];0!==o[l]&&(r=!1)}r&&(a.splice(n--,1),t=i(i.s=e[0]))}return t}var r={},o={0:0},a=[];function i(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=r,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)i.d(e,r,function(n){return t[n]}.bind(null,r));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var c=l;a.push([22,1]),e()}([,,,,,,,,,function(t,n,e){var r=e(10);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(4)(r,o);r.locals&&(t.exports=r.locals)},function(t,n,e){(t.exports=e(3)(!1)).push([t.i,"body {\n\tmargin: 0px;\n\twidth: 100vw;\n\toverflow-x: hidden;\n\t/*default text sans-serif font*/\n\tfont-family: 'Open Sans', sans-serif;\n}\n\n.container{\n\tmargin: 0 15px;\n\t/*to allow fullwidth elements be shown*/\n\t/*overflow: hidden; */\n}\n\n.row{\n\twidth: 100%;\n\tflex-direction: row;\n}\n\n.center{\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.mobile-hidden{\n\tdisplay: none;\n}\n\n.desktop-hidden{\n\tdisplay: block;\n}\n\n.serif {\n\t/*title serif font */\n\tfont-family: 'ZCOOL XiaoWei', serif;\n}\n\n.white {\n\tcolor: #fff;\n}\n\n\n.white a {\n\tcolor: #fff;\n\ttext-decoration: none;\n}\n\n.yellow {\n\tcolor: #dcba7d;\n}\n\na {\n\tcolor: black;\n\ttext-decoration: underline;\n\ttext-decoration-color: #dcba7d;\n\ttransition: all .3s ease-in-out;\n}\n\na:hover {\n\tcolor: white;\n\tbackground: #dcba7d;\n}\n\n.icon > a:hover, .footer-icon > a:hover{\n\tbackground: none;\n}\n\n.header{\n\twidth: 100vw;\n\theight: 100vh;\n\toverflow: hidden;\n\tbackground: url(assets/images/header-thumbnail-portrait.jpg) no-repeat center center fixed;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n\n  /*IE compatibility*/\n  filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='assets/images/header-image-v4.jpg', sizingMethod='scale');\n\t-ms-filter: \"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='myBackground.jpg', sizingMethod='scale')\";\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tposition: relative;\n}\n\n#header-video {\n  position: absolute;\n  left: 0;\n  top: 0;\n  min-width: 100%;\n  min-height: 100%;\n  z-index: 0;\n}\n\n#header-caption {\n  padding: 10px 0;\n  margin: 0 50px;\n}\n\n.header-container{\n\tmargin: 0 8%;\n\twidth: auto;\n\theight: auto;\n\tz-index: 1;\n\tpadding-bottom: 20vh;\n}\n\n.header-title{\n\tfont-size: 3.8em;\n\tfont-family: 'ZCOOL XiaoWei', serif;\n\tcolor: #fff\n}\n\n.header-intro{\n\tmargin-top: 2vh;\n\tfont-size: 0.8em;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  letter-spacing: normal;\n  text-align: left;\n  color: #dcba7d;\n}\n\n.header-indent{\n\tmargin-left: 35px;\n}\n\n.header-button button\n{\n\tbackground-color: #dcba7d;\n\tfont-size: 1em;\n\tborder-color: #dcba7d;\n\tcolor: #000000;\n\tborder-radius: 1vh;\n\tpadding: 1vh 5vw;\n\ttransition: all .3s ease-in-out;\n\tcursor: pointer;\n\tmargin-top: 1vh;\n}\n\n.header-button\n{\n\tmargin-top: 2vh;\n}\n\n.nav {\n\twidth: 100vw;\n\tbox-sizing: border-box;\n\tpadding: 0 10px;\n\theight: 35px;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tbackground-color: #1d1d1d;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tz-index: 999;\n}\n\n.nav-left, .nav-right{\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-around;\n\tfont-size: 15px;\n\tline-height: 12px;\n}\n\n\n.icon {\n\twidth: 35px;\n\theight: 100%;\n\tmax-height: 35px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbox-sizing: border-box;\n\tborder-left: 1px solid #dcba7d;\n\tcursor: pointer;\n}\n\n.nav-right:last-child{\n\tborder-right: 1px solid #dcba7d;\n}\n\n.icon:hover{\n\tbackground: #fff;\n}\n\n.pangolin-logo {\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n  object-fit: contain;\n}\n\n/*content styles*/\n.chapter-title{\n\tfont-family: 'ZCOOL XiaoWei', serif;\n\tfont-size: 20px;\n\tcolor: #3b3b3b;\n\ttext-align: center;\n}\n\n.byline{\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-transform: uppercase;\n\tfont-size: 10px;\n\tcolor: #dcba7d;\n}\n\n.bookmark{\n\tposition: absolute;\n\tright:0;\n\tbottom: 0;\n\twidth: 10px;\n\theight: 15px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-image: url(assets/images/bookmark.svg);\n\tbackground-repeat: no-repeat;\n}\n\n.footer{\n\theight: auto;\n\tmin-height: 250px;\n\tmargin-bottom: 50px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-end;\n\talign-items: flex-end;\n\tfont-size: 10px;\n\tcolor: #220f07;\n\ttext-align: right;\n}\n\n.pangolin-logo-footer {\n  width: 68.6px;\n  height: 75px;\n  object-fit: contain;\n}\n\n.footer-icon {\n\twidth: 30px;\n\theight: 100%;\n\tmax-height: 23px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbox-sizing: border-box;\n\tcursor: pointer;\n}\n\n.footer-icons{\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\talign-items: center;\n}\n\n.article-image{\n\twidth: 100%;\n\theight: auto;\n}\n\n.article-image-v{\n\twidth: 50%;\n\theight: auto;\n}\n/*content styles*/\n\n/*component*/\n.quote{\n\tposition: relative;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\tpadding: 0 10px 10px 10px;\n\tborder-bottom: 1px solid #dcba7d;\n\tbox-sizing: border-box;\n  font-family: 'ZCOOL XiaoWei', serif;\n  font-size: 26px;\n  font-weight: normal;\n  color: #dcba7d;\n}\n\n.caption{\n  font-size: 10px;\n  font-weight: 300;\n  font-style: normal;\n  font-stretch: normal;\n  color: #3b3b3b;\n  border-bottom: 1px solid #dcba7d;\n  margin: 10px 0 0 0;\n  padding-bottom: 10px;\n}\n/*component*/\n\n#geo-map-container{\n\twidth: 100%;\n\theight: auto;\n\tbackground: #fff;\n\toverflow: hidden;\n\tmargin: 15px 0;\n}\n\n#geo-map{\n\twidth: 100%;\n}\n\n\n.vis-title {\n  font: 16px 'Open Sans';\n  font-weight: bold;\n  fill: white;\n}\n\n.seizure-total{\n\tfont: 4em 'Open Sans';\n  font-weight: bold;\n  fill: white;\n}\n\n.legend-text{\n\tfill: white;\n\tfont-family: 'Open Sans', sans-serif;\n\tfont-size: 14px;\n}\n\n.circle-hover {\n  stroke: #000;\n  stroke-width: 1px;\n}\n\n.area {\n  fill: steelblue;\n  fill-opacity: 0.7;\n}\n\n.axis path,\n.axis line {\n  fill: none;\n  stroke: #000;\n  shape-rendering: crispEdges;\n}\n\n.brush .extent {\n  stroke: #fff;\n  fill: #000;\n  fill-opacity: .25;\n  shape-rendering: crispEdges;\n}\n\n.bartip{\n  position: absolute;\n  text-align: center;\n  max-width: 70px;\n  max-height: 30px;\n  padding: 8px;\n  border: none;\n  border-radius : 8px;\n  margin-top: -30px;\n  font: 10px sans-serif;\n  background: black;\n  color: white;\n  pointer-events: none;\n}\n",""])},,function(t,n,e){var r=e(13);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(4)(r,o);r.locals&&(t.exports=r.locals)},function(t,n,e){(t.exports=e(3)(!1)).push([t.i,"@media only screen and (min-device-width: 480px) {\n\t.container{\n\t\tmargin: 0 25%;\n\t}\n\n\t.mobile-hidden{\n\t\tdisplay: block;\n\t}\n\n\t.desktop-hidden{\n\t\tdisplay: none;\n\t}\n\n  .header {\n    background-image: url('assets/images/header-image-desktop.jpg');\n  }\n\n  .header-container{\n\t\tmargin: 5% 0 0 50%;\n\t}\n\n\t.header-title div{\n\t\tfont-size: 7vw;\n\t\tline-height: 0.85;\n\t}\n\n\t.header-intro{\n\t\tmargin-bottom: 2vh;\n\t\tfont-size: 1vw;\n\t\twidth: 55%;\n\n\t}\n\n\t.header-indent{\n\t\tmargin-left: 5vw;\n\t}\n\n\t.header-button button\n\t{\n\t\tbackground-color: #dcba7d;\n\t\tfont-size: 1.2em;\n\t\tborder-radius: 1vh;\n\t\tpadding: 1vh 1vw;\n\t\ttransition: all .3s ease-in-out;\n\t\tmargin-top: 0;\n\t}\n\n\t.header-button\n\t{\n\t\tmargin-top: 4vh;\n\t}\n\n\t.nav {\n\t\theight: 40px;\n\t\tpadding: 0 30px;\n\t}\n\n\t#progress-div{\n    top: 40px !important;\n  }\n\n  .footer{\n  \tflex-direction: row;\n  \tjustify-content: space-between;\n  \talign-items: flex-end;\n  }\n\n  .quote-para{\n  \tposition: relative;\n  \twidth: 60%;\n  }\n\n  .quote{\n  \tposition: absolute;\n  \ttop: 0;\n  \tleft: 100%;\n  }\n}\n",""])},function(t,n,e){var r=e(15);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(4)(r,o);r.locals&&(t.exports=r.locals)},function(t,n,e){(t.exports=e(3)(!1)).push([t.i,".routes-map-container{\n\t/*1466 : 1080*/\n\twidth: 100vw;\n\theight: 73.67vw;\n\tbackground-size: cover;\n\tposition: relative;\n}\n\n.routes-map-svg, .routes-map-bg{\n\twidth: 100%;\n}\n\n.routes-map-svg{\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n}\n\n.routes-map-bg{\n\tposition: absolute;\n\tdisplay: block;\n\theight: auto;\n\tleft: 0;\n\ttop: 0;\n}\n\n.routes-map-para{\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tbox-sizing: border-box;\n\twidth: 100vw;\n\theight: 100vh;\n\n\tpadding-left: 10vw;\n\tpadding-right: 10vw;\n\n\tmargin-left: -15px;\n}\n\n.routes-map-para-icon{\n\twidth: 40vw\n}\n\n.routes-map-para p{\n\tpadding: 8vw 5vw;\n\tborder: 1px solid #ccc;\n\tbackground: rgba(255, 255, 255, 0.85);\n\tz-index: 1;\n}\n\n.routes-map-static{\n\twidth: 100vw;\n\tmargin: 0 -15px;\n\theight: auto;\n}\n\n.routes-map-static img{\n\twidth: 100%;\n}\n\n.routes-map-static-caption{\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tbox-sizing: border-box;\n\twidth: 100vw;\n\theight: 100vh;\n\n\tpadding-left: 10vw;\n\tpadding-right: 10vw;\n\n\tmargin-left: -15px;\n}\n\n.routes-map-static-caption p{\n\tpadding: 8vw 5vw;\n\tborder: 1px solid #ccc;\n\tbackground: rgba(255, 255, 255, 0.85);\n\tz-index: 1;\n}\n\n.routes-map-container-m{\n\t/*750 : 1334*/\n\twidth: 100vw;\n\theight: 177.87vw;\n\tbackground-size: cover;\n\tposition: relative;\n\tmargin: 0 -15px;\n\toverflow: hidden;\n}\n\n.routes-map-bg-m{\n\twidth: 100%;\n\tposition: absolute;\n\tdisplay: block;\n\theight: auto;\n\tleft: 0;\n\ttop: 0;\n}\n\n/* Desktop */\n@media only screen and (min-device-width: 480px) {\n\t.routes-map-container{\n\t\t/*1466 : 1080*/\n\t\twidth: 75vw;\n\t\theight: 55.25vw;\n\t\tmargin: 0 0 0 -25vw !important;\n\t}\n\n\t.routes-map-para{\n\t\tdisplay: block;\n\t\tpadding-left: 80vw;\n\t\tpadding-right: 5vw;\n\t\tmargin: 0 0 0 -25vw !important;\n\t}\n\n\t.routes-map-para-icon{\n\t\twidth: 6vw\n\t}\n\n\t.routes-map-para p{\n\t\tpadding: 0;\n\t\tborder: none;\n\t\tbackground: none;\n\t}\n\n\t.routes-map-static{\n\t\tmargin: 0 -25vw;\n\t}\n\n\t.routes-map-static-caption{\n\t\tdisplay: block;\n\t\theight: auto;\n\t\tmargin: 0 -25vw;\n\t}\n\n\t.routes-map-static-caption p{\n\t\tpadding: 10px 0;\n\t\tmargin: 0;\n\t\tcolor: #3b3b3b;\n\t\tbackground: none;\n\t\tborder-top: none;\n\t\tborder-right: none;\n\t\tborder-left: none;\n  \tborder-bottom: 1px solid #dcba7d;\n\t}\n\n\t.scrollmagic-pin-spacer{\n\t\tmargin: 0 !important;\n\t}\n}\n",""])},function(t,n,e){var r=e(17);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(4)(r,o);r.locals&&(t.exports=r.locals)},function(t,n,e){(t.exports=e(3)(!1)).push([t.i,"/* Progress Bar */\n#progress-div{\n    position:fixed;\n    width:100%;\n    height:3.5px;\n    background-color: #dcba7d;\n    top:35px;\n    left:0px;\n    z-index: 999;\n}\n#progress-bar{\n    position: absolute;\n    float:left;\n    height:100%;\n    background-color: #fc7a00;\n    -webkit-transition: width 0.3s; /* Safari */\n    transition: width 0.3s;\n}\n#progress-div:hover, #progress-bar:hover{\n    cursor: pointer;\n}\n/* Progress Bar */\n",""])},function(t,n,e){var r=e(19);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(4)(r,o);r.locals&&(t.exports=r.locals)},function(t,n,e){(t.exports=e(3)(!1)).push([t.i,'#overlay{\n\tdisplay: none;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100vw;\n\theight: 100vh;\n\tz-index: 999;\n\tbackground: rgba(0, 0, 0, 0.4);\n\toverflow: hidden;\n}\n\n#overlay form {\n\tdisplay: inherit;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 100%;\n\theight: auto;\n}\n\n#overlay input[type="email"]{\n\tdisplay: inherit;\n\twidth: 80%;\n\tmax-width: 300px;\n\tline-height: 25px;\n\tborder-radius: 5px;\n\tz-index: 1000;\n}\n\n#overlay button{\n\tdisplay: inherit;\n\tbackground: #fff;\n\tmargin: 20px; \n\tborder-radius: 5px;\n\tz-index: 1000;\n}\n\n#submit-message{\n\tdisplay: inherit;\n\tfont-size: 10px;\n\tcolor: red;\n}',""])},,,function(t,n,e){"use strict";e.r(n);e(9),e(12),e(14),e(16),e(18);var r=e(0),o=e.n(r),a=(e(6),function(t){return document.querySelector(t)}),i=function(){};i.ctrlHeaderAudio=function(){var t=a("#header-video"),n=new o.a.Controller;new o.a.Scene({triggerElement:a(".header"),triggerHook:"onLeave",duration:a(".header").offsetHeight}).on("end",function(n){"FORWARD"==n.scrollDirection?(console.log("muted"),t.muted=!0):(console.log("unmuted"),t.muted=!1)}).addTo(n);return n},i.initScrollController=function(){var t=a("#progress-bar"),n=document.body,e=n.offsetHeight,r=new o.a.Controller,i=(new TimelineMax).to(t,1,{width:"100%",ease:Linear.easeNone});new o.a.Scene({triggerElement:n,triggerHook:"onLeave",duration:e,tweenChanges:!0}).setTween(i).addTo(r);return r},i.initClickNav=function(){var t=a("#progress-div"),n=(a("#progress-bar"),function(t){var n=document.body.offsetWidth,e=document.body.offsetHeight,r=parseInt(t.pageX);if(r>0){var o=e*(r/n);window.scrollTo({top:o,behavior:"smooth"})}});t.addEventListener("click",n),t.addEventListener("touchend",n)};var s=i,l=function(){};l.initHashController=function(){var t,n=(t=".chapter-anchor",document.querySelectorAll(t)),e=new o.a.Controller;n.forEach(function(t){new o.a.Scene({triggerElement:t,duration:t.offsetHeight}).addTo(e).on("enter leave",function(n){var e=t.id;window.history.pushState(null,null,"#".concat(e))})})};var d=l;var c=function(t){var n=function(t){var n,e=t.elements,r=Object.keys(e).filter(function(t){return"honeypot"!==e[t].name||(n=e[t].value,!1)}).map(function(t){return void 0!==e[t].name?e[t].name:e[t].length>0?e[t].item(0).name:void 0}).filter(function(t,n,e){return e.indexOf(t)==n&&t}),o={};return r.forEach(function(t){var n=e[t];if(o[t]=n.value,n.length){for(var r=[],a=0;a<n.length;a++){var i=n.item(a);(i.checked||i.selected)&&r.push(i.value)}o[t]=r.join(", ")}}),o.progress=window.location.hash,o.url=window.location.href,r=r.concat(["progress","url"]),o.formDataNameOrder=JSON.stringify(r),o.formGoogleSheetName=t.dataset.sheet||"responses",o.formGoogleSend=t.dataset.email||"",{data:o,honeypot:n}}(t),e=document.querySelector("#submit-message"),r=n.data;if(n.honeypot)return e.innerHTML="Spam Detected!",!1;e.innerHTML="Sending...",function(t){for(var n=t.querySelectorAll("button"),e=0;e<n.length;e++)n[e].disabled=!0}(t);var o=t.action,a=new XMLHttpRequest;a.open("POST",o),a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.onreadystatechange=function(){4===a.readyState&&200===a.status&&(t.reset(),e.innerHTML="Your email has been received!")};var i=Object.keys(r).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(r[t])}).join("&");a.send(i)},p={},u={isOverlayShown:!1,isEmailSaved:!1},f=function(t){return document.querySelector(t)};p.initBookmark=function(){var t,n=(t=".bookmark",document.querySelectorAll(t)),e=f("#overlay");n.forEach(function(t){t.addEventListener("click",function(t){e.style.display=u.isOverlayShown?"none":"flex",u.isOverlayShown=!u.isOverlayShown})}),e.addEventListener("click",function(t){e.style.display="none",u.isOverlayShown=!1});var r=f("#submit-reminder"),o=f("input#email"),a=f("#submit-message");o.addEventListener("click",function(t){t.stopPropagation()}),r.addEventListener("click",function(t){if(t.preventDefault(),t.stopPropagation(),a.innerHTML="",e=o.value,/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())&&!u.isEmailSaved){var n=f("#bookmark-req-form");c(n),u.isEmailSaved=!0,o.disabled=!0,r.disabled=!0}else a.innerHTML="Invalid Email!";var e})};var g=p,m=e(2);function h(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=[],r=!0,o=!1,a=void 0;try{for(var i,s=t[Symbol.iterator]();!(r=(i=s.next()).done)&&(e.push(i.value),!n||e.length!==n);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw a}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var v={},b=function(t){return document.querySelector(t)},x=m.k().range([5,25]),w=m.m("#geo-map-container").append("svg").attr("x",0).attr("y",0).attr("viewBox","0 0 960 630").attr("id","geo-map");w.append("rect").attr("width","100%").attr("height","500").attr("fill","#3b3b3b");w.append("clipPath").attr("id","seizure-map-clip").append("rect").attr("width","100%").attr("height","500");var y=w.append("g").attr("clip-path","url(#seizure-map-clip)").attr("class","countries"),k=m.g().scale(160).translate([150,320]),T=m.h().projection(k),E=w.append("text").attr("class","vis-title").attr("transform","translate(650,140)").text("pangolin trafficked").append("tspan").attr("x",0).attr("dy","1.3em").text("(select a time range)"),S=w.append("rect").attr("transform","translate(650,106)").attr("height","5em").attr("fill","red"),M=w.append("text").attr("transform","translate(660,100)").attr("class","seizure-total").text("0"),L=w.append("g").attr("class","timeline"),z=m.m(".container").append("div").attr("class","bartip").style("display","none"),O=w.append("g").attr("transform","translate(780, 450)").attr("id","seizure-map-legend");O.append("circle").attr("x",0).attr("y",0).attr("r",6).attr("fill","rgba(240, 135, 24)").attr("stroke-width","0.5px").attr("stroke","#fff"),O.append("text").attr("x",14).attr("y",6).attr("class","legend-text").text("Current Year");var j=w.append("g").attr("id","seizure-map-play-btn").attr("transform","translate(50, 450)"),H=j.append("path").attr("id","play-pause").attr("transform","translate(-9, -9)").attr("d","M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z").attr("fill","#fff"),C=j.append("path").attr("id","play-cont").attr("transform","translate(-9, -9)").attr("d","M3 22v-20l18 10-18 10z").attr("fill","#fff");function A(t,n){var e=w.selectAll("circle.seizure-bubble").data(t,function(t){return t.id});"2000"==n&&w.selectAll("circle.seizure-bubble").remove(),e.enter().append("circle").attr("class","seizure-bubble").attr("fill","rgba(240, 135, 24, 0.3)").attr("cx",function(t){return k([+t.Longitude,+t.Latitude])[0]}).attr("cy",function(t){return k([+t.Longitude,+t.Latitude])[1]}).attr("r",0).transition().duration(500).attr("r",function(t){return x(+t.ESTNUM)}),e.exit().transition().duration(500).attr("fill","rgba(201, 62, 62, 0.3)")}function I(t,n){var e=[];t.map(function(t){e.indexOf(t.YEAR)<0&&e.push(t.YEAR)});return setInterval(function(){var r=e[n.curr_idx];A(t.filter(function(t){return t.YEAR==r}),r),n.curr_idx=(n.curr_idx+1)%e.length,_(t,r)},1e3)}function _(t,n){E.text("2000 - "+n);var e=t.filter(function(t){return+t.YEAR<=n}).map(function(t){return t.ESTNUM}).reduce(function(t,n){return t+n},0);M.text("".concat(m.f(",")(Math.round(e)))),S.attr("x",M.node().getBBox().x).attr("y",M.node().getBBox().y).attr("width",+M.node().getBBox().width+20)}v.renderMap=function(){Promise.all([m.i("assets/maps/world_countries.json"),m.c("assets/data/valid-seizure-num-date.csv")]).then(function(t){var n=h(t,2),e=n[0],r=n[1],a=m.n("%Y-%m-%d %H:%M:%S"),i=[],s={},l=r.map(function(t,n){return t.TIME=a(t.Date),t.YEAR=t.TIME.getFullYear(),t.ESTNUM=+t.ESTNUM,t.Latitude=+t.Latitude,t.Longitude=+t.Longitude,s[t.TIME]?s[t.TIME]+=t.ESTNUM:s[t.TIME]=t.ESTNUM,t});Object.keys(s).forEach(function(t){i.push({TIME:new Date(t),ESTNUM:s[t]})}),i.sort(function(t,n){return t.TIME-n.TIME}),x.domain(m.e(l,function(t){return+t.ESTNUM})),function(t,n){var e={top:10,right:10,bottom:20,left:15},r=960-e.left-e.right,o=120-e.bottom;L.attr("transform","translate("+e.left+" , 510)");var a={};n.forEach(function(t){var n=t.TIME.getFullYear()+"";a[n]||(a[n]=0),a[n]+=+t.ESTNUM});var i=Object.keys(a).map(function(t){return{TIME:new Date(+t,1,1),TOTAL:a[t]}}),s=m.l().domain(m.e(n.map(function(t){return t.TIME}))).range([0,r]),l=m.j().domain(m.e(i.map(function(t){return t.TOTAL}))).range([o,0]),d=m.a(s),c=m.b(l).ticks(3).tickFormat(m.f("~s"));L.append("g").attr("class","bars").selectAll("rect").data(i,function(t){return t.id}).enter().append("rect").attr("class","bar").style("fill","#dcba7d").attr("x",function(t){return s(t.TIME)}).attr("width",Math.round(r/19)-10+"px").attr("y",function(t){return l(t.TOTAL)}).attr("height",function(t){return o-l(t.TOTAL)}).on("mouseover",function(){z.style("display","inline"),m.m(this).style("opacity",.5)}).on("mousemove",function(t){z.html(t.TIME.getFullYear()+"<hr/>"+t.TOTAL).style("left",m.d.pageX-34+"px").style("top",m.d.pageY-12+"px")}).on("mouseout",function(){z.style("display","none"),m.m(this).style("opacity",1)}),L.append("g").attr("class","x axis").attr("transform","translate(0,"+o+")").call(d),L.append("g").attr("class","y axis").call(c),L.append("text").attr("transform","rotate(-90)").attr("dy","-1em").style("text-anchor","end").style("font-size","8px").text("# Pangolins")}(0,i),d=l,c=new o.a.Controller,p=null,u=!1,f={curr_idx:0},g=function(){C.attr("fill",u?"#fff":"none"),H.attr("fill",u?"none":"#fff")},new o.a.Scene({triggerElement:b("#geo-map-container"),duration:b("#geo-map-container").offsetHeight}).on("enter",function(){console.log("enter map"),w.selectAll("circle.seizure-bubble").remove(),p=I(d,f),u=!0,g()}).on("leave",function(){console.log("leave map"),clearInterval(p),u=!1,w.selectAll("circle.seizure-bubble").remove(),A(d),_(d,2019),g()}).addTo(c),b("#seizure-map-play-btn").addEventListener("click",function(t){u?(clearInterval(p),u=!1):(p=I(d,f),u=!0),g()}),y.selectAll("path").data(e.features).enter().append("path").attr("d",T).style("fill","#694b2d");var d,c,p,u,f,g}).catch(function(t){console.log("d3 err",t)})};var D=v,R=e(1),N=e.n(R),P=(e(21),function(t){return document.querySelector(t)}),q="assets/maps/Malaysia/mobile/",F={maps:[P("#malaysia-routes-1"),P("#malaysia-routes-2")],pics_m:["".concat(q,"m-01.jpg"),"".concat(q,"m-02.jpg"),"".concat(q,"m-03.jpg"),"".concat(q,"m-04.jpg"),"".concat(q,"m-05.jpg"),"".concat(q,"m-06.jpg"),"".concat(q,"m-07.jpg")],maps_m:[P("#malaysia-routes-m-1"),P("#malaysia-routes-m-2"),P("#malaysia-routes-m-3")]};function B(t){t.map(function(t){return t.querySelector(".marker-inner")});var n=t.map(function(t){return t.querySelector(".marker-outter")});N.a.fromTo(n,1,{attr:{r:20},opacity:.4},{attr:{r:55.68},opacity:0}).repeat(-1)}function Y(t,n){t.querySelector(".routes-map-bg-m").src=n}function U(t,n,e,r){Y(n,"FORWARD"==t.scrollDirection?r:e)}F.MapCtrl1=function(){var t=F.maps[0],n={opacity:1,ease:Linear.easeNone},e={opacity:0,ease:Linear.easeNone},r=new o.a.Controller,a=P(".nav").offsetHeight+P("#progress-div").offsetHeight||0,i=new o.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:"300%",offset:-a,reverse:!0}).on("enter",function(){this.setPin(this.triggerElement(),{pushFollowers:!1})}).addTo(r).duration()/3;new o.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:i,offset:-a,reverse:!0}).on("enter",function(){return(new TimelineMax).add(N.a.to(P("#arrows"),.5,n)).add(N.a.to(P("#melaka-label"),.5,n))}).on("leave",function(){var t=[P("#arrows"),P("#melaka-label")];N.a.killTweensOf(t),N.a.to(t,.5,e)}).addTo(r),new o.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:i,offset:i-a,reverse:!0}).on("enter",function(){return(new TimelineMax).add(N.a.to(P("#forest-fill"),.5,n)).add(N.a.to(P("#forest-label"),.3,n))}).on("leave",function(){var t=[P("#forest-fill"),P("#forest-label")];N.a.killTweensOf(t),N.a.to(t,.5,e)}).addTo(r),new o.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:i,offset:2*i-a,reverse:!0}).setTween((new TimelineMax).add(N.a.to(P("#highway-line"),.7,{strokeDashoffset:0,ease:Linear.easeNone})).add(N.a.to([P("#bukit-text"),P("#marker-bukit")],0,n),.7).addCallback(function(){B([P("#marker-bukit")])},.7).add(N.a.to([P("#marker-rantau"),P("#marker-padang"),P("#padang-text"),P("#rantau-text")],0,n),.8).addCallback(function(){B([P("#marker-rantau"),P("#marker-padang")])},.8)).addTo(r);return r},F.MapCtrl2=function(){var t=F.maps[1],n={opacity:1,ease:Linear.easeNone},e={opacity:0,ease:Linear.easeNone},r=new o.a.Controller,a=P(".nav").offsetHeight+P("#progress-div").offsetHeight||0,i=new o.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:"400%",offset:-a,reverse:!0}).on("enter",function(){this.setPin(this.triggerElement(),{pushFollowers:!1})}).addTo(r).duration()/4;new o.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:i,offset:-a,reverse:!0}).on("start",function(t){if("FORWARD"==t.scrollDirection)(new TimelineMax).add(N.a.to(P("#marker-bukit-2"),.5,n)).add(N.a.to(P("#bukit-text-2"),.5,n)).addCallback(function(){B([P("#marker-bukit-2")])},1);else{var r=[P("#marker-bukit-2"),P("#bukit-text-2")];N.a.killTweensOf(r),N.a.to(r,.5,e)}}).addTo(r),new o.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:i,offset:i-a,reverse:!0}).on("start",function(t){if("FORWARD"==t.scrollDirection)(new TimelineMax).add(N.a.to(P("#marker-alor"),.5,n)).add(N.a.to(P("#alor-text"),.5,n)).addCallback(function(){B([P("#marker-alor")])},1);else{var r=[P("#marker-alor"),P("#alor-text")];N.a.killTweensOf(r),N.a.to(r,.5,e)}}).addTo(r),new o.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:i,offset:2*i-a,reverse:!0}).on("start",function(t){if("FORWARD"==t.scrollDirection)(new TimelineMax).add(N.a.to(P("#marker-sadao"),.5,n)).add(N.a.to(P("#sadao-text"),.5,n)).addCallback(function(){B([P("#marker-sadao")])},1);else{var r=[P("#marker-sadao"),P("#sadao-text")];N.a.killTweensOf(r),N.a.to(r,.5,e)}}).addTo(r),new o.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:i,offset:3*i-a,reverse:!0}).on("start",function(t){if("FORWARD"==t.scrollDirection)(new TimelineMax).add(N.a.to(P("#marker-police"),.5,n)).add(N.a.to(P("#kedahpolice-text"),.5,n)).addCallback(function(){B([P("#marker-police")])},1);else{var r=[P("#marker-police"),P("#kedahpolice-text")];N.a.killTweensOf(r),N.a.to(r,.5,e)}}).addTo(r);return r},F.MapCtrlM1=function(){var t=F.maps_m[0],n=new o.a.Controller,e=P(".nav").offsetHeight+P("#progress-div").offsetHeight||0,r=new o.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:"300%",offset:-e,reverse:!0}).on("enter",function(){this.setPin(this.triggerElement(),{pushFollowers:!1})}).addTo(n).duration()/3;new o.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:r,offset:r-e,reverse:!0}).on("start",function(n){U(n,t,F.pics_m[1],F.pics_m[0])}).addTo(n),new o.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:r,offset:2*r-e,reverse:!0}).on("start",function(n){U(n,t,F.pics_m[2],F.pics_m[1])}).addTo(n);return n},F.MapCtrlM2=function(){var t=F.maps_m[1],n=new o.a.Controller,e=P(".nav").offsetHeight+P("#progress-div").offsetHeight||0,r=new o.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:"400%",offset:-e,reverse:!0}).on("enter",function(){this.setPin(this.triggerElement(),{pushFollowers:!1})}).addTo(n).duration()/4;new o.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:r,offset:r-e,reverse:!0}).on("start",function(n){U(n,t,F.pics_m[4],F.pics_m[3])}).addTo(n),new o.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:r,offset:2*r-e,reverse:!0}).on("start",function(n){U(n,t,F.pics_m[5],F.pics_m[4])}).addTo(n),new o.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:r,offset:3*r-e,reverse:!0}).on("start",function(n){U(n,t,F.pics_m[6],F.pics_m[5])}).addTo(n);return n},F.MapCtrlM3=function(){var t=F.maps_m[2],n=new o.a.Controller,e=P(".nav").offsetHeight+P("#progress-div").offsetHeight||0;new o.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:"100%",offset:-e,reverse:!0}).on("enter",function(){this.setPin(this.triggerElement(),{pushFollowers:!1})}).addTo(n);return n};var W=F,X={init:function(t){return t?[W.MapCtrl1(),W.MapCtrl2()]:[W.MapCtrlM1(),W.MapCtrlM2(),W.MapCtrlM3()]}},Z=X;function J(t){var n=document.querySelector("#header-video"),e=document.querySelector("#header-video > source");t?(n.poster="assets/images/header-image-desktop.jpg",e.src="assets/images/pangolinreports_header.mp4",n.load()):(n.poster="assets/images/header-thumbnail-portrait.jpg",e.src="assets/images/pangolinreports_header_portrait.mp4",n.load())}window.addEventListener("DOMContentLoaded",function(){var t=window.matchMedia("(min-device-width: 480px)").matches;J(t);var n=s.ctrlHeaderAudio(),e=s.initScrollController();s.initClickNav(),d.initHashController(),g.initBookmark(),D.renderMap();var r=Z.init(t);window.onresize=function(){var o=window.matchMedia("(min-device-width: 480px)").matches;o!=t&&(console.log("device changed"),J(o),t=o,r.forEach(function(t){t.destroy(!0)}),Z.init(o)),n.destroy(!0),n=s.ctrlHeaderAudio(),e.destroy(!0),e=s.initScrollController()}})}]);