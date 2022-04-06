exports.ids = [5];
exports.modules = {

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Posts/_id/index.vue?vue&type=template&id=3603ae1a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container mt-5"},[(_vm.loading)?_vm._ssrNode("<div role=\"status\" class=\"spinner-border\">","</div>",[_vm._ssrNode("<span class=\"visually-hidden\">Loading...</span>")],2):_vm._ssrNode("<div id=\"container\" class=\"col-md-5\">","</div>",[_vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-header\">"+_vm._ssrEscape("\r\n        "+_vm._s(_vm.post.title)+"\r\n      ")+"</div> <ul class=\"list-group list-group-flush\"><li class=\"list-group-item\">"+_vm._ssrEscape(_vm._s(_vm.post.body))+"</li></ul> "),_vm._ssrNode("<div class=\"card-footer\">","</div>",[_vm._ssrNode("<button class=\"btn btn-sm btn-danger me-4\">\r\n          Delete\r\n        </button> "),_c('NuxtLink',{staticClass:"btn btn-sm btn-dark",attrs:{"to":{ name : 'EditPost', params: { id: _vm.post.id } }}},[_vm._v("Edit")])],2)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Posts/_id/index.vue?vue&type=template&id=3603ae1a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Posts/_id/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  data() {
    return {
      post: {},
      loading: true
    };
  },

  async asyncData(context) {
    const post = await context.$axios.$get(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    return {
      post
    };
  },

  methods: {
    showPost() {
      ;
      this.loading = false;
    },

    deletePost() {
      this.$axios.delete(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`).then(() => {
        alert("Post Deleted");
      }).catch(function (error) {
        console.log(error);
      });
    }

  },

  created() {
    this.showPost();
  } // name:"_id"


});
// CONCATENATED MODULE: ./pages/Posts/_id/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var Posts_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/Posts/_id/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Posts_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "60b7154a"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map