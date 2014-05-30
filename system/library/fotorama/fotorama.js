/*!
 * Fotorama 4.5.1 | http://fotorama.io/license/
 */
!function(a,b,c,d,e){"use strict";function f(a){var b="bez_"+d.makeArray(arguments).join("_").replace(".","p");if("function"!=typeof d.easing[b]){var c=function(a,b){var c=[null,null],d=[null,null],e=[null,null],f=function(f,g){return e[g]=3*a[g],d[g]=3*(b[g]-a[g])-e[g],c[g]=1-e[g]-d[g],f*(e[g]+f*(d[g]+f*c[g]))},g=function(a){return e[0]+a*(2*d[0]+3*c[0]*a)},h=function(a){for(var b,c=a,d=0;++d<14&&(b=f(c,0)-a,!(Math.abs(b)<.001));)c-=b/g(c);return c};return function(a){return f(h(a),1)}};d.easing[b]=function(b,d,e,f,g){return f*c([a[0],a[1]],[a[2],a[3]])(d/g)+e}}return b}function g(){}function h(a,b,c){return Math.max(isNaN(b)?-1/0:b,Math.min(isNaN(c)?1/0:c,a))}function i(a){return a.match(/ma/)&&a.match(/-?\d+(?!d)/g)[a.match(/3d/)?12:4]}function j(a){return Kc?+i(a.css("transform")):+a.css("left").replace("px","")}function k(a){var b={};return Kc?b.transform="translate3d("+a+"px,0,0)":b.left=a,b}function l(a){return{"transition-duration":a+"ms"}}function m(a,b){return+String(a).replace(b||"px","")||e}function n(a){return/%$/.test(a)&&m(a,"%")}function o(a,b){return n(a)/100*b||m(a)}function p(a){return(!!m(a)||!!m(a,"%"))&&a}function q(a,b,c,d){return(a-(d||0))*(b+(c||0))}function r(a,b,c,d){return-Math.round(a/(b+(c||0))-(d||0))}function s(a){var b=a.data();if(!b.tEnd){var c=a[0],d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",msTransition:"MSTransitionEnd",transition:"transitionend"};c.addEventListener(d[sc.prefixed("transition")],function(a){b.tProp&&a.propertyName.match(b.tProp)&&b.onEndFn()},!1),b.tEnd=!0}}function t(a,b,c,d){var e,f=a.data();f&&(f.onEndFn=function(){e||(e=!0,clearTimeout(f.tT),c())},f.tProp=b,clearTimeout(f.tT),f.tT=setTimeout(function(){f.onEndFn()},1.5*d),s(a))}function u(a,b){if(a.length){var c=a.data();Kc?(a.css(l(0)),c.onEndFn=g,clearTimeout(c.tT)):a.stop();var d=v(b,function(){return j(a)});return a.css(k(d)),d}}function v(){for(var a,b=0,c=arguments.length;c>b&&(a=b?arguments[b]():arguments[b],"number"!=typeof a);b++);return a}function w(a,b){return Math.round(a+(b-a)/1.5)}function x(){return x.p=x.p||("https:"===c.protocol?"https://":"http://"),x.p}function y(a){var c=b.createElement("a");return c.href=a,c}function z(a,b){if("string"!=typeof a)return a;a=y(a);var c,d;if(a.host.match(/youtube\.com/)&&a.search){if(c=a.search.split("v=")[1]){var e=c.indexOf("&");-1!==e&&(c=c.substring(0,e)),d="youtube"}}else a.host.match(/youtube\.com|youtu\.be/)?(c=a.pathname.replace(/^\/(embed\/|v\/)?/,"").replace(/\/.*/,""),d="youtube"):a.host.match(/vimeo\.com/)&&(d="vimeo",c=a.pathname.replace(/^\/(video\/)?/,"").replace(/\/.*/,""));return c&&d||!b||(c=a.href,d="custom"),c?{id:c,type:d,s:a.search.replace(/^\?/,"")}:!1}function A(a,b,c){var e,f,g=a.video;return"youtube"===g.type?(f=x()+"img.youtube.com/vi/"+g.id+"/default.jpg",e=f.replace(/\/default.jpg$/,"/hqdefault.jpg"),a.thumbsReady=!0):"vimeo"===g.type?d.ajax({url:x()+"vimeo.com/api/v2/video/"+g.id+".json",dataType:"jsonp",success:function(d){a.thumbsReady=!0,B(b,{img:d[0].thumbnail_large,thumb:d[0].thumbnail_small},a.i,c)}}):a.thumbsReady=!0,{img:e,thumb:f}}function B(a,b,c,e){for(var f=0,g=a.length;g>f;f++){var h=a[f];if(h.i===c&&h.thumbsReady){var i={videoReady:!0};i[Zc]=i[_c]=i[$c]=!1,e.splice(f,1,d.extend({},h,i,b));break}}}function C(a){function b(a,b,e){var f=a.children("img").eq(0),g=a.attr("href"),h=a.attr("src"),i=f.attr("src"),j=b.video,k=e?z(g,j===!0):!1;k?g=!1:k=j,c(a,f,d.extend(b,{video:k,img:b.img||g||h||i,thumb:b.thumb||i||h||g}))}function c(a,b,c){var e=c.thumb&&c.img!==c.thumb,f=m(c.width||a.attr("width")),g=m(c.height||a.attr("height"));d.extend(c,{width:f,height:g,thumbratio:R(c.thumbratio||m(c.thumbwidth||b&&b.attr("width")||e||f)/m(c.thumbheight||b&&b.attr("height")||e||g))})}var e=[];return a.children().each(function(){var a=d(this),f=Q(d.extend(a.data(),{id:a.attr("id")}));if(a.is("a, img"))b(a,f,!0);else{if(a.is(":empty"))return;c(a,null,d.extend(f,{html:this,_html:a.html()}))}e.push(f)}),e}function D(a){return 0===a.offsetWidth&&0===a.offsetHeight}function E(a){return!d.contains(b.documentElement,a)}function F(a,b,c){a()?b():setTimeout(function(){F(a,b)},c||100)}function G(a){c.replace(c.protocol+"//"+c.host+c.pathname.replace(/^\/?/,"/")+c.search+"#"+a)}function H(a,b,c){var d=a.data(),e=d.measures;if(e&&(!d.l||d.l.W!==e.width||d.l.H!==e.height||d.l.r!==e.ratio||d.l.w!==b.w||d.l.h!==b.h||d.l.m!==c)){var f=e.width,g=e.height,i=b.w/b.h,j=e.ratio>=i,k="scaledown"===c,l="contain"===c,m="cover"===c;j&&(k||l)||!j&&m?(f=h(b.w,0,k?f:1/0),g=f/e.ratio):(j&&m||!j&&(k||l))&&(g=h(b.h,0,k?g:1/0),f=g*e.ratio),a.css({width:Math.ceil(f),height:Math.ceil(g),left:Math.floor(b.w/2-f/2),top:Math.floor(b.h/2-g/2)}),d.l={W:e.width,H:e.height,r:e.ratio,w:b.w,h:b.h,m:c}}return!0}function I(a,b){var c=a[0];c.styleSheet?c.styleSheet.cssText=b:a.html(b)}function J(a,b,c){return b===c?!1:b>=a?"left":a>=c?"right":"left right"}function K(a,b,c,d){if(!c)return!1;if(!isNaN(a))return a-(d?0:1);for(var e,f=0,g=b.length;g>f;f++){var h=b[f];if(h.id===a){e=f;break}}return e}function L(a,b,c){c=c||{},a.each(function(){var a,e=d(this),f=e.data();f.clickOn||(f.clickOn=!0,d.extend(ab(e,{onStart:function(b){a=b,(c.onStart||g).call(this,b)},onMove:c.onMove||g,onTouchEnd:c.onTouchEnd||g,onEnd:function(c){c.moved||b.call(this,a)}}),{noMove:!0}))})}function M(a,b){return'<div class="'+a+'">'+(b||"")+"</div>"}function N(a){for(var b=a.length;b;){var c=Math.floor(Math.random()*b--),d=a[b];a[b]=a[c],a[c]=d}return a}function O(a){return"[object Array]"==Object.prototype.toString.call(a)&&d.map(a,function(a){return d.extend({},a)})}function P(a,b,c){a.scrollLeft(b||0).scrollTop(c||0)}function Q(a){if(a){var b={};return d.each(a,function(a,c){b[a.toLowerCase()]=c}),b}}function R(a){if(a){var b=+a;return isNaN(b)?(b=a.split("/"),+b[0]/+b[1]||e):b}}function S(a,b,c,d){b&&(a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent("on"+b,c))}function T(a){return!!a.getAttribute("disabled")}function U(a){return{tabindex:-1*a+"",disabled:a}}function V(a,b){S(a,"keyup",function(c){T(a)||13==c.keyCode&&b.call(a,c)})}function W(a,b){S(a,"focus",a.onfocusin=function(c){b.call(a,c)},!0)}function X(a,b){a.preventDefault(),b&&a.stopPropagation()}function Y(a){return a?">":"<"}function Z(a,b){var c=a.data(),e=Math.round(b.pos),f=function(){c.sliding=!1,(b.onEnd||g)()};"undefined"!=typeof b.overPos&&b.overPos!==b.pos&&(e=b.overPos,f=function(){Z(a,d.extend({},b,{overPos:b.pos,time:Math.max(Sc,b.time/2)}))});var h=d.extend(k(e),b.width&&{width:b.width});c.sliding=!0,Kc?(a.css(d.extend(l(b.time),h)),b.time>10?t(a,"transform",f,b.time):f()):a.stop().animate(h,b.time,bd,f)}function $(a,b,c,e,f,h){var i="undefined"!=typeof h;if(i||(f.push(arguments),Array.prototype.push.call(arguments,f.length),!(f.length>1))){a=a||d(a),b=b||d(b);var j=a[0],k=b[0],l="crossfade"===e.method,m=function(){if(!m.done){m.done=!0;var a=(i||f.shift())&&f.shift();a&&$.apply(this,a),(e.onEnd||g)(!!a)}},n=e.time/(h||1);c.removeClass(Pb+" "+Ob),a.stop().addClass(Pb),b.stop().addClass(Ob),l&&k&&a.fadeTo(0,0),a.fadeTo(l?n:0,1,l&&m),b.fadeTo(n,0,m),j&&l||k||m()}}function _(a){var b=(a.touches||[])[0]||a;a._x=b.pageX,a._y=b.clientY,a._now=d.now()}function ab(c,e){function f(a){return n=d(a.target),v.checked=q=r=t=!1,l||v.flow||a.touches&&a.touches.length>1||a.which>1||Cc&&Cc.type!==a.type&&Ec||(q=e.select&&n.is(e.select,u))?q:(p="touchstart"===a.type,r=n.is("a, a *",u),o=v.control,s=v.noMove||v.noSwipe||o?16:v.snap?0:4,_(a),m=Cc=a,Dc=a.type.replace(/down|start/,"move").replace(/Down/,"Move"),(e.onStart||g).call(u,a,{control:o,$target:n}),l=v.flow=!0,void((!p||v.go)&&X(a)))}function h(a){if(a.touches&&a.touches.length>1||Pc&&!a.isPrimary||Dc!==a.type||!l)return l&&i(),void(e.onTouchEnd||g)();_(a);var b=Math.abs(a._x-m._x),c=Math.abs(a._y-m._y),d=b-c,f=(v.go||v.x||d>=0)&&!v.noSwipe,h=0>d;p&&!v.checked?(l=f)&&X(a):(X(a),(e.onMove||g).call(u,a,{touch:p})),!t&&Math.sqrt(Math.pow(b,2)+Math.pow(c,2))>s&&(t=!0),v.checked=v.checked||f||h}function i(a){(e.onTouchEnd||g)();var b=l;v.control=l=!1,b&&(v.flow=!1),!b||r&&!v.checked||(a&&X(a),Ec=!0,clearTimeout(Fc),Fc=setTimeout(function(){Ec=!1},1e3),(e.onEnd||g).call(u,{moved:t,$target:n,control:o,touch:p,startEvent:m,aborted:!a||"MSPointerCancel"===a.type}))}function j(){v.flow||setTimeout(function(){v.flow=!0},10)}function k(){v.flow&&setTimeout(function(){v.flow=!1},Rc)}var l,m,n,o,p,q,r,s,t,u=c[0],v={};return Pc?(S(u,"MSPointerDown",f),S(b,"MSPointerMove",h),S(b,"MSPointerCancel",i),S(b,"MSPointerUp",i)):(S(u,"touchstart",f),S(u,"touchmove",h),S(u,"touchend",i),S(b,"touchstart",j),S(b,"touchend",k),S(b,"touchcancel",k),S(a,"scroll",k),S(u,"mousedown",f),S(b,"mousemove",h),S(b,"mouseup",i)),c.on("click","a",function(a){v.checked&&X(a)}),v}function bb(a,b){function c(c,d){A=!0,j=l=c._x,q=c._now,p=[[q,j]],m=n=D.noMove||d?0:u(a,(b.getPos||g)()),(b.onStart||g).call(B,c)}function e(a,b){s=D.min,t=D.max,v=D.snap,x=a.altKey,A=z=!1,y=b.control,y||C.sliding||c(a)}function f(d,e){D.noSwipe||(A||c(d),l=d._x,p.push([d._now,l]),n=m-(j-l),o=J(n,s,t),s>=n?n=w(n,s):n>=t&&(n=w(n,t)),D.noMove||(a.css(k(n)),z||(z=!0,e.touch||Pc||a.addClass(cc)),(b.onMove||g).call(B,d,{pos:n,edge:o})))}function i(e){if(!D.noSwipe||!e.moved){A||c(e.startEvent,!0),e.touch||Pc||a.removeClass(cc),r=d.now();for(var f,i,j,k,o,q,u,w,y,z=r-Rc,C=null,E=Sc,F=b.friction,G=p.length-1;G>=0;G--){if(f=p[G][0],i=Math.abs(f-z),null===C||j>i)C=f,k=p[G][1];else if(C===z||i>j)break;j=i}u=h(n,s,t);var H=k-l,I=H>=0,J=r-C,K=J>Rc,L=!K&&n!==m&&u===n;v&&(u=h(Math[L?I?"floor":"ceil":"round"](n/v)*v,s,t),s=t=u),L&&(v||u===n)&&(y=-(H/J),E*=h(Math.abs(y),b.timeLow,b.timeHigh),o=Math.round(n+y*E/F),v||(u=o),(!I&&o>t||I&&s>o)&&(q=I?s:t,w=o-q,v||(u=q),w=h(u+.03*w,q-50,q+50),E=Math.abs((n-w)/(y/F)))),E*=x?10:1,(b.onEnd||g).call(B,d.extend(e,{moved:e.moved||K&&v,pos:n,newPos:u,overPos:w,time:E}))}}var j,l,m,n,o,p,q,r,s,t,v,x,y,z,A,B=a[0],C=a.data(),D={};return D=d.extend(ab(b.$wrap,{onStart:e,onMove:f,onTouchEnd:b.onTouchEnd,onEnd:i,select:b.select}),D)}function cb(a,b){var c,e,f,h=a[0],i={prevent:{}};return S(h,Qc,function(a){var h=a.wheelDeltaY||-1*a.deltaY||0,j=a.wheelDeltaX||-1*a.deltaX||0,k=Math.abs(j)&&!Math.abs(h),l=Y(0>j),m=e===l,n=d.now(),o=Rc>n-f;e=l,f=n,k&&i.ok&&(!i.prevent[l]||c)&&(X(a,!0),c&&m&&o||(b.shift&&(c=!0,clearTimeout(i.t),i.t=setTimeout(function(){c=!1},Tc)),(b.onEnd||g)(a,b.shift?l:j)))},!1),i}function db(){d.each(d.Fotorama.instances,function(a,b){b.index=a})}function eb(a){d.Fotorama.instances.push(a),db()}function fb(a){d.Fotorama.instances.splice(a.index,1),db()}var gb="fotorama",hb="fullscreen",ib=gb+"__wrap",jb=ib+"--css2",kb=ib+"--css3",lb=ib+"--video",mb=ib+"--fade",nb=ib+"--slide",ob=ib+"--no-controls",pb=ib+"--no-shadows",qb=ib+"--pan-y",rb=ib+"--rtl",sb=ib+"--only-active",tb=ib+"--no-captions",ub=ib+"--toggle-arrows",vb=gb+"__stage",wb=vb+"__frame",xb=wb+"--video",yb=vb+"__shaft",zb=gb+"__grab",Ab=gb+"__pointer",Bb=gb+"__arr",Cb=Bb+"--disabled",Db=Bb+"--prev",Eb=Bb+"--next",Fb=gb+"__nav",Gb=Fb+"-wrap",Hb=Fb+"__shaft",Ib=Fb+"--dots",Jb=Fb+"--thumbs",Kb=Fb+"__frame",Lb=Kb+"--dot",Mb=Kb+"--thumb",Nb=gb+"__fade",Ob=Nb+"-front",Pb=Nb+"-rear",Qb=gb+"__shadow",Rb=Qb+"s",Sb=Rb+"--left",Tb=Rb+"--right",Ub=gb+"__active",Vb=gb+"__select",Wb=gb+"--hidden",Xb=gb+"--fullscreen",Yb=gb+"__fullscreen-icon",Zb=gb+"__error",$b=gb+"__loading",_b=gb+"__loaded",ac=_b+"--full",bc=_b+"--img",cc=gb+"__grabbing",dc=gb+"__img",ec=dc+"--full",fc=gb+"__dot",gc=gb+"__thumb",hc=gc+"-border",ic=gb+"__html",jc=gb+"__video",kc=jc+"-play",lc=jc+"-close",mc=gb+"__caption",nc=gb+"__caption__wrap",oc=gb+"__spinner",pc='" tabindex="0" role="button',qc=d&&d.fn.jquery.split(".");if(!qc||qc[0]<1||1==qc[0]&&qc[1]<8)throw"Fotorama requires jQuery 1.8 or later and will not run without it.";var rc={},sc=function(a,b,c){function d(a){r.cssText=a}function e(a,b){return typeof a===b}function f(a,b){return!!~(""+a).indexOf(b)}function g(a,b){for(var d in a){var e=a[d];if(!f(e,"-")&&r[e]!==c)return"pfx"==b?e:!0}return!1}function h(a,b,d){for(var f in a){var g=b[a[f]];if(g!==c)return d===!1?a[f]:e(g,"function")?g.bind(d||b):g}return!1}function i(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),f=(a+" "+u.join(d+" ")+d).split(" ");return e(b,"string")||e(b,"undefined")?g(f,b):(f=(a+" "+v.join(d+" ")+d).split(" "),h(f,b,c))}var j,k,l,m="2.6.2",n={},o=b.documentElement,p="modernizr",q=b.createElement(p),r=q.style,s=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),t="Webkit Moz O ms",u=t.split(" "),v=t.toLowerCase().split(" "),w={},x=[],y=x.slice,z=function(a,c,d,e){var f,g,h,i,j=b.createElement("div"),k=b.body,l=k||b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:p+(d+1),j.appendChild(h);return f=["&#173;",'<style id="s',p,'">',a,"</style>"].join(""),j.id=p,(k?j:l).innerHTML+=f,l.appendChild(j),k||(l.style.background="",l.style.overflow="hidden",i=o.style.overflow,o.style.overflow="hidden",o.appendChild(l)),g=c(j,a),k?j.parentNode.removeChild(j):(l.parentNode.removeChild(l),o.style.overflow=i),!!g},A={}.hasOwnProperty;l=e(A,"undefined")||e(A.call,"undefined")?function(a,b){return b in a&&e(a.constructor.prototype[b],"undefined")}:function(a,b){return A.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=y.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(y.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(y.call(arguments)))};return d}),w.csstransforms3d=function(){var a=!!i("perspective");return a};for(var B in w)l(w,B)&&(k=B.toLowerCase(),n[k]=w[B](),x.push((n[k]?"":"no-")+k));return n.addTest=function(a,b){if("object"==typeof a)for(var d in a)l(a,d)&&n.addTest(d,a[d]);else{if(a=a.toLowerCase(),n[a]!==c)return n;b="function"==typeof b?b():b,"undefined"!=typeof enableClasses&&enableClasses&&(o.className+=" "+(b?"":"no-")+a),n[a]=b}return n},d(""),q=j=null,n._version=m,n._prefixes=s,n._domPrefixes=v,n._cssomPrefixes=u,n.testProp=function(a){return g([a])},n.testAllProps=i,n.testStyles=z,n.prefixed=function(a,b,c){return b?i(a,b,c):i(a,"pfx")},n}(a,b),tc={ok:!1,is:function(){return!1},request:function(){},cancel:function(){},event:"",prefix:""},uc="webkit moz o ms khtml".split(" ");if("undefined"!=typeof b.cancelFullScreen)tc.ok=!0;else for(var vc=0,wc=uc.length;wc>vc;vc++)if(tc.prefix=uc[vc],"undefined"!=typeof b[tc.prefix+"CancelFullScreen"]){tc.ok=!0;break}tc.ok&&(tc.event=tc.prefix+"fullscreenchange",tc.is=function(){switch(this.prefix){case"":return b.fullScreen;case"webkit":return b.webkitIsFullScreen;default:return b[this.prefix+"FullScreen"]}},tc.request=function(a){return""===this.prefix?a.requestFullScreen():a[this.prefix+"RequestFullScreen"]()},tc.cancel=function(){return""===this.prefix?b.cancelFullScreen():b[this.prefix+"CancelFullScreen"]()});var xc,yc={lines:12,length:5,width:2,radius:7,corners:1,rotate:15,color:"rgba(128, 128, 128, .75)",hwaccel:!0},zc={top:"auto",left:"auto",className:""};!function(a,b){xc=b()}(this,function(){function a(a,c){var d,e=b.createElement(a||"div");for(d in c)e[d]=c[d];return e}function c(a){for(var b=1,c=arguments.length;c>b;b++)a.appendChild(arguments[b]);return a}function d(a,b,c,d){var e=["opacity",b,~~(100*a),c,d].join("-"),f=.01+c/d*100,g=Math.max(1-(1-a)/b*(100-f),a),h=m.substring(0,m.indexOf("Animation")).toLowerCase(),i=h&&"-"+h+"-"||"";return o[e]||(p.insertRule("@"+i+"keyframes "+e+"{0%{opacity:"+g+"}"+f+"%{opacity:"+a+"}"+(f+.01)+"%{opacity:1}"+(f+b)%100+"%{opacity:"+a+"}100%{opacity:"+g+"}}",p.cssRules.length),o[e]=1),e}function f(a,b){var c,d,f=a.style;for(b=b.charAt(0).toUpperCase()+b.slice(1),d=0;d<n.length;d++)if(c=n[d]+b,f[c]!==e)return c;return f[b]!==e?b:void 0}function g(a,b){for(var c in b)a.style[f(a,c)||c]=b[c];return a}function h(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)a[d]===e&&(a[d]=c[d])}return a}function i(a){for(var b={x:a.offsetLeft,y:a.offsetTop};a=a.offsetParent;)b.x+=a.offsetLeft,b.y+=a.offsetTop;return b}function j(a,b){return"string"==typeof a?a:a[b%a.length]}function k(a){return"undefined"==typeof this?new k(a):void(this.opts=h(a||{},k.defaults,q))}function l(){function b(b,c){return a("<"+b+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',c)}p.addRule(".spin-vml","behavior:url(#default#VML)"),k.prototype.lines=function(a,d){function e(){return g(b("group",{coordsize:k+" "+k,coordorigin:-i+" "+-i}),{width:k,height:k})}function f(a,f,h){c(m,c(g(e(),{rotation:360/d.lines*a+"deg",left:~~f}),c(g(b("roundrect",{arcsize:d.corners}),{width:i,height:d.width,left:d.radius,top:-d.width>>1,filter:h}),b("fill",{color:j(d.color,a),opacity:d.opacity}),b("stroke",{opacity:0}))))}var h,i=d.length+d.width,k=2*i,l=2*-(d.width+d.length)+"px",m=g(e(),{position:"absolute",top:l,left:l});if(d.shadow)for(h=1;h<=d.lines;h++)f(h,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(h=1;h<=d.lines;h++)f(h);return c(a,m)},k.prototype.opacity=function(a,b,c,d){var e=a.firstChild;d=d.shadow&&d.lines||0,e&&b+d<e.childNodes.length&&(e=e.childNodes[b+d],e=e&&e.firstChild,e=e&&e.firstChild,e&&(e.opacity=c))}}var m,n=["webkit","Moz","ms","O"],o={},p=function(){var d=a("style",{type:"text/css"});return c(b.getElementsByTagName("head")[0],d),d.sheet||d.styleSheet}(),q={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"};k.defaults={},h(k.prototype,{spin:function(b){this.stop();var c,d,e=this,f=e.opts,h=e.el=g(a(0,{className:f.className}),{position:f.position,width:0,zIndex:f.zIndex}),j=f.radius+f.length+f.width;if(b&&(b.insertBefore(h,b.firstChild||null),d=i(b),c=i(h),g(h,{left:("auto"==f.left?d.x-c.x+(b.offsetWidth>>1):parseInt(f.left,10)+j)+"px",top:("auto"==f.top?d.y-c.y+(b.offsetHeight>>1):parseInt(f.top,10)+j)+"px"})),h.setAttribute("role","progressbar"),e.lines(h,e.opts),!m){var k,l=0,n=(f.lines-1)*(1-f.direction)/2,o=f.fps,p=o/f.speed,q=(1-f.opacity)/(p*f.trail/100),r=p/f.lines;!function s(){l++;for(var a=0;a<f.lines;a++)k=Math.max(1-(l+(f.lines-a)*r)%p*q,f.opacity),e.opacity(h,a*f.direction+n,k,f);e.timeout=e.el&&setTimeout(s,~~(1e3/o))}()}return e},stop:function(){var a=this.el;return a&&(clearTimeout(this.timeout),a.parentNode&&a.parentNode.removeChild(a),this.el=e),this},lines:function(b,e){function f(b,c){return g(a(),{position:"absolute",width:e.length+e.width+"px",height:e.width+"px",background:b,boxShadow:c,transformOrigin:"left",transform:"rotate("+~~(360/e.lines*i+e.rotate)+"deg) translate("+e.radius+"px,0)",borderRadius:(e.corners*e.width>>1)+"px"})}for(var h,i=0,k=(e.lines-1)*(1-e.direction)/2;i<e.lines;i++)h=g(a(),{position:"absolute",top:1+~(e.width/2)+"px",transform:e.hwaccel?"translate3d(0,0,0)":"",opacity:e.opacity,animation:m&&d(e.opacity,e.trail,k+i*e.direction,e.lines)+" "+1/e.speed+"s linear infinite"}),e.shadow&&c(h,g(f("#000","0 0 4px #000"),{top:"2px"})),c(b,c(h,f(j(e.color,i),"0 0 1px rgba(0,0,0,.1)")));return b},opacity:function(a,b,c){b<a.childNodes.length&&(a.childNodes[b].style.opacity=c)}});var r=g(a("group"),{behavior:"url(#default#VML)"});return!f(r,"transform")&&r.adj?l():m=f(r,"animation"),k});var Ac,Bc,Cc,Dc,Ec,Fc,Gc=d(a),Hc=d(b),Ic="quirks"===c.hash.replace("#",""),Jc=sc.csstransforms3d,Kc=Jc&&!Ic,Lc=Jc||"CSS1Compat"===b.compatMode,Mc=tc.ok,Nc=navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i),Oc=!Kc||Nc,Pc=navigator.msPointerEnabled,Qc="onwheel"in b.createElement("div")?"wheel":b.onmousewheel!==e?"mousewheel":"DOMMouseScroll",Rc=250,Sc=300,Tc=1400,Uc=5e3,Vc=2,Wc=64,Xc=500,Yc=333,Zc="$stageFrame",$c="$navDotFrame",_c="$navThumbFrame",ad="auto",bd=f([.1,0,.25,1]),cd=99999,dd={width:null,minwidth:null,maxwidth:"100%",height:null,minheight:null,maxheight:null,ratio:null,margin:Vc,glimpse:0,fit:"contain",nav:"dots",navposition:"bottom",navwidth:null,thumbwidth:Wc,thumbheight:Wc,thumbmargin:Vc,thumbborderwidth:Vc,thumbfit:"cover",allowfullscreen:!1,transition:"slide",clicktransition:null,transitionduration:Sc,captions:!0,hash:!1,startindex:0,loop:!1,autoplay:!1,stopautoplayontouch:!0,keyboard:!1,arrows:!0,click:!0,swipe:!0,trackpad:!1,controlsonstart:!0,shuffle:!1,direction:"ltr",shadows:!0,spinner:null,noautoresize:!1},ed={left:!0,right:!0,down:!1,up:!1,space:!1,home:!1,end:!1};jQuery.Fotorama=function(a,e){function f(){d.each(xd,function(a,b){if(!b.i){b.i=ke++;var c=z(b.video,!0);if(c){var d={};b.video=c,b.img||b.thumb?b.thumbsReady=!0:d=A(b,xd,ge),B(xd,{img:d.img,thumb:d.thumb},b.i,ge)}}})}function g(a){return Xd[a]||ge.fullScreen}function i(a){var b="keydown."+gb,c=gb+he,d="keydown."+c,f="resize."+c+" orientationchange."+c;a?(Hc.on(d,function(a){var b,c;Bd&&27===a.keyCode?(b=!0,ld(Bd,!0,!0)):(ge.fullScreen||e.keyboard&&!ge.index)&&(27===a.keyCode?(b=!0,ge.cancelFullScreen()):a.shiftKey&&32===a.keyCode&&g("space")||37===a.keyCode&&g("left")||38===a.keyCode&&g("up")?c="<":32===a.keyCode&&g("space")||39===a.keyCode&&g("right")||40===a.keyCode&&g("down")?c=">":36===a.keyCode&&g("home")?c="<<":35===a.keyCode&&g("end")&&(c=">>")),(b||c)&&X(a),c&&ge.show({index:c,slow:a.altKey,user:!0})}),ge.index||Hc.off(b).on(b,"textarea, input, select",function(a){!Bc.hasClass(hb)&&a.stopPropagation()}),Gc.on(f,function(){e.noautoresize||ge.resize()})):(Hc.off(d),Gc.off(f))}function j(b){b!==j.f&&(b?(a.html("").addClass(gb+" "+ie).append(oe).before(me).before(ne),eb(ge)):(oe.detach(),me.detach(),ne.detach(),a.html(le.urtext).removeClass(ie),fb(ge)),i(b),j.f=b)}function n(){xd=ge.data=xd||O(e.data)||C(a),yd=ge.size=xd.length,!wd.ok&&e.shuffle&&N(xd),f(),He=y(He),yd&&j(!0)}function s(){var a=2>yd||Bd;Ke.noMove=a||Qd,Ke.noSwipe=a||!e.swipe,!Ud&&qe.toggleClass(zb,!e.click&&!Ke.noMove&&!Ke.noSwipe),Pc&&oe.toggleClass(qb,!Ke.noSwipe)}function t(a){a===!0&&(a=""),e.autoplay=Math.max(+a||Uc,1.5*Td)}function w(){function a(a,c){b[a?"add":"remove"].push(c)}ge.options=e=Q(e),Qd="crossfade"===e.transition||"dissolve"===e.transition,Kd=e.loop&&(yd>2||Qd&&(!Ud||"slide"!==Ud)),Td=+e.transitionduration||Sc,Wd="rtl"===e.direction,Xd=d.extend({},e.keyboard&&ed,e.keyboard);var b={add:[],remove:[]};yd>1?(Ld=e.nav,Nd="top"===e.navposition,b.remove.push(Vb),ue.toggle(!!e.arrows)):(Ld=!1,ue.hide()),Qb(),Ad=new xc(d.extend(yc,e.spinner,zc,{direction:Wd?-1:1})),Dc(),Ec(),e.autoplay&&t(e.autoplay),Rd=m(e.thumbwidth)||Wc,Sd=m(e.thumbheight)||Wc,Le.ok=Ne.ok=e.trackpad&&!Oc,s(),bd(e,[Je]),Md="thumbs"===Ld,Md?(qc(yd,"navThumb"),zd=ze,fe=_c,I(me,d.Fotorama.jst.style({w:Rd,h:Sd,b:e.thumbborderwidth,m:e.thumbmargin,s:he,q:!Lc})),we.addClass(Jb).removeClass(Ib)):"dots"===Ld?(qc(yd,"navDot"),zd=ye,fe=$c,we.addClass(Ib).removeClass(Jb)):(Ld=!1,we.removeClass(Jb+" "+Ib)),Ld&&(Nd?ve.insertBefore(pe):ve.insertAfter(pe),vc.nav=!1,vc(zd,xe,"nav")),Od=e.allowfullscreen,Od?(Be.prependTo(pe),Pd=Mc&&"native"===Od):(Be.detach(),Pd=!1),a(Qd,mb),a(!Qd,nb),a(!e.captions,tb),a(Wd,rb),a("always"!==e.arrows,ub),Vd=e.shadows&&!Oc,a(!Vd,pb),oe.addClass(b.add.join(" ")).removeClass(b.remove.join(" ")),Ie=d.extend({},e)}function x(a){return 0>a?(yd+a%yd)%yd:a>=yd?a%yd:a}function y(a){return h(a,0,yd-1)}function D(a){return Kd?x(a):y(a)}function S(a){return a>0||Kd?a-1:!1}function T(a){return yd-1>a||Kd?a+1:!1}function _(){Ke.min=Kd?-1/0:-q(yd-1,Je.w,e.margin,Ed),Ke.max=Kd?1/0:-q(0,Je.w,e.margin,Ed),Ke.snap=Je.w+e.margin}function ab(){Me.min=Math.min(0,Je.nw-xe.width()),Me.max=0,xe.toggleClass(zb,!(Me.noMove=Me.min===Me.max))}function db(a,b,c){if("number"==typeof a){a=new Array(a);var e=!0}return d.each(a,function(a,d){if(e&&(d=a),"number"==typeof d){var f=xd[x(d)];if(f){var g="$"+b+"Frame",h=f[g];c.call(this,a,d,f,h,g,h&&h.data())}}})}function Nb(a,b,c,d){(!Yd||"*"===Yd&&d===Jd)&&(a=p(e.width)||p(a)||Xc,b=p(e.height)||p(b)||Yc,ge.resize({width:a,ratio:e.ratio||c||a/b},0,d===Jd?!0:"*"))}function Ob(a,b,c,f,g){db(a,b,function(a,h,i,j,k,l){function m(a){var b=x(h);dd(a,{index:b,src:v,frame:xd[b]})}function n(){s.remove(),d.Fotorama.cache[v]="error",i.html&&"stage"===b||!w||w===v?(!v||i.html||q?"stage"===b&&(j.trigger("f:load").removeClass($b+" "+Zb).addClass(_b),m("load"),Nb()):(j.trigger("f:error").removeClass($b).addClass(Zb),m("error")),l.state="error",!(yd>1&&xd[h]===i)||i.html||i.deleted||i.video||q||(i.deleted=!0,ge.splice(h,1))):(i[u]=v=w,Ob([h],b,c,f,!0))}function o(){d.Fotorama.measures[v]=t.measures=d.Fotorama.measures[v]||{width:r.width,height:r.height,ratio:r.width/r.height},Nb(t.measures.width,t.measures.height,t.measures.ratio,h),s.off("load error").addClass(dc+(q?" "+ec:"")).prependTo(j),H(s,c||Je,f||i.fit||e.fit),d.Fotorama.cache[v]=l.state="loaded",setTimeout(function(){j.trigger("f:load").removeClass($b+" "+Zb).addClass(_b+" "+(q?ac:bc)),"stage"===b?m("load"):(i.thumbratio===ad||!i.thumbratio&&e.thumbratio===ad)&&(i.thumbratio=t.measures.ratio,ud())},0)}function p(){var a=10;F(function(){return!de||!a--&&!Oc},function(){o()})}if(j){var q=ge.fullScreen&&i.full&&i.full!==i.img&&!l.$full&&"stage"===b;if(!l.$img||g||q){var r=new Image,s=d(r),t=s.data();l[q?"$full":"$img"]=s;var u="stage"===b?q?"full":"img":"thumb",v=i[u],w=q?null:i["stage"===b?"thumb":"img"];if("navThumb"===b&&(j=l.$wrap),!v)return void n();d.Fotorama.cache[v]?!function y(){"error"===d.Fotorama.cache[v]?n():"loaded"===d.Fotorama.cache[v]?setTimeout(p,0):setTimeout(y,100)}():(d.Fotorama.cache[v]="*",s.on("load",p).on("error",n)),l.state="",r.src=v}}})}function Pb(a){Ge.append(Ad.spin().el).appendTo(a)}function Qb(){Ge.detach(),Ad&&Ad.stop()}function cc(){var a=ge.activeFrame[Zc];a&&!a.data().state&&(Pb(a),a.on("f:load f:error",function(){a.off("f:load f:error"),Qb()}))}function jc(a){V(a,rd),W(a,function(){setTimeout(function(){P(we)},0),Jc({time:Td,guessIndex:d(this).data().eq,minMax:Me})})}function qc(a,b){db(a,b,function(a,c,e,f,g,h){if(!f){f=e[g]=oe[g].clone(),h=f.data(),h.data=e;var i=f[0];"stage"===b?(e.html&&d('<div class="'+ic+'"></div>').append(e._html?d(e.html).removeAttr("id").html(e._html):e.html).appendTo(f),e.caption&&d(M(mc,M(nc,e.caption))).appendTo(f),e.video&&f.addClass(xb).append(De.clone()),W(i,function(){setTimeout(function(){P(pe)},0),od({index:h.eq,user:!0})}),re=re.add(f)):"navDot"===b?(jc(i),ye=ye.add(f)):"navThumb"===b&&(jc(i),h.$wrap=f.children(":first"),ze=ze.add(f),e.video&&f.append(De.clone()))}})}function rc(a,b,c){return a&&a.length&&H(a,b,c)}function sc(a){db(a,"stage",function(a,b,c,f,g,h){if(f){var i=x(b);h.eq=i,Pe[Zc][i]=f.css(d.extend({left:Qd?0:q(b,Je.w,e.margin,Ed)},Qd&&l(0))),E(f[0])&&(f.appendTo(qe),ld(c.$video));var j=c.fit||e.fit;rc(h.$img,Je,j),rc(h.$full,Je,j)}})}function uc(a,b){if("thumbs"===Ld&&!isNaN(a)){var c=-a,f=-a+Je.nw;ze.each(function(){var a=d(this),g=a.data(),h=g.eq,i={h:Sd},j=(xd[h]||{}).thumbfit||e.thumbfit;i.w=g.w,g.l+g.w<c||g.l>f||rc(g.$img,i,j)||b&&Ob([h],"navThumb",i,j)})}}function vc(a,b,c){if(!vc[c]){var f="nav"===c&&Md,g=0;b.append(a.filter(function(){for(var a,b=d(this),c=b.data(),e=0,f=xd.length;f>e;e++)if(c.data===xd[e]){a=!0,c.eq=e;break}return a||b.remove()&&!1}).sort(function(a,b){return d(a).data().eq-d(b).data().eq}).each(function(){if(f){var a=d(this),b=a.data(),c=Math.round(Sd*b.data.thumbratio)||Rd;b.l=g,b.w=c,a.css({width:c}),g+=c+e.thumbmargin}})),vc[c]=!0}}function wc(a){return a-Qe>Je.w/3}function Cc(a){return!(Kd||He+a&&He-yd+a||Bd)}function Dc(){var a=Cc(0),b=Cc(1);se.toggleClass(Cb,a).attr(U(a)),te.toggleClass(Cb,b).attr(U(b))}function Ec(){Le.ok&&(Le.prevent={"<":Cc(0),">":Cc(1)})}function Fc(a){var b,c,d=a.data();return Md?(b=d.l,c=d.w):(b=a.position().left,c=a.width()),{c:b+c/2,min:-b+10*e.thumbmargin,max:-b+Je.w-c-10*e.thumbmargin}}function Ic(a){var b=ge.activeFrame[fe].data();Z(Ae,{time:1.2*a,pos:b.l,width:b.w-2*e.thumbborderwidth})}function Jc(a){var b=xd[a.guessIndex][fe];if(b){var c=Me.min!==Me.max,d=a.minMax||c&&Fc(ge.activeFrame[fe]),e=c&&(a.keep&&Jc.l?Jc.l:h((a.coo||Je.nw/2)-Fc(b).c,d.min,d.max)),f=c&&h(e,Me.min,Me.max),g=1.1*a.time;Z(xe,{time:g,pos:f||0,onEnd:function(){uc(f,!0)}}),kd(we,J(f,Me.min,Me.max)),Jc.l=e}}function Nc(){Qc(fe),Oe[fe].push(ge.activeFrame[fe].addClass(Ub))}function Qc(a){for(var b=Oe[a];b.length;)b.shift().removeClass(Ub)}function Tc(a){var b=Pe[a];d.each(Dd,function(a,c){delete b[x(c)]}),d.each(b,function(a,c){delete b[a],c.detach()})}function Vc(a){Ed=Fd=He;var b=ge.activeFrame,c=b[Zc];c&&(Qc(Zc),Oe[Zc].push(c.addClass(Ub)),a||ge.show.onEnd(!0),u(qe,0,!0),Tc(Zc),sc(Dd),_(),ab())}function bd(a,b){a&&d.each(b,function(b,c){c&&d.extend(c,{width:a.width||c.width,height:a.height,minwidth:a.minwidth,maxwidth:a.maxwidth,minheight:a.minheight,maxheight:a.maxheight,ratio:R(a.ratio)})})}function dd(b,c){a.trigger(gb+":"+b,[ge,c])}function fd(){clearTimeout(gd.t),de=1,e.stopautoplayontouch?ge.stopAutoplay():ae=!0}function gd(){e.stopautoplayontouch||(hd(),id()),gd.t=setTimeout(function(){de=0},Sc+Rc)}function hd(){ae=!(!Bd&&!be)}function id(){if(clearTimeout(id.t),!e.autoplay||ae)return void(ge.autoplay&&(ge.autoplay=!1,dd("stopautoplay")));ge.autoplay||(ge.autoplay=!0,dd("startautoplay"));var a=He,b=ge.activeFrame[Zc].data();F(function(){return b.state||a!==He},function(){id.t=setTimeout(function(){ae||a!==He||ge.show(Kd?Y(!Wd):x(He+(Wd?-1:1)))},e.autoplay)})}function jd(){ge.fullScreen&&(ge.fullScreen=!1,Mc&&tc.cancel(je),Bc.removeClass(hb),Ac.removeClass(hb),a.removeClass(Xb).insertAfter(ne),Je=d.extend({},ce),ld(Bd,!0,!0),qd("x",!1),ge.resize(),Ob(Dd,"stage"),P(Gc,$d,Zd),dd("fullscreenexit"))}function kd(a,b){Vd&&(a.removeClass(Sb+" "+Tb),b&&!Bd&&a.addClass(b.replace(/^|\s/g," "+Rb+"--")))}function ld(a,b,c){b&&(oe.removeClass(lb),Bd=!1,s()),a&&a!==Bd&&(a.remove(),dd("unloadvideo")),c&&(hd(),id())}function md(a){oe.toggleClass(ob,a)}function nd(a){if(!Ke.flow){var b=a?a.pageX:nd.x,c=b&&!Cc(wc(b))&&e.click;nd.p!==c&&pe.toggleClass(Ab,c)&&(nd.p=c,nd.x=b)}}function od(a){clearTimeout(od.t),e.clicktransition&&e.clicktransition!==e.transition?(Ud=e.transition,ge.setOptions({transition:e.clicktransition}),od.t=setTimeout(function(){ge.show(a)},10)):ge.show(a)}function pd(a,b){var c=a.target,f=d(c);f.hasClass(kc)?ge.playVideo():c===Ce?ge.toggleFullScreen():Bd?c===Fe&&ld(Bd,!0,!0):b?md():e.click&&od({index:a.shiftKey||Y(wc(a._x)),slow:a.altKey,user:!0})}function qd(a,b){Ke[a]=Me[a]=b}function rd(a){var b=d(this).data().eq;od({index:b,slow:a.altKey,user:!0,coo:a._x-we.offset().left})}function sd(a){od({index:ue.index(this)?">":"<",slow:a.altKey,user:!0})}function td(a){W(a,function(){P(pe),setTimeout(function(){P(pe)},0),md(!1)})}function ud(){n(),w();var a=ud.ok;if(!ud.i){ud.i=!0;var b=e.startindex;(b||e.hash&&c.hash)&&(Jd=K(b||c.hash.replace(/^#/,""),xd,0===ge.index||b,b)),He=Ed=Fd=Gd=Jd=D(Jd)||0}if(yd){if(vd())return;Bd&&ld(Bd,!0),Dd=[],Tc(Zc),ud.ok=!0,ge.show({index:He,time:0,reset:a}),ge.resize()}else ge.destroy()}function vd(){return!vd.f===Wd?(vd.f=Wd,He=yd-1-He,ge.reverse(),!0):void 0}function wd(){wd.ok||(wd.ok=!0,dd("ready"))}Ac=d("html"),Bc=d("body");var xd,yd,zd,Ad,Bd,Cd,Dd,Ed,Fd,Gd,Hd,Id,Jd,Kd,Ld,Md,Nd,Od,Pd,Qd,Rd,Sd,Td,Ud,Vd,Wd,Xd,Yd,Zd,$d,_d,ae,be,ce,de,ee,fe,ge=this,he=d.now(),ie=gb+he,je=a[0],ke=1,le=a.data(),me=d("<style></style>"),ne=d(M(Wb)),oe=d(M(ib)),pe=d(M(vb)).appendTo(oe),qe=(pe[0],d(M(yb)).appendTo(pe)),re=d(),se=d(M(Bb+" "+Db+pc)),te=d(M(Bb+" "+Eb+pc)),ue=se.add(te).appendTo(pe),ve=d(M(Gb)),we=d(M(Fb)).appendTo(ve),xe=d(M(Hb)).appendTo(we),ye=d(),ze=d(),Ae=(qe.data(),xe.data(),d(M(hc)).appendTo(xe)),Be=d(M(Yb+pc)),Ce=Be[0],De=d(M(kc)),Ee=d(M(lc)).appendTo(pe),Fe=Ee[0],Ge=d(M(oc)),He=!1,Ie={},Je={},Ke={},Le={},Me={},Ne={},Oe={},Pe={},Qe=0,Re=[];oe[Zc]=d(M(wb)),oe[_c]=d(M(Kb+" "+Mb+pc,M(gc))),oe[$c]=d(M(Kb+" "+Lb+pc,M(fc))),Oe[Zc]=[],Oe[_c]=[],Oe[$c]=[],Pe[Zc]={},oe.addClass(Kc?kb:jb).toggleClass(ob,!e.controlsonstart),le.fotorama=this,ge.startAutoplay=function(a){return ge.autoplay?this:(ae=be=!1,t(a||e.autoplay),id(),this)
},ge.stopAutoplay=function(){return ge.autoplay&&(ae=be=!0,id()),this},ge.show=function(a){var b;"object"!=typeof a?(b=a,a={}):b=a.index,b=">"===b?Fd+1:"<"===b?Fd-1:"<<"===b?0:">>"===b?yd-1:b,b=isNaN(b)?K(b,xd,!0):b,b="undefined"==typeof b?He||0:b,ge.activeIndex=He=D(b),Hd=S(He),Id=T(He),Dd=[He,Hd,Id],Fd=Kd?b:He;var c=Math.abs(Gd-Fd),d=v(a.time,function(){return Math.min(Td*(1+(c-1)/12),2*Td)}),f=a.overPos;a.slow&&(d*=10),ge.activeFrame=Cd=xd[He],ld(Bd,Cd.i!==xd[x(Ed)].i),qc(Dd,"stage"),sc(Oc?[Fd]:[Fd,S(Fd),T(Fd)]),qd("go",!0),a.reset||dd("show",{user:a.user,time:d}),ae=!0;var g=ge.show.onEnd=function(b){if(!g.ok){if(g.ok=!0,b||Vc(!0),!a.reset&&(dd("showend",{user:a.user}),!b&&Ud&&Ud!==e.transition))return ge.setOptions({transition:Ud}),void(Ud=!1);cc(),Ob(Dd,"stage"),qd("go",!1),Ec(),nd(),hd(),id()}};if(Qd){var i=Cd[Zc],j=He!==Gd?xd[Gd][Zc]:null;$(i,j,re,{time:d,method:e.transition,onEnd:g},Re)}else Z(qe,{pos:-q(Fd,Je.w,e.margin,Ed),overPos:f,time:d,onEnd:g});if(Dc(),Ld){Nc();var k=y(He+h(Fd-Gd,-1,1));Jc({time:d,coo:k!==He&&a.coo,guessIndex:"undefined"!=typeof a.coo?k:He,keep:a.reset}),Md&&Ic(d)}return _d="undefined"!=typeof Gd&&Gd!==He,Gd=He,e.hash&&_d&&!ge.eq&&G(Cd.id||He+1),this},ge.requestFullScreen=function(){return Od&&!ge.fullScreen&&(Zd=Gc.scrollTop(),$d=Gc.scrollLeft(),P(Gc),qd("x",!0),ce=d.extend({},Je),a.addClass(Xb).appendTo(Bc.addClass(hb)),Ac.addClass(hb),ld(Bd,!0,!0),ge.fullScreen=!0,Pd&&tc.request(je),ge.resize(),Ob(Dd,"stage"),cc(),dd("fullscreenenter")),this},ge.cancelFullScreen=function(){return Pd&&tc.is()?tc.cancel(b):jd(),this},ge.toggleFullScreen=function(){return ge[(ge.fullScreen?"cancel":"request")+"FullScreen"]()},b.addEventListener&&b.addEventListener(tc.event,function(){!xd||tc.is()||Bd||jd()},!1),ge.resize=function(a){if(!xd)return this;bd(ge.fullScreen?{width:"100%",maxwidth:null,minwidth:null,height:"100%",maxheight:null,minheight:null}:Q(a),[Je,ge.fullScreen||e]);var b=arguments[1]||0,c=arguments[2],d=Je.width,f=Je.height,g=Je.ratio,i=Gc.height()-(Ld?we.height():0);return p(d)&&(oe.addClass(sb).css({width:d,minWidth:Je.minwidth||0,maxWidth:Je.maxwidth||cd}),d=Je.W=Je.w=oe.width(),Je.nw=Ld&&o(e.navwidth,d)||d,e.glimpse&&(Je.w-=Math.round(2*(o(e.glimpse,d)||0))),qe.css({width:Je.w,marginLeft:(Je.W-Je.w)/2}),f=o(f,i),f=f||g&&d/g,f&&(d=Math.round(d),f=Je.h=Math.round(h(f,o(Je.minheight,i),o(Je.maxheight,i))),pe.stop().animate({width:d,height:f},b,function(){oe.removeClass(sb)}),Vc(),Ld&&(we.stop().animate({width:Je.nw},b),Jc({guessIndex:He,time:b,keep:!0}),Md&&vc.nav&&Ic(b)),Yd=c||!0,wd())),Qe=pe.offset().left,this},ge.setOptions=function(a,b){return d.extend(e,a),ud.ok=!b,ud(),this},ge.shuffle=function(){return xd&&N(xd)&&ud(),this},ge.destroy=function(){return ge.cancelFullScreen(),ge.stopAutoplay(),xd=ge.data=null,j(),Dd=[],Tc(Zc),ud.ok=!1,this},ge.playVideo=function(){var a=ge.activeFrame,b=a.video,c=He;return"object"==typeof b&&a.videoReady&&(Pd&&ge.fullScreen&&ge.cancelFullScreen(),F(function(){return!tc.is()||c!==He},function(){c===He&&(a.$video=a.$video||d(d.Fotorama.jst.video(b)),a.$video.appendTo(a[Zc]),oe.addClass(lb),Bd=a.$video,s(),ue.blur(),Be.blur(),dd("loadvideo"))})),this},ge.stopVideo=function(){return ld(Bd,!0,!0),this},pe.on("mousemove",nd),Ke=bb(qe,{onStart:fd,onMove:function(a,b){kd(pe,b.edge)},onTouchEnd:gd,onEnd:function(a){kd(pe);var b=(Pc&&!ee||a.touch)&&e.arrows&&"always"!==e.arrows;if(a.moved||b&&a.pos!==a.newPos&&!a.control){var c=r(a.newPos,Je.w,e.margin,Ed);ge.show({index:c,time:Qd?Td:a.time,overPos:a.overPos,user:!0})}else a.aborted||a.control||pd(a.startEvent,b)},timeLow:1,timeHigh:1,friction:2,select:"."+Vb+", ."+Vb+" *",$wrap:pe}),Me=bb(xe,{onStart:fd,onMove:function(a,b){kd(we,b.edge)},onTouchEnd:gd,onEnd:function(a){function b(){Jc.l=a.newPos,hd(),id(),uc(a.newPos,!0)}if(a.moved)a.pos!==a.newPos?(ae=!0,Z(xe,{time:a.time,pos:a.newPos,overPos:a.overPos,onEnd:b}),uc(a.newPos),Vd&&kd(we,J(a.newPos,Me.min,Me.max))):b();else{var c=a.$target.closest("."+Kb,xe)[0];c&&rd.call(c,a.startEvent)}},timeLow:.5,timeHigh:2,friction:5,$wrap:we}),Le=cb(pe,{shift:!0,onEnd:function(a,b){fd(),gd(),ge.show({index:b,slow:a.altKey})}}),Ne=cb(we,{onEnd:function(a,b){fd(),gd();var c=u(xe)+.25*b;xe.css(k(h(c,Me.min,Me.max))),Vd&&kd(we,J(c,Me.min,Me.max)),Ne.prevent={"<":c>=Me.max,">":c<=Me.min},clearTimeout(Ne.t),Ne.t=setTimeout(function(){Jc.l=c,uc(c,!0)},Rc),uc(c)}}),oe.hover(function(){setTimeout(function(){de||md(!(ee=!0))},0)},function(){ee&&md(!(ee=!1))}),L(ue,function(a){X(a),sd.call(this,a)},{onStart:function(){fd(),Ke.control=!0},onTouchEnd:gd}),ue.each(function(){V(this,function(a){sd.call(this,a)}),td(this)}),V(Ce,ge.toggleFullScreen),td(Ce),d.each("load push pop shift unshift reverse sort splice".split(" "),function(a,b){ge[b]=function(){return xd=xd||[],"load"!==b?Array.prototype[b].apply(xd,arguments):arguments[0]&&"object"==typeof arguments[0]&&arguments[0].length&&(xd=O(arguments[0])),ud(),ge}}),ud()},d.fn.fotorama=function(b){return this.each(function(){var c=this,e=d(this),f=e.data(),g=f.fotorama;g?g.setOptions(b,!0):F(function(){return!D(c)},function(){f.urtext=e.html(),new d.Fotorama(e,d.extend({},dd,a.fotoramaDefaults,b,f))})})},d.Fotorama.instances=[],d.Fotorama.cache={},d.Fotorama.measures={},d=d||{},d.Fotorama=d.Fotorama||{},d.Fotorama.jst=d.Fotorama.jst||{},d.Fotorama.jst.style=function(a){{var b,c="";rc.escape}return c+=".fotorama"+(null==(b=a.s)?"":b)+" .fotorama__nav--thumbs .fotorama__nav__frame{\npadding:"+(null==(b=a.m)?"":b)+"px;\nheight:"+(null==(b=a.h)?"":b)+"px}\n.fotorama"+(null==(b=a.s)?"":b)+" .fotorama__thumb-border{\nheight:"+(null==(b=a.h-a.b*(a.q?0:2))?"":b)+"px;\nborder-width:"+(null==(b=a.b)?"":b)+"px;\nmargin-top:"+(null==(b=a.m)?"":b)+"px}"},d.Fotorama.jst.video=function(a){function b(){c+=d.call(arguments,"")}var c="",d=(rc.escape,Array.prototype.join);return c+='<div class="fotorama__video"><iframe src="',b(("youtube"==a.type?"http://youtube.com/embed/"+a.id+"?autoplay=1":"vimeo"==a.type?"http://player.vimeo.com/video/"+a.id+"?autoplay=1&badge=0":a.id)+(a.s&&"custom"!=a.type?"&"+a.s:"")),c+='" frameborder="0" allowfullscreen></iframe></div>'},d(function(){d("."+gb+':not([data-auto="false"])').fotorama()})}(window,document,location,"undefined"!=typeof jQuery&&jQuery);