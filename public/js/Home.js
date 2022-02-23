(self["webpackChunk"] = self["webpackChunk"] || []).push([["Home"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _template_Footer_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template/Footer.vue */ "./resources/js/components/template/Footer.vue");
/* harmony import */ var _template_ProductCard_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template/ProductCard.vue */ "./resources/js/components/template/ProductCard.vue");
/* harmony import */ var _template_PaginateButton_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template/PaginateButton.vue */ "./resources/js/components/template/PaginateButton.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      ready: false,
      slide: 0,
      sliding: null,
      holder: {
        price_min: null,
        price_max: null
      },
      formSearch: {
        check: [],
        query: '',
        price_min: null,
        price_max: null,
        sort: null,
        star: null
      },
      inputTypes: {
        number: 'number'
      },
      products: {},
      noResult: false,
      paginate_data: null
    };
  },
  methods: {
    // boobtstrap vue
    onSlideStart: function onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd: function onSlideEnd(slide) {
      this.sliding = false;
    },
    // removeFilter(data){console.log(data);
    //     data = null;
    //     console.log(data);
    // },
    // e = query has a text to remove all formsearch data; n = star
    searchProduct: function searchProduct(e, n) {
      var _this = this;

      console.log('search run');

      if (n) {
        this.formSearch.star = n;
      }

      if (this.formSearch.query && e == 1) {
        this.formSearch.check = [];
        this.formSearch.price_min = null;
        this.formSearch.price_max = null;
        this.formSearch.sort = null;
        this.formSearch.star = null;
      }

      if (this.holder.price_min) {
        this.formSearch.price_min = this.holder.price_min;
      }

      if (this.holder.price_max) {
        this.formSearch.price_max = this.holder.price_max;
      }

      var AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
      axios({
        method: 'get',
        params: {
          query: this.formSearch.query,
          check: this.formSearch.check,
          price_min: this.formSearch.price_min,
          price_max: this.formSearch.price_max,
          sort: this.formSearch.sort,
          rating: this.formSearch.star
        },
        headers: {
          Authorization: AuthStr
        },
        url: "/api/products/search"
      }).then(function (res) {
        console.log(res.data);

        if (res.data.data.length) {
          _this.noResult = false;
          _this.products = res.data.data;
          _this.paginate_data = res.data;
        } else {
          _this.products = {};
          _this.noResult = true;
          _this.paginate_data = {};
        }
      })["catch"](function (err) {});
    },
    goToPage: function goToPage(url, page) {
      var _this2 = this;

      var AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
      axios({
        method: 'get',
        params: {
          query: this.formSearch.query,
          check: this.formSearch.check,
          price_min: this.formSearch.price_min,
          price_max: this.formSearch.price_max,
          sort: this.formSearch.sort,
          rating: this.formSearch.star,
          page: page
        },
        url: "".concat(url),
        headers: {
          Authorization: AuthStr
        }
      }).then(function (res) {
        _this2.products = res.data.data;
        _this2.paginate_data = res.data;
      })["catch"](function (err) {});
    },
    nextPage: function nextPage(url) {
      var _this3 = this;

      var AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
      axios({
        method: 'get',
        params: {
          query: this.formSearch.query,
          check: this.formSearch.check,
          price_min: this.formSearch.price_min,
          price_max: this.formSearch.price_max,
          sort: this.formSearch.sort,
          rating: this.formSearch.star
        },
        url: url,
        headers: {
          Authorization: AuthStr
        }
      }).then(function (res) {
        _this3.products = res.data.data;
        _this3.paginate_data = res.data;
      })["catch"](function (err) {});
    },
    prevPage: function prevPage(url) {
      var _this4 = this;

      var AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
      axios({
        method: 'get',
        params: {
          query: this.formSearch.query,
          check: this.formSearch.check,
          price_min: this.formSearch.price_min,
          price_max: this.formSearch.price_max,
          sort: this.formSearch.sort,
          rating: this.formSearch.star,
          page: page
        },
        url: url,
        headers: {
          Authorization: AuthStr
        }
      }).then(function (res) {
        _this4.products = res.data.data;
        _this4.paginate_data = res.data;
      })["catch"](function (err) {});
    }
  },
  watch: {
    $data: {
      handler: function handler(val, oldVal) {// console.log('Home watcher: ',val);
      },
      deep: true
    }
  },
  computed: {
    currentUser: function currentUser() {
      return this.$store.getters.currentUser;
    }
  },
  mounted: function mounted() {
    var _this5 = this;

    if (this.currentUser) {
      var AuthStr = 'Bearer '.concat(this.$store.getters.currentUser.token);
      axios({
        method: 'get',
        url: "/api/products?page=1",
        headers: {
          Authorization: AuthStr
        }
      }).then(function (res) {
        _this5.paginate_data = res.data;
        _this5.products = res.data.data;
        _this5.ready = true;
      })["catch"](function (err) {});
    }
  },
  components: {
    Footer: _template_Footer_vue__WEBPACK_IMPORTED_MODULE_0__.default,
    ProductCard: _template_ProductCard_vue__WEBPACK_IMPORTED_MODULE_1__.default,
    PaginateButton: _template_PaginateButton_vue__WEBPACK_IMPORTED_MODULE_2__.default
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
//
//
//
//
//
//
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/template/PaginateButton.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/template/PaginateButton.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {};
  },
  props: ['paginate_data'],
  computed: {},
  methods: {
    redirect: function redirect(url, page) {
      this.$parent.goToPage(url, page);
    },
    next: function next(url) {
      this.$parent.nextPage(url);
    },
    prev: function prev(url) {
      this.$parent.nextPage(url);
    }
  },
  // watch: {
  //     $data: {
  //         handler: function(val, oldVal) {
  //             console.log('watcher: ',val);
  //         },
  //         deep: true
  //     }
  // },
  updated: function updated() {},
  mounted: function mounted() {// this.paginate_data.data.forEach(element => {
    //     return element != null;
    // });
    // console.log(this.paginate_data.data);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/template/ProductCard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/template/ProductCard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StarRating_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StarRating.vue */ "./resources/js/components/template/StarRating.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['products'],
  components: {
    StarRating: _StarRating_vue__WEBPACK_IMPORTED_MODULE_0__.default
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/template/StarRating.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/template/StarRating.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_defineProperty({
  data: function data() {
    return {};
  },
  props: ['rating'],
  computed: {},
  methods: {},
  mounted: function mounted() {}
}, "mounted", function mounted() {}));

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css& ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.no-result[data-v-f2b6376c] {\n    height: 400px;\n}\n\n/* .mt-6 {\n    margin-top: 96px;\n} */\n.carousel-img img[data-v-f2b6376c] {\n  height: 1000px !important;\n}\n.product-link[data-v-f2b6376c]:hover {\n    cursor: pointer !important;\n}\n.product-name[data-v-f2b6376c] {\n  text-overflow: ellipsis !important;\n  font-weight: 700;\n}\n@-webkit-keyframes type-data-v-f2b6376c{\nfrom{box-shadow: inset -3px 0px 0px #888;}\nto{box-shadow: inset -3px 0px 0px transparent;}\n}\n@keyframes type-data-v-f2b6376c{\nfrom{box-shadow: inset -3px 0px 0px #888;}\nto{box-shadow: inset -3px 0px 0px transparent;}\n}\n\n/* .width-75 {\n    width: 60% !important;\n} */\ninput[data-v-f2b6376c]::-webkit-outer-spin-button,\ninput[data-v-f2b6376c]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n/* Firefox */\ninput[type=number][data-v-f2b6376c] {\n  -moz-appearance: textfield;\n}\n.badge-primary[data-v-f2b6376c] {\n    background-color: orangered;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/template/ProductCard.vue?vue&type=style&index=0&id=0ae0c396&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/template/ProductCard.vue?vue&type=style&index=0&id=0ae0c396&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.card[data-v-0ae0c396] {\n    height: 260px;\n}\n.card-body[data-v-0ae0c396] {\n    padding: 0.75rem;\n    font-size: 0.9rem;\n}\n.card-title[data-v-0ae0c396] {\n    margin-bottom: 0.5rem;\n    font-size: 0.9rem;\n    height: 42px;\n    overflow-y: hidden;\n}\n.card-img-top[data-v-0ae0c396] {\n    height: 124px;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/components/Home.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Home.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_f2b6376c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=f2b6376c&scoped=true& */ "./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/components/Home.vue?vue&type=script&lang=js&");
/* harmony import */ var _Home_vue_vue_type_style_index_0_id_f2b6376c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css& */ "./resources/js/components/Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Home_vue_vue_type_template_id_f2b6376c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Home_vue_vue_type_template_id_f2b6376c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "f2b6376c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Home.vue"
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

/***/ "./resources/js/components/template/PaginateButton.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/template/PaginateButton.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PaginateButton_vue_vue_type_template_id_353b2163_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaginateButton.vue?vue&type=template&id=353b2163&scoped=true& */ "./resources/js/components/template/PaginateButton.vue?vue&type=template&id=353b2163&scoped=true&");
/* harmony import */ var _PaginateButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaginateButton.vue?vue&type=script&lang=js& */ "./resources/js/components/template/PaginateButton.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _PaginateButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _PaginateButton_vue_vue_type_template_id_353b2163_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _PaginateButton_vue_vue_type_template_id_353b2163_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "353b2163",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/template/PaginateButton.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/template/ProductCard.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/template/ProductCard.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductCard_vue_vue_type_template_id_0ae0c396_scoped_true_lang_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductCard.vue?vue&type=template&id=0ae0c396&scoped=true&lang=true& */ "./resources/js/components/template/ProductCard.vue?vue&type=template&id=0ae0c396&scoped=true&lang=true&");
/* harmony import */ var _ProductCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductCard.vue?vue&type=script&lang=js& */ "./resources/js/components/template/ProductCard.vue?vue&type=script&lang=js&");
/* harmony import */ var _ProductCard_vue_vue_type_style_index_0_id_0ae0c396_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductCard.vue?vue&type=style&index=0&id=0ae0c396&scoped=true&lang=css& */ "./resources/js/components/template/ProductCard.vue?vue&type=style&index=0&id=0ae0c396&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _ProductCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ProductCard_vue_vue_type_template_id_0ae0c396_scoped_true_lang_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProductCard_vue_vue_type_template_id_0ae0c396_scoped_true_lang_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0ae0c396",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/template/ProductCard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/template/StarRating.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/template/StarRating.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StarRating_vue_vue_type_template_id_74c4f92e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StarRating.vue?vue&type=template&id=74c4f92e&scoped=true& */ "./resources/js/components/template/StarRating.vue?vue&type=template&id=74c4f92e&scoped=true&");
/* harmony import */ var _StarRating_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StarRating.vue?vue&type=script&lang=js& */ "./resources/js/components/template/StarRating.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _StarRating_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _StarRating_vue_vue_type_template_id_74c4f92e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _StarRating_vue_vue_type_template_id_74c4f92e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "74c4f92e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/template/StarRating.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/components/template/PaginateButton.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/template/PaginateButton.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginateButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaginateButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/template/PaginateButton.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginateButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/template/ProductCard.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/template/ProductCard.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/template/ProductCard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/template/StarRating.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/template/StarRating.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StarRating_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StarRating.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/template/StarRating.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StarRating_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&scoped=true& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=template&id=f2b6376c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&scoped=true&");


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

/***/ "./resources/js/components/template/PaginateButton.vue?vue&type=template&id=353b2163&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/template/PaginateButton.vue?vue&type=template&id=353b2163&scoped=true& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginateButton_vue_vue_type_template_id_353b2163_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginateButton_vue_vue_type_template_id_353b2163_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginateButton_vue_vue_type_template_id_353b2163_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaginateButton.vue?vue&type=template&id=353b2163&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/template/PaginateButton.vue?vue&type=template&id=353b2163&scoped=true&");


/***/ }),

/***/ "./resources/js/components/template/ProductCard.vue?vue&type=template&id=0ae0c396&scoped=true&lang=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/template/ProductCard.vue?vue&type=template&id=0ae0c396&scoped=true&lang=true& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_template_id_0ae0c396_scoped_true_lang_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_template_id_0ae0c396_scoped_true_lang_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_template_id_0ae0c396_scoped_true_lang_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductCard.vue?vue&type=template&id=0ae0c396&scoped=true&lang=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/template/ProductCard.vue?vue&type=template&id=0ae0c396&scoped=true&lang=true&");


/***/ }),

/***/ "./resources/js/components/template/StarRating.vue?vue&type=template&id=74c4f92e&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/template/StarRating.vue?vue&type=template&id=74c4f92e&scoped=true& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StarRating_vue_vue_type_template_id_74c4f92e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StarRating_vue_vue_type_template_id_74c4f92e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StarRating_vue_vue_type_template_id_74c4f92e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StarRating.vue?vue&type=template&id=74c4f92e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/template/StarRating.vue?vue&type=template&id=74c4f92e&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_f2b6376c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_f2b6376c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_f2b6376c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_f2b6376c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_f2b6376c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/js/components/template/ProductCard.vue?vue&type=style&index=0&id=0ae0c396&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/template/ProductCard.vue?vue&type=style&index=0&id=0ae0c396&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_0ae0c396_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductCard.vue?vue&type=style&index=0&id=0ae0c396&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/template/ProductCard.vue?vue&type=style&index=0&id=0ae0c396&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_0ae0c396_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_0ae0c396_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_0ae0c396_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_style_index_0_id_0ae0c396_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return !_vm.currentUser
    ? _c(
        "div",
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
                "img-height": "200"
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
                staticClass: "carousel-img",
                attrs: {
                  caption: "First slide",
                  text:
                    "Nulla vitae elit libero, a pharetra augue mollis interdum.",
                  "img-src": "/img/img3.jpg"
                }
              }),
              _vm._v(" "),
              _c(
                "b-carousel-slide",
                {
                  staticClass: "carousel-img",
                  attrs: { "img-src": "/img/img1.jpg" }
                },
                [_c("h1", [_vm._v("Hello world!")])]
              ),
              _vm._v(" "),
              _c("b-carousel-slide", {
                staticClass: "carousel-img",
                attrs: { "img-src": "https://picsum.photos/1024/480/?image=58" }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "mt-3 container-lg" },
            [
              _c(
                "b-card-group",
                [
                  _c(
                    "b-card",
                    {
                      attrs: {
                        title: "Title",
                        "img-src": "/img/ede.png",
                        "img-alt": "Image",
                        "img-top": ""
                      }
                    },
                    [
                      _c("b-card-text", [
                        _vm._v(
                          "\n                This is a wider card with supporting text below as a natural lead-in to additional content.\n                This content is a little bit longer.\n            "
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-card",
                    {
                      attrs: {
                        title: "Title",
                        "img-src": "/img/vision.png",
                        "img-alt": "Image",
                        "img-top": ""
                      }
                    },
                    [
                      _c("b-card-text", [
                        _vm._v(
                          "\n                    This card has supporting text below as a natural lead-in to additional content.\n                "
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-card",
                    {
                      attrs: {
                        title: "Title",
                        "img-src": "/img/vision.png",
                        "img-alt": "Image",
                        "img-top": ""
                      }
                    },
                    [
                      _c("b-card-text", [
                        _vm._v(
                          "\n                    This is a wider card with supporting text below as a natural lead-in to additional content.\n                    This card has even longer content than the first to show that equal height action.\n                "
                        )
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "mt-2 mb-4" },
                [
                  _c("b-col", { attrs: { md: "5" } }, [
                    _c("img", {
                      staticClass: "card-img card-delivery-img",
                      attrs: {
                        src: "/img/delivery.jpg",
                        alt: "...",
                        height: "600"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { md: "7" } },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { md: "4" } },
                            [
                              _c(
                                "b-card",
                                {
                                  staticClass: "mb-2",
                                  attrs: {
                                    title: "Order Food",
                                    "img-src": "/img/food.jpg",
                                    "img-alt": "Image",
                                    "img-top": "",
                                    "img-height": "160",
                                    tag: "article"
                                  }
                                },
                                [
                                  _c("b-card-text", [
                                    _vm._v(
                                      "\n                                Order Food from your nearest food chain, malls, market and so on. Our team contact the establishment to make your order prepared.\n                            "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "b-button",
                                    {
                                      attrs: { href: "#", variant: "primary" }
                                    },
                                    [_vm._v("Go somewhere")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { attrs: { md: "4" } },
                            [
                              _c(
                                "b-card",
                                {
                                  staticClass: "mb-2",
                                  attrs: {
                                    title: "Wet Market",
                                    "img-src": "/img/wetmarket.jpg",
                                    "img-alt": "Image",
                                    "img-height": "160",
                                    "img-top": "",
                                    tag: "article"
                                  }
                                },
                                [
                                  _c("b-card-text", [
                                    _vm._v(
                                      "\n                                Order Food from your nearest food chain, malls, market and so on. Our team contact the establishment to make your order prepared.\n                            "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "b-button",
                                    {
                                      attrs: { href: "#", variant: "primary" }
                                    },
                                    [_vm._v("Go somewhere")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-col", { attrs: { md: "4" } }, [
                            _c(
                              "div",
                              [
                                _c(
                                  "b-card",
                                  {
                                    staticClass: "mb-2",
                                    attrs: {
                                      title: "Grocery",
                                      "img-src": "/img/grocery.jpg",
                                      "img-alt": "Image",
                                      "img-height": "160",
                                      "img-top": "",
                                      tag: "article"
                                    }
                                  },
                                  [
                                    _c("b-card-text", [
                                      _vm._v(
                                        "\n                            Order Food from your nearest food chain, malls, market and so on. Our team contact the establishment to make your order prepared.\n                        "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "b-button",
                                      {
                                        attrs: { href: "#", variant: "primary" }
                                      },
                                      [_vm._v("Go somewhere")]
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-row",
                        [
                          _c("b-col", { attrs: { md: "4" } }, [
                            _c(
                              "div",
                              [
                                _c(
                                  "b-card",
                                  {
                                    staticClass: "mb-2",
                                    attrs: {
                                      title: "Order Food",
                                      "img-src": "/img/food.jpg",
                                      "img-alt": "Image",
                                      "img-height": "160",
                                      "img-top": "",
                                      tag: "article"
                                    }
                                  },
                                  [
                                    _c("b-card-text", [
                                      _vm._v(
                                        "\n                            Order Food from your nearest food chain, malls, market and so on. Our team contact the establishment to make your order prepared.\n                        "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "b-button",
                                      {
                                        attrs: { href: "#", variant: "primary" }
                                      },
                                      [_vm._v("Go somewhere")]
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { md: "4" } }, [
                            _c(
                              "div",
                              [
                                _c(
                                  "b-card",
                                  {
                                    staticClass: "mb-2",
                                    attrs: {
                                      title: "Wet Market",
                                      "img-src": "/img/wetmarket.jpg",
                                      "img-height": "160",
                                      "img-alt": "Image",
                                      "img-top": "",
                                      tag: "article"
                                    }
                                  },
                                  [
                                    _c("b-card-text", [
                                      _vm._v(
                                        "\n                            Order Food from your nearest food chain, malls, market and so on. Our team contact the establishment to make your order prepared.\n                        "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "b-button",
                                      {
                                        attrs: { href: "#", variant: "primary" }
                                      },
                                      [_vm._v("Go somewhere")]
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { md: "4" } }, [
                            _c(
                              "div",
                              [
                                _c(
                                  "b-card",
                                  {
                                    staticClass: "mb-2",
                                    attrs: {
                                      title: "Grocery",
                                      "img-src": "/img/grocery.jpg",
                                      "img-alt": "Image",
                                      "img-height": "160",
                                      "img-top": "",
                                      tag: "article"
                                    }
                                  },
                                  [
                                    _c("b-card-text", [
                                      _vm._v(
                                        "\n                            Order Food from your nearest food chain, malls, market and so on. Our team contact the establishment to make your order prepared.\n                        "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "b-button",
                                      {
                                        attrs: { href: "#", variant: "primary" }
                                      },
                                      [_vm._v("Go somewhere")]
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-card",
                {
                  attrs: {
                    "header-class": "text-center bold",
                    header: "Frequent Asked Question",
                    "header-text-variant": "dark",
                    "header-tag": "header",
                    "header-bg-variant": "white"
                  }
                },
                [
                  _c("b-card-text", [
                    _c(
                      "div",
                      { staticClass: "accordion", attrs: { role: "tablist" } },
                      [
                        _c(
                          "b-card",
                          { staticClass: "mb-1", attrs: { "no-body": "" } },
                          [
                            _c(
                              "b-card-header",
                              {
                                staticClass: "p-1",
                                attrs: { "header-tag": "header", role: "tab" }
                              },
                              [
                                _c(
                                  "b-button",
                                  {
                                    directives: [
                                      {
                                        name: "b-toggle",
                                        rawName: "v-b-toggle.accordion-1",
                                        modifiers: { "accordion-1": true }
                                      }
                                    ],
                                    staticClass: "text-left",
                                    attrs: { block: "", variant: "light" }
                                  },
                                  [_vm._v("Accordion 1")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-collapse",
                              {
                                attrs: {
                                  id: "accordion-1",
                                  accordion: "my-accordion",
                                  role: "tabpanel"
                                }
                              },
                              [
                                _c(
                                  "b-card-body",
                                  [
                                    _c("b-card-text", [
                                      _vm._v("I start opened because "),
                                      _c("code", [_vm._v("visible")]),
                                      _vm._v(" is "),
                                      _c("code", [_vm._v("true")])
                                    ]),
                                    _vm._v(" "),
                                    _c("b-card-text", [
                                      _vm._v(
                                        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
                                      )
                                    ])
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-card",
                          { staticClass: "mb-1", attrs: { "no-body": "" } },
                          [
                            _c(
                              "b-card-header",
                              {
                                staticClass: "p-1",
                                attrs: { "header-tag": "header", role: "tab" }
                              },
                              [
                                _c(
                                  "b-button",
                                  {
                                    directives: [
                                      {
                                        name: "b-toggle",
                                        rawName: "v-b-toggle.accordion-2",
                                        modifiers: { "accordion-2": true }
                                      }
                                    ],
                                    staticClass: "text-left",
                                    attrs: { block: "", variant: "light" }
                                  },
                                  [_vm._v("Accordion 2")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-collapse",
                              {
                                attrs: {
                                  id: "accordion-2",
                                  accordion: "my-accordion",
                                  role: "tabpanel"
                                }
                              },
                              [
                                _c(
                                  "b-card-body",
                                  [
                                    _c("b-card-text", [
                                      _vm._v(
                                        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
                                      )
                                    ])
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-card",
                          { staticClass: "mb-1", attrs: { "no-body": "" } },
                          [
                            _c(
                              "b-card-header",
                              {
                                staticClass: "p-1",
                                attrs: { "header-tag": "header", role: "tab" }
                              },
                              [
                                _c(
                                  "b-button",
                                  {
                                    directives: [
                                      {
                                        name: "b-toggle",
                                        rawName: "v-b-toggle.accordion-3",
                                        modifiers: { "accordion-3": true }
                                      }
                                    ],
                                    staticClass: "text-left",
                                    attrs: { block: "", variant: "light" }
                                  },
                                  [_vm._v("Accordion 3")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-collapse",
                              {
                                attrs: {
                                  id: "accordion-3",
                                  accordion: "my-accordion",
                                  role: "tabpanel"
                                }
                              },
                              [
                                _c(
                                  "b-card-body",
                                  [
                                    _c("b-card-text", [
                                      _vm._v(
                                        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
                                      )
                                    ])
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-card",
                          { staticClass: "mb-1", attrs: { "no-body": "" } },
                          [
                            _c(
                              "b-card-header",
                              {
                                staticClass: "p-1",
                                attrs: { "header-tag": "header", role: "tab" }
                              },
                              [
                                _c(
                                  "b-button",
                                  {
                                    directives: [
                                      {
                                        name: "b-toggle",
                                        rawName: "v-b-toggle.accordion-4",
                                        modifiers: { "accordion-4": true }
                                      }
                                    ],
                                    staticClass: "text-left",
                                    attrs: { block: "", variant: "light" }
                                  },
                                  [_vm._v("Accordion 4")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-collapse",
                              {
                                attrs: {
                                  id: "accordion-4",
                                  accordion: "my-accordion",
                                  role: "tabpanel"
                                }
                              },
                              [
                                _c(
                                  "b-card-body",
                                  [
                                    _c("b-card-text", [
                                      _vm._v(
                                        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
                                      )
                                    ])
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-card",
                          { staticClass: "mb-1", attrs: { "no-body": "" } },
                          [
                            _c(
                              "b-card-header",
                              {
                                staticClass: "p-1",
                                attrs: { "header-tag": "header", role: "tab" }
                              },
                              [
                                _c(
                                  "b-button",
                                  {
                                    directives: [
                                      {
                                        name: "b-toggle",
                                        rawName: "v-b-toggle.accordion-5",
                                        modifiers: { "accordion-5": true }
                                      }
                                    ],
                                    staticClass: "text-left",
                                    attrs: { block: "", variant: "light" }
                                  },
                                  [_vm._v("Accordion 5")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-collapse",
                              {
                                attrs: {
                                  id: "accordion-5",
                                  accordion: "my-accordion",
                                  role: "tabpanel"
                                }
                              },
                              [
                                _c(
                                  "b-card-body",
                                  [
                                    _c("b-card-text", [
                                      _vm._v(
                                        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
                                      )
                                    ])
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-card",
                          { staticClass: "mb-1", attrs: { "no-body": "" } },
                          [
                            _c(
                              "b-card-header",
                              {
                                staticClass: "p-1",
                                attrs: { "header-tag": "header", role: "tab" }
                              },
                              [
                                _c(
                                  "b-button",
                                  {
                                    directives: [
                                      {
                                        name: "b-toggle",
                                        rawName: "v-b-toggle.accordion-6",
                                        modifiers: { "accordion-6": true }
                                      }
                                    ],
                                    staticClass: "text-left",
                                    attrs: { block: "", variant: "light" }
                                  },
                                  [_vm._v("Accordion 6")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-collapse",
                              {
                                attrs: {
                                  id: "accordion-6",
                                  accordion: "my-accordion",
                                  role: "tabpanel"
                                }
                              },
                              [
                                _c(
                                  "b-card-body",
                                  [
                                    _c("b-card-text", [
                                      _vm._v(
                                        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
                                      )
                                    ])
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-center" }, [
                          _c("button", { staticClass: "btn btn-primary" }, [
                            _vm._v("Message Us")
                          ])
                        ])
                      ],
                      1
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("Footer")
            ],
            1
          )
        ],
        1
      )
    : _c(
        "div",
        [
          _c(
            "b-container",
            { attrs: { fluid: "lg" } },
            [
              _vm.ready
                ? _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        { attrs: { md: "2" } },
                        [
                          _c("h5", [_vm._v("Category")]),
                          _vm._v(" "),
                          _c(
                            "b-form",
                            [
                              _c("b-form-group", {
                                attrs: { id: "input-group-4" },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "default",
                                      fn: function(ref) {
                                        var ariaDescribedby =
                                          ref.ariaDescribedby
                                        return [
                                          _c(
                                            "b-form-checkbox-group",
                                            {
                                              attrs: {
                                                "aria-describedby": ariaDescribedby
                                              },
                                              on: { change: _vm.searchProduct },
                                              model: {
                                                value: _vm.formSearch.check,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.formSearch,
                                                    "check",
                                                    $$v
                                                  )
                                                },
                                                expression: "formSearch.check"
                                              }
                                            },
                                            [
                                              _c(
                                                "b-form-checkbox",
                                                { attrs: { value: "food" } },
                                                [_vm._v("Food")]
                                              ),
                                              _c("br"),
                                              _vm._v(" "),
                                              _c(
                                                "b-form-checkbox",
                                                {
                                                  attrs: { value: "beverage" }
                                                },
                                                [_vm._v("Beverage")]
                                              ),
                                              _c("br"),
                                              _vm._v(" "),
                                              _c(
                                                "b-form-checkbox",
                                                { attrs: { value: "laundry" } },
                                                [_vm._v("Laundry")]
                                              ),
                                              _c("br"),
                                              _vm._v(" "),
                                              _c(
                                                "b-form-checkbox",
                                                {
                                                  attrs: {
                                                    value: "transaction"
                                                  }
                                                },
                                                [_vm._v("Transaction")]
                                              ),
                                              _c("br"),
                                              _vm._v(" "),
                                              _c(
                                                "b-form-checkbox",
                                                { attrs: { value: "bills" } },
                                                [_vm._v("Bills")]
                                              ),
                                              _c("br")
                                            ],
                                            1
                                          )
                                        ]
                                      }
                                    }
                                  ],
                                  null,
                                  false,
                                  2114792093
                                )
                              }),
                              _vm._v(" "),
                              _c("hr"),
                              _vm._v(" "),
                              _c("h5", [_vm._v("Price range")]),
                              _vm._v(" "),
                              _c(
                                "b-form",
                                {
                                  staticClass: "mb-4",
                                  on: {
                                    submit: function($event) {
                                      $event.preventDefault()
                                      return _vm.searchProduct.apply(
                                        null,
                                        arguments
                                      )
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "b-input-group",
                                    {
                                      staticClass: "mb-2 w-100",
                                      attrs: { size: "sm" }
                                    },
                                    [
                                      _c("b-form-input", {
                                        staticClass: "form-control",
                                        attrs: {
                                          placeholder: "min",
                                          type: _vm.inputTypes.number
                                        },
                                        model: {
                                          value: _vm.holder.price_min,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.holder,
                                              "price_min",
                                              $$v
                                            )
                                          },
                                          expression: "holder.price_min"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("b-form-input", {
                                        staticClass: "form-control",
                                        attrs: {
                                          placeholder: "max",
                                          type: _vm.inputTypes.number
                                        },
                                        model: {
                                          value: _vm.holder.price_max,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.holder,
                                              "price_max",
                                              $$v
                                            )
                                          },
                                          expression: "holder.price_max"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "b-input-group-append",
                                        [
                                          _c(
                                            "b-button",
                                            {
                                              staticClass: "btn btn-primary",
                                              attrs: { type: "submit" }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fa fa-search"
                                              })
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-input-group",
                                { staticClass: "mb-2" },
                                [
                                  _c("b-form-group", {
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "default",
                                          fn: function(ref) {
                                            var aria = ref.aria
                                            return [
                                              _c(
                                                "b-form-radio",
                                                {
                                                  attrs: {
                                                    "aria-describedby": aria,
                                                    value: "desc"
                                                  },
                                                  on: {
                                                    change: _vm.searchProduct
                                                  },
                                                  model: {
                                                    value: _vm.formSearch.sort,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.formSearch,
                                                        "sort",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "formSearch.sort"
                                                  }
                                                },
                                                [_vm._v("Price: High to Low")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "b-form-radio",
                                                {
                                                  attrs: {
                                                    "aria-describedby": aria,
                                                    value: "asc"
                                                  },
                                                  on: {
                                                    change: _vm.searchProduct
                                                  },
                                                  model: {
                                                    value: _vm.formSearch.sort,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.formSearch,
                                                        "sort",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "formSearch.sort"
                                                  }
                                                },
                                                [_vm._v("Price: Low to High")]
                                              )
                                            ]
                                          }
                                        }
                                      ],
                                      null,
                                      false,
                                      143738023
                                    )
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("hr"),
                              _vm._v(" "),
                              _c("div", { staticClass: "mb-2" }, [
                                _c("h5", [_vm._v("Rating")]),
                                _vm._v(" "),
                                _c("div", { staticClass: "star" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "text-orangered",
                                      attrs: { href: "#!" },
                                      on: {
                                        click: function($event) {
                                          return _vm.searchProduct(0, 5)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", { staticClass: "fa fa-star" }),
                                      _vm._v(" "),
                                      _c("i", { staticClass: "fa fa-star" }),
                                      _vm._v(" "),
                                      _c("i", { staticClass: "fa fa-star" }),
                                      _vm._v(" "),
                                      _c("i", { staticClass: "fa fa-star" }),
                                      _vm._v(" "),
                                      _c("i", { staticClass: "fa fa-star" })
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "star" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "text-orangered",
                                      attrs: { href: "#!" },
                                      on: {
                                        click: function($event) {
                                          return _vm.searchProduct(0, 4)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", { staticClass: "fa fa-star" }),
                                      _vm._v(" "),
                                      _c("i", { staticClass: "fa fa-star" }),
                                      _vm._v(" "),
                                      _c("i", { staticClass: "fa fa-star" }),
                                      _vm._v(" "),
                                      _c("i", { staticClass: "fa fa-star" }),
                                      _vm._v(" "),
                                      _c("i", { staticClass: "fa fa-star-o" })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("up")])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "star" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "text-orangered",
                                      attrs: { href: "#!" },
                                      on: {
                                        click: function($event) {
                                          return _vm.searchProduct(0, 3)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", { staticClass: "fa fa-star" }),
                                      _vm._v(" "),
                                      _c("i", { staticClass: "fa fa-star" }),
                                      _vm._v(" "),
                                      _c("i", { staticClass: "fa fa-star" }),
                                      _vm._v(" "),
                                      _c("i", { staticClass: "fa fa-star-o" }),
                                      _vm._v(" "),
                                      _c("i", { staticClass: "fa fa-star-o" })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("up")])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "star" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "text-orangered",
                                      attrs: { href: "#!" },
                                      on: {
                                        click: function($event) {
                                          return _vm.searchProduct(0, 2)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", { staticClass: "fa fa-star" }),
                                      _vm._v(" "),
                                      _c("i", { staticClass: "fa fa-star" }),
                                      _vm._v(" "),
                                      _c("i", { staticClass: "fa fa-star-o" }),
                                      _vm._v(" "),
                                      _c("i", { staticClass: "fa fa-star-o" }),
                                      _vm._v(" "),
                                      _c("i", { staticClass: "fa fa-star-o" })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("up")])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "star" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "text-orangered",
                                      attrs: { href: "#!" },
                                      on: {
                                        click: function($event) {
                                          return _vm.searchProduct(0, 1)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", { staticClass: "fa fa-star" }),
                                      _vm._v(" "),
                                      _c("i", { staticClass: "fa fa-star-o" }),
                                      _vm._v(" "),
                                      _c("i", { staticClass: "fa fa-star-o" }),
                                      _vm._v(" "),
                                      _c("i", { staticClass: "fa fa-star-o" }),
                                      _vm._v(" "),
                                      _c("i", { staticClass: "fa fa-star-o" })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("span", [_vm._v("up")])
                                ])
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { md: "10" } },
                        [
                          _c(
                            "b-form",
                            {
                              staticClass: "mb-2",
                              on: {
                                submit: function($event) {
                                  $event.preventDefault()
                                  return _vm.searchProduct(1)
                                }
                              }
                            },
                            [
                              _c(
                                "b-input-group",
                                [
                                  _c("b-form-input", {
                                    staticClass: "form-control",
                                    model: {
                                      value: _vm.formSearch.query,
                                      callback: function($$v) {
                                        _vm.$set(_vm.formSearch, "query", $$v)
                                      },
                                      expression: "formSearch.query"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "b-input-group-append",
                                    [
                                      _c(
                                        "b-button",
                                        {
                                          staticClass: "btn btn-primary",
                                          attrs: { type: "submit" }
                                        },
                                        [
                                          _vm._v("Search "),
                                          _c("i", {
                                            staticClass: "fa fa-search"
                                          })
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.formSearch.sort ||
                          _vm.formSearch.check.length ||
                          _vm.formSearch.price_max ||
                          _vm.formSearch.price_min ||
                          _vm.formSearch.star
                            ? _c("div", { staticClass: "text-break mb-3" }, [
                                _vm.formSearch.check.length
                                  ? _c(
                                      "a",
                                      {
                                        staticClass: "badge badge-primary",
                                        attrs: { href: "#!" },
                                        on: {
                                          click: function($event) {
                                            _vm.formSearch.check = []
                                            _vm.searchProduct()
                                          }
                                        }
                                      },
                                      [
                                        _vm._v("Category "),
                                        _c("i", { staticClass: "fa fa-remove" })
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.formSearch.price_min
                                  ? _c(
                                      "a",
                                      {
                                        staticClass: "badge badge-primary",
                                        attrs: { href: "#!" },
                                        on: {
                                          click: function($event) {
                                            _vm.formSearch.price_min = null
                                            _vm.holder.price_min = null
                                            _vm.searchProduct()
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "Price Min " +
                                            _vm._s(_vm.formSearch.price_min) +
                                            " "
                                        ),
                                        _c("i", { staticClass: "fa fa-remove" })
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.formSearch.price_max
                                  ? _c(
                                      "a",
                                      {
                                        staticClass: "badge badge-primary",
                                        attrs: { href: "#!" },
                                        on: {
                                          click: function($event) {
                                            _vm.formSearch.price_max = null
                                            _vm.holder.price_max = null
                                            _vm.searchProduct()
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "Price Max " +
                                            _vm._s(_vm.formSearch.price_max) +
                                            " "
                                        ),
                                        _c("i", { staticClass: "fa fa-remove" })
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.formSearch.sort
                                  ? _c(
                                      "a",
                                      {
                                        staticClass: "badge badge-primary",
                                        attrs: { href: "#!" },
                                        on: {
                                          click: function($event) {
                                            _vm.formSearch.sort = null
                                            _vm.searchProduct()
                                          }
                                        }
                                      },
                                      [
                                        _vm._v("Price Sort "),
                                        _c("i", { staticClass: "fa fa-remove" })
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.formSearch.star
                                  ? _c(
                                      "a",
                                      {
                                        staticClass: "badge badge-primary",
                                        attrs: { href: "#!" },
                                        on: {
                                          click: function($event) {
                                            _vm.formSearch.star = null
                                            _vm.searchProduct()
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.formSearch.star) +
                                            " Rating "
                                        ),
                                        _c("i", { staticClass: "fa fa-remove" })
                                      ]
                                    )
                                  : _vm._e()
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "ProductCard",
                            { attrs: { products: _vm.products } },
                            [
                              _c("div", { staticClass: "row" }, [
                                _vm.noResult
                                  ? _c("div", { staticClass: "col-lg-12" }, [
                                      _c("div", { staticClass: "card" }, [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "card-header text-center"
                                          },
                                          [
                                            _c("h2", [
                                              _vm._v("No result found")
                                            ])
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass: "card-body no-result"
                                          },
                                          [
                                            _c(
                                              "div",
                                              { attrs: { id: "main" } },
                                              [
                                                _c(
                                                  "div",
                                                  { staticClass: "fof" },
                                                  [
                                                    _c("h2", [
                                                      _vm._v(
                                                        "Try Something else"
                                                      )
                                                    ])
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ])
                                    ])
                                  : _vm._e()
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "mt-4 d-flex justify-content-center"
                            },
                            [
                              _c("PaginateButton", {
                                attrs: { paginate_data: _vm.paginate_data }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.ready ? _c("Footer") : _vm._e()
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
      _c("b-row", { staticClass: "mt-4 mb-4" }, [
        _c("div", { staticClass: "col-sm-4 mb-2" }, [
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
        _c("div", { staticClass: "col-sm-2" }, [
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
        _c("div", { staticClass: "col-sm-2" }, [
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
        _c("div", { staticClass: "col-sm-2" }, [
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
        _c("div", { staticClass: "col-sm-2" }, [
          _c("img", {
            attrs: {
              src: "/img/cod.jpg",
              alt: "",
              width: "100%",
              height: "100%"
            }
          })
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/template/PaginateButton.vue?vue&type=template&id=353b2163&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/template/PaginateButton.vue?vue&type=template&id=353b2163&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
  return _vm.paginate_data.data
    ? _c(
        "div",
        [
          _vm.paginate_data.prev_page_url
            ? [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-primary mr-1",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        return _vm.prev(_vm.paginate_data.prev_page_url)
                      }
                    }
                  },
                  [_c("i", { staticClass: "fa fa-angle-left" })]
                )
              ]
            : _vm._e(),
          _vm._v(" "),
          _vm._l(_vm.paginate_data.last_page, function(index) {
            return _c(
              "button",
              {
                key: index,
                staticClass: "btn mr-1",
                class:
                  index == _vm.paginate_data.current_page
                    ? "btn-primary"
                    : "btn-outline-primary",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    return _vm.redirect(_vm.paginate_data.path, index)
                  }
                }
              },
              [_vm._v(_vm._s(index))]
            )
          }),
          _vm._v(" "),
          _vm.paginate_data.next_page_url
            ? [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-primary",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        return _vm.next(_vm.paginate_data.next_page_url)
                      }
                    }
                  },
                  [_c("i", { staticClass: "fa fa-angle-right" })]
                )
              ]
            : _vm._e()
        ],
        2
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/template/ProductCard.vue?vue&type=template&id=0ae0c396&scoped=true&lang=true&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/template/ProductCard.vue?vue&type=template&id=0ae0c396&scoped=true&lang=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
      _vm._t("default"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row" },
        _vm._l(_vm.products, function(product) {
          return _c(
            "div",
            { key: product.id, staticClass: "col-lg-2 mb-3" },
            [
              _c(
                "router-link",
                {
                  attrs: {
                    to:
                      "/product/" +
                      product.name.replace(/\s/g, "") +
                      "/" +
                      product.id
                  }
                },
                [
                  _c("div", { staticClass: "card " }, [
                    _c("img", {
                      staticClass: "card-img-top",
                      attrs: { src: "/img/steak.jpg", alt: "..." }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "card-body" },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "card-title text-center product-name text-orangered"
                          },
                          [_vm._v(_vm._s(product.name))]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "card-text text-orangered" }, [
                          _c("div", [_vm._v("₱" + _vm._s(product.price))])
                        ]),
                        _vm._v(" "),
                        _c("StarRating", {
                          attrs: { rating: product.average_rating }
                        })
                      ],
                      1
                    )
                  ])
                ]
              )
            ],
            1
          )
        }),
        0
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/template/StarRating.vue?vue&type=template&id=74c4f92e&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/template/StarRating.vue?vue&type=template&id=74c4f92e&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "text-orangered" },
    [
      _vm.rating == 5
        ? [
            _c("i", { staticClass: "fa fa-star" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-star" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-star" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-star" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-star" })
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.rating >= 4.5 && _vm.rating < 5
        ? [
            _c("i", { staticClass: "fa fa-star" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-star" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-star" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-star" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-star-half-o" })
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.rating >= 4 && _vm.rating < 4.5
        ? [
            _c("i", { staticClass: "fa fa-star" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-star" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-star" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-star" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-star-o" })
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.rating >= 3.5 && _vm.rating < 4
        ? [
            _c("i", { staticClass: "fa fa-star" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-star" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-star" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-star-half-o" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-star-o" })
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.rating >= 3 && _vm.rating < 3.5
        ? [
            _c("i", { staticClass: "fa fa-star" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-star" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-star" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-star-o" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-star-o" })
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.rating >= 2.5 && _vm.rating < 3
        ? [
            _c("i", { staticClass: "fa fa-star" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-star" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-star-half-o" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-star-o" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-star-o" })
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.rating >= 2 && _vm.rating < 2.5
        ? [
            _c("i", { staticClass: "fa fa-star" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-star" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-star-o" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-star-o" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-star-o" })
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.rating >= 1.5 && _vm.rating < 2
        ? [
            _c("i", { staticClass: "fa fa-star" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-star-half-o" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-star-o" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-star-o" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-star-o" })
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.rating >= 1 && _vm.rating < 1.5
        ? [
            _c("i", { staticClass: "fa fa-star" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-star-o" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-star-o" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-star-o" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-star-o" })
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.rating >= 0.5 && _vm.rating < 1
        ? [
            _c("i", { staticClass: "fa fa-star-half-o" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-star-o" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-star-o" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-star-o" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-star-o" })
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.rating < 0.5 && _vm.rating != 0
        ? [
            _c("i", { staticClass: "fa fa-star-o" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-star-o" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-star-o" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-star-o" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-star-o" })
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.rating == 0 ? [_c("div", [_vm._v("Not rated yet")])] : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("51c1ea73", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/template/ProductCard.vue?vue&type=style&index=0&id=0ae0c396&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/template/ProductCard.vue?vue&type=style&index=0&id=0ae0c396&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductCard.vue?vue&type=style&index=0&id=0ae0c396&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/template/ProductCard.vue?vue&type=style&index=0&id=0ae0c396&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("c3170ef0", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);