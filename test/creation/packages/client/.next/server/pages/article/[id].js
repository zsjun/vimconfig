module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "/xgg":
/***/ (function(module, exports) {



/***/ }),

/***/ "0/K+":
/***/ (function(module, exports) {



/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "2+Jm":
/***/ (function(module, exports) {

module.exports = {
	"wrapper": "ILwjOWV5UwcJFf9ezqGA0",
	"articleItem": "_2D8ED0giWo1nndxIezP9QV",
	"title": "_1IGTo-a5f9XSMJzXpuwVLp",
	"contentWrapper": "_3PsE-Wu3HdzQ7gDzVt-Ym2",
	"desc": "_1a1sLsWPcIiIOw3Zw2i3it",
	"time": "_2Mkgs6voFLMQqzoODDiOee",
	"coverWrapper": "_1pOcxenLy4i0bdMwF_z7Pp",
	"meta": "KKzJyhKAimSvVUzx_qeZY",
	"seperator": "ElyAw9QkgByDAuselHsq",
	"number": "_1lythm_jbjMURtN-zieAom",
	"info": "FQiYOEaWTwMrtdNTVxicQ"
};

/***/ }),

/***/ "27LO":
/***/ (function(module, exports) {

module.exports = {
	"wrap": "_3tC3y9W6nEYVdAwGypNta9",
	"fixed": "_3DPqg1sEeVKyZvQGiGR7MK",
	"widgetWrapper": "opW4K-r7eKwtlgiMzfCHm",
	"active": "_2o4PbypFMQi6hxwwPwV5nz",
	"left": "_1r_Dp71aY9wU_PZOrRyGzl",
	"right": "_3yp3HpYTQik_UvNquTL2uQ",
	"isRightNodeMobileHidden": "_2dyoSl4ynuBmhwRO6bebOZ"
};

/***/ }),

/***/ "27qp":
/***/ (function(module, exports) {

module.exports = require("antd/lib/popover");

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "2ZpW":
/***/ (function(module, exports) {

module.exports = require("date-fns/formatDistance");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("63sL");


/***/ }),

/***/ "3PsY":
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5MOb":
/***/ (function(module, exports) {

module.exports = {
	"articleWrap": "_1PHJAeCOolx-T8BaNjMwBv",
	"coverWrapper": "_36ecn75oMuoEAqu26ua6rb",
	"metaInfoWrap": "SU8jTKpxU-YwxHLmnQU9S",
	"title": "_2cky5LWx5lBlMgCxPs3lKZ",
	"desc": "_31PkRVXZM2YAMHigLQ46EH",
	"footerInfoWrap": "_1F8nZG_3e-sxtkzObh163H",
	"copyrightInfo": "_2qMEw2QUMeyQzgM1G1J4P",
	"tagsWrap": "YaNnA2xi5_ckaCl-8aYYR",
	"tagWrapper": "_1y5dd5_oonveH-Ckt8h6So",
	"tag": "_27edTqLaiZQOOyhXD5mE5j",
	"commentWrap": "_2fbSjwHbQJCAkZhQzBf7Nu",
	"isBg": "_2SN-sPNlVoofI2YBe9lbj6"
};

/***/ }),

/***/ "63sL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fwXI");
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xKsY");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nTym");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("foLw");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("cUip");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Uqqx");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("tL+A");
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("3PsY");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("zIXN");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("N9OE");
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("nZwT");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _context_global__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("gFb0");
/* harmony import */ var _layout_DoubleColumnLayout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("zRT3");
/* harmony import */ var _providers_article__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("hfvm");
/* harmony import */ var _components_LocaleTime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("JMli");
/* harmony import */ var _components_ImageViewer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("GvOY");
/* harmony import */ var _components_Comment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("cor7");
/* harmony import */ var _components_ArticleRecommend__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("PzmL");
/* harmony import */ var _components_MarkdownReader__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("wFKl");
/* harmony import */ var _components_Toc__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("yySa");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("5MOb");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_23__);








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

















const url = __webpack_require__("bzos");

const Article = ({
  article
}) => {
  const t = Object(next_intl__WEBPACK_IMPORTED_MODULE_12__["useTranslations"])();
  const {
    setting
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useContext"])(_context_global__WEBPACK_IMPORTED_MODULE_14__[/* GlobalContext */ "a"]);
  const passwdRef = Object(react__WEBPACK_IMPORTED_MODULE_8__["useRef"])(null);
  const {
    0: shouldCheckPassWord,
    1: setShouldCheckPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(article && article.needPassword);
  const {
    0: shouldCheckPay,
    1: setShouldCheckPay
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(article && article.totalAmount && !article.isPay); // const [shouldCheckPay, setShouldCheckPay] = useState(true);

  const tocs = article && article.toc ? JSON.parse(article.toc) : []; // 检查文章密码

  const checkPassWord = Object(react__WEBPACK_IMPORTED_MODULE_8__["useCallback"])(() => {
    _providers_article__WEBPACK_IMPORTED_MODULE_16__[/* ArticleProvider */ "a"].checkPassword(article.id, passwdRef.current).then(res => {
      if (res.pass) {
        Object.assign(article, res);
        setShouldCheckPassword(false);
      } else {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_7___default.a.error(t('wrongPasswd'));

        setShouldCheckPassword(true);
      }
    });
  }, [t, article]); // 发起支付

  const back = Object(react__WEBPACK_IMPORTED_MODULE_8__["useCallback"])(() => {
    next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/');
  }, []);

  const checkPassWordModal = __jsx(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
    title: t('protectedArticleMsg'),
    cancelText: t('backHome'),
    okText: t('confirm'),
    visible: shouldCheckPassWord,
    onOk: checkPassWord,
    onCancel: back
  }, __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    label: t('passwd')
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a.Password, {
    onChange: e => {
      passwdRef.current = e.target.value;
    }
  })));

  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(() => {
    setShouldCheckPassword(article && article.needPassword);
  }, [article]); // 更新阅读量

  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(() => {
    if (!shouldCheckPassWord) {
      _providers_article__WEBPACK_IMPORTED_MODULE_16__[/* ArticleProvider */ "a"].updateArticleViews(article.id);
    }
  }, [shouldCheckPassWord, article]);

  const Content = __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, checkPassWordModal, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_9__["Helmet"], null, __jsx("title", null, (article.title || t('unknownTitle')) + ' | ' + setting.systemTitle)), __jsx(_components_ImageViewer__WEBPACK_IMPORTED_MODULE_18__[/* ImageViewer */ "a"], {
    containerSelector: "#js-article-wrapper"
  }, __jsx("article", {
    id: "js-article-wrapper",
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_23___default.a.articleWrap
  }, setting.systemUrl && __jsx("meta", {
    itemProp: "url",
    content: url.resolve(setting.systemUrl, `/article/${article.id}`)
  }), __jsx("meta", {
    itemProp: "headline",
    content: article.title
  }), article.tags && __jsx("meta", {
    itemProp: "keywords",
    content: article.tags.map(tag => tag.label).join(' ')
  }), __jsx("meta", {
    itemProp: "dataPublished",
    content: article.publishAt
  }), article.cover && __jsx("meta", {
    itemProp: "image",
    content: article.cover
  }), article.cover && __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_23___default.a.coverWrapper
  }, __jsx("img", {
    src: article.cover,
    alt: t('articleCover')
  })), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_23___default.a.metaInfoWrap
  }, __jsx("h1", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_23___default.a.title
  }, article.title), __jsx("p", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_23___default.a.desc
  }, __jsx("span", null, t('publishAt'), __jsx(_components_LocaleTime__WEBPACK_IMPORTED_MODULE_17__[/* LocaleTime */ "a"], {
    date: article.publishAt
  })), __jsx("span", null, " \u2022 "), __jsx("span", null, t('readings'), " ", article.views))), __jsx(_components_MarkdownReader__WEBPACK_IMPORTED_MODULE_21__[/* MarkdownReader */ "a"], {
    content: article.html
  }), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_23___default.a.footerInfoWrap
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_23___default.a.copyrightInfo
  }, t('publishAt'), __jsx(_components_LocaleTime__WEBPACK_IMPORTED_MODULE_17__[/* LocaleTime */ "a"], {
    date: article.publishAt
  }), " | ", t('copyrightInfo'), "\uFF1A", __jsx("a", {
    href: "https://creativecommons.org/licenses/by-nc/3.0/cn/deed.zh",
    target: "_blank",
    rel: "noreferrer"
  }, t('copyrightContent'))), article.tags && article.tags.length ? __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_23___default.a.tagsWrap
  }, article.tags.map(tag => {
    return __jsx("div", {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_23___default.a.tagWrapper,
      key: tag.id
    }, __jsx("div", {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_23___default.a.tag
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      href: '/tag/[tag]',
      as: '/tag/' + tag.value,
      scroll: false
    }, __jsx("a", null, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_13__["TagOutlined"], null), __jsx("span", null, tag.label)))));
  })) : null)), article.isCommentable && __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_23___default.a.commentWrap
  }, __jsx("p", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_23___default.a.title
  }, t('comment')), __jsx(_components_Comment__WEBPACK_IMPORTED_MODULE_19__[/* Comment */ "b"], {
    key: article.id,
    hostId: article.id
  }))));

  const Aside = __jsx("div", {
    className: 'sticky'
  }, __jsx(_components_ArticleRecommend__WEBPACK_IMPORTED_MODULE_20__[/* ArticleRecommend */ "a"], {
    articleId: article.id,
    mode: "inline"
  }), tocs && tocs.length ? __jsx(_components_Toc__WEBPACK_IMPORTED_MODULE_22__[/* Toc */ "a"], {
    key: article.id,
    tocs: tocs,
    maxHeight: '80vh'
  }) : null);

  return __jsx(_layout_DoubleColumnLayout__WEBPACK_IMPORTED_MODULE_15__[/* DoubleColumnLayout */ "a"], {
    leftNode: Content,
    rightNode: Aside,
    likesProps: {
      defaultCount: article.likes,
      id: article.id,
      api: (id, type) => _providers_article__WEBPACK_IMPORTED_MODULE_16__[/* ArticleProvider */ "a"].updateArticleLikes(id, type).then(res => res.likes)
    },
    showComment: article.isCommentable,
    shareProps: shouldCheckPassWord ? null : {
      cover: article.cover,
      title: article.title,
      desc: article.summary,
      url: `/article/${article.id}`
    },
    showPay: shouldCheckPay ? {
      id: article.id,
      totalAmount: article.totalAmount
    } : null
  });
};

Article.getInitialProps = async ctx => {
  const {
    id
  } = ctx.query;
  const article = await _providers_article__WEBPACK_IMPORTED_MODULE_16__[/* ArticleProvider */ "a"].getArticle(id);
  return {
    article
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Article);

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7LGd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useAsyncLoading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useAsyncLoading(action, wait = 200) {
  const timerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const {
    0: pending,
    1: setPending
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const actionWithPending = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((...args) => {
    setPending(true);
    const promise = action(...args);
    promise.then(() => setPending(false), () => setPending(false));
    return promise;
  }, [action]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setLoading(pending);
    }, wait);
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [wait, pending]);
  return [actionWithPending, loading];
}

/***/ }),

/***/ "8sqt":
/***/ (function(module, exports) {

module.exports = {
	"wrapper": "SO1DW6R4gpGKoWYBL5g62",
	"text": "_2BvFe3NW5PA4mSYpyR8WWL"
};

/***/ }),

/***/ "9Oib":
/***/ (function(module, exports) {

module.exports = require("highlight.js");

/***/ }),

/***/ "9ubE":
/***/ (function(module, exports) {

module.exports = require("antd/lib/avatar");

/***/ }),

/***/ "CbT5":
/***/ (function(module, exports) {



/***/ }),

/***/ "E4SY":
/***/ (function(module, exports) {

module.exports = require("react-lazyload");

/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "GvOY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageViewer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var viewerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ajf4");
/* harmony import */ var viewerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(viewerjs__WEBPACK_IMPORTED_MODULE_1__);


const ImageViewer = ({
  containerSelector,
  children
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const el = document.querySelector(containerSelector);

    if (!el) {
      return null;
    }

    const viewer = new viewerjs__WEBPACK_IMPORTED_MODULE_1___default.a(el, {
      inline: false
    });
    const io = new MutationObserver(() => {
      viewer.update();
    });
    io.observe(el, {
      childList: true,
      subtree: true
    });
    return () => {
      io.disconnect();
      viewer.destroy();
    };
  }, [containerSelector]);
  return children;
};

/***/ }),

/***/ "HUSJ":
/***/ (function(module, exports) {

module.exports = {
	"wrapper": "ammbB8tpRTlzwGu9Q8GNE",
	"inline": "_3PpmFreY8xlC6Z2Y0lcyk-",
	"title": "_1hh60i8CByuosza1JbgE0Q",
	"inlineWrapper": "_1PytTgSelvgOTMZR4ckInB",
	"articleItem": "_2ACIhiMi4ZeRlBJRdJsgl8",
	"meta": "_2RVozARVaMM9EAbtdhO6R-"
};

/***/ }),

/***/ "JMli":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocaleTime; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2ZpW");
/* harmony import */ var date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Skji");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns_format__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns_locale_zh_CN__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("k/ZN");
/* harmony import */ var date_fns_locale_zh_CN__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_zh_CN__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




let callbacks = [];
setInterval(() => {
  callbacks.forEach(cb => cb());
}, 1000 * 60);

function eachMinute(fn) {
  callbacks.push(fn);
  return () => {
    callbacks = callbacks.filter(cb => cb !== fn);
  };
}

const getTimeago = date => {
  let content = date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_1___default()(new Date(date), new Date(), {
    addSuffix: true,
    locale: date_fns_locale_zh_CN__WEBPACK_IMPORTED_MODULE_3___default.a
  });
  content = content.replace('about', '').replace('less than a minute ago', 'just now').replace('minute', 'min');
  return content;
};

const LocaleTime = ({
  date,
  timeago,
  format = 'yyyy-MM-dd HH:mm:ss'
}) => {
  const {
    0: _,
    1: setMinutesMounted
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0); // eslint-disable-line no-unused-vars

  const callback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    callback.current = eachMinute(() => {
      setMinutesMounted(state => ++state);
    });
    return () => {
      if (callback.current) {
        callback.current();
      }
    };
  }, []);
  const formated = date_fns_format__WEBPACK_IMPORTED_MODULE_2___default()(new Date(date), format);
  return __jsx("time", {
    dateTime: formated
  }, timeago ? getTimeago(date) : formated);
};

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "KwCx":
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ }),

/***/ "LIou":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Share; });

// EXTERNAL MODULE: ./node_modules/antd/lib/modal/style/index.js
var style = __webpack_require__("fwXI");

// EXTERNAL MODULE: external "antd/lib/modal"
var modal_ = __webpack_require__("xKsY");
var modal_default = /*#__PURE__*/__webpack_require__.n(modal_);

// EXTERNAL MODULE: ./node_modules/antd/lib/message/style/index.js
var message_style = __webpack_require__("tL+A");

// EXTERNAL MODULE: external "antd/lib/message"
var message_ = __webpack_require__("3PsY");
var message_default = /*#__PURE__*/__webpack_require__.n(message_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next-intl"
var external_next_intl_ = __webpack_require__("N9OE");

// EXTERNAL MODULE: ./src/providers/http.ts
var http = __webpack_require__("pUN5");

// CONCATENATED MODULE: ./src/providers/poster.ts

class poster_PosterProvider {
  static async createPoster(data) {
    return http["a" /* httpProvider */].post('/poster', data);
  }

}
// EXTERNAL MODULE: ./src/context/global.tsx
var global = __webpack_require__("gFb0");

// EXTERNAL MODULE: ./src/components/Share/index.module.scss
var index_module = __webpack_require__("xEna");
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);

// EXTERNAL MODULE: ./src/hooks/useToggle.ts
var useToggle = __webpack_require__("M7TQ");

// EXTERNAL MODULE: ./src/utils/index.tsx
var utils = __webpack_require__("MLMA");

// CONCATENATED MODULE: ./src/components/Share/index.tsx




var __jsx = external_react_default.a.createElement;








const urllib = __webpack_require__("bzos");

const QRCode = __webpack_require__("QiC2");

const Share = ({
  cover,
  title,
  desc,
  url,
  children
}) => {
  const t = Object(external_next_intl_["useTranslations"])('shareNamespace');
  const ref = Object(external_react_["useRef"])(null);
  const {
    setting,
    locale
  } = Object(external_react_["useContext"])(global["a" /* GlobalContext */]);
  const systemUrl = setting.systemUrl || '';
  const [loading, toggleLoading] = Object(useToggle["a" /* useToggle */])(false);
  const [visible, toggleVisible] = Object(useToggle["a" /* useToggle */])(false);
  const fullUrl = Object(external_react_["useMemo"])(() => urllib.resolve(systemUrl, url), [systemUrl, url]);
  const qrcode = Object(external_react_["useMemo"])(() => new QRCode({
    content: fullUrl,
    padding: 0,
    width: 80,
    height: 80,
    color: '#000000',
    background: '#ffffff'
  }), [fullUrl]);

  const save = async e => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    e.stopPropagation();
    toggleLoading();
    const node = ref.current;
    const target = node.firstChild;

    const hide = message_default.a.loading(t('createingPoster'), 0);

    try {
      const ret = await poster_PosterProvider.createPoster({
        name: `${locale}-${title}`,
        html: node.innerHTML,
        width: target.offsetWidth + 16,
        height: target.offsetHeight,
        pageUrl: location.pathname
      });

      message_default.a.success(t('createdPosterSuccess'));

      Object(utils["a" /* download */])(ret);
    } catch (e) {
      message_default.a.error(t('createdPosterError'));
    } finally {
      toggleLoading();
      hide();
    }
  };

  const content = // 以下的内联样式，请勿修改，将用于服务端海报生成
  __jsx("div", {
    ref: ref,
    className: index_module_default.a.wrapper
  }, __jsx("div", {
    style: {
      width: 375,
      background: '#fff',
      overflow: 'hidden'
    },
    ref: ref
  }, __jsx("div", null, cover && __jsx("img", {
    style: {
      width: '100%',
      borderRadius: '2px',
      objectFit: 'cover'
    },
    src: cover
  }), __jsx("div", {
    style: {
      minWidth: 225,
      padding: '12px 0',
      border: 0,
      marginBottom: 0,
      color: 'rgba(0, 0, 0, 0.85)',
      overflow: 'hidden',
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '22px'
    }
  }, title), __jsx("div", {
    style: {
      display: '-webkit-box',
      maxWidth: '100%',
      padding: '0 0 12px',
      color: 'rgba(0, 0, 0, 0.65)',
      fontSize: 14
    }
  }, desc)), __jsx("div", {
    style: {
      position: 'relative',
      height: 80
    }
  }, __jsx("div", {
    style: {
      position: 'absolute',
      left: 0,
      width: 80,
      height: 80,
      padding: 0
    },
    dangerouslySetInnerHTML: {
      __html: qrcode.svg()
    }
  }), __jsx("div", {
    style: {
      position: 'absolute',
      left: 80,
      padding: '8px 16px',
      width: 295,
      height: 80
    }
  }, __jsx("p", {
    style: {
      position: 'absolute',
      top: 0,
      width: '100%',
      color: 'rgba(0, 0, 0, 0.85)'
    }
  }, t('qrcode')), __jsx("p", {
    style: {
      position: 'absolute',
      bottom: 0,
      color: 'rgba(0, 0, 0, 0.65)',
      fontSize: '0.9em'
    }
  }, t('shareFrom'), ' ', __jsx("a", {
    style: {
      color: '#ff0064'
    },
    href: fullUrl
  }, setting.systemTitle))))));

  Object(external_react_["useEffect"])(() => {
    const handler = () => {
      const y = Object(utils["c" /* getDocumentScrollTop */])();

      if (visible && y > 50) {
        toggleVisible(false);
      }
    };

    document.addEventListener('scroll', handler);
    return () => {
      document.removeEventListener('scroll', handler);
    };
  }, [visible, toggleVisible]);
  return __jsx(external_react_default.a.Fragment, null, __jsx(modal_default.a, {
    title: t('title'),
    width: 400,
    visible: visible,
    bodyStyle: {
      display: 'flex',
      justifyContent: 'center',
      overflowX: 'hidden'
    },
    onCancel: e => {
      e.preventDefault();
      e.nativeEvent.stopImmediatePropagation();
      e.stopPropagation();
      toggleVisible(false);
    },
    onOk: save,
    okText: "\u4E0B\u8F7D",
    cancelText: "\u5173\u95ED",
    okButtonProps: {
      loading
    },
    maskClosable: false,
    transitionName: '',
    maskTransitionName: ''
  }, content), __jsx("span", {
    onClickCapture: e => {
      e.preventDefault();
      e.nativeEvent.stopImmediatePropagation();
      e.stopPropagation();
      toggleVisible();
    }
  }, children || __jsx("div", {
    className: index_module_default.a.iconWrap
  }, __jsx("svg", {
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em"
  }, __jsx("path", {
    d: "M753.607 584.7c-48.519 0-91.596 23.298-118.66 59.315l-233.123-116.96c3.684-12.936 5.657-26.591 5.657-40.71 0-15.465-2.369-30.374-6.76-44.391l232.241-116.52c26.916 37.549 70.919 62.017 120.644 62.017 81.926 0 148.34-66.412 148.34-148.34 0-81.926-66.413-148.34-148.34-148.34-81.927 0-148.34 66.413-148.34 148.34 0 5.668 0.33 11.258 0.948 16.762l-244.945 122.892c-26.598-25.259-62.553-40.762-102.129-40.762-81.926 0-148.34 66.412-148.34 148.34s66.413 148.34 148.34 148.34c41.018 0 78.144-16.648 104.997-43.555l242.509 121.668c-0.904 6.621-1.382 13.374-1.382 20.242 0 81.927 66.412 148.34 148.34 148.34s148.34-66.413 148.34-148.34c-0.001-81.925-66.409-148.339-148.336-148.339l0 0z",
    fill: "currentColor"
  })))));
};

/***/ }),

/***/ "M7TQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useToggle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useToggle(initialValue) {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue);
  const toggle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((arg = null) => {
    if (arg !== null && typeof arg === 'boolean') {
      setValue(arg);
    } else {
      setValue(v => !v);
    }
  }, []);
  return [value, toggle];
}

/***/ }),

/***/ "MLMA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getRandomColor; });
/* unused harmony export throttle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isOdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return elementInViewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getDocumentScrollTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return download; });
const colors = ['#52c41a', '#f5222d', '#1890ff', '#faad14', '#ff0064', '#722ed1'];
const getRandomColor = (() => {
  const cache = {};
  return key => {
    if (!cache[key]) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      cache[key] = color;
      return color;
    }

    return cache[key];
  };
})();
function throttle(fn, threshhold) {
  let last;
  let timer;
  threshhold || (threshhold = 250);
  return function () {
    const context = this; // eslint-disable-line @typescript-eslint/no-this-alias

    const args = arguments; // eslint-disable-line prefer-rest-params

    const now = +new Date();

    if (last && now < last + threshhold) {
      clearTimeout(timer);
      timer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}
const isOdd = v => v % 2 !== 0;
function elementInViewport(el) {
  let top = el.offsetTop;
  let left = el.offsetLeft;
  const width = el.offsetWidth;
  const height = el.offsetHeight;

  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return top < window.pageYOffset + window.innerHeight && left < window.pageXOffset + window.innerWidth && top + height > window.pageYOffset && left + width > window.pageXOffset;
}
function getDocumentScrollTop() {
  return document.documentElement.scrollTop || window.pageYOffset || window.scrollY || document.body.scrollTop;
}
function download({
  name,
  url
}) {
  const eleLink = document.createElement('a');
  eleLink.download = name;
  eleLink.style.display = 'none';
  eleLink.href = url;
  document.body.appendChild(eleLink);
  eleLink.click();
  document.body.removeChild(eleLink);
}

/***/ }),

/***/ "MaXC":
/***/ (function(module, exports) {



/***/ }),

/***/ "N9OE":
/***/ (function(module, exports) {

module.exports = require("next-intl");

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = __webpack_require__("0G5g"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "PzmL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleRecommend; });
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nT0F");
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vEvA");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("N9OE");
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_useAsyncLoading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("7LGd");
/* harmony import */ var _providers_article__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("hfvm");
/* harmony import */ var _components_Animation_Trail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("d/kO");
/* harmony import */ var _components_ArticleList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("dG4M");
/* harmony import */ var _components_LocaleTime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("JMli");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("HUSJ");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_11__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










const ArticleRecommend = ({
  mode = 'vertical',
  articleId = null,
  needTitle = true
}) => {
  const t = Object(next_intl__WEBPACK_IMPORTED_MODULE_5__["useTranslations"])();
  const [getRecommend, loading] = Object(_hooks_useAsyncLoading__WEBPACK_IMPORTED_MODULE_6__[/* useAsyncLoading */ "a"])(_providers_article__WEBPACK_IMPORTED_MODULE_7__[/* ArticleProvider */ "a"].getRecommend);
  const {
    0: articles,
    1: setArticles
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    getRecommend(articleId).then(res => {
      setArticles(res.slice(0, 6));
    });
  }, [articleId, getRecommend]);
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.wrapper, mode === 'inline' && _index_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.inline)
  }, needTitle && __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.title
  }, __jsx("span", null, t('recommendToReading'))), __jsx(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default.a, {
    spinning: loading
  }, mode === 'inline' ? articles.length <= 0 ? loading ? __jsx("div", {
    style: {
      height: 32
    }
  }) : __jsx("div", {
    className: 'empty'
  }, t('empty')) : __jsx("ul", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.inlineWrapper
  }, __jsx(_components_Animation_Trail__WEBPACK_IMPORTED_MODULE_8__[/* ListTrail */ "a"], {
    length: articles.length,
    options: {
      opacity: loading ? 0 : 1,
      height: loading ? 0 : 32,
      x: 0,
      from: {
        opacity: 0,
        height: 0,
        x: -20
      }
    },
    renderItem: index => {
      const article = articles[index];
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: `/article/[id]`,
        as: `/article/${article.id}`,
        scroll: false
      }, __jsx("a", null, __jsx("span", null, article.title), ' · ', __jsx("span", null, __jsx(_components_LocaleTime__WEBPACK_IMPORTED_MODULE_10__[/* LocaleTime */ "a"], {
        date: article.publishAt,
        timeago: true
      }))));
    }
  })) : __jsx(_components_ArticleList__WEBPACK_IMPORTED_MODULE_9__[/* ArticleList */ "a"], {
    articles: articles || [],
    coverHeight: 110,
    asRecommend: true
  })));
};

/***/ }),

/***/ "QXti":
/***/ (function(module, exports) {

module.exports = {
	"wrapper": "N1BwmgIkZZbNoeNN_FRbs",
	"textareaWrapper": "TaXtx7NU2ZhkaBRHq0-9o",
	"mask": "_3D8H76H-ABokj1dp7OR3a4",
	"emojiTrigger": "_12avHmKjidVRHTuf5Qbd4K"
};

/***/ }),

/***/ "QiC2":
/***/ (function(module, exports) {

module.exports = require("qrcode-svg");

/***/ }),

/***/ "Skji":
/***/ (function(module, exports) {

module.exports = require("date-fns/format");

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "TxAo":
/***/ (function(module, exports) {



/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "Uqqx":
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "W93S":
/***/ (function(module, exports) {



/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "Yj90":
/***/ (function(module, exports) {

module.exports = require("antd/lib/badge");

/***/ }),

/***/ "ajf4":
/***/ (function(module, exports) {

module.exports = require("viewerjs");

/***/ }),

/***/ "bybV":
/***/ (function(module, exports) {

module.exports = {
	"wrapper": "_1sKidYwHy5rfKd_e6Z5wYv",
	"item": "_3qXCrOzOrs8M_4-seSIIy4",
	"active": "_2XFs_bs8wvk8RFtVoqjKwn",
	"indicator": "_1Q_nOs9KoJ4s9_MZ1Ojq-A"
};

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.asPath || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "cUip":
/***/ (function(module, exports) {



/***/ }),

/***/ "cor7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ COMMENT_DOM_ID; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ Comment; });

// EXTERNAL MODULE: ./node_modules/antd/lib/button/style/index.js
var button_style = __webpack_require__("MaXC");

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__("eGmO");
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: ./node_modules/antd/lib/pagination/style/index.js
var pagination_style = __webpack_require__("TxAo");

// EXTERNAL MODULE: external "antd/lib/pagination"
var pagination_ = __webpack_require__("gR/H");
var pagination_default = /*#__PURE__*/__webpack_require__.n(pagination_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next-intl"
var external_next_intl_ = __webpack_require__("N9OE");

// EXTERNAL MODULE: ./src/providers/http.ts
var http = __webpack_require__("pUN5");

// CONCATENATED MODULE: ./src/providers/comment.ts

class comment_CommentProvider {
  /**
   * 获取所有评论
   */
  static async getComments(params) {
    return http["a" /* httpProvider */].get('/comment', {
      params
    });
  }
  /**
   * 获取指定评论
   * @param id
   */


  static async getComment(id) {
    return http["a" /* httpProvider */].get(`/comment/${id}`);
  }
  /**
   * 获取指定文章评论
   * @param hostId
   */


  static async getArticleComments(hostId, params) {
    return http["a" /* httpProvider */].get(`/comment/host/${hostId}`, {
      params
    });
  }
  /**
   * 添加评论
   * @param data
   */


  static async addComment(data) {
    return http["a" /* httpProvider */].post('/comment', data);
  }
  /**
   * 更新评论
   * @param id
   * @param data
   */


  static async updateComment(id, data) {
    return http["a" /* httpProvider */].patch(`/comment/${id}`, data);
  }
  /**
   * 删除评论
   * @param id
   */


  static async deleteComment(id) {
    return http["a" /* httpProvider */].delete(`/comment/${id}`);
  }

}
// EXTERNAL MODULE: ./src/hooks/useAsyncLoading.ts
var useAsyncLoading = __webpack_require__("7LGd");

// CONCATENATED MODULE: ./src/hooks/usePagination.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const usePagination = (fetch, options) => {
  const {
    page: defaultPage,
    pageSize: defaultPageSize,
    params: defaultParams,
    after
  } = _objectSpread({
    page: 1,
    pageSize: 12,
    params: {}
  }, options || {});

  const [api, loading] = Object(useAsyncLoading["a" /* useAsyncLoading */])(fetch);
  const {
    0: page,
    1: setPage
  } = Object(external_react_["useState"])(defaultPage);
  const {
    0: pageSize,
    1: setPageSize
  } = Object(external_react_["useState"])(defaultPageSize);
  const {
    0: params,
    1: setParams
  } = Object(external_react_["useState"])(defaultParams);
  const {
    0: total,
    1: setTotal
  } = Object(external_react_["useState"])(0);
  const {
    0: data,
    1: setData
  } = Object(external_react_["useState"])([]);
  const callAfter = Object(external_react_["useCallback"])(() => {
    after && after({
      page,
      pageSize,
      data,
      total,
      loading
    });
  }, [after, page, pageSize, data, total, loading]);
  const query = Object(external_react_["useCallback"])((...args) => {
    return api(...args).then(res => {
      setData(res[0]);
      setTotal(res[1]);
      callAfter();
      return res;
    });
  }, [api, callAfter]); // eslint-disable-next-line react-hooks/exhaustive-deps

  const refresh = Object(external_react_["useCallback"])(() => query(_objectSpread({
    page,
    pageSize
  }, params)), [page, pageSize, params]);
  const reset = Object(external_react_["useCallback"])(() => {
    setPage(defaultPage);
    setPageSize(defaultPageSize);
    setParams(defaultParams);
  }, [defaultPage, defaultPageSize, defaultParams]);
  Object(external_react_["useEffect"])(() => {
    query(_objectSpread({
      page,
      pageSize
    }, params)); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, pageSize, params]);
  return {
    loading,
    data,
    total,
    page,
    pageSize,
    params,
    setPage,
    setPageSize,
    setParams,
    refresh,
    reset
  };
};
// EXTERNAL MODULE: ./src/hooks/useToggle.ts
var useToggle = __webpack_require__("M7TQ");

// EXTERNAL MODULE: ./src/components/Animation/Opacity.tsx
var Opacity = __webpack_require__("zz/t");

// EXTERNAL MODULE: ./node_modules/antd/lib/message/style/index.js
var message_style = __webpack_require__("tL+A");

// EXTERNAL MODULE: external "antd/lib/message"
var message_ = __webpack_require__("3PsY");
var message_default = /*#__PURE__*/__webpack_require__.n(message_);

// EXTERNAL MODULE: ./node_modules/antd/lib/input/style/index.js
var input_style = __webpack_require__("cUip");

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__("Uqqx");
var input_default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./node_modules/antd/lib/modal/style/index.js
var modal_style = __webpack_require__("fwXI");

// EXTERNAL MODULE: external "antd/lib/modal"
var modal_ = __webpack_require__("xKsY");
var modal_default = /*#__PURE__*/__webpack_require__.n(modal_);

// EXTERNAL MODULE: ./node_modules/antd/lib/form/style/index.js
var form_style = __webpack_require__("nTym");

// EXTERNAL MODULE: external "antd/lib/form"
var form_ = __webpack_require__("foLw");
var form_default = /*#__PURE__*/__webpack_require__.n(form_);

// CONCATENATED MODULE: ./src/components/Comment/UserInfo.tsx








var __jsx = external_react_default.a.createElement;


const emailRegexp = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
const isValidUser = user => user && user.name && emailRegexp.test(user.email);
const UserInfo = ({
  visible,
  onCancel,
  onOk
}) => {
  const t = Object(external_next_intl_["useTranslations"])('commentNamespace');

  const validateEmail = (_, value, callback) => {
    if (value && !emailRegexp.test(value)) {
      callback(t('userInfoEmailValidMsg'));
    } else {
      callback();
    }
  };

  const submit = values => {
    onOk(values);
  };

  return __jsx(modal_default.a, {
    title: t('userInfoTitle'),
    okText: t('userInfoConfirm'),
    cancelText: t('userInfoCancel'),
    visible: visible,
    footer: null,
    onCancel: onCancel,
    transitionName: '',
    maskTransitionName: ''
  }, __jsx(form_default.a, {
    name: "user-info",
    onFinish: submit
  }, __jsx(form_default.a.Item, {
    label: t('userInfoName'),
    name: "name",
    rules: [{
      required: true,
      message: t('userInfoNameValidMsg')
    }]
  }, __jsx(input_default.a, null)), __jsx(form_default.a.Item, {
    label: t('userInfoEmail'),
    name: "email",
    rules: [{
      required: true,
      message: t('userInfoEmailValidMsg')
    }, {
      validator: validateEmail
    }]
  }, __jsx(input_default.a, null)), __jsx(form_default.a.Item, {
    style: {
      textAlign: 'right',
      marginBottom: 0
    }
  }, __jsx(button_default.a, {
    onClick: onCancel,
    style: {
      marginRight: 16
    }
  }, t('userInfoCancel')), __jsx(button_default.a, {
    type: "primary",
    htmlType: "submit"
  }, t('userInfoConfirm')))));
};
// EXTERNAL MODULE: ./node_modules/antd/lib/popover/style/index.js
var popover_style = __webpack_require__("/xgg");

// EXTERNAL MODULE: external "antd/lib/popover"
var popover_ = __webpack_require__("27qp");
var popover_default = /*#__PURE__*/__webpack_require__.n(popover_);

// CONCATENATED MODULE: ./src/components/Comment/CommentEditor/Emoji/emojis.ts
const emojis = {
  grinning: '😀',
  smiley: '😃',
  smile: '😄',
  grin: '😁',
  laughing: '😆',
  satisfied: '😆',
  sweat_smile: '😅',
  joy: '😂',
  wink: '😉',
  blush: '😊',
  innocent: '😇',
  heart_eyes: '😍',
  kissing_heart: '😘',
  kissing: '😗',
  kissing_closed_eyes: '😚',
  kissing_smiling_eyes: '😙',
  yum: '😋',
  stuck_out_tongue: '😛',
  stuck_out_tongue_winking_eye: '😜',
  stuck_out_tongue_closed_eyes: '😝',
  neutral_face: '😐',
  expressionless: '😑',
  no_mouth: '😶',
  smirk: '😏',
  unamused: '😒',
  relieved: '😌',
  pensive: '😔',
  sleepy: '😪',
  sleeping: '😴',
  mask: '😷',
  dizzy_face: '😵',
  sunglasses: '😎',
  confused: '😕',
  worried: '😟',
  open_mouth: '😮',
  hushed: '😯',
  astonished: '😲',
  flushed: '😳',
  frowning: '😦',
  anguished: '😧',
  fearful: '😨',
  cold_sweat: '😰',
  disappointed_relieved: '😥',
  cry: '😢',
  sob: '😭',
  scream: '😱',
  confounded: '😖',
  persevere: '😣',
  disappointed: '😞',
  sweat: '😓',
  weary: '😩',
  tired_face: '😫',
  rage: '😡',
  pout: '😡',
  angry: '😠',
  smiling_imp: '😈',
  smiley_cat: '😺',
  smile_cat: '😸',
  joy_cat: '😹',
  heart_eyes_cat: '😻',
  smirk_cat: '😼',
  kissing_cat: '😽',
  scream_cat: '🙀',
  crying_cat_face: '😿',
  pouting_cat: '😾',
  heart: '❤️',
  hand: '✋',
  raised_hand: '✋',
  v: '✌️',
  point_up: '☝️',
  fist_raised: '✊',
  fist: '✊',
  monkey_face: '🐵',
  cat: '🐱',
  cow: '🐮',
  mouse: '🐭',
  coffee: '☕',
  hotsprings: '♨️',
  anchor: '⚓',
  airplane: '✈️',
  hourglass: '⌛',
  watch: '⌚',
  sunny: '☀️',
  star: '⭐',
  cloud: '☁️',
  umbrella: '☔',
  zap: '⚡',
  snowflake: '❄️',
  sparkles: '✨',
  black_joker: '🃏',
  mahjong: '🀄',
  phone: '☎️',
  telephone: '☎️',
  envelope: '✉️',
  pencil2: '✏️',
  black_nib: '✒️',
  scissors: '✂️',
  wheelchair: '♿',
  warning: '⚠️',
  aries: '♈',
  taurus: '♉',
  gemini: '♊',
  cancer: '♋',
  leo: '♌',
  virgo: '♍',
  libra: '♎',
  scorpius: '♏',
  sagittarius: '♐',
  capricorn: '♑',
  aquarius: '♒',
  pisces: '♓',
  heavy_multiplication_x: '✖️',
  heavy_plus_sign: '➕',
  heavy_minus_sign: '➖',
  heavy_division_sign: '➗',
  bangbang: '‼️',
  interrobang: '⁉️',
  question: '❓',
  grey_question: '❔',
  grey_exclamation: '❕',
  exclamation: '❗',
  heavy_exclamation_mark: '❗',
  wavy_dash: '〰️',
  recycle: '♻️',
  white_check_mark: '✅',
  ballot_box_with_check: '☑️',
  heavy_check_mark: '✔️',
  x: '❌',
  negative_squared_cross_mark: '❎',
  curly_loop: '➰',
  loop: '➿',
  part_alternation_mark: '〽️',
  eight_spoked_asterisk: '✳️',
  eight_pointed_black_star: '✴️',
  sparkle: '❇️',
  copyright: '©️',
  registered: '®️',
  tm: '™️',
  information_source: 'ℹ️',
  m: 'Ⓜ️',
  black_circle: '⚫',
  white_circle: '⚪',
  black_large_square: '⬛',
  white_large_square: '⬜',
  black_medium_square: '◼️',
  white_medium_square: '◻️',
  black_medium_small_square: '◾',
  white_medium_small_square: '◽',
  black_small_square: '▪️',
  white_small_square: '▫️'
};
// EXTERNAL MODULE: ./src/components/Comment/CommentEditor/Emoji/index.module.scss
var index_module = __webpack_require__("8sqt");
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);

// CONCATENATED MODULE: ./src/components/Comment/CommentEditor/Emoji/index.tsx


var Emoji_jsx = external_react_default.a.createElement;



const Emoji = ({
  onClickEmoji,
  children
}) => {
  return Emoji_jsx(popover_default.a, {
    content: Emoji_jsx("ul", {
      className: index_module_default.a.wrapper
    }, Object.keys(emojis).map(key => {
      return Emoji_jsx("li", {
        key: key,
        onClick: () => onClickEmoji(emojis[key])
      }, emojis[key]);
    })),
    placement: "bottomRight",
    trigger: "click"
  }, children);
};
// EXTERNAL MODULE: ./src/components/Comment/CommentEditor/index.module.scss
var CommentEditor_index_module = __webpack_require__("QXti");
var CommentEditor_index_module_default = /*#__PURE__*/__webpack_require__.n(CommentEditor_index_module);

// CONCATENATED MODULE: ./src/components/Comment/CommentEditor/index.tsx






var CommentEditor_jsx = external_react_default.a.createElement;

function CommentEditor_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function CommentEditor_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CommentEditor_ownKeys(Object(source), true).forEach(function (key) { CommentEditor_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CommentEditor_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CommentEditor_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const {
  TextArea
} = input_default.a;
const CommentEditor = ({
  hostId,
  parentComment,
  replyComment,
  onOk,
  onClose,
  small
}) => {
  const t = Object(external_next_intl_["useTranslations"])('commentNamespace');
  const [addComment, loading] = Object(useAsyncLoading["a" /* useAsyncLoading */])(comment_CommentProvider.addComment);
  const [needSetInfo, toggleNeedSetInfo] = Object(useToggle["a" /* useToggle */])(false);
  const {
    0: user,
    1: setUser
  } = Object(external_react_["useState"])(null);
  const {
    0: content,
    1: setContent
  } = Object(external_react_["useState"])('');
  const hasValidUser = Object(external_react_["useMemo"])(() => isValidUser(user), [user]);
  const textareaPlaceholder = Object(external_react_["useMemo"])(() => replyComment ? `${t('reply')} ${replyComment.name}` : t('replyPlaceholder'), [t, replyComment]);
  const textareaSize = Object(external_react_["useMemo"])(() => small ? {
    minRows: 4,
    maxRows: 8
  } : {
    minRows: 6,
    maxRows: 12
  }, [small]);
  const btnSize = Object(external_react_["useMemo"])(() => small ? 'small' : 'middle', [small]);

  const emojiTrigger = CommentEditor_jsx("span", {
    className: CommentEditor_index_module_default.a.emojiTrigger
  }, CommentEditor_jsx("svg", {
    viewBox: "0 0 1024 1024",
    width: "18px",
    height: "18px"
  }, CommentEditor_jsx("path", {
    d: "M288.92672 400.45568c0 30.80192 24.97024 55.77216 55.77216 55.77216s55.77216-24.97024 55.77216-55.77216c0-30.7968-24.97024-55.76704-55.77216-55.76704s-55.77216 24.97024-55.77216 55.76704z m334.60224 0c0 30.80192 24.97024 55.77216 55.77216 55.77216s55.77216-24.97024 55.77216-55.77216c0-30.7968-24.97024-55.76704-55.77216-55.76704s-55.77216 24.97024-55.77216 55.76704z m-111.5392 362.4704c-78.05952 0-156.13952-39.08096-200.75008-100.3776-16.77312-22.31296-27.84256-50.15552-39.08096-72.45824-5.53472-16.77312 5.5296-33.4592 16.77312-39.08096 16.77312-5.53472 27.84256 5.53472 33.46432 16.768 5.53472 22.30784 16.77312 39.08608 27.84256 55.77728 44.61568 55.76704 100.38272 83.69664 161.664 83.69664 61.30176 0 122.7008-27.84256 156.16-78.07488 11.15136-16.77824 22.30784-38.99904 27.84256-55.77728 5.62176-16.768 22.30784-22.30272 33.4592-16.768 16.768 5.53472 22.30784 22.30272 16.768 33.4592-5.61152 27.84256-22.2976 50.14528-39.08096 72.45824-38.912 61.37856-116.98176 100.3776-195.06176 100.3776z m0 194.51392C268.4928 957.44 66.56 755.52256 66.56 511.99488 66.56 268.48256 268.4928 66.56 511.98976 66.56 755.50208 66.56 957.44 268.48256 957.44 511.99488 957.44 755.52256 755.50208 957.44 511.98976 957.44z m0-831.45728c-213.78048 0-386.00192 172.21632-386.00192 386.01216 0 213.8112 172.22144 386.0224 386.00192 386.0224 213.80096 0 386.0224-172.2112 386.0224-386.0224 0-213.79584-172.22144-386.01216-386.0224-386.01216z",
    fill: "currentColor"
  })), CommentEditor_jsx("span", null, t('emoji')));

  const storeUser = Object(external_react_["useCallback"])(user => {
    if (!isValidUser(user)) {
      return;
    }

    window.localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
    toggleNeedSetInfo(false);
  }, [toggleNeedSetInfo]);
  const onInput = Object(external_react_["useCallback"])(e => {
    if (!hasValidUser) {
      return;
    }

    setContent(e.target.value);
  }, [hasValidUser]);
  const addEmoji = Object(external_react_["useCallback"])(emoji => {
    if (!hasValidUser) {
      return;
    }

    setContent(`${content}${emoji}`);
  }, [content, hasValidUser]);
  const submit = Object(external_react_["useCallback"])(() => {
    const data = CommentEditor_objectSpread(CommentEditor_objectSpread({
      hostId
    }, user), {}, {
      content,
      url: window.location.pathname
    });

    if (parentComment && parentComment.id) {
      Object.assign(data, {
        parentCommentId: parentComment.id
      });
    }

    if (replyComment) {
      Object.assign(data, {
        replyUserName: replyComment.name,
        replyUserEmail: replyComment.email
      });
    }

    addComment(data).then(() => {
      message_default.a.success(t('commentSuccess'));

      setContent('');
      onOk && onOk();
    });
  }, [t, hostId, parentComment, replyComment, onOk, user, content, addComment]);
  Object(external_react_["useEffect"])(() => {
    const userInfo = window.localStorage.getItem('user');

    try {
      const user = JSON.parse(userInfo);
      setUser(user);
    } catch (err) {//
    }
  }, []);
  return CommentEditor_jsx("div", {
    className: external_classnames_default()(CommentEditor_index_module_default.a.wrapper)
  }, CommentEditor_jsx(UserInfo, {
    visible: needSetInfo,
    onCancel: toggleNeedSetInfo,
    onOk: storeUser
  }), CommentEditor_jsx("div", {
    className: CommentEditor_index_module_default.a.textareaWrapper
  }, !hasValidUser && CommentEditor_jsx("div", {
    className: CommentEditor_index_module_default.a.mask,
    onClick: toggleNeedSetInfo
  }), CommentEditor_jsx(TextArea, {
    placeholder: textareaPlaceholder,
    autoSize: textareaSize,
    value: content,
    onChange: onInput
  })), CommentEditor_jsx("footer", null, hasValidUser ? CommentEditor_jsx(Emoji, {
    onClickEmoji: addEmoji
  }, emojiTrigger) : CommentEditor_jsx("div", {
    onClick: toggleNeedSetInfo
  }, emojiTrigger), CommentEditor_jsx("div", null, onClose && CommentEditor_jsx(button_default.a, {
    onClick: onClose,
    style: {
      marginRight: 16
    },
    size: btnSize
  }, t('close')), CommentEditor_jsx(button_default.a, {
    loading: loading,
    onClick: submit,
    type: "primary",
    disabled: !content,
    size: btnSize
  }, t('publish')))));
};
// EXTERNAL MODULE: ./node_modules/antd/lib/avatar/style/index.js
var avatar_style = __webpack_require__("W93S");

// EXTERNAL MODULE: external "antd/lib/avatar"
var avatar_ = __webpack_require__("9ubE");
var avatar_default = /*#__PURE__*/__webpack_require__.n(avatar_);

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// EXTERNAL MODULE: external "react-spring"
var external_react_spring_ = __webpack_require__("KwCx");

// CONCATENATED MODULE: ./src/components/Animation/Transition.tsx
var Transition_jsx = external_react_default.a.createElement;

function Transition_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Transition_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Transition_ownKeys(Object(source), true).forEach(function (key) { Transition_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Transition_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Transition_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const ConditionTransition = ({
  visible,
  options,
  children
}) => {
  const transitions = Object(external_react_spring_["useTransition"])(visible, Transition_objectSpread({
    config: {
      mass: 2,
      tension: 280,
      friction: 24,
      clamp: true
    }
  }, options));
  return Transition_jsx(external_react_default.a.Fragment, null, transitions((style, item) => item && Transition_jsx(external_react_spring_["animated"].div, {
    style: Transition_objectSpread(Transition_objectSpread({}, style), {}, {
      overflow: 'hidden'
    })
  }, children)));
};
// EXTERNAL MODULE: ./src/components/LocaleTime.tsx
var LocaleTime = __webpack_require__("JMli");

// EXTERNAL MODULE: ./src/utils/index.tsx
var utils = __webpack_require__("MLMA");

// EXTERNAL MODULE: ./src/components/Comment/CommentItem/index.module.scss
var CommentItem_index_module = __webpack_require__("ulIo");
var CommentItem_index_module_default = /*#__PURE__*/__webpack_require__.n(CommentItem_index_module);

// CONCATENATED MODULE: ./src/components/Comment/CommentItem/index.tsx


var CommentItem_jsx = external_react_default.a.createElement;

/* eslint-disable @typescript-eslint/no-use-before-define */











function CommentItem({
  comment,
  parentComment,
  isChild = false
}) {
  const t = Object(external_next_intl_["useTranslations"])('commentNamespace');
  const [editorVisible, toggleEditorVisible] = Object(useToggle["a" /* useToggle */])(false);
  const avatarSize = Object(external_react_["useMemo"])(() => isChild ? 24 : 32, [isChild]);
  const paddingHorizontal = Object(external_react_["useMemo"])(() => avatarSize + 8, [avatarSize]);
  return CommentItem_jsx("div", {
    className: external_classnames_default()({
      [CommentItem_index_module_default.a.commentItem]: true,
      [CommentItem_index_module_default.a.isParent]: !isChild,
      [CommentItem_index_module_default.a.isChild]: isChild
    })
  }, CommentItem_jsx("header", null, CommentItem_jsx(avatar_default.a, {
    size: avatarSize,
    style: {
      backgroundColor: Object(utils["d" /* getRandomColor */])(comment.name)
    }
  }, ('' + comment.name).charAt(0).toUpperCase()), CommentItem_jsx("span", {
    className: CommentItem_index_module_default.a.name
  }, CommentItem_jsx("strong", null, comment.name), comment.replyUserName ? CommentItem_jsx(external_react_default.a.Fragment, null, CommentItem_jsx("span", {
    style: {
      margin: '0 8px'
    }
  }, t('reply')), CommentItem_jsx("strong", {
    className: CommentItem_index_module_default.a.replyUser
  }, comment.replyUserName)) : null)), CommentItem_jsx("main", {
    style: {
      padding: `12px 0 12px ${paddingHorizontal}px`
    }
  }, CommentItem_jsx("div", {
    dangerouslySetInnerHTML: {
      __html: comment.html || comment.content
    }
  })), CommentItem_jsx("footer", {
    style: {
      paddingLeft: `${paddingHorizontal}px`
    }
  }, CommentItem_jsx("div", {
    className: CommentItem_index_module_default.a.meta
  }, comment.userAgent ? CommentItem_jsx("span", null, comment.userAgent, ' · ') : null, CommentItem_jsx(LocaleTime["a" /* LocaleTime */], {
    date: comment.createAt,
    timeago: true
  }), CommentItem_jsx("span", {
    className: CommentItem_index_module_default.a.reply,
    onClick: toggleEditorVisible
  }, CommentItem_jsx(icons_["MessageOutlined"], {
    style: {
      marginRight: 4
    }
  }), t('reply'))), CommentItem_jsx(ConditionTransition, {
    visible: editorVisible,
    options: {
      from: {
        opacity: 0,
        height: 0
      },
      enter: {
        opacity: 1,
        height: 155
      },
      leave: {
        opacity: 0,
        height: 0
      }
    }
  }, CommentItem_jsx("div", {
    className: CommentItem_index_module_default.a.editorWrapper
  }, CommentItem_jsx(CommentEditor, {
    small: true,
    hostId: comment.hostId,
    parentComment: parentComment,
    replyComment: comment,
    onOk: toggleEditorVisible,
    onClose: toggleEditorVisible
  }))), comment.children && CommentItem_jsx("div", null, CommentItem_jsx(Comments, {
    comments: comment.children,
    parentComment: comment,
    isChild: true
  }))));
}
function Comments({
  comments,
  parentComment = null,
  isChild = false
}) {
  return CommentItem_jsx(external_react_default.a.Fragment, null, comments.map(comment => {
    const component = CommentItem_jsx(CommentItem, {
      comment: comment,
      parentComment: parentComment || comment,
      isChild: isChild
    });

    return isChild ? CommentItem_jsx(Opacity["a" /* Opacity */], null, component) : component;
  }));
}
// EXTERNAL MODULE: ./src/components/Comment/index.module.scss
var Comment_index_module = __webpack_require__("gbIK");
var Comment_index_module_default = /*#__PURE__*/__webpack_require__.n(Comment_index_module);

// CONCATENATED MODULE: ./src/components/Comment/index.tsx




var Comment_jsx = external_react_default.a.createElement;









const COMMENT_DOM_ID = `js-comment-id`;
const Comment = ({
  hostId: articleId
}) => {
  const ref = Object(external_react_["useRef"])(null);
  const t = Object(external_next_intl_["useTranslations"])();
  const [firstLoad, setFirstLoad] = Object(useToggle["a" /* useToggle */])(true);
  const {
    data: comments,
    total,
    loading,
    page,
    pageSize,
    setPage
  } = usePagination(params => comment_CommentProvider.getArticleComments(articleId, params), {
    pageSize: 6,
    after: ({
      page
    }) => {
      if (page === 1 && firstLoad) {
        setFirstLoad(false);
        return;
      }

      Promise.resolve().then(() => {
        ref.current.scrollIntoView({
          behavior: 'smooth'
        });
      });
    }
  });
  return Comment_jsx("div", {
    id: COMMENT_DOM_ID,
    ref: ref
  }, Comment_jsx("div", {
    className: Comment_index_module_default.a.editorWrapper
  }, Comment_jsx(CommentEditor, {
    hostId: articleId,
    parentComment: null,
    replyComment: null
  })), Comment_jsx(Comments, {
    comments: comments
  }), Comment_jsx(Opacity["a" /* Opacity */], null, Comment_jsx("div", {
    className: Comment_index_module_default.a.pagination,
    style: {
      padding: loading || total > 0 ? '16px 0' : 0
    }
  }, !loading && total > 0 ? Comment_jsx(pagination_default.a, {
    size: "small",
    current: page,
    pageSize: pageSize,
    total: total,
    onChange: setPage
  }) : loading ? Comment_jsx(button_default.a, {
    type: "primary",
    loading: true
  }, t('loading')) : null)));
};

/***/ }),

/***/ "d/kO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListTrail; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KwCx");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const ListTrail = ({
  length,
  options,
  element = 'li',
  setItemContainerProps = () => ({}),
  renderItem
}) => {
  const C = react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"][element];
  const trail = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useTrail"])(length, _objectSpread({
    config: {
      mass: 2,
      tension: 280,
      friction: 24,
      clamp: true
    }
  }, options));
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, trail.map((style, index) => {
    return __jsx(C, _extends({
      key: index,
      style: style
    }, setItemContainerProps(index)), renderItem(index));
  }));
};

/***/ }),

/***/ "dG4M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleList; });
/* harmony import */ var antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("lSEL");
/* harmony import */ var antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xZtu");
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("N9OE");
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("nZwT");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("E4SY");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Animation_Opacity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("zz/t");
/* harmony import */ var _components_LocaleTime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("JMli");
/* harmony import */ var _components_Share__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("LIou");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("2+Jm");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_10__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









const ArticleList = ({
  articles = []
}) => {
  const t = Object(next_intl__WEBPACK_IMPORTED_MODULE_4__["useTranslations"])();
  return __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.wrapper
  }, articles && articles.length ? articles.map(article => {
    return __jsx("div", {
      key: article.id,
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.articleItem
    }, __jsx(_components_Animation_Opacity__WEBPACK_IMPORTED_MODULE_7__[/* Opacity */ "a"], null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: article.id,
      href: `/article/[pId]`,
      as: `/article/${article.id}`,
      scroll: false
    }, __jsx("a", null, __jsx("header", null, __jsx("div", {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.title
    }, article.title), __jsx("div", {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.info
    }, __jsx(antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default.a, {
      type: "vertical"
    }), __jsx("span", {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.time
    }, __jsx(_components_LocaleTime__WEBPACK_IMPORTED_MODULE_8__[/* LocaleTime */ "a"], {
      date: article.publishAt,
      timeago: true
    })), article.category && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default.a, {
      type: "vertical"
    }), __jsx("span", {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.time
    }, article.category.label)))), __jsx("main", null, article.cover && __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_6___default.a, {
      height: 120
    }, __jsx("div", {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.coverWrapper
    }, __jsx("img", {
      src: article.cover,
      alt: "cover"
    }))), __jsx("div", {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.contentWrapper
    }, __jsx("div", {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.desc
    }, article.summary), __jsx("div", {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.meta
    }, __jsx("span", null, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["HeartOutlined"], null), __jsx("span", {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.number
    }, article.likes)), __jsx("span", {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.seperator
    }, "\xB7"), __jsx("span", null, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["EyeOutlined"], null), __jsx("span", {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.number
    }, article.views)), __jsx("span", {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.seperator
    }, "\xB7"), __jsx(_components_Share__WEBPACK_IMPORTED_MODULE_9__[/* Share */ "a"], {
      cover: article.cover,
      title: article.title,
      desc: article.summary,
      url: `/article/${article.id}`
    }, __jsx("span", null, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["ShareAltOutlined"], null), __jsx("span", {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.number
    }, t('share')))))))))));
  }) : __jsx("div", {
    className: 'empty'
  }, t('empty')));
};

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "dcio":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Spring; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KwCx");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("iwtP");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("MLMA");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const Spring = ({
  containerProps = {},
  from = {},
  to = {},
  children
}) => {
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const [styles, animation] = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"])(() => _objectSpread(_objectSpread({}, from), {}, {
    config: {
      mass: 10,
      tension: 400,
      friction: 40,
      precision: 0.00001,
      clamp: true
    }
  }));
  const onViewportChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(visible => {
    if (visible) {
      animation.start(to);
    }
  }, [animation, to]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* elementInViewport */ "b"])(ref.current)) {
      animation.start(to);
    }
  }, [animation, to]);
  return __jsx(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onChange: onViewportChange
  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div, _extends({}, containerProps, {
    ref: ref,
    style: styles
  }), children));
};

/***/ }),

/***/ "eGmO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("GXs3"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (true) {
  detectDomainLocale = __webpack_require__("xOyL").detectDomainLocale;
}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (true) {
    locale = locale || (0, _normalizeLocalePath.normalizeLocalePath)(path, locales).detectedLocale;
    const detectedDomain = detectDomainLocale(domainLocales, undefined, locale);

    if (detectedDomain) {
      return `http${detectedDomain.http ? '' : 's'}://${detectedDomain.domain}${basePath || ''}${locale === detectedDomain.defaultLocale ? '' : `/${locale}`}${path}`;
    }

    return false;
  }

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (true) {
    const pathname = pathNoQueryHash(path);
    const pathLower = pathname.toLowerCase();
    const localeLower = locale && locale.toLowerCase();
    return locale && locale !== defaultLocale && !pathLower.startsWith('/' + localeLower + '/') && pathLower !== '/' + localeLower ? addPathPrefix(path, '/' + locale) : path;
  }

  return path;
}

function delLocale(path, locale) {
  if (true) {
    const pathname = pathNoQueryHash(path);
    const pathLower = pathname.toLowerCase();
    const localeLower = locale && locale.toLowerCase();
    return locale && (pathLower.startsWith('/' + localeLower + '/') || pathLower === '/' + localeLower) ? (pathname.length === locale.length + 1 ? '/' : '') + path.substr(locale.length + 1) : path;
  }

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;

  try {
    base = new URL(currentPath, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.asPath, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.asPath, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (true) {
      this.locale = locale;
      this.locales = locales;
      this.defaultLocale = defaultLocale;
      this.domainLocales = domainLocales;
      this.isLocaleDomain = !!detectDomainLocale(domainLocales, self.location.hostname);
    }

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (true) {
      this.locale = options.locale === false ? this.defaultLocale : options.locale || this.locale;

      if (typeof options.locale === 'undefined') {
        options.locale = this.locale;
      }

      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(hasBasePath(as) ? delBasePath(as) : as);
      const localePathResult = (0, _normalizeLocalePath.normalizeLocalePath)(parsedAs.pathname, this.locales);

      if (localePathResult.detectedLocale) {
        this.locale = localePathResult.detectedLocale;
        parsedAs.pathname = addBasePath(parsedAs.pathname);
        as = (0, _utils.formatWithValidation)(parsedAs);
        url = addBasePath((0, _normalizeLocalePath.normalizeLocalePath)(hasBasePath(url) ? delBasePath(url) : url, this.locales).pathname);
      }

      let didNavigate = false; // we need to wrap this in the env check again since regenerator runtime
      // moves this on its own due to the return

      if (true) {
        var _this$locales; // if the locale isn't configured hard navigate to show 404 page


        if (!((_this$locales = this.locales) != null && _this$locales.includes(this.locale))) {
          parsedAs.pathname = addLocale(parsedAs.pathname, this.locale);
          window.location.href = (0, _utils.formatWithValidation)(parsedAs); // this was previously a return but was removed in favor
          // of better dead code elimination with regenerator runtime

          didNavigate = true;
        }
      }

      const detectedDomain = detectDomainLocale(this.domainLocales, undefined, this.locale); // we need to wrap this in the env check again since regenerator runtime
      // moves this on its own due to the return

      if (true) {
        // if we are navigating to a domain locale ensure we redirect to the
        // correct domain
        if (!didNavigate && detectedDomain && this.isLocaleDomain && self.location.hostname !== detectedDomain.domain) {
          const asNoBasePath = delBasePath(as);
          window.location.href = `http${detectedDomain.http ? '' : 's'}://${detectedDomain.domain}${addBasePath(`${this.locale === detectedDomain.defaultLocale ? '' : `/${this.locale}`}${asNoBasePath === '/' ? '' : asNoBasePath}` || '/')}`; // this was previously a return but was removed in favor
          // of better dead code elimination with regenerator runtime

          didNavigate = true;
        }
      }

      if (didNavigate) {
        return new Promise(() => {});
      }
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {} // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (true) {
        if (this.locale) {
          document.documentElement.lang = this.locale;
        }
      }

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (true) {
      if (options.locale === false) {
        pathname = (0, _normalizeLocalePath.normalizeLocalePath)(pathname, this.locales).pathname;
        parsed.pathname = pathname;
        url = (0, _utils.formatWithValidation)(parsed);
        let parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(asPath);
        const localePathResult = (0, _normalizeLocalePath.normalizeLocalePath)(parsedAs.pathname, this.locales);
        parsedAs.pathname = localePathResult.pathname;
        options.locale = localePathResult.detectedLocale || this.defaultLocale;
        asPath = (0, _utils.formatWithValidation)(parsedAs);
      }
    }

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (false) {}

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && !this.isPreview && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "foLw":
/***/ (function(module, exports) {

module.exports = require("antd/lib/form");

/***/ }),

/***/ "fwXI":
/***/ (function(module, exports) {



/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gFb0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const GlobalContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  setting: {},
  i18n: {},
  locale: '',
  locales: [],
  pages: [],
  categories: [],
  tags: [],
  changeLocale: () => {}
});

/***/ }),

/***/ "gR/H":
/***/ (function(module, exports) {

module.exports = require("antd/lib/pagination");

/***/ }),

/***/ "gbIK":
/***/ (function(module, exports) {

module.exports = {
	"editorWrapper": "_13J4GEYHDRu5MejyviLpnU",
	"pagination": "_3k5-guVzUUtXzu2skrNnws"
};

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "hfvm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleProvider; });
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pUN5");

class ArticleProvider {
  /**
   * 获取所有文章
   */
  static async getArticles(params) {
    return _http__WEBPACK_IMPORTED_MODULE_0__[/* httpProvider */ "a"].get('/article', {
      params
    });
  }
  /**
   * 获取所有推荐文章
   */


  static async getAllRecommendArticles() {
    return _http__WEBPACK_IMPORTED_MODULE_0__[/* httpProvider */ "a"].get('/article/all/recommend');
  }
  /**
   * 获取分类所有文章
   * @param category
   * @param params
   */


  static async getArticlesByCategory(category, params) {
    return _http__WEBPACK_IMPORTED_MODULE_0__[/* httpProvider */ "a"].get('/article/category/' + category, {
      params
    });
  }
  /**
   * 获取标签所有文章
   * @param tag
   * @param params
   */


  static async getArticlesByTag(tag, params) {
    return _http__WEBPACK_IMPORTED_MODULE_0__[/* httpProvider */ "a"].get('/article/tag/' + tag, {
      params
    });
  }
  /**
   * 获取推荐文章
   * @param articleId
   */


  static async getRecommend(articleId = null) {
    return _http__WEBPACK_IMPORTED_MODULE_0__[/* httpProvider */ "a"].get('/article/recommend', {
      params: {
        articleId
      }
    });
  }
  /**
   * 获取所有文章归档
   */


  static async getArchives() {
    return _http__WEBPACK_IMPORTED_MODULE_0__[/* httpProvider */ "a"].get('/article/archives');
  }
  /**
   * 获取指定文章
   * @param id
   */


  static async getArticle(id) {
    return _http__WEBPACK_IMPORTED_MODULE_0__[/* httpProvider */ "a"].get(`/article/${id}`);
  }
  /**
   * 新建文章
   * @param data
   */


  static async addArticle(data) {
    return _http__WEBPACK_IMPORTED_MODULE_0__[/* httpProvider */ "a"].post('/article', data);
  }
  /**
   * 更新文章
   * @param id
   * @param data
   */


  static async updateArticle(id, data) {
    return _http__WEBPACK_IMPORTED_MODULE_0__[/* httpProvider */ "a"].patch(`/article/${id}`, data);
  }
  /**
   * 更新文章阅读量
   * @param id
   * @param data
   */


  static async updateArticleViews(id) {
    return _http__WEBPACK_IMPORTED_MODULE_0__[/* httpProvider */ "a"].post(`/article/${id}/views`);
  }
  /**
   * 更新文章喜欢数
   * @param id
   * @param data
   */


  static async updateArticleLikes(id, type) {
    return _http__WEBPACK_IMPORTED_MODULE_0__[/* httpProvider */ "a"].post(`/article/${id}/likes`, {
      type
    });
  }
  /**
   * 校验文章密码是否正确
   * @param id
   * @param password
   */


  static async checkPassword(id, password) {
    return _http__WEBPACK_IMPORTED_MODULE_0__[/* httpProvider */ "a"].post(`/article/${id}/checkPassword`, {
      password
    });
  }
  /**
   * 删除文章
   * @param id
   */


  static async deleteArticle(id) {
    return _http__WEBPACK_IMPORTED_MODULE_0__[/* httpProvider */ "a"].delete(`/article/${id}`);
  }

}

/***/ }),

/***/ "iwtP":
/***/ (function(module, exports) {

module.exports = require("react-visibility-sensor");

/***/ }),

/***/ "k/ZN":
/***/ (function(module, exports) {

module.exports = require("date-fns/locale/zh-CN");

/***/ }),

/***/ "lSEL":
/***/ (function(module, exports) {



/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "nT0F":
/***/ (function(module, exports) {



/***/ }),

/***/ "nTym":
/***/ (function(module, exports) {



/***/ }),

/***/ "nZwT":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "oLBY":
/***/ (function(module, exports) {

module.exports = require("copy-to-clipboard");

/***/ }),

/***/ "pUN5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return httpProvider; });
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tL+A");
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("3PsY");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



const httpProvider = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({
  baseURL: "https://creationapi.shbwyz.com/api",
  timeout: 60000
});
httpProvider.interceptors.request.use(config => {
  return config;
}, () => {
  throw new Error('发起请求出错');
});
httpProvider.interceptors.response.use(data => {
  if (data.status && +data.status === 200 && data.data.status === 'error') {
     false && false;
    return null;
  }

  const res = data.data;

  if (!res.success) {
    antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.error(res.msg);

    return null;
  }

  return res.data;
}, err => {
  if (err && err.response && err.response.status) {
    const status = err.response.status;

    switch (status) {
      case 504:
      case 404:
         false && false;
        break;

      default:
         false && false;
    }
  }

  return Promise.reject(err);
});

/***/ }),

/***/ "tL+A":
/***/ (function(module, exports) {



/***/ }),

/***/ "ug8z":
/***/ (function(module, exports) {

module.exports = {
	"wrap": "oymssHUh0CsJHhRBTfMNy",
	"active": "_2IfA3qM-RSNJ4KYLimuEVR",
	"iconWrap": "_2wLlC6Tj9rWBSmsAnb0jKH"
};

/***/ }),

/***/ "ulIo":
/***/ (function(module, exports) {

module.exports = {
	"commentItem": "_1f7ebMJKow4NcuDVTBnvOc",
	"isParent": "_3G7_JYLS4EIxTgILiJm_A5",
	"isChild": "_3bwpwVonlSFg4ZJFyKC9Q3",
	"name": "_3xprCsLyoqZkArtvYiuAJU",
	"meta": "_14zvEeg141WRt1wf5S37nf",
	"reply": "_2Mfm5YZlUu-Qe7c9dPeV7w",
	"editorWrapper": "_1oweEwxuizpZY8B_S3-JXP"
};

/***/ }),

/***/ "vEvA":
/***/ (function(module, exports) {

module.exports = require("antd/lib/spin");

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("0G5g");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "wFKl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ MarkdownReader; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "highlight.js"
var external_highlight_js_ = __webpack_require__("9Oib");
var external_highlight_js_default = /*#__PURE__*/__webpack_require__.n(external_highlight_js_);

// EXTERNAL MODULE: external "next-intl"
var external_next_intl_ = __webpack_require__("N9OE");

// EXTERNAL MODULE: ./node_modules/antd/lib/message/style/index.js
var style = __webpack_require__("tL+A");

// EXTERNAL MODULE: external "antd/lib/message"
var message_ = __webpack_require__("3PsY");
var message_default = /*#__PURE__*/__webpack_require__.n(message_);

// EXTERNAL MODULE: external "copy-to-clipboard"
var external_copy_to_clipboard_ = __webpack_require__("oLBY");
var external_copy_to_clipboard_default = /*#__PURE__*/__webpack_require__.n(external_copy_to_clipboard_);

// CONCATENATED MODULE: ./src/utils/copy.ts



function copy(text, t) {
  message_default.a.success(t('copySuccess'));

  return external_copy_to_clipboard_default()(text);
}
// EXTERNAL MODULE: ./src/components/MarkdownReader/index.module.scss
var index_module = __webpack_require__("0/K+");

// CONCATENATED MODULE: ./src/components/MarkdownReader/index.tsx
var __jsx = external_react_default.a.createElement;





const MarkdownReader = ({
  content
}) => {
  const ref = Object(external_react_["useRef"])();
  const t = Object(external_next_intl_["useTranslations"])();
  Object(external_react_["useEffect"])(() => {
    if (!content) {
      return;
    }

    const el = ref.current;
    const range = document.createRange();
    const slot = range.createContextualFragment(content);
    el.innerHTML = '';
    el.appendChild(slot);
  }, [content]); // 高亮

  Object(external_react_["useEffect"])(() => {
    if (!ref.current) {
      return;
    }

    const callbacks = [];
    setTimeout(() => {
      const blocks = ref.current.querySelectorAll('pre code');
      blocks.forEach(block => {
        const span = document.createElement('span');
        span.classList.add('copy-code-btn');
        span.innerText = t('copy');

        span.onclick = () => copy(block.innerText, t);

        block.parentNode.insertBefore(span, block);
        callbacks.push(() => {
          block.parentNode.removeChild(span);
        });
        external_highlight_js_default.a.highlightBlock(block);
      });
    }, 0); // eslint-disable-next-line consistent-return

    return () => {
      callbacks.forEach(cb => cb());
    };
  }, [content, t]);
  return __jsx("div", {
    ref: ref,
    className: 'markdown'
  });
};

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xEna":
/***/ (function(module, exports) {

module.exports = {
	"wrapper": "_1gWBN7VEVNnelRRPMa3CY6",
	"iconWrap": "_2pkVHcLoLMRrby9QPbVsmv",
	"active": "_1pW7l0yg7v4CX6e5C30xIt"
};

/***/ }),

/***/ "xFyI":
/***/ (function(module, exports) {

module.exports = {
	"wrap": "_1qU35tL8S-yk6hGSLgkF1n",
	"active": "_1ZX-4tErGVwSfRSP3IMHTF",
	"iconWrap": "_30USoASmPJ6T7IF9jmcw9C"
};

/***/ }),

/***/ "xKsY":
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

/***/ }),

/***/ "xOyL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.detectDomainLocale = detectDomainLocale;

function detectDomainLocale(domainItems, hostname, detectedLocale) {
  let domainItem;

  if (domainItems) {
    if (detectedLocale) {
      detectedLocale = detectedLocale.toLowerCase();
    }

    for (const item of domainItems) {
      var _item$domain, _item$locales; // remove port if present


      const domainHostname = (_item$domain = item.domain) == null ? void 0 : _item$domain.split(':')[0].toLowerCase();

      if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || (_item$locales = item.locales) != null && _item$locales.some(locale => locale.toLowerCase() === detectedLocale)) {
        domainItem = item;
        break;
      }
    }
  }

  return domainItem;
}

/***/ }),

/***/ "xZtu":
/***/ (function(module, exports) {

module.exports = require("antd/lib/divider");

/***/ }),

/***/ "yySa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Toc; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("N9OE");
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("MLMA");
/* harmony import */ var _components_Animation_Trail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("d/kO");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("bybV");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const HEIGHT = 32;
const Toc = ({
  tocs = []
}) => {
  const t = Object(next_intl__WEBPACK_IMPORTED_MODULE_2__["useTranslations"])();
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const {
    0: active,
    1: setActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const goto = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(toc => {
    try {
      const el = document.getElementById(toc.id);

      if (el) {
        el.scrollIntoView();
      }
    } catch (e) {} // eslint-disable-line no-empty

  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const listener = () => {
      tocs.reduceRight((_, toc, index) => {
        const el = document.getElementById(toc.id);

        if (!el) {
          return _;
        }

        if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* elementInViewport */ "b"])(el)) {
          setActive(index);
          ref.current.scrollTop = HEIGHT * index;
        }

        return _;
      }, null);
    };

    document.addEventListener('scroll', listener);
    return () => {
      document.removeEventListener('scroll', listener);
    };
  }, [tocs]);
  return __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.wrapper
  }, __jsx("header", null, t('toc')), __jsx("main", null, __jsx("div", {
    ref: ref
  }, __jsx("div", null, __jsx(_components_Animation_Trail__WEBPACK_IMPORTED_MODULE_4__[/* ListTrail */ "a"], {
    length: tocs.length,
    options: {
      opacity: 1,
      height: 32,
      from: {
        opacity: 0,
        height: 0
      }
    },
    element: 'div',
    renderItem: idx => {
      const toc = tocs[idx];
      const v = toc.level;
      const f = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* isOdd */ "e"])(v - 1);
      return __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.item, idx === active && _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.active),
        style: {
          'paddingLeft': 12 * (v - 1),
          'cursor': 'pointer',
          '--dot-left': 10 * (v - 2) + 'px',
          '--dot-width': 6 - (v - 1) + (f ? 1 : 0) + 'px'
        },
        onClick: () => goto(toc)
      }, __jsx("div", null, toc.text));
    }
  }), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.indicator,
    style: {
      top: HEIGHT * active + 'px'
    }
  })))));
};

/***/ }),

/***/ "zIXN":
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "zRT3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ DoubleColumnLayout; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./src/components/Share/index.tsx + 1 modules
var Share = __webpack_require__("LIou");

// EXTERNAL MODULE: ./src/components/Comment/index.tsx + 8 modules
var Comment = __webpack_require__("cor7");

// EXTERNAL MODULE: ./src/components/Comment/CommentIcon.module.scss
var CommentIcon_module = __webpack_require__("ug8z");
var CommentIcon_module_default = /*#__PURE__*/__webpack_require__.n(CommentIcon_module);

// CONCATENATED MODULE: ./src/components/Comment/CommentIcon.tsx
var __jsx = external_react_default.a.createElement;



const CommentIcon = () => {
  const intoView = Object(external_react_["useCallback"])(() => {
    const el = document.querySelector(`#${Comment["a" /* COMMENT_DOM_ID */]}`);
    el && el.scrollIntoView();
  }, []);
  return __jsx("div", {
    className: CommentIcon_module_default.a.wrap,
    onClick: intoView
  }, __jsx("svg", {
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em"
  }, __jsx("path", {
    d: "M988.8 512a348.8 348.8 0 0 1-144.96 278.72v208.32l-187.84-131.52a387.2 387.2 0 0 1-56 4.8A408.64 408.64 0 0 1 384 811.84l-36.8-23.04a493.76 493.76 0 0 0 52.8 3.2 493.44 493.44 0 0 0 51.2-2.88c221.44-23.04 394.24-192 394.24-400a365.12 365.12 0 0 0-4.16-51.84 373.44 373.44 0 0 0-48.96-138.56l18.88 11.2A353.6 353.6 0 0 1 988.8 512z m-198.72-128c0-192-169.6-349.76-378.24-349.76h-24C192 47.04 33.92 198.72 33.92 384a334.08 334.08 0 0 0 118.4 253.12v187.52l86.08-60.48 66.24-46.4a396.16 396.16 0 0 0 107.52 16C620.48 734.08 790.08 576 790.08 384z",
    fill: "currentColor"
  })));
};
// EXTERNAL MODULE: ./node_modules/antd/lib/badge/style/index.js
var style = __webpack_require__("CbT5");

// EXTERNAL MODULE: external "antd/lib/badge"
var badge_ = __webpack_require__("Yj90");
var badge_default = /*#__PURE__*/__webpack_require__.n(badge_);

// EXTERNAL MODULE: ./src/components/Likes/index.module.scss
var index_module = __webpack_require__("xFyI");
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);

// CONCATENATED MODULE: ./src/components/Likes/index.tsx


var Likes_jsx = external_react_default.a.createElement;



const Likes = ({
  defaultCount,
  id,
  api
}) => {
  const {
    0: count,
    1: setCount
  } = Object(external_react_["useState"])(defaultCount);
  const {
    0: likes,
    1: setLikes
  } = Object(external_react_["useState"])([]);
  const like = Object(external_react_["useCallback"])(() => {
    const idx = likes.indexOf(id);
    const type = idx > -1 ? 'dislike' : 'like';
    const newLikes = idx > -1 ? [...likes.slice(0, idx), ...likes.slice(idx + 1)] : [...likes, id];
    api(id, type).then(c => {
      setCount(c);
      window.localStorage.setItem('LIKES', JSON.stringify(newLikes));
      setLikes(newLikes);
    });
  }, [likes, id, api]);
  Object(external_react_["useEffect"])(() => {
    setCount(defaultCount);
  }, [defaultCount]);
  Object(external_react_["useEffect"])(() => {
    const likeds = JSON.parse(window.localStorage.getItem('LIKES')) || [];
    setLikes(likeds);
  }, []);
  return Likes_jsx(badge_default.a, {
    size: "small",
    count: count,
    style: {
      backgroundColor: 'var(--primary-color)'
    }
  }, Likes_jsx("div", {
    className: external_classnames_default()(index_module_default.a.wrap, likes.includes(id) && index_module_default.a.active),
    onClick: like
  }, Likes_jsx("svg", {
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em"
  }, Likes_jsx("path", {
    d: "M859.8 191.2c-80.8-84.2-212-84.2-292.8 0L512 248.2l-55-57.2c-81-84.2-212-84.2-292.8 0-91 94.6-91 248.2 0 342.8L512 896l347.8-362C950.8 439.4 950.8 285.8 859.8 191.2z",
    fill: "currentColor"
  }))));
};
// EXTERNAL MODULE: ./src/hooks/useToggle.ts
var useToggle = __webpack_require__("M7TQ");

// EXTERNAL MODULE: ./src/utils/index.tsx
var utils = __webpack_require__("MLMA");

// EXTERNAL MODULE: ./src/layout/DoubleColumnLayout/index.module.scss
var DoubleColumnLayout_index_module = __webpack_require__("27LO");
var DoubleColumnLayout_index_module_default = /*#__PURE__*/__webpack_require__.n(DoubleColumnLayout_index_module);

// EXTERNAL MODULE: ./node_modules/antd/lib/modal/style/index.js
var modal_style = __webpack_require__("fwXI");

// EXTERNAL MODULE: external "antd/lib/modal"
var modal_ = __webpack_require__("xKsY");
var modal_default = /*#__PURE__*/__webpack_require__.n(modal_);

// EXTERNAL MODULE: ./src/providers/http.ts
var http = __webpack_require__("pUN5");

// CONCATENATED MODULE: ./src/providers/alipay.ts

class alipay_AlipayProvider {
  /**
   * 创建订单
   */
  static async createPay(params) {
    return http["a" /* httpProvider */].post('/alipay/create', params);
  }

}
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./src/components/AliPay/index.tsx


var AliPay_jsx = external_react_default.a.createElement;



const AliPay = ({
  totalAmount,
  id
}) => {
  console.log('totalAmount...', totalAmount);

  const pay = async () => {
    const result = await alipay_AlipayProvider.createPay({
      totalAmount,
      id //   notifyUrl: 'http://123.206.55.50:11000/alipay/notify',

    });
    console.log('result...', result);

    if (result) {
      window.location.href = result;
    }
  };

  return AliPay_jsx(modal_default.a, {
    title: "\u786E\u8BA4\u4EE5\u4E0B\u6536\u8D39\u4FE1\u606F",
    width: 400,
    visible: true,
    bodyStyle: {
      display: 'flex',
      justifyContent: 'center',
      overflowX: 'hidden'
    },
    onCancel: e => {
      router_default.a.push('/');
    },
    onOk: () => pay(),
    okText: '立即支付',
    cancelText: '取消',
    transitionName: '',
    maskTransitionName: ''
  }, AliPay_jsx("p", null, "\u652F\u4ED8\u91D1\u989D\uFF1A", AliPay_jsx("span", null, "\xA5", totalAmount)));
};
// CONCATENATED MODULE: ./src/layout/DoubleColumnLayout/index.tsx
var DoubleColumnLayout_jsx = external_react_default.a.createElement;









const DoubleColumnLayout = ({
  leftNode,
  leftClassName = null,
  rightNode,
  rightClassName = null,
  isRightNodeMobileHidden = true,
  minHeight = '100vh',
  background = 'var(--bg-body)',
  likesProps,
  showComment = false,
  shareProps,
  showPay
}) => {
  const [showWidge, toggleWidge] = Object(useToggle["a" /* useToggle */])(true);
  Object(external_react_["useEffect"])(() => {
    let beforeY = 0;
    let y = 0;

    const handler = () => {
      y = Object(utils["c" /* getDocumentScrollTop */])();
      toggleWidge(beforeY <= y);
      setTimeout(() => {
        beforeY = y;
      }, 0);
    };

    document.addEventListener('scroll', handler);
    return () => {
      document.removeEventListener('scroll', handler);
    };
  }, [toggleWidge]);
  return DoubleColumnLayout_jsx("div", {
    className: external_classnames_default()(DoubleColumnLayout_index_module_default.a.outerWrap),
    style: {
      minHeight,
      background
    }
  }, DoubleColumnLayout_jsx("div", {
    className: external_classnames_default()('container')
  }, DoubleColumnLayout_jsx("div", {
    className: DoubleColumnLayout_index_module_default.a.wrap
  }, (likesProps || showComment || shareProps) && DoubleColumnLayout_jsx("div", {
    className: external_classnames_default()(DoubleColumnLayout_index_module_default.a.fixed, showWidge && DoubleColumnLayout_index_module_default.a.active),
    onClick: e => {
      console.log('clicked');
      e.preventDefault();
      e.nativeEvent.stopImmediatePropagation();
      e.stopPropagation();
    }
  }, likesProps && DoubleColumnLayout_jsx("div", {
    className: DoubleColumnLayout_index_module_default.a.widgetWrapper
  }, DoubleColumnLayout_jsx(Likes, likesProps)), showComment && DoubleColumnLayout_jsx("div", {
    className: DoubleColumnLayout_index_module_default.a.widgetWrapper
  }, DoubleColumnLayout_jsx(CommentIcon, null)), shareProps && DoubleColumnLayout_jsx("div", {
    className: DoubleColumnLayout_index_module_default.a.widgetWrapper
  }, DoubleColumnLayout_jsx(Share["a" /* Share */], shareProps)), showPay && DoubleColumnLayout_jsx("div", {
    className: DoubleColumnLayout_index_module_default.a.widgetWrapper
  }, DoubleColumnLayout_jsx(AliPay, showPay))), DoubleColumnLayout_jsx("section", {
    className: external_classnames_default()(DoubleColumnLayout_index_module_default.a.left, leftClassName)
  }, leftNode), DoubleColumnLayout_jsx("aside", {
    className: external_classnames_default()(DoubleColumnLayout_index_module_default.a.right, rightClassName, isRightNodeMobileHidden && DoubleColumnLayout_index_module_default.a.isRightNodeMobileHidden)
  }, rightNode))));
};

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "zz/t":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Opacity; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dcio");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Opacity = props => {
  const {
    from = {},
    to = {}
  } = props,
        rest = _objectWithoutProperties(props, ["from", "to"]);

  from.opacity = 0;
  to.opacity = 1;
  return __jsx(_Spring__WEBPACK_IMPORTED_MODULE_1__[/* Spring */ "a"], _extends({
    from: from,
    to: to
  }, rest));
};

/***/ })

/******/ });