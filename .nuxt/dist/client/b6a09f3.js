(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{314:function(t,e,n){"use strict";n.r(e);var o=n(32),r=(n(76),{data:function(){return{post:{},loading:!0}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("https://jsonplaceholder.typicode.com/posts/".concat(t.params.id));case 2:return n=e.sent,e.abrupt("return",{post:n});case 4:case"end":return e.stop()}}),e)})))()},methods:{showPost:function(){this.loading=!1},deletePost:function(){this.$axios.delete("https://jsonplaceholder.typicode.com/posts/".concat(this.$route.params.id)).then((function(){alert("Post Deleted")})).catch((function(t){console.log(t)}))}},created:function(){this.showPost()}}),c=n(53),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mt-5"},[t.loading?n("div",{staticClass:"spinner-border",attrs:{role:"status"}},[n("span",{staticClass:"visually-hidden"},[t._v("Loading...")])]):n("div",{staticClass:"col-md-5",attrs:{id:"container"}},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-header"},[t._v("\r\n        "+t._s(t.post.title)+"\r\n      ")]),t._v(" "),n("ul",{staticClass:"list-group list-group-flush"},[n("li",{staticClass:"list-group-item"},[t._v(t._s(t.post.body))])]),t._v(" "),n("div",{staticClass:"card-footer"},[n("button",{staticClass:"btn btn-sm btn-danger me-4",on:{click:t.deletePost}},[t._v("\r\n          Delete\r\n        ")]),t._v(" "),n("NuxtLink",{staticClass:"btn btn-sm btn-dark",attrs:{to:{name:"EditPost",params:{id:t.post.id}}}},[t._v("Edit")])],1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);