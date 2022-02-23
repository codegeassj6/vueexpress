(self["webpackChunk"] = self["webpackChunk"] || []).push([["Order"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/account/Order.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/account/Order.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _template_OrderTemp_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../template/OrderTemp.vue */ "./resources/js/components/template/OrderTemp.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      products: null,
      total_price: null,
      fee: null,
      group: null
    };
  },
  props: [],
  components: {
    OrderTemp: _template_OrderTemp_vue__WEBPACK_IMPORTED_MODULE_0__.default
  },
  computed: {},
  methods: {},
  updated: function updated() {},
  mounted: function mounted() {
    var _this = this;

    var AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
    axios({
      method: 'get',
      url: "/api/order",
      headers: {
        Authorization: AuthStr
      }
    }).then(function (res) {
      _this.products = res.data[0];
      _this.total_price = res.data[1];
      _this.fee = res.data[2];
      _this.group = res.data[3];
    })["catch"](function (err) {});
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/template/OrderTemp.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/template/OrderTemp.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {};
  },
  props: ['products', 'total_price', 'fee', 'group'],
  computed: {
    computedOverall: function computedOverall() {
      return this.total_price + this.fee;
    }
  },
  methods: {},
  watch: {
    $data: {
      handler: function handler(val, oldVal) {// console.log('watcher: ',val);
      },
      deep: true
    },
    products: function products(newVal) {
      console.log('Props: ', newVal);
    }
  },
  updated: function updated() {},
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/account/Order.vue?vue&type=style&index=0&id=fbc132de&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/account/Order.vue?vue&type=style&index=0&id=fbc132de&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\na.router-link-exact-active[data-v-fbc132de] {\n    border-bottom: 2px solid orangered;\n}\n.nav-pills .nav-link[data-v-fbc132de] {\n    border-radius: 0 !important;\n}\nhr[data-v-fbc132de] {\n    margin-bottom: 0 !important;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/components/account/Order.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/account/Order.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Order_vue_vue_type_template_id_fbc132de_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Order.vue?vue&type=template&id=fbc132de&scoped=true& */ "./resources/js/components/account/Order.vue?vue&type=template&id=fbc132de&scoped=true&");
/* harmony import */ var _Order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Order.vue?vue&type=script&lang=js& */ "./resources/js/components/account/Order.vue?vue&type=script&lang=js&");
/* harmony import */ var _Order_vue_vue_type_style_index_0_id_fbc132de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Order.vue?vue&type=style&index=0&id=fbc132de&scoped=true&lang=css& */ "./resources/js/components/account/Order.vue?vue&type=style&index=0&id=fbc132de&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Order_vue_vue_type_template_id_fbc132de_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Order_vue_vue_type_template_id_fbc132de_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "fbc132de",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/account/Order.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/template/OrderTemp.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/template/OrderTemp.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OrderTemp_vue_vue_type_template_id_58405050_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderTemp.vue?vue&type=template&id=58405050&scoped=true& */ "./resources/js/components/template/OrderTemp.vue?vue&type=template&id=58405050&scoped=true&");
/* harmony import */ var _OrderTemp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderTemp.vue?vue&type=script&lang=js& */ "./resources/js/components/template/OrderTemp.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _OrderTemp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _OrderTemp_vue_vue_type_template_id_58405050_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _OrderTemp_vue_vue_type_template_id_58405050_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "58405050",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/template/OrderTemp.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/account/Order.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/account/Order.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Order.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/account/Order.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/template/OrderTemp.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/template/OrderTemp.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderTemp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OrderTemp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/template/OrderTemp.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderTemp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/account/Order.vue?vue&type=template&id=fbc132de&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/account/Order.vue?vue&type=template&id=fbc132de&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_template_id_fbc132de_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_template_id_fbc132de_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_template_id_fbc132de_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Order.vue?vue&type=template&id=fbc132de&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/account/Order.vue?vue&type=template&id=fbc132de&scoped=true&");


/***/ }),

/***/ "./resources/js/components/template/OrderTemp.vue?vue&type=template&id=58405050&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/template/OrderTemp.vue?vue&type=template&id=58405050&scoped=true& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderTemp_vue_vue_type_template_id_58405050_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderTemp_vue_vue_type_template_id_58405050_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderTemp_vue_vue_type_template_id_58405050_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OrderTemp.vue?vue&type=template&id=58405050&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/template/OrderTemp.vue?vue&type=template&id=58405050&scoped=true&");


/***/ }),

/***/ "./resources/js/components/account/Order.vue?vue&type=style&index=0&id=fbc132de&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/account/Order.vue?vue&type=style&index=0&id=fbc132de&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_style_index_0_id_fbc132de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Order.vue?vue&type=style&index=0&id=fbc132de&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/account/Order.vue?vue&type=style&index=0&id=fbc132de&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_style_index_0_id_fbc132de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_style_index_0_id_fbc132de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_style_index_0_id_fbc132de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_style_index_0_id_fbc132de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/account/Order.vue?vue&type=template&id=fbc132de&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/account/Order.vue?vue&type=template&id=fbc132de&scoped=true& ***!
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
    "div",
    [
      _c("div", { staticClass: "jumbotron" }, [
        _c(
          "nav",
          { staticClass: "nav nav-pills nav-fill" },
          [
            _c(
              "router-link",
              {
                staticClass: "nav-item nav-link text-orangered",
                attrs: { to: "/account/order" }
              },
              [_vm._v("All\n            ")]
            ),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "nav-item nav-link text-orangered",
                attrs: { to: "/account/order/receive" }
              },
              [_vm._v("To Receive\n            ")]
            ),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "nav-item nav-link text-orangered",
                attrs: { to: "/account/order/complete" }
              },
              [_vm._v("Completed\n            ")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("hr")
      ]),
      _vm._v(" "),
      this.$route.name == "Order"
        ? _c("div", { staticClass: "input-group mb-3" }, [
            _c("input", {
              staticClass: "form-control",
              attrs: {
                type: "text",
                placeholder: "Search order",
                "aria-label": "Username",
                "aria-describedby": "basic-addon1"
              }
            }),
            _vm._v(" "),
            _vm._m(0)
          ])
        : _vm._e(),
      _vm._v(" "),
      this.$route.name == "Order"
        ? _c("OrderTemp", {
            attrs: {
              group: _vm.group,
              total_price: _vm.total_price,
              fee: _vm.fee,
              products: _vm.products
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _c("router-view", { key: _vm.$router.path })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c(
        "span",
        { staticClass: "input-group-text", attrs: { id: "basic-addon1" } },
        [_c("i", { staticClass: "fa fa-search" })]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/template/OrderTemp.vue?vue&type=template&id=58405050&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/template/OrderTemp.vue?vue&type=template&id=58405050&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
    _vm._l(_vm.products, function(product, index) {
      return _c(
        "div",
        { key: index, staticClass: "jumbotron" },
        [
          _c("div", { staticClass: "d-block mb-2" }, [
            _vm.products.status == 0
              ? _c("div", { staticClass: "text-right" }, [_vm._v("Pending")])
              : _vm._e(),
            _vm._v(" "),
            _vm.products.status == 1
              ? _c("div", { staticClass: "text-right" }, [_vm._v("To Receive")])
              : _vm._e(),
            _vm._v(" "),
            _c("hr")
          ]),
          _vm._v(" "),
          _vm._l(product, function(prod) {
            return _c("div", { key: prod.id, staticClass: "row mb-2" }, [
              _c(
                "div",
                { staticClass: "col-md-2" },
                [
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to:
                          "/product/" +
                          prod.name.replace(/\s/g, "") +
                          "/" +
                          prod.id
                      }
                    },
                    [
                      _c("img", {
                        attrs: {
                          src: "/img/steak.jpg",
                          alt: "",
                          width: "100%",
                          height: "100px"
                        }
                      })
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-8" },
                [
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to:
                          "/product/" +
                          prod.name.replace(/\s/g, "") +
                          "/" +
                          prod.id
                      }
                    },
                    [
                      _c("h6", { staticClass: "text-orangered" }, [
                        _vm._v(_vm._s(prod.name))
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", [
                    _vm._v(
                      " asd asd asd asd asd asd asd asd ased asd asd asd as"
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "small" }, [
                    _vm._v("Variant: " + _vm._s(prod.variant))
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-2 text-right" }, [
                _c("div", [
                  _vm._v("₱" + _vm._s(prod.price) + "\n                    "),
                  _c("span", { staticClass: "text-muted small" }, [
                    _vm._v("x")
                  ]),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(prod.quantity))])
                ]),
                _vm._v(" "),
                _c("div", [_vm._v("₱" + _vm._s(prod.price * prod.quantity))])
              ])
            ])
          }),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("div", { staticClass: "text-right mb-3" }, [
            _c("div", { staticClass: "small" }, [
              _c("i", { staticClass: "fa fa-truck" }),
              _vm._v(": ₱" + _vm._s(_vm.fee))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "small d-inline" }, [
              _vm._v("Order Total:")
            ]),
            _vm._v(" "),
            _c("span", [_vm._v("₱" + _vm._s(_vm.computedOverall))])
          ]),
          _vm._v(" "),
          _vm._m(0, true)
        ],
        2
      )
    }),
    0
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-5 small text-muted" }, [
        _vm._v(
          "\n                Confirm receipt of products by 07/08/2001\n            "
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-7 text-right" }, [
        _c(
          "button",
          { staticClass: "btn btn-primary btn-sm", attrs: { type: "button" } },
          [_vm._v("Order Again")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/account/Order.vue?vue&type=style&index=0&id=fbc132de&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/account/Order.vue?vue&type=style&index=0&id=fbc132de&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Order.vue?vue&type=style&index=0&id=fbc132de&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/account/Order.vue?vue&type=style&index=0&id=fbc132de&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("4d324920", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);