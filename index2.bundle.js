!function(s){function t(t){for(var e,n,r=t[0],a=t[1],o=t[2],i=0,l=[];i<r.length;i++)n=r[i],Object.prototype.hasOwnProperty.call(u,n)&&u[n]&&l.push(u[n][0]),u[n]=0;for(e in a)Object.prototype.hasOwnProperty.call(a,e)&&(s[e]=a[e]);for(p&&p(t);l.length;)l.shift()();return d.push.apply(d,o||[]),c()}function c(){for(var t,e=0;e<d.length;e++){for(var n=d[e],r=!0,a=1;a<n.length;a++){var o=n[a];0!==u[o]&&(r=!1)}r&&(d.splice(e--,1),t=i(i.s=n[0]))}return t}var n={},u={2:0},d=[];function i(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return s[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=s,i.c=n,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var e=window.webpackJsonp=window.webpackJsonp||[],r=e.push.bind(e);e.push=t,e=e.slice();for(var a=0;a<e.length;a++)t(e[a]);var p=r;d.push([24,4]),c()}({24:function(t,e,n){"use strict";n.r(e);function o(t){return document.querySelector(t)}var i=function(t){var e=function(t){var e,o=t.elements,n=Object.keys(o).filter(function(t){return"honeypot"!==o[t].name||(e=o[t].value,!1)}).map(function(t){return void 0!==o[t].name?o[t].name:0<o[t].length?o[t].item(0).name:void 0}).filter(function(t,e,n){return n.indexOf(t)==e&&t}),i={};return n.forEach(function(t){var e=o[t];if(i[t]=e.value,e.length){for(var n=[],r=0;r<e.length;r++){var a=e.item(r);(a.checked||a.selected)&&n.push(a.value)}i[t]=n.join(", ")}}),i.progress=window.location.hash,i.url=window.location.href,n=n.concat(["progress","url"]),i.formDataNameOrder=JSON.stringify(n),i.formGoogleSheetName=t.dataset.sheet||"responses",i.formGoogleSend=t.dataset.email||"",{data:i,honeypot:e}}(t),n=document.querySelector("#submit-message"),r=e.data;if(e.honeypot)return!(n.innerHTML="Spam Detected!");n.innerHTML="Sending...",function(t){for(var e=t.querySelectorAll("button"),n=0;n<e.length;n++)e[n].disabled=!0}(t);var a=t.action,o=new XMLHttpRequest;o.open("POST",a),o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.onreadystatechange=function(){4===o.readyState&&200===o.status&&(t.reset(),n.innerHTML="Your email has been received!")};var i=Object.keys(r).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(r[t])}).join("&");o.send(i)},r={},l={isOverlayShown:!1,isEmailSaved:!1};r.initBookmark=function(){var t=function(t){return document.querySelectorAll(t)}(".bookmark"),e=o("#overlay");t.forEach(function(t){t.addEventListener("click",function(t){e.style.display=l.isOverlayShown?"none":"flex",l.isOverlayShown=!l.isOverlayShown})}),e.addEventListener("click",function(t){e.style.display="none",l.isOverlayShown=!1});var n=o("#submit-reminder"),r=o("input#email"),a=o("#submit-message");r.addEventListener("click",function(t){t.stopPropagation()}),n.addEventListener("click",function(t){if(t.preventDefault(),t.stopPropagation(),a.innerHTML="",function(){var t=r.value;return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())}()&&!l.isEmailSaved){var e=o("#bookmark-req-form");i(e),l.isEmailSaved=!0,r.disabled=!0,n.disabled=!0}else a.innerHTML="Invalid Email!"})};var a=r,c=n(2);function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=t[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){a=!0,o=t}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var u={},d=c.j().range([5,25]),p=c.l("#geo-map-container").append("svg").attr("x",0).attr("y",0).attr("viewBox","0 0 960 550").attr("id","geo-map");p.append("rect").attr("width","100%").attr("height","500").attr("fill","#3b3b3b");p.append("clipPath").attr("id","seizure-map-clip").append("rect").attr("width","100%").attr("height","500");var f=p.append("g").attr("clip-path","url(#seizure-map-clip)").attr("class","countries"),v=c.g().scale(160).translate([150,320]),m=p.append("g").attr("clip-path","url(#seizure-map-clip)").attr("class","seizure-bubbles"),h=c.o().scaleExtent([1,8]).on("zoom",function(){f.selectAll("path").attr("transform",c.d.transform),m.selectAll("circle").attr("transform",c.d.transform)});p.call(h);var y=c.h().projection(v),g=p.append("text").attr("class","vis-title").attr("transform","translate(650,140)").text("pangolins seized").append("tspan").attr("x",0).attr("dy","1.3em").text("(select a time range)"),b=p.append("rect").attr("transform","translate(650,106)").attr("height","5em").attr("fill","red"),w=p.append("text").attr("transform","translate(660,100)").attr("class","seizure-total").text("0"),E=p.append("g").attr("class","timeline"),M=E.append("g").attr("class","brush"),S=(c.l(".container").append("div").attr("class","bartip").style("display","none"),c.l("body").append("div").attr("class","d3-tooltip").style("opacity",0));function x(t,e){if(t){var n=k(t[0]),r=k(t[1]);g.text(n+" - "+r)}else g.text("Pangolin seizures (select a time range)");var a=e.map(function(t){return+t.ESTNUM}).reduce(function(t,e){return t+e},0);w.text("".concat(c.f(",")(Math.round(a)))),b.attr("x",w.node().getBBox().x).attr("y",w.node().getBBox().y).attr("width",+w.node().getBBox().width+20)}function T(t){var e=m.selectAll("circle.seizure-bubble").data(t,function(t){return t.id});e.attr("fill","rgba(201, 62, 62, 0.3)").attr("cx",function(t){return v([+t.Longitude,+t.Latitude])[0]}).attr("cy",function(t){return v([+t.Longitude,+t.Latitude])[1]}).attr("r",function(t){return d(+t.ESTNUM)}),e.enter().append("circle").attr("class","seizure-bubble").attr("fill","rgba(201, 62, 62, 0.3)").attr("cx",function(t){return v([+t.Longitude,+t.Latitude])[0]}).attr("cy",function(t){return v([+t.Longitude,+t.Latitude])[1]}).on("mouseover",function(t){c.l(this).attr("stroke-width",.3).attr("stroke","#fff").transition().style("fill","rgb(201, 62, 62)"),S.transition().duration(200).style("opacity",.9),S.html("\n          <div><span>Date:</span> ".concat(k(t.TIME),"</div>\n          <div><span>Country:</span> ").concat(t.Country,"</div>\n          <div><span># Pangolins:</span> ").concat(t.ESTNUM,"</div>\n          <div><span>Terms:</span> ").concat(t.carcass?"carcass, ":"").concat(t.live?"live, ":"").concat(t.scale?"scales":"","</div>\n          <div><span>From:</span> ").concat(t.Via||" - ","</div>\n          <div><span>To:</span> ").concat(t.OUTBOUND||" - ","</div>\n          ")).style("left",c.d.pageX+"px").style("top",c.d.pageY-28+"px")}).on("mouseout",function(t){c.l(this).attr("stroke-width",0).transition().style("fill","rgba(201, 62, 62, 0.3)"),S.transition().duration(500).style("opacity",0)}).attr("r",0).transition().duration(500).attr("r",function(t){return d(+t.ESTNUM)}),e.exit().attr("r",function(t){return d(+t.ESTNUM)}).transition().duration(500).attr("r",0).remove()}function k(t){return c.m("%d %b %Y")(t)}u.renderMap=function(){Promise.all([c.i("assets/maps/world_countries.json"),c.c("assets/data/valid-seizure-num-date-tooltip.csv")]).then(function(t){var e=s(t,2),n=e[0],r=e[1],a=c.n("%Y-%m-%d %H:%M:%S"),o=[],i={},l=r.map(function(t,e){return t.TIME=a(t.Date),t.YEAR=t.TIME.getFullYear(),t.ESTNUM=+t.ESTNUM,t.Latitude=+t.Latitude,t.Longitude=+t.Longitude,i[t.TIME]?i[t.TIME]+=t.ESTNUM:i[t.TIME]=t.ESTNUM,t});Object.keys(i).forEach(function(t){o.push({TIME:new Date(t),ESTNUM:i[t]})}),o.sort(function(t,e){return t.TIME-e.TIME}),d.domain(c.e(l,function(t){return+t.ESTNUM})),function(t,e){var n={top:10,right:10,bottom:20,left:15},r=960-n.left-n.right,a=40-n.bottom;E.attr("transform","translate("+n.left+" , 510)");var o=c.k().domain(c.e(e.map(function(t){return t.TIME}))).range([0,r]),i=c.a(o).ticks(20);E.append("g").attr("class","x axis").attr("transform","translate(0,"+a+")").call(i);var l=c.b().extent([[0,0],[r,a]]).on("brush end",function(){!function(t,e){if(!c.d.selection)return x(null,[]),T([]);var n=c.d.selection.map(e.invert)||e.domain(),r=t.filter(function(t){return t.TIME>=n[0]&&t.TIME<=n[1]});T(r),x(n,r)}(t,o)}),s=[new Date(2019,0,1),o.domain()[1]].map(o);M.call(l).call(l.move,s),E.selectAll(".axis .tick").on("click",function(t){var e=+c.l(this).select("text").text();!isNaN(e)&&2e3<e&&e<2020&&(2019==e?M.call(l.move,[new Date(2019,0,1),o.domain()[1]].map(o)):M.call(l.move,[new Date(e,0,1),new Date(1+e,0,1)].map(o)))})}(l,o),f.selectAll("path").data(n.features).enter().append("path").attr("d",y).style("fill","#9C5E18").attr("stroke","#3B3B3B").attr("stroke-width",1).style("opacity",.5)}).catch(function(t){console.log("d3 err",t)})};var O=u;window.addEventListener("DOMContentLoaded",function(){a.initBookmark(),O.renderMap()})}});