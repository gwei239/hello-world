(function(){var h={},mt={},c={id:"b9ca1fb98a8894d96844f49ab755e654",dm:["pp-lt.cn"],js:"tongji.baidu.com/hm-web/js/",etrk:[],icon:'',ctrk:false,align:-1,nv:-1,vdur:1800000,age:31536000000,rec:0,rp:[],trust:0,vcard:0,qiao:0,lxb:0,conv:0,apps:''};var p=!0,q=null,r=!1;mt.i={};mt.i.Fa=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.i.cookieEnabled=navigator.cookieEnabled;mt.i.javaEnabled=navigator.javaEnabled();mt.i.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.i.na=(window.screen.width||0)+"x"+(window.screen.height||0);mt.i.colorDepth=window.screen.colorDepth||0;mt.cookie={};
mt.cookie.set=function(a,b,d){var k;d.B&&(k=new Date,k.setTime(k.getTime()+d.B));document.cookie=a+"="+b+(d.domain?"; domain="+d.domain:"")+(d.path?"; path="+d.path:"")+(k?"; expires="+k.toGMTString():"")+(d.Ja?"; secure":"")};mt.cookie.get=function(a){return(a=RegExp("(^| )"+a+"=([^;]*)(;|$)").exec(document.cookie))?a[2]:q};mt.p={};mt.p.Aa=function(a){return document.getElementById(a)};mt.p.Ba=function(a,b){for(b=b.toUpperCase();(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==b)return a;return q};
(mt.p.la=function(){function a(){if(!a.s){a.s=p;for(var b=0,d=k.length;b<d;b++)k[b]()}}function b(){try{document.documentElement.doScroll("left")}catch(k){setTimeout(b,1);return}a()}var d=r,k=[],f;document.addEventListener?f=function(){document.removeEventListener("DOMContentLoaded",f,r);a()}:document.attachEvent&&(f=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",f),a())});(function(){if(!d)if(d=p,"complete"===document.readyState)a.s=p;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",
f,r),window.addEventListener("load",a,r);else if(document.attachEvent){document.attachEvent("onreadystatechange",f);window.attachEvent("onload",a);var k=r;try{k=window.frameElement==q}catch(n){}document.documentElement.doScroll&&k&&b()}})();return function(b){a.s?b():k.push(b)}}()).s=r;mt.event={};mt.event.e=function(a,b,d){a.attachEvent?a.attachEvent("on"+b,function(b){d.call(a,b)}):a.addEventListener&&a.addEventListener(b,d,r)};
mt.event.preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=r};mt.l={};mt.l.parse=function(){return(new Function('return (" + source + ")'))()};
mt.l.stringify=function(){function a(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var b=d[a];if(b)return b;b=a.charCodeAt();return"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16)}));return'"'+a+'"'}function b(a){return 10>a?"0"+a:a}var d={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(d){switch(typeof d){case "undefined":return"undefined";case "number":return isFinite(d)?String(d):"null";case "string":return a(d);case "boolean":return String(d);
default:if(d===q)return"null";if(d instanceof Array){var f=["["],m=d.length,n,e,l;for(e=0;e<m;e++)switch(l=d[e],typeof l){case "undefined":case "function":case "unknown":break;default:n&&f.push(","),f.push(mt.l.stringify(l)),n=1}f.push("]");return f.join("")}if(d instanceof Date)return'"'+d.getFullYear()+"-"+b(d.getMonth()+1)+"-"+b(d.getDate())+"T"+b(d.getHours())+":"+b(d.getMinutes())+":"+b(d.getSeconds())+'"';n=["{"];e=mt.l.stringify;for(m in d)if(Object.prototype.hasOwnProperty.call(d,m))switch(l=
d[m],typeof l){case "undefined":case "unknown":case "function":break;default:f&&n.push(","),f=1,n.push(e(m)+":"+e(l))}n.push("}");return n.join("")}}}();mt.lang={};mt.lang.d=function(a,b){return"[object "+b+"]"==={}.toString.call(a)};mt.lang.Ga=function(a){return mt.lang.d(a,"Number")&&isFinite(a)};mt.lang.Ia=function(a){return mt.lang.d(a,"String")};mt.localStorage={};
mt.localStorage.w=function(){if(!mt.localStorage.f)try{mt.localStorage.f=document.createElement("input"),mt.localStorage.f.type="hidden",mt.localStorage.f.style.display="none",mt.localStorage.f.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.f)}catch(a){return r}return p};
mt.localStorage.set=function(a,b,d){var k=new Date;k.setTime(k.getTime()+d||31536E6);try{window.localStorage?(b=k.getTime()+"|"+b,window.localStorage.setItem(a,b)):mt.localStorage.w()&&(mt.localStorage.f.expires=k.toUTCString(),mt.localStorage.f.load(document.location.hostname),mt.localStorage.f.setAttribute(a,b),mt.localStorage.f.save(document.location.hostname))}catch(f){}};
mt.localStorage.get=function(a){if(window.localStorage){if(a=window.localStorage.getItem(a)){var b=a.indexOf("|"),d=a.substring(0,b)-0;if(d&&d>(new Date).getTime())return a.substring(b+1)}}else if(mt.localStorage.w())try{return mt.localStorage.f.load(document.location.hostname),mt.localStorage.f.getAttribute(a)}catch(k){}return q};
mt.localStorage.remove=function(a){if(window.localStorage)window.localStorage.removeItem(a);else if(mt.localStorage.w())try{mt.localStorage.f.load(document.location.hostname),mt.localStorage.f.removeAttribute(a),mt.localStorage.f.save(document.location.hostname)}catch(b){}};mt.sessionStorage={};mt.sessionStorage.set=function(a,b){if(window.sessionStorage)try{window.sessionStorage.setItem(a,b)}catch(d){}};
mt.sessionStorage.get=function(a){return window.sessionStorage?window.sessionStorage.getItem(a):q};mt.sessionStorage.remove=function(a){window.sessionStorage&&window.sessionStorage.removeItem(a)};mt.Q={};mt.Q.log=function(a,b){var d=new Image,k="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[k]=d;d.onload=d.onerror=d.onabort=function(){d.onload=d.onerror=d.onabort=q;d=window[k]=q;b&&b(a)};d.src=a};mt.I={};
mt.I.da=function(){var a="";if(navigator.plugins&&navigator.mimeTypes.length){var b=navigator.plugins["Shockwave Flash"];b&&b.description&&(a=b.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a=b.GetVariable("$version"))&&(a=a.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(d){}return a};
mt.I.ya=function(a,b,d,k,f){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+a+'" width="'+d+'" height="'+k+'"><param name="movie" value="'+b+'" /><param name="flashvars" value="'+(f||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+a+'" width="'+d+'" height="'+k+'" src="'+b+'" flashvars="'+(f||"")+'" allowscriptaccess="always" /></object>'};mt.url={};
mt.url.g=function(a,b){var d=a.match(RegExp("(^|&|\\?|#)("+b+")=([^&#]*)(&|$|#)",""));return d?d[3]:q};mt.url.Da=function(a){return(a=a.match(/^(https?:)\/\//))?a[1]:q};mt.url.aa=function(a){return(a=a.match(/^(https?:\/\/)?([^\/\?#]*)/))?a[2].replace(/.*@/,""):q};mt.url.K=function(a){return(a=mt.url.aa(a))?a.replace(/:\d+$/,""):a};mt.url.Ca=function(a){return(a=a.match(/^(https?:\/\/)?[^\/]*(.*)/))?a[2].replace(/[\?#].*/,"").replace(/^$/,"/"):q};
h.o={Ea:"http://tongji.baidu.com/hm-web/welcome/ico",P:"hm.baidu.com/hm.gif",T:"baidu.com",ga:"hmmd",ha:"hmpl",fa:"hmkw",ea:"hmci",ia:"hmsr",m:0,j:Math.round(+new Date/1E3),protocol:"https:"==document.location.protocol?"https:":"http:",Ha:0,va:6E5,wa:10,xa:1024,ua:1,O:2147483647,R:"cc cf ci ck cl cm cp cw ds ep et fl ja ln lo lt nv rnd si st su v cv lv api tt u".split(" ")};
(function(){var a={k:{},e:function(a,d){this.k[a]=this.k[a]||[];this.k[a].push(d)},q:function(a,d){this.k[a]=this.k[a]||[];for(var k=this.k[a].length,f=0;f<k;f++)this.k[a][f](d)}};return h.A=a})();
(function(){function a(a,k){var f=document.createElement("script");f.charset="utf-8";b.d(k,"Function")&&(f.readyState?f.onreadystatechange=function(){if("loaded"===f.readyState||"complete"===f.readyState)f.onreadystatechange=q,k()}:f.onload=function(){k()});f.src=a;var m=document.getElementsByTagName("script")[0];m.parentNode.insertBefore(f,m)}var b=mt.lang;return h.load=a})();
(function(){function a(){return function(){h.b.a.nv=0;h.b.a.st=4;h.b.a.et=3;h.b.a.ep=h.z.ba()+","+h.z.$();h.b.h()}}function b(){clearTimeout(x);var a;w&&(a="visible"==document[w]);y&&(a=!document[y]);e="undefined"==typeof a?p:a;if((!n||!l)&&e&&g)v=p,s=+new Date;else if(n&&l&&(!e||!g))v=r,u+=+new Date-s;n=e;l=g;x=setTimeout(b,100)}function d(a){var l=document,g="";if(a in l)g=a;else for(var s=["webkit","ms","moz","o"],d=0;d<s.length;d++){var b=s[d]+a.charAt(0).toUpperCase()+a.slice(1);if(b in l){g=
b;break}}return g}function k(a){if(!("focus"==a.type||"blur"==a.type)||!(a.target&&a.target!=window))g="focus"==a.type||"focusin"==a.type?p:r,b()}var f=mt.event,m=h.A,n=p,e=p,l=p,g=p,t=+new Date,s=t,u=0,v=p,w=d("visibilityState"),y=d("hidden"),x;b();(function(){var a=w.replace(/[vV]isibilityState/,"visibilitychange");f.e(document,a,b);f.e(window,"pageshow",b);f.e(window,"pagehide",b);"object"==typeof document.onfocusin?(f.e(document,"focusin",k),f.e(document,"focusout",k)):(f.e(window,"focus",k),
f.e(window,"blur",k))})();h.z={ba:function(){return+new Date-t},$:function(){return v?+new Date-s+u:u}};m.e("pv-b",function(){f.e(window,"unload",a())});return h.z})();
(function(){var a=mt.lang,b=h.o,d=h.load,k={ka:function(f){if((void 0===window._dxt||a.d(window._dxt,"Array"))&&"undefined"!==typeof h.b){var k=h.b.C();d([b.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(k)].join(""),f)}},ta:function(d){if(a.d(d,"String")||a.d(d,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",d])}};return h.W=k})();
(function(){function a(l){for(var g in l)if({}.hasOwnProperty.call(l,g)){var b=l[g];d.d(b,"Object")||d.d(b,"Array")?a(b):l[g]=String(b)}}function b(a){return a.replace?a.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):a}var d=mt.lang,k=mt.l,f=h.o,m=h.A,n=h.W,e={L:q,n:[],t:0,M:r,init:function(){e.c=0;e.L={push:function(){e.G.apply(e,arguments)}};m.e("pv-b",function(){e.X();e.Y()});m.e("pv-d",e.Z);m.e("stag-b",function(){h.b.a.api=e.c||e.t?e.c+"_"+e.t:""});m.e("stag-d",function(){h.b.a.api=
0;e.c=0;e.t=0})},X:function(){var a=window._hmt;if(a&&a.length)for(var g=0;g<a.length;g++){var d=a[g];switch(d[0]){case "_setAccount":1<d.length&&/^[0-9a-z]{32}$/.test(d[1])&&(e.c|=1,window._bdhm_account=d[1]);break;case "_setAutoPageview":if(1<d.length&&(d=d[1],r===d||p===d))e.c|=2,window._bdhm_autoPageview=d}}},Y:function(){if("undefined"===typeof window._bdhm_account||window._bdhm_account===c.id){window._bdhm_account=c.id;var a=window._hmt;if(a&&a.length)for(var g=0,b=a.length;g<b;g++)d.d(a[g],
"Array")&&"_trackEvent"!==a[g][0]&&"_trackRTEvent"!==a[g][0]?e.G(a[g]):e.n.push(a[g]);window._hmt=e.L}},Z:function(){if(0<e.n.length)for(var a=0,d=e.n.length;a<d;a++)e.G(e.n[a]);e.n=q},G:function(a){if(d.d(a,"Array")){var g=a[0];if(e.hasOwnProperty(g)&&d.d(e[g],"Function"))e[g](a)}},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"==a[1].charAt(0)){e.c|=4;h.b.a.et=0;h.b.a.ep="";h.b.D?(h.b.a.nv=0,h.b.a.st=4):h.b.D=p;var d=h.b.a.u,b=h.b.a.su;h.b.a.u=f.protocol+"//"+document.location.host+a[1];
e.M||(h.b.a.su=document.location.href);h.b.h();h.b.a.u=d;h.b.a.su=b}},_trackEvent:function(a){2<a.length&&(e.c|=8,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=4,h.b.a.ep=b(a[1])+"*"+b(a[2])+(a[3]?"*"+b(a[3]):"")+(a[4]?"*"+b(a[4]):""),h.b.h())},_setCustomVar:function(a){if(!(4>a.length)){var d=a[1],f=a[4]||3;if(0<d&&6>d&&0<f&&4>f){e.t++;for(var s=(h.b.a.cv||"*").split("!"),u=s.length;u<d-1;u++)s.push("*");s[d-1]=f+"*"+b(a[2])+"*"+b(a[3]);h.b.a.cv=s.join("!");a=h.b.a.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,
"");""!==a?h.b.setData("Hm_cv_"+c.id,encodeURIComponent(a),c.age):h.b.ma("Hm_cv_"+c.id)}}},_setReferrerOverride:function(a){1<a.length&&(h.b.a.su=a[1].charAt&&"/"==a[1].charAt(0)?f.protocol+"//"+window.location.host+a[1]:a[1],e.M=p)},_trackOrder:function(b){b=b[1];d.d(b,"Object")&&(a(b),e.c|=16,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=94,h.b.a.ep=k.stringify(b),h.b.h())},_trackMobConv:function(a){if(a={webim:1,tel:2,map:3,sms:4,callback:5,share:6}[a[1]])e.c|=32,h.b.a.et=93,h.b.a.ep=a,h.b.h()},_trackRTPageview:function(b){b=
b[1];d.d(b,"Object")&&(a(b),b=k.stringify(b),512>=encodeURIComponent(b).length&&(e.c|=64,h.b.a.rt=b))},_trackRTEvent:function(b){b=b[1];if(d.d(b,"Object")){a(b);b=encodeURIComponent(k.stringify(b));var g=function(a){var b=h.b.a.rt;e.c|=128;h.b.a.et=90;h.b.a.rt=a;h.b.h();h.b.a.rt=b},t=b.length;if(900>=t)g.call(this,b);else for(var t=Math.ceil(t/900),s="block|"+Math.round(Math.random()*f.O).toString(16)+"|"+t+"|",u=[],v=0;v<t;v++)u.push(v),u.push(b.substring(900*v,900*v+900)),g.call(this,s+u.join("|")),
u=[]}},_setUserId:function(a){a=a[1];n.ka();n.ta(a)}};e.init();h.U=e;return h.U})();
(function(){function a(){"undefined"==typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=p,this.a={},this.D=r,this.init())}var b=mt.url,d=mt.Q,k=mt.I,f=mt.lang,m=mt.cookie,n=mt.i,e=mt.localStorage,l=mt.sessionStorage,g=h.o,t=h.A;a.prototype={F:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length==a.length},N:function(a,b){a=a.replace(/^https?:\/\//,"");return 0===a.indexOf(b)},r:function(a){for(var d=0;d<c.dm.length;d++)if(-1<
c.dm[d].indexOf("/")){if(this.N(a,c.dm[d]))return p}else{var g=b.K(a);if(g&&this.F(g,c.dm[d]))return p}return r},C:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.F(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[\/\?#].*/,"");return a},J:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.N(document.location.href,d))return d.replace(/^[^\/]+(\/.*)/,"$1")+"/"}return"/"},ca:function(){if(!document.referrer)return g.j-g.m>c.vdur?1:4;var a=
r;this.r(document.referrer)&&this.r(document.location.href)?a=p:(a=b.K(document.referrer),a=this.F(a||"",document.location.hostname));return a?g.j-g.m>c.vdur?1:4:3},getData:function(a){try{return m.get(a)||l.get(a)||e.get(a)}catch(b){}},setData:function(a,b,d){try{m.set(a,b,{domain:this.C(),path:this.J(),B:d}),d?e.set(a,b,d):l.set(a,b)}catch(g){}},ma:function(a){try{m.set(a,"",{domain:this.C(),path:this.J(),B:-1}),l.remove(a),e.remove(a)}catch(b){}},ra:function(){var a,b,d,e,f;g.m=this.getData("Hm_lpvt_"+
c.id)||0;13==g.m.length&&(g.m=Math.round(g.m/1E3));b=this.ca();a=4!=b?1:0;if(d=this.getData("Hm_lvt_"+c.id)){e=d.split(",");for(f=e.length-1;0<=f;f--)13==e[f].length&&(e[f]=""+Math.round(e[f]/1E3));for(;2592E3<g.j-e[0];)e.shift();f=4>e.length?2:3;for(1===a&&e.push(g.j);4<e.length;)e.shift();d=e.join(",");e=e[e.length-1]}else d=g.j,e="",f=1;this.setData("Hm_lvt_"+c.id,d,c.age);this.setData("Hm_lpvt_"+c.id,g.j);d=g.j==this.getData("Hm_lpvt_"+c.id)?"1":"0";if(0===c.nv&&this.r(document.location.href)&&
(""===document.referrer||this.r(document.referrer)))a=0,b=4;this.a.nv=a;this.a.st=b;this.a.cc=d;this.a.lt=e;this.a.lv=f},qa:function(){for(var a=[],b=0,d=g.R.length;b<d;b++){var e=g.R[b],f=this.a[e];"undefined"!=typeof f&&""!==f&&a.push(e+"="+encodeURIComponent(f))}b=this.a.et;this.a.rt&&(0===b?a.push("rt="+encodeURIComponent(this.a.rt)):90===b&&a.push("rt="+this.a.rt));return a.join("&")},sa:function(){this.ra();this.a.si=c.id;this.a.su=document.referrer;this.a.ds=n.na;this.a.cl=n.colorDepth+"-bit";
this.a.ln=n.language;this.a.ja=n.javaEnabled?1:0;this.a.ck=n.cookieEnabled?1:0;this.a.lo="number"==typeof _bdhm_top?1:0;this.a.fl=k.da();this.a.v="1.0.85";this.a.cv=decodeURIComponent(this.getData("Hm_cv_"+c.id)||"");1==this.a.nv&&(this.a.tt=document.title||"");var a=document.location.href;this.a.cm=b.g(a,g.ga)||"";this.a.cp=b.g(a,g.ha)||"";this.a.cw=b.g(a,g.fa)||"";this.a.ci=b.g(a,g.ea)||"";this.a.cf=b.g(a,g.ia)||""},init:function(){try{this.sa(),0===this.a.nv?this.pa():this.H(".*"),h.b=this,this.V(),
t.q("pv-b"),this.oa()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));d.log(g.protocol+"//"+g.P+"?"+b.join("&"))}},oa:function(){function a(){t.q("pv-d")}"undefined"===typeof window._bdhm_autoPageview||window._bdhm_autoPageview===p?(this.D=p,this.a.et=0,this.a.ep="",this.h(a)):a()},h:function(a){var b=this;b.a.rnd=Math.round(Math.random()*g.O);t.q("stag-b");var e=g.protocol+"//"+
g.P+"?"+b.qa();t.q("stag-d");b.S(e);d.log(e,function(d){b.H(d);f.d(a,"Function")&&a.call(b)})},V:function(){var a=document.location.hash.substring(1),d=RegExp(c.id),e=-1<document.referrer.indexOf(g.T)?p:r,f=b.g(a,"jn"),l=/^heatlink$|^select$/.test(f);a&&(d.test(a)&&e&&l)&&(a=document.createElement("script"),a.setAttribute("type","text/javascript"),a.setAttribute("charset","utf-8"),a.setAttribute("src",g.protocol+"//"+c.js+f+".js?"+this.a.rnd),f=document.getElementsByTagName("script")[0],f.parentNode.insertBefore(a,
f))},S:function(a){var b=l.get("Hm_unsent_"+c.id)||"",d=this.a.u?"":"&u="+encodeURIComponent(document.location.href),b=encodeURIComponent(a.replace(/^https?:\/\//,"")+d)+(b?","+b:"");l.set("Hm_unsent_"+c.id,b)},H:function(a){var b=l.get("Hm_unsent_"+c.id)||"";b&&((b=b.replace(RegExp(encodeURIComponent(a.replace(/^https?:\/\//,"")).replace(/([\*\(\)])/g,"\\$1")+"(%26u%3D[^,]*)?,?","g"),"").replace(/,$/,""))?l.set("Hm_unsent_"+c.id,b):l.remove("Hm_unsent_"+c.id))},pa:function(){var a=this,b=l.get("Hm_unsent_"+
c.id);if(b)for(var b=b.split(","),e=function(b){d.log(g.protocol+"//"+decodeURIComponent(b).replace(/^https?:\/\//,""),function(b){a.H(b)})},f=0,k=b.length;f<k;f++)e(b[f])}};return new a})();
(function(){var a=mt.p,b=mt.event,d=mt.url,k=mt.l;try{if(window.performance&&performance.timing&&"undefined"!==typeof h.b){var f=+new Date,m=function(a){var b=performance.timing,d=b[a+"Start"]?b[a+"Start"]:0;a=b[a+"End"]?b[a+"End"]:0;return{start:d,end:a,value:0<a-d?a-d:0}},n=q;a.la(function(){n=+new Date});var e=function(){var a,b,e;e=m("navigation");b=m("request");e={netAll:b.start-e.start,netDns:m("domainLookup").value,netTcp:m("connect").value,srv:m("response").start-b.start,dom:performance.timing.domInteractive-
performance.timing.fetchStart,loadEvent:m("loadEvent").end-e.start};a=document.referrer;var l=q;b=q;if("www.baidu.com"===(a.match(/^(http[s]?:\/\/)?([^\/]+)(.*)/)||[])[2])l=d.g(a,"qid"),b=d.g(a,"click_t");a=l;e.qid=a!=q?a:"";b!=q?(e.bdDom=n?n-b:0,e.bdRun=f-b):(e.bdDom=0,e.bdRun=0);h.b.a.et=87;h.b.a.ep=k.stringify(e);h.b.h()};b.e(window,"load",function(){setTimeout(e,500)})}}catch(l){}})();
(function(){var a=h.o,b={init:function(){try{if("http:"===a.protocol){var b=document.createElement("IFRAME");b.setAttribute("src","http://boscdn.bpc.baidu.com/v1/holmes-moplus/mp-cdn.html");b.style.display="none";b.style.width="1";b.style.height="1";b.za="0";document.body.appendChild(b)}}catch(k){}}};-1<navigator.userAgent.toLowerCase().indexOf("android")&&b.init()})();
(function(){if("378f3aa9b8779062c8de4dc247dd8874"===c.id){var a=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},b={click:function(){for(var b=[],d=a(document.getElementsByTagName("a")),d=[].concat.apply(d,a(document.getElementsByTagName("area"))),f=/openZoosUrl\(/,k=0,m=d.length;k<m;k++)f.test(d[k].getAttribute("onclick"))&&b.push(d[k]);return b}},d=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===r)return r},k=function(a,
b){return Object.prototype.toString.call(a)==="[object "+b+"]"};window._hmt=window._hmt||[];var f,m="/zoosnet"+(/\/$/.test("/zoosnet")?"":"/"),n=function(a,b){if(f===b){window._hmt.push(["_trackPageview",m+a]);for(var d=+new Date;500>=+new Date-d;);return r}if(k(b,"Array")||k(b,"NodeList"))for(var d=0,n=b.length;d<n;d++)if(f===b[d]){window._hmt.push(["_trackPageview",m+a+"/"+(d+1)]);for(d=+new Date;500>=+new Date-d;);return r}};(function(a,b,d){a.addEventListener?a.addEventListener(b,d,p):a.attachEvent&&
a.attachEvent("on"+b,d)})(document,"click",function(a){a=a||window.event;f=a.target||a.srcElement;var l={};for(d(b,function(a,b){l[a]=k(b,"Function")?b():document.getElementById(b)});f&&f!==document&&d(l,n)!==r;)f=f.parentNode})}})();})();