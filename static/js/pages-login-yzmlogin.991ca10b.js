(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-yzmlogin"],{"35f0":function(n,t,o){var i=o("24fb");t=i(!1),t.push([n.i,".input .inp[data-v-0c3f08aa]{height:40px}.input[data-v-0c3f08aa]{padding:2%;margin-top:2%}.inp[data-v-0c3f08aa]{height:30px;margin-top:2%}",""]),n.exports=t},"674d":function(n,t,o){var i=o("35f0");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var e=o("4f06").default;e("d217d8a4",i,!0,{sourceMap:!1,shadowMode:!1})},"74ca":function(n,t,o){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{phone:"",Verification:""}},onLoad:function(){},methods:{aaa:function(){var n=/^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\d{8}$/;n.test(this.phone)||(uni.showToast({icon:"none",title:"请输入正确的11位手机号"}),this.phone="")},bbb:function(){var n=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;n.test(this.password)||(uni.showToast({icon:"none",title:"请输入6-12位密码"}),this.password="")},yzm:function(){var t=this;0==this.phone.length?uni.showToast({icon:"none",title:"请输入正确的11位手机号"}):uni.$u.http.post("/user/sendSms",{mobile:this.phone,type:"login"}).then((function(o){n.log(o),"验证码已发送,请注意查收"==o.data.msg?t.Verification=o.data.data:(uni.showToast({icon:"none",title:o.data.msg}),t.phone="",t.Verification="")}))},yes:function(){var t=this;uni.$u.http.post("/user/code_login",{username:this.phone,vercode:this.Verification}).then((function(o){n.log(o),0==o.data.code?(uni.setStorageSync("token",o.data.token),uni.setStorageSync("uid",o.data.uid),uni.setStorageSync("tokentime",o.data.tokenExpired),setTimeout((function(){uni.showToast({title:"登录成功",icon:"none",duration:1e3}),uni.reLaunch({url:"/pages/index/index"},1100)}))):(uni.showToast({icon:"none",title:o.data.msg}),setTimeout((function(){t.phone="",t.password=""})))}))}}};t.default=o}).call(this,o("5a52")["default"])},8586:function(n,t,o){"use strict";o.d(t,"b",(function(){return e})),o.d(t,"c",(function(){return a})),o.d(t,"a",(function(){return i}));var i={"u-Input":o("edd1").default},e=function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("v-uni-view",{staticClass:"input"},[o("u--input",{staticClass:"inp",attrs:{placeholder:"请输入手机号",prefixIcon:"phone",prefixIconStyle:"font-size: 22px;color: #FDD100",maxlength:"11"},on:{blur:function(t){arguments[0]=t=n.$handleEvent(t),n.aaa.apply(void 0,arguments)}},model:{value:n.phone,callback:function(t){n.phone=t},expression:"phone"}}),o("u--input",{staticClass:"inp",attrs:{placeholder:"请输入验证码",prefixIcon:"checkmark-circle",prefixIconStyle:"font-size: 22px;color: #FDD100"},model:{value:n.Verification,callback:function(t){n.Verification=t},expression:"Verification"}}),o("v-uni-button",{staticStyle:{"background-color":"#FDD100",color:"#fff"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.yzm.apply(void 0,arguments)}}},[n._v("发送验证码")]),o("v-uni-button",{staticStyle:{"margin-top":"5%","background-color":"#FDD100",color:"#fff"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.yes.apply(void 0,arguments)}}},[n._v("登入")])],1)},a=[]},a353:function(n,t,o){"use strict";o.r(t);var i=o("74ca"),e=o.n(i);for(var a in i)"default"!==a&&function(n){o.d(t,n,(function(){return i[n]}))}(a);t["default"]=e.a},dfa9:function(n,t,o){"use strict";var i=o("674d"),e=o.n(i);e.a},fb21:function(n,t,o){"use strict";o.r(t);var i=o("8586"),e=o("a353");for(var a in e)"default"!==a&&function(n){o.d(t,n,(function(){return e[n]}))}(a);o("dfa9");var c,u=o("f0c5"),s=Object(u["a"])(e["default"],i["b"],i["c"],!1,null,"0c3f08aa",null,!1,i["a"],c);t["default"]=s.exports}}]);