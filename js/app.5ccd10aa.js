(function(e){function t(t){for(var o,i,a=t[0],l=t[1],s=t[2],f=0,p=[];f<a.length;f++)i=a[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(p.length)p.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(o=!1)}o&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},c=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var u=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o,r,c=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("HelloWorld"),n("tableDataCopyDemo")],1)},a=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("p"),n("div",{staticClass:"row"},[n("el-button",{staticClass:"copyBtn",attrs:{"data-test":"test...","data-clipboard-text":e.diyContent,icon:"el-icon-copy-document"}},[e._v("复制口令")])],1)])},s=[],u=n("b311"),f=n.n(u),p={name:"HelloWorld",data:function(){return{clipboard:null,diyContent:"15:/【红包】你有一个红包待领取，最高888元，快来看看吧！➱⤴️īng✭崠(E4D1y85kPdO)"}},mounted:function(){this.clipboard=new f.a(".copyBtn"),this.clipboard.on("success",this.successFunc),this.clipboard.on("error",this.errorFunc)},methods:{successFunc:function(e){console.info("Action:",e.action),console.info("Text:",e.text),console.info("Trigger:",e.trigger),e.trigger.dataset.test&&console.log(e.trigger.dataset.test),e.clearSelection(),this.$notify({title:"成功",message:"恭喜您复制成功 !",type:"success",showClose:!1})},errorFunc:function(e){console.error("Action:",e.action),console.error("Trigger:",e.trigger),this.$notify.error({title:"失败",message:"暂无更新，请稍后再试！",showClose:!1})}},beforeDestroy:function(){this.clipboardclipboard.off("error"),this.clipboardclipboard.off("success"),this.clipboardclipboard.destroy()}},d=p,b=(n("b6fe"),n("2877")),h=Object(b["a"])(d,l,s,!1,null,"5096eeba",null),y=h.exports,g={},v=Object(b["a"])(g,o,r,!1,null,"12f5a128",null),m=v.exports,w={name:"App",components:{HelloWorld:y,tableDataCopyDemo:m}},O=w,j=(n("034f"),Object(b["a"])(O,i,a,!1,null,null,null)),x=j.exports,_=n("5c96"),C=n.n(_);n("0fae");c["default"].config.productionTip=!1,c["default"].use(C.a),new c["default"]({render:function(e){return e(x)}}).$mount("#app")},"85ec":function(e,t,n){},b6fe:function(e,t,n){"use strict";var o=n("db8a"),r=n.n(o);r.a},db8a:function(e,t,n){}});
//# sourceMappingURL=app.5ccd10aa.js.map
