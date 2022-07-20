module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("D4/9");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "D4/9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_result_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("WbIG");
/* harmony import */ var antd_lib_result_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_result_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ab9k");
/* harmony import */ var antd_lib_result__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_result__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MaXC");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("eGmO");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("N9OE");
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_6__);




var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;



const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  textAlign: 'center'
};

const Error404 = () => {
  const t = Object(next_intl__WEBPACK_IMPORTED_MODULE_6__["useTranslations"])();
  return __jsx("div", {
    style: style
  }, __jsx(antd_lib_result__WEBPACK_IMPORTED_MODULE_1___default.a, {
    status: "404",
    title: "404",
    subTitle: t('pageMissing'),
    extra: __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      type: "primary",
      onClick: () => next_router__WEBPACK_IMPORTED_MODULE_5___default.a.replace('/')
    }, t('backHome'))
  }));
};

const ServerError = ({
  statusCode
}) => {
  const t = Object(next_intl__WEBPACK_IMPORTED_MODULE_6__["useTranslations"])();
  return __jsx("div", {
    style: style
  }, __jsx(antd_lib_result__WEBPACK_IMPORTED_MODULE_1___default.a, {
    status: statusCode,
    title: statusCode,
    subTitle: t('serverNotAvaliable'),
    extra: __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      type: "primary",
      onClick: () => next_router__WEBPACK_IMPORTED_MODULE_5___default.a.replace('/')
    }, t('backHome'))
  }));
};

function Error({
  statusCode
}) {
  if (!statusCode) {
    return __jsx("p", {
      style: {
        textAlign: 'center',
        padding: '1rem 0'
      }
    }, "An error occurred on client");
  }

  if (+statusCode === 404) {
    return __jsx(Error404, null);
  }

  return __jsx(ServerError, {
    statusCode: 404
  });
}

Error.getInitialProps = ({
  res,
  err
}) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ }),

/***/ "MaXC":
/***/ (function(module, exports) {



/***/ }),

/***/ "N9OE":
/***/ (function(module, exports) {

module.exports = require("next-intl");

/***/ }),

/***/ "WbIG":
/***/ (function(module, exports) {



/***/ }),

/***/ "ab9k":
/***/ (function(module, exports) {

module.exports = require("antd/lib/result");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "eGmO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ })

/******/ });