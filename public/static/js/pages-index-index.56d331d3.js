(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"1c6e":function(e,t,n){var a=n("4fc9");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("7902892d",a,!0,{sourceMap:!1,shadowMode:!1})},"347c":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"home",data:function(){return{title:"Hello",counts:[{name:"消防报警",count:12},{name:"故障报警",count:12},{name:"压力液位",count:12},{name:"烟感报警",count:12},{name:"用电报警",count:12}],menu1:[{image:"../../static/menu/waring.png",text:"报警信息"},{image:"../../static/menu/crt.png",text:"网络CRT"},{image:"../../static/menu/set.png",text:"维保"},{image:"../../static/menu/qian.png",text:"增值服务"},{image:"../../static/menu/yangan.png",path:"yangan/yangan",text:"烟感"}],menu2:[{image:"../../static/menu/yali.png",text:"压力"},{image:"../../static/menu/yeweitu.png",text:"液位"},{image:"../../static/menu/yongdianliang.png",text:"智慧用电"},{image:"../../static/menu/xiaofang.png",text:"消防设备"},{image:"../../static/menu/all.png",text:"全部"}]}},onLoad:function(){},methods:{openPage:function(e){e.path?uni.navigateTo({url:e.path}):uni.showModal({content:"模块开发中",showCancel:!1})}}};t.default=a},"4fc9":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 伸缩布局容器 */.db[data-v-914dfa4e],.dbv1[data-v-914dfa4e]{display:-webkit-flex;display:-moz-flex;display:-webkit-box;display:-ms-flexbox;display:flex}\n/* 伸缩性 */.dbv1[data-v-914dfa4e],.fx1[data-v-914dfa4e]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}\n/* 伸缩方向为垂直方向 */.dbv1[data-v-914dfa4e],.v[data-v-914dfa4e]{-webkit-box-orient:vertical;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}\n/* 侧轴方向居中对齐 */.vh[data-v-914dfa4e]{display:-webkit-flex;display:-moz-flex;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-align-items:center;-moz-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}\n/* 主轴和侧轴方向居中对齐 */.vm[data-v-914dfa4e]{display:-webkit-flex;display:-moz-flex;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-justify-content:center;-moz-justify-content:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-moz-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.dbv1[data-v-914dfa4e]{height:100%}.menu[data-v-914dfa4e]{padding:%?20?% %?10?%;text-align:center}.menu .uni-flex-item[data-v-914dfa4e]{padding:5px}.menu .uni-flex-item[data-v-914dfa4e]:active{background-color:#e4e4e4}.menu .menu-image[data-v-914dfa4e]{background:#e4e4e4;width:22px!important;padding:11px!important;height:22px!important;-webkit-border-radius:22px!important;border-radius:22px!important}.yangan .popup .uni-mask[data-v-914dfa4e],.yangan .popup .uni-popup[data-v-914dfa4e]{top:%?160?%}.active[data-v-914dfa4e]:active{background-color:#e4e4e4}\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.login uni-input[data-v-914dfa4e]{height:36px!important;line-height:36px!important;font-size:16px}.uni-grid-item-image[data-v-914dfa4e]:nth-of-type(3){background-color:#5f9ea0}.content[data-v-914dfa4e]{background:#f1f1f1}.content .uni-row[data-v-914dfa4e]{height:%?80?%}.content .count[data-v-914dfa4e]{height:%?126?%;padding:%?20?% %?10?%;margin-top:%?20?%;background:#fff;text-align:center}.content .count .text[data-v-914dfa4e]{font-size:%?24?%}.content .count .number[data-v-914dfa4e]{color:red;height:%?80?%;width:%?80?%;margin:0 auto;background:#e4e4e4;-webkit-border-radius:%?10?%;border-radius:%?10?%;margin-bottom:%?6?%}.content .count .number .text[data-v-914dfa4e]{font-size:%?28?%;line-height:%?80?%}.content .info[data-v-914dfa4e]{background:#fff;margin-top:%?20?%;text-align:center}.content .menu-content[data-v-914dfa4e]{padding:%?20?% 0;background:#fff}.content .menu[data-v-914dfa4e]{padding:%?20?% %?10?%;text-align:center}.content .menu .uni-flex-item[data-v-914dfa4e]{padding:5px}.content .menu .uni-flex-item[data-v-914dfa4e]:active{background-color:#e4e4e4}.content .menu .menu-image[data-v-914dfa4e]{width:22px!important;padding:11px!important;height:22px!important;-webkit-border-radius:22px!important;border-radius:22px!important}.content .menu-1[data-v-914dfa4e]{padding-bottom:0}.content .menu-1 .img-0[data-v-914dfa4e]{background:#f25743}.content .menu-1 .img-1[data-v-914dfa4e]{background:#f37e4d}.content .menu-1 .img-2[data-v-914dfa4e]{background:#fec067}.content .menu-1 .img-3[data-v-914dfa4e]{background:#1eb0c3}.content .menu-1 .img-4[data-v-914dfa4e]{background:#8199d2}.content .menu-2 .img-0[data-v-914dfa4e]{background:#1eb0c3}.content .menu-2 .img-1[data-v-914dfa4e]{background:#6dc18c}.content .menu-2 .img-2[data-v-914dfa4e]{background:#a5cb65}.content .menu-2 .img-3[data-v-914dfa4e]{background:#30c29f}.content .menu-2 .img-4[data-v-914dfa4e]{background:#7778ac}',""])},"5d5e":function(e,t,n){"use strict";n.r(t);var a=n("347c"),i=n.n(a);for(var d in a)"default"!==d&&function(e){n.d(t,e,function(){return a[e]})}(d);t["default"]=i.a},"661e":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"menu-content"},[n("v-uni-view",{staticClass:"menu menu-1 uni-flex"},e._l(e.menu1,function(t,a){return n("v-uni-view",{key:a,staticClass:"uni-flex-item",on:{click:function(n){n=e.$handleEvent(n),e.openPage(t)}}},[n("v-uni-view",{},[n("v-uni-image",{staticClass:"menu-image",class:"img-"+a,attrs:{src:t.image,mode:""}})],1),n("v-uni-text",{staticClass:"text"},[e._v(e._s(t.text))])],1)}),1),n("v-uni-view",{staticClass:"menu menu-2 uni-flex"},e._l(e.menu2,function(t,a){return n("v-uni-view",{key:a,staticClass:"uni-flex-item",on:{click:function(n){n=e.$handleEvent(n),e.openPage(t)}}},[n("v-uni-view",{},[n("v-uni-image",{staticClass:"menu-image",class:"img-"+a,attrs:{src:t.image,mode:""}})],1),n("v-uni-text",{staticClass:"text"},[e._v(e._s(t.text))])],1)}),1)],1),n("v-uni-view",{staticClass:"count uni-flex uni-row"},e._l(e.counts,function(t,a){return n("v-uni-view",{key:a,staticClass:"uni-flex-item"},[n("v-uni-view",{staticClass:"number"},[n("v-uni-text",{staticClass:"text"},[e._v(e._s(t.count))])],1),n("v-uni-text",{staticClass:"text"},[e._v(e._s(t.name))])],1)}),1),n("v-uni-view",{staticClass:"info"},[e._v("测试")])],1)},i=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i})},a42d:function(e,t,n){"use strict";n.r(t);var a=n("661e"),i=n("5d5e");for(var d in i)"default"!==d&&function(e){n.d(t,e,function(){return i[e]})}(d);n("e035");var o=n("2877"),c=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,"914dfa4e",null);t["default"]=c.exports},e035:function(e,t,n){"use strict";var a=n("1c6e"),i=n.n(a);i.a}}]);