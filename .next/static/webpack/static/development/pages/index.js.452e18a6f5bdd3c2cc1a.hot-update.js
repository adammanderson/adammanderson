webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_components_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/components/slider */ "./lib/components/slider/index.js");
var _jsxFileName = "/home/adam/dev/adammanderson/pages/index.js";



var IndexPage = function IndexPage(props) {
  var featuredPosts = props.data.allMarkdownRemark.edges;
  var slides = featuredPosts.map(function (post) {
    return {
      title: post.node.frontmatter.title,
      category: post.node.frontmatter.category,
      date: post.node.frontmatter.date,
      image: post.node.frontmatter.image,
      excerpt: post.node.excerpt,
      slug: post.node.fields.slug
    };
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_components_slider__WEBPACK_IMPORTED_MODULE_1__["default"], {
    slides: slides,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Hi people"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Welcome to your new Gatsby site."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Now go build something great."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/page-2/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Go to page 2"));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.452e18a6f5bdd3c2cc1a.hot-update.js.map