webpackJsonp([6],{"+DNn":function(t,e){},OrmM:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("4YfN"),s=n.n(i),o=n("7UWz"),r=n("m40h"),a=n("PvFA"),u=n("9rMa"),c=n("T452"),l={created:function(){this._getSongList()},data:function(){return{songs:[]}},methods:{_getSongList:function(){var t=this;this.distList.tid?Object(r.c)(this.distList.tid).then(function(e){e.code===c.a&&(t.songs=t._normalizeSongs(e.cdlist[0].songlist))}):this.$router.push("/recommend")},_normalizeSongs:function(t){var e=[];return t.forEach(function(t){t.songid&&t.albummid&&e.push(Object(a.a)(t))}),e}},computed:s()({title:function(){return this.distList.title},bgImage:function(){return this.distList.cover_url_medium}},Object(u.c)(["distList"])),components:{MusicList:o.a}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"slide"}},[e("music-list",{attrs:{title:this.title,"bg-image":this.bgImage,songs:this.songs}})],1)},staticRenderFns:[]},f=n("OF7X")(l,d,!1,function(t){n("+DNn")},null,null);e.default=f.exports},m40h:function(t,e,n){"use strict";e.b=function(){return Object(a.a)("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",{g_tk:5381,uin:0,format:"json",inCharset:"utf-8",outCharset:"utf-8",notice:0,platform:"h5",needNewCode:1},u.b)},e.a=function(){return l.a.get("/api/getDistList",{params:{g_tk:5381,loginUin:0,hostUin:0,format:"jsonp",inCharset:"utf-8",outCharset:"utf-8",notice:0,platform:"yqq",needNewCode:0,data:{playlist:{method:"get_playlist_by_category",param:{id:8,curPage:1,size:40,order:5,titleid:8},module:"playlist.PlayListPlazaServer"}}}}).then(function(t){return r.a.resolve(t.data)})},e.c=function(t){var e=s()({},{type:1,json:1,utf8:1,onlysong:0,format:"json",g_tk:5381,loginUin:0,hostUin:0,inCharset:"utf-8",outCharset:"utf-8",notice:0,platform:"yqq",needNewCode:0},u.b,{disstid:t});return l.a.get("/api/getSongList",{params:e}).then(function(t){return r.a.resolve(t.data)})};var i=n("aA9S"),s=n.n(i),o=n("rVsN"),r=n.n(o),a=n("lzic"),u=n("T452"),c=n("2sCs"),l=n.n(c)}});