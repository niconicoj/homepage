var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t){return null==t?"":t}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function a(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function d(){return h(" ")}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let p;function g(t){p=t}function b(){if(!p)throw new Error("Function called outside component initialization");return p}const v=[],y=[],w=[],k=[],M=Promise.resolve();let x=!1;function D(t){w.push(t)}let _=!1;const S=new Set;function O(){if(!_){_=!0;do{for(let t=0;t<v.length;t+=1){const e=v[t];g(e),Y(e.$$)}for(g(null),v.length=0;y.length;)y.pop()();for(let t=0;t<w.length;t+=1){const e=w[t];S.has(e)||(S.add(e),e())}w.length=0}while(v.length);for(;k.length;)k.pop()();x=!1,_=!1,S.clear()}}function Y(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}const C=new Set;let H;function T(t,e){t&&t.i&&(C.delete(t),t.i(e))}function j(t,e,n,r){if(t&&t.o){if(C.has(t))return;C.add(t),H.c.push((()=>{C.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function q(t,e){const n=e.token={};function o(t,o,i,s){if(e.token!==n)return;e.resolved=s;let l=e.ctx;void 0!==i&&(l=l.slice(),l[i]=s);const u=t&&(e.current=t)(l);let c=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==o&&t&&(H={r:0,c:[],p:H},j(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),H.r||r(H.c),H=H.p)})):e.block.d(1),u.c(),T(u,1),u.m(e.mount(),e.anchor),c=!0),e.block=u,e.blocks&&(e.blocks[o]=u),c&&O()}if((i=t)&&"object"==typeof i&&"function"==typeof i.then){const n=b();if(t.then((t=>{g(n),o(e.then,1,e.value,t),g(null)}),(t=>{if(g(n),o(e.catch,2,e.error,t),g(null),!e.hasCatch)throw t})),e.current!==e.pending)return o(e.pending,0),!0}else{if(e.current!==e.then)return o(e.then,1,e.value,t),!0;e.resolved=t}var i}function A(t){t&&t.c()}function E(t,n,i,s){const{fragment:l,on_mount:u,on_destroy:c,after_update:a}=t.$$;l&&l.m(n,i),s||D((()=>{const n=u.map(e).filter(o);c?c.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(D)}function L(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function W(t,e){-1===t.$$.dirty[0]&&(v.push(t),x||(x=!0,M.then(O)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function I(e,o,i,s,l,u,a,f=[-1]){const h=p;g(e);const d=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(h?h.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:o.target||h.$$.root};a&&a(d.root);let $=!1;if(d.ctx=i?i(e,o.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&l(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),$&&W(e,t)),n})):[],d.update(),$=!0,r(d.before_update),d.fragment=!!s&&s(d.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);d.fragment&&d.fragment.l(t),t.forEach(c)}else d.fragment&&d.fragment.c();o.intro&&T(e.$$.fragment),E(e,o.target,o.anchor,o.customElement),O()}g(h)}class N{$destroy(){L(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const z=[{label:"~/dev",headerColor:"#7fbbb3",links:[{label:"github",url:"https://github.com"},{label:"personal gitlab",url:"https://gitlab.niconico.io"},{label:"stackoverflow",url:"https://stackoverflow.com"},{label:"archwiki",url:"https://wiki.archlinux.org/"},{label:"awesome-rust",url:"https://github.com/rust-unofficial/awesome-rust"},{label:"crafting interpreters",url:"https://craftinginterpreters.com/contents.html"}]},{label:"~/news",headerColor:"#d699b6",links:[{label:"this week in rust",url:"https://this-week-in-rust.org"},{label:"medium",url:"https://medium.com"},{label:"baby steps",url:"https://smallcultfollowing.com/babysteps/"},{label:"archlinux",url:"https://archlinux.org"},{label:"lwn",url:"https://lwn.net/"},{label:"phoronix",url:"https://phoronix.com/"}]},{label:"~/social",headerColor:"#a7c080",links:[{label:"twitter",url:"https://twitter.com"},{label:"reddit",url:"https://reddit.com"},{label:"linkedin",url:"https://linkedin.com"},{label:"gmail",url:"https://mail.google.com"}]},{label:"~/fun",headerColor:"#dbbc7f",links:[{label:"youtube",url:"https://youtube.com"},{label:"twitch",url:"https://twitch.tv"},{label:"chess",url:"https://chess.com"}]}];function F(t,e,n){const r=t.slice();return r[0]=e[n],r}function U(t,e,n){const r=t.slice();return r[3]=e[n],r}function J(e){let n,r,o,i=e[3].label+"";return{c(){n=f("a"),r=h(i),$(n,"href",o=e[3].url),$(n,"class","link svelte-9xg7bf")},m(t,e){u(t,n,e),l(n,r)},p:t,d(t){t&&c(n)}}}function Z(t){let e,n,r,o,i,s,m=t[0].label+"",p=t[0].links,g=[];for(let e=0;e<p.length;e+=1)g[e]=J(U(t,p,e));return{c(){e=f("div"),n=f("div"),r=h(m),i=d();for(let t=0;t<g.length;t+=1)g[t].c();s=d(),$(n,"style",o="color: "+t[0].headerColor),$(n,"class","title svelte-9xg7bf"),$(e,"class","col svelte-9xg7bf")},m(t,o){u(t,e,o),l(e,n),l(n,r),l(e,i);for(let t=0;t<g.length;t+=1)g[t].m(e,null);l(e,s)},p(t,n){if(0&n){let r;for(p=t[0].links,r=0;r<p.length;r+=1){const o=U(t,p,r);g[r]?g[r].p(o,n):(g[r]=J(o),g[r].c(),g[r].m(e,s))}for(;r<g.length;r+=1)g[r].d(1);g.length=p.length}},d(t){t&&c(e),a(g,t)}}}function V(e){let n,r=z,o=[];for(let t=0;t<r.length;t+=1)o[t]=Z(F(e,r,t));return{c(){n=f("div");for(let t=0;t<o.length;t+=1)o[t].c();$(n,"class","container svelte-9xg7bf")},m(t,e){u(t,n,e);for(let t=0;t<o.length;t+=1)o[t].m(n,null)},p(t,[e]){if(0&e){let i;for(r=z,i=0;i<r.length;i+=1){const s=F(t,r,i);o[i]?o[i].p(s,e):(o[i]=Z(s),o[i].c(),o[i].m(n,null))}for(;i<o.length;i+=1)o[i].d(1);o.length=r.length}},i:t,o:t,d(t){t&&c(n),a(o,t)}}}class B extends N{constructor(t){super(),I(this,t,null,V,i,{})}}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var P,Q,G=(P=function(t,e){t.exports=function(){var t=1e3,e=6e4,n=36e5,r="millisecond",o="second",i="minute",s="hour",l="day",u="week",c="month",a="quarter",f="year",h="date",d="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},g=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},b={s:g,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),o=n%60;return(e<=0?"+":"-")+g(r,2,"0")+":"+g(o,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),o=e.clone().add(r,c),i=n-o<0,s=e.clone().add(r+(i?-1:1),c);return+(-(r+(n-o)/(i?o-s:s-o))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:f,w:u,d:l,D:h,h:s,m:i,s:o,ms:r,Q:a}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",y={};y[v]=p;var w=function(t){return t instanceof D},k=function(t,e,n){var r;if(!t)return v;if("string"==typeof t)y[t]&&(r=t),e&&(y[t]=e,r=t);else{var o=t.name;y[o]=t,r=o}return!n&&r&&(v=r),r||!n&&v},M=function(t,e){if(w(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new D(n)},x=b;x.l=k,x.i=w,x.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var D=function(){function p(t){this.$L=k(t.locale,null,!0),this.parse(t)}var g=p.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(x.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var o=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return x},g.isValid=function(){return!(this.$d.toString()===d)},g.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},g.isAfter=function(t,e){return M(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<M(t)},g.$g=function(t,e,n){return x.u(t)?this[e]:this.set(n,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var n=this,r=!!x.u(e)||e,a=x.p(t),d=function(t,e){var o=x.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?o:o.endOf(l)},$=function(t,e){return x.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,p=this.$M,g=this.$D,b="set"+(this.$u?"UTC":"");switch(a){case f:return r?d(1,0):d(31,11);case c:return r?d(1,p):d(0,p+1);case u:var v=this.$locale().weekStart||0,y=(m<v?m+7:m)-v;return d(r?g-y:g+(6-y),p);case l:case h:return $(b+"Hours",0);case s:return $(b+"Minutes",1);case i:return $(b+"Seconds",2);case o:return $(b+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var n,u=x.p(t),a="set"+(this.$u?"UTC":""),d=(n={},n[l]=a+"Date",n[h]=a+"Date",n[c]=a+"Month",n[f]=a+"FullYear",n[s]=a+"Hours",n[i]=a+"Minutes",n[o]=a+"Seconds",n[r]=a+"Milliseconds",n)[u],$=u===l?this.$D+(e-this.$W):e;if(u===c||u===f){var m=this.clone().set(h,1);m.$d[d]($),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else d&&this.$d[d]($);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[x.p(t)]()},g.add=function(r,a){var h,d=this;r=Number(r);var $=x.p(a),m=function(t){var e=M(d);return x.w(e.date(e.date()+Math.round(t*r)),d)};if($===c)return this.set(c,this.$M+r);if($===f)return this.set(f,this.$y+r);if($===l)return m(1);if($===u)return m(7);var p=(h={},h[i]=e,h[s]=n,h[o]=t,h)[$]||1,g=this.$d.getTime()+r*p;return x.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var r=t||"YYYY-MM-DDTHH:mm:ssZ",o=x.z(this),i=this.$H,s=this.$m,l=this.$M,u=n.weekdays,c=n.months,a=function(t,n,o,i){return t&&(t[n]||t(e,r))||o[n].substr(0,i)},f=function(t){return x.s(i%12||12,t,"0")},h=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:x.s(l+1,2,"0"),MMM:a(n.monthsShort,l,c,3),MMMM:a(c,l),D:this.$D,DD:x.s(this.$D,2,"0"),d:String(this.$W),dd:a(n.weekdaysMin,this.$W,u,2),ddd:a(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(i),HH:x.s(i,2,"0"),h:f(1),hh:f(2),a:h(i,s,!0),A:h(i,s,!1),m:String(s),mm:x.s(s,2,"0"),s:String(this.$s),ss:x.s(this.$s,2,"0"),SSS:x.s(this.$ms,3,"0"),Z:o};return r.replace(m,(function(t,e){return e||$[t]||o.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(r,h,d){var $,m=x.p(h),p=M(r),g=(p.utcOffset()-this.utcOffset())*e,b=this-p,v=x.m(this,p);return v=($={},$[f]=v/12,$[c]=v,$[a]=v/3,$[u]=(b-g)/6048e5,$[l]=(b-g)/864e5,$[s]=b/n,$[i]=b/e,$[o]=b/t,$)[m]||b,d?v:x.a(v)},g.daysInMonth=function(){return this.endOf(c).$D},g.$locale=function(){return y[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=k(t,e,!0);return r&&(n.$L=r),n},g.clone=function(){return x.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},p}(),_=D.prototype;return M.prototype=_,[["$ms",r],["$s",o],["$m",i],["$H",s],["$W",l],["$M",c],["$y",f],["$D",h]].forEach((function(t){_[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,D,M),t.$i=!0),M},M.locale=k,M.isDayjs=w,M.unix=function(t){return M(1e3*t)},M.en=y[v],M.Ls=y,M.p={},M}()},P(Q={exports:{}},Q.exports),Q.exports);function K(e){let n,r,o,i,a,p,g,b=e[1].format("HH:mm:ss")+"",v=e[1].format("DD | MM | YYYY")+"";return{c(){n=f("div"),r=f("div"),o=h(b),i=d(),a=f("div"),p=h(v),$(r,"class","time svelte-12q2y8k"),$(a,"class","day svelte-12q2y8k"),$(n,"class",g=s(["clock",e[0]].join(" "))+" svelte-12q2y8k")},m(t,e){u(t,n,e),l(n,r),l(r,o),l(n,i),l(n,a),l(a,p)},p(t,[e]){2&e&&b!==(b=t[1].format("HH:mm:ss")+"")&&m(o,b),2&e&&v!==(v=t[1].format("DD | MM | YYYY")+"")&&m(p,v),1&e&&g!==(g=s(["clock",t[0]].join(" "))+" svelte-12q2y8k")&&$(n,"class",g)},i:t,o:t,d(t){t&&c(n)}}}function R(t,e,n){let r=G();!function(t){b().$$.on_mount.push(t)}((()=>{const t=setInterval((()=>{n(1,r=G())}),1e3);return()=>{clearInterval(t)}}));let{align:o="center"}=e;return t.$$set=t=>{"align"in t&&n(0,o=t.align)},[o,r]}class X extends N{constructor(t){super(),I(this,t,R,K,i,{align:0})}}function tt(e){let n,r,o,i,s;return i=new X({props:{align:"right"}}),{c(){n=f("header"),r=f("h1"),r.textContent="HOME",o=d(),A(i.$$.fragment),$(r,"class","svelte-16dc0zq"),$(n,"class","svelte-16dc0zq")},m(t,e){u(t,n,e),l(n,r),l(n,o),E(i,n,null),s=!0},p:t,i(t){s||(T(i.$$.fragment,t),s=!0)},o(t){j(i.$$.fragment,t),s=!1},d(t){t&&c(n),L(i)}}}class et extends N{constructor(t){super(),I(this,t,null,tt,i,{})}}function nt(e){let n,r,o=e[2].message+"";return{c(){n=f("div"),r=h(o)},m(t,e){u(t,n,e),l(n,r)},p:t,d(t){t&&c(n)}}}function rt(e){let n,r,o,i,s,a,m=e[1].content+"",p=e[1].author+"";return{c(){n=f("div"),r=h(m),o=d(),i=f("div"),s=h("└╴"),a=h(p),$(i,"class","author svelte-egq1l5")},m(t,e){u(t,n,e),l(n,r),u(t,o,e),u(t,i,e),l(i,s),l(i,a)},p:t,d(t){t&&c(n),t&&c(o),t&&c(i)}}}function ot(e){let n;return{c(){n=f("div"),n.textContent="..."},m(t,e){u(t,n,e)},p:t,d(t){t&&c(n)}}}function it(e){let n,r={ctx:e,current:null,token:null,hasCatch:!0,pending:ot,then:rt,catch:nt,value:1,error:2};return q(e[0],r),{c(){n=f("quote"),r.block.c()},m(t,e){u(t,n,e),r.block.m(n,r.anchor=null),r.mount=()=>n,r.anchor=null},p(t,[n]){!function(t,e,n){const r=e.slice(),{resolved:o}=t;t.current===t.then&&(r[t.value]=o),t.current===t.catch&&(r[t.error]=o),t.block.p(r,n)}(r,e=t,n)},i:t,o:t,d(t){t&&c(n),r.block.d(),r.token=null,r=null}}}function st(t){return[(async()=>{const t=await fetch("https://api.quotable.io/random"),e=await t.json();if(t.ok)return e;throw new Error("something went wrong when fetching a random quote")})()]}class lt extends N{constructor(t){super(),I(this,t,st,it,i,{})}}function ut(e){let n,r,o,i,s,a,h,m,p,g;return s=new et({}),h=new B({}),p=new lt({}),{c(){n=f("main"),r=f("div"),r.innerHTML='<img alt="keyboard cat" src="catkeyboard.webp" class="svelte-fjpyu3"/>',o=d(),i=f("div"),A(s.$$.fragment),a=d(),A(h.$$.fragment),m=d(),A(p.$$.fragment),$(r,"class","col picture svelte-fjpyu3"),$(i,"class","col content svelte-fjpyu3"),$(n,"class","svelte-fjpyu3")},m(t,e){u(t,n,e),l(n,r),l(n,o),l(n,i),E(s,i,null),l(i,a),E(h,i,null),l(i,m),E(p,i,null),g=!0},p:t,i(t){g||(T(s.$$.fragment,t),T(h.$$.fragment,t),T(p.$$.fragment,t),g=!0)},o(t){j(s.$$.fragment,t),j(h.$$.fragment,t),j(p.$$.fragment,t),g=!1},d(t){t&&c(n),L(s),L(h),L(p)}}}return new class extends N{constructor(t){super(),I(this,t,null,ut,i,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map