webpackJsonp([2],{KYIY:function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.userId,expression:"userId"}],attrs:{type:"text"},domProps:{value:e.userId},on:{input:function(t){t.target.composing||(e.userId=t.target.value)}}}),r("button",{on:{click:e.onLoadUser}},[e._v("Load User")])])};s._withStripped=!0;var n={render:s,staticRenderFns:[]};t.a=n},MIHF:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("Ttjz"),n=r("KYIY"),u=r("VU/8")(s.a,n.a,!1,null,null,null);u.options.__file="pages\\users\\index.vue",t.default=u.exports},Ttjz:function(e,t,r){"use strict";t.a={data:function(){return{userId:""}},methods:{onLoadUser:function(){this.$router.push("/users"+this.userIdS)}}}}});