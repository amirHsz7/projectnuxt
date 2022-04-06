exports.ids = [6];
exports.modules = {

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Posts/index.vue?vue&type=template&id=d3969a4c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container mt-5"},[_vm._ssrNode("<div>","</div>",[_c('NuxtLink',{staticClass:"btn btn-dark mb-3",attrs:{"to":{ name: 'CreatePost' }}},[_vm._v("\n          Create Post\n          ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row g-3\">","</div>",[(_vm.loading)?_vm._ssrNode("<div role=\"status\" class=\"spinner-border\">","</div>",[_vm._ssrNode("<span class=\"visually-hidden\">Loading...</span>")],2):_vm._l((_vm.posts),function(post){return _vm._ssrNode("<div class=\"col-md-4\">","</div>",[_vm._ssrNode("<div class=\"card\">","</div>",[_c('NuxtLink',{staticClass:"card-header",staticStyle:{"text-decoration":"none","color":"black"},attrs:{"to":{ name: 'Posts-id', params: { id: post.id } }}},[_c('div',[_vm._v("\n              "+_vm._s(post.title)+"\n              ")])]),_vm._ssrNode(" <ul class=\"list-group list-group-flush\"><li class=\"list-group-item\">"+_vm._ssrEscape(_vm._s(post.body))+"</li></ul>")],2)])})],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Posts/index.vue?vue&type=template&id=d3969a4c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Posts/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Postsvue_type_script_lang_js_ = ({
  name: 'Posts',

  async asyncData({
    $axios
  }) {
    const temp = await $axios.$get('https://jsonplaceholder.typicode.com/posts');
    return {
      temp
    };
  },

  data() {
    return {
      temp: [],
      posts: [],
      loading: true
    };
  },

  methods: {
    showPosts() {
      this.posts = this.temp;
      this.loading = false;
    }

  },

  created() {
    this.showPosts();
  }

});
// CONCATENATED MODULE: ./pages/Posts/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Postsvue_type_script_lang_js_ = (Postsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/Posts/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Postsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "42b5edec"
  
)

/* harmony default export */ var Posts = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map