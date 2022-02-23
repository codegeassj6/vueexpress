(self["webpackChunk"] = self["webpackChunk"] || []).push([["Receive"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/account/order/Receive.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/account/order/Receive.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _template_OrderTemp_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../template/OrderTemp.vue */ "./resources/js/components/template/OrderTemp.vue");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_defineProperty({
  data: function data() {
    return {
      products: null,
      total_price: null,
      fee: null
    };
  },
  props: [],
  components: {
    OrderTemp: _template_OrderTemp_vue__WEBPACK_IMPORTED_MODULE_0__.default
  },
  computed: {},
  methods: {},
  mounted: function mounted() {}
}, "mounted", function mounted() {
  var _this = this;

  var AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
  axios({
    method: 'get',
    url: "/api/order/receive",
    headers: {
      Authorization: AuthStr
    }
  }).then(function (res) {
    _this.products = res.data[0];
    _this.total_price = res.data[1];
    _this.fee = res.data[2];
    console.log(_this.products);
  })["catch"](function (err) {});
}));

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

/***/ "./resources/js/components/account/order/Receive.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/account/order/Receive.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Receive_vue_vue_type_template_id_6f076b65_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Receive.vue?vue&type=template&id=6f076b65&scoped=true& */ "./resources/js/components/account/order/Receive.vue?vue&type=template&id=6f076b65&scoped=true&");
/* harmony import */ var _Receive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Receive.vue?vue&type=script&lang=js& */ "./resources/js/components/account/order/Receive.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Receive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Receive_vue_vue_type_template_id_6f076b65_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Receive_vue_vue_type_template_id_6f076b65_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6f076b65",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/account/order/Receive.vue"
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

/***/ "./resources/js/components/account/order/Receive.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/account/order/Receive.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Receive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Receive.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/account/order/Receive.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Receive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/components/account/order/Receive.vue?vue&type=template&id=6f076b65&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/account/order/Receive.vue?vue&type=template&id=6f076b65&scoped=true& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Receive_vue_vue_type_template_id_6f076b65_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Receive_vue_vue_type_template_id_6f076b65_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Receive_vue_vue_type_template_id_6f076b65_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Receive.vue?vue&type=template&id=6f076b65&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/account/order/Receive.vue?vue&type=template&id=6f076b65&scoped=true&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/account/order/Receive.vue?vue&type=template&id=6f076b65&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/account/order/Receive.vue?vue&type=template&id=6f076b65&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
      _c("OrderTemp", {
        attrs: {
          fee: _vm.fee,
          total_price: _vm.total_price,
          products: _vm.products
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
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



/***/ })

}]);