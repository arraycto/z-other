webpackJsonp([4],{N9Ez:function(t,i,o){t.exports=o.p+"static/img/pic.68d3f2d.jpg"},TYVf:function(t,i,o){"use strict";var n={name:"bin-popup",data:function(){return{isVisible:!1}},props:{autoHide:{type:Boolean,default:!0},hideTime:{type:Number,default:1e3},mask:{type:Boolean,default:!0},content:{type:String,default:"default popup"}},methods:{show:function(){var t=this;this.isVisible=!0,this.autoHide&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){t.hide()},this.hideTime+400))},hide:function(){this.isVisible=!1},maskClick:function(t){this.$emit("mask-click",t)}}},s={render:function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("transition",{attrs:{name:"show"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.isVisible,expression:"isVisible"}],staticClass:"bin-popup"},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.mask,expression:"mask"}],staticClass:"bin-popup-mask",on:{click:t.maskClick}},[t._t("mask")],2),t._v(" "),t._t("default",[o("div",{staticClass:"bin-popup-content"},[t._v("\n        "+t._s(t.content)+"\n      ")])])],2)])},staticRenderFns:[]};var e=o("VU/8")(n,s,!1,function(t){o("kDq5")},"data-v-7e0d2f14",null);i.a=e.exports},XNsT:function(t,i){},"gg+r":function(t,i){},kDq5:function(t,i){},rZBO:function(t,i,o){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n={props:{options:{type:Object,default:function(){return{type:"alert",title:"我是标题",content:"我是内容",icon:"icon-warn_fill",confirmBtn:{text:"确定",active:!0},cancelBtn:{text:"取消",active:!1},showClose:!1}}}},data:function(){return{showFlag:!1}},methods:{show:function(){this.showFlag=!0},hide:function(){this.showFlag=!1},cancel:function(){this.hide(),this.options.type&&"confirm"===this.options.type&&this.$emit("cancel")},close:function(){this.hide(),this.options.showClose&&this.options.showClose&&this.$emit("close")},confirm:function(){this.hide(),this.options.type&&"confirm"===this.options.type&&this.$emit("confirm")}}},s={render:function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("transition",{attrs:{name:"dialog-fade"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],staticClass:"dialog",on:{click:function(t){t.stopPropagation()}}},[o("div",{staticClass:"dialog-wrapper"},[o("div",{staticClass:"dialog-content"},[t._t("default",[t.options.icon?o("i",{staticClass:"icon",class:t.options.icon}):t._e(),t._v(" "),t.options.showClose?o("i",{staticClass:"icon-close",on:{click:t.close}}):t._e(),t._v(" "),o("h3",{staticClass:"title"},[t._v(t._s(t.options.title))]),t._v(" "),o("p",{staticClass:"content"},[t._v(t._s(t.options.content))])]),t._v(" "),o("div",{staticClass:"operate border-top-1px"},[t.options.cancelBtn&&t.options.cancelBtn.active?o("div",{staticClass:"operate-btn border-right-1px",on:{click:t.cancel}},[t._v("\n            "+t._s(t.options.cancelBtn.text)+"\n          ")]):t._e(),t._v(" "),t.options.confirmBtn&&t.options.confirmBtn.active?o("div",{staticClass:"operate-btn confirm",on:{click:t.confirm}},[t._v("\n            "+t._s(t.options.confirmBtn.text)+"\n          ")]):t._e()])],2)])])])},staticRenderFns:[]};var e={data:function(){return{popupText:"",options:{type:"confirm",title:"我是标题",content:"我是内容",icon:"icon-warn_fill",confirmBtn:{text:"确定",active:!0},cancelBtn:{text:"取消",active:!0}},options3:{type:"alert",title:"我是标题",icon:"icon-warn_fill",confirmBtn:{text:"确定",active:!0},showClose:!0},options4:{type:"alert",confirmBtn:{text:"我知道了",active:!0}}}},methods:{back:function(){this.$router.back()},showDialog:function(t){this.$refs[t].show()},confirm:function(){this.popupText="点击 [确定] 按钮",this.$refs.popup.show()},cancel:function(){this.popupText="点击 [取消] 按钮",this.$refs.popup.show()},close:function(){this.popupText="点击 [关闭] 按钮",this.$refs.popup.show()}},components:{BinDialog:o("VU/8")(n,s,!1,function(t){o("gg+r")},"data-v-16a4051b",null).exports,Popup:o("TYVf").a}},a={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("transition",{attrs:{name:"slide"}},[n("div",{staticClass:"demo"},[n("div",{staticClass:"title border-bottom-1px"},[n("i",{staticClass:"icon-back",on:{click:function(i){t.back()}}}),t._v("dialog\n    ")]),t._v(" "),n("div",{staticClass:"container"},[n("popup",{ref:"popup",attrs:{content:t.popupText}}),t._v(" "),n("div",[n("bin-dialog",{ref:"dialog1"}),t._v(" "),n("button",{on:{click:function(i){t.showDialog("dialog1")}}},[t._v("dialogb - type")])],1),t._v(" "),n("div",[n("bin-dialog",{ref:"dialog2",attrs:{options:t.options},on:{confirm:t.confirm,cancel:t.cancel}}),t._v(" "),n("button",{on:{click:function(i){t.showDialog("dialog2")}}},[t._v("dialog - btn")])],1),t._v(" "),n("div",[n("bin-dialog",{ref:"dialog3",attrs:{options:t.options3},on:{close:t.close}}),t._v(" "),n("button",{on:{click:function(i){t.showDialog("dialog3")}}},[t._v("dialog - with - close")])],1),t._v(" "),n("div",{staticClass:"customer"},[n("bin-dialog",{ref:"dialog4",attrs:{options:t.options4}},[n("img",{staticClass:"pic",attrs:{src:o("N9Ez")}}),t._v(" "),n("h3",{staticClass:"text"},[t._v("slot插入的标题")]),t._v(" "),n("p",{staticClass:"text2"},[t._v("副标题")])]),t._v(" "),n("button",{on:{click:function(i){t.showDialog("dialog4")}}},[t._v("dialog - slot")])],1)],1)])])},staticRenderFns:[]};var c=o("VU/8")(e,a,!1,function(t){o("XNsT")},"data-v-7faaa6d6",null);i.default=c.exports}});