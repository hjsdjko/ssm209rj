(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"0bc8":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n,r,i,u,a){try{var s=e[u](a),o=s.value}catch(l){return void n(l)}s.done?t(o):Promise.resolve(o).then(r,i)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function s(e){u(a,r,i,s,o,"next",e)}function o(e){u(a,r,i,s,o,"throw",e)}s(void 0)}))}}var s={data:function(){return{yonghuxingbieOptions:[],yonghuxingbieIndex:0,jishixingbieOptions:[],jishixingbieIndex:0,ruleForm:{},tableName:""}},onLoad:function(){var t=this;return a(r.default.mark((function n(){var i;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:[],i=e.getStorageSync("loginTable"),t.tableName=i,"yonghu"==t.tableName&&(t.yonghuxingbieOptions="男,女".split(","),t.ruleForm.xingbie=t.yonghuxingbieOptions[0]),"jishi"==t.tableName&&(t.jishixingbieOptions="男,女".split(","),t.ruleForm.xingbie=t.jishixingbieOptions[0]),t.styleChange();case 6:case"end":return n.stop()}}),n)})))()},methods:{yonghuxingbieChange:function(e){this.yonghuxingbieIndex=e.target.value,this.ruleForm.xingbie=this.yonghuxingbieOptions[this.yonghuxingbieIndex]},jishixingbieChange:function(e){this.jishixingbieIndex=e.target.value,this.ruleForm.xingbie=this.jishixingbieOptions[this.jishixingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var e=this;return a(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.ruleForm.zhanghao||"yonghu"!=e.tableName){t.next=3;break}return e.$utils.msg("账号不能为空"),t.abrupt("return");case 3:if(e.ruleForm.mima||"yonghu"!=e.tableName){t.next=6;break}return e.$utils.msg("密码不能为空"),t.abrupt("return");case 6:if(e.ruleForm.xingming||"yonghu"!=e.tableName){t.next=9;break}return e.$utils.msg("姓名不能为空"),t.abrupt("return");case 9:if(e.ruleForm.nianling||"yonghu"!=e.tableName){t.next=12;break}return e.$utils.msg("年龄不能为空"),t.abrupt("return");case 12:if("yonghu"!=e.tableName||!e.ruleForm.nianling||e.$validate.isIntNumer(e.ruleForm.nianling)){t.next=15;break}return e.$utils.msg("年龄应输入整数"),t.abrupt("return");case 15:if(e.ruleForm.shouji||"yonghu"!=e.tableName){t.next=18;break}return e.$utils.msg("手机不能为空"),t.abrupt("return");case 18:if("yonghu"!=e.tableName||!e.ruleForm.shouji||e.$validate.isMobile(e.ruleForm.shouji)){t.next=21;break}return e.$utils.msg("手机应输入手机格式"),t.abrupt("return");case 21:if(e.ruleForm.chepaihao||"yonghu"!=e.tableName){t.next=24;break}return e.$utils.msg("车牌号不能为空"),t.abrupt("return");case 24:if(e.ruleForm.jishizhanghao||"jishi"!=e.tableName){t.next=27;break}return e.$utils.msg("技师账号不能为空"),t.abrupt("return");case 27:if(e.ruleForm.mima||"jishi"!=e.tableName){t.next=30;break}return e.$utils.msg("密码不能为空"),t.abrupt("return");case 30:if(e.ruleForm.jishixingming||"jishi"!=e.tableName){t.next=33;break}return e.$utils.msg("技师姓名不能为空"),t.abrupt("return");case 33:if(e.ruleForm.nianling||"jishi"!=e.tableName){t.next=36;break}return e.$utils.msg("年龄不能为空"),t.abrupt("return");case 36:if("jishi"!=e.tableName||!e.ruleForm.nianling||e.$validate.isIntNumer(e.ruleForm.nianling)){t.next=39;break}return e.$utils.msg("年龄应输入整数"),t.abrupt("return");case 39:if("jishi"!=e.tableName||!e.ruleForm.gongling||e.$validate.isIntNumer(e.ruleForm.gongling)){t.next=42;break}return e.$utils.msg("工龄应输入整数"),t.abrupt("return");case 42:if(e.ruleForm.shouji||"jishi"!=e.tableName){t.next=45;break}return e.$utils.msg("手机不能为空"),t.abrupt("return");case 45:if("jishi"!=e.tableName||!e.ruleForm.shouji||e.$validate.isMobile(e.ruleForm.shouji)){t.next=48;break}return e.$utils.msg("手机应输入手机格式"),t.abrupt("return");case 48:return t.next=50,e.$api.register("".concat(e.tableName),e.ruleForm);case 50:e.$utils.msgBack("注册成功");case 52:case"end":return t.stop()}}),t)})))()}}};t.default=s}).call(this,n("543d")["default"])},3870:function(e,t,n){"use strict";(function(e){n("4e6e");r(n("66fd"));var t=r(n("5fce"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},4232:function(e,t,n){"use strict";var r=n("d3c2"),i=n.n(r);i.a},"46ee":function(e,t,n){"use strict";n.r(t);var r=n("0bc8"),i=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);t["default"]=i.a},"5fce":function(e,t,n){"use strict";n.r(t);var r=n("9e78"),i=n("46ee");for(var u in i)"default"!==u&&function(e){n.d(t,e,(function(){return i[e]}))}(u);n("4232");var a,s=n("f0c5"),o=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"36566ade",null,!1,r["a"],a);t["default"]=o.exports},"9e78":function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return r}));var i=function(){var e=this,t=e.$createElement;e._self._c},u=[]},d3c2:function(e,t,n){}},[["3870","common/runtime","common/vendor"]]]);