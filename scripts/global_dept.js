/****************** Query easytabs ***************/
!function(a){a.easytabs=function(t,s){var e,i,n,l,o,c,d=this,r=a(t),h={animate:!0,panelActiveClass:"active",tabActiveClass:"active",defaultTab:"li:first-child",animationSpeed:"normal",tabs:"> ul > li",updateHash:!0,cycle:!1,collapsible:!1,collapsedClass:"collapsed",collapsedByDefault:!0,uiTabs:!1,transitionIn:"fadeIn",transitionOut:"fadeOut",transitionInEasing:"swing",transitionOutEasing:"swing",transitionCollapse:"slideUp",transitionUncollapse:"slideDown",transitionCollapseEasing:"swing",transitionUncollapseEasing:"swing",containerClass:"",tabsClass:"",tabClass:"",panelClass:"",cache:!0,event:"click",panelContext:r},b={fast:200,normal:400,slow:600};d.init=function(){d.settings=c=a.extend({},h,s),c.bind_str=c.event+".easytabs",c.uiTabs&&(c.tabActiveClass="ui-tabs-selected",c.containerClass="ui-tabs ui-widget ui-widget-content ui-corner-all",c.tabsClass="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all",c.tabClass="ui-state-default ui-corner-top",c.panelClass="ui-tabs-panel ui-widget-content ui-corner-bottom"),c.collapsible&&void 0!==s.defaultTab&&void 0===s.collpasedByDefault&&(c.collapsedByDefault=!1),"string"==typeof c.animationSpeed&&(c.animationSpeed=b[c.animationSpeed]),a("a.anchor").remove().prependTo("body"),r.data("easytabs",{}),d.setTransitions(),d.getTabs(),u(),f(),C(),w(),T(),r.attr("data-easytabs",!0)},d.setTransitions=function(){n=c.animate?{show:c.transitionIn,hide:c.transitionOut,speed:c.animationSpeed,collapse:c.transitionCollapse,uncollapse:c.transitionUncollapse,halfSpeed:c.animationSpeed/2}:{show:"show",hide:"hide",speed:0,collapse:"hide",uncollapse:"show",halfSpeed:0}},d.getTabs=function(){var t;d.tabs=r.find(c.tabs),d.panels=a(),d.tabs.each(function(){var s=a(this),e=s.children("a"),i=s.children("a").data("target");s.data("easytabs",{}),void 0!==i&&null!==i?s.data("easytabs").ajax=e.attr("href"):i=e.attr("href"),i=i.match(/#([^\?]+)/)[1],t=c.panelContext.find("#"+i),t.length?(t.data("easytabs",{position:t.css("position"),visibility:t.css("visibility")}),t.not(c.panelActiveClass).hide(),d.panels=d.panels.add(t),s.data("easytabs").panel=t):(d.tabs=d.tabs.not(s),"console"in window&&console.warn("Warning: tab without matching panel for selector '#"+i+"' removed from set"))})},d.selectTab=function(a,t){var s=window.location,e=(s.hash.match(/^[^\?]*/)[0],a.parent().data("easytabs").panel),i=a.parent().data("easytabs").ajax;c.collapsible&&!o&&(a.hasClass(c.tabActiveClass)||a.hasClass(c.collapsedClass))?d.toggleTabCollapse(a,e,i,t):a.hasClass(c.tabActiveClass)&&e.hasClass(c.panelActiveClass)?c.cache||v(a,e,i,t):v(a,e,i,t)},d.toggleTabCollapse=function(a,t,s,e){d.panels.stop(!0,!0),p(r,"easytabs:before",[a,t,c])&&(d.tabs.filter("."+c.tabActiveClass).removeClass(c.tabActiveClass).children().removeClass(c.tabActiveClass),a.hasClass(c.collapsedClass)?(!s||c.cache&&a.parent().data("easytabs").cached||(r.trigger("easytabs:ajax:beforeSend",[a,t]),t.load(s,function(s,e,i){a.parent().data("easytabs").cached=!0,r.trigger("easytabs:ajax:complete",[a,t,s,e,i])})),a.parent().removeClass(c.collapsedClass).addClass(c.tabActiveClass).children().removeClass(c.collapsedClass).addClass(c.tabActiveClass),t.addClass(c.panelActiveClass)[n.uncollapse](n.speed,c.transitionUncollapseEasing,function(){r.trigger("easytabs:midTransition",[a,t,c]),"function"==typeof e&&e()})):(a.addClass(c.collapsedClass).parent().addClass(c.collapsedClass),t.removeClass(c.panelActiveClass)[n.collapse](n.speed,c.transitionCollapseEasing,function(){r.trigger("easytabs:midTransition",[a,t,c]),"function"==typeof e&&e()})))},d.matchTab=function(a){return d.tabs.find("[href='"+a+"'],[data-target='"+a+"']").first()},d.matchInPanel=function(a){return a&&d.validId(a)?d.panels.filter(":has("+a+")").first():[]},d.validId=function(a){return a.substr(1).match(/^[A-Za-z][A-Za-z0-9\-_:\.]*$/)},d.selectTabFromHashChange=function(){var a,t=window.location.hash.match(/^[^\?]*/)[0],s=d.matchTab(t);c.updateHash&&(s.length?(o=!0,d.selectTab(s)):(a=d.matchInPanel(t),a.length?(t="#"+a.attr("id"),s=d.matchTab(t),o=!0,d.selectTab(s)):e.hasClass(c.tabActiveClass)||c.cycle||(""===t||d.matchTab(l).length||r.closest(t).length)&&(o=!0,d.selectTab(i))))},d.cycleTabs=function(t){c.cycle&&(t%=d.tabs.length,$tab=a(d.tabs[t]).children("a").first(),o=!0,d.selectTab($tab,function(){setTimeout(function(){d.cycleTabs(t+1)},c.cycle)}))},d.publicMethods={select:function(t){var s;0===(s=d.tabs.filter(t)).length?0===(s=d.tabs.find("a[href='"+t+"']")).length&&0===(s=d.tabs.find("a"+t)).length&&0===(s=d.tabs.find("[data-target='"+t+"']")).length&&0===(s=d.tabs.find("a[href$='"+t+"']")).length&&a.error("Tab '"+t+"' does not exist in tab set"):s=s.children("a").first(),d.selectTab(s)}};var p=function(t,s,e){var i=a.Event(s);return t.trigger(i,e),i.result!==!1},u=function(){r.addClass(c.containerClass),d.tabs.parent().addClass(c.tabsClass),d.tabs.addClass(c.tabClass),d.panels.addClass(c.panelClass)},f=function(){var t,s=window.location.hash.match(/^[^\?]*/)[0],n=d.matchTab(s).parent();1===n.length?(e=n,c.cycle=!1):(t=d.matchInPanel(s),t.length?(s="#"+t.attr("id"),e=d.matchTab(s).parent()):(e=d.tabs.parent().find(c.defaultTab),0===e.length&&a.error("The specified default tab ('"+c.defaultTab+"') could not be found in the tab set ('"+c.tabs+"') out of "+d.tabs.length+" tabs."))),i=e.children("a").first(),g(n)},g=function(t){var s,n;c.collapsible&&0===t.length&&c.collapsedByDefault?e.addClass(c.collapsedClass).children().addClass(c.collapsedClass):(s=a(e.data("easytabs").panel),n=e.data("easytabs").ajax,!n||c.cache&&e.data("easytabs").cached||(r.trigger("easytabs:ajax:beforeSend",[i,s]),s.load(n,function(a,t,n){e.data("easytabs").cached=!0,r.trigger("easytabs:ajax:complete",[i,s,a,t,n])})),e.data("easytabs").panel.show().addClass(c.panelActiveClass),e.addClass(c.tabActiveClass).children().addClass(c.tabActiveClass)),r.trigger("easytabs:initialised",[i,s])},C=function(){d.tabs.children("a").bind(c.bind_str,function(t){c.cycle=!1,o=!1,d.selectTab(a(this)),t.preventDefault?t.preventDefault():t.returnValue=!1})},v=function(a,t,s,e){if(d.panels.stop(!0,!0),p(r,"easytabs:before",[a,t,c])){var i,h,b,u,f=d.panels.filter(":visible"),g=t.parent(),C=window.location.hash.match(/^[^\?]*/)[0];c.animate&&(i=y(t),h=f.length?m(f):0,b=i-h),l=C,u=function(){r.trigger("easytabs:midTransition",[a,t,c]),c.animate&&"fadeIn"==c.transitionIn&&0>b&&g.animate({height:g.height()+b},n.halfSpeed).css({"min-height":""}),c.updateHash&&!o?window.history.pushState?window.history.pushState(null,null,"#"+t.attr("id")):window.location.hash="#"+t.attr("id"):o=!1,t[n.show](n.speed,c.transitionInEasing,function(){g.css({height:"","min-height":""}),r.trigger("easytabs:after",[a,t,c]),"function"==typeof e&&e()})},!s||c.cache&&a.parent().data("easytabs").cached||(r.trigger("easytabs:ajax:beforeSend",[a,t]),t.load(s,function(s,e,i){a.parent().data("easytabs").cached=!0,r.trigger("easytabs:ajax:complete",[a,t,s,e,i])})),c.animate&&"fadeOut"==c.transitionOut&&(b>0?g.animate({height:g.height()+b},n.halfSpeed):g.css({"min-height":g.height()})),d.tabs.filter("."+c.tabActiveClass).removeClass(c.tabActiveClass).children().removeClass(c.tabActiveClass),d.tabs.filter("."+c.collapsedClass).removeClass(c.collapsedClass).children().removeClass(c.collapsedClass),a.parent().addClass(c.tabActiveClass).children().addClass(c.tabActiveClass),d.panels.filter("."+c.panelActiveClass).removeClass(c.panelActiveClass),t.addClass(c.panelActiveClass),f.length?f[n.hide](n.speed,c.transitionOutEasing,u):t[n.uncollapse](n.speed,c.transitionUncollapseEasing,u)}},y=function(t){if(t.data("easytabs")&&t.data("easytabs").lastHeight)return t.data("easytabs").lastHeight;var s,e,i=t.css("display");try{s=a("<div></div>",{position:"absolute",visibility:"hidden",overflow:"hidden"})}catch(n){s=a("<div></div>",{visibility:"hidden",overflow:"hidden"})}return e=t.wrap(s).css({position:"relative",visibility:"hidden",display:"block"}).outerHeight(),t.unwrap(),t.css({position:t.data("easytabs").position,visibility:t.data("easytabs").visibility,display:i}),t.data("easytabs").lastHeight=e,e},m=function(a){var t=a.outerHeight();return a.data("easytabs")?a.data("easytabs").lastHeight=t:a.data("easytabs",{lastHeight:t}),t},w=function(){"function"==typeof a(window).hashchange?a(window).hashchange(function(){d.selectTabFromHashChange()}):a.address&&"function"==typeof a.address.change&&a.address.change(function(){d.selectTabFromHashChange()})},T=function(){var a;c.cycle&&(a=d.tabs.index(e),setTimeout(function(){d.cycleTabs(a+1)},c.cycle))};d.init()},a.fn.easytabs=function(t){var s=arguments;return this.each(function(){var e=a(this),i=e.data("easytabs");return void 0===i&&(i=new a.easytabs(this,t),e.data("easytabs",i)),i.publicMethods[t]?i.publicMethods[t](Array.prototype.slice.call(s,1)):void 0})}}(jQuery);


/* 
 * Boxer v3.3.0 - 2014-11-25 
 * A jQuery plugin for displaying images, videos or content in a modal overlay. Part of the Formstone Library. 
 * http://formstone.it/boxer/ 
 * 
 * Copyright 2014 Ben Plum; MIT Licensed 
 */
!function(a,b){"use strict";function c(b){return L.formatter=j,I=a("body"),G=F(),H=G!==!1,H||(G="transitionend.boxer"),a(this).on("click.boxer",a.extend({},L,b||{}),d)}function d(c){if("undefined"==typeof J.$boxer){var d=a(this),f=c.data.$object,g=d[0].href?d[0].href||"":"",i=d[0].hash?d[0].hash||"":"",j=g.toLowerCase().split(".").pop().split(/\#|\?/),l=j[0],m=d.data("boxer-type")||"",o="image"===m||a.inArray(l,c.data.extensions)>-1||"data:image"===g.substr(0,10),p=g.indexOf("youtube.com/embed")>-1||g.indexOf("player.vimeo.com/video")>-1,w="url"===m||!o&&!p&&"http"===g.substr(0,4)&&!i,x="element"===m||!o&&!p&&!w&&"#"===i.substr(0,1),y="undefined"!=typeof f;if(x&&(g=i),a("#boxer").length>1||!(o||p||w||x||y))return;if(C(c),J=a.extend({},{$window:a(b),$body:a("body"),$target:d,$object:f,visible:!1,resizeTimer:null,touchTimer:null,gallery:{active:!1},isMobile:K||c.data.mobile,isAnimating:!0,oldContentHeight:0,oldContentWidth:0},c.data),J.margin*=2,J.type=o?"image":p?"video":"element",o||p){var z=J.$target.data("gallery")||J.$target.attr("rel");"undefined"!=typeof z&&z!==!1&&(J.gallery.active=!0,J.gallery.id=z,J.gallery.$items=a("a[data-gallery= "+J.gallery.id+"], a[rel= "+J.gallery.id+"]"),J.gallery.index=J.gallery.$items.index(J.$target),J.gallery.total=J.gallery.$items.length-1)}var A="";if(J.isMobile||(A+='<div id="boxer-overlay" class="'+J.customClass+'"></div>'),A+='<div id="boxer" class="loading animating '+J.customClass,J.fixed&&(A+=" fixed"),J.isMobile&&(A+=" mobile"),w&&(A+=" iframe"),(x||y)&&(A+=" inline"),A+='">',A+='<span class="boxer-close">'+J.labels.close+"</span>",A+='<span class="boxer-loading"></span>',A+='<div class="boxer-container">',A+='<div class="boxer-content">',(o||p)&&(A+='<div class="boxer-meta">',J.gallery.active?(A+='<div class="boxer-control previous">'+J.labels.previous+"</div>",A+='<div class="boxer-control next">'+J.labels.next+"</div>",A+='<p class="boxer-position"',J.gallery.total<1&&(A+=' style="display: none;"'),A+=">",A+='<span class="current">'+(J.gallery.index+1)+"</span> "+J.labels.count+' <span class="total">'+(J.gallery.total+1)+"</span>",A+="</p>",A+='<div class="boxer-caption gallery">'):A+='<div class="boxer-caption">',A+=J.formatter.apply(J.$body,[J.$target]),A+="</div></div>"),A+="</div></div></div>",J.$body.append(A),J.$overlay=a("#boxer-overlay"),J.$boxer=a("#boxer"),J.$container=J.$boxer.find(".boxer-container"),J.$content=J.$boxer.find(".boxer-content"),J.$meta=J.$boxer.find(".boxer-meta"),J.$position=J.$boxer.find(".boxer-position"),J.$caption=J.$boxer.find(".boxer-caption"),J.$controls=J.$boxer.find(".boxer-control"),J.paddingVertical=J.isMobile?J.$boxer.find(".boxer-close").outerHeight()/2:parseInt(J.$boxer.css("paddingTop"),10)+parseInt(J.$boxer.css("paddingBottom"),10),J.paddingHorizontal=J.isMobile?0:parseInt(J.$boxer.css("paddingLeft"),10)+parseInt(J.$boxer.css("paddingRight"),10),J.contentHeight=J.$boxer.outerHeight()-J.paddingVertical,J.contentWidth=J.$boxer.outerWidth()-J.paddingHorizontal,J.controlHeight=J.$controls.outerHeight(),h(),J.gallery.active&&r(),J.$window.on("resize.boxer",M.resize).on("keydown.boxer",s),J.$body.on("touchstart.boxer click.boxer","#boxer-overlay, #boxer .boxer-close",e).on("touchmove.boxer",C),J.gallery.active&&J.$boxer.on("touchstart.boxer click.boxer",".boxer-control",q),J.$boxer.on(G,function(b){C(b),a(b.target).is(J.$boxer)&&(J.$boxer.off(G),o?k(g):p?n(g):w?u(g):x?t(g):y?v(J.$object):a.error("BOXER: '"+g+"' is not valid."))}),I.addClass("boxer-open"),H||J.$boxer.trigger(G),y)return J.$boxer}}function e(b){C(b),"undefined"!=typeof J.$boxer&&(J.$boxer.on(G,function(b){C(b),a(b.target).is(J.$boxer)&&(J.$boxer.off(G),J.$overlay.remove(),J.$boxer.remove(),J={})}).addClass("animating"),I.removeClass("boxer-open"),H||J.$boxer.trigger(G),E(J.resizeTimer),J.$window.off("resize.boxer").off("keydown.boxer"),J.$body.off(".boxer").removeClass("boxer-open"),J.gallery.active&&J.$boxer.off(".boxer"),J.isMobile&&"image"===J.type&&J.gallery.active&&J.$container.off(".boxer"),J.$window.trigger("close.boxer"))}function f(){{var b=i();J.isMobile?0:J.duration}J.isMobile||J.$controls.css({marginTop:(J.contentHeight-J.controlHeight-J.metaHeight)/2}),!J.visible&&J.isMobile&&J.gallery.active&&J.$content.on("touchstart.boxer",".boxer-image",y),(J.isMobile||J.fixed)&&J.$body.addClass("boxer-open"),J.$boxer.on(G,function(b){C(b),a(b.target).is(J.$boxer)&&(J.$boxer.off(G),J.$container.on(G,function(b){C(b),a(b.target).is(J.$container)&&(J.$container.off(G),J.$boxer.removeClass("animating"),J.isAnimating=!1)}),J.$boxer.removeClass("loading"),H||J.$content.trigger(G),J.visible=!0,J.callback.apply(J.$boxer),J.$window.trigger("open.boxer"),J.gallery.active&&p())}),J.isMobile||J.$boxer.css({height:J.contentHeight+J.paddingVertical,width:J.contentWidth+J.paddingHorizontal,top:J.fixed?0:b.top});var c=J.oldContentHeight!==J.contentHeight||J.oldContentWidth!==J.contentWidth;!J.isMobile&&H&&c||J.$boxer.trigger(G),J.oldContentHeight=J.contentHeight,J.oldContentWidth=J.contentWidth}function g(){if(J.visible&&!J.isMobile){var a=i();J.$controls.css({marginTop:(J.contentHeight-J.controlHeight-J.metaHeight)/2}),J.$boxer.css({height:J.contentHeight+J.paddingVertical,width:J.contentWidth+J.paddingHorizontal,top:J.fixed?0:a.top})}}function h(){var a=i();J.$boxer.css({top:J.fixed?0:a.top})}function i(){if(J.isMobile)return{left:0,top:0};var a={left:(J.$window.width()-J.contentWidth-J.paddingHorizontal)/2,top:J.top<=0?(J.$window.height()-J.contentHeight-J.paddingVertical)/2:J.top};return J.fixed!==!0&&(a.top+=J.$window.scrollTop()),a}function j(a){var b=a.attr("title");return void 0!==b&&""!==b.trim()?'<p class="caption">'+b.trim()+"</p>":""}function k(b){J.$image=a("<img />"),J.$image.load(function(){J.$image.off("load, error");var a=B(J.$image);J.naturalHeight=a.naturalHeight,J.naturalWidth=a.naturalWidth,J.retina&&(J.naturalHeight/=2,J.naturalWidth/=2),J.$content.prepend(J.$image),""===J.$caption.html()?J.$caption.hide():J.$caption.show(),l(),f()}).error(x).attr("src",b).addClass("boxer-image"),(J.$image[0].complete||4===J.$image[0].readyState)&&J.$image.trigger("load")}function l(){var a=0;for(J.windowHeight=J.viewportHeight=J.$window.height()-J.paddingVertical,J.windowWidth=J.viewportWidth=J.$window.width()-J.paddingHorizontal,J.contentHeight=1/0,J.contentWidth=1/0,J.imageMarginTop=0,J.imageMarginLeft=0;J.contentHeight>J.viewportHeight&&2>a;)J.imageHeight=0===a?J.naturalHeight:J.$image.outerHeight(),J.imageWidth=0===a?J.naturalWidth:J.$image.outerWidth(),J.metaHeight=0===a?0:J.metaHeight,0===a&&(J.ratioHorizontal=J.imageHeight/J.imageWidth,J.ratioVertical=J.imageWidth/J.imageHeight,J.isWide=J.imageWidth>J.imageHeight),J.imageHeight<J.minHeight&&(J.minHeight=J.imageHeight),J.imageWidth<J.minWidth&&(J.minWidth=J.imageWidth),J.isMobile?(J.$meta.css({width:J.windowWidth}),J.metaHeight=J.$meta.outerHeight(!0),J.contentHeight=J.viewportHeight-J.paddingVertical,J.contentWidth=J.viewportWidth-J.paddingHorizontal,m(),J.imageMarginTop=(J.contentHeight-J.targetImageHeight-J.metaHeight)/2,J.imageMarginLeft=(J.contentWidth-J.targetImageWidth)/2):(0===a&&(J.viewportHeight-=J.margin+J.paddingVertical,J.viewportWidth-=J.margin+J.paddingHorizontal),J.viewportHeight-=J.metaHeight,m(),J.contentHeight=J.targetImageHeight,J.contentWidth=J.targetImageWidth),J.$meta.css({width:J.contentWidth}),J.$image.css({height:J.targetImageHeight,width:J.targetImageWidth,marginTop:J.imageMarginTop,marginLeft:J.imageMarginLeft}),J.isMobile||(J.metaHeight=J.$meta.outerHeight(!0),J.contentHeight+=J.metaHeight),a++}function m(){var a=J.isMobile?J.contentHeight-J.metaHeight:J.viewportHeight,b=J.isMobile?J.contentWidth:J.viewportWidth;J.isWide?(J.targetImageWidth=b,J.targetImageHeight=J.targetImageWidth*J.ratioHorizontal,J.targetImageHeight>a&&(J.targetImageHeight=a,J.targetImageWidth=J.targetImageHeight*J.ratioVertical)):(J.targetImageHeight=a,J.targetImageWidth=J.targetImageHeight*J.ratioVertical,J.targetImageWidth>b&&(J.targetImageWidth=b,J.targetImageHeight=J.targetImageWidth*J.ratioHorizontal)),(J.targetImageWidth>J.imageWidth||J.targetImageHeight>J.imageHeight)&&(J.targetImageHeight=J.imageHeight,J.targetImageWidth=J.imageWidth),(J.targetImageWidth<J.minWidth||J.targetImageHeight<J.minHeight)&&(J.targetImageWidth<J.minWidth?(J.targetImageWidth=J.minWidth,J.targetImageHeight=J.targetImageWidth*J.ratioHorizontal):(J.targetImageHeight=J.minHeight,J.targetImageWidth=J.targetImageHeight*J.ratioVertical))}function n(b){J.$videoWrapper=a('<div class="boxer-video-wrapper" />'),J.$video=a('<iframe class="boxer-video" frameborder="0" seamless="seamless" allowfullscreen />'),J.$video.attr("src",b).addClass("boxer-video").prependTo(J.$videoWrapper),J.$content.prepend(J.$videoWrapper),o(),f()}function o(){J.windowHeight=J.viewportHeight=J.contentHeight=J.$window.height()-J.paddingVertical,J.windowWidth=J.viewportWidth=J.contentWidth=J.$window.width()-J.paddingHorizontal,J.videoMarginTop=0,J.videoMarginLeft=0,J.isMobile?(J.$meta.css({width:J.windowWidth}),J.metaHeight=J.$meta.outerHeight(!0),J.viewportHeight-=J.metaHeight,J.targetVideoWidth=J.viewportWidth,J.targetVideoHeight=J.targetVideoWidth*J.videoRatio,J.targetVideoHeight>J.viewportHeight&&(J.targetVideoHeight=J.viewportHeight,J.targetVideoWidth=J.targetVideoHeight/J.videoRatio),J.videoMarginTop=(J.viewportHeight-J.targetVideoHeight)/2,J.videoMarginLeft=(J.viewportWidth-J.targetVideoWidth)/2):(J.viewportHeight=J.windowHeight-J.margin,J.viewportWidth=J.windowWidth-J.margin,J.targetVideoWidth=J.videoWidth>J.viewportWidth?J.viewportWidth:J.videoWidth,J.targetVideoWidth<J.minWidth&&(J.targetVideoWidth=J.minWidth),J.targetVideoHeight=J.targetVideoWidth*J.videoRatio,J.contentHeight=J.targetVideoHeight,J.contentWidth=J.targetVideoWidth),J.$meta.css({width:J.contentWidth}),J.$videoWrapper.css({height:J.targetVideoHeight,width:J.targetVideoWidth,marginTop:J.videoMarginTop,marginLeft:J.videoMarginLeft}),J.isMobile||(J.metaHeight=J.$meta.outerHeight(!0),J.contentHeight=J.targetVideoHeight+J.metaHeight)}function p(){var b="";J.gallery.index>0&&(b=J.gallery.$items.eq(J.gallery.index-1).attr("href"),b.indexOf("youtube.com/embed")<0&&b.indexOf("player.vimeo.com/video")<0&&a('<img src="'+b+'">')),J.gallery.index<J.gallery.total&&(b=J.gallery.$items.eq(J.gallery.index+1).attr("href"),b.indexOf("youtube.com/embed")<0&&b.indexOf("player.vimeo.com/video")<0&&a('<img src="'+b+'">'))}function q(b){C(b);var c=a(this);J.isAnimating||c.hasClass("disabled")||(J.isAnimating=!0,J.gallery.index+=c.hasClass("next")?1:-1,J.gallery.index>J.gallery.total&&(J.gallery.index=J.gallery.total),J.gallery.index<0&&(J.gallery.index=0),J.$container.on(G,function(b){if(C(b),a(b.target).is(J.$container)){J.$container.off(G),"undefined"!=typeof J.$image&&J.$image.remove(),"undefined"!=typeof J.$videoWrapper&&J.$videoWrapper.remove(),J.$target=J.gallery.$items.eq(J.gallery.index),J.$caption.html(J.formatter.apply(J.$body,[J.$target])),J.$position.find(".current").html(J.gallery.index+1);var c=J.$target.attr("href"),d=c.indexOf("youtube.com/embed")>-1||c.indexOf("player.vimeo.com/video")>-1;d?n(c):k(c),r()}}),J.$boxer.addClass("loading animating"),H||J.$content.trigger(G))}function r(){J.$controls.removeClass("disabled"),0===J.gallery.index&&J.$controls.filter(".previous").addClass("disabled"),J.gallery.index===J.gallery.total&&J.$controls.filter(".next").addClass("disabled")}function s(a){!J.gallery.active||37!==a.keyCode&&39!==a.keyCode?27===a.keyCode&&J.$boxer.find(".boxer-close").trigger("click"):(C(a),J.$controls.filter(37===a.keyCode?".previous":".next").trigger("click"))}function t(b){var c=a(b).find(">:first-child").clone();v(c)}function u(b){b+=b.indexOf("?")>-1?"&"+L.requestKey+"=true":"?"+L.requestKey+"=true";var c=a('<iframe class="boxer-iframe" src="'+b+'" />');v(c)}function v(a){J.$content.append(a),w(a),f()}function w(a){J.windowHeight=J.$window.height()-J.paddingVertical,J.windowWidth=J.$window.width()-J.paddingHorizontal,J.objectHeight=a.outerHeight(!0),J.objectWidth=a.outerWidth(!0),J.targetHeight=J.targetHeight||J.$target.data("boxer-height"),J.targetWidth=J.targetWidth||J.$target.data("boxer-width"),J.maxHeight=J.windowHeight<0?L.minHeight:J.windowHeight,J.isIframe=a.is("iframe"),J.objectMarginTop=0,J.objectMarginLeft=0,J.isMobile||(J.windowHeight-=J.margin,J.windowWidth-=J.margin),J.contentHeight=void 0!==J.targetHeight?J.targetHeight:J.isIframe||J.isMobile?J.windowHeight:J.objectHeight,J.contentWidth=void 0!==J.targetWidth?J.targetWidth:J.isIframe||J.isMobile?J.windowWidth:J.objectWidth,(J.isIframe||J.isObject)&&J.isMobile?(J.contentHeight=J.windowHeight,J.contentWidth=J.windowWidth):J.isObject&&(J.contentHeight=J.contentHeight>J.windowHeight?J.windowHeight:J.contentHeight,J.contentWidth=J.contentWidth>J.windowWidth?J.windowWidth:J.contentWidth)}function x(){var b=a('<div class="boxer-error"><p>Error Loading Resource</p></div>');J.type="element",J.$meta.remove(),J.$image.off("load, error"),v(b)}function y(a){if(C(a),E(J.touchTimer),!J.isAnimating){var b="undefined"!=typeof a.originalEvent.targetTouches?a.originalEvent.targetTouches[0]:null;J.xStart=b?b.pageX:a.clientX,J.leftPosition=0,J.touchMax=1/0,J.touchMin=-1/0,J.edge=.25*J.contentWidth,0===J.gallery.index&&(J.touchMax=0),J.gallery.index===J.gallery.total&&(J.touchMin=0),J.$boxer.on("touchmove.boxer",z).one("touchend.boxer",A)}}function z(a){var b="undefined"!=typeof a.originalEvent.targetTouches?a.originalEvent.targetTouches[0]:null;J.delta=J.xStart-(b?b.pageX:a.clientX),J.delta>20&&C(a),J.canSwipe=!0;var c=-J.delta;c<J.touchMin&&(c=J.touchMin,J.canSwipe=!1),c>J.touchMax&&(c=J.touchMax,J.canSwipe=!1),J.$image.css({transform:"translate3D("+c+"px,0,0)"}),J.touchTimer=D(J.touchTimer,300,function(){A(a)})}function A(a){C(a),E(J.touchTimer),J.$boxer.off("touchmove.boxer touchend.boxer"),J.delta&&(J.$boxer.addClass("animated"),J.swipe=!1,J.canSwipe&&(J.delta>J.edge||J.delta<-J.edge)?(J.swipe=!0,J.$image.css(J.delta<=J.leftPosition?{transform:"translate3D("+J.contentWidth+"px,0,0)"}:{transform:"translate3D("+-J.contentWidth+"px,0,0)"})):J.$image.css({transform:"translate3D(0,0,0)"}),J.swipe&&J.$controls.filter(J.delta<=J.leftPosition?".previous":".next").trigger("click"),D(J.resetTimer,J.duration,function(){J.$boxer.removeClass("animated")}))}function B(a){var b=a[0],c=new Image;return"undefined"!=typeof b.naturalHeight?{naturalHeight:b.naturalHeight,naturalWidth:b.naturalWidth}:"img"===b.tagName.toLowerCase()?(c.src=b.src,{naturalHeight:c.height,naturalWidth:c.width}):!1}function C(a){a.preventDefault&&(a.stopPropagation(),a.preventDefault())}function D(a,b,c){return E(a),setTimeout(c,b)}function E(a){a&&(clearTimeout(a),a=null)}function F(){var a={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"},b=document.createElement("div");for(var c in a)if(a.hasOwnProperty(c)&&c in b.style)return a[c];return!1}var G,H,I=null,J={},K=/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(b.navigator.userAgent||b.navigator.vendor||b.opera),L={callback:a.noop,customClass:"",extensions:["jpg","sjpg","jpeg","png","gif"],fixed:!1,formatter:a.noop,labels:{close:"Close",count:"of",next:"Next",previous:"Previous"},margin:50,minHeight:100,minWidth:100,mobile:!1,opacity:.75,retina:!1,requestKey:"boxer",top:0,videoRatio:.5625,videoWidth:600},M={close:function(){"undefined"!=typeof J.$boxer&&(J.$boxer.off(".boxer"),J.$overlay.trigger("click"))},defaults:function(b){return L=a.extend(L,b||{}),"object"==typeof this?a(this):!1},destroy:function(){return a(this).off(".boxer")},resize:function(b){return"undefined"!=typeof J.$boxer&&("object"!=typeof b&&(J.targetHeight=arguments[0],J.targetWidth=arguments[1]),"element"===J.type?w(J.$content.find(">:first-child")):"image"===J.type?l():"video"===J.type&&o(),g()),a(this)}};a.fn.boxer=function(a){return M[a]?M[a].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof a&&a?this:c.apply(this,arguments)},a.boxer=function(c,e){return M[c]?M[c].apply(b,Array.prototype.slice.call(arguments,1)):c instanceof a?d.apply(b,[{data:a.extend({$object:c},L,e||{})}]):void 0}}(jQuery,window);


/****************** Query hashchange ***************/
/*
 * jQuery hashchange event, v1.4, 2013-11-29
 * https://github.com/georgekosmidis/jquery-hashchange
 */
(function(e,t,n){"$:nomunge";function f(e){e=e||location.href;return"#"+e.replace(/^[^#]*#?(.*)$/,"$1")}var r="hashchange",i=document,s,o=e.event.special,u=i.documentMode,a="on"+r in t&&(u===n||u>7);e.fn[r]=function(e){return e?this.bind(r,e):this.trigger(r)};e.fn[r].delay=50;o[r]=e.extend(o[r],{setup:function(){if(a){return false}e(s.start)},teardown:function(){if(a){return false}e(s.stop)}});s=function(){function p(){var n=f(),i=h(u);if(n!==u){c(u=n,i);e(t).trigger(r)}else if(i!==u){location.href=location.href.replace(/#.*/,"")+i}o=setTimeout(p,e.fn[r].delay)}var s={},o,u=f(),l=function(e){return e},c=l,h=l;s.start=function(){o||p()};s.stop=function(){o&&clearTimeout(o);o=n};var d=function(){var e,t=3,n=document.createElement("div"),r=n.getElementsByTagName("i");while(n.innerHTML="<!--[if gt IE "+ ++t+"]><i></i><![endif]-->",r[0]);return t>4?t:e}();d&&!a&&function(){var t,n;s.start=function(){if(!t){n=e.fn[r].src;n=n&&n+f();t=e('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){n||c(f());p()}).attr("src",n||"javascript:0").insertAfter("body")[0].contentWindow;i.onpropertychange=function(){try{if(event.propertyName==="title"){t.document.title=i.title}}catch(e){}}}};s.stop=l;h=function(){return f(t.location.href)};c=function(n,s){var o=t.document,u=e.fn[r].domain;if(n!==s){o.title=i.title;o.open();u&&o.write('<script>document.domain="'+u+'"</script>');o.close();t.location.hash=n}}}();return s}()})(jQuery,this)


/****************** Drop-Down Menus ***************/
/*
 * jQuery dropdown: A simple dropdown plugin
 *
 * Copyright A Beautiful Site, LLC. (http://www.abeautifulsite.net/)
 *
 * Licensed under the MIT license: http://opensource.org/licenses/MIT
 *
*/jQuery&&function(e){function t(t,i){var s=t?e(this):i,o=e(s.attr("data-dropdown")),u=s.hasClass("dropdown-open");if(t){if(e(t.target).hasClass("dropdown-ignore"))return;t.preventDefault();t.stopPropagation()}else if(s!==i.target&&e(i.target).hasClass("dropdown-ignore"))return;n();if(u||s.hasClass("dropdown-disabled"))return;s.addClass("dropdown-open");o.data("dropdown-trigger",s).show();r();o.trigger("show",{dropdown:o,trigger:s})}function n(t){var n=t?e(t.target).parents().addBack():null;if(n&&n.is(".dropdown")){if(!n.is(".dropdown-menu"))return;if(!n.is("A"))return}e(document).find(".dropdown:visible").each(function(){var t=e(this);t.hide().removeData("dropdown-trigger").trigger("hide",{dropdown:t})});e(document).find(".dropdown-open").removeClass("dropdown-open")}function r(){var t=e(".dropdown:visible").eq(0),n=t.data("dropdown-trigger"),r=n?parseInt(n.attr("data-horizontal-offset")||0,10):null,i=n?parseInt(n.attr("data-vertical-offset")||0,10):null;if(t.length===0||!n)return;t.hasClass("dropdown-relative")?t.css({left:t.hasClass("dropdown-anchor-right")?n.position().left-(t.outerWidth(!0)-n.outerWidth(!0))-parseInt(n.css("margin-right"),10)+r:n.position().left+parseInt(n.css("margin-left"),10)+r,top:n.position().top+n.outerHeight(!0)-parseInt(n.css("margin-top"),10)+i}):t.css({left:t.hasClass("dropdown-anchor-right")?n.offset().left-(t.outerWidth()-n.outerWidth())+r:n.offset().left+r,top:n.offset().top+n.outerHeight()+i})}e.extend(e.fn,{dropdown:function(r,i){switch(r){case"show":t(null,e(this));return e(this);case"hide":n();return e(this);case"attach":return e(this).attr("data-dropdown",i);case"detach":n();return e(this).removeAttr("data-dropdown");case"disable":return e(this).addClass("dropdown-disabled");case"enable":n();return e(this).removeClass("dropdown-disabled")}}});e(document).on("click.dropdown","[data-dropdown]",t);e(document).on("click.dropdown",n);e(window).on("resize",r)}(jQuery);



/****************** Main Header Display ***************/
(function($){$.fn.inlinebackgrounds = function() {$.each(this, function(i,t) {var split = $(t).html().split(' ');var output = '';$.each(split, function(i,o){output += '<span>'+o+'</span>';if (i < (split.length - 1)) {output += '';}});$(t).html(output);});}})(jQuery);



/****************** Google Translate ***************/
//function doTranslate(){document.getElementById("google_translate_element").innerHTML="Please wait";var e=document.createElement("script");_gaq.push(['_trackPageview', '/translate/' + location.pathname]);e.type="text/javascript";e.src="http://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";document.body.appendChild(e)}function googleTranslateElementInit(){document.getElementById("google_translate_element").innerHTML="";new google.translate.TranslateElement({pageLanguage:"en"},"google_translate_element")}$(function(){$(":input[title]").each(function(){var e=$(this);if(e.val()===""){e.val(e.attr("title"))}e.focus(function(){if(e.val()===e.attr("title")){e.val("")}});e.blur(function(){if(e.val()===""){e.val(e.attr("title"))}})})});




/****************** Scroll Depth ***************/
/*!
 * @preserve
 * jquery.scrolldepth.js | v0.4.1
 * Copyright (c) 2014 Rob Flaherty (@robflaherty)
 * Licensed under the MIT and GPL licenses.
 */
!function(a,b,c){"use strict";var e={elements:[],minHeight:0,percentage:!0,testing:!1},f=a(b),g=[];a.scrollDepth=function(d){function i(b,c,e){d.testing?a("#console").html(b+": "+c):"undefined"!=typeof dataLayer&&"function"==typeof dataLayer.push?(dataLayer.push({event:"ScrollDistance",eventCategory:"Scroll Depth",eventAction:b,eventLabel:c,eventValue:1,eventNonInteraction:!0}),arguments.length>2&&dataLayer.push({event:"ScrollTiming",eventCategory:"Scroll Depth",eventAction:b,eventLabel:c,eventTiming:e})):("function"==typeof ga&&(ga("send","event","Scroll Depth",b,c,1,{nonInteraction:1}),arguments.length>2&&ga("send","timing","Scroll Depth",b,e,c)),"undefined"!=typeof _gaq&&"function"==typeof _gaq.push&&(_gaq.push(["_trackEvent","Scroll Depth",b,c,1,!0]),arguments.length>2&&_gaq.push(["_trackTiming","Scroll Depth",b,e,c,100])))}function j(a){return{"25%":parseInt(.25*a,10),"50%":parseInt(.5*a,10),"75%":parseInt(.75*a,10),"100%":a-1}}function k(b,c,d){a.each(b,function(b,e){-1===a.inArray(b,g)&&c>=e&&(i("Percentage",b,d),g.push(b))})}function l(b,c,d){a.each(b,function(b,e){-1===a.inArray(e,g)&&a(e).length&&c>=a(e).offset().top&&(i("Elements",e,d),g.push(e))})}function m(a,b){var c,d,e,f=null,g=0,h=function(){g=new Date,f=null,e=a.apply(c,d)};return function(){var i=new Date;g||(g=i);var j=b-(i-g);return c=this,d=arguments,0>=j?(clearTimeout(f),f=null,g=i,e=a.apply(c,d)):f||(f=setTimeout(h,j)),e}}var h=+new Date;d=a.extend({},e,d),a(c).height()<d.minHeight||(i("Percentage","Baseline"),f.on("scroll.scrollDepth",m(function(){var e=a(c).height(),i=b.innerHeight?b.innerHeight:f.height(),m=f.scrollTop()+i,n=j(e),o=+new Date-h;return g.length>=4+d.elements.length?(f.off("scroll.scrollDepth"),void 0):(d.elements&&l(d.elements,m,o),d.percentage&&k(n,m,o),void 0)},500)))}}(jQuery,window,document);



/****************** responsive tabs ***************/
/* 
 * Scroller v3.1.2 - 2014-12-08 
 * A jQuery plugin for replacing default browser scrollbars. Part of the Formstone Library. 
 * http://formstone.it/scroller/ 
 * 
 * Copyright 2014 Ben Plum; MIT Licensed 
 * EDIT: width:b.handleWidth-40 changed to adjust for scrollerbar padding
 * to avoid android scrolling issues with using margin
 */
!function(a,b){"use strict";function c(b){b=a.extend({},q,b||{}),null===n&&(n=a("body"));for(var c=a(this),e=0,f=c.length;f>e;e++)d(c.eq(e),b);return c}function d(c,d){if(!c.hasClass(o.base)){d=a.extend({},d,c.data(m+"-options"));var h="";h+='<div class="'+o.bar+'">',h+='<div class="'+o.track+'">',h+='<div class="'+o.handle+'">',h+="</div></div></div>",d.paddingRight=parseInt(c.css("padding-right"),10),d.paddingBottom=parseInt(c.css("padding-bottom"),10),c.addClass([o.base,d.customClass].join(" ")).wrapInner('<div class="'+o.content+'" />').prepend(h),d.horizontal&&c.addClass(o.isHorizontal);var i=a.extend({$scroller:c,$content:c.find(l(o.content)),$bar:c.find(l(o.bar)),$track:c.find(l(o.track)),$handle:c.find(l(o.handle))},d);i.trackMargin=parseInt(i.trackMargin,10),i.$content.on("scroll."+m,i,e),i.$scroller.on(p.start,l(o.track),i,f).on(p.start,l(o.handle),i,g).data(m,i),r.reset.apply(c),a(b).one("load",function(){r.reset.apply(c)})}}function e(a){a.preventDefault(),a.stopPropagation();var b=a.data,c={};if(b.horizontal){var d=b.$content.scrollLeft();0>d&&(d=0);var e=d/b.scrollRatio;e>b.handleBounds.right&&(e=b.handleBounds.right),c={left:e}}else{var f=b.$content.scrollTop();0>f&&(f=0);var g=f/b.scrollRatio;g>b.handleBounds.bottom&&(g=b.handleBounds.bottom),c={top:g}}b.$handle.css(c)}function f(a){a.preventDefault(),a.stopPropagation();var b=a.data,c=a.originalEvent,d=b.$track.offset(),e="undefined"!=typeof c.targetTouches?c.targetTouches[0]:null,f=e?e.pageX:a.clientX,g=e?e.pageY:a.clientY;b.horizontal?(b.mouseStart=f,b.handleLeft=f-d.left-b.handleWidth/2,k(b,b.handleLeft)):(b.mouseStart=g,b.handleTop=g-d.top-b.handleHeight/2,k(b,b.handleTop)),h(b)}function g(a){a.preventDefault(),a.stopPropagation();var b=a.data,c=a.originalEvent,d="undefined"!=typeof c.targetTouches?c.targetTouches[0]:null,e=d?d.pageX:a.clientX,f=d?d.pageY:a.clientY;b.horizontal?(b.mouseStart=e,b.handleLeft=parseInt(b.$handle.css("left"),10)):(b.mouseStart=f,b.handleTop=parseInt(b.$handle.css("top"),10)),h(b)}function h(a){a.$content.off(l(m)),n.on(p.move,a,i).on(p.end,a,j)}function i(a){a.preventDefault(),a.stopPropagation();var b=a.data,c=a.originalEvent,d=0,e=0,f="undefined"!=typeof c.targetTouches?c.targetTouches[0]:null,g=f?f.pageX:a.clientX,h=f?f.pageY:a.clientY;b.horizontal?(e=b.mouseStart-g,d=b.handleLeft-e):(e=b.mouseStart-h,d=b.handleTop-e),k(b,d)}function j(a){a.preventDefault(),a.stopPropagation();var b=a.data;b.$content.on("scroll.scroller",b,e),n.off(".scroller")}function k(a,b){var c={};if(a.horizontal){b<a.handleBounds.left&&(b=a.handleBounds.left),b>a.handleBounds.right&&(b=a.handleBounds.right);var d=Math.round(b*a.scrollRatio);c={left:b},a.$content.scrollLeft(d)}else{b<a.handleBounds.top&&(b=a.handleBounds.top),b>a.handleBounds.bottom&&(b=a.handleBounds.bottom);var e=Math.round(b*a.scrollRatio);c={top:b},a.$content.scrollTop(e)}a.$handle.css(c)}function l(a){return"."+a}var m="scroller",n=null,o={base:"scroller",content:"scroller-content",bar:"scroller-bar",track:"scroller-track",handle:"scroller-handle",isHorizontal:"scroller-horizontal",isSetup:"scroller-setup",isActive:"scroller-active"},p={start:"touchstart."+m+" mousedown."+m,move:"touchmove."+m+" mousemove."+m,end:"touchend."+m+" mouseup."+m},q={customClass:"",duration:0,handleSize:0,horizontal:!1,trackMargin:0},r={defaults:function(b){return q=a.extend(q,b||{}),"object"==typeof this?a(this):!0},destroy:function(){return a(this).each(function(b,c){var d=a(c).data(m);d&&(d.$scroller.removeClass([d.customClass,o.base,o.isActive].join(" ")),d.$bar.remove(),d.$content.contents().unwrap(),d.$content.off(l(m)),d.$scroller.off(l(m)).removeData(m))})},scroll:function(b,c){return a(this).each(function(){var d=a(this).data(m),e=c||q.duration;if("number"!=typeof b){var f=a(b);if(f.length>0){var g=f.position();b=d.horizontal?g.left+d.$content.scrollLeft():g.top+d.$content.scrollTop()}else b=d.$content.scrollTop()}var h=d.horizontal?{scrollLeft:b}:{scrollTop:b};d.$content.stop().animate(h,e)})},reset:function(){return a(this).each(function(){var b=a(this).data(m);if(b){b.$scroller.addClass(o.isSetup);var c={},d={},e={},f=0,g=!0;if(b.horizontal){b.barHeight=b.$content[0].offsetHeight-b.$content[0].clientHeight,b.frameWidth=b.$content.outerWidth(),b.trackWidth=b.frameWidth-2*b.trackMargin,b.scrollWidth=b.$content[0].scrollWidth,b.ratio=b.trackWidth/b.scrollWidth,b.trackRatio=b.trackWidth/b.scrollWidth,b.handleWidth=b.handleSize>0?b.handleSize:b.trackWidth*b.trackRatio,b.scrollRatio=(b.scrollWidth-b.frameWidth)/(b.trackWidth-b.handleWidth),b.handleBounds={left:0,right:b.trackWidth-b.handleWidth},b.$content.css({paddingBottom:b.barHeight+b.paddingBottom});var h=b.$content.scrollLeft();f=h*b.ratio,g=b.scrollWidth<=b.frameWidth,c={width:b.frameWidth},d={width:b.trackWidth,marginLeft:b.trackMargin,marginRight:b.trackMargin},e={width:b.handleWidth-40}}else{b.barWidth=b.$content[0].offsetWidth-b.$content[0].clientWidth,b.frameHeight=b.$content.outerHeight(),b.trackHeight=b.frameHeight-2*b.trackMargin,b.scrollHeight=b.$content[0].scrollHeight,b.ratio=b.trackHeight/b.scrollHeight,b.trackRatio=b.trackHeight/b.scrollHeight,b.handleHeight=b.handleSize>0?b.handleSize:b.trackHeight*b.trackRatio,b.scrollRatio=(b.scrollHeight-b.frameHeight)/(b.trackHeight-b.handleHeight),b.handleBounds={top:0,bottom:b.trackHeight-b.handleHeight};var i=b.$content.scrollTop();f=i*b.ratio,g=b.scrollHeight<=b.frameHeight,c={height:b.frameHeight},d={height:b.trackHeight,marginBottom:b.trackMargin,marginTop:b.trackMargin},e={height:b.handleHeight}}g?b.$scroller.removeClass(o.isActive):b.$scroller.addClass(o.isActive),b.$bar.css(c),b.$track.css(d),b.$handle.css(e),k(b,f),b.$scroller.removeClass(o.isSetup)}})}};a.fn[m]=function(a){return r[a]?r[a].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof a&&a?this:c.apply(this,arguments)},a[m]=function(a){"defaults"===a&&r.defaults.apply(this,Array.prototype.slice.call(arguments,1))}}(jQuery);




/****************** responsive tables ***************/
jQuery('table.table-responsive').each(function() {
    var thetable=jQuery(this);
    jQuery(this).find('tbody td').each(function() {
        jQuery(this).attr('data-heading',thetable.find('thead th:nth-child('+(jQuery(this).index()+1)+')').text());
    });
});


/*
 *  SimpleBar.js - v1.1.9
 *  Scrollbars, simpler.
 *  https://grsmto.github.io/simplebar/
 *
 *  Made by Adrien Grsmto from a fork by Jonathan Nicol
 *  Under MIT License
 */
!function(a){"object"==typeof module&&"object"==typeof module.exports?a(require("jquery"),window,document):a(window.jQuery,window,document)}(function(a,b,c,d){function e(){var b=a('<div class="scrollbar-width-tester" style="width:50px;height:50px;overflow-y:scroll;top:-200px;left:-200px;"><div style="height:100px;"></div>'),c=0,d=0;return a("body").append(b),c=a(b).innerWidth(),d=a("div",b).innerWidth(),b.remove(),c-d}function f(b,c){this.el=b,this.$el=a(b),this.$track,this.$scrollbar,this.dragOffset,this.flashTimeout,this.$contentEl=this.$el,this.$scrollContentEl=this.$el,this.scrollDirection="vert",this.scrollOffsetAttr="scrollTop",this.sizeAttr="height",this.scrollSizeAttr="scrollHeight",this.offsetAttr="top",this.options=a.extend({},f.DEFAULTS,c),this.theme=this.options.css,this.init()}var g,h="WebkitAppearance"in c.documentElement.style;f.DEFAULTS={wrapContent:!0,autoHide:!0,css:{container:"simplebar",content:"simplebar-content",scrollContent:"simplebar-scroll-content",scrollbar:"simplebar-scrollbar",scrollbarTrack:"simplebar-track"}},f.prototype.init=function(){return"undefined"==typeof g&&(g=e()),0===g?(this.$el.css("overflow","auto"),void 0):(("horizontal"===this.$el.data("simplebar-direction")||this.$el.hasClass(this.theme.container+" horizontal"))&&(this.scrollDirection="horiz",this.scrollOffsetAttr="scrollLeft",this.sizeAttr="width",this.scrollSizeAttr="scrollWidth",this.offsetAttr="left"),this.options.wrapContent&&this.$el.wrapInner('<div class="'+this.theme.scrollContent+'"><div class="'+this.theme.content+'"></div></div>'),this.$contentEl=this.$el.find("."+this.theme.content),this.$el.prepend('<div class="'+this.theme.scrollbarTrack+'"><div class="'+this.theme.scrollbar+'"></div></div>'),this.$track=this.$el.find("."+this.theme.scrollbarTrack),this.$scrollbar=this.$el.find("."+this.theme.scrollbar),this.$scrollContentEl=this.$el.find("."+this.theme.scrollContent),this.resizeScrollContent(),this.options.autoHide&&this.$el.on("mouseenter",a.proxy(this.flashScrollbar,this)),this.$scrollbar.on("mousedown",a.proxy(this.startDrag,this)),this.$scrollContentEl.on("scroll",a.proxy(this.startScroll,this)),this.resizeScrollbar(),this.options.autoHide||this.showScrollbar(),void 0)},f.prototype.startDrag=function(b){b.preventDefault();var d=b.pageY;"horiz"===this.scrollDirection&&(d=b.pageX),this.dragOffset=d-this.$scrollbar.offset()[this.offsetAttr],a(c).on("mousemove",a.proxy(this.drag,this)),a(c).on("mouseup",a.proxy(this.endDrag,this))},f.prototype.drag=function(a){a.preventDefault();var b=a.pageY,c=null,d=null,e=null;"horiz"===this.scrollDirection&&(b=a.pageX),c=b-this.$track.offset()[this.offsetAttr]-this.dragOffset,d=c/this.$track[this.sizeAttr](),e=d*this.$contentEl[0][this.scrollSizeAttr],this.$scrollContentEl[this.scrollOffsetAttr](e)},f.prototype.endDrag=function(){a(c).off("mousemove",this.drag),a(c).off("mouseup",this.endDrag)},f.prototype.resizeScrollbar=function(){if(0!==g){var a=this.$contentEl[0][this.scrollSizeAttr],b=this.$scrollContentEl[this.scrollOffsetAttr](),c=this.$track[this.sizeAttr](),d=c/a,e=Math.round(d*b)+2,f=Math.floor(d*(c-2))-2;a>c?("vert"===this.scrollDirection?this.$scrollbar.css({top:e,height:f}):this.$scrollbar.css({left:e,width:f}),this.$track.show()):this.$track.hide()}},f.prototype.startScroll=function(a){this.$el.trigger(a),this.flashScrollbar()},f.prototype.flashScrollbar=function(){this.resizeScrollbar(),this.showScrollbar()},f.prototype.showScrollbar=function(){this.$scrollbar.addClass("visible"),this.options.autoHide&&("number"==typeof this.flashTimeout&&b.clearTimeout(this.flashTimeout),this.flashTimeout=b.setTimeout(a.proxy(this.hideScrollbar,this),1e3))},f.prototype.hideScrollbar=function(){this.$scrollbar.removeClass("visible"),"number"==typeof this.flashTimeout&&b.clearTimeout(this.flashTimeout)},f.prototype.resizeScrollContent=function(){h||("vert"===this.scrollDirection?(this.$scrollContentEl.width(this.$el.width()+g),this.$scrollContentEl.height(this.$el.height())):(this.$scrollContentEl.width(this.$el.width()),this.$scrollContentEl.height(this.$el.height()+g)))},f.prototype.recalculate=function(){this.resizeScrollContent(),this.resizeScrollbar()},f.prototype.getScrollElement=function(){return this.$scrollContentEl},f.prototype.getContentElement=function(){return this.$contentEl},a(b).on("load",function(){a("[data-simplebar-direction]").each(function(){a(this).simplebar()})});var i=a.fn.simplebar;a.fn.simplebar=function(b){var c,e=arguments;return"undefined"==typeof b||"object"==typeof b?this.each(function(){a.data(this,"simplebar")||a.data(this,"simplebar",new f(this,b))}):"string"==typeof b?(this.each(function(){var d=a.data(this,"simplebar");d instanceof f&&"function"==typeof d[b]&&(c=d[b].apply(d,Array.prototype.slice.call(e,1))),"destroy"===b&&a.data(this,"simplebar",null)}),c!==d?c:this):void 0},a.fn.simplebar.Constructor=f,a.fn.simplebar.noConflict=function(){return a.fn.simplebar=i,this}});

jQuery(document).ready(function($){


    if (typeof _gaq === 'object') {
      
      // listen to clicks
      $('a[href]').click(function(){
        if (this.href.indexOf('mailto:') === 0) {
//_gaq.push(['_trackPageview', '/mailtos/' + $(this).attr("href")]);
_gaq.push(['_trackEvent', 'mailto', 'click', $(this).attr('href')]);
        }
        else if (this.href.match(/\.(pdf|doc|zip|ppt|jpg|gif|exe|xls|docx)$/)) {
//_gaq.push(['_trackPageview', '/downloads/' + $(this).attr("href")]);
_gaq.push(['_trackEvent', 'downloads', 'click', $(this).attr('href')]);
        }
        else if (this.href.match(/\.(pdf)/)) {
//_gaq.push(['_trackPageview', '/downloads/' + $(this).attr("href")]);
_gaq.push(['_trackEvent', 'downloads', 'click', $(this).attr('href')]);
        }
        else if (!this.href.match(document.domain)) {
//_gaq.push(['_trackPageview', '/external/' + $(this).attr("href")]);
_gaq.push(['_trackEvent', 'external', 'click', $(this).attr('href')]);
        }
      });

		$('#nav-wrap a').mousedown(function(e){
_gaq.push(['_trackEvent', 'Top-Menu', 'click', $(this).attr('href')]);
		});
		$('#utility-nav a').mousedown(function(e){
_gaq.push(['_trackEvent', 'Utility-Menu', 'click', $(this).attr('href')]);
		});
		$('#side-menu li a').mousedown(function(e){
_gaq.push(['_trackEvent', 'Side-Menu', 'click', $(this).attr('href')]);
		});
		$('#section-footer a').mousedown(function(e){
_gaq.push(['_trackEvent', 'Footer', 'click', $(this).attr('href')]);
		});

		$('#banner h1 a').mousedown(function(e){
_gaq.push(['_trackEvent', 'Logo', 'click', $(this).attr('href')]);
		});
		$('*[data-dropdown="#dropdown-system-office"]').click(function(){
_gaq.push(['_trackEvent', 'Utility-Menu-Utilities', 'click', 'system office dropdown']);
		});

		$('*[data-dropdown="#dropdown-online-tools"]').click(function(){
_gaq.push(['_trackEvent', 'Utility-Menu-Utilities', 'click', 'system online tools']);
		});

		$('.dropdown a').mousedown(function(e){
_gaq.push(['_trackEvent', 'Drop-Down', 'click', $(this).attr('href')]);
		});

		$('.hero-text a').click(function(){
_gaq.push(['_trackEvent', 'Hero', 'click', $(this).attr('href')]);
		});

		$('.bread a').mousedown(function(e){
_gaq.push(['_trackEvent', 'Breadcrumb', 'click', $(this).attr('href')]);
		});
		
		$('#homepage-bar-links a').mousedown(function(e){
_gaq.push(['_trackEvent', 'Homepage-Utility-Bar', 'click', $(this).attr('href')]);
		});	
		
		$('#bottom-bar-links ul li a').mousedown(function(e){
_gaq.push(['_trackEvent', 'Bottom-Bar-Link', 'click', $(this).attr('href')]);
		});			

		
		$('ul.nav-filter li a').mousedown(function(e){
_gaq.push(['_trackEvent', 'Nav-Filter', 'click', $(this).attr('href')]);
		});	
		
		
		$('#header-image-content a').mousedown(function(e){
_gaq.push(['_trackEvent', 'Homepage-Spotlight', 'click', $(this).attr('href')]);
		});	
		
		
		$('#bar-links a').mousedown(function(e){
_gaq.push(['_trackEvent', 'Homepage-Spotlight', 'click', $(this).attr('href')]);
		});	
		
		$('input[type=text]').focus(function(){
_gaq.push(['_trackEvent', 'input', 'click', window.location.pathname]);
		});
		
		$('#nav-button').mousedown(function(e){
_gaq.push(['_trackEvent', 'Mobile-Menu-Icon', 'click', $(this).attr('href')]);
		});	
	
		
    }



/****************** Track Hash Clicks ***************/

$('.tabs li a').mousedown(function(){
    _gaq.push(['_trackEvent', 'tabs', 'click', location.pathname + location.search  + $(this).attr('href')]);
});	

$(window).hashchange( function(){
	//console.log(location.hash);
    _gaq.push(['_trackPageview',location.pathname + location.search  + location.hash]);
})





/****************** Responsive Navigation ***************/
if ($(window).width() > 990) {
	var $header = $("#banner nav"),
  $clone = $header.before($header.clone().addClass("clone"));

	$(window).on("scroll", function() {
	  var fromTop = $("body").scrollTop();
	  $('body').toggleClass("down", (fromTop > 300));
	});

	$("#nav-wrap > li").mouseover(function () {
		//$("#banner").addClass('menu-visible');
	 });
	 $("#nav-wrap > li").mouseout(function () {
		//$("#banner").removeClass('menu-visible');
	 });

 	//parallax function
	//$(window).scroll(function() {
		//var scrolledY = $(window).scrollTop();
		//$('#header-image-small').css('background-position', 'left ' + ((scrolledY)) + 'px');
		//$('#header-image').css('background-position', 'left ' + ((scrolledY)) + 'px');
	//});
}

if ($(window).width() < 989) {
	var $banner = $("#banner #banner-wrap"),
  $cloneBanner = $banner.before($banner.clone().addClass("clone"));
	$(window).on("scroll", function() {
	  var fromTop = $("body").scrollTop();
	  $('body').toggleClass("down", (fromTop > 300));
	});


}

/****************** redirect window to top on tab link clicks ***************/
if ($(window).width() > 800) {
  var offsettop = 150;}
else {
  var offsettop = 150;}


if( $('#tab-container').length )
{
	var tabs_offset = $("#tab-container").offset().top;
	$(".tab-click").click(function() {
		$('html, body').animate({
			scrollTop: $("#tab-container").offset().top - offsettop
		}, 800);
		//return false;
	});

	$(window).load(function() {
		if(window.location.hash) {
		$('html, body').delay(800).animate({
			scrollTop: $("#tab-container").offset().top - offsettop
		}, 800);
		}
	});
}

$(this).scrollTop(0);


/****************** Scroll to Hash ***************/
var hashTagActive = "";
$(".scrollto").click(function (event) {
	event.preventDefault();
	var dest = 0;
	if ($(this.hash).offset().top > $(document).height() -
$(window).height()) {
		dest = $(document).height() - $(window).height();
	} else {
		dest = $(this.hash).offset().top;
	}
	$('html,body').animate({
		scrollTop: dest
	}, 1000, 'swing');
	hashTagActive = this.hash;
//}
});



/****************** Scroll Depth ***************/
$.scrollDepth();



/****************** Responsive Navigation ***************/


$(".nav-button").on("click",function(event){
	$(".nav-main").toggleClass("active");
	$(".nav-button").toggleClass("active"); 
	$("#body-wrapper").toggleClass("active");  
	$("footer").toggleClass("active"); 
	$("body").removeClass("boxer-open");  
	event.stopPropagation();

	$(document).on('click', function(e){
        if($('.nav-main').has(e.target).length === 0){
            $('.nav-main').removeClass('active');
            $('.nav-button').removeClass('active');
						$("#body-wrapper").removeClass("active"); 
						$("footer").removeClass("active");  
        }
	})
});

if($(window).width() < 990){



	//$(window).load(function() {
		$('#nav-wrap > li:has(.mega-dropdown) > a:first-child').append("<i class='fa fa-fw fa-angle-down color-red'></i>");
	//});

	$('#nav-wrap > li:has(.mega-dropdown) > a:first-child').click(function(e) {
        e.preventDefault();
		$(this).parent('li').toggleClass("active");
		$(this).parent('li').find('.mega-dropdown').addClass('active').slideToggle(500).css({'display':'flex'});
    });
  
	$('.mega-dropdown li a').click(function(e) {
    $('.nav-main').removeClass('active');
    $('#nav-button').removeClass('active');
		$("#body-wrapper").removeClass("active"); 
		$("footer").removeClass("active"); 
    });
    
  //change dropdown boxes to lightboxes for mobile users
  $("#nav-utility > li > a[data-dropdown]").each(function() {
		$(this).addClass('boxer');
		var linkattr = $(this).attr('data-dropdown');
		$(this).attr("href", linkattr)
		$(this).removeAttr('data-dropdown');
		});
	$('#dropdown-system-office').wrapInner("<div class='inline-content'></div>");
	
};


$(document).on('click', function(event) {
	if (!$(event.target).closest('#nav-wrap').length) {
	}
});



/****************** Activate Tabs ***************/
$('#tab-container').easytabs({
	tabs: 'ul.tabs > li'
});

$('#tab-container-sub').easytabs();




//$(document).ready(HasScrollBar);
//$(window).on('resize',HasScrollBar);

function HasScrollBar () {
    //note: clientHeight= height of holder
    //scrollHeight= we have content till this height
    
    //check if tabs exist, add scrollbar if smaller than window width
    if ( $("ul.tabs").length ) {
	    var _elm = $("ul.tabs")[0];
	    var _hasScrollBar = false; 
	    if ((_elm.clientWidth < _elm.scrollWidth)) {
	        _hasScrollBar = true;
					$("ul.tabs").css({'overflow-x':'auto','box-shadow':'0 8px 8px -8px #b1b1b1 inset, 0 -8px 8px -8px #b1b1b1 inset','border-bottom':'0','min-height':'0','background':'#FBFBFB'});
					//$("ul.tabs li .active::after").css({'top':'5px'});
	    }
	    else {
					$("ul.tabs").css({'overflow-x':'visible','box-shadow':'none','border-bottom':'3px solid #EAEAEA','min-height':'0'});
					$("ul.tabs li .active::after").css({'top':'15px'});
					$("ul.tabs li").addClass
					$("ul.tabs li a").css({'padding':'15px'});
	    }
	    return _hasScrollBar;
	  }
}





/****************** Activate boxer ***************/
$(".boxer").boxer({
	callback: function($target) {
	$(".icon-search").focus();
	}
	//, mobile:true
});



/****************** show/hide toggle ***************/
var $content = $(".content").hide();
$(".toggle").on("click", function (e) {
	$(this).toggleClass("expanded");
	$(this).next().slideToggle();
});



});