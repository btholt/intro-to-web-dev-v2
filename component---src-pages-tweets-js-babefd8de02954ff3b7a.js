"use strict";(self.webpackChunkintro_to_web_dev_v2=self.webpackChunkintro_to_web_dev_v2||[]).push([[929],{3372:function(e){function r(e,r){if(!Array.isArray(e))throw new Error("shuffle expect an array as parameter.");r=r||{};var t,n,a=e,o=e.length,s=r.rng||Math.random;for(!0===r.copy&&(a=e.slice());o;)t=Math.floor(s()*o),n=a[o-=1],a[o]=a[t],a[t]=n;return a}r.pick=function(e,r){if(!Array.isArray(e))throw new Error("shuffle.pick() expect an array as parameter.");var t=(r=r||{}).rng||Math.random,n=r.picks||1;if("number"==typeof n&&1!==n){for(var a,o=e.length,s=e.slice(),c=[];n&&o;)a=Math.floor(t()*o),c.push(s[a]),s.splice(a,1),o-=1,n-=1;return c}return e[Math.floor(t()*e.length)]},e.exports=r},252:function(e,r,t){t.r(r);var n=t(1721),a=t(7294),o=t(4043),s=t(3372),c=t.n(s),i=t(9317),l=function(e){function r(){for(var r,t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return(r=e.call.apply(e,[this].concat(n))||this).state={tweets:c()(i.Z)},r}return(0,n.Z)(r,e),r.prototype.render=function(){return a.createElement("div",{className:"lesson-container"},a.createElement("div",{className:"lesson lesson-flex"},a.createElement("h1",null,"Hooray! You made it here!"),this.state.tweets.map((function(e){return a.createElement(o.tP,{key:e,tweetId:e,options:{conversation:"none"}})}))))},r}(a.Component);r.default=l}}]);
//# sourceMappingURL=component---src-pages-tweets-js-babefd8de02954ff3b7a.js.map