/*!
 * Theme “Polikarpov” 1.0.1 | https://artpolikarpov.github.io/theme-polikarpov/
 */
$(function(){var a=$('img[alt^="cover"]'),b=a.attr("src"),c=$("#layout-root");if(a.parents(".e2-text-picture").remove(),b&&c.hasClass("layout--note")){var d=$.map(a.attr("alt").split(" ").slice(1),function(a){return"cover__layout--"+a}).join(" "),e=300,f=$('<div class="cover__fotorama"></div>').insertBefore(c).fotorama({width:"100%",ratio:16/9,maxheight:"90%",minheight:e,fit:"cover",allowfullscreen:!1,nav:!1,arrows:!1,click:!1,swipe:!1,trackpad:!1}).data("fotorama"),g=$("<div></div>");$(".js-cover").each(function(){$(this).appendTo(g)}),$("*[lead]").each(function(){$(this).wrapInner('<span class="text-bg"><span class="text-bg text-bg--1"><span class="text-bg text-bg--2"></span></span></span>').appendTo($(".js-cover-lead",g))}),f.load([{img:b,html:'<div class="layout layout--cover cover__layout '+d+' fotorama__select"><div class="layout__floor cover__floor">'+g.html()+"</div></div>"}]),$(window).on("resize orientationchange",function(){var a=0;$(".js-cover").each(function(){console.log("$(this).innerHeight()",$(this).innerHeight()),a+=$(this).innerHeight()}),console.log("_minheight",a),a>e&&(e=a,f.setOptions({minheight:e}),console.log("new minheight",e))}).resize()}}),/*!
  upyachka.js 0.2.0 | https://github.com/artpolikarpov/upyachka.js
 */
function(){var a=function(a,b,c){return a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent?a.attachEvent("on"+b,c,!1):void 0},b=function(a,b,c){return a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent?a.detachEvent("on"+b,c,!1):void 0},c=function(){var c=this,d=$(this),e=c.getAttribute("style"),f=c.className,g=!0;if(!d.width()||!d.height()){var h=function(){return c.style.height=Math.round(d.width()/k)+"px"};c.onload=function(){return e?c.setAttribute("style",e):c.removeAttribute("style"),g=!1,c.className=f,b(window,"resize",h)};var i=c.getAttribute("width"),j=c.getAttribute("height"),k=i/j;return g?(c.className+=" upyachka",h(),a(window,"resize",h)):void 0}};$(function(){$("img[width][height][src]").each(c)})}();