exports.ids = [3,2];
exports.modules = {

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PostForm.vue?vue&type=template&id=50951b14&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{on:{"submit":function($event){$event.preventDefault();return _vm.validate.apply(null, arguments)}}},[_vm._ssrNode("<div class=\"mb-3\"><label class=\"form-label\">Title</label> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.form.title)))+" class=\"form-control\"> <div class=\"form-text text-danger\">"+_vm._ssrEscape("\n      "+_vm._s(_vm.form.titleErrorText)+"\n    ")+"</div></div> <div class=\"mb-3\"><label class=\"form-label\">Body</label> <textarea rows=\"6\" class=\"form-control\"></textarea> <div class=\"form-text text-danger\">"+_vm._ssrEscape("\n      "+_vm._s(_vm.form.bodyErrorText)+"\n    ")+"</div></div> <button type=\"submit\""+(_vm._ssrAttr("disabled",_vm.buttonLoading))+" class=\"btn btn-dark\">"+((_vm.buttonLoading)?("<div role=\"status\" class=\"spinner-border spinner-border-sm\"></div>"):"<!---->")+_vm._ssrEscape("\n    "+_vm._s(_vm.buttonText)+"\n  ")+"</button>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PostForm.vue?vue&type=template&id=50951b14&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PostForm.vue?vue&type=script&lang=js&
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
//
//
/* harmony default export */ var PostFormvue_type_script_lang_js_ = ({
  props: {
    buttonLoading: Boolean,
    buttonText: String,
    post: Object
  },

  data() {
    return {
      form: {
        title: "",
        titleErrorText: "",
        body: "",
        bodyErrorText: ""
      }
    };
  },

  methods: {
    setInput() {
      if (this.$props.post !== undefined) {
        this.form.title = this.$props.post.title;
        this.form.body = this.$props.post.body;
      }
    },

    validate() {
      if (this.form.title === "") {
        this.form.titleErrorText = "Title is required";
      } else {
        this.form.titleErrorText = "";
      }

      if (this.form.body === "") {
        this.form.bodyErrorText = "Body is required";
      } else {
        this.form.bodyErrorText = "";
      }

      if (this.form.title !== "" && this.form.body !== "") {
        this.$emit("formData", this.form);
      }
    }

  },

  created() {
    this.setInput();
  }

});
// CONCATENATED MODULE: ./components/PostForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PostFormvue_type_script_lang_js_ = (PostFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/PostForm.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PostFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "597bcdf6"
  
)

/* harmony default export */ var PostForm = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/CreatePost/index.vue?vue&type=template&id=1d10c4d2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-md-6"},[_vm._ssrNode("<h2 class=\"mb-5\">Create Post :</h2> "),_c('PostForm',{attrs:{"button-loading":_vm.loading,"button-text":"Create Post"},on:{"formData":_vm.createPost}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/CreatePost/index.vue?vue&type=template&id=1d10c4d2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/CreatePost/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var CreatePostvue_type_script_lang_js_ = ({
  data() {
    return {
      loading: false
    };
  },

  methods: {
    createPost(formData) {
      this.loading = true;
      this.$axios.post("https://jsonplaceholder.typicode.com/posts", {
        title: formData.title,
        body: formData.bady,
        userId: 1
      }).then(() => {
        this.loading = false;
        alert("Post Created");
      }).catch(function (error) {
        console.log(error);
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/CreatePost/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_CreatePostvue_type_script_lang_js_ = (CreatePostvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/CreatePost/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_CreatePostvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4425fe42"
  
)

/* harmony default export */ var CreatePost = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {PostForm: __webpack_require__(31).default})


/***/ })

};;
//# sourceMappingURL=index.js.map