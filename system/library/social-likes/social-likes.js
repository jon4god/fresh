/*! Social Likes v3.0.0-alpha-2 by Artem Sapegin - http://sapegin.github.com/social-likes - Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict";function b(a,b){this.container=a,this.options=b,this.init()}function c(b,c){this.widget=b,this.options=a.extend({},c),this.detectService(),this.service&&this.init()}function d(a){function b(a,b){return b.toUpper()}var c={},d=a.data();for(var e in d){var f=d[e];"yes"===f?f=!0:"no"===f&&(f=!1),c[e.replace(/-(\w)/g,b)]=f}return c}function e(a,b){return f(a,b,encodeURIComponent)}function f(a,b,c){return a.replace(/\{([^\}]+)\}/g,function(a,d){return d in b?c?c(b[d]):b[d]:a})}function g(a,b){var c=k+a;return c+" "+c+"_"+b}function h(b){function c(f){"keydown"===f.type&&27!==f.which||a(f.target).closest(b).length||(b.removeClass(l),d.off(e,c))}var d=a(document),e="click touchstart keydown";d.on(e,c)}function i(a,b){if(document.documentElement.getBoundingClientRect){var c=parseInt(a.css("left"),10),d=parseInt(a.css("top"),10),e=a[0].getBoundingClientRect();e.left<b?a.css("left",b-e.left+c):e.right>window.innerWidth-b&&a.css("left",window.innerWidth-e.right-b+c),e.top<b?a.css("top",b-e.top+d):e.bottom>window.innerHeight-b&&a.css("top",window.innerHeight-e.bottom-b+d)}a.addClass(l)}var j="social-likes",k=j+"__",l=j+"_opened",m={facebook:{counterUrl:"http://graph.facebook.com/fql?q=SELECT+total_count+FROM+link_stat+WHERE+url%3D%22{url}%22&callback=?",convertNumber:function(a){return a.data[0].total_count},popupUrl:"http://www.facebook.com/sharer/sharer.php?u={url}",popupWidth:600,popupHeight:500},twitter:{counterUrl:"http://urls.api.twitter.com/1/urls/count.json?url={url}&callback=?",convertNumber:function(a){return a.count},popupUrl:"http://twitter.com/intent/tweet?url={url}&text={title}",popupWidth:600,popupHeight:450,click:function(){return/[\.:\-–—]\s*$/.test(this.options.title)||(this.options.title+=":"),!0}},mailru:{counterUrl:"http://connect.mail.ru/share_count?url_list={url}&callback=1&func=?",convertNumber:function(a){for(var b in a)if(a.hasOwnProperty(b))return a[b].shares},popupUrl:"http://connect.mail.ru/share?share_url={url}&title={title}",popupWidth:550,popupHeight:360},vkontakte:{counterUrl:"http://vkontakte.ru/share.php?act=count&url={url}&index={index}",counter:function(b,c){var d=m.vkontakte;d._||(d._=[],window.VK||(window.VK={}),window.VK.Share={count:function(a,b){d._[a].resolve(b)}});var f=d._.length;d._.push(c),a.getScript(e(b,{index:f})).fail(c.reject)},popupUrl:"http://vk.com/share.php?url={url}&title={title}",popupWidth:550,popupHeight:330},odnoklassniki:{counterUrl:"http://www.odnoklassniki.ru/dk?st.cmd=shareData&ref={url}&cb=?",convertNumber:function(a){return a.count},popupUrl:"http://www.odnoklassniki.ru/dk?st.cmd=addShare&st._surl={url}",popupWidth:550,popupHeight:360},plusone:{counterUrl:"http://share.yandex.ru/gpp.xml?url={url}",counter:function(b,c){var d=m.plusone;return d._?(c.reject(),void 0):(window.services||(window.services={}),window.services.gplus={cb:function(a){d._.resolve(a)}},d._=c,a.getScript(e(b)).fail(c.reject),void 0)},popupUrl:"https://plus.google.com/share?url={url}",popupWidth:700,popupHeight:500},pinterest:{counterUrl:"http://api.pinterest.com/v1/urls/count.json?url={url}&callback=?",convertNumber:function(a){return a.count},popupUrl:"http://pinterest.com/pin/create/button/?url={url}&description={title}",popupWidth:630,popupHeight:270}},n={promises:{},fetch:function(b,c,d){n.promises[b]||(n.promises[b]={});var f=n.promises[b];if(f[c])return f[c];var g=a.extend({},m[b],d),h=a.Deferred(),i=g.counterUrl&&e(g.counterUrl,{url:c});return a.isFunction(g.counter)?g.counter(i,h):g.counterUrl?a.getJSON(i).done(function(b){try{var c=b;a.isFunction(g.convertNumber)&&(c=g.convertNumber(b)),h.resolve(c)}catch(d){h.reject()}}).fail(h.reject):h.reject(),f[c]=h.promise(),f[c]}};a.fn.socialLikes=function(c){return this.each(function(){var e=a(this);new b(e,a.extend({},a.fn.socialLikes.defaults,c,d(e)))})},a.fn.socialLikes.defaults={url:window.location.href.replace(window.location.hash,""),title:document.title,counters:!0,zeroes:!1,wait:500,singleTitle:"Share"},b.prototype={init:function(){this.container.addClass(j),this.single=this.container.hasClass(j+"_single"),this.initUserButtons(),this.number=0,this.container.on("counter."+j,a.proxy(this.updateCounter,this));var b=this.container.children();this.countersLeft=b.length,this.makeSingleButton(),b.each(a.proxy(function(b,d){new c(a(d),this.options)},this)),this.options.counters?this.timer=setTimeout(a.proxy(this.appear,this),this.options.wait):this.appear()},initUserButtons:function(){!this.userButtonInited&&window.socialLikesButtons&&a.extend(!0,m,socialLikesButtons),this.userButtonInited=!0},makeSingleButton:function(){if(this.single){var b=this.container;b.addClass(j+"_vertical"),b.wrap(a("<div>",{"class":j+"_single-w"}));var c=b.parent(),d=parseInt(b.css("left"),10),e=parseInt(b.css("top"),10),m=a("<div>",{"class":g("widget","single")}),n=a(f('<div class="{buttonCls}"><span class="{iconCls}"></span>{title}</div>',{buttonCls:g("button","single"),iconCls:g("icon","single"),title:this.options.singleTitle}));m.append(n),c.append(m),m.click(function(){return b.css({left:d,top:e}),i(b,20),h(b),!1});var o=a("<div>",{"class":k+"close",html:"&times;"});b.append(o),o.click(function(){b.removeClass(l)}),this.widget=m}},updateCounter:function(a,b,c){c&&(this.number+=c,this.single&&this.getCounterElem().text(this.number)),this.countersLeft--,0===this.countersLeft&&(this.appear(),this.container.addClass(j+"_ready"),this.container.trigger("ready."+j,this.number))},appear:function(){this.container.addClass(j+"_visible")},getCounterElem:function(){var b=this.widget.find("."+k+"counter_single");return b.length||(b=a("<span>",{"class":g("counter","single")}),this.widget.append(b)),b}},c.prototype={init:function(){if(this.detectParams(),this.initHtml(),this.options.counters)if(this.options.counterNumber)this.updateCounter(this.options.counterNumber);else{var b=this.options.counterUrl?{counterUrl:this.options.counterUrl}:{};n.fetch(this.service,this.options.url,b).always(a.proxy(this.updateCounter,this))}},detectService:function(){for(var b=this.widget[0].classList||this.widget[0].className.split(" "),c=0;c<b.length;c++){var d=b[c];if(m[d])return this.service=d,a.extend(this.options,m[d]),void 0}},detectParams:function(){var a=this.widget.data();if(a.counter){var b=parseInt(a.counter,10);isNaN(b)?this.options.counterUrl=a.counter:this.options.counterNumber=b}a.title&&(this.options.title=a.title),a.url&&(this.options.url=a.url)},initHtml:function(){var b=this.options,c=this.widget,d=c.find("a");d.length&&this.cloneDataAttrs(d,c);var f=a("<span>",{"class":this.getElementClassNames("button"),text:c.text()});if(b.clickUrl){var g=e(b.clickUrl,{url:b.url,title:b.title}),h=a("<a>",{href:g});this.cloneDataAttrs(c,h),c.replaceWith(h),this.widget=c=h}else c.click(a.proxy(this.click,this));c.removeClass(this.service),c.addClass(this.getElementClassNames("widget")),f.prepend(a("<span>",{"class":this.getElementClassNames("icon")})),c.empty().append(f),this.button=f},cloneDataAttrs:function(a,b){var c=a.data();for(var d in c)c.hasOwnProperty(d)&&b.data(d,c[d])},getElementClassNames:function(a){return g(a,this.service)},updateCounter:function(b){if(b=parseInt(b,10)||0,b||this.options.zeroes){var c=a("<span>",{"class":this.getElementClassNames("counter"),text:b});this.widget.append(c)}this.widget.trigger("counter."+j,[this.service,b])},click:function(b){var c=this.options,d=!0;if(a.isFunction(c.click)&&(d=c.click.call(this,b)),d){var f=e(c.popupUrl,{url:c.url,title:c.title});f=this.addAdditionalParamsToUrl(f),this.openPopup(f,{width:c.popupWidth,height:c.popupHeight})}return!1},addAdditionalParamsToUrl:function(b){var c=a.param(this.widget.data());if(!c)return b;var d=-1===b.indexOf("?")?"?":"&";return b+d+c},openPopup:function(a,b){var c=Math.round(screen.width/2-b.width/2),d=0;screen.height>b.height&&(d=Math.round(screen.height/3-b.height/2));var e=window.open(a,"sl_"+this.service,"left="+c+",top="+d+",width="+b.width+",height="+b.height+",personalbar=0,toolbar=0,scrollbars=1,resizable=1");e?e.focus():location.href=a}},a(function(){a("."+j).socialLikes()})});