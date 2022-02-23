(self["webpackChunk"] = self["webpackChunk"] || []).push([["Shop"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shop.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shop.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _template_Footer_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template/Footer.vue */ "./resources/js/components/template/Footer.vue");
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Footer: _template_Footer_vue__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      url: {
        isHome: false,
        isProducts: false,
        isSale: false
      },
      hasError: false,
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart: function onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd: function onSlideEnd(slide) {
      this.sliding = true;
    }
  },
  updated: function updated() {
    if (this.$route.name == 'Shop') {
      this.url.isHome = true;
      this.url.isSale = false;
      this.url.isProducts = false;
    }

    if (this.$route.name == 'ShopProduct') {
      this.url.isProducts = true;
      this.url.isHome = false;
      this.url.isSale = false;
    }

    if (this.$route.name == 'StoreSale') {
      this.url.isProducts = false;
      this.url.isHome = false;
      this.url.isSale = true;
    }
  },
  mounted: function mounted() {
    this.url.isHome = true;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/template/Footer.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/template/Footer.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shop.vue?vue&type=style&index=0&id=e1ea323e&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shop.vue?vue&type=style&index=0&id=e1ea323e&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.nav-active[data-v-e1ea323e] {\n    border-bottom: 2px solid orangered;\n}\n.nav-pills .nav-link[data-v-e1ea323e] {\n    border-radius: 0 !important;\n}\n@media (min-width: 768px) {\n.card[data-v-e1ea323e] {\n        height: 106px;\n}\n.claim[data-v-e1ea323e] {\n        margin-top: 24px;\n}\n}\n.card-body[data-v-e1ea323e] {\n    padding: .75rem;\n    background: salmon;\n    color: #fff;\n}\n.border-left[data-v-e1ea323e] {\n    border-left: 1px solid orangered !important;\n}\n\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/components/Shop.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Shop.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Shop_vue_vue_type_template_id_e1ea323e_scoped_true_lang_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shop.vue?vue&type=template&id=e1ea323e&scoped=true&lang=true& */ "./resources/js/components/Shop.vue?vue&type=template&id=e1ea323e&scoped=true&lang=true&");
/* harmony import */ var _Shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Shop.vue?vue&type=script&lang=js& */ "./resources/js/components/Shop.vue?vue&type=script&lang=js&");
/* harmony import */ var _Shop_vue_vue_type_style_index_0_id_e1ea323e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Shop.vue?vue&type=style&index=0&id=e1ea323e&scoped=true&lang=css& */ "./resources/js/components/Shop.vue?vue&type=style&index=0&id=e1ea323e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Shop_vue_vue_type_template_id_e1ea323e_scoped_true_lang_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Shop_vue_vue_type_template_id_e1ea323e_scoped_true_lang_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "e1ea323e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Shop.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/template/Footer.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/template/Footer.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Footer_vue_vue_type_template_id_319c3516_lang_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=319c3516&lang=true& */ "./resources/js/components/template/Footer.vue?vue&type=template&id=319c3516&lang=true&");
/* harmony import */ var _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js& */ "./resources/js/components/template/Footer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Footer_vue_vue_type_template_id_319c3516_lang_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Footer_vue_vue_type_template_id_319c3516_lang_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/template/Footer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Shop.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Shop.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Shop.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shop.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/template/Footer.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/template/Footer.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/template/Footer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Shop.vue?vue&type=template&id=e1ea323e&scoped=true&lang=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/Shop.vue?vue&type=template&id=e1ea323e&scoped=true&lang=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Shop_vue_vue_type_template_id_e1ea323e_scoped_true_lang_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Shop_vue_vue_type_template_id_e1ea323e_scoped_true_lang_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Shop_vue_vue_type_template_id_e1ea323e_scoped_true_lang_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Shop.vue?vue&type=template&id=e1ea323e&scoped=true&lang=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shop.vue?vue&type=template&id=e1ea323e&scoped=true&lang=true&");


/***/ }),

/***/ "./resources/js/components/template/Footer.vue?vue&type=template&id=319c3516&lang=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/template/Footer.vue?vue&type=template&id=319c3516&lang=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_319c3516_lang_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_319c3516_lang_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_319c3516_lang_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Footer.vue?vue&type=template&id=319c3516&lang=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/template/Footer.vue?vue&type=template&id=319c3516&lang=true&");


/***/ }),

/***/ "./resources/js/components/Shop.vue?vue&type=style&index=0&id=e1ea323e&scoped=true&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Shop.vue?vue&type=style&index=0&id=e1ea323e&scoped=true&lang=css& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Shop_vue_vue_type_style_index_0_id_e1ea323e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Shop.vue?vue&type=style&index=0&id=e1ea323e&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shop.vue?vue&type=style&index=0&id=e1ea323e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Shop_vue_vue_type_style_index_0_id_e1ea323e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Shop_vue_vue_type_style_index_0_id_e1ea323e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Shop_vue_vue_type_style_index_0_id_e1ea323e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Shop_vue_vue_type_style_index_0_id_e1ea323e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shop.vue?vue&type=template&id=e1ea323e&scoped=true&lang=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shop.vue?vue&type=template&id=e1ea323e&scoped=true&lang=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container-lg" },
    [
      _c("div", { staticClass: "jumbotron" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c(
          "nav",
          { staticClass: "nav nav-pills nav-fill" },
          [
            _c(
              "router-link",
              {
                staticClass: "nav-item nav-link text-orangered",
                class: _vm.url.isHome ? "nav-active" : _vm.hasError,
                attrs: {
                  to: "/shop/" + this.$route.params.name.replace(/\s/g, "")
                }
              },
              [_vm._v("\n                Home\n            ")]
            ),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "nav-item nav-link text-orangered",
                class: _vm.url.isProducts ? "nav-active" : _vm.hasError,
                attrs: {
                  to: {
                    name: "ShopProduct",
                    params: { name: this.$route.params.name.replace(/\s/g, "") }
                  }
                }
              },
              [_vm._v("\n                Products\n            ")]
            ),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "nav-item nav-link text-orangered",
                class: _vm.url.isSale ? "nav-active" : _vm.hasError,
                attrs: {
                  to: {
                    name: "StoreSale",
                    params: { name: this.$route.params.name.replace(/\s/g, "") }
                  }
                }
              },
              [_vm._v("\n                Sale\n            ")]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("router-view", { key: _vm.$route.path }),
      _vm._v(" "),
      this.$route.name == "Shop"
        ? _c("div", { staticClass: "jumbotron" }, [
            _c("h6", [_vm._v("Shop Voucher")]),
            _vm._v(" "),
            _vm._m(1)
          ])
        : _vm._e(),
      _vm._v(" "),
      this.$route.name == "Shop"
        ? _c("div", { staticClass: "jumbotron" }, [
            _c("h6", [_vm._v("About Shop")]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-md-6" },
                [
                  _c(
                    "b-carousel",
                    {
                      staticStyle: { "text-shadow": "1px 1px 2px #333" },
                      attrs: {
                        id: "carousel-1",
                        interval: 4000,
                        controls: "",
                        indicators: "",
                        background: "#ababab",
                        "img-width": "1024",
                        "img-height": "480"
                      },
                      on: {
                        "sliding-start": _vm.onSlideStart,
                        "sliding-end": _vm.onSlideEnd
                      },
                      model: {
                        value: _vm.slide,
                        callback: function($$v) {
                          _vm.slide = $$v
                        },
                        expression: "slide"
                      }
                    },
                    [
                      _c("b-carousel-slide", {
                        attrs: {
                          caption: "First slide",
                          text:
                            "Nulla vitae elit libero, a pharetra augue mollis interdum.",
                          "img-src": "https://picsum.photos/1024/480/?image=52"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "b-carousel-slide",
                        {
                          attrs: {
                            "img-src":
                              "https://picsum.photos/1024/480/?image=54"
                          }
                        },
                        [_c("h1", [_vm._v("Hello world!")])]
                      ),
                      _vm._v(" "),
                      _c("b-carousel-slide", {
                        attrs: {
                          "img-src": "https://picsum.photos/1024/480/?image=58"
                        }
                      }),
                      _vm._v(" "),
                      _c("b-carousel-slide", {
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "img",
                              fn: function() {
                                return [
                                  _c("img", {
                                    staticClass: "d-block img-fluid w-100",
                                    attrs: {
                                      width: "1024",
                                      height: "480",
                                      src:
                                        "https://picsum.photos/1024/480/?image=55",
                                      alt: "image slot"
                                    }
                                  })
                                ]
                              },
                              proxy: true
                            }
                          ],
                          null,
                          false,
                          4179674207
                        )
                      }),
                      _vm._v(" "),
                      _c(
                        "b-carousel-slide",
                        {
                          attrs: {
                            caption: "Blank Image",
                            "img-blank": "",
                            "img-alt": "Blank image"
                          }
                        },
                        [
                          _c("p", [
                            _vm._v(
                              "\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt\n                    a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.\n                    "
                            )
                          ])
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm._m(2)
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "jumbotron" }, [_c("Footer")], 1)
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-4" }, [
        _c("div", { staticClass: "shop-image" }, [
          _c("img", {
            attrs: { src: "/img/steak.jpg", alt: "", height: "150" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-4" }, [
            _c("div", { staticClass: "block" }, [
              _vm._v(
                "\n                            Products: 488\n                        "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "block" }, [
              _vm._v(
                "\n                            Following: 488\n                        "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "block" }, [
              _vm._v(
                "\n                            Chat Performance: 488\n                        "
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-4" }, [
            _c("div", { staticClass: "block" }, [
              _vm._v(
                "\n                            Products: 488\n                        "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "block" }, [
              _vm._v(
                "\n                            Products: 488\n                        "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "block" }, [
              _vm._v(
                "\n                            Products: 488\n                        "
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-4" }, [
            _c("div", { staticClass: "block" }, [
              _vm._v(
                "\n                            Products: 488\n                        "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "block" }, [
              _vm._v(
                "\n                            Products: 488\n                        "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "block" }, [
              _vm._v(
                "\n                            Products: 488\n                        "
              )
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-3" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-8" }, [
                _c("div", { staticClass: "mb-2" }, [
                  _vm._v(
                    "10% off Min. Spend ₱500 Capped at ₱100\n                                "
                  )
                ]),
                _vm._v(" "),
                _c("div", [_c("small", [_vm._v("Expiring: 9 Hours Left")])])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-4 border-left" }, [
                _c("div", { staticClass: "text-center claim" }, [
                  _c("button", { staticClass: "btn btn-primary btn-sm" }, [
                    _vm._v(
                      "\n                                        Claim\n                                    "
                    )
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6" }, [
      _c("h6", [_vm._v("Address: Brgy St. Nino Panabo City")]),
      _vm._v(" "),
      _c("h6", [_vm._v("Business Time: 8AM-5PM")]),
      _vm._v(" "),
      _c("div", { staticClass: "intro" }, [
        _c("div", [_vm._v("✨Warmly welcome to Cristina✨")]),
        _vm._v(" "),
        _c("div", [_vm._v("💗Every day has Flash Deal in shop💗")]),
        _vm._v(" "),
        _c("div", [_vm._v("💗Free Shipping all these days💗")]),
        _vm._v(" "),
        _c("div", [_vm._v("💗New followers can get a special voucher💗")]),
        _vm._v(" "),
        _c("div", [_vm._v("✨Will ship out the parcel in 1-2 days✨")]),
        _vm._v(" "),
        _c("div", [
          _vm._v("✨It usually takes 7-15 days to deliver your parcel✨")
        ]),
        _vm._v(" "),
        _c("div", [
          _vm._v("✨Customer Service time is 9:00-18:00 on workdays✨")
        ]),
        _vm._v(" "),
        _c("div", [_vm._v("💋Hope you enjoy your time here💋")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/template/Footer.vue?vue&type=template&id=319c3516&lang=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/template/Footer.vue?vue&type=template&id=319c3516&lang=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "footer",
    [
      _c(
        "b-row",
        { staticClass: "mt-4" },
        [
          _c("b-col", { attrs: { cols: "4" } }, [
            _c("h4", [_vm._v("Express Delivery Experts")]),
            _vm._v(" "),
            _c("span", [_vm._v("Lapu-lapu San Pedro")]),
            _c("br"),
            _vm._v(" "),
            _c("span", [_vm._v("Panabo City, Davao del Norte")]),
            _c("br"),
            _vm._v(" "),
            _c("span", [_vm._v("Philippines")]),
            _vm._v(" "),
            _c("div", { staticClass: "mt-3" }),
            _vm._v(" "),
            _c("span", [_vm._v("Phone: 09952214980")]),
            _c("br"),
            _vm._v(" "),
            _c("span", [_vm._v("Email: jcdnbalaba@gmail.com")]),
            _vm._v(" "),
            _c("div", { staticClass: "mb-2" }),
            _vm._v(" "),
            _c("a", { staticClass: "btn btn-primary", attrs: { href: "#!" } }, [
              _vm._v("Join our Delivery Team")
            ])
          ]),
          _vm._v(" "),
          _c("b-col", { attrs: { cols: "2" } }, [
            _c("img", {
              attrs: {
                src: "/img/gcash.jpg",
                alt: "",
                width: "100%",
                height: "100%"
              }
            })
          ]),
          _vm._v(" "),
          _c("b-col", { attrs: { cols: "2" } }, [
            _c("img", {
              attrs: {
                src: "/img/bdo.png",
                alt: "",
                width: "100%",
                height: "100%"
              }
            })
          ]),
          _vm._v(" "),
          _c("b-col", { attrs: { cols: "2" } }, [
            _c("img", {
              attrs: {
                src: "/img/rd.png",
                alt: "",
                width: "100%",
                height: "100%"
              }
            })
          ]),
          _vm._v(" "),
          _c("b-col", { attrs: { cols: "2" } }, [
            _c("img", {
              attrs: {
                src: "/img/cod.jpg",
                alt: "",
                width: "100%",
                height: "100%"
              }
            })
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shop.vue?vue&type=style&index=0&id=e1ea323e&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shop.vue?vue&type=style&index=0&id=e1ea323e&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Shop.vue?vue&type=style&index=0&id=e1ea323e&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shop.vue?vue&type=style&index=0&id=e1ea323e&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("5f6f9f59", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);