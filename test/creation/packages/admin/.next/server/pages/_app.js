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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


/***/ }),

/***/ "1HFu":
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale/zh_CN");

/***/ }),

/***/ "3PsY":
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6HBy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useSetting; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("gFb0");


const useSetting = () => {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_global__WEBPACK_IMPORTED_MODULE_1__[/* GlobalContext */ "a"]);
  return context.setting || {};
};

/***/ }),

/***/ "6pZi":
/***/ (function(module, exports) {



/***/ }),

/***/ "7+C2":
/***/ (function(module, exports) {



/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "CAgN":
/***/ (function(module, exports) {



/***/ }),

/***/ "GvLQ":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "HSfi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingProvider; });
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pUN5");

class SettingProvider {
  /**
   * 获取设置
   */
  static async getSetting() {
    return _http__WEBPACK_IMPORTED_MODULE_0__[/* httpProvider */ "a"].post('/setting/get');
  }
  /**
   * 更新设置
   */


  static async updateSetting(data) {
    return _http__WEBPACK_IMPORTED_MODULE_0__[/* httpProvider */ "a"].post(`/setting`, data);
  }

}

/***/ }),

/***/ "MJSs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return toLogin; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

const whitePaths = ['login', 'register'];
const toLogin = () => {
  const {
    pathname,
    asPath
  } = next_router__WEBPACK_IMPORTED_MODULE_0___default.a;

  if (whitePaths.some(path => pathname.includes(path))) {
    return;
  }

  if (whitePaths.some(path => asPath.includes(path))) {
    next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push(`/login`);
  } else {
    next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push(`/login?redirect=${asPath}`);
  }
};

/***/ }),

/***/ "ReEF":
/***/ (function(module, exports) {



/***/ }),

/***/ "Saan":
/***/ (function(module, exports) {



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

/***/ "XlDN":
/***/ (function(module, exports) {



/***/ }),

/***/ "Y+WV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return menus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return findActiveMenu; });
const menus = [{
  icon: 'dashboard',
  title: '工作台',
  path: '/'
}, {
  icon: 'form',
  title: '文章管理',
  children: [{
    icon: 'form',
    title: '所有文章',
    path: '/article'
  }, {
    title: '新建文章',
    path: '/article/editor',
    ignore: true
  }, {
    title: '编辑文章',
    path: '/article/editor/[id]',
    ignore: true
  }, {
    icon: 'copy',
    title: '分类管理',
    path: '/article/category'
  }, {
    icon: 'tag',
    title: '标签管理',
    path: '/article/tags'
  }]
}, {
  icon: 'snippets',
  title: '页面管理',
  path: '/page'
}, {
  title: '新建页面',
  path: '/page/editor',
  ignore: true
}, {
  title: '编辑页面',
  path: '/page/editor/[id]',
  ignore: true
}, {
  title: '知识小册',
  path: '/knowledge',
  icon: 'book'
}, {
  title: '海报管理',
  path: '/poster',
  icon: 'star'
}, {
  icon: 'message',
  title: '评论管理',
  path: '/comment'
}, {
  icon: 'mail',
  title: '邮件管理',
  path: '/mail'
}, {
  icon: 'folder-open',
  title: '文件管理',
  path: '/file'
}, {
  icon: 'search',
  title: '搜索记录',
  path: '/search'
}, {
  icon: 'project',
  title: '访问统计',
  path: '/view'
}, {
  title: '个人中心',
  icon: 'user',
  path: '/ownspace',
  ignore: true
}, {
  icon: 'user',
  title: '用户管理',
  path: '/user'
}, {
  icon: 'setting',
  title: '系统设置',
  path: '/setting'
}];
const flattenMenus = menus.filter(m => !m.ignore).reduce((c, menu) => {
  return [...c, menu, ...(menu.children || []).filter(m => !m.ignore)];
}, []);
const findActiveMenu = pathname => {
  const idx = flattenMenus.findIndex(menu => menu.path === pathname);

  if (idx < 0) {
    return [null, []];
  }

  const activeMenu = flattenMenus[idx];
  const breadcrumbs = idx > 1 ? [flattenMenus.slice(0, 1)[0], ...flattenMenus.slice(1, idx).filter(menu => {
    return activeMenu.path.includes(menu.path);
  }), activeMenu] : [flattenMenus.slice(0, 1)[0]];
  return [activeMenu, breadcrumbs];
};

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/antd/lib/config-provider/style/index.js
var style = __webpack_require__("Saan");

// EXTERNAL MODULE: external "antd/lib/config-provider"
var config_provider_ = __webpack_require__("ztzw");
var config_provider_default = /*#__PURE__*/__webpack_require__.n(config_provider_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "antd/lib/locale/zh_CN"
var zh_CN_ = __webpack_require__("1HFu");
var zh_CN_default = /*#__PURE__*/__webpack_require__.n(zh_CN_);

// EXTERNAL MODULE: ./src/utils/login.ts
var login = __webpack_require__("MJSs");

// EXTERNAL MODULE: ./src/providers/user.ts
var providers_user = __webpack_require__("kIMS");

// EXTERNAL MODULE: ./src/providers/setting.ts
var providers_setting = __webpack_require__("HSfi");

// EXTERNAL MODULE: ./src/context/global.tsx
var global = __webpack_require__("gFb0");

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var external_styled_jsx_style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__("GvLQ");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./src/components/NProgress/index.tsx

var __jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class NProgress_NProgress extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "timer", null);

    _defineProperty(this, "routeChangeStart", () => {
      const {
        showAfterMs
      } = this.props;
      clearTimeout(this.timer);
      this.timer = setTimeout(external_nprogress_default.a.start, showAfterMs);
    });

    _defineProperty(this, "routeChangeEnd", () => {
      clearTimeout(this.timer);

      external_nprogress_default.a.done();
    });
  }

  componentDidMount() {
    const {
      options
    } = this.props;

    if (options) {
      external_nprogress_default.a.configure(options);
    }

    router_default.a.events.on('routeChangeStart', this.routeChangeStart);
    router_default.a.events.on('routeChangeComplete', this.routeChangeEnd);
    router_default.a.events.on('routeChangeError', this.routeChangeEnd);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    router_default.a.events.off('routeChangeStart', this.routeChangeStart);
    router_default.a.events.off('routeChangeComplete', this.routeChangeEnd);
    router_default.a.events.off('routeChangeError', this.routeChangeEnd);
  }

  render() {
    const {
      color,
      spinner
    } = this.props;
    return __jsx(external_styled_jsx_style_default.a, {
      id: "2964645703",
      dynamic: [color, color, color, spinner ? 'block' : 'none', color, color]
    }, ["#nprogress{pointer-events:none;}", `#nprogress .bar{background:${color};position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px;}`, `#nprogress .peg{display:block;position:absolute;right:0px;width:100px;height:100%;box-shadow:0 0 10px ${color},0 0 5px ${color};opacity:1;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px);}`, `#nprogress .spinner{display:${spinner ? 'block' : 'none'};position:fixed;z-index:1031;top:15px;right:15px;}`, `#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:solid 2px transparent;border-top-color:${color};border-left-color:${color};border-radius:50%;-webkit-animation:nprogresss-spinner 400ms linear infinite;-webkit-animation:nprogress-spinner 400ms linear infinite;animation:nprogress-spinner 400ms linear infinite;}`, ".nprogress-custom-parent{overflow:hidden;position:relative;}", ".nprogress-custom-parent #nprogress .spinner,.nprogress-custom-parent #nprogress .bar{position:absolute;}", "@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);}}", "@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}", "@keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}"]);
  }

}

_defineProperty(NProgress_NProgress, "defaultProps", {
  color: '#2299DD',
  showAfterMs: 300,
  spinner: true
});
// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__("zIXN");

// EXTERNAL MODULE: ./src/hooks/useSetting.ts
var useSetting = __webpack_require__("6HBy");

// EXTERNAL MODULE: ./src/layout/AdminLayout/menus.ts
var menus = __webpack_require__("Y+WV");

// CONCATENATED MODULE: ./src/components/Seo.tsx
var Seo_jsx = external_react_default.a.createElement;





const Seo = () => {
  const setting = Object(useSetting["a" /* useSetting */])();
  const router = Object(router_["useRouter"])();
  const {
    pathname
  } = router;
  const [activeMenu] = Object(menus["a" /* findActiveMenu */])(pathname);
  return Seo_jsx(external_react_helmet_["Helmet"], null, Seo_jsx("title", null, activeMenu && activeMenu.title || '管理后台'), Seo_jsx("meta", {
    name: "keyword",
    content: setting.seoKeyword
  }), Seo_jsx("meta", {
    name: "description",
    content: setting.seoDesc
  }), Seo_jsx("link", {
    rel: "shortcut icon",
    href: setting.systemFavicon
  }), Seo_jsx("link", {
    href: "//fonts.googleapis.com/css?family=Nunito:400,400i,700,700i&display=swap",
    rel: "stylesheet"
  }));
};
// CONCATENATED MODULE: ./src/components/FixAntdStyleTransition.tsx
var FixAntdStyleTransition_jsx = external_react_default.a.createElement;

const id = 'fix-antd-stle-transition';
const FixAntdStyleTransition = () => {
  Object(external_react_["useEffect"])(() => {
    const el = document.querySelector(`#${id}`);
    el && el.parentNode.removeChild(el);
  }, []);
  return FixAntdStyleTransition_jsx("style", {
    id: id,
    dangerouslySetInnerHTML: {
      __html: ` * { transition: none !important; }`
    }
  });
};
// EXTERNAL MODULE: ./src/providers/view.ts
var view = __webpack_require__("gJK1");

// CONCATENATED MODULE: ./src/components/ViewStatistics.tsx


let lastUrl;

const addView = url => {
  if (/localhost|127\.0\.0\.1/.test(url)) {
    return;
  }

  if (lastUrl === url) {
    return;
  }

  lastUrl = url;
  view["a" /* ViewProvider */].addView({
    url
  });
};

const ViewStatistics = props => {
  Object(external_react_["useEffect"])(() => {
    addView(window.location.href);
  });
  return props.children || null;
};
// CONCATENATED MODULE: ./src/components/Analytics.tsx


const Analytics = props => {
  const {
    setting
  } = Object(external_react_["useContext"])(global["a" /* GlobalContext */]);
  Object(external_react_["useEffect"])(() => {
    const googleAnalyticsId = setting.googleAnalyticsId;

    if (!googleAnalyticsId) {
      return;
    } // @ts-ignore


    window.dataLayer = window.dataLayer || [];

    function gtag() {
      // @ts-ignore
      window.dataLayer.push(arguments); // eslint-disable-line prefer-rest-params
    } // @ts-ignore


    gtag('js', new Date()); // @ts-ignore

    gtag('config', googleAnalyticsId);
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
    script.async = true;

    if (document.body) {
      document.body.appendChild(script);
    }
  }, [setting.googleAnalyticsId]);
  Object(external_react_["useEffect"])(() => {
    const baiduAnalyticsId = setting.baiduAnalyticsId;

    if (!baiduAnalyticsId) {
      return;
    }

    const hm = document.createElement('script');
    hm.src = `https://hm.baidu.com/hm.js?${baiduAnalyticsId}`;
    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(hm, s);
  }, [setting.baiduAnalyticsId]);
  return props.children || null;
};
// EXTERNAL MODULE: ./node_modules/@ant-design/compatible/assets/index.css
var assets = __webpack_require__("XlDN");

// EXTERNAL MODULE: ./node_modules/highlight.js/styles/atom-one-light.css
var atom_one_light = __webpack_require__("7+C2");

// EXTERNAL MODULE: ./node_modules/viewerjs/dist/viewer.css
var viewer = __webpack_require__("CAgN");

// EXTERNAL MODULE: ./src/theme/antd.less
var antd = __webpack_require__("t//P");

// EXTERNAL MODULE: ./src/theme/reset.scss
var theme_reset = __webpack_require__("6pZi");

// EXTERNAL MODULE: ./src/theme/markdown.scss
var markdown = __webpack_require__("ReEF");

// CONCATENATED MODULE: ./pages/_app.tsx


var _app_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















class _app_MyApp extends app_default.a {
  constructor(...args) {
    super(...args);

    _app_defineProperty(this, "state", {
      setting: {},
      user: {},
      collapsed: false
    });

    _app_defineProperty(this, "setUser", user => {
      if (!user) {
        return;
      }

      localStorage.setItem('user', JSON.stringify(user));
      this.setState({
        user
      });
    });

    _app_defineProperty(this, "getUserFromStorage", () => {
      const str = localStorage.getItem('user');

      if (str) {
        const user = JSON.parse(str);
        this.setUser(user);
        providers_user["a" /* UserProvider */].checkAdmin(user);
      } else {
        Object(login["a" /* toLogin */])();
      }
    });

    _app_defineProperty(this, "getSetting", () => {
      providers_setting["a" /* SettingProvider */].getSetting().then(res => {
        this.setState({
          setting: res
        });
      });
    });

    _app_defineProperty(this, "toggleCollapse", () => {
      this.setState({
        collapsed: !this.state.collapsed
      });
    });
  }

  componentDidMount() {
    this.getSetting();
    this.getUserFromStorage();
  }

  render() {
    const {
      Component,
      pageProps
    } = this.props;

    const contextValue = _objectSpread(_objectSpread({}, this.state), {}, {
      setUser: this.setUser,
      getSetting: this.getSetting,
      toggleCollapse: this.toggleCollapse
    });

    return _app_jsx(config_provider_default.a, {
      locale: zh_CN_default.a
    }, _app_jsx(global["a" /* GlobalContext */].Provider, {
      value: contextValue
    }, _app_jsx(Seo, null), _app_jsx(FixAntdStyleTransition, null), _app_jsx(ViewStatistics, null), _app_jsx(Analytics, null), _app_jsx(NProgress_NProgress, {
      color: '#0188fb'
    }), _app_jsx(Component, pageProps)));
  }

}

/* harmony default export */ var _app = __webpack_exports__["default"] = (_app_MyApp);

/***/ }),

/***/ "gFb0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const GlobalContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  setting: {},
  getSetting: () => ({}),
  user: {},
  setUser: () => ({}),
  collapsed: false,
  toggleCollapse: () => ({})
});

/***/ }),

/***/ "gJK1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewProvider; });
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pUN5");

class ViewProvider {
  /**
   * 获取所有访问
   */
  static async getViews(params) {
    return _http__WEBPACK_IMPORTED_MODULE_0__[/* httpProvider */ "a"].get('/view', {
      params
    });
  }
  /**
   * 添加访问
   * @param data
   */


  static async addView(data) {
    return _http__WEBPACK_IMPORTED_MODULE_0__[/* httpProvider */ "a"].post('/view', data);
  }

  static async getViewsByUrl(url) {
    return _http__WEBPACK_IMPORTED_MODULE_0__[/* httpProvider */ "a"].get('/view/url', {
      params: {
        url
      }
    });
  }

  static async deleteView(id) {
    return _http__WEBPACK_IMPORTED_MODULE_0__[/* httpProvider */ "a"].delete('/view/' + id);
  }

}

/***/ }),

/***/ "kIMS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pUN5");

class UserProvider {
  /**
   * 用户登录
   * @param data
   */
  static async login(data) {
    return _http__WEBPACK_IMPORTED_MODULE_0__[/* httpProvider */ "a"].post('/auth/login', data);
  }

  static async checkAdmin(data) {
    return _http__WEBPACK_IMPORTED_MODULE_0__[/* httpProvider */ "a"].post('/auth/admin', data);
  }
  /**
   * 用户注册
   * @param data
   */


  static async register(data) {
    return _http__WEBPACK_IMPORTED_MODULE_0__[/* httpProvider */ "a"].post('/user/register', data);
  }
  /**
   * 获取用户
   * @param params
   */


  static getUsers(params) {
    return _http__WEBPACK_IMPORTED_MODULE_0__[/* httpProvider */ "a"].get('/user', {
      params
    });
  }
  /**
   * 更新用户信息
   * @param data
   */


  static async update(data) {
    return _http__WEBPACK_IMPORTED_MODULE_0__[/* httpProvider */ "a"].post('/user/update', data);
  }
  /**
   * 更新用户密码
   * @param data
   */


  static async updatePassword(data) {
    return _http__WEBPACK_IMPORTED_MODULE_0__[/* httpProvider */ "a"].post('/user/password', data);
  }

}

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

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
/* harmony import */ var _utils_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("MJSs");




const httpProvider = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({
  baseURL: "https://creationapi.shbwyz.com/api",
  timeout: 60000
});
httpProvider.interceptors.request.use(config => {
  if (false) {}

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
    const isClient = false;

    switch (status) {
      case 504:
      case 404:
        isClient && antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.error('服务器异常');
        break;

      case 403:
        isClient && antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.warn('访客无权进行该操作');
        break;

      case 401:
        isClient && antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.info('请重新登录');
        Object(_utils_login__WEBPACK_IMPORTED_MODULE_3__[/* toLogin */ "a"])();
        break;

      default:
        isClient && antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.error(err.response && err.response.data && err.response.data.msg || '未知错误!');
    }
  }

  return Promise.reject(err);
});

/***/ }),

/***/ "t//P":
/***/ (function(module, exports) {



/***/ }),

/***/ "tL+A":
/***/ (function(module, exports) {



/***/ }),

/***/ "zIXN":
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "ztzw":
/***/ (function(module, exports) {

module.exports = require("antd/lib/config-provider");

/***/ })

/******/ });