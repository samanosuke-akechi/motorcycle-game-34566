!function(t){function e(i){if(r[i])return r[i].exports;var n=r[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var r={};e.m=t,e.c=r,e.d=function(t,r,i){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var n in t)e.d(i,n,function(e){return t[e]}.bind(null,n));return i},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="./",e(e.s=0)}([function(){var t=Math.PI,e=Math.floor,r=document.createElement("canvas"),i=r.getContext("2d");r.width=1200,r.height=600,document.body.appendChild(r);for(var n=[];255>n.length;){for(;n.includes(val=e(255*Math.random())););n.push(val)}var o=function(r){return function(e,r,i){return e+(r-e)*(1-Math.cos(i*t))/2}(n[e(r=.01*r%255)],n[Math.ceil(r)],r-e(r))},h=new function(){this.x=r.width/2,this.y=0,this.ySpeed=0,this.rot=0,this.rSpeed=0,this.img=new Image,this.img.src="images/kohacu.com_002283_20190409_v2.png",this.draw=function(){var e=r.height-.25*o(s+this.x),n=r.height-.25*o(s+5+this.x),h=0;e-15>this.y?this.ySpeed+=.1:(this.ySpeed-=this.y-(e-15),this.y=e-15,h=1),(!u||h&&Math.abs(this.rot)>.5*t)&&(u=!1,this.rSpeed=5,l.ArrowUp=1,this.x-=5*a);var f=Math.atan2(n-15-this.y,this.x+5-this.x);this.y+=this.ySpeed,h&&u&&(this.rot-=.5*(this.rot-f),this.rSpeed-=f-this.rot),this.rSpeed+=.05*(l.ArrowLeft-l.ArrowRight),this.rot-=.1*this.rSpeed,this.rot>t&&(this.rot=-t),this.rot<-t&&(this.rot=t),i.save(),i.translate(this.x,this.y),i.rotate(this.rot),i.drawImage(this.img,-70,-70,100,100),i.restore()}},s=0,a=0,u=!0,l={ArrowUp:0,ArrowDown:0,ArrowLeft:0,ArrowRight:0};onkeydown=function(t){return l[t.key]=1},onkeyup=function(t){return l[t.key]=0},function t(){a-=.1*(a-(l.ArrowUp-l.ArrowDown)),s+=10*a,i.fillStyle="#19f",i.fillRect(0,0,r.width,r.height),i.fillStyle="black",i.beginPath(),i.moveTo(0,r.height);for(var e=0;e<r.width;e++)i.lineTo(e,r.height-.25*o(s+e));i.lineTo(r.width,r.height),i.fill(),h.draw(),requestAnimationFrame(t)}()}]);
//# sourceMappingURL=app.js.map