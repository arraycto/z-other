webpackJsonp([5],{"Sgn/":function(t,n,e){"use strict";n.b=function(){return Object(i.a)("https://c.y.qq.com/v8/fcg-bin/v8.fcg",{channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,g_tk:1326425897,hostUin:0,format:"jsonp",inCharset:"utf-8",outCharset:"utf-8",notice:0,platform:"yqq",needNewCode:0},s.b)},n.a=function(t,n){var e={g_tk:5381,loginUin:0,hostUin:0,format:"jsonp",inCharset:"utf-8",outCharset:"utf-8",notice:0,platform:"yqq",needNewCode:0,order:"listen",songstatus:1,singermid:t,begin:0,num:n};return Object(i.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",e,s.b)};var i=e("lzic"),s=e("T452")},cz2V:function(t,n){},oSun:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("4YfN"),s=e.n(i),a=e("7UWz"),r=e("9rMa"),o=e("Sgn/"),c=e("PvFA"),u=e("T452"),g={data:function(){return{songs:[]}},created:function(){this._getDetail()},methods:{_getDetail:function(){var t=this;this.singer.id?Object(o.a)(this.singer.id,80).then(function(n){n.code===u.a&&(t.songs=t._normalizeSongs(n.data.list))}):this.$router.push("/singer")},_normalizeSongs:function(t){var n=[];return t.forEach(function(t){var e=t.musicData;e.songid&&e.albummid&&n.push(Object(c.a)(e))}),n}},computed:s()({title:function(){return this.singer.name},bgImage:function(){return this.singer.avatar}},Object(r.c)(["singer"])),components:{MusicList:a.a}},f={render:function(){var t=this.$createElement,n=this._self._c||t;return n("transition",{attrs:{name:"slide"}},[n("music-list",{attrs:{title:this.title,"bg-image":this.bgImage,songs:this.songs}})],1)},staticRenderFns:[]},l=e("OF7X")(g,f,!1,function(t){e("cz2V")},null,null);n.default=l.exports}});