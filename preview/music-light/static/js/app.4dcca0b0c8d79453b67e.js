webpackJsonp([10],{"1PCG":function(t,i,e){"use strict";var n=e("GQaK"),s={props:{probeType:{type:Number,default:1},click:{type:Boolean,default:!0},data:{type:Array,default:null},listenScroll:{type:Boolean,default:!1},pullup:{type:Boolean,default:!1},beforeScroll:{type:Boolean,default:!1},refreshDelay:{type:Number,default:20}},mounted:function(){var t=this;setTimeout(function(){t._initScroll()},20)},methods:{_initScroll:function(){var t=this;if(this.$refs.wrapper){if(this.scroll=new n.a(this.$refs.wrapper,{probeType:this.probeType,click:this.click}),this.listenScroll){var i=this;this.scroll.on("scroll",function(t){i.$emit("scroll",t)})}this.pullup&&this.scroll.on("scrollEnd",function(){t.scroll.y<t.scroll.maxScrollY+50&&t.$emit("scrollToEnd")}),this.beforeScroll&&this.scroll.on("beforeScrollStart",function(){t.$emit("beforeScroll")})}},enable:function(){this.scroll&&this.scroll.enable()},disable:function(){this.scroll&&this.scroll.disable()},refresh:function(){this.scroll&&this.scroll.refresh()},scrollTo:function(){this.scroll&&this.scroll.scrollTo.apply(this.scroll,arguments)},scrollToElement:function(){this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments)}},watch:{data:function(){var t=this;setTimeout(function(){t.refresh()},this.refreshDelay)}}},r={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"wrapper"},[this._t("default")],2)},staticRenderFns:[]},a=e("VU/8")(s,r,!1,null,null,null);i.a=a.exports},"34KM":function(t,i){},"7APE":function(t,i){},"7X9E":function(t,i,e){"use strict";var n={props:{text:{type:String,default:""},confirmBtnText:{type:String,default:"确定"},cancelBtnText:{type:String,default:"取消"}},data:function(){return{showFlag:!1}},methods:{show:function(){this.showFlag=!0},hide:function(){this.showFlag=!1},cancel:function(){this.hide(),this.$emit("cancel")},confirm:function(){this.hide(),this.$emit("confirm")}}},s={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("transition",{attrs:{name:"confirm-fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],staticClass:"confirm",on:{click:function(t){t.stopPropagation()}}},[e("div",{staticClass:"confirm-wrapper"},[e("div",{staticClass:"confirm-content"},[e("p",{staticClass:"text"},[t._v(t._s(t.text))]),t._v(" "),e("div",{staticClass:"operate"},[e("div",{staticClass:"operate-btn left",on:{click:t.confirm}},[t._v(t._s(t.confirmBtnText))]),t._v(" "),e("div",{staticClass:"operate-btn",on:{click:t.cancel}},[t._v(t._s(t.cancelBtnText))])])])])])])},staticRenderFns:[]};var r=e("VU/8")(n,s,!1,function(t){e("bN7D")},"data-v-1bf93178",null);i.a=r.exports},"8LTA":function(t,i){t.exports="data:image/svg+xml;base64,PCEtLSBCeSBTYW0gSGVyYmVydCAoQHNoZXJiKSwgZm9yIGV2ZXJ5b25lLiBNb3JlIEAgaHR0cDovL2dvby5nbC83QUp6YkwgLS0+Cjxzdmcgd2lkdGg9IjI2IiBoZWlnaHQ9IjI1IiB2aWV3Qm94PSIwIDAgMjYgMjUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0iI2ZmZiI+CiAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAyNSkiPgogICAgPHJlY3Qgd2lkdGg9IjIiIGhlaWdodD0iMjUiIHJ4PSIxIj4KICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iaGVpZ2h0IiBiZWdpbj0iMHMiIGR1cj0iMXMiIGNhbGNNb2RlPSJsaW5lYXIiCiAgICAgICAgICAgICAgIHZhbHVlcz0iMTI7MjU7MTIiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+CiAgICA8L3JlY3Q+CiAgICA8cmVjdCB4PSI4IiB3aWR0aD0iMiIgaGVpZ2h0PSIyNSIgcng9IjEiPgogICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJoZWlnaHQiIGJlZ2luPSIwcyIgZHVyPSIxcyIgY2FsY01vZGU9ImxpbmVhciIKICAgICAgICAgICAgICAgdmFsdWVzPSIyNDsxNTsyNCIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz4KICAgIDwvcmVjdD4KICAgIDxyZWN0IHg9IjE2IiB3aWR0aD0iMiIgaGVpZ2h0PSIyNSIgcng9IjEiPgogICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJoZWlnaHQiIGJlZ2luPSIwcyIgZHVyPSIxcyIgY2FsY01vZGU9ImxpbmVhciIKICAgICAgICAgICAgICAgdmFsdWVzPSIxNTsyNTsxNSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz4KICAgIDwvcmVjdD4KICAgIDxyZWN0IHg9IjI0IiB3aWR0aD0iMiIgaGVpZ2h0PSIyNSIgcng9IjEiPgogICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJoZWlnaHQiIGJlZ2luPSIwcyIgZHVyPSIxcyIgY2FsY01vZGU9ImxpbmVhciIKICAgICAgICAgICAgICAgdmFsdWVzPSIyMjsxMDsyMiIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz4KICAgIDwvcmVjdD4KICA8L2c+Cjwvc3ZnPgo="},Gaqa:function(t,i,e){t.exports=e.p+"static/img/chicken.e677dd7.png"},HzVJ:function(t,i,e){"use strict";e.d(i,"k",function(){return n}),e.d(i,"e",function(){return s}),e.d(i,"d",function(){return r}),e.d(i,"g",function(){return a}),e.d(i,"j",function(){return o}),e.d(i,"h",function(){return c}),e.d(i,"a",function(){return l}),e.d(i,"b",function(){return u}),e.d(i,"l",function(){return d}),e.d(i,"i",function(){return h}),e.d(i,"f",function(){return f}),e.d(i,"c",function(){return g});var n="SET_SINGER",s="SET_PLAYING_STATE",r="SET_FULL_SCREEN",a="SET_PLAY_LIST",o="SET_SEQUENCE_LIST",c="SET_PLAY_MODE",l="SET_CURRENT_INDEX",u="SET_DISTLIST",d="SET_TOPLIST",h="SET_SEARCH_HISTORY",f="SET_PLAY_HISTORY",g="SET_FAVORITE_LIST"},"N//D":function(t,i){},NHnr:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n={};e.d(n,"selectPlay",function(){return rt}),e.d(n,"randomPlay",function(){return at}),e.d(n,"insertSong",function(){return ot}),e.d(n,"deleteSong",function(){return ct}),e.d(n,"deleteSongList",function(){return lt}),e.d(n,"saveSearchHistory",function(){return ut}),e.d(n,"deleteSearchHistory",function(){return dt}),e.d(n,"clearSearchHistory",function(){return ht}),e.d(n,"savePlayHistory",function(){return ft}),e.d(n,"saveFavoriteList",function(){return gt}),e.d(n,"deleteFavoriteList",function(){return pt});var s={};e.d(s,"singer",function(){return vt}),e.d(s,"playing",function(){return mt}),e.d(s,"fullScreen",function(){return yt}),e.d(s,"playlist",function(){return It}),e.d(s,"sequenceList",function(){return Ct}),e.d(s,"mode",function(){return St}),e.d(s,"currentIndex",function(){return _t}),e.d(s,"currentSong",function(){return bt}),e.d(s,"distList",function(){return wt}),e.d(s,"topList",function(){return Lt}),e.d(s,"searchHistory",function(){return Pt}),e.d(s,"playHistory",function(){return Tt}),e.d(s,"favoriteList",function(){return xt});e("j1ja"),e("fTai");var r=e("/5sW"),a={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"v-header"},[this._m(0),this._v(" "),i("h1",{staticClass:"title"},[this._v("ChickenMusic")]),this._v(" "),i("router-link",{staticClass:"mine",attrs:{tag:"div",to:"/user"}},[i("i",{staticClass:"icon-mine"})])],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"logo"},[i("div",{staticClass:"icon"},[i("img",{attrs:{src:e("Gaqa"),height:"30",width:"30"}})])])}]};var o=e("VU/8")({},a,!1,function(t){e("N//D")},null,null).exports,c={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"tab-wrapper"},[i("div",{staticClass:"tab"},[i("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/recommend"}},[i("span",{staticClass:"tab-link"},[this._v("推荐")])]),this._v(" "),i("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/singer"}},[i("span",{staticClass:"tab-link"},[this._v("歌手")])]),this._v(" "),i("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/rank"}},[i("span",{staticClass:"tab-link"},[this._v("排行")])]),this._v(" "),i("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/search"}},[i("span",{staticClass:"tab-link"},[this._v("搜索")])])],1)])},staticRenderFns:[]};var l=e("VU/8")({},c,!1,function(t){e("qkRM")},"data-v-12e57746",null).exports,u=e("Dd8w"),d=e.n(u),h=e("QX6o"),f=Object(h.b)("transform"),g={props:{percent:{type:Number,default:0}},created:function(){this.touch={}},methods:{progressTouchStart:function(t){this.touch.initiated=!0,this.touch.startX=t.touches[0].pageX,this.touch.left=this.$refs.progress.offsetWidth},progressTouchMove:function(t){if(this.touch.initiated){var i=this.$refs.progressBar.clientWidth-16,e=t.touches[0].pageX-this.touch.startX,n=Math.min(i,Math.max(0,this.touch.left+e));this._offset(n)}},progressTouchEnd:function(){this.touch.initiated=!1,this._triggerPercent()},progressClick:function(t){var i=this.$refs.progressBar.getBoundingClientRect(),e=t.pageX-i.left;this._offset(e),this._triggerPercent()},_triggerPercent:function(){var t=this.$refs.progressBar.clientWidth-16,i=this.$refs.progress.clientWidth/t;this.$emit("percentChange",i)},_offset:function(t){this.$refs.progress.style.width=t+"px",this.$refs.progressBtn.style[f]="translate3d("+t+"px,0,0)"}},watch:{percent:function(t){if(t>=0&&!this.touch.initiated){var i=t*(this.$refs.progressBar.clientWidth-16);this._offset(i)}}}},p={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{ref:"progressBar",staticClass:"progress-bar",on:{click:t.progressClick}},[e("div",{staticClass:"bar-inner"},[e("div",{ref:"progress",staticClass:"progress"}),t._v(" "),e("div",{ref:"progressBtn",staticClass:"progress-btn-wrapper",on:{touchstart:function(i){return i.preventDefault(),t.progressTouchStart(i)},touchmove:function(i){return i.preventDefault(),t.progressTouchMove(i)},touchend:function(i){return i.preventDefault(),t.progressTouchEnd(i)}}},[e("div",{staticClass:"progress-btn"})])])])},staticRenderFns:[]};var v=e("VU/8")(g,p,!1,function(t){e("ocZ7")},"data-v-db3f9992",null).exports,m=e("1PCG"),y=e("NYxO"),I=0,C=1,S=2,_=e("7X9E"),b=e("d4zx"),w={computed:d()({iconMode:function(){return this.mode===I?"icon-loop":this.mode===C?"icon-single":"icon-random"}},Object(y.c)(["sequenceList","currentSong","playlist","mode","favoriteList"])),methods:d()({changeMode:function(){var t=(this.mode+1)%3;this.setPlayMode(t);var i=null;i=this.mode===S?Object(b.b)(this.sequenceList):this.sequenceList,this.resetCurrentIndex(i),this.setPlayList(i)},resetCurrentIndex:function(t){var i=this,e=t.findIndex(function(t){return t.id===i.currentSong.id});this.setCurrentIndex(e)},toggleFavorite:function(t){this.isFavorite(t)?this.deleteFavoriteList(t):this.saveFavoriteList(t)},getFavoriteIcon:function(t){return this.isFavorite(t)?"icon-favorite":"icon-not-favorite"},isFavorite:function(t){return this.favoriteList.findIndex(function(i){return i.id===t.id})>-1}},Object(y.d)({setPlayingState:"SET_PLAYING_STATE",setCurrentIndex:"SET_CURRENT_INDEX",setPlayMode:"SET_PLAY_MODE",setPlayList:"SET_PLAY_LIST"}),Object(y.b)(["saveFavoriteList","deleteFavoriteList"]))},L={mixins:[w],data:function(){return{showFlag:!1,refreshDelay:100}},computed:{modeText:function(){return this.mode===I?"顺序播放":this.mode===S?"随机播放":"单曲循环"}},methods:d()({show:function(){var t=this;this.showFlag=!0,setTimeout(function(){t.$refs.listContent.refresh(),t.scrollToCurrent(t.currentSong)},20)},hide:function(){this.showFlag=!1},isCurrent:function(t){return this.currentSong.id===t.id},selectItem:function(t,i){this.mode===S&&(i=this.playlist.findIndex(function(i){return i.id===t.id})),this.setCurrentIndex(i),this.setPlayingState(!0)},deleteOne:function(t){this.deleteSong(t),this.playlist.length||this.hide()},showConfirm:function(){this.$refs.confirm.show()},clearPlayList:function(){this.deleteSongList(),this.hide()},scrollToCurrent:function(t){var i=this.sequenceList.findIndex(function(i){return i.id===t.id});this.$refs.listContent.scrollToElement(this.$refs.listItem[i],300)}},Object(y.b)(["deleteSong","deleteSongList"])),watch:{currentSong:function(t,i){this.showFlag&&t.id!==i.id&&this.scrollToCurrent(t)}},components:{Scroll:m.a,Confirm:_.a}},P={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("transition",{attrs:{name:"list-fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],staticClass:"playlist",on:{click:t.hide}},[e("div",{staticClass:"list-wrapper",on:{click:function(t){t.stopPropagation()}}},[e("div",{staticClass:"list-header"},[e("h1",{staticClass:"title"},[e("span",{staticClass:"icon",on:{click:t.changeMode}},[e("span",{staticClass:"text"},[e("i",{class:t.iconMode}),t._v(t._s(t.modeText)+"\n            ")])]),t._v(" "),e("span",{staticClass:"clear",on:{click:t.showConfirm}},[e("i",{staticClass:"icon-clear"})])])]),t._v(" "),e("scroll",{ref:"listContent",staticClass:"list-content",attrs:{refreshDelay:t.refreshDelay,data:t.sequenceList}},[e("transition-group",{ref:"list",attrs:{name:"list",tag:"ul"}},t._l(t.sequenceList,function(i,n){return e("li",{key:i.id,ref:"listItem",refInFor:!0,staticClass:"item",on:{click:function(e){t.selectItem(i,n)}}},[e("span",{staticClass:"text",class:{current:t.isCurrent(i)}},[e("i",{directives:[{name:"show",rawName:"v-show",value:t.isCurrent(i),expression:"isCurrent(item)"}],staticClass:"icon-play"}),t._v(" "),e("span",{staticClass:"name-label"},[t._v(t._s(i.name))]),t._v(" "),e("span",{staticClass:"singer-label"},[t._v(" - "+t._s(i.singer))])]),t._v(" "),e("span",{staticClass:"like",on:{click:function(e){e.stopPropagation(),t.toggleFavorite(i)}}},[e("i",{class:t.getFavoriteIcon(i)})]),t._v(" "),e("span",{staticClass:"delete",on:{click:function(e){e.stopPropagation(),t.deleteOne(i)}}},[e("i",{staticClass:"icon-delete"})])])}),0)],1),t._v(" "),e("div",{staticClass:"list-close",on:{click:t.hide}},[e("span",[t._v("关闭")])])],1),t._v(" "),e("confirm",{ref:"confirm",attrs:{text:"是否清空播放列表",confirmBtnText:"清空"},on:{confirm:t.clearPlayList}})],1)])},staticRenderFns:[]};var T=e("VU/8")(L,P,!1,function(t){e("7APE")},"data-v-c311ba4a",null).exports,x=e("HzVJ"),A=e("OKJt"),E=e.n(A),k=Object(h.b)("transform"),M=Object(h.b)("transition"),j={mixins:[w],data:function(){return{songReady:!1,currentTime:0,currentLyric:null,currentLineNum:0,currentShow:"cd",playingLyric:""}},created:function(){this.touch={}},methods:d()({togglePlaying:function(){this.songReady&&this.setPlayingState(!this.playing)},prev:function(){if(this.songReady)if(1===this.playlist.length)this.loop();else{var t=this.currentIndex-1;-1===t&&(t=this.playlist.length-1),this.setCurrentIndex(t),this.playing||this.togglePlaying()}},next:function(){if(this.songReady)if(1===this.playlist.length)this.loop();else{var t=this.currentIndex+1;t===this.playlist.length&&(t=0),this.setCurrentIndex(t),this.playing||this.togglePlaying()}},showPlaylist:function(){this.$refs.playlist.show()},ready:function(){var t=this;setTimeout(function(){t.songReady=!0,t.savePlayHistory(t.currentSong)},500)},paused:function(){this.currentLyric&&this.currentLyric.stop()},error:function(){this.songReady=!0},audioEnd:function(){this.mode===C?this.loop():this.next()},loop:function(){this.$refs.audio.currentTime=0,this.$refs.audio.play(),this.currentLyric&&this.currentLyric.seek(0)},updateTime:function(t){this.currentTime=t.target.currentTime},format:function(t){return t=Math.floor(t),Math.floor(t/60)+":"+this._pad(t%60)},_pad:function(t){for(var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,e=t.toString().length;e<i;)t="0"+t,e++;return t},onProgressBarChange:function(t){var i=t*this.currentSong.duration;this.$refs.audio.currentTime=i,this.playing||this.togglePlaying(),this.currentLyric&&this.currentLyric.seek(1e3*i)},back:function(){this.setFullScreen(!1)},open:function(){this.setFullScreen(!0)},getLyric:function(){var t=this;this.currentSong.getLyric().then(function(i){t.currentSong.lyric===i&&(t.currentLyric=new E.a(i,t.handleLyric),t.playing&&t.currentLyric.play())}).catch(function(){t.currentLyric=null,t.playingLyric="",t.currentLineNum=0})},handleLyric:function(t){var i=t.lineNum,e=t.txt;if(this.currentLineNum=i,i>5){var n=this.$refs.lyricLine[i-5];this.$refs.lyricList.scrollToElement(n,1e3)}else this.$refs.lyricList.scrollTo(0,0,1e3);this.playingLyric=e},middleTouchStart:function(t){this.touch.initaiated=!0;var i=t.touches[0];this.touch.startX=i.pageX,this.touch.startY=i.pageY,this.touch.deltaX=0,this.touch.deltaY=0},middleTouchMove:function(t){if(this.touch.initaiated){var i=t.touches[0],e=i.pageX-this.touch.startX,n=i.pageY-this.touch.startY;if(this.touch.deltaX=e,this.touch.deltaY=n,!(Math.abs(n)>Math.abs(e))){var s="cd"===this.currentShow?0:-window.innerWidth,r=Math.min(0,Math.max(-window.innerWidth,s+e));this.touch.percent=Math.abs(r/window.innerWidth),this.$refs.CD.style.opacity=1-this.touch.percent,this.$refs.CD.style[M]="",this.$refs.lyricList.$el.style[k]="translate3d("+r+"px,0,0)",this.$refs.lyricList.$el.style[M]=""}}},middleTouchEnd:function(t){var i=Math.abs(this.touch.deltaX),e=Math.abs(this.touch.deltaY);if(!(0===i&&0===e||i<e)){var n=0,s=1;"cd"===this.currentShow?this.touch.percent>.1?(n=-window.innerWidth,s=0,this.currentShow="lyric"):(s=1,n=0):this.touch.percent<.9?(n=0,s=1,this.currentShow="cd"):(s=0,n=-window.innerWidth),this.$refs.CD.style.opacity=s,this.$refs.CD.style[M]="all .5s ease-in-out",this.$refs.lyricList.$el.style[k]="translate3d("+n+"px,0,0)",this.$refs.lyricList.$el.style[M]="all .5s ease-in-out"}}},Object(y.d)({setFullScreen:x.d}),Object(y.b)(["savePlayHistory"])),computed:d()({playIcon:function(){return this.playing?"icon-pause":"icon-play"},cdClass:function(){return this.playing?"play":"play pause"},disableCls:function(){return this.songReady?"":"disable"},playPercent:function(){return this.currentTime/this.currentSong.duration}},Object(y.c)(["fullScreen","currentIndex","playing"])),watch:{currentSong:function(t,i){t.id&&t.url&&t.id!==i.id&&(this.songReady=!1,this.currentLyric&&(this.currentLyric.stop(),this.currentLyric=null,this.currentTime=0,this.playingLyric="",this.currentLineNum=0),this.$refs.audio.src=t.url,this.$refs.audio.play(),this.getLyric())},playing:function(t){if(this.songReady){var i=this.$refs.audio;this.$nextTick(function(){t?i.play():i.pause()})}}},components:{progressBar:v,Scroll:m.a,PlayList:T}},N={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.playlist.length>0,expression:"playlist.length>0"}],staticClass:"player"},[n("transition",{attrs:{name:"slide"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.fullScreen,expression:"fullScreen"}],staticClass:"normal-player"},[n("div",{staticClass:"background"},[n("img",{attrs:{width:"100%",height:"100%",src:t.currentSong.image}}),t._v(" "),n("div",{staticClass:"mask"})]),t._v(" "),n("div",{staticClass:"top"},[n("div",{staticClass:"back",on:{click:function(i){return i.stopPropagation(),t.back(i)}}},[n("i",{staticClass:"icon-back"})]),t._v(" "),n("div",{staticClass:"title"},[n("h1",{staticClass:"song-name",domProps:{innerHTML:t._s(t.currentSong.name)}}),t._v(" "),n("h2",{staticClass:"song-singer",domProps:{innerHTML:t._s(t.currentSong.singer)}})])]),t._v(" "),n("div",{staticClass:"middle",on:{click:function(t){t.stopPropagation()},touchstart:function(i){return i.preventDefault(),t.middleTouchStart(i)},touchmove:function(i){return i.preventDefault(),t.middleTouchMove(i)},touchend:function(i){return i.preventDefault(),t.middleTouchEnd(i)}}},[n("div",{ref:"CD",staticClass:"middle-l"},[n("div",{ref:"cdWrapper",staticClass:"cd-wrapper"},[n("div",{staticClass:"cd",class:t.cdClass},[n("img",{staticClass:"image",attrs:{src:t.currentSong.image}})])]),t._v(" "),n("div",{staticClass:"playing-lyric-wrapper"},[n("div",{staticClass:"playing-lyric"},[t._v(t._s(t.playingLyric))])])]),t._v(" "),n("scroll",{ref:"lyricList",staticClass:"middle-r",attrs:{data:t.currentLyric&&t.currentLyric.lines}},[n("div",{staticClass:"lyric-wrapper"},[t.currentLyric?n("div",t._l(t.currentLyric.lines,function(i,e){return n("p",{ref:"lyricLine",refInFor:!0,staticClass:"text",class:{current:t.currentLineNum===e}},[t._v(t._s(i.txt))])}),0):t._e()])])],1),t._v(" "),n("div",{staticClass:"bottom"},[n("div",{staticClass:"dot-wrapper"},[n("span",{staticClass:"dot",class:{active:"cd"===t.currentShow}}),t._v(" "),n("span",{staticClass:"dot",class:{active:"lyric"===t.currentShow}})]),t._v(" "),n("div",{staticClass:"progress-wrapper"},[n("span",{staticClass:"time time-l"},[t._v(t._s(t.format(t.currentTime)))]),t._v(" "),n("div",{staticClass:"progress-bar-wrapper"},[n("progress-bar",{attrs:{percent:t.playPercent},on:{percentChange:t.onProgressBarChange}})],1),t._v(" "),n("span",{staticClass:"time time-r"},[t._v(t._s(t.format(t.currentSong.duration)))])]),t._v(" "),n("div",{staticClass:"operators"},[n("div",{staticClass:"left"},[n("i",{class:t.iconMode,on:{click:t.changeMode}})]),t._v(" "),n("div",{staticClass:"center",class:t.disableCls},[n("i",{staticClass:"icon-prev",on:{click:t.prev}}),t._v(" "),n("i",{staticClass:"play",class:t.playIcon,on:{click:t.togglePlaying}}),t._v(" "),n("i",{staticClass:"icon-next",on:{click:t.next}})]),t._v(" "),n("div",{staticClass:"right"},[n("i",{staticClass:"icon-playlist",on:{click:function(i){return i.stopPropagation(),i.preventDefault(),t.showPlaylist(i)}}})])])])])]),t._v(" "),n("transition",{attrs:{name:"mini"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.fullScreen,expression:"!fullScreen"}],staticClass:"mini-player",on:{click:function(i){return i.stopPropagation(),t.open(i)}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.playing,expression:"!playing"}],staticClass:"icon"},[n("img",{attrs:{src:e("mkyO"),width:"25",height:"35"}})]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.playing,expression:"playing"}],staticClass:"icon"},[n("img",{attrs:{src:e("8LTA"),width:"25",height:"35"}})])])]),t._v(" "),n("play-list",{ref:"playlist"}),t._v(" "),n("audio",{ref:"audio",on:{play:t.ready,error:t.error,timeupdate:t.updateTime,ended:t.audioEnd,pause:t.paused}})],1)},staticRenderFns:[]};var D={components:{VHeader:o,VTab:l,Player:e("VU/8")(j,N,!1,function(t){e("ptvK")},"data-v-a8161b3a",null).exports}},H={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"app"}},[i("v-header"),this._v(" "),i("v-tab"),this._v(" "),i("keep-alive",[i("router-view")],1),this._v(" "),i("player")],1)},staticRenderFns:[]},W=e("VU/8")(D,H,!1,null,null,null).exports,Z=e("/ocq"),V=function(t){Promise.all([e.e(0),e.e(5)]).then(e.bind(null,"oSun")).then(function(i){t(i)})};r.a.use(Z.a);var F=new Z.a({routes:[{path:"/",redirect:"/recommend"},{path:"/recommend",component:function(t){Promise.all([e.e(0),e.e(4)]).then(e.bind(null,"J3bc")).then(function(i){t(i)})},children:[{path:":id",component:function(t){Promise.all([e.e(0),e.e(6)]).then(e.bind(null,"OrmM")).then(function(i){t(i)})}}]},{path:"/singer",component:function(t){Promise.all([e.e(0),e.e(3)]).then(e.bind(null,"bQE2")).then(function(i){t(i)})},children:[{path:":id",component:V}]},{path:"/rank",component:function(t){Promise.all([e.e(0),e.e(7)]).then(e.bind(null,"czKK")).then(function(i){t(i)})},children:[{path:":id",component:function(t){Promise.all([e.e(0),e.e(8)]).then(e.bind(null,"5yU9")).then(function(i){t(i)})}}]},{path:"/search",component:function(t){Promise.all([e.e(0),e.e(1)]).then(e.bind(null,"Skm/")).then(function(i){t(i)})},children:[{path:":id",component:V}]},{path:"/user",component:function(t){Promise.all([e.e(0),e.e(2)]).then(e.bind(null,"aewL")).then(function(i){t(i)})}}]}),$=e("mvHQ"),R=e.n($),G=e("woOf"),Y=e.n(G),B={version:"1.0",storage:window.localStorage,session:{storage:window.sessionStorage}},J={set:function(t,i){if(!this.disabled)return void 0===i?this.remove(t):(this.storage.setItem(t,function(t){return R()(t)}(i)),i)},get:function(t,i){if(this.disabled)return i;var e=function(t){if("string"!=typeof t)return;try{return JSON.parse(t)}catch(i){return t||void 0}}(this.storage.getItem(t));return void 0===e?i:e},has:function(t){return void 0!==this.get(t)},remove:function(t){this.disabled||this.storage.removeItem(t)},clear:function(){this.disabled||this.storage.clear()},getAll:function(){if(this.disabled)return null;var t={};return this.forEach(function(i,e){t[i]=e}),t},forEach:function(t){if(!this.disabled)for(var i=0;i<this.storage.length;i++){var e=this.storage.key(i);t(e,this.get(e))}}};Y()(B,J),Y()(B.session,J);try{var O="__storejs__";B.set(O,O),B.get(O)!==O&&(B.disabled=!0),B.remove(O)}catch(t){B.disabled=!0}var X=B,Q="__search__",U=15,K="__play__",z=30,q="__favorite__",tt=200;function it(t,i,e,n){var s=t.findIndex(e);0!==s&&(s>0&&t.splice(s,1),t.unshift(i),n&&t.length>n&&t.pop())}function et(t,i){var e=t.findIndex(i);e>-1&&t.splice(e,1)}function nt(t,i){return t.findIndex(function(t){return t.id===i.id})}var st,rt=function(t,i){var e=t.commit,n=t.state,s=i.list,r=i.index;if(e(x.j,s),n.mode===S){var a=Object(b.b)(s);e(x.g,a),r=nt(a,s[r])}else e(x.g,s);e(x.a,r),e(x.d,!0),e(x.e,!0)},at=function(t,i){var e=t.commit;e(x.h,S),e(x.j,i);var n=Object(b.b)(i);e(x.g,n),e(x.a,0),e(x.d,!0),e(x.e,!0)},ot=function(t,i){var e=t.commit,n=t.state,s=n.playlist.slice(),r=n.sequenceList.slice(),a=n.currentIndex,o=s[a],c=nt(s,i);a++,s.splice(a,0,i),c>-1&&(a>c?(s.splice(c,1),a--):s.splice(c+1,1));var l=nt(r,o),u=nt(r,i);r.splice(l,0,i),u>-1&&(a>u?r.splice(u,1):r.splice(u+1,1)),e(x.g,s),e(x.j,r),e(x.a,a),e(x.d,!0),e(x.e,!0)},ct=function(t,i){var e=t.commit,n=t.state,s=n.playlist.slice(),r=n.sequenceList.slice(),a=n.currentIndex,o=nt(s,i);s.splice(o,1);var c=nt(r,i);r.splice(c,1),(a>o||a===s.length)&&a--,e(x.g,s),e(x.j,r),e(x.a,a);var l=s.length>0;e(x.e,l)},lt=function(t){var i=t.commit,e=t.state,n=e.playlist.slice(),s=e.sequenceList.slice(),r=n[e.currentIndex];s=[],(n=[]).push(r),s.push(r),i(x.g,n),i(x.j,s),i(x.a,0)},ut=function(t,i){(0,t.commit)(x.i,function(t){var i=X.get(Q,[]);return it(i,t,function(i){return i===t},U),X.set(Q,i),i}(i))},dt=function(t,i){(0,t.commit)(x.i,function(t){var i=X.get(Q,[]);return et(i,function(i){return i===t}),X.set(Q,i),i}(i))},ht=function(t){(0,t.commit)(x.i,(X.remove(Q),[]))},ft=function(t,i){(0,t.commit)(x.f,function(t){var i=X.get(K,[]);return it(i,t,function(i){return i.id===t.id},z),X.set(K,i),i}(i))},gt=function(t,i){(0,t.commit)(x.c,function(t){var i=X.get(q,[]);return it(i,t,function(i){return i.id===t.id},tt),X.set(q,i),i}(i))},pt=function(t,i){(0,t.commit)(x.c,function(t){var i=X.get(q,[]);return et(i,function(i){return i.id===t.id}),X.set(q,i),i}(i))},vt=function(t){return t.singer},mt=function(t){return t.playing},yt=function(t){return t.fullScreen},It=function(t){return t.playlist},Ct=function(t){return t.sequenceList},St=function(t){return t.mode},_t=function(t){return t.currentIndex},bt=function(t){return t.playlist[t.currentIndex]||{}},wt=function(t){return t.distList},Lt=function(t){return t.topList},Pt=function(t){return t.searchHistory},Tt=function(t){return t.playHistory},xt=function(t){return t.favoriteList},At={singer:{},playing:!1,fullScreen:!1,playlist:[],sequenceList:[],mode:I,currentIndex:-1,distList:{},topList:{},searchHistory:X.get(Q,[]),playHistory:X.get(K,[]),favoriteList:X.get(q,[])},Et=e("bOdI"),kt=e.n(Et),Mt=(st={},kt()(st,x.k,function(t,i){t.singer=i}),kt()(st,x.e,function(t,i){t.playing=i}),kt()(st,x.d,function(t,i){t.fullScreen=i}),kt()(st,x.g,function(t,i){t.playlist=i}),kt()(st,x.j,function(t,i){t.sequenceList=i}),kt()(st,x.h,function(t,i){t.mode=i}),kt()(st,x.a,function(t,i){t.currentIndex=i}),kt()(st,x.b,function(t,i){t.distList=i}),kt()(st,x.l,function(t,i){t.topList=i}),kt()(st,x.i,function(t,i){t.searchHistory=i}),kt()(st,x.f,function(t,i){t.playHistory=i}),kt()(st,x.c,function(t,i){t.favoriteList=i}),st);e("sax8");r.a.use(y.a);var jt=new y.a.Store({actions:n,getters:s,state:At,mutations:Mt,strict:!1,plugins:[]}),Nt=e("v5o6"),Dt=e.n(Nt),Ht=e("cTzj"),Wt=e.n(Ht);e("34KM");Dt.a.attach(document.body),r.a.use(Wt.a,{loading:"/static/loading/loading-bars.svg"}),new r.a({el:"#app",router:F,store:jt,render:function(t){return t(W)}})},QX6o:function(t,i,e){"use strict";i.b=function(t){if(!1===s)return!1;if("standard"===s)return t;return s+t.charAt(0).toUpperCase()+t.substr(1)},i.a=function(t,i,e){return i="data-"+i,e?t.setAttribute(i,e):t.getAttribute(i)};var n=document.createElement("div").style,s=function(){var t={webkit:"webkitTransform",Moz:"MozTransform",O:"OTransform",ms:"msTransform",standard:"transform"};for(var i in t)if(void 0!==n[t[i]])return i;return!1}()},bN7D:function(t,i){},d4zx:function(t,i,e){"use strict";i.a=function(t,i){var e=void 0;return function(){for(var n=this,s=arguments.length,r=Array(s),a=0;a<s;a++)r[a]=arguments[a];e&&clearTimeout(e),e=setTimeout(function(){t.apply(n,r)},i)}},i.b=function(t){for(var i=t.slice(),e=0;e<i.length;e++){var n=(r=0,a=e,Math.floor(Math.random()*(a-r+1)+r)),s=i[e];i[e]=i[n],i[n]=s}var r,a;return i}},fTai:function(t,i){function e(){}window.MessageChannel=e,window.setImmediate=e},mkyO:function(t,i){t.exports="data:image/svg+xml;base64,PCEtLSBCeSBTYW0gSGVyYmVydCAoQHNoZXJiKSwgZm9yIGV2ZXJ5b25lLiBNb3JlIEAgaHR0cDovL2dvby5nbC83QUp6YkwgLS0+Cjxzdmcgd2lkdGg9IjI2IiBoZWlnaHQ9IjI1IiB2aWV3Qm94PSIwIDAgMjYgMjUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0iI2ZmZiI+CiAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAyNSkiPgogICAgPHJlY3QgeD0iMCIgd2lkdGg9IjIiIGhlaWdodD0iMTIiIHJ4PSIxIj48L3JlY3Q+CiAgICA8cmVjdCB4PSI4IiB3aWR0aD0iMiIgaGVpZ2h0PSIyNCIgcng9IjEiPjwvcmVjdD4KICAgIDxyZWN0IHg9IjE2IiB3aWR0aD0iMiIgaGVpZ2h0PSIxNSIgcng9IjEiPjwvcmVjdD4KICAgIDxyZWN0IHg9IjI0IiB3aWR0aD0iMiIgaGVpZ2h0PSIyMiIgcng9IjEiPjwvcmVjdD4KICA8L2c+Cjwvc3ZnPgo="},ocZ7:function(t,i){},ptvK:function(t,i){},qkRM:function(t,i){}},["NHnr"]);