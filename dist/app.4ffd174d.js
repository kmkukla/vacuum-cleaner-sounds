parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"A2T1":[function(require,module,exports) {
var e,t,n,c=document.querySelector(".sound"),o=document.querySelector(".range"),u=document.querySelectorAll(".btn-duration"),r=document.querySelectorAll(".btn-sound"),a=document.querySelector(".time-display"),s=document.querySelector(".play"),i=document.querySelector(".play-img");function d(){c.paused?(c.play(),i.src="./svg/pause.svg",l()):(clearTimeout(n),c.pause(),i.src="./svg/play.svg")}function l(){m(t-=1),t>0?n=setTimeout(l,1e3):v()}function m(e){var t=Math.floor(e%60),n=Math.floor(e/60);a.textContent="".concat(n<10?"0"+n:n,":").concat(t<10?"0"+t:t)}function v(){clearTimeout(n),c.pause(),i.src="./svg/play.svg",t=e}s.addEventListener("click",d),document.addEventListener("DOMContentLoaded",function(){c.src="./sounds/classic-crop.mp3",i.src="./svg/play.svg",c.volume=o.value/400,t=e=5}),c.addEventListener("timeupdate",function(){c.currentTime>c.duration-.44&&(c.currentTime=0,c.play())}),r.forEach(function(e){return e.addEventListener("click",function(){v(),c.src=this.dataset.sound,d()})}),u.forEach(function(t){return t.addEventListener("click",function(){e=60*this.dataset.time,v(),m(e)})}),o.addEventListener("input",function(){c.volume=o.value/400});
},{}]},{},["A2T1"], null)
//# sourceMappingURL=app.4ffd174d.js.map