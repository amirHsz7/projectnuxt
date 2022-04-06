exports.ids = [7];
exports.modules = {

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Users/_id/index.vue?vue&type=template&id=374ee3dc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div class=\"card\"><div class=\"card-header\" style=\"text-decoration:none;\"><img"+(_vm._ssrAttr("src",_vm.user.image))+" alt=\"...\"> <div id=\"user\">"+_vm._ssrEscape(_vm._s(_vm.user.name))+"</div></div> <ul class=\"list-group list-group-flush\"><li class=\"list-group-item\">"+_vm._ssrEscape("Username : "+_vm._s(_vm.user.username))+"</li> <li class=\"list-group-item\">"+_vm._ssrEscape("Email : "+_vm._s(_vm.user.email))+"</li> <li class=\"list-group-item\">"+_vm._ssrEscape("Phone : "+_vm._s(_vm.user.phone))+"</li></ul></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Users/_id/index.vue?vue&type=template&id=374ee3dc&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Users/_id/index.vue?vue&type=script&lang=js&
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
      user: {},
      loading: true
    };
  },

  async asyncData(context) {
    const user = await context.$axios.$get(`https://60ce519991cc8e00178dcda8.mockapi.io/orders/${context.params.id}`);
    return {
      user
    };
  },

  methods: {
    showUser() {
      ;
      this.loading = false;
    }

  },

  created() {
    this.showUser();
  } // name:"_id"


});
// CONCATENATED MODULE: ./pages/Users/_id/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var Users_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/Users/_id/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Users_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4ae4a6bf"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map