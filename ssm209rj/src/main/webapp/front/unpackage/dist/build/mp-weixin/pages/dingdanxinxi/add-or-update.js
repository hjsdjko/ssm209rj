(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/dingdanxinxi/add-or-update"],{"4bc2":function(n,e,a){"use strict";a.d(e,"b",(function(){return t})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var i={wPicker:function(){return Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(a.bind(null,"9318"))}},t=function(){var n=this,e=n.$createElement;n._self._c},r=[]},"667d":function(n,e,a){"use strict";a.r(e);var i=a("4bc2"),t=a("a2a9");for(var r in t)"default"!==r&&function(n){a.d(e,n,(function(){return t[n]}))}(r);a("f284");var u,o=a("f0c5"),c=Object(o["a"])(t["default"],i["b"],i["c"],!1,null,"23e4a558",null,!1,i["a"],u);e["default"]=c.exports},"66f0":function(n,e,a){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=t(a("a34a"));function t(n){return n&&n.__esModule?n:{default:n}}function r(n,e,a,i,t,r,u){try{var o=n[r](u),c=o.value}catch(s){return void a(s)}o.done?e(c):Promise.resolve(c).then(i,t)}function u(n){return function(){var e=this,a=arguments;return new Promise((function(i,t){var u=n.apply(e,a);function o(n){r(u,i,t,o,c,"next",n)}function c(n){r(u,i,t,o,c,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(function(){return resolve(a("9318"))}.bind(null,a)).catch(a.oe)},c={data:function(){return{ruleForm:{dingdanbianhao:this.getUUID(),zhanghao:"",xingming:"",shouji:"",chepaihao:"",dingdanzhuangtai:"",feiyong:"",wanchengshijian:"",jishizhanghao:"",jishixingming:"",cheliangzhaopian:"",sfsh:"",shhf:"",ispay:"",userid:""},dingdanzhuangtaiOptions:[],dingdanzhuangtaiIndex:0,user:{},ro:{dingdanbianhao:!1,zhanghao:!1,xingming:!1,shouji:!1,chepaihao:!1,dingdanzhuangtai:!1,feiyong:!1,wanchengshijian:!1,jishizhanghao:!1,jishixingming:!1,cheliangzhaopian:!1,sfsh:!1,shhf:!1,ispay:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(e){var a=this;return u(i.default.mark((function t(){var r,u,o,c;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a.ruleForm.wanchengshijian=a.$utils.getCurDateTime(),r=n.getStorageSync("nowTable"),t.next=4,a.$api.session(r);case 4:if(u=t.sent,a.user=u.data,a.ruleForm.jishizhanghao=a.user.jishizhanghao,a.ruleForm.jishixingming=a.user.jishixingming,a.dingdanzhuangtaiOptions="未开始,进行中,已完成".split(","),a.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(a.ruleForm.refid=e.refid,a.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){t.next=17;break}return a.ruleForm.id=e.id,t.next=15,a.$api.info("dingdanxinxi",a.ruleForm.id);case 15:u=t.sent,a.ruleForm=u.data;case 17:if(!e.cross){t.next=72;break}o=n.getStorageSync("crossObj"),t.t0=i.default.keys(o);case 20:if((t.t1=t.t0()).done){t.next=72;break}if(c=t.t1.value,"dingdanbianhao"!=c){t.next=26;break}return a.ruleForm.dingdanbianhao=o[c],a.ro.dingdanbianhao=!0,t.abrupt("continue",20);case 26:if("zhanghao"!=c){t.next=30;break}return a.ruleForm.zhanghao=o[c],a.ro.zhanghao=!0,t.abrupt("continue",20);case 30:if("xingming"!=c){t.next=34;break}return a.ruleForm.xingming=o[c],a.ro.xingming=!0,t.abrupt("continue",20);case 34:if("shouji"!=c){t.next=38;break}return a.ruleForm.shouji=o[c],a.ro.shouji=!0,t.abrupt("continue",20);case 38:if("chepaihao"!=c){t.next=42;break}return a.ruleForm.chepaihao=o[c],a.ro.chepaihao=!0,t.abrupt("continue",20);case 42:if("dingdanzhuangtai"!=c){t.next=46;break}return a.ruleForm.dingdanzhuangtai=o[c],a.ro.dingdanzhuangtai=!0,t.abrupt("continue",20);case 46:if("feiyong"!=c){t.next=50;break}return a.ruleForm.feiyong=o[c],a.ro.feiyong=!0,t.abrupt("continue",20);case 50:if("wanchengshijian"!=c){t.next=54;break}return a.ruleForm.wanchengshijian=o[c],a.ro.wanchengshijian=!0,t.abrupt("continue",20);case 54:if("jishizhanghao"!=c){t.next=58;break}return a.ruleForm.jishizhanghao=o[c],a.ro.jishizhanghao=!0,t.abrupt("continue",20);case 58:if("jishixingming"!=c){t.next=62;break}return a.ruleForm.jishixingming=o[c],a.ro.jishixingming=!0,t.abrupt("continue",20);case 62:if("cheliangzhaopian"!=c){t.next=66;break}return a.ruleForm.cheliangzhaopian=o[c],a.ro.cheliangzhaopian=!0,t.abrupt("continue",20);case 66:if("userid"!=c){t.next=70;break}return a.ruleForm.userid=o[c],a.ro.userid=!0,t.abrupt("continue",20);case 70:t.next=20;break;case 72:a.styleChange();case 73:case"end":return t.stop()}}),t)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},wanchengshijianConfirm:function(n){console.log(n),this.ruleForm.wanchengshijian=n.result,this.$forceUpdate()},dingdanzhuangtaiChange:function(n){this.dingdanzhuangtaiIndex=n.target.value,this.ruleForm.dingdanzhuangtai=this.dingdanzhuangtaiOptions[this.dingdanzhuangtaiIndex]},cheliangzhaopianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.cheliangzhaopian=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(i.default.mark((function e(){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n.ruleForm.feiyong||n.$validate.isNumber(n.ruleForm.feiyong)){e.next=3;break}return n.$utils.msg("费用应输入数字"),e.abrupt("return");case 3:if(!n.ruleForm.id){e.next=8;break}return e.next=6,n.$api.update("dingdanxinxi",n.ruleForm);case 6:e.next=10;break;case 8:return e.next=10,n.$api.add("dingdanxinxi",n.ruleForm);case 10:n.$utils.msgBack("提交成功");case 11:case"end":return e.stop()}}),e)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,a=e.getFullYear(),i=e.getMonth()+1,t=e.getDate();return"start"===n?a-=60:"end"===n&&(a+=2),i=i>9?i:"0"+i,t=t>9?t:"0"+t,"".concat(a,"-").concat(i,"-").concat(t)},toggleTab:function(n){this.$refs[n].show()}}};e.default=c}).call(this,a("543d")["default"])},"789a":function(n,e,a){},a2a9:function(n,e,a){"use strict";a.r(e);var i=a("66f0"),t=a.n(i);for(var r in i)"default"!==r&&function(n){a.d(e,n,(function(){return i[n]}))}(r);e["default"]=t.a},c037:function(n,e,a){"use strict";(function(n){a("4e6e");i(a("66fd"));var e=i(a("667d"));function i(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,a("543d")["createPage"])},f284:function(n,e,a){"use strict";var i=a("789a"),t=a.n(i);t.a}},[["c037","common/runtime","common/vendor"]]]);