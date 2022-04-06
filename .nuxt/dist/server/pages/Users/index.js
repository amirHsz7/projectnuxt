exports.ids = [8,1];
exports.modules = {

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("86b5fc32", content, true, context)
};

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardView_vue_vue_type_style_index_0_id_52f2fcc3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardView_vue_vue_type_style_index_0_id_52f2fcc3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardView_vue_vue_type_style_index_0_id_52f2fcc3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardView_vue_vue_type_style_index_0_id_52f2fcc3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardView_vue_vue_type_style_index_0_id_52f2fcc3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-52f2fcc3]{text-decoration:none}.card-header[data-v-52f2fcc3]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.card[data-v-52f2fcc3]{transition:background-color .3s ease-in}.card[data-v-52f2fcc3]:hover{background-color:#f3f0f0}img[data-v-52f2fcc3]{margin-right:15px;width:50px;height:50px}#user[data-v-52f2fcc3]{color:#000}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("5ac534c5", content, true, context)
};

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CardView.vue?vue&type=template&id=52f2fcc3&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card"},[_c('NuxtLink',{staticClass:"card-header",staticStyle:{"text-decoration":"none"},attrs:{"to":{ name : 'Users-id' , params: { id: _vm.user.id } }}},[_c('img',{staticClass:"rounded-circle",attrs:{"src":_vm.user.image,"alt":"..."}}),_vm._v(" "),_c('div',{attrs:{"id":"user"}},[_vm._v(_vm._s(_vm.user.name))])]),_vm._ssrNode(" <ul class=\"list-group list-group-flush\" data-v-52f2fcc3><li class=\"list-group-item\" data-v-52f2fcc3>"+_vm._ssrEscape("Username : "+_vm._s(_vm.user.username))+"</li> <li class=\"list-group-item\" data-v-52f2fcc3>"+_vm._ssrEscape("Email : "+_vm._s(_vm.user.email))+"</li> <li class=\"list-group-item\" data-v-52f2fcc3>"+_vm._ssrEscape("Phone : "+_vm._s(_vm.user.phone))+"</li></ul>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/CardView.vue?vue&type=template&id=52f2fcc3&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CardView.vue?vue&type=script&lang=js&
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
/* harmony default export */ var CardViewvue_type_script_lang_js_ = ({
  props: {
    user: Object
  }
});
// CONCATENATED MODULE: ./components/CardView.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CardViewvue_type_script_lang_js_ = (CardViewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CardView.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(32)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CardViewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "52f2fcc3",
  "3d35e0d6"
  
)

/* harmony default export */ var CardView = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_38365395_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_38365395_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_38365395_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_38365395_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_38365395_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container[data-v-38365395]{display:flex;flex-wrap:wrap}nav[data-v-38365395]{align-self:flex-end;justify-self:center}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Users/index.vue?vue&type=template&id=38365395&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._l((_vm.users),function(user){return _vm._ssrNode("<div class=\"col-md-4 container2 mb-3\" data-v-38365395>","</div>",[_c('CardView',{attrs:{"user":user}})],1)}),_vm._ssrNode(" <div data-v-38365395><nav aria-label=\"Page navigation example\" data-v-38365395><ul class=\"pagination\" data-v-38365395><li class=\"page-item\" data-v-38365395><button"+(_vm._ssrAttr("disabled",_vm.disablePrev))+" class=\"page-link\" data-v-38365395>Previous</button></li> <li class=\"page-link\" data-v-38365395>"+_vm._ssrEscape(_vm._s(_vm.pageNum))+"</li> <li"+(_vm._ssrAttr("disabled",_vm.disableNext))+" class=\"page-item\" data-v-38365395><button class=\"page-link\" data-v-38365395>Next</button></li></ul></nav></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Users/index.vue?vue&type=template&id=38365395&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Users/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Usersvue_type_script_lang_js_ = ({
  name: "Users",

  data() {
    return {
      disablePrev: true,
      disableNext: false,
      users: [],
      loading: true,
      pageNum: 1,
      breakNext: 0,
      totalRows: 200,
      temp: false,
      currentPage: 1
    };
  },

  async asyncData(contex) {
    const users = await contex.$axios.$get(`https://60ce519991cc8e00178dcda8.mockapi.io/orders?p=${1}&l=${9}`);
    return {
      users
    };
  },

  methods: {
    async getUsers(v) {
      const temp = await this.$axios.get(`https://60ce519991cc8e00178dcda8.mockapi.io/orders?p=${v}&l=${9}`);
      this.users = await temp.data;
      this.breakNext = this.users.length;
      this.loading = false;
      console.log("userssss", this.users);
      console.log('loading', this.loading);
    },

    async handlePrevClick() {
      await this.pageNum--;

      if (this.pageNum >= 2) {
        this.disablePrev = false;
      } else this.disablePrev = true;

      this.getUsers(this.pageNum);
    },

    async handleClick() {
      // if (this.breakNext!==9){
      // return true
      // }
      const temp = await this.$axios.get(`https://60ce519991cc8e00178dcda8.mockapi.io/orders?p=${this.pageNum + 1}&l=${9}`);

      if (temp.data[0]) {
        this.pageNum++;
        this.disablePrev = false;
        this.getUsers(this.pageNum);
      } else {
        this.disableNext = true;
      } // else this.pageNum--
      // this.users = temp.data
      // console.log("users",this.users)

    },

    log() {
      console.log("users", this.users);
    }

  },

  created() {// this.getUsers(1)
  }

});
// CONCATENATED MODULE: ./pages/Users/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Usersvue_type_script_lang_js_ = (Usersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/Users/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(37)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Usersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "38365395",
  "70e881e1"
  
)

/* harmony default export */ var Users = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CardView: __webpack_require__(36).default})


/***/ })

};;
//# sourceMappingURL=index.js.map