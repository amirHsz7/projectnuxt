(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{312:function(t,e,n){"use strict";n.r(e);var r=n(32),o=(n(76),{name:"Posts",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,e.next=3,n.$get("https://jsonplaceholder.typicode.com/posts");case 3:return r=e.sent,e.abrupt("return",{temp:r});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{temp:[],posts:[],loading:!0}},methods:{showPosts:function(){this.posts=this.temp,this.loading=!1}},created:function(){this.showPosts()}}),c=n(53),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mt-5"},[n("div",[n("NuxtLink",{staticClass:"btn btn-dark mb-3",attrs:{to:{name:"CreatePost"}}},[t._v("\n          Create Post\n          ")])],1),t._v(" "),n("div",{staticClass:"row g-3"},[t.loading?n("div",{staticClass:"spinner-border",attrs:{role:"status"}},[n("span",{staticClass:"visually-hidden"},[t._v("Loading...")])]):t._l(t.posts,(function(e){return n("div",{key:e.id,staticClass:"col-md-4"},[n("div",{staticClass:"card"},[n("NuxtLink",{staticClass:"card-header",staticStyle:{"text-decoration":"none",color:"black"},attrs:{to:{name:"Posts-id",params:{id:e.id}}}},[n("div",[t._v("\n              "+t._s(e.title)+"\n              ")])]),t._v(" "),n("ul",{staticClass:"list-group list-group-flush"},[n("li",{staticClass:"list-group-item"},[t._v(t._s(e.body))])])],1)])}))],2)])}),[],!1,null,null,null);e.default=component.exports}}]);