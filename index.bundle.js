!function(l){function e(e){for(var t,r,n=e[0],a=e[1],o=e[2],i=0,s=[];i<n.length;i++)r=n[i],Object.prototype.hasOwnProperty.call(d,r)&&d[r]&&s.push(d[r][0]),d[r]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(l[t]=a[t]);for(f&&f(e);s.length;)s.shift()();return u.push.apply(u,o||[]),c()}function c(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,a=1;a<r.length;a++){var o=r[a];0!==d[o]&&(n=!1)}n&&(u.splice(t--,1),e=i(i.s=r[0]))}return e}var r={},d={1:0},u=[];function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return l[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=l,i.c=r,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var t=window.webpackJsonp=window.webpackJsonp||[],n=t.push.bind(t);t.push=e,t=t.slice();for(var a=0;a<t.length;a++)e(t[a]);var f=n;u.push([25,3]),c()}({25:function(e,t,r){"use strict";r.r(t);function n(e){return document.querySelector(e)}function a(e){return document.querySelectorAll(e)}function o(){}o.lightbox=function(){function r(e){t[i].style.display="block",n[i].src=e.target.src,document.getElementsByClassName("close")[i].onclick=function(){t[i].style.display="none"}}var e=a(".modal-image"),t=a(".modal"),n=a(".modal-content");return e.forEach(function(e,t){e.addEventListener("click",r)}),function(){e.forEach(function(e){e.removeEventListener("click",r)})}},o.dropdown=function(e){n("#dropdownctn").classList.remove("show");function t(e){n("#dropdownctn").classList.toggle("show")}return n("#dropbtn").addEventListener(e?"click":"touchend",t),function(){n("#dropbtn").removeEventListener(e?"click":"touchend",t)}},o.burgermenu=function(){function t(e){n(".country-list").classList.toggle("show")}return n("#burgerbtn").addEventListener("touchend",t),a(".country-item").forEach(function(e){e.addEventListener("click",t)}),function(){n("#burgerbtn").removeEventListener("touchend",t)}},o.init=function(e){return e?[o.lightbox(),o.dropdown(e)]:[o.burgermenu(),o.dropdown(e)]};function s(e){return document.querySelector(e)}function l(){}var c=o,d=r(1),u=r.n(d);r(3);l.ctrlHeaderAudio=function(){var t=s("#header-video"),e=new u.a.Controller;new u.a.Scene({triggerElement:s(".header"),triggerHook:"onLeave",duration:s(".header").offsetHeight}).on("end",function(e){"FORWARD"==e.scrollDirection?(console.log("muted"),t.muted=!0):(console.log("unmuted"),t.muted=!1)}).addTo(e);return e},l.initScrollController=function(){var e=s("#progress-bar"),t=document.body,r=t.offsetHeight,n=new u.a.Controller,a=(new TimelineMax).to(e,1,{width:"100%",ease:Linear.easeNone});new u.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:r,tweenChanges:!0}).setTween(a).addTo(n);return n},l.initClickNav=function(){function e(e){var t=document.body.offsetWidth,r=document.body.offsetHeight,n=parseInt(e.pageX);if(0<n){var a=r*(n/t);window.scrollTo({top:a,behavior:"smooth"})}}var t=s("#progress-div");s("#progress-bar");t.addEventListener("click",e),t.addEventListener("touchend",e)};function f(e){return document.querySelector(e)}function m(e){return document.querySelectorAll(e)}function g(){}var p=l,v=r(0),k=r.n(v);g.titleChangeD=function(){var t=f(".serif"),r=f(".white"),n=f(".country-list"),a={opacity:1,ease:Linear.easeNone},e=new u.a.Controller;new u.a.Scene({triggerElement:f(".header"),triggerHook:"onLeave",duration:f(".header").offsetHeight}).on("end",function(e){"FORWARD"==e.scrollDirection?(t.style.display="block",r.style.display="none",n.style.display="block",k.a.fromTo(t,.25,{opacity:0},a),k.a.fromTo(n,.25,{opacity:0},a)):(t.style.display="none",r.style.display="block",n.style.display="none",k.a.fromTo(r,.25,{opacity:0},a))}).addTo(e);return e},g.countryController=function(){var e=m(".chapter-anchor"),r=m(".country-list li a"),n=new u.a.Controller;return e.forEach(function(e,t){new u.a.Scene({triggerElement:e,duration:e.offsetHeight}).addTo(n).on("enter",function(e){r[t].classList.add("active")}).on("leave",function(e){r[t].classList.remove("active")})}),n},g.titleChangeM=function(){var t=f(".serif"),r=f(".white"),n={opacity:1,ease:Linear.easeNone};r.style.display="block";var e=new u.a.Controller;new u.a.Scene({triggerElement:f(".header"),triggerHook:"onLeave",duration:f(".header").offsetHeight}).on("end",function(e){"FORWARD"==e.scrollDirection?(t.style.display="block",r.style.display="none",k.a.fromTo(t,.25,{opacity:0},n)):(t.style.display="none",r.style.display="block",k.a.fromTo(r,.25,{opacity:0},n))}).addTo(e);return e},g.init=function(e){return e?[g.titleChangeD(),g.countryController()]:[g.titleChangeM(),g.countryController()]};function h(){}var w=g;h.initHashController=function(){var e=function(e){return document.querySelectorAll(e)}(".chapter-anchor"),t=new u.a.Controller;e.forEach(function(r){new u.a.Scene({triggerElement:r,duration:r.offsetHeight}).addTo(t).on("enter leave",function(e){var t=r.id;window.history.pushState(null,null,"#".concat(t))})})};function y(e){return document.querySelector(e)}var H=h,b="assets/maps/Malaysia/mobile/",T={maps:[y("#malaysia-routes-1"),y("#malaysia-routes-2")],pics_m:["".concat(b,"m-01.jpg"),"".concat(b,"m-02.jpg"),"".concat(b,"m-03.jpg"),"".concat(b,"m-04.jpg"),"".concat(b,"m-05.jpg"),"".concat(b,"m-06.jpg"),"".concat(b,"m-07.jpg")],maps_m:[y("#malaysia-routes-m-1"),y("#malaysia-routes-m-2"),y("#malaysia-routes-m-3")]};function x(e){e.map(function(e){return e.querySelector(".marker-inner")});var t=e.map(function(e){return e.querySelector(".marker-outter")});k.a.fromTo(t,1,{attr:{r:20},opacity:.4},{attr:{r:55.68},opacity:0}).repeat(-1)}function E(e,t){e.querySelector(".routes-map-bg-m").src=t}function L(e,t,r,n){E(t,"FORWARD"==e.scrollDirection?n:r)}T.MapCtrl1=function(){var e=T.maps[0],t={opacity:1,ease:Linear.easeNone},r={opacity:0,ease:Linear.easeNone},n=new u.a.Controller,a=y(".nav").offsetHeight+y("#progress-div").offsetHeight||0,o=new u.a.Scene({triggerElement:e,triggerHook:"onLeave",duration:"300%",offset:-a,reverse:!0}).on("start",function(){this.setPin(this.triggerElement(),{pushFollowers:!1})}).addTo(n).duration()/3;new u.a.Scene({triggerElement:e,triggerHook:"onLeave",duration:o,offset:-a,reverse:!0}).on("enter",function(){return(new TimelineMax).add(k.a.to(y("#arrows"),.5,t)).add(k.a.to(y("#melaka-label"),.5,t))}).on("leave",function(){var e=[y("#arrows"),y("#melaka-label")];k.a.killTweensOf(e),k.a.to(e,.5,r)}).addTo(n),new u.a.Scene({triggerElement:e,triggerHook:"onLeave",duration:o,offset:o-a,reverse:!0}).on("enter",function(){return(new TimelineMax).add(k.a.to(y("#forest-fill"),.5,t)).add(k.a.to(y("#forest-label"),.3,t))}).on("leave",function(){var e=[y("#forest-fill"),y("#forest-label")];k.a.killTweensOf(e),k.a.to(e,.5,r)}).addTo(n),new u.a.Scene({triggerElement:e,triggerHook:"onLeave",duration:o,offset:2*o-a,reverse:!0}).setTween((new TimelineMax).add(k.a.to(y("#highway-line"),.7,{strokeDashoffset:0,ease:Linear.easeNone})).add(k.a.to([y("#bukit-text"),y("#marker-bukit")],0,t),.7).addCallback(function(){x([y("#marker-bukit")])},.7).add(k.a.to([y("#marker-rantau"),y("#marker-padang"),y("#padang-text"),y("#rantau-text")],0,t),.8).addCallback(function(){x([y("#marker-rantau"),y("#marker-padang")])},.8)).addTo(n);return n},T.MapCtrl2=function(){var e=T.maps[1],r={opacity:1,ease:Linear.easeNone},n={opacity:0,ease:Linear.easeNone},t=new u.a.Controller,a=y(".nav").offsetHeight+y("#progress-div").offsetHeight||0,o=new u.a.Scene({triggerElement:e,triggerHook:"onLeave",duration:"400%",offset:-a,reverse:!0}).on("start",function(){this.setPin(this.triggerElement(),{pushFollowers:!1})}).addTo(t).duration()/4;new u.a.Scene({triggerElement:e,triggerHook:"onLeave",duration:o,offset:-a,reverse:!0}).on("start",function(e){if("FORWARD"==e.scrollDirection)(new TimelineMax).add(k.a.to(y("#marker-bukit-2"),.5,r)).add(k.a.to(y("#bukit-text-2"),.5,r)).addCallback(function(){x([y("#marker-bukit-2")])},1);else{var t=[y("#marker-bukit-2"),y("#bukit-text-2")];k.a.killTweensOf(t),k.a.to(t,.5,n)}}).addTo(t),new u.a.Scene({triggerElement:e,triggerHook:"onLeave",duration:o,offset:o-a,reverse:!0}).on("start",function(e){if("FORWARD"==e.scrollDirection)(new TimelineMax).add(k.a.to(y("#marker-alor"),.5,r)).add(k.a.to(y("#alor-text"),.5,r)).addCallback(function(){x([y("#marker-alor")])},1);else{var t=[y("#marker-alor"),y("#alor-text")];k.a.killTweensOf(t),k.a.to(t,.5,n)}}).addTo(t),new u.a.Scene({triggerElement:e,triggerHook:"onLeave",duration:o,offset:2*o-a,reverse:!0}).on("start",function(e){if("FORWARD"==e.scrollDirection)(new TimelineMax).add(k.a.to(y("#marker-sadao"),.5,r)).add(k.a.to(y("#sadao-text"),.5,r)).addCallback(function(){x([y("#marker-sadao")])},1);else{var t=[y("#marker-sadao"),y("#sadao-text")];k.a.killTweensOf(t),k.a.to(t,.5,n)}}).addTo(t),new u.a.Scene({triggerElement:e,triggerHook:"onLeave",duration:o,offset:3*o-a,reverse:!0}).on("start",function(e){if("FORWARD"==e.scrollDirection)(new TimelineMax).add(k.a.to(y("#marker-police"),.5,r)).add(k.a.to(y("#kedahpolice-text"),.5,r)).addCallback(function(){x([y("#marker-police")])},1);else{var t=[y("#marker-police"),y("#kedahpolice-text")];k.a.killTweensOf(t),k.a.to(t,.5,n)}}).addTo(t);return t},T.MapCtrlM1=function(){var t=T.maps_m[0],e=new u.a.Controller,r=y(".nav").offsetHeight+y("#progress-div").offsetHeight||0,n=new u.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:"300%",offset:-r,reverse:!0}).on("start",function(){this.setPin(this.triggerElement(),{pushFollowers:!1})}).addTo(e).duration()/3;new u.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:n,offset:n-r,reverse:!0}).on("start",function(e){L(e,t,T.pics_m[1],T.pics_m[0])}).addTo(e),new u.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:n,offset:2*n-r,reverse:!0}).on("start",function(e){L(e,t,T.pics_m[2],T.pics_m[1])}).addTo(e);return e},T.MapCtrlM2=function(){var t=T.maps_m[1],e=new u.a.Controller,r=y(".nav").offsetHeight+y("#progress-div").offsetHeight||0,n=new u.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:"400%",offset:-r,reverse:!0}).on("start",function(){this.setPin(this.triggerElement(),{pushFollowers:!1})}).addTo(e).duration()/4;new u.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:n,offset:n-r,reverse:!0}).on("start",function(e){L(e,t,T.pics_m[4],T.pics_m[3])}).addTo(e),new u.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:n,offset:2*n-r,reverse:!0}).on("start",function(e){L(e,t,T.pics_m[5],T.pics_m[4])}).addTo(e),new u.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:n,offset:3*n-r,reverse:!0}).on("start",function(e){L(e,t,T.pics_m[6],T.pics_m[5])}).addTo(e);return e},T.MapCtrlM3=function(){var e=T.maps_m[2],t=new u.a.Controller,r=y(".nav").offsetHeight+y("#progress-div").offsetHeight||0;new u.a.Scene({triggerElement:e,triggerHook:"onLeave",duration:"100%",offset:-r,reverse:!0}).on("start",function(){this.setPin(this.triggerElement(),{pushFollowers:!1})}).addTo(t);return t};function S(e){return document.querySelector(e)}var C=T,M=(r(8),"assets/maps/Cameroon/mobile/"),D={maps:[S("#cameroon-routes-1")],pics_m:["".concat(M,"m-01.jpg"),"".concat(M,"m-02.jpg"),"".concat(M,"m-03.jpg")],maps_m:[S("#cameroon-routes-m-1")]};function O(e){e.map(function(e){return e.querySelector(".st9")});var t=e.map(function(e){return e.querySelector(".st8")});k.a.fromTo(t,1,{attr:{r:20},opacity:.4},{attr:{r:55.68},opacity:0}).repeat(-1)}function j(e,t){e.querySelector(".routes-map-bg-m").src=t}function R(e,t,r,n){j(t,"FORWARD"==e.scrollDirection?n:r)}function _(e,t){e.querySelector(".routes-map-bg").src=t}D.MapCtrl1=function(){var r=D.maps[0],n={opacity:1,ease:Linear.easeNone},a={opacity:0,ease:Linear.easeNone},e=new u.a.Controller,t=S(".nav").offsetHeight+S("#progress-div").offsetHeight||0,o=new u.a.Scene({triggerElement:r,triggerHook:"onLeave",duration:"300%",offset:-t,reverse:!0}).on("enter",function(){this.setPin(this.triggerElement(),{pushFollowers:!1})}).addTo(e).duration()/3,i=(new u.a.Scene({triggerElement:r,triggerHook:"onLeave",duration:o,offset:-t,reverse:!0}).on("enter",function(){return(new TimelineMax).add(k.a.to(S("#bertoua-text"),.25,n)).add(k.a.to(S("#abong-text"),.25,n)).add(k.a.to(S("#mindourou-text"),.25,n)).add(k.a.to(S("#lomie-text"),.25,n)).add(k.a.to(S("#djoum-text"),.25,n))}).on("leave",function(){var e=[S("#bertoua-text"),S("#abong-text"),S("#mindourou-text"),S("#lomie-text"),S("#djoum-text")];k.a.killTweensOf(e),k.a.to(e,.5,a)}).addTo(e),new u.a.Scene({triggerElement:r,triggerHook:"onLeave",duration:o,offset:o-t,reverse:!0}).on("enter",function(){return(new TimelineMax).add(k.a.to(S("#cam-arrow7"),.5,n)).add(k.a.to(S("#marker-douala"),.5,n)).add(k.a.to(S("#douala-text"),.5,n)).add(k.a.to(S("#cam-arrow6"),.5,n)).add(k.a.to(S("#marker-yaounde"),.5,n)).add(k.a.to(S("#yaounde-text"),.5,n)).addCallback(function(){O([S("#marker-douala"),S("#marker-yaounde")])},.7)}).on("leave",function(){var e=[S("#cam-arrow6"),S("#cam-arrow7"),S("#marker-douala"),S("#marker-yaounde"),S("#yaounde-text"),S("#douala-text")];k.a.killTweensOf(e),k.a.to(e,.5,a)}).addTo(e),[S("#marker-yairport"),S("#marker-dairport"),S("#cam-arrow1"),S("#cam-arrow2"),S("#cam-arrow3"),S("#cam-arrow4"),S("#cam-arrow5"),S("#yairport-text"),S("#dairport-txt")]);new u.a.Scene({triggerElement:r,triggerHook:"onLeave",duration:o,offset:2*o-t,reverse:!0}).on("start",function(e){var t="FORWARD"==e.scrollDirection;if(function(e,t,r,n){"FORWARD"==e.scrollDirection?_(t,n):_(t,r)}(e,r,"assets/maps/Cameroon/desktop/map-01.jpg","assets/maps/Cameroon/desktop/map-02.jpg"),t)return(new TimelineMax).add(k.a.to(i,.5,n)).addCallback(function(){O([S("#marker-yairport"),S("#marker-dairport")])},.7);k.a.killTweensOf(i),k.a.to(i,.5,a)}).addTo(e);return e},D.MapCtrlM1=function(){var t=D.maps_m[0],e=new u.a.Controller,r=S(".nav").offsetHeight+S("#progress-div").offsetHeight||0,n=new u.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:"300%",offset:-r,reverse:!0}).on("start",function(){this.setPin(this.triggerElement(),{pushFollowers:!1})}).addTo(e).duration()/3;new u.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:n,offset:n-r,reverse:!0}).on("start",function(e){R(e,t,D.pics_m[0],D.pics_m[1])}).addTo(e),new u.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:n,offset:2*n-r,reverse:!0}).on("start",function(e){R(e,t,D.pics_m[1],D.pics_m[2])}).addTo(e);return e};function F(e){return document.querySelector(e)}function P(e){return document.querySelector(e)}function A(e){return document.querySelector(e)}var W=D,N={MapCtrl1:function(){F("#indonesia-routes-1");var r={opacity:1,ease:Linear.easeNone},n={opacity:0,ease:Linear.easeNone},e=[F("#indonesia-marker-1"),F("#indonesia-marker-2"),F("#indonesia-marker-3"),F("#indonesia-marker-4"),F("#indonesia-marker-5"),F("#indonesia-marker-6")],a=[F("#indonesia-caption-1"),F("#indonesia-caption-2"),F("#indonesia-caption-3"),F("#indonesia-caption-4"),F("#indonesia-caption-5"),F("#indonesia-caption-6")];e.forEach(function(e,t){e.addEventListener("click",function(e){return(new TimelineMax).add(k.a.to(a,0,n)).add(k.a.to(a[t],.5,r))})})},MapCtrlM1:function(){var e=F("#indonesia-routes-m-1"),t=new u.a.Controller,r=F(".nav").offsetHeight+F("#progress-div").offsetHeight||0;new u.a.Scene({triggerElement:e,triggerHook:"onLeave",duration:"100%",offset:-r,reverse:!0}).on("start",function(){this.setPin(this.triggerElement(),{pushFollowers:!1})}).addTo(t);return t},MapCtrlM1Click:function(){var r={opacity:1,ease:Linear.easeNone},n={opacity:0,ease:Linear.easeNone},e=[F("#indonesia-marker-m-1"),F("#indonesia-marker-m-2"),F("#indonesia-marker-m-3"),F("#indonesia-marker-m-4"),F("#indonesia-marker-m-5"),F("#indonesia-marker-m-6")],a=[F("#indonesia-caption-m-1"),F("#indonesia-caption-m-2"),F("#indonesia-caption-m-3"),F("#indonesia-caption-m-4"),F("#indonesia-caption-m-5"),F("#indonesia-caption-m-6")];e.forEach(function(e,t){e.addEventListener("touchend",function(e){return a.forEach(function(e){e.style.zIndex=3}),(new TimelineMax).add(k.a.to(a,0,n)).add(k.a.to(a[t],.5,r))})}),a.forEach(function(e){e.addEventListener("touchend",function(e){a.forEach(function(e){e.style.zIndex=1}),k.a.to(a,0,n)})})}},q=N,K={MapCtrl:function(){var e=P("#nepal-routes-1"),r={opacity:1,ease:Linear.easeNone},n={opacity:0,ease:Linear.easeNone},t=new u.a.Controller,a=P(".nav").offsetHeight+P("#progress-div").offsetHeight||0,o=new u.a.Scene({triggerElement:e,triggerHook:"onLeave",duration:"300%",offset:-a,reverse:!0}).on("start",function(){this.setPin(this.triggerElement(),{pushFollowers:!0})}).addTo(t).duration()/3;new u.a.Scene({triggerElement:e,triggerHook:"onLeave",duration:o,offset:-a,reverse:!0}).on("start",function(e){if("FORWARD"==e.scrollDirection)return(new TimelineMax).add(k.a.to([P("#marker-ndjili"),P("#n_djili-text")],.5,r));var t=[P("#marker-ndjili"),P("#n_djili-text")];k.a.killTweensOf(t),k.a.to(t,.5,n)}).addTo(t),new u.a.Scene({triggerElement:e,triggerHook:"onLeave",duration:o,offset:o-a,reverse:!0}).on("start",function(e){if("FORWARD"==e.scrollDirection)return(new TimelineMax).add(k.a.to(P("#ndjili-line path"),1,{strokeDashoffset:0,ease:Power2.easeOut})).add(k.a.to([P("#marker-istanbul"),P("#istanbul-text")],.5,r));var t=[P("#ndjili-line path"),P("#marker-istanbul"),P("#istanbul-text")];k.a.killTweensOf(t),k.a.to([P("#marker-istanbul"),P("#istanbul-text")],.5,n),k.a.to(P("#ndjili-line path"),.5,{strokeDashoffset:852.44,ease:Linear.easeNone})}).addTo(t),new u.a.Scene({triggerElement:e,triggerHook:"onLeave",duration:o,offset:2*o-a,reverse:!0}).on("start",function(e){if("FORWARD"==e.scrollDirection)return(new TimelineMax).add(k.a.to(P("#istanbul-line path"),1,{strokeDashoffset:0,ease:Power2.easeOut})).add(k.a.to([P("#marker-tribhuvan"),P("#tribhuvan-text")],.5,r));var t=[P("#marker-tribhuvan"),P("#tribhuvan-text"),P("#istanbul-line path")];k.a.killTweensOf(t),k.a.to([P("#marker-tribhuvan"),P("#tribhuvan-text")],.5,n),k.a.to(P("#istanbul-line path"),.5,{strokeDashoffset:966,ease:Linear.easeNone})}).addTo(t);return t},MapCtrlM:function(){var e=P("#nepal-routes-m-1"),t=new u.a.Controller,r=P(".nav").offsetHeight+P("#progress-div").offsetHeight||0;new u.a.Scene({triggerElement:e,triggerHook:"onLeave",duration:"100%",offset:-r,reverse:!0}).on("start",function(){this.setPin(this.triggerElement(),{pushFollowers:!1})}).addTo(t);return t}},z=K,I={};function V(e,t){e.querySelector(".routes-map-bg-m").src=t}function J(e,t,r,n){V(t,"FORWARD"==e.scrollDirection?n:r)}function B(e,t){e.querySelector(".routes-map-bg").src=t}I.MapCtrl=function(){var a=A("#hk-routes-1"),o={opacity:1,ease:Linear.easeNone},i={opacity:0,ease:Linear.easeNone},e=new u.a.Controller,t=A(".nav").offsetHeight+A("#progress-div").offsetHeight||0,r=new u.a.Scene({triggerElement:a,triggerHook:"onLeave",duration:"500%",offset:-t,reverse:!0}).on("start",function(){this.setPin(this.triggerElement(),{pushFollowers:!1})}).addTo(e).duration()/5;new u.a.Scene({triggerElement:a,triggerHook:"onLeave",duration:r,offset:-t,reverse:!0}).on("start",function(e){var t="FORWARD"==e.scrollDirection,r=[A("#hk-ndjili-line"),A("#hk-marker-ndjili"),A("#hk-n_djili-text"),A("#marker-casablanca"),A("#casablanca-text")];if(t)return(new TimelineMax).add(k.a.to([A("#hk-marker-ndjili"),A("#hk-n_djili-text")],.3,o)).add(k.a.to(A("#hk-ndjili-line path"),1,{strokeDashoffset:0,ease:Power2.easeOut})).add(k.a.to([A("#marker-casablanca"),A("#casablanca-text")],.3,o));k.a.killTweensOf(r),k.a.to([A("#hk-marker-ndjili"),A("#hk-n_djili-text"),A("#marker-casablanca"),A("#casablanca-text")],.5,i),k.a.to(A("#hk-ndjili-line path"),.5,{strokeDashoffset:512.72,ease:Power2.easeOut})}).addTo(e),new u.a.Scene({triggerElement:a,triggerHook:"onLeave",duration:r,offset:r-t,reverse:!0}).on("start",function(e){var t="FORWARD"==e.scrollDirection,r=[A("#casablanca-line"),A("#hamad-text"),A("#marker-hamad")];if(t)return(new TimelineMax).add(k.a.to(A("#casablanca-line path"),1,{strokeDashoffset:1310.86,ease:Power2.easeOut})).add(k.a.to([A("#hamad-text"),A("#marker-hamad")],.3,o));k.a.killTweensOf(r),k.a.to([A("#hamad-text"),A("#marker-hamad")],.5,i),k.a.to(A("#casablanca-line path"),.5,{strokeDashoffset:655.43,ease:Power2.easeOut})}).addTo(e),new u.a.Scene({triggerElement:a,triggerHook:"onLeave",duration:r,offset:2*r-t,reverse:!0}).on("start",function(e){var t="FORWARD"==e.scrollDirection,r=[A("#hamad-line"),A("#HK-text"),A("#marker-HK")];if(t)return(new TimelineMax).add(k.a.to(A("#hamad-line path"),1,{strokeDashoffset:1353.06,ease:Power2.easeOut})).add(k.a.to([A("#HK-text"),A("#marker-HK")],.3,o));k.a.killTweensOf(r),k.a.to([A("#HK-text"),A("#marker-HK")],.5,i),k.a.to(A("#hamad-line path"),.5,{strokeDashoffset:676.53,ease:Power2.easeOut})}).addTo(e),new u.a.Scene({triggerElement:a,triggerHook:"onLeave",duration:r,offset:3*r-t,reverse:!0}).on("start",function(e){!function(e,t,r,n){"FORWARD"==e.scrollDirection?B(t,n):B(t,r)}(e,a,"assets/maps/HK/desktop/map-01.jpg","assets/maps/HK/desktop/map-02.jpg");var t="FORWARD"==e.scrollDirection,r=[A("#hk-ndjili-line"),A("#hk-marker-ndjili"),A("#hk-n_djili-text"),A("#marker-casablanca"),A("#casablanca-text"),A("#casablanca-line"),A("#hamad-text"),A("#marker-hamad"),A("#hamad-line"),A("#HK-text"),A("#marker-HK")],n=[A("#hk-line"),A("#marker-HK-2"),A("#HK-text-2")];if(t)return A("#hk-text-static").style.display="none",(new TimelineMax).add(k.a.to(r,.5,i)).add(k.a.to(A("#hk-line path"),1,{strokeDashoffset:2320.86,ease:Power2.easeOut})).add(k.a.to([A("#marker-HK-2"),A("#HK-text-2")],.5,o));A("#hk-text-static").style.display="flex",k.a.to(r,.5,o),k.a.killTweensOf(n),k.a.to([A("#marker-HK-2"),A("#HK-text-2")],.5,i),k.a.to(A("#hk-line path"),1,{strokeDashoffset:1160.43,ease:Power2.easeOut})}).addTo(e),new u.a.Scene({triggerElement:a,triggerHook:"onLeave",duration:r,offset:4*r-t,reverse:!0}).on("start",function(e){var t="FORWARD"==e.scrollDirection,r=[A("#macau-line"),A("#marker-macau"),A("#macau-text"),A("#marker-HK-3"),A("#HK-text-3")];t?(k.a.to([A("#marker-macau"),A("#macau-text"),A("#marker-HK-3"),A("#HK-text-3")],.5,o),k.a.to(A("#macau-line"),.5,{opacity:.5,ease:Linear.easeNone})):(k.a.killTweensOf(r),k.a.to(r,.5,i))}).addTo(e);return e},I.MapCtrlM=function(){var t=A("#hk-routes-m-1"),e=new u.a.Controller,r=A(".nav").offsetHeight+A("#progress-div").offsetHeight||0,n=new u.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:"300%",offset:-r,reverse:!0}).on("start",function(){this.setPin(this.triggerElement(),{pushFollowers:!1})}).addTo(e).duration()/3;new u.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:n,offset:n-r,reverse:!0}).on("start",function(e){J(e,t,"assets/maps/HK/mobile/m-map-01.jpg","assets/maps/HK/mobile/m-map-02.jpg")}).addTo(e),new u.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:n,offset:2*n-r,reverse:!0}).on("start",function(e){J(e,t,"assets/maps/HK/mobile/m-map-02.jpg","assets/maps/HK/mobile/m-map-03.jpg")}).addTo(e);return e};function X(e){return document.querySelector(e)}var G=I,Q="assets/maps/Vietnam/mobile/",U={maps:[X("#vietnam-routes-1")],pics_m:["".concat(Q,"m-map-01.jpg"),"".concat(Q,"m-map-02.jpg"),"".concat(Q,"m-map-03.jpg")],maps_m:[X("#vietnam-routes-m-1")]};function Y(e,t){e.querySelector(".routes-map-bg").src=t}function Z(e,t){e.querySelector(".routes-map-bg-m").src=t}function $(e,t,r,n){Z(t,"FORWARD"==e.scrollDirection?n:r)}U.MapCtrl=function(){var t=U.maps[0],n={opacity:1,ease:Linear.easeNone},a={opacity:0,ease:Linear.easeNone},e=new u.a.Controller,r=X(".nav").offsetHeight+X("#progress-div").offsetHeight||0,o=new u.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:"300%",offset:-r,reverse:!0}).on("enter",function(){this.setPin(this.triggerElement(),{pushFollowers:!1})}).addTo(e).duration()/3;new u.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:o,offset:-r,reverse:!0}).on("start",function(e){var t="FORWARD"==e.scrollDirection,r=[X("#marker-cau"),X("#cau-text"),X("#mongcai-line"),X("#marker-mong"),X("#mong-text")];if(t)return(new TimelineMax).add(k.a.to([X("#marker-cau"),X("#cau-text")],.5,n)).add(k.a.to(X("#mongcai-line"),1,{strokeDashoffset:2429.2,ease:Power2.easeOut})).add(k.a.to([X("#marker-mong"),X("#mong-text")],.5,n));k.a.killTweensOf(r),k.a.to([X("#marker-cau"),X("#cau-text"),X("#marker-mong"),X("#mong-text")],.5,a),k.a.to(X("#mongcai-line"),.5,{strokeDashoffset:1214.6,ease:Power2.easeOut})}).addTo(e),new u.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:o,offset:o-r,reverse:!0}).on("start",function(e){var t="FORWARD"==e.scrollDirection,r=[X("#vietnam-circles"),X("#vietnam-legend")];if(t)return(new TimelineMax).add(k.a.to([X("#marker-cau"),X("#marker-mong")],.5,a),0).add(k.a.to(r,.5,n),0);k.a.killTweensOf(r),k.a.to(r,.5,a),k.a.to([X("#marker-cau"),X("#marker-mong")],.5,n)}).on("end",function(e){var t="FORWARD"==e.scrollDirection,r=[X("#cau-text"),X("#mongcai-line"),X("#mong-text"),X("#vietnam-circles"),X("#vietnam-legend")];t?k.a.to(r,.5,a):(k.a.killTweensOf(r),k.a.to(r,.5,n))}).addTo(e),new u.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:o,offset:2*o-r,reverse:!0}).on("start",function(e){!function(e,t,r,n){"FORWARD"==e.scrollDirection?Y(t,n):Y(t,r)}(e,t,"assets/maps/Vietnam/desktop/map-01.jpg","assets/maps/Vietnam/desktop/map-02.jpg")}).addTo(e);return e},U.MapCtrlM=function(){var t=X("#vietnam-routes-m-1"),e=new u.a.Controller,r=X(".nav").offsetHeight+X("#progress-div").offsetHeight||0,n=new u.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:"300%",offset:-r,reverse:!0}).on("start",function(){this.setPin(this.triggerElement(),{pushFollowers:!1})}).addTo(e).duration()/3;new u.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:n,offset:n-r,reverse:!0}).on("start",function(e){$(e,t,U.pics_m[0],U.pics_m[1])}).addTo(e),new u.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:n,offset:2*n-r,reverse:!0}).on("start",function(e){$(e,t,U.pics_m[1],U.pics_m[2])}).addTo(e);return e};var ee=U,te={},re=!1;te.init=function(e){return re||(console.log("init called once"),q.MapCtrl1(),q.MapCtrlM1Click(),re=!0),e?[C.MapCtrl1(),C.MapCtrl2(),z.MapCtrl(),W.MapCtrl1(),G.MapCtrl(),ee.MapCtrl()]:[C.MapCtrlM1(),C.MapCtrlM2(),C.MapCtrlM3(),q.MapCtrlM1(),z.MapCtrlM(),W.MapCtrlM1(),G.MapCtrlM(),ee.MapCtrlM()]};var ne=te;function ae(e){var t=document.querySelector("#header-video"),r=document.querySelector("#header-video > source");e?(t.poster="assets/images/header-image-desktop.jpg",r.src="assets/images/pangolinreports_header.mp4"):(t.poster="assets/images/header-thumbnail-portrait.jpg",r.src="assets/images/pangolinreports_header_portrait.mp4"),t.load()}window.addEventListener("DOMContentLoaded",function(){var t=window.matchMedia("(min-device-width: 480px)").matches;ae(t);var r=p.ctrlHeaderAudio(),n=p.initScrollController();p.initClickNav(),H.initHashController();var a=ne.init(t),o=w.init(t),i=c.init(t);window.onresize=function(){var e=window.matchMedia("(min-device-width: 480px)").matches;e!=t&&(console.log("device changed"),ae(e),t=e,a.forEach(function(e){e.destroy(!0)}),o.forEach(function(e){e.destroy(!0)}),i.forEach(function(e){e()}),a=ne.init(e),o=w.init(e),i=c.init(t)),r.destroy(!0),r=p.ctrlHeaderAudio(),n.destroy(!0),n=p.initScrollController()}})}});