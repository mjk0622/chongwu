(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-product"],{"1cad":function(t,e,i){var n=i("6c6d");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("aeae4f80",n,!0,{sourceMap:!1,shadowMode:!1})},"3f47":function(t,e,i){"use strict";i.r(e);var n=i("d290"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},4534:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{value:{type:[String,Number],default:uni.$u.props.rate.value},count:{type:[String,Number],default:uni.$u.props.rate.count},disabled:{type:Boolean,default:uni.$u.props.rate.disabled},readonly:{type:Boolean,default:uni.$u.props.rate.readonly},size:{type:[String,Number],default:uni.$u.props.rate.size},inactiveColor:{type:String,default:uni.$u.props.rate.inactiveColor},activeColor:{type:String,default:uni.$u.props.rate.activeColor},gutter:{type:[String,Number],default:uni.$u.props.rate.gutter},minCount:{type:[String,Number],default:uni.$u.props.rate.minCount},allowHalf:{type:Boolean,default:uni.$u.props.rate.allowHalf},activeIcon:{type:String,default:uni.$u.props.rate.activeIcon},inactiveIcon:{type:String,default:uni.$u.props.rate.inactiveIcon},touchable:{type:Boolean,default:uni.$u.props.rate.touchable}}};e.default=n},"482c":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uRate:i("7fef").default,uPopup:i("0c18").default,uNumberBox:i("91f2").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container",attrs:{id:"container"}},[i("v-uni-view",{staticClass:"top",class:t.scrolle>=200?"top2":"top"},[i("v-uni-view",{staticClass:"titleLeftButton"},[i("v-uni-text",{staticClass:"iconfont icon-zuojiantou",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fh.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"txt",style:t.scrolle>=200?"txt":""},[i("v-uni-view",{staticClass:"title-item",class:t.scrolle>=200?"title-item":"title-item2",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pl("#sp")}}},[t._v("商品")]),i("v-uni-view",{staticClass:"title-item",class:t.scrolle>=200?"title-item":"title-item2",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pl("#pl")}}},[t._v("评论")]),i("v-uni-view",{staticClass:"title-item",class:t.scrolle>=200?"title-item":"title-item2",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pl("#xq")}}},[t._v("详情")])],1),i("v-uni-view",{staticClass:"titleLeftButton"},[i("v-uni-text",{staticClass:"iconfont icon-gouwuche",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.btns.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",{staticClass:"firstPart",attrs:{id:"sp"}},[i("v-uni-view",{staticClass:"swiper-wrapper"},[i("v-uni-swiper",{attrs:{"indicator-dots":"true","indicator-active-color":"#666",autoplay:"true",circular:"true",interval:"1000"}},t._l(t.xq.banner,(function(e){return i("v-uni-swiper-item",[i("v-uni-image",{attrs:{src:e,mode:""},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.previewSqs(e)}}})],1)})),1)],1),i("v-uni-view",{staticClass:"goods-info"},[i("v-uni-view",{staticClass:"goods-price"},[i("v-uni-text",{staticClass:"price"},[i("v-uni-text",[t._v("￥")]),t._v(t._s(t.xq.price))],1),i("v-uni-text",{staticClass:"through-price"},[t._v("￥"+t._s(t.xq.old_price))])],1),i("v-uni-view",{staticClass:"goods-title"},[t._v(t._s(t.xq.name))]),i("v-uni-view",{staticClass:"sales"},[i("v-uni-text",[t._v("快递:包邮")]),i("v-uni-text",[t._v("月销"+t._s(t.xq.sales))])],1)],1)],1),i("v-uni-view",{staticClass:"evaluate",attrs:{id:"pl"}},[i("v-uni-view",{staticClass:"evaluate_title"},[i("v-uni-view",{staticClass:"title_name"},[i("v-uni-text",{staticStyle:{"font-size":"40rpx"}},[t._v("评价")]),i("v-uni-text",{staticStyle:{"font-size":"40rpx"}},[t._v(t._s(t.count))])],1),i("v-uni-view",{staticClass:"title_goto",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.view.apply(void 0,arguments)}}},[i("v-uni-text",{staticStyle:{"font-size":"35rpx"}},[t._v("查看更多")]),i("v-uni-text",{staticClass:"iconfont icon-qianwang"})],1)],1),t._l(t.comment,(function(e){return i("v-uni-view",{staticClass:"evaluate_con"},[i("v-uni-view",{staticClass:"con_title"},[i("v-uni-image",{attrs:{src:e.userInfo.avatar?e.userInfo.avatar:"../../static/my/001.png",mode:""}}),i("v-uni-text",{staticClass:"Name"},[t._v(t._s(e.userInfo.nickname?e.userInfo.nickname:e.userInfo.username))]),i("u-rate",{attrs:{count:t.count},model:{value:e.score,callback:function(i){t.$set(e,"score",i)},expression:"item.score"}})],1),i("v-uni-view",{staticClass:"con_con"},[t._v(t._s(e.content))]),i("v-uni-view",{staticStyle:{width:"100%",height:"150rpx",display:"flex"}},[i("v-uni-image",{staticStyle:{width:"150rpx",height:"150rpx"},attrs:{src:e.images?e.images:"",mode:""},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.img(e.images)}}})],1)],1)}))],2),i("v-uni-view",{staticClass:"goods-detail",attrs:{id:"xq"}},[i("v-uni-view",{staticClass:"title"},[i("v-uni-view",{staticClass:"title_name"},[i("v-uni-text",{staticStyle:{"font-size":"40upx","font-weight":"700"}},[t._v("图文详情")])],1)],1),i("v-uni-view",{staticClass:"html"},[i("v-uni-rich-text",{attrs:{nodes:t.xq.desc}})],1)],1),i("v-uni-view",{staticClass:"footer"},[i("v-uni-view",{staticClass:"sc",staticStyle:{width:"200rpx","text-align":"center"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sc.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"iconfont icon-aixin1",style:0==t.scs.is_fav?"font-size: 42rpx;":"font-size: 42rpx;color:red;"}),i("br"),i("v-uni-text",[t._v("收藏")])],1),i("v-uni-view",{staticClass:"btn cart",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.gogw.apply(void 0,arguments)}}},[t._v("加入购物车")]),i("u-popup",{attrs:{show:t.show,customStyle:"border-top-left-radius:10upx ;border-top-right-radius:10upx ;"},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"gogw"},[t.table[0]?i("v-uni-view",{staticClass:"tcc"},[i("v-uni-view",{staticClass:"left"},[i("v-uni-view",{staticClass:"img"},[i("v-uni-image",{attrs:{src:t.xq.img,mode:""}})],1)],1),t._l(t.table,(function(e,n){return i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.active==n,expression:"active==index"}],key:n,staticClass:"right"},[i("v-uni-view",{},[i("v-uni-text",[t._v("￥"+t._s(e.price))]),i("br"),i("v-uni-text",[t._v("库存:"+t._s(e.stock))]),i("br"),i("v-uni-text",[t._v("已选:"+t._s(e.text[0])+t._s(e.text[1]))])],1),i("v-uni-view",{staticClass:"iconfont icon-yuancha",staticStyle:{"font-size":"50upx","margin-right":"20upx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}})],1)}))],2):i("v-uni-view",{staticClass:"tcc"},[i("v-uni-view",{staticClass:"left"},[i("v-uni-view",{staticClass:"img"},[i("v-uni-image",{attrs:{src:t.xq.img,mode:""}})],1)],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-view",{},[i("v-uni-text",[t._v("￥"+t._s(t.xq.price))]),i("br"),i("v-uni-text",[t._v("库存:"+t._s(t.xq.stock))]),i("br"),i("v-uni-text",[t._v("已选:暂无规格")])],1),i("v-uni-view",{staticClass:"iconfont icon-yuancha",staticStyle:{"font-size":"50upx","margin-right":"20upx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}})],1)],1),t.xq.attr.length>0?i("v-uni-view",{staticClass:"guig"},[i("v-uni-text",[t._v("规格")]),i("br"),i("v-uni-view",{staticClass:"numb"},t._l(t.table,(function(e,n){return i("v-uni-view",{key:n,staticClass:"nums",class:t.active==n?"nums2":"nums",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.lop(n)}}},[t._v(t._s(e.text[0]))])})),1)],1):t._e(),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.xq.attr.length>=2,expression:"xq.attr.length>=2"}],staticClass:"guig"},[i("v-uni-text",[t._v("尺寸")]),i("br"),i("v-uni-view",{staticClass:"numb"},t._l(t.table,(function(e,n){return i("v-uni-view",{key:n,staticClass:"nums",class:t.active==n?"nums2":"nums",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.lop(n)}}},[t._v(t._s(e.text[1]))])})),1)],1),t.xq.attr?i("v-uni-view",{staticClass:" num",class:t.xq.attr.length>=2?"num2":"num"},[i("v-uni-view",{},[t._v("数量")]),i("v-uni-view",{},[i("u-number-box",{on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.valChange.apply(void 0,arguments)}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)],1):t._e(),i("v-uni-button",{staticStyle:{"background-color":"gold"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.btn.apply(void 0,arguments)}}},[t._v("确定")])],1)],1),i("v-uni-view",{staticClass:"btn buy"},[t._v("立即购买")])],1)],1)},o=[]},5703:function(t,e,i){"use strict";i.r(e);var n=i("9555"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"6c6d":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-c0161e30], uni-scroll-view[data-v-c0161e30], uni-swiper-item[data-v-c0161e30]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-rate[data-v-c0161e30]{display:flex;flex-direction:row;align-items:center;margin:0;padding:0;touch-action:none}.u-rate__content[data-v-c0161e30]{display:flex;flex-direction:row}.u-rate__content__item[data-v-c0161e30]{position:relative}.u-rate__content__item__icon-wrap--half[data-v-c0161e30]{position:absolute;overflow:hidden;top:0;left:0}.u-icon[data-v-c0161e30]{box-sizing:border-box}',""]),t.exports=e},"7fef":function(t,e,i){"use strict";i.r(e);var n=i("c0d2"),a=i("3f47");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("e3ee");var c,s=i("f0c5"),r=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"c0161e30",null,!1,n["a"],c);e["default"]=r.exports},"91f2":function(t,e,i){"use strict";i.r(e);var n=i("ec6b"),a=i("d920");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("e764");var c,s=i("f0c5"),r=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"44254ce5",null,!1,n["a"],c);e["default"]=r.exports},9555:function(t,e,i){"use strict";(function(t){var n=i("4ea4");i("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("ade3")),o=(i("e143"),{data:function(){var t;return t={headerActive:!1,show:!1,active:0,scrolle:0,value:0,price:0,num:1,count:1},(0,a.default)(t,"value",2),(0,a.default)(t,"attr",""),(0,a.default)(t,"gg",""),(0,a.default)(t,"type","add_cart"),(0,a.default)(t,"sctop",""),(0,a.default)(t,"table",[]),(0,a.default)(t,"scs",{}),(0,a.default)(t,"xq",{attr:[]}),(0,a.default)(t,"count",""),(0,a.default)(t,"comment",[]),(0,a.default)(t,"result",[]),(0,a.default)(t,"scid",""),t},onLoad:function(e){var i=this;t.log(e.id),this.scid=e.id,this.xqy(),uni.$u.http.post("/api/get_goods_comment",{goods_id:e.id,skip:"0",limit:10}).then((function(e){t.log(e.data.data),i.count=e.data.count,i.comment=e.data.data}))},onPageScroll:function(t){this.scrolle=t.scrollTop},methods:{xqy:function(){var e=this;uni.$u.http.post("/api/get_goods_detail",{goods_id:this.scid,uid:uni.getStorageSync("uid")}).then((function(i){t.log(i.data),e.table=i.data.data[0].table,e.xq=i.data.data[0],e.scs=i.data}))},previewSqs:function(e){t.log(e);for(var i=e,n=[],a=0;a<this.xq.banner.length;a++)n.push(this.xq.banner[a]);uni.previewImage({current:i,urls:n})},img:function(t){var e=t,i=[t];uni.previewImage({current:e,urls:i})},sc:function(){var t=this;0==this.scs.is_fav?uni.$u.http.post("/api/toggle_fav",{goods_id:this.scid,uid:uni.getStorageSync("uid"),is_fav:"0"}).then((function(e){1==e.data.code&&(uni.showToast({title:e.data.msg,icon:"none"}),t.xqy())})):uni.$u.http.post("/api/toggle_fav",{goods_id:this.scid,uid:uni.getStorageSync("uid"),is_fav:"1"}).then((function(e){1==e.data.code&&(uni.showToast({title:e.data.msg,icon:"none"}),t.xqy())}))},view:function(){t.log(this.count),this.count>0?uni.navigateTo({url:"/pages/index/Viewmore?id=".concat(this.scid)}):uni.showToast({title:"暂无评论",icon:"none"})},fh:function(){uni.navigateBack({delta:1})},pl:function(t){uni.createSelectorQuery().select("#container").boundingClientRect((function(e){uni.createSelectorQuery().select(t).boundingClientRect((function(t){uni.pageScrollTo({duration:100,scrollTop:t.top-e.top-100})})).exec()})).exec()},gogw:function(){this.xq.table.length>0?(this.price=this.xq.table[0].price,this.attr=this.xq.table[0].text[0]):(this.price=this.xq.price,this.attr="暂无规格"),this.show=!0},close:function(){this.show=!1},lop:function(t){this.active=t,this.xq.table.length>0?(this.price=this.xq.table[t].price,this.attr=this.xq.table[t].text[0]):(this.price=this.xq.price,this.attr="暂无规格")},valChange:function(t){this.num=t.value},btn:function(){var e=this;uni.$u.http.post("/api/add_cart",{goods_id:this.scid,uid:uni.getStorageSync("uid"),name:this.xq.name,price:this.price,img:this.xq.img,num:this.num,attr:this.attr,type:this.type}).then((function(i){t.log(i.data),1==i.data.code?(uni.showToast({title:"加入成功",icon:"success",duration:1e3}),setTimeout((function(){uni.switchTab({url:"/pages/shopping/shopping"})}),1e3),uni.setStorageSync("suo",!0),e.show=!1):uni.showToast({title:i.data.msg,icon:"none"})}))},btns:function(){uni.switchTab({url:"/pages/shopping/shopping"})}}});e.default=o}).call(this,i("5a52")["default"])},"9be0":function(t,e,i){var n=i("e0a8");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("03804b08",n,!0,{sourceMap:!1,shadowMode:!1})},"9f8a":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{name:{type:[String,Number],default:uni.$u.props.numberBox.name},value:{type:[String,Number],default:uni.$u.props.numberBox.value},min:{type:[String,Number],default:uni.$u.props.numberBox.min},max:{type:[String,Number],default:uni.$u.props.numberBox.max},step:{type:[String,Number],default:uni.$u.props.numberBox.step},integer:{type:Boolean,default:uni.$u.props.numberBox.integer},disabled:{type:Boolean,default:uni.$u.props.numberBox.disabled},disabledInput:{type:Boolean,default:uni.$u.props.numberBox.disabledInput},asyncChange:{type:Boolean,default:uni.$u.props.numberBox.asyncChange},inputWidth:{type:[String,Number],default:uni.$u.props.numberBox.inputWidth},showMinus:{type:Boolean,default:uni.$u.props.numberBox.showMinus},showPlus:{type:Boolean,default:uni.$u.props.numberBox.showPlus},decimalLength:{type:[String,Number,null],default:uni.$u.props.numberBox.decimalLength},longPress:{type:Boolean,default:uni.$u.props.numberBox.longPress},color:{type:String,default:uni.$u.props.numberBox.color},buttonSize:{type:[String,Number],default:uni.$u.props.numberBox.buttonSize},bgColor:{type:String,default:uni.$u.props.numberBox.bgColor},cursorSpacing:{type:[String,Number],default:uni.$u.props.numberBox.cursorSpacing},disablePlus:{type:Boolean,default:uni.$u.props.numberBox.disablePlus},disableMinus:{type:Boolean,default:uni.$u.props.numberBox.disableMinus},iconStyle:{type:[Object,String],default:uni.$u.props.numberBox.iconStyle}}};e.default=n},a58d:function(t,e,i){var n=i("a9ed");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("5455e74c",n,!0,{sourceMap:!1,shadowMode:!1})},a9ed:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.html img[data-v-b4c4c976]{width:100%;height:60vh}.container .top[data-v-b4c4c976]{position:fixed;top:0;display:flex;justify-content:space-between;z-index:999;width:100%;height:%?100?%}.container .top2[data-v-b4c4c976]{position:fixed;top:0;display:flex;justify-content:space-between;z-index:999;width:100%;height:%?100?%;border-bottom:1px solid #bbb;background-color:#fff}.container .top .titleLeftButton[data-v-b4c4c976]{width:%?75?%;height:%?70?%;border-radius:50%;background-color:#bbb;margin:%?10?%}.container .top .titleLeftButton uni-text[data-v-b4c4c976]{font-size:%?60?%;color:#fff;line-height:%?70?%;color:#fff}.txt[data-v-b4c4c976]{display:flex;width:100%}.title-item[data-v-b4c4c976]{flex:1;color:#000;font-size:%?40?%;font-weight:500;text-align:center;line-height:%?100?%}.title-item2[data-v-b4c4c976]{display:none}.tcc[data-v-b4c4c976]{display:flex}.tcc .left[data-v-b4c4c976]{width:30%;position:relative}.tcc .left .img[data-v-b4c4c976]{width:80%;position:absolute;top:%?-30?%;left:%?40?%}.tcc .left .img uni-image[data-v-b4c4c976]{width:100%;height:%?180?%}.tcc .right[data-v-b4c4c976]{width:70%;display:flex;justify-content:space-between;margin-top:%?20?%}.tcc .right uni-text[data-v-b4c4c976]{color:#999ba9;margin:%?10?%}.tcc .right uni-text[data-v-b4c4c976]:nth-child(1){color:#fb5248}.gogw .guig[data-v-b4c4c976]{padding:%?20?% %?20?% %?0?% %?20?%;margin-bottom:%?150?%}.gogw .num[data-v-b4c4c976]{display:flex;justify-content:space-between;align-items:center;padding:%?40?%;margin-top:100px}.gogw .num2[data-v-b4c4c976]{display:flex;justify-content:space-between;align-items:center;padding:%?40?%;margin-top:150px}.gogw .guig .numb[data-v-b4c4c976]{padding:%?0?% %?0?% %?10?% %?20?%}.gogw .guig .nums[data-v-b4c4c976]{float:left;height:%?60?%;background-color:#f6f5f5;border-radius:45%;text-align:center;line-height:%?60?%;margin:%?15?%}.gogw .guig .nums2[data-v-b4c4c976]{height:%?60?%;background-color:#ffedec;color:#fb5248;border-radius:45%;text-align:center;line-height:%?60?%;margin:%?15?%}uni-page-body[data-v-b4c4c976]{width:100%;height:100%;background-color:#f5f5f7}uni-page-body .container[data-v-b4c4c976]{background-color:#f5f5f7;height:100%}uni-page-body .container .title-contents[data-v-b4c4c976]{position:fixed;top:0;width:100%;height:calc(0px + %?88?%);z-index:1000;background:hsla(0,0%,100%,0)}uni-page-body .container .title-contents .top-view[data-v-b4c4c976]{width:100%;height:0}uni-page-body .container .title-contents.act[data-v-b4c4c976]{background:#fff;border-bottom:1px solid #eee}uni-page-body .container .title-contents.act .titles .titleRightButton .iconfont[data-v-b4c4c976]{color:#fff}uni-page-body .container .title-contents.act .titles .titleLeftButton .iconfont[data-v-b4c4c976]{color:#fff}uni-page-body .container .title-contents.act .titles .titleText[data-v-b4c4c976]{opacity:1}uni-page-body .container .title-contents .titles[data-v-b4c4c976]{display:flex;flex-direction:row;justify-content:center;height:%?88?%}uni-page-body .container .title-contents .titles .mp-titleLeftButton[data-v-b4c4c976]{width:%?88?%;height:%?88?%}uni-page-body .container .title-contents .titles .titleLeftButton[data-v-b4c4c976]{display:flex;justify-content:center;align-items:center;margin:%?14?%;width:%?60?%;height:%?60?%;line-height:%?60?%;text-align:center;border-radius:50%;background:rgba(0,0,0,.5)}uni-page-body .container .title-contents .titles .titleLeftButton .iconfont[data-v-b4c4c976]{font-size:16px;color:#fff}uni-page-body .container .title-contents .titles .titleText[data-v-b4c4c976]{display:flex;justify-content:space-around;align-items:center;width:%?574?%;height:%?88?%;margin:0 auto;opacity:0}uni-page-body .container .title-contents .titles .titleText .title-item[data-v-b4c4c976]{position:relative;height:%?88?%;line-height:%?88?%;font-size:%?36?%;color:#666}uni-page-body .container .title-contents .titles .titleText .title-item.active[data-v-b4c4c976]{color:#000}uni-page-body .container .title-contents .titles .titleText .title-item.active[data-v-b4c4c976]::after{position:absolute;bottom:0;left:50%;content:" ";margin-left:%?-25?%;width:%?50?%;height:%?6?%}uni-page-body .container .title-contents .titles .titleRightButton[data-v-b4c4c976]{display:flex;justify-content:center;align-items:center;margin:%?14?%;width:%?60?%;height:%?60?%;line-height:%?60?%;text-align:center;border-radius:50%;background:rgba(0,0,0,.5);color:#fff}uni-page-body .container .title-contents .titles .titleRightButton .iconfont[data-v-b4c4c976]{font-size:19px;color:#fff}uni-page-body .container .firstPart .swiper-wrapper[data-v-b4c4c976]{width:100%;min-height:calc(0px + %?88?%)}uni-page-body .container .firstPart .swiper-wrapper uni-swiper[data-v-b4c4c976]{width:100%;height:%?750?%}uni-page-body .container .firstPart .swiper-wrapper uni-swiper uni-image[data-v-b4c4c976]{width:100%;height:%?750?%}uni-page-body .container .firstPart .seckill[data-v-b4c4c976]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:0 %?25?%;box-sizing:border-box;width:100%;height:%?100?%;background:#fb5248}uni-page-body .container .firstPart .seckill .goods-price[data-v-b4c4c976]{display:flex;flex-direction:row;align-items:center;height:%?100?%}uni-page-body .container .firstPart .seckill .goods-price .price[data-v-b4c4c976]{font-size:%?44?%;color:#fff}uni-page-body .container .firstPart .seckill .goods-price .price uni-text[data-v-b4c4c976]{font-size:%?28?%}uni-page-body .container .firstPart .seckill .goods-price uni-view[data-v-b4c4c976]{display:flex;flex-direction:column;justify-content:space-between;margin-left:%?24?%;padding:%?20?% 0;box-sizing:border-box;font-size:%?22?%;color:#fff}uni-page-body .container .firstPart .seckill .goods-price uni-view .through-price[data-v-b4c4c976]{text-decoration:line-through}uni-page-body .container .firstPart .seckill .progress-wrapper[data-v-b4c4c976]{display:flex;flex-direction:column;justify-content:space-between;padding:%?16?% 0 %?22?%;height:%?100?%;box-sizing:border-box;font-size:%?22?%;color:#fee900}uni-page-body .container .firstPart .goods-info[data-v-b4c4c976]{padding:0 %?25?%;box-sizing:border-box;background:#fff;overflow:hidden}uni-page-body .container .firstPart .goods-info .goods-price[data-v-b4c4c976]{line-height:%?84?%}uni-page-body .container .firstPart .goods-info .goods-price .price[data-v-b4c4c976]{font-size:%?36?%;color:#fb5248}uni-page-body .container .firstPart .goods-info .goods-price .price uni-text[data-v-b4c4c976]{font-size:%?24?%}uni-page-body .container .firstPart .goods-info .goods-price .through-price[data-v-b4c4c976]{margin-left:%?30?%;font-size:%?22?%;color:#999;text-decoration:line-through}uni-page-body .container .firstPart .goods-info .goods-title[data-v-b4c4c976]{margin-top:%?20?%;line-height:%?42?%;font-size:%?32?%;color:#111}uni-page-body .container .firstPart .goods-info .sales[data-v-b4c4c976]{display:flex;justify-content:space-between;align-items:center;height:%?84?%;font-size:%?24?%;color:#666}uni-page-body .container .evaluate[data-v-b4c4c976]{margin:%?20?% 0;padding:0 %?25?%;box-sizing:border-box;background-color:#fff}uni-page-body .container .evaluate .evaluate_title[data-v-b4c4c976]{display:flex;justify-content:space-between;align-items:center;height:%?84?%;overflow:hidden}uni-page-body .container .evaluate .evaluate_title .title_name[data-v-b4c4c976]{font-size:%?30?%;font-weight:700}uni-page-body .container .evaluate .evaluate_con[data-v-b4c4c976]{padding-bottom:%?40?%;box-sizing:border-box;font-size:%?28?%}uni-page-body .container .evaluate .evaluate_con .con_title uni-image[data-v-b4c4c976]{width:%?70?%;height:%?70?%;border-radius:50%}uni-page-body .container .evaluate .evaluate_con .con_title .Name[data-v-b4c4c976]{display:inline-block;vertical-align:top;margin-top:%?10?%;margin-left:%?15?%}uni-page-body .container .footer[data-v-b4c4c976]{position:fixed;bottom:0;display:flex;flex-direction:row;align-items:center;width:100%;height:%?94?%;background:#fff}uni-page-body .container .footer .btn[data-v-b4c4c976]{width:50%;line-height:%?94?%;text-align:center;background:#fee900;font-size:%?34?%;color:#fff}uni-page-body .container .footer .btn.buy[data-v-b4c4c976]{background:#fb5248;color:#fff}body.?%PAGE?%[data-v-b4c4c976]{background-color:#f5f5f7}',""]),t.exports=e},acc7:function(t,e,i){"use strict";i.r(e);var n=i("482c"),a=i("5703");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("c691");var c,s=i("f0c5"),r=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"b4c4c976",null,!1,n["a"],c);e["default"]=r.exports},c0d2:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uIcon:i("37d9").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{ref:"u-rate",staticClass:"u-rate",style:[t.$u.addStyle(t.customStyle)],attrs:{id:t.elId}},[i("v-uni-view",{staticClass:"u-rate__content",on:{touchmove:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.touchMove.apply(void 0,arguments)},touchend:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.touchEnd.apply(void 0,arguments)}}},t._l(Number(t.count),(function(e,n){return i("v-uni-view",{key:n,staticClass:"u-rate__content__item",class:[t.elClass]},[i("v-uni-view",{ref:"u-rate__content__item__icon-wrap",refInFor:!0,staticClass:"u-rate__content__item__icon-wrap",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.clickHandler(e,n+1)}}},[i("u-icon",{attrs:{name:Math.floor(t.activeIndex)>n?t.activeIcon:t.inactiveIcon,color:t.disabled?"#c8c9cc":Math.floor(t.activeIndex)>n?t.activeColor:t.inactiveColor,"custom-style":{"padding-left":t.$u.addUnit(t.gutter/2),"padding-right":t.$u.addUnit(t.gutter/2)},size:t.size}})],1),t.allowHalf?i("v-uni-view",{ref:"u-rate__content__item__icon-wrap",refInFor:!0,staticClass:"u-rate__content__item__icon-wrap u-rate__content__item__icon-wrap--half",style:[{width:t.$u.addUnit(t.rateWidth/2)}],on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.clickHandler(e,n+1)}}},[i("u-icon",{attrs:{name:Math.ceil(t.activeIndex)>n?t.activeIcon:t.inactiveIcon,color:t.disabled?"#c8c9cc":Math.ceil(t.activeIndex)>n?t.activeColor:t.inactiveColor,"custom-style":{"padding-left":t.$u.addUnit(t.gutter/2),"padding-right":t.$u.addUnit(t.gutter/2)},size:t.size}})],1):t._e()],1)})),1)],1)},o=[]},c691:function(t,e,i){"use strict";var n=i("a58d"),a=i.n(n);a.a},d290:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var a=n(i("1da1")),o=n(i("4534")),c={name:"u-rate",mixins:[uni.$u.mpMixin,uni.$u.mixin,o.default],data:function(){return{elId:uni.$u.guid(),elClass:uni.$u.guid(),rateBoxLeft:0,activeIndex:this.value,rateWidth:0,moving:!1}},watch:{value:function(t){this.activeIndex=t},activeIndex:"emitEvent"},methods:{init:function(){var t=this;uni.$u.sleep().then((function(){t.getRateItemRect(),t.getRateIconWrapRect()}))},getRateItemRect:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,uni.$u.sleep();case 2:t.$uGetRect("#"+t.elId).then((function(e){t.rateBoxLeft=e.left}));case 3:case"end":return e.stop()}}),e)})))()},getRateIconWrapRect:function(){var t=this;this.$uGetRect("."+this.elClass).then((function(e){t.rateWidth=e.width}))},touchMove:function(t){if(this.touchable){this.preventEvent(t);var e=t.changedTouches[0].pageX;this.getActiveIndex(e)}},touchEnd:function(t){if(this.touchable){this.preventEvent(t);var e=t.changedTouches[0].pageX;this.getActiveIndex(e)}},clickHandler:function(t,e){if("ios"!==uni.$u.os()||!this.moving){this.preventEvent(t);var i=0;i=t.changedTouches[0].pageX,this.getActiveIndex(i,!0)}},emitEvent:function(){this.$emit("change",this.activeIndex),this.$emit("input",this.activeIndex)},getActiveIndex:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!this.disabled&&!this.readonly){var n=this.rateWidth*this.count+this.rateBoxLeft;t=uni.$u.range(this.rateBoxLeft,n,t)-this.rateBoxLeft;var a,o=t;if(this.allowHalf){a=Math.floor(o/this.rateWidth);var c=o%this.rateWidth;c<=this.rateWidth/2&&c>0?a+=.5:c>this.rateWidth/2&&a++}else{a=Math.floor(o/this.rateWidth);var s=o%this.rateWidth;i?s>0&&a++:s>this.rateWidth/2&&a++}this.activeIndex=Math.min(a,this.count),this.activeIndex<this.minCount&&(this.activeIndex=this.minCount),setTimeout((function(){e.moving=!0}),10),setTimeout((function(){e.moving=!1}),10)}}},mounted:function(){this.init()}};e.default=c},d920:function(t,e,i){"use strict";i.r(e);var n=i("f7df"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},e0a8:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-44254ce5], uni-scroll-view[data-v-44254ce5], uni-swiper-item[data-v-44254ce5]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-number-box[data-v-44254ce5]{display:flex;flex-direction:row;align-items:center}.u-number-box__slot[data-v-44254ce5]{touch-action:none}.u-number-box__plus[data-v-44254ce5], .u-number-box__minus[data-v-44254ce5]{width:35px;display:flex;flex-direction:row;justify-content:center;align-items:center;touch-action:none}.u-number-box__plus--hover[data-v-44254ce5], .u-number-box__minus--hover[data-v-44254ce5]{background-color:#e6e6e6!important}.u-number-box__plus--disabled[data-v-44254ce5], .u-number-box__minus--disabled[data-v-44254ce5]{color:#c8c9cc;background-color:#f7f8fa}.u-number-box__plus[data-v-44254ce5]{border-top-right-radius:4px;border-bottom-right-radius:4px}.u-number-box__minus[data-v-44254ce5]{border-top-left-radius:4px;border-bottom-left-radius:4px}.u-number-box__input[data-v-44254ce5]{position:relative;text-align:center;font-size:15px;padding:0;margin:0 2px;display:flex;flex-direction:row;align-items:center;justify-content:center}.u-number-box__input--disabled[data-v-44254ce5]{color:#c8c9cc;background-color:#f2f3f5}',""]),t.exports=e},e3ee:function(t,e,i){"use strict";var n=i("1cad"),a=i.n(n);a.a},e764:function(t,e,i){"use strict";var n=i("9be0"),a=i.n(n);a.a},ec6b:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uIcon:i("37d9").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-number-box"},[t.showMinus&&t.$slots.minus?i("v-uni-view",{staticClass:"u-number-box__slot",on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.onTouchStart("minus")},touchend:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.clearTimeout.apply(void 0,arguments)},click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.clickHandler("minus")}}},[t._t("minus")],2):t.showMinus?i("v-uni-view",{staticClass:"u-number-box__minus",class:{"u-number-box__minus--disabled":t.isDisabled("minus")},style:[t.buttonStyle("minus")],attrs:{"hover-class":"u-number-box__minus--hover","hover-stay-time":"150"},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.onTouchStart("minus")},touchend:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.clearTimeout.apply(void 0,arguments)},click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.clickHandler("minus")}}},[i("u-icon",{attrs:{name:"minus",color:t.isDisabled("minus")?"#c8c9cc":"#323233",size:"15",bold:!0,customStyle:t.iconStyle}})],1):t._e(),t._t("input",[i("v-uni-input",{staticClass:"u-number-box__input",class:{"u-number-box__input--disabled":t.disabled||t.disabledInput},style:[t.inputStyle],attrs:{disabled:t.disabledInput||t.disabled,"cursor-spacing":t.getCursorSpacing,type:"number"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.onBlur.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.onInput.apply(void 0,arguments)}},model:{value:t.currentValue,callback:function(e){t.currentValue=e},expression:"currentValue"}})]),t.showPlus&&t.$slots.plus?i("v-uni-view",{staticClass:"u-number-box__slot",on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.onTouchStart("plus")},touchend:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.clearTimeout.apply(void 0,arguments)},click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.clickHandler("plus")}}},[t._t("plus")],2):t.showPlus?i("v-uni-view",{staticClass:"u-number-box__plus",class:{"u-number-box__minus--disabled":t.isDisabled("plus")},style:[t.buttonStyle("plus")],attrs:{"hover-class":"u-number-box__plus--hover","hover-stay-time":"150"},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.onTouchStart("plus")},touchend:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.clearTimeout.apply(void 0,arguments)},click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.clickHandler("plus")}}},[i("u-icon",{attrs:{name:"plus",color:t.isDisabled("plus")?"#c8c9cc":"#323233",size:"15",bold:!0,customStyle:t.iconStyle}})],1):t._e()],2)},o=[]},f7df:function(t,e,i){"use strict";var n=i("4ea4");i("99af"),i("4de4"),i("c975"),i("fb6a"),i("d3b7"),i("ac1f"),i("25f0"),i("5319"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("5530")),o=n(i("9f8a")),c={name:"u-number-box",mixins:[uni.$u.mpMixin,uni.$u.mixin,o.default],data:function(){return{currentValue:"",longPressTimer:null}},watch:{watchChange:function(t){this.check()},value:function(t){t!==this.currentValue&&(this.currentValue=this.format(this.value))}},computed:{getCursorSpacing:function(){return uni.$u.getPx(this.cursorSpacing)},buttonStyle:function(){var t=this;return function(e){var i={backgroundColor:t.bgColor,height:uni.$u.addUnit(t.buttonSize),color:t.color};return t.isDisabled(e)&&(i.backgroundColor="#f7f8fa"),i}},inputStyle:function(){this.disabled||this.disabledInput;var t={color:this.color,backgroundColor:this.bgColor,height:uni.$u.addUnit(this.buttonSize),width:uni.$u.addUnit(this.inputWidth)};return t},watchChange:function(){return[this.integer,this.decimalLength,this.min,this.max]},isDisabled:function(){var t=this;return function(e){return"plus"===e?t.disabled||t.disablePlus||t.currentValue>=t.max:t.disabled||t.disableMinus||t.currentValue<=t.min}}},mounted:function(){this.init()},methods:{init:function(){this.currentValue=this.format(this.value)},format:function(t){return t=this.filter(t),t=""===t?0:+t,t=Math.max(Math.min(this.max,t),this.min),null!==this.decimalLength&&(t=t.toFixed(this.decimalLength)),t},filter:function(t){return t=String(t).replace(/[^0-9.-]/g,""),this.integer&&-1!==t.indexOf(".")&&(t=t.split(".")[0]),t},check:function(){var t=this.format(this.currentValue);t!==this.currentValue&&(this.currentValue=t)},onFocus:function(t){this.$emit("focus",(0,a.default)((0,a.default)({},t.detail),{},{name:this.name}))},onBlur:function(t){this.format(t.detail.value);this.$emit("blur",(0,a.default)((0,a.default)({},t.detail),{},{name:this.name}))},onInput:function(t){var e=t.detail||{},i=e.value,n=void 0===i?"":i;if(""!==n){var a=this.filter(n);if(null!==this.decimalLength&&-1!==a.indexOf(".")){var o=a.split(".");a="".concat(o[0],".").concat(o[1].slice(0,this.decimalLength))}a=this.format(a),this.emitChange(a)}},emitChange:function(t){var e=this;this.asyncChange||this.$nextTick((function(){e.$emit("input",t),e.currentValue=t,e.$forceUpdate()})),this.$emit("change",{value:t,name:this.name})},onChange:function(){var t=this.type;if(this.isDisabled(t))return this.$emit("overlimit",t);var e="minus"===t?-this.step:+this.step,i=this.format(this.add(+this.currentValue,e));this.emitChange(i),this.$emit(t)},add:function(t,e){var i=Math.pow(10,10);return Math.round((t+e)*i)/i},clickHandler:function(t){this.type=t,this.onChange()},longPressStep:function(){var t=this;this.clearTimeout(),this.longPressTimer=setTimeout((function(){t.onChange(),t.longPressStep()}),250)},onTouchStart:function(t){var e=this;this.longPress&&(this.clearTimeout(),this.type=t,this.longPressTimer=setTimeout((function(){e.onChange(),e.longPressStep()}),600))},onTouchEnd:function(){this.longPress&&this.clearTimeout()},clearTimeout:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){clearTimeout(this.longPressTimer),this.longPressTimer=null}))}};e.default=c}}]);