!function(l){function e(e){for(var t,a,r=e[0],n=e[1],o=e[2],i=0,s=[];i<r.length;i++)a=r[i],Object.prototype.hasOwnProperty.call(d,a)&&d[a]&&s.push(d[a][0]),d[a]=0;for(t in n)Object.prototype.hasOwnProperty.call(n,t)&&(l[t]=n[t]);for(f&&f(e);s.length;)s.shift()();return u.push.apply(u,o||[]),c()}function c(){for(var e,t=0;t<u.length;t++){for(var a=u[t],r=!0,n=1;n<a.length;n++){var o=a[n];0!==d[o]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=a[0]))}return e}var a={},d={1:0},u=[];function i(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return l[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=l,i.c=a,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var t=window.webpackJsonp=window.webpackJsonp||[],r=t.push.bind(t);t.push=e,t=t.slice();for(var n=0;n<t.length;n++)e(t[n]);var f=r;u.push([25,3]),c()}({25:function(e,t,a){"use strict";a.r(t);function r(e){return document.querySelector(e)}function n(e){return document.querySelectorAll(e)}function o(){}o.lightbox=function(){var e=n(".modal-image"),a=n(".modal"),r=n(".modal-content");e.forEach(function(e,t){e.onclick=function(){a[t].style.display="block",r[t].src=this.src,document.getElementsByClassName("close")[t].onclick=function(){a[t].style.display="none"}}})},o.dropdown=function(){function e(e){r("#dd-menu").classList.toggle("show")}r("dropbtn").addEventListener("click",e),r("dropbtn").addEventListener("touchend",e)};function i(e){return document.querySelector(e)}function s(){}var l=o,c=a(1),d=a.n(c);a(3);s.ctrlHeaderAudio=function(){var t=i("#header-video"),e=new d.a.Controller;new d.a.Scene({triggerElement:i(".header"),triggerHook:"onLeave",duration:i(".header").offsetHeight}).on("end",function(e){"FORWARD"==e.scrollDirection?(console.log("muted"),t.muted=!0):(console.log("unmuted"),t.muted=!1)}).addTo(e);return e},s.initScrollController=function(){var e=i("#progress-bar"),t=document.body,a=t.offsetHeight,r=new d.a.Controller,n=(new TimelineMax).to(e,1,{width:"100%",ease:Linear.easeNone});new d.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:a,tweenChanges:!0}).setTween(n).addTo(r);return r},s.initClickNav=function(){function e(e){var t=document.body.offsetWidth,a=document.body.offsetHeight,r=parseInt(e.pageX);if(0<r){var n=a*(r/t);window.scrollTo({top:n,behavior:"smooth"})}}var t=i("#progress-div");i("#progress-bar");t.addEventListener("click",e),t.addEventListener("touchend",e)};function u(e){return document.querySelector(e)}function f(e){return document.querySelectorAll(e)}function m(){}var g=s,p=a(0),v=a.n(p);m.titleChangeD=function(){var t=u(".serif"),a=u(".white"),r=u(".country-list"),n={opacity:1,ease:Linear.easeNone},e=new d.a.Controller;new d.a.Scene({triggerElement:u(".header"),triggerHook:"onLeave",duration:u(".header").offsetHeight}).on("end",function(e){"FORWARD"==e.scrollDirection?(t.style.display="block",a.style.display="none",r.style.display="block",v.a.fromTo(t,.25,{opacity:0},n),v.a.fromTo(r,.25,{opacity:0},n)):(t.style.display="none",a.style.display="block",r.style.display="none",v.a.fromTo(a,.25,{opacity:0},n))}).addTo(e);return e},m.countryController=function(){var e=f(".chapter-anchor"),a=f(".country-list li a"),r=new d.a.Controller;e.forEach(function(e,t){new d.a.Scene({triggerElement:e,duration:e.offsetHeight}).addTo(r).on("enter",function(e){a[t].classList.add("active")}).on("leave",function(e){a[t].classList.remove("active")})})},m.titleChangeM=function(){var t=u(".serif"),a=u(".white"),r=(u(".country-list"),{opacity:1,ease:Linear.easeNone}),e=new d.a.Controller;new d.a.Scene({triggerElement:u(".header"),triggerHook:"onLeave",duration:u(".header").offsetHeight}).on("end",function(e){"FORWARD"==e.scrollDirection?(t.style.display="block",a.style.display="none",v.a.fromTo(t,.25,{opacity:0},r)):(t.style.display="none",a.style.display="block",v.a.fromTo(a,.25,{opacity:0},r))}).addTo(e);return e},m.init=function(e){return e?[m.titleChangeD(),m.countryController()]:[m.titleChangeM(),m.countryController()]};function k(){}var h=m;k.initHashController=function(){var e=function(e){return document.querySelectorAll(e)}(".chapter-anchor"),t=new d.a.Controller;e.forEach(function(a){new d.a.Scene({triggerElement:a,duration:a.offsetHeight}).addTo(t).on("enter leave",function(e){var t=a.id;window.history.pushState(null,null,"#".concat(t))})})};function w(e){return document.querySelector(e)}var y=k,H="assets/maps/Malaysia/mobile/",T={maps:[w("#malaysia-routes-1"),w("#malaysia-routes-2")],pics_m:["".concat(H,"m-01.jpg"),"".concat(H,"m-02.jpg"),"".concat(H,"m-03.jpg"),"".concat(H,"m-04.jpg"),"".concat(H,"m-05.jpg"),"".concat(H,"m-06.jpg"),"".concat(H,"m-07.jpg")],maps_m:[w("#malaysia-routes-m-1"),w("#malaysia-routes-m-2"),w("#malaysia-routes-m-3")]};function x(e){e.map(function(e){return e.querySelector(".marker-inner")});var t=e.map(function(e){return e.querySelector(".marker-outter")});v.a.fromTo(t,1,{attr:{r:20},opacity:.4},{attr:{r:55.68},opacity:0}).repeat(-1)}function b(e,t){e.querySelector(".routes-map-bg-m").src=t}function E(e,t,a,r){b(t,"FORWARD"==e.scrollDirection?r:a)}T.MapCtrl1=function(){var e=T.maps[0],t={opacity:1,ease:Linear.easeNone},a={opacity:0,ease:Linear.easeNone},r=new d.a.Controller,n=w(".nav").offsetHeight+w("#progress-div").offsetHeight||0,o=new d.a.Scene({triggerElement:e,triggerHook:"onLeave",duration:"300%",offset:-n,reverse:!0}).on("start",function(){this.setPin(this.triggerElement(),{pushFollowers:!1})}).addTo(r).duration()/3;new d.a.Scene({triggerElement:e,triggerHook:"onLeave",duration:o,offset:-n,reverse:!0}).on("enter",function(){return(new TimelineMax).add(v.a.to(w("#arrows"),.5,t)).add(v.a.to(w("#melaka-label"),.5,t))}).on("leave",function(){var e=[w("#arrows"),w("#melaka-label")];v.a.killTweensOf(e),v.a.to(e,.5,a)}).addTo(r),new d.a.Scene({triggerElement:e,triggerHook:"onLeave",duration:o,offset:o-n,reverse:!0}).on("enter",function(){return(new TimelineMax).add(v.a.to(w("#forest-fill"),.5,t)).add(v.a.to(w("#forest-label"),.3,t))}).on("leave",function(){var e=[w("#forest-fill"),w("#forest-label")];v.a.killTweensOf(e),v.a.to(e,.5,a)}).addTo(r),new d.a.Scene({triggerElement:e,triggerHook:"onLeave",duration:o,offset:2*o-n,reverse:!0}).setTween((new TimelineMax).add(v.a.to(w("#highway-line"),.7,{strokeDashoffset:0,ease:Linear.easeNone})).add(v.a.to([w("#bukit-text"),w("#marker-bukit")],0,t),.7).addCallback(function(){x([w("#marker-bukit")])},.7).add(v.a.to([w("#marker-rantau"),w("#marker-padang"),w("#padang-text"),w("#rantau-text")],0,t),.8).addCallback(function(){x([w("#marker-rantau"),w("#marker-padang")])},.8)).addTo(r);return r},T.MapCtrl2=function(){var e=T.maps[1],a={opacity:1,ease:Linear.easeNone},r={opacity:0,ease:Linear.easeNone},t=new d.a.Controller,n=w(".nav").offsetHeight+w("#progress-div").offsetHeight||0,o=new d.a.Scene({triggerElement:e,triggerHook:"onLeave",duration:"400%",offset:-n,reverse:!0}).on("start",function(){this.setPin(this.triggerElement(),{pushFollowers:!1})}).addTo(t).duration()/4;new d.a.Scene({triggerElement:e,triggerHook:"onLeave",duration:o,offset:-n,reverse:!0}).on("start",function(e){if("FORWARD"==e.scrollDirection)(new TimelineMax).add(v.a.to(w("#marker-bukit-2"),.5,a)).add(v.a.to(w("#bukit-text-2"),.5,a)).addCallback(function(){x([w("#marker-bukit-2")])},1);else{var t=[w("#marker-bukit-2"),w("#bukit-text-2")];v.a.killTweensOf(t),v.a.to(t,.5,r)}}).addTo(t),new d.a.Scene({triggerElement:e,triggerHook:"onLeave",duration:o,offset:o-n,reverse:!0}).on("start",function(e){if("FORWARD"==e.scrollDirection)(new TimelineMax).add(v.a.to(w("#marker-alor"),.5,a)).add(v.a.to(w("#alor-text"),.5,a)).addCallback(function(){x([w("#marker-alor")])},1);else{var t=[w("#marker-alor"),w("#alor-text")];v.a.killTweensOf(t),v.a.to(t,.5,r)}}).addTo(t),new d.a.Scene({triggerElement:e,triggerHook:"onLeave",duration:o,offset:2*o-n,reverse:!0}).on("start",function(e){if("FORWARD"==e.scrollDirection)(new TimelineMax).add(v.a.to(w("#marker-sadao"),.5,a)).add(v.a.to(w("#sadao-text"),.5,a)).addCallback(function(){x([w("#marker-sadao")])},1);else{var t=[w("#marker-sadao"),w("#sadao-text")];v.a.killTweensOf(t),v.a.to(t,.5,r)}}).addTo(t),new d.a.Scene({triggerElement:e,triggerHook:"onLeave",duration:o,offset:3*o-n,reverse:!0}).on("start",function(e){if("FORWARD"==e.scrollDirection)(new TimelineMax).add(v.a.to(w("#marker-police"),.5,a)).add(v.a.to(w("#kedahpolice-text"),.5,a)).addCallback(function(){x([w("#marker-police")])},1);else{var t=[w("#marker-police"),w("#kedahpolice-text")];v.a.killTweensOf(t),v.a.to(t,.5,r)}}).addTo(t);return t},T.MapCtrlM1=function(){var t=T.maps_m[0],e=new d.a.Controller,a=w(".nav").offsetHeight+w("#progress-div").offsetHeight||0,r=new d.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:"300%",offset:-a,reverse:!0}).on("start",function(){this.setPin(this.triggerElement(),{pushFollowers:!1})}).addTo(e).duration()/3;new d.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:r,offset:r-a,reverse:!0}).on("start",function(e){E(e,t,T.pics_m[1],T.pics_m[0])}).addTo(e),new d.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:r,offset:2*r-a,reverse:!0}).on("start",function(e){E(e,t,T.pics_m[2],T.pics_m[1])}).addTo(e);return e},T.MapCtrlM2=function(){var t=T.maps_m[1],e=new d.a.Controller,a=w(".nav").offsetHeight+w("#progress-div").offsetHeight||0,r=new d.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:"400%",offset:-a,reverse:!0}).on("start",function(){this.setPin(this.triggerElement(),{pushFollowers:!1})}).addTo(e).duration()/4;new d.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:r,offset:r-a,reverse:!0}).on("start",function(e){E(e,t,T.pics_m[4],T.pics_m[3])}).addTo(e),new d.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:r,offset:2*r-a,reverse:!0}).on("start",function(e){E(e,t,T.pics_m[5],T.pics_m[4])}).addTo(e),new d.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:r,offset:3*r-a,reverse:!0}).on("start",function(e){E(e,t,T.pics_m[6],T.pics_m[5])}).addTo(e);return e},T.MapCtrlM3=function(){var e=T.maps_m[2],t=new d.a.Controller,a=w(".nav").offsetHeight+w("#progress-div").offsetHeight||0;new d.a.Scene({triggerElement:e,triggerHook:"onLeave",duration:"100%",offset:-a,reverse:!0}).on("start",function(){this.setPin(this.triggerElement(),{pushFollowers:!1})}).addTo(t);return t};function L(e){return document.querySelector(e)}var S=T,C=(a(8),"assets/maps/Cameroon/mobile/"),M={maps:[L("#cameroon-routes-1")],pics_m:["".concat(C,"m-01.jpg"),"".concat(C,"m-02.jpg"),"".concat(C,"m-03.jpg")],maps_m:[L("#cameroon-routes-m-1")]};function O(e){e.map(function(e){return e.querySelector(".st9")});var t=e.map(function(e){return e.querySelector(".st8")});v.a.fromTo(t,1,{attr:{r:20},opacity:.4},{attr:{r:55.68},opacity:0}).repeat(-1)}function D(e,t){e.querySelector(".routes-map-bg-m").src=t}function j(e,t,a,r){D(t,"FORWARD"==e.scrollDirection?r:a)}function R(e,t){e.querySelector(".routes-map-bg").src=t}M.MapCtrl1=function(){var a=M.maps[0],r={opacity:1,ease:Linear.easeNone},n={opacity:0,ease:Linear.easeNone},e=new d.a.Controller,t=L(".nav").offsetHeight+L("#progress-div").offsetHeight||0,o=new d.a.Scene({triggerElement:a,triggerHook:"onLeave",duration:"300%",offset:-t,reverse:!0}).on("enter",function(){this.setPin(this.triggerElement(),{pushFollowers:!1})}).addTo(e).duration()/3,i=(new d.a.Scene({triggerElement:a,triggerHook:"onLeave",duration:o,offset:-t,reverse:!0}).on("enter",function(){return(new TimelineMax).add(v.a.to(L("#bertoua-text"),.25,r)).add(v.a.to(L("#abong-text"),.25,r)).add(v.a.to(L("#mindourou-text"),.25,r)).add(v.a.to(L("#lomie-text"),.25,r)).add(v.a.to(L("#djoum-text"),.25,r))}).on("leave",function(){var e=[L("#bertoua-text"),L("#abong-text"),L("#mindourou-text"),L("#lomie-text"),L("#djoum-text")];v.a.killTweensOf(e),v.a.to(e,.5,n)}).addTo(e),new d.a.Scene({triggerElement:a,triggerHook:"onLeave",duration:o,offset:o-t,reverse:!0}).on("enter",function(){return(new TimelineMax).add(v.a.to(L("#cam-arrow7"),.5,r)).add(v.a.to(L("#marker-douala"),.5,r)).add(v.a.to(L("#douala-text"),.5,r)).add(v.a.to(L("#cam-arrow6"),.5,r)).add(v.a.to(L("#marker-yaounde"),.5,r)).add(v.a.to(L("#yaounde-text"),.5,r)).addCallback(function(){O([L("#marker-douala"),L("#marker-yaounde")])},.7)}).on("leave",function(){var e=[L("#cam-arrow6"),L("#cam-arrow7"),L("#marker-douala"),L("#marker-yaounde"),L("#yaounde-text"),L("#douala-text")];v.a.killTweensOf(e),v.a.to(e,.5,n)}).addTo(e),[L("#marker-yairport"),L("#marker-dairport"),L("#cam-arrow1"),L("#cam-arrow2"),L("#cam-arrow3"),L("#cam-arrow4"),L("#cam-arrow5"),L("#yairport-text"),L("#dairport-txt")]);new d.a.Scene({triggerElement:a,triggerHook:"onLeave",duration:o,offset:2*o-t,reverse:!0}).on("start",function(e){var t="FORWARD"==e.scrollDirection;if(function(e,t,a,r){"FORWARD"==e.scrollDirection?R(t,r):R(t,a)}(e,a,"assets/maps/Cameroon/desktop/map-01.jpg","assets/maps/Cameroon/desktop/map-02.jpg"),t)return(new TimelineMax).add(v.a.to(i,.5,r)).addCallback(function(){O([L("#marker-yairport"),L("#marker-dairport")])},.7);v.a.killTweensOf(i),v.a.to(i,.5,n)}).addTo(e);return e},M.MapCtrlM1=function(){var t=M.maps_m[0],e=new d.a.Controller,a=L(".nav").offsetHeight+L("#progress-div").offsetHeight||0,r=new d.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:"300%",offset:-a,reverse:!0}).on("start",function(){this.setPin(this.triggerElement(),{pushFollowers:!1})}).addTo(e).duration()/3;new d.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:r,offset:r-a,reverse:!0}).on("start",function(e){j(e,t,M.pics_m[0],M.pics_m[1])}).addTo(e),new d.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:r,offset:2*r-a,reverse:!0}).on("start",function(e){j(e,t,M.pics_m[1],M.pics_m[2])}).addTo(e);return e};function F(e){return document.querySelector(e)}function _(e){return document.querySelector(e)}function P(e){return document.querySelector(e)}var A=M,N={MapCtrl1:function(){F("#indonesia-routes-1");var a={opacity:1,ease:Linear.easeNone},r={opacity:0,ease:Linear.easeNone},e=[F("#indonesia-marker-1"),F("#indonesia-marker-2"),F("#indonesia-marker-3"),F("#indonesia-marker-4"),F("#indonesia-marker-5"),F("#indonesia-marker-6")],n=[F("#indonesia-caption-1"),F("#indonesia-caption-2"),F("#indonesia-caption-3"),F("#indonesia-caption-4"),F("#indonesia-caption-5"),F("#indonesia-caption-6")];e.forEach(function(e,t){e.addEventListener("click",function(e){return(new TimelineMax).add(v.a.to(n,0,r)).add(v.a.to(n[t],.5,a))})})},MapCtrlM1:function(){var e=F("#indonesia-routes-m-1"),t=new d.a.Controller,a=F(".nav").offsetHeight+F("#progress-div").offsetHeight||0;new d.a.Scene({triggerElement:e,triggerHook:"onLeave",duration:"100%",offset:-a,reverse:!0}).on("start",function(){this.setPin(this.triggerElement(),{pushFollowers:!1})}).addTo(t);return t},MapCtrlM1Click:function(){var a={opacity:1,ease:Linear.easeNone},r={opacity:0,ease:Linear.easeNone},e=[F("#indonesia-marker-m-1"),F("#indonesia-marker-m-2"),F("#indonesia-marker-m-3"),F("#indonesia-marker-m-4"),F("#indonesia-marker-m-5"),F("#indonesia-marker-m-6")],n=[F("#indonesia-caption-m-1"),F("#indonesia-caption-m-2"),F("#indonesia-caption-m-3"),F("#indonesia-caption-m-4"),F("#indonesia-caption-m-5"),F("#indonesia-caption-m-6")];e.forEach(function(e,t){e.addEventListener("touchend",function(e){return n.forEach(function(e){e.style.zIndex=3}),(new TimelineMax).add(v.a.to(n,0,r)).add(v.a.to(n[t],.5,a))})}),n.forEach(function(e){e.addEventListener("touchend",function(e){n.forEach(function(e){e.style.zIndex=1}),v.a.to(n,0,r)})})}},W=N,q={MapCtrl:function(){var e=_("#nepal-routes-1"),a={opacity:1,ease:Linear.easeNone},r={opacity:0,ease:Linear.easeNone},t=new d.a.Controller,n=_(".nav").offsetHeight+_("#progress-div").offsetHeight||0,o=new d.a.Scene({triggerElement:e,triggerHook:"onLeave",duration:"300%",offset:-n,reverse:!0}).on("start",function(){this.setPin(this.triggerElement(),{pushFollowers:!0})}).addTo(t).duration()/3;new d.a.Scene({triggerElement:e,triggerHook:"onLeave",duration:o,offset:-n,reverse:!0}).on("start",function(e){if("FORWARD"==e.scrollDirection)return(new TimelineMax).add(v.a.to([_("#marker-ndjili"),_("#n_djili-text")],.5,a));var t=[_("#marker-ndjili"),_("#n_djili-text")];v.a.killTweensOf(t),v.a.to(t,.5,r)}).addTo(t),new d.a.Scene({triggerElement:e,triggerHook:"onLeave",duration:o,offset:o-n,reverse:!0}).on("start",function(e){if("FORWARD"==e.scrollDirection)return(new TimelineMax).add(v.a.to(_("#ndjili-line path"),1,{strokeDashoffset:0,ease:Power2.easeOut})).add(v.a.to([_("#marker-istanbul"),_("#istanbul-text")],.5,a));var t=[_("#ndjili-line path"),_("#marker-istanbul"),_("#istanbul-text")];v.a.killTweensOf(t),v.a.to([_("#marker-istanbul"),_("#istanbul-text")],.5,r),v.a.to(_("#ndjili-line path"),.5,{strokeDashoffset:852.44,ease:Linear.easeNone})}).addTo(t),new d.a.Scene({triggerElement:e,triggerHook:"onLeave",duration:o,offset:2*o-n,reverse:!0}).on("start",function(e){if("FORWARD"==e.scrollDirection)return(new TimelineMax).add(v.a.to(_("#istanbul-line path"),1,{strokeDashoffset:0,ease:Power2.easeOut})).add(v.a.to([_("#marker-tribhuvan"),_("#tribhuvan-text")],.5,a));var t=[_("#marker-tribhuvan"),_("#tribhuvan-text"),_("#istanbul-line path")];v.a.killTweensOf(t),v.a.to([_("#marker-tribhuvan"),_("#tribhuvan-text")],.5,r),v.a.to(_("#istanbul-line path"),.5,{strokeDashoffset:966,ease:Linear.easeNone})}).addTo(t);return t},MapCtrlM:function(){var e=_("#nepal-routes-m-1"),t=new d.a.Controller,a=_(".nav").offsetHeight+_("#progress-div").offsetHeight||0;new d.a.Scene({triggerElement:e,triggerHook:"onLeave",duration:"100%",offset:-a,reverse:!0}).on("start",function(){this.setPin(this.triggerElement(),{pushFollowers:!1})}).addTo(t);return t}},K=q,z={};function I(e,t){e.querySelector(".routes-map-bg-m").src=t}function J(e,t,a,r){I(t,"FORWARD"==e.scrollDirection?r:a)}function V(e,t){e.querySelector(".routes-map-bg").src=t}z.MapCtrl=function(){var n=P("#hk-routes-1"),o={opacity:1,ease:Linear.easeNone},i={opacity:0,ease:Linear.easeNone},e=new d.a.Controller,t=P(".nav").offsetHeight+P("#progress-div").offsetHeight||0,a=new d.a.Scene({triggerElement:n,triggerHook:"onLeave",duration:"500%",offset:-t,reverse:!0}).on("start",function(){this.setPin(this.triggerElement(),{pushFollowers:!1})}).addTo(e).duration()/5;new d.a.Scene({triggerElement:n,triggerHook:"onLeave",duration:a,offset:-t,reverse:!0}).on("start",function(e){var t="FORWARD"==e.scrollDirection,a=[P("#hk-ndjili-line"),P("#hk-marker-ndjili"),P("#hk-n_djili-text"),P("#marker-casablanca"),P("#casablanca-text")];if(t)return(new TimelineMax).add(v.a.to([P("#hk-marker-ndjili"),P("#hk-n_djili-text")],.3,o)).add(v.a.to(P("#hk-ndjili-line path"),1,{strokeDashoffset:0,ease:Power2.easeOut})).add(v.a.to([P("#marker-casablanca"),P("#casablanca-text")],.3,o));v.a.killTweensOf(a),v.a.to([P("#hk-marker-ndjili"),P("#hk-n_djili-text"),P("#marker-casablanca"),P("#casablanca-text")],.5,i),v.a.to(P("#hk-ndjili-line path"),.5,{strokeDashoffset:512.72,ease:Power2.easeOut})}).addTo(e),new d.a.Scene({triggerElement:n,triggerHook:"onLeave",duration:a,offset:a-t,reverse:!0}).on("start",function(e){var t="FORWARD"==e.scrollDirection,a=[P("#casablanca-line"),P("#hamad-text"),P("#marker-hamad")];if(t)return(new TimelineMax).add(v.a.to(P("#casablanca-line path"),1,{strokeDashoffset:1310.86,ease:Power2.easeOut})).add(v.a.to([P("#hamad-text"),P("#marker-hamad")],.3,o));v.a.killTweensOf(a),v.a.to([P("#hamad-text"),P("#marker-hamad")],.5,i),v.a.to(P("#casablanca-line path"),.5,{strokeDashoffset:655.43,ease:Power2.easeOut})}).addTo(e),new d.a.Scene({triggerElement:n,triggerHook:"onLeave",duration:a,offset:2*a-t,reverse:!0}).on("start",function(e){var t="FORWARD"==e.scrollDirection,a=[P("#hamad-line"),P("#HK-text"),P("#marker-HK")];if(t)return(new TimelineMax).add(v.a.to(P("#hamad-line path"),1,{strokeDashoffset:1353.06,ease:Power2.easeOut})).add(v.a.to([P("#HK-text"),P("#marker-HK")],.3,o));v.a.killTweensOf(a),v.a.to([P("#HK-text"),P("#marker-HK")],.5,i),v.a.to(P("#hamad-line path"),.5,{strokeDashoffset:676.53,ease:Power2.easeOut})}).addTo(e),new d.a.Scene({triggerElement:n,triggerHook:"onLeave",duration:a,offset:3*a-t,reverse:!0}).on("start",function(e){!function(e,t,a,r){"FORWARD"==e.scrollDirection?V(t,r):V(t,a)}(e,n,"assets/maps/HK/desktop/map-01.jpg","assets/maps/HK/desktop/map-02.jpg");var t="FORWARD"==e.scrollDirection,a=[P("#hk-ndjili-line"),P("#hk-marker-ndjili"),P("#hk-n_djili-text"),P("#marker-casablanca"),P("#casablanca-text"),P("#casablanca-line"),P("#hamad-text"),P("#marker-hamad"),P("#hamad-line"),P("#HK-text"),P("#marker-HK")],r=[P("#hk-line"),P("#marker-HK-2"),P("#HK-text-2")];if(t)return P("#hk-text-static").style.display="none",(new TimelineMax).add(v.a.to(a,.5,i)).add(v.a.to(P("#hk-line path"),1,{strokeDashoffset:2320.86,ease:Power2.easeOut})).add(v.a.to([P("#marker-HK-2"),P("#HK-text-2")],.5,o));P("#hk-text-static").style.display="flex",v.a.to(a,.5,o),v.a.killTweensOf(r),v.a.to([P("#marker-HK-2"),P("#HK-text-2")],.5,i),v.a.to(P("#hk-line path"),1,{strokeDashoffset:1160.43,ease:Power2.easeOut})}).addTo(e),new d.a.Scene({triggerElement:n,triggerHook:"onLeave",duration:a,offset:4*a-t,reverse:!0}).on("start",function(e){var t="FORWARD"==e.scrollDirection,a=[P("#macau-line"),P("#marker-macau"),P("#macau-text"),P("#marker-HK-3"),P("#HK-text-3")];t?(v.a.to([P("#marker-macau"),P("#macau-text"),P("#marker-HK-3"),P("#HK-text-3")],.5,o),v.a.to(P("#macau-line"),.5,{opacity:.5,ease:Linear.easeNone})):(v.a.killTweensOf(a),v.a.to(a,.5,i))}).addTo(e);return e},z.MapCtrlM=function(){var t=P("#hk-routes-m-1"),e=new d.a.Controller,a=P(".nav").offsetHeight+P("#progress-div").offsetHeight||0,r=new d.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:"300%",offset:-a,reverse:!0}).on("start",function(){this.setPin(this.triggerElement(),{pushFollowers:!1})}).addTo(e).duration()/3;new d.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:r,offset:r-a,reverse:!0}).on("start",function(e){J(e,t,"assets/maps/HK/mobile/m-map-01.jpg","assets/maps/HK/mobile/m-map-02.jpg")}).addTo(e),new d.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:r,offset:2*r-a,reverse:!0}).on("start",function(e){J(e,t,"assets/maps/HK/mobile/m-map-02.jpg","assets/maps/HK/mobile/m-map-03.jpg")}).addTo(e);return e};function B(e){return document.querySelector(e)}var X=z,G={};function Q(e,t){e.querySelector(".routes-map-bg").src=t}G.MapCtrl=function(){var t=B("#vietnam-routes-1"),r={opacity:1,ease:Linear.easeNone},n={opacity:0,ease:Linear.easeNone},e=new d.a.Controller,a=B(".nav").offsetHeight+B("#progress-div").offsetHeight||0,o=new d.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:"300%",offset:-a,reverse:!0}).on("start",function(){this.setPin(this.triggerElement(),{pushFollowers:!0})}).addTo(e).duration()/3;new d.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:o,offset:-a,reverse:!0}).on("start",function(e){var t="FORWARD"==e.scrollDirection,a=[B("#marker-cau"),B("#cau-text"),B("#mongcai-line"),B("#marker-mong"),B("#mong-text")];if(t)return(new TimelineMax).add(v.a.to([B("#marker-cau"),B("#cau-text")],.5,r)).add(v.a.to(B("#mongcai-line"),1,{strokeDashoffset:2429.2,ease:Power2.easeOut})).add(v.a.to([B("#marker-mong"),B("#mong-text")],.5,r));v.a.killTweensOf(a),v.a.to([B("#marker-cau"),B("#cau-text"),B("#marker-mong"),B("#mong-text")],.5,n),v.a.to(B("#mongcai-line"),.5,{strokeDashoffset:1214.6,ease:Power2.easeOut})}).addTo(e),new d.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:o,offset:o-a,reverse:!0}).on("start",function(e){var t="FORWARD"==e.scrollDirection,a=[B("#vietnam-circles"),B("#vietnam-legend")];if(t)return(new TimelineMax).add(v.a.to([B("#marker-cau"),B("#marker-mong")],.5,n),0).add(v.a.to(a,.5,r),0);v.a.killTweensOf(a),v.a.to(a,.5,n),v.a.to([B("#marker-cau"),B("#marker-mong")],.5,r)}).on("end",function(e){var t="FORWARD"==e.scrollDirection,a=[B("#cau-text"),B("#mongcai-line"),B("#mong-text"),B("#vietnam-circles"),B("#vietnam-legend")];t?v.a.to(a,.5,n):(v.a.killTweensOf(a),v.a.to(a,.5,r))}).addTo(e),new d.a.Scene({triggerElement:t,triggerHook:"onLeave",duration:o,offset:2*o-a,reverse:!0}).on("start",function(e){!function(e,t,a,r){"FORWARD"==e.scrollDirection?Q(t,r):Q(t,a)}(e,t,"assets/maps/Vietnam/desktop/map-01.jpg","assets/maps/Vietnam/desktop/map-02.jpg")}).addTo(e);return e},G.MapCtrlM=function(){var e=B("#vietnam-routes-m-1"),t=new d.a.Controller,a=B(".nav").offsetHeight+B("#progress-div").offsetHeight||0;new d.a.Scene({triggerElement:e,triggerHook:"onLeave",duration:"100%",offset:-a,reverse:!0}).on("start",function(){this.setPin(this.triggerElement(),{pushFollowers:!1})}).addTo(t);return t};var U=G,Y={},Z=!1;Y.init=function(e){return Z||(console.log("init called once"),W.MapCtrl1(),W.MapCtrlM1Click(),Z=!0),e?[S.MapCtrl1(),S.MapCtrl2(),K.MapCtrl(),A.MapCtrl1(),X.MapCtrl(),U.MapCtrl()]:[S.MapCtrlM1(),S.MapCtrlM2(),S.MapCtrlM3(),W.MapCtrlM1(),K.MapCtrlM(),A.MapCtrlM1(),X.MapCtrlM(),U.MapCtrlM()]};var $=Y;function ee(e){var t=document.querySelector("#header-video"),a=document.querySelector("#header-video > source");e?(t.poster="assets/images/header-image-desktop.jpg",a.src="assets/images/pangolinreports_header.mp4"):(t.poster="assets/images/header-thumbnail-portrait.jpg",a.src="assets/images/pangolinreports_header_portrait.mp4"),t.load()}window.addEventListener("DOMContentLoaded",function(){var t=window.matchMedia("(min-device-width: 480px)").matches;ee(t);var a=g.ctrlHeaderAudio(),r=g.initScrollController();g.initClickNav(),y.initHashController(),l.lightbox();var n=$.init(t),o=h.init(t);window.onresize=function(){var e=window.matchMedia("(min-device-width: 480px)").matches;e!=t&&(console.log("device changed"),ee(e),t=e,n.forEach(function(e){e.destroy(!0)}),o.forEach(function(e){nav.destroy(!0)}),$.init(e)),a.destroy(!0),a=g.ctrlHeaderAudio(),r.destroy(!0),r=g.initScrollController()}})}});