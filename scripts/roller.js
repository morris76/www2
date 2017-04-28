/* 
 * Roller v3.2.8 - 2015-01-23 
 * A jQuery plugin for simple content carousels. Part of the Formstone Library. 
 * http://formstone.it/roller/ 
 * 
 * Copyright 2015 Ben Plum; MIT Licensed 
 */

!function(a,b){"use strict";function c(b){b=a.extend({},t,b);for(var c=a(this),e=0,f=c.length;f>e;e++)d(c.eq(e),b);return c}function d(c,d){if(!c.data("roller")){d=a.extend({},d,c.data("roller-options")),d.useMargin||s()||(d.useMargin=!0),d.single||(c.find(".roller-viewport").length||(c.wrapInner('<div class="roller-viewport"></div>'),d.viewport=!0),c.find(".roller-canister").length||(c.find(".roller-viewport").wrapInner('<div class="roller-canister"></div>'),d.canister=!0));var f="";d.controls&&!c.find(".roller-controls").length&&(f+='<div class="roller-controls">',f+='<span class="roller-control previous">'+d.labels.previous+"</span>",f+='<span class="roller-control next">'+d.labels.next+"</span>",f+="</div>"),d.pagination&&!c.find(".roller-pagination").length&&(f+='<div class="roller-pagination">',f+="</div>"),c.addClass("roller "+(d.single?"single ":"")+d.customClass).append(f);var g=a.extend({},{$roller:c,$viewport:c.find(".roller-viewport").eq(0),$canister:c.find(".roller-canister").eq(0),$captions:c.find(".roller-captions").eq(0),$controls:c.find(".roller-controls").eq(0),$pagination:c.find(".roller-pagination").eq(0),index:0,deltaX:null,deltaY:null,leftPosition:0,xStart:0,yStart:0,enabled:!1,touchstart:0,touchEnd:0,touchTimer:null,hasTouched:!1},d);if(g.$items=g.single?g.$roller.find(".roller-item"):g.$canister.find(".roller-item").not(".roller-item .roller-item"),g.$captionItems=g.$captions.find(".roller-caption"),g.$controlItems=g.$controls.find(".roller-control"),g.$paginationItems=g.$pagination.find(".roller-page"),g.$images=g.$canister.find("img"),g.totalImages=g.$images.length,c.data("roller",g),void 0!==b.matchMedia&&(g.maxWidth=1/0===g.maxWidth?"100000px":g.maxWidth,g.mediaQuery=b.matchMedia("(min-width:"+g.minWidth+") and (max-width:"+g.maxWidth+")"),g.mediaQuery.addListener(function(){n.apply(g.$roller)}),n.apply(g.$roller)),g.totalImages>0){g.loadedImages=0;for(var h=0;h<g.totalImages;h++){var j=g.$images.eq(h);j.one("load.roller",g,e),(j[0].complete||j[0].height)&&j.trigger("load.roller")}}(g.autoAdvance||g.auto)&&(g.autoTimer=q(g.autoTimer,g.autoTime,function(){i(g)},!0))}}function e(a){var b=a.data;b.loadedImages++,b.loadedImages===b.totalImages&&u.resize.apply(b.$roller)}function f(a){a.stopPropagation();var b=a.data;r(b.autoTimer),b.touchStart=(new Date).getTime(),b.$canister.css(p("transition","none"));var c="undefined"!=typeof a.originalEvent.targetTouches?a.originalEvent.targetTouches[0]:null;b.xStart=c?c.pageX:a.clientX,b.yStart=c?c.pageY:a.clientY,b.$canister.on("touchmove.roller",b,g).one("touchend.roller touchcancel.roller",b,h)}function g(a){a.stopPropagation();var b=a.data,c="undefined"!=typeof a.originalEvent.targetTouches?a.originalEvent.targetTouches[0]:null;b.deltaX=b.xStart-(c?c.pageX:a.clientX),b.deltaY=b.yStart-(c?c.pageY:a.clientY),(b.deltaX<-10||b.deltaX>10)&&a.preventDefault(),b.touchLeft=b.leftPosition-b.deltaX,b.touchLeft>0&&(b.touchLeft=0),b.touchLeft<b.maxMove&&(b.touchLeft=b.maxMove),b.$canister.css(b.useMargin?{marginLeft:b.touchLeft}:p("transform","translate3d("+b.touchLeft+"px, 0, 0)"))}function h(a){var b=a.data;b.touchEnd=(new Date).getTime(),b.leftPosition=b.touchLeft,b.$canister.css(p("transition","")),b.$canister.off("touchmove.roller touchend.roller touchcancel.roller");var c=b.deltaX>-10&&b.deltaX<10?b.index:o(b);b.touchPaged&&!b.swipe?l(b,c):(b.index=c,m(b)),b.deltaX=null,b.touchStart=0,b.touchEnd=0}function i(a){var b=a.index+1;b>a.pageCount&&(b=0),l(a,b)}function j(b){b.preventDefault(),b.stopPropagation();var c=b.data,d=c.index+(a(b.currentTarget).hasClass("next")?1:-1);c.hasTouched||(r(c.autoTimer),l(c,d)),"touchstart"===b.type&&(c.hasTouched=!0,c.touchTimer=q(c.touchTimer,500,function(){c.hasTouched=!1}))}function k(b){b.preventDefault(),b.stopPropagation();var c=b.data,d=c.$paginationItems.index(a(b.currentTarget));r(c.autoTimer),l(c,d)}function l(a,b,c){isNaN(b)&&(b=0),0>b&&(b=a.infinite?a.pageCount:0),b>a.pageCount&&(b=a.infinite?0:a.pageCount),a.single?a.$items.removeClass("active").eq(b).addClass("active"):(a.paged?a.items[b]&&(a.leftPosition=-a.items[b].position.left):a.pages[b]&&(a.leftPosition=-a.pages[b].left+a.extraMargin),a.leftPosition<a.maxMove&&(a.leftPosition=a.maxMove),a.leftPosition>0&&(a.leftPosition=0),isNaN(a.leftPosition)&&(a.leftPosition=0),a.useMargin?a.$canister.css({marginLeft:a.leftPosition}):c===!1?(a.$canister.css(p("transition","none")).css(p("transform","translate3d("+a.leftPosition+"px, 0, 0)")),a.resizeTimer=q(a.resizeTimer,5,function(){a.$canister.css(p("transition",""))},!1)):a.$canister.css(p("transform","translate3d("+a.leftPosition+"px, 0, 0)")),a.$items.removeClass("visible first"),a.paged?a.$items.eq(b).addClass("visible"):a.pages[b].$items.addClass("visible"),a.$items.filter(".visible").eq(0).addClass("first")),c!==!1&&b!==a.index&&(a.infinite||b>-1&&b<=a.pageCount)&&a.$roller.trigger("update.roller",[b]),a.index=b,m(a)}function m(a){a.$captionItems.filter(".active").removeClass("active"),a.$captionItems.eq(a.index).addClass("active"),a.$paginationItems.filter(".active").removeClass("active"),a.$paginationItems.eq(a.index).addClass("active"),a.infinite?a.$controlItems.addClass("enabled"):a.pageCount<1?a.$controlItems.removeClass("enabled"):(a.$controlItems.addClass("enabled"),a.index<=0?a.$controlItems.filter(".previous").removeClass("enabled"):(a.index>=a.pageCount||a.leftPosition===a.maxMove)&&a.$controlItems.filter(".next").removeClass("enabled"))}function n(){var b=a(this).data("roller");b.mediaQuery.matches?u.enable.apply(b.$roller):u.disable.apply(b.$roller)}function o(a){var b=0,c=0;if(a.single)return a.index;if((a.deltaX>20||a.deltaX<-20)&&a.touchStart&&a.touchEnd&&a.touchEnd-a.touchStart<200)return a.index+(a.deltaX>0?1:-1);if(a.paged){var d=1/0;if(a.leftPosition===a.maxMove)return a.items.length-1;var e,f,g;for(b=0;b<a.items.length;b++)e=a.items[b].$item,f=e.position(),g=f.left+a.leftPosition,0>g&&(g=-g),d>g&&(d=g,c=b);return c}if(0===a.leftPosition)return 0;var h;for(b=0;b<a.pages.length;b++)h=a.pages[b],-h.left<=a.leftPosition&&(c=b);return c}function p(a,b){var c={};return c["-webkit-"+a]=b,c["-moz-"+a]=b,c["-ms-"+a]=b,c["-o-"+a]=b,c[a]=b,c}function q(a,b,c,d){return r(a,d),d===!0?setInterval(c,b):setTimeout(c,b)}function r(a){null!==a&&(clearInterval(a),a=null)}function s(){var a,c=document.createElement("p"),d={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};document.body.insertBefore(c,null);for(var e in d)void 0!==c.style[e]&&(c.style[e]="translate3d(1px,1px,1px)",a=b.getComputedStyle(c).getPropertyValue(d[e]));return document.body.removeChild(c),void 0!==a&&a.length>0&&"none"!==a}var t={autoAdvance:!1,autoTime:8e3,autoWidth:!1,controls:!0,customClass:"",extraMargin:0,infinite:!1,labels:{next:"",previous:""},maxWidth:1/0,minWidth:"0px",paged:!1,pagination:!0,single:!1,touchPaged:!0,useMargin:!1},u={defaults:function(b){t=a.extend(t,b||{})},destroy:function(){return a(this).each(function(){var b=a(this).data("roller");b&&(r(b.autoTimer),b.single||(b.viewport&&b.$items.unwrap(),b.canister?b.$items.unwrap():b.$canister.attr("style",null)),b.autoWidth&&b.$items.css("width",""),b.$items.removeClass("visible first"),b.pagination&&b.$pagination.remove(),b.controls&&b.$controls.remove(),b.$roller.removeClass("roller enabled "+(b.single?"single ":"")+b.customClass).off(".roller").data("roller",null))})},disable:function(){return a(this).each(function(){var b=a(this).data("roller");b&&b.enabled&&(r(b.autoTimer),b.enabled=!1,b.$roller.removeClass("enabled").off("touchstart.roller click.roller"),b.$canister.attr("style","").css(p("transition","none")).off("touchstart.roller"),b.$controls.removeClass("visible"),b.$pagination.removeClass("visible").html(""),b.$canister.css(b.useMargin?{marginLeft:""}:p("transform","translate3d(0px, 0, 0)")),b.index=0)})},enable:function(){return a(this).each(function(){var b=a(this).data("roller");b&&!b.enabled&&(b.enabled=!0,b.$roller.addClass("enabled").on("touchstart.roller click.roller",".roller-control",b,j).on("touchstart.roller click.roller",".roller-page",b,k),b.$canister.css(p("transition","")),u.resize.apply(b.$roller),b.single||b.$canister.on("touchstart.roller",b,f))})},jump:function(b){return a(this).each(function(){var c=a(this).data("roller");c&&c.enabled&&(r(c.autoTimer),l(c,b-1))})},resize:function(){return a(this).each(function(){var b,c,d=a(this).data("roller");if(d&&d.enabled){if(d.count=d.$items.length,d.count<1)return;for(d.$roller.removeClass("animated"),d.$items.removeClass("visible first"),d.viewportWidth=d.$viewport.outerWidth(!1),d.autoWidth&&(d.paged=!0,d.$items.css({width:d.viewportWidth})),d.items=[],b=0;b<d.count;b++)c=d.$items.eq(b),d.items.push({$item:c,width:c.outerWidth(!0),position:c.position()});if(d.single)d.perPage=1,d.pageCount=d.count-1;else{for(d.canisterWidth=0,b=0;b<d.count;b++)d.canisterWidth+=d.items[b].width;if(d.paged)d.perPage=1,d.pageCount=d.canisterWidth>d.viewportWidth?d.count-1:0;else{d.perPage=1,d.pageCount=0,d.pages=[{left:0}];var e=d.extraMargin,f=e,g=0,h=0;for(b=0;b<d.count;b++)f+=d.items[b].width,f>d.viewportWidth&&(d.pages.push({left:e}),d.pages[d.pageCount].$items=d.$items.slice(g,h),d.pageCount++,f=d.extraMargin+d.items[b].width,g=b),h++,e+=d.items[b].width;d.pages[d.pageCount].$items=d.$items.slice(g,h)}}if(d.canisterWidth+=d.extraMargin,d.maxMove=d.single||d.paged?-d.canisterWidth+d.viewportWidth-d.extraMargin:-d.pages[d.pageCount].left,d.maxMove>=0&&(d.maxMove=0,d.pageCount=0),1/0!==d.pageCount){for(var i="",j=0;j<=d.pageCount;j++)i+='<span class="roller-page">'+(j+1)+"</span>";d.$pagination.html(i)}for(d.pageCount<1?(d.$controls.removeClass("visible"),d.$pagination.removeClass("visible")):(d.$controls.addClass("visible"),d.$pagination.addClass("visible")),d.$paginationItems=d.$roller.find(".roller-page"),d.single||d.$canister.css({width:d.canisterWidth}),b=0;b<d.count;b++)d.items[b].position=d.$items.eq(b).position();l(d,o(d),!1),d.resetTimer=q(d.resetTimer,5,function(){d.$roller.addClass("animated")},!1)}})},reset:function(){return a(this).each(function(){var b=a(this).data("roller");b&&b.enabled&&(b.$items=b.$roller.find(".roller-item"),u.resize.apply(b.$roller))})},set:function(b,c){return a(this).each(function(){var d=a(this).data("roller");d&&a.type(d[b])&&(d[b]=c)})}};a.fn.roller=function(a){return u[a]?u[a].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof a&&a?this:c.apply(this,arguments)},a.roller=function(a){"defaults"===a&&u.defaults.apply(this,Array.prototype.slice.call(arguments,1))}}(jQuery,window);