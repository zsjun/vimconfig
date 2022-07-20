module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		24: 0
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+T3G":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileProvider; });
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pUN5");

class FileProvider {
  /**
   * 上传文件
   * @param file
   */
  static async uploadFile(file, unique = 0) {
    const formData = new FormData();
    formData.append('file', file);
    return _http__WEBPACK_IMPORTED_MODULE_0__[/* httpProvider */ "a"].post('/file/upload?unique=' + unique, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }
  /**
   * 获取指定文件
   */


  static async getFiles(params) {
    return _http__WEBPACK_IMPORTED_MODULE_0__[/* httpProvider */ "a"].get('/file', {
      params
    });
  }
  /**
   * 删除文件
   * @param id
   */


  static async deleteFile(id) {
    return _http__WEBPACK_IMPORTED_MODULE_0__[/* httpProvider */ "a"].delete(`/file/${id}`);
  }

}

/***/ }),

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

/***/ "0Kvv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return copy; });
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tL+A");
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("3PsY");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_1__);


const copy = value => {
  const textarea = document.createElement('textarea');
  textarea.id = 't';
  textarea.style.height = '0';
  document.body.appendChild(textarea);
  textarea.value = value;
  const selector = document.querySelector('#t');
  selector.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);

  antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.success('内容已复制到剪切板');
};

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("kCYD");


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

/***/ "4g8T":
/***/ (function(module, exports) {

module.exports = require("antd/lib/list");

/***/ }),

/***/ "4rwI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ PaginationTable; });

// EXTERNAL MODULE: ./node_modules/antd/lib/table/style/index.js
var style = __webpack_require__("zmYW");

// EXTERNAL MODULE: external "antd/lib/table"
var table_ = __webpack_require__("Puj+");
var table_default = /*#__PURE__*/__webpack_require__.n(table_);

// EXTERNAL MODULE: ./node_modules/antd/lib/tooltip/style/index.js
var tooltip_style = __webpack_require__("93XW");

// EXTERNAL MODULE: external "antd/lib/tooltip"
var tooltip_ = __webpack_require__("z6+L");
var tooltip_default = /*#__PURE__*/__webpack_require__.n(tooltip_);

// EXTERNAL MODULE: ./node_modules/antd/lib/spin/style/index.js
var spin_style = __webpack_require__("nT0F");

// EXTERNAL MODULE: external "antd/lib/spin"
var spin_ = __webpack_require__("vEvA");
var spin_default = /*#__PURE__*/__webpack_require__.n(spin_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// EXTERNAL MODULE: ./node_modules/antd/lib/pagination/style/index.js
var pagination_style = __webpack_require__("TxAo");

// EXTERNAL MODULE: external "antd/lib/pagination"
var pagination_ = __webpack_require__("gR/H");
var pagination_default = /*#__PURE__*/__webpack_require__.n(pagination_);

// EXTERNAL MODULE: ./src/components/Pagination/index.module.scss
var index_module = __webpack_require__("hYNf");
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);

// CONCATENATED MODULE: ./src/components/Pagination/index.tsx


var __jsx = external_react_default.a.createElement;


const usePagination = ({
  page: defaultPage = 1,
  pageSize: defaultPageSize = 12
}) => {
  const {
    0: page,
    1: setPage
  } = Object(external_react_["useState"])(defaultPage);
  const {
    0: pageSize,
    1: setPageSize
  } = Object(external_react_["useState"])(defaultPageSize);
  const updatePagination = Object(external_react_["useCallback"])((page, pageSize) => {
    setPage(page);
    setPageSize(pageSize);
  }, []);
  return [{
    page,
    pageSize
  }, updatePagination];
};
const Pagination = ({
  total,
  onChange,
  page,
  pageSize,
  hideOnSinglePage = false
}) => {
  return __jsx("div", {
    className: index_module_default.a.wrapper
  }, total > 0 ? __jsx(pagination_default.a, {
    pageSizeOptions: ['8', '12', '24', '36'],
    showSizeChanger: true,
    showTotal: total => `共${total}条`,
    total: total,
    current: page,
    pageSize: pageSize,
    hideOnSinglePage: hideOnSinglePage,
    onChange: (page, pageSize) => {
      onChange(page, pageSize);
    },
    onShowSizeChange: (page, pageSize) => {
      onChange(page, pageSize);
    }
  }) : null);
};
// EXTERNAL MODULE: ./node_modules/antd/lib/row/style/index.js
var row_style = __webpack_require__("hr7U");

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__("tI3Q");
var row_default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: ./node_modules/antd/lib/button/style/index.js
var button_style = __webpack_require__("MaXC");

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__("eGmO");
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: ./node_modules/antd/lib/col/style/index.js
var col_style = __webpack_require__("fv9D");

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__("vsU0");
var col_default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: ./node_modules/antd/lib/input/style/index.js
var input_style = __webpack_require__("cUip");

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__("Uqqx");
var input_default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: external "@ant-design/compatible"
var compatible_ = __webpack_require__("abI1");

// EXTERNAL MODULE: ./src/components/Search/index.module.scss
var Search_index_module = __webpack_require__("oBNb");
var Search_index_module_default = /*#__PURE__*/__webpack_require__.n(Search_index_module);

// CONCATENATED MODULE: ./src/components/Search/index.tsx








var Search_jsx = external_react_default.a.createElement;




const _Search = ({
  form,
  fields = [],
  showLabel = true,
  padding = 12,
  onSearch
}) => {
  const getFields = () => {
    const {
      getFieldDecorator
    } = form;
    const children = [];

    for (const field of fields) {
      children.push(Search_jsx(col_default.a, {
        xs: 24,
        sm: 12,
        md: 6,
        key: field.field
      }, Search_jsx(compatible_["Form"].Item, showLabel ? {
        label: field.label,
        labelCol: {
          xs: {
            span: 24
          },
          sm: {
            span: 12
          },
          md: {
            span: 6
          }
        }
      } : {}, getFieldDecorator(field.field, {
        rules: field.rules
      })(field.children ? field.children : Search_jsx(input_default.a, {
        width: '100%',
        placeholder: field.msg || 'placeholder'
      })))));
    }

    return children;
  };

  const handleSearch = e => {
    e.preventDefault();
    form.validateFields((_, values) => {
      onSearch(values);
    });
  };

  const handleReset = () => {
    form.resetFields();
  };

  const submitContent = Search_jsx(compatible_["Form"].Item, null, Search_jsx(button_default.a, {
    type: "primary",
    htmlType: "submit"
  }, "\u641C\u7D22"), Search_jsx(button_default.a, {
    style: {
      marginLeft: 8
    },
    onClick: handleReset
  }, "\u91CD\u7F6E"));

  return Search_jsx(compatible_["Form"], {
    className: Search_index_module_default.a.wrapper,
    style: {
      padding
    },
    layout: "inline",
    onSubmit: handleSearch
  }, Search_jsx(row_default.a, {
    gutter: 24
  }, getFields()), Search_jsx(row_default.a, {
    gutter: 24
  }, Search_jsx(col_default.a, {
    span: 24,
    style: {
      textAlign: 'right'
    }
  }, submitContent)));
};

const Search = compatible_["Form"].create({
  name: 'advanced_search'
})(_Search);
// EXTERNAL MODULE: ./src/components/PaginationTable/index.module.scss
var PaginationTable_index_module = __webpack_require__("ArTw");
var PaginationTable_index_module_default = /*#__PURE__*/__webpack_require__.n(PaginationTable_index_module);

// CONCATENATED MODULE: ./src/components/PaginationTable/index.tsx






var PaginationTable_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





 // eslint-disable-next-line @typescript-eslint/ban-types

const rowKey = 'id';
const PaginationTable = ({
  loading,
  data,
  total,
  page,
  pageSize,
  setPage,
  setPageSize,
  setParams,
  refresh,
  title,
  showSelection = false,
  renderLeftNode,
  rightNode,
  padding = '24px 12px',
  scroll = null,
  searchFields = [],
  showSearchLabel = true,
  columns = [],
  customDataTable = null
}) => {
  const {
    0: selectedRowKeys,
    1: setSelectedRowKeys
  } = Object(external_react_["useState"])([]);
  const hasSelected = selectedRowKeys.length > 0;
  const rowSelection = {
    selectedRowKeys,
    onChange: setSelectedRowKeys
  };

  const resetSelectedRows = () => {
    setSelectedRowKeys([]);
  };

  const leftNode = renderLeftNode && renderLeftNode({
    hasSelected,
    selectedRowKeys,
    selectedRows: selectedRowKeys.map(id => data.find(item => item[rowKey] === id)),
    resetSelectedRows
  });
  return PaginationTable_jsx("div", {
    className: PaginationTable_index_module_default.a.wrapper
  }, PaginationTable_jsx(Search, {
    fields: searchFields,
    showLabel: showSearchLabel,
    padding: padding,
    onSearch: params => {
      setPage(1);
      setParams(params);
    }
  }), PaginationTable_jsx("div", {
    style: {
      background: '#fff',
      padding
    }
  }, customDataTable ? PaginationTable_jsx(external_react_default.a.Fragment, null, PaginationTable_jsx("div", {
    className: PaginationTable_index_module_default.a.tableHeader
  }, PaginationTable_jsx("div", null, title, leftNode), PaginationTable_jsx("div", null, rightNode)), PaginationTable_jsx(spin_default.a, {
    spinning: loading
  }, customDataTable(data))) : PaginationTable_jsx(external_react_default.a.Fragment, null, PaginationTable_jsx("div", {
    className: PaginationTable_index_module_default.a.tableHeader
  }, PaginationTable_jsx("div", null, title, leftNode), PaginationTable_jsx("div", null, rightNode, PaginationTable_jsx(tooltip_default.a, {
    title: "\u5237\u65B0"
  }, PaginationTable_jsx(icons_["ReloadOutlined"], {
    onClick: refresh,
    style: {
      marginLeft: 12
    }
  })))), PaginationTable_jsx(table_default.a, _extends({
    loading: loading,
    columns: typeof columns === 'function' ? columns(resetSelectedRows) : columns,
    dataSource: data,
    rowKey: rowKey,
    pagination: false
  }, scroll ? {
    scroll
  } : {}, showSelection ? {
    rowSelection
  } : {}))), PaginationTable_jsx(Pagination, {
    page: page,
    pageSize: pageSize,
    total: total,
    onChange: (page, pageSize) => {
      setPage(page);
      setPageSize(pageSize);
    }
  })));
};

/***/ }),

/***/ "5rRV":
/***/ (function(module, exports) {

module.exports = require("antd/lib/card");

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

/***/ "8YFG":
/***/ (function(module, exports) {



/***/ }),

/***/ "93XW":
/***/ (function(module, exports) {



/***/ }),

/***/ "9ubE":
/***/ (function(module, exports) {

module.exports = require("antd/lib/avatar");

/***/ }),

/***/ "ArTw":
/***/ (function(module, exports) {

module.exports = {
	"tableHeader": "_4yxeklcCZVaddgSjYswZG"
};

/***/ }),

/***/ "CXCZ":
/***/ (function(module, exports) {



/***/ }),

/***/ "DCZa":
/***/ (function(module, exports) {

module.exports = {
	"container": "_2986HtPLHbrpB8hiBuKILn",
	"asider": "_2aZTHyHbWApo8dlczFc5fE",
	"logo": "rv_9xUBx9vsH6qbhqqmOc",
	"resourceCreate": "_2I3rqAafAowJIEqmmCmG1c",
	"main": "aTO5J37sXslKr-B-rZ3FF",
	"info": "O8g9pCnM_qIcqSuaJm5uP",
	"github": "_283jLEQ1DhWAe2fw-CeVAf",
	"content": "_3nJJ5Sx6PbHhFVGf3_Awr6",
	"title": "_356HSOa33WPexiuYnLScFc",
	"icons": "_24OUzUa2SjssS1_EshUigc",
	"copyright": "_2nq88U0e2iY4tDIjMmuVWA"
};

/***/ }),

/***/ "ELla":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ AdminLayout; });

// EXTERNAL MODULE: ./node_modules/antd/lib/breadcrumb/style/index.js
var style = __webpack_require__("JT+3");

// EXTERNAL MODULE: external "antd/lib/breadcrumb"
var breadcrumb_ = __webpack_require__("TMRn");
var breadcrumb_default = /*#__PURE__*/__webpack_require__.n(breadcrumb_);

// EXTERNAL MODULE: ./node_modules/antd/lib/row/style/index.js
var row_style = __webpack_require__("hr7U");

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__("tI3Q");
var row_default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: ./node_modules/antd/lib/col/style/index.js
var col_style = __webpack_require__("fv9D");

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__("vsU0");
var col_default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: ./node_modules/antd/lib/menu/style/index.js
var menu_style = __webpack_require__("PFYH");

// EXTERNAL MODULE: external "antd/lib/menu"
var menu_ = __webpack_require__("a5Fm");
var menu_default = /*#__PURE__*/__webpack_require__.n(menu_);

// EXTERNAL MODULE: ./node_modules/antd/lib/layout/style/index.js
var layout_style = __webpack_require__("ppZR");

// EXTERNAL MODULE: external "antd/lib/layout"
var layout_ = __webpack_require__("VzA1");
var layout_default = /*#__PURE__*/__webpack_require__.n(layout_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@ant-design/compatible"
var compatible_ = __webpack_require__("abI1");

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./src/hooks/useSetting.ts
var useSetting = __webpack_require__("6HBy");

// EXTERNAL MODULE: ./node_modules/antd/lib/dropdown/style/index.js
var dropdown_style = __webpack_require__("G851");

// EXTERNAL MODULE: external "antd/lib/dropdown"
var dropdown_ = __webpack_require__("HgHO");
var dropdown_default = /*#__PURE__*/__webpack_require__.n(dropdown_);

// EXTERNAL MODULE: ./node_modules/antd/lib/avatar/style/index.js
var avatar_style = __webpack_require__("W93S");

// EXTERNAL MODULE: external "antd/lib/avatar"
var avatar_ = __webpack_require__("9ubE");
var avatar_default = /*#__PURE__*/__webpack_require__.n(avatar_);

// EXTERNAL MODULE: ./src/hooks/useUser.ts
var useUser = __webpack_require__("OMj+");

// CONCATENATED MODULE: ./src/components/UserInfo/index.tsx






var __jsx = external_react_default.a.createElement;




const menus = [{
  label: '个人中心',
  icon: 'user',
  path: '/ownspace'
}, {
  icon: 'user',
  label: '用户管理',
  path: '/user'
}, {
  icon: 'setting',
  label: '系统设置',
  path: '/setting'
}];

const UserInfo_menu = () => {
  return __jsx(menu_default.a, null, menus.map(menu => __jsx(menu_default.a.Item, {
    key: menu.label
  }, __jsx(link_default.a, {
    href: menu.path
  }, __jsx("a", null, menu.label)))), __jsx(menu_default.a.Item, null, __jsx(link_default.a, {
    href: "/login"
  }, __jsx("a", null, "\u9000\u51FA\u767B\u5F55"))));
};

const UserInfo = () => {
  const user = Object(useUser["a" /* useUser */])();
  return __jsx(dropdown_default.a, {
    overlay: UserInfo_menu
  }, __jsx("div", null, user && user.avatar ? __jsx(avatar_default.a, {
    size: 'small',
    src: user.avatar
  }) : __jsx(avatar_default.a, {
    size: 'small',
    icon: __jsx(icons_["UserOutlined"], null)
  }), user ? __jsx("span", {
    style: {
      marginLeft: 8
    }
  }, "Hi, ", user.name) : null));
};
// EXTERNAL MODULE: ./src/context/global.tsx
var global = __webpack_require__("gFb0");

// EXTERNAL MODULE: ./node_modules/antd/lib/button/style/index.js
var button_style = __webpack_require__("MaXC");

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__("eGmO");
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// CONCATENATED MODULE: ./src/layout/AdminLayout/ResourceCreate.tsx






var ResourceCreate_jsx = external_react_default.a.createElement;




const ResourceCreate = ({
  collapsed = false
}) => {
  const menu = ResourceCreate_jsx(menu_default.a, null, ResourceCreate_jsx(menu_default.a.Item, {
    onClick: () => router_default.a.push('/article/amEditor')
  }, ResourceCreate_jsx(link_default.a, {
    href: '/article/amEditor'
  }, ResourceCreate_jsx("a", null, ResourceCreate_jsx("span", null, "\u65B0\u5EFA\u6587\u7AE0-\u534F\u540C\u7F16\u8F91\u5668")))), ResourceCreate_jsx(menu_default.a.Item, {
    onClick: () => router_default.a.push('/article/editor')
  }, ResourceCreate_jsx(link_default.a, {
    href: '/article/editor'
  }, ResourceCreate_jsx("a", null, ResourceCreate_jsx("span", null, "\u65B0\u5EFA\u6587\u7AE0")))), ResourceCreate_jsx(menu_default.a.Item, {
    onClick: () => router_default.a.push('/page/editor')
  }, ResourceCreate_jsx(link_default.a, {
    href: '/page/editor'
  }, ResourceCreate_jsx("a", null, ResourceCreate_jsx("span", null, "\u65B0\u5EFA\u9875\u9762")))));

  return ResourceCreate_jsx(dropdown_default.a, {
    overlay: menu,
    placement: "bottomLeft"
  }, ResourceCreate_jsx(button_default.a, {
    style: {
      width: '100%'
    },
    type: "primary",
    size: "large",
    icon: ResourceCreate_jsx(icons_["PlusOutlined"], null)
  }, !collapsed && '新建'));
};
// EXTERNAL MODULE: ./src/layout/AdminLayout/menus.ts
var AdminLayout_menus = __webpack_require__("Y+WV");

// EXTERNAL MODULE: ./src/layout/AdminLayout/index.module.scss
var index_module = __webpack_require__("DCZa");
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);

// CONCATENATED MODULE: ./src/layout/AdminLayout/index.tsx










var AdminLayout_jsx = external_react_default.a.createElement;












const {
  Sider,
  Content
} = layout_default.a;
const {
  SubMenu
} = menu_default.a;
const AdminLayout = ({
  headerAppender,
  children
}) => {
  const {
    collapsed,
    toggleCollapse
  } = Object(external_react_["useContext"])(global["a" /* GlobalContext */]);
  const setting = Object(useSetting["a" /* useSetting */])();
  const router = Object(router_["useRouter"])();
  const {
    pathname
  } = router;
  const [activeMenu, breadcrumbs] = Object(AdminLayout_menus["a" /* findActiveMenu */])(pathname);

  const renderMenuItem = menu => AdminLayout_jsx(menu_default.a.Item, {
    key: menu.path,
    onClick: () => router_default.a.push(menu.path)
  }, AdminLayout_jsx(link_default.a, {
    href: menu.path
  }, AdminLayout_jsx("a", {
    className: external_classnames_default()({
      [index_module_default.a.active]: activeMenu && activeMenu.path === menu.path
    })
  }, AdminLayout_jsx(compatible_["Icon"], {
    type: menu.icon
  }), AdminLayout_jsx("span", null, menu.title))));

  const MenuContent = AdminLayout_jsx(menu_default.a, {
    theme: "dark",
    mode: "inline",
    defaultSelectedKeys: [activeMenu && activeMenu.path]
  }, AdminLayout_menus["b" /* menus */].filter(m => !m.ignore).map(menu => {
    return menu.children ? AdminLayout_jsx(SubMenu, {
      key: menu.title,
      icon: AdminLayout_jsx(compatible_["Icon"], {
        type: menu.icon
      }),
      title: menu.title
    }, menu.children.filter(m => !m.ignore).map(renderMenuItem)) : renderMenuItem(menu);
  }));

  return AdminLayout_jsx(layout_default.a, {
    className: index_module_default.a.container
  }, AdminLayout_jsx(Sider, {
    className: index_module_default.a.asider,
    trigger: null,
    collapsible: true,
    collapsed: collapsed
  }, AdminLayout_jsx("div", {
    className: index_module_default.a.logo
  }, setting.systemFavicon && AdminLayout_jsx("img", {
    src: setting.systemFavicon
  }), !collapsed && AdminLayout_jsx("span", {
    style: {
      marginLeft: 4
    }
  }, "\u7BA1\u7406\u540E\u53F0")), AdminLayout_jsx("div", {
    className: index_module_default.a.resourceCreate
  }, AdminLayout_jsx(ResourceCreate, {
    collapsed: collapsed
  })), MenuContent), AdminLayout_jsx(layout_default.a, {
    className: index_module_default.a.main
  }, AdminLayout_jsx("header", null, AdminLayout_jsx(row_default.a, null, AdminLayout_jsx(col_default.a, {
    span: 12
  }, AdminLayout_jsx(compatible_["Icon"], {
    className: "trigger",
    type: collapsed ? 'menu-unfold' : 'menu-fold',
    onClick: toggleCollapse
  })), AdminLayout_jsx(col_default.a, {
    span: 12,
    style: {
      textAlign: 'right'
    }
  }, AdminLayout_jsx("div", {
    className: index_module_default.a.info
  }, AdminLayout_jsx("a", {
    className: index_module_default.a.github,
    href: "https://github.com/fantasticit/wipi",
    target: "_blank",
    rel: "noreferrer"
  }, AdminLayout_jsx(icons_["GithubOutlined"], null)), AdminLayout_jsx(UserInfo, null))))), AdminLayout_jsx(Content, {
    className: index_module_default.a.content
  }, AdminLayout_jsx("header", null, AdminLayout_jsx(breadcrumb_default.a, null, breadcrumbs.map(breadcrumb => {
    return AdminLayout_jsx(breadcrumb_default.a.Item, {
      key: breadcrumb.path
    }, AdminLayout_jsx(link_default.a, {
      href: breadcrumb.path
    }, AdminLayout_jsx("a", null, breadcrumb.title)));
  })), AdminLayout_jsx("div", {
    className: index_module_default.a.title
  }, activeMenu && activeMenu.label), headerAppender && AdminLayout_jsx("div", null, headerAppender)), AdminLayout_jsx("main", null, children, AdminLayout_jsx("footer", null, AdminLayout_jsx("ul", {
    className: index_module_default.a.icons
  }, AdminLayout_jsx("li", null, AdminLayout_jsx("a", {
    className: index_module_default.a.github,
    href: "https://github.com/fantasticit/wipi",
    target: "_blank",
    rel: "noreferrer"
  }, AdminLayout_jsx(icons_["GithubOutlined"], null)))), AdminLayout_jsx("div", {
    className: index_module_default.a.copyright
  }, AdminLayout_jsx("p", null, "Copyright ", AdminLayout_jsx(icons_["CopyrightOutlined"], null), " ", new Date().getFullYear(), " Designed by", AdminLayout_jsx("a", {
    href: "https://github.com/fantasticit/wipi",
    target: "_blank",
    rel: "noreferrer"
  }, ' ', "Fantasticit."))))))));
};

/***/ }),

/***/ "G851":
/***/ (function(module, exports) {



/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

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

/***/ "HgHO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/dropdown");

/***/ }),

/***/ "JT+3":
/***/ (function(module, exports) {



/***/ }),

/***/ "JT4/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileSelectDrawer; });
/* harmony import */ var antd_lib_drawer_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dc+4");
/* harmony import */ var antd_lib_drawer_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wvHv");
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MaXC");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("eGmO");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_alert_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("8YFG");
/* harmony import */ var antd_lib_alert_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_alert_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("UpNC");
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_alert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_list_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("CXCZ");
/* harmony import */ var antd_lib_list_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("4g8T");
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("mN36");
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("5rRV");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var viewerjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("ajf4");
/* harmony import */ var viewerjs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(viewerjs__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_copy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("0Kvv");
/* harmony import */ var _providers_file__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("+T3G");
/* harmony import */ var _components_Upload__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("NVXP");
/* harmony import */ var _hooks_usePagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("s1bl");
/* harmony import */ var _components_PaginationTable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("4rwI");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("tV+F");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_17__);










var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const {
  Meta
} = antd_lib_card__WEBPACK_IMPORTED_MODULE_9___default.a;
let viewer = null;
const SEARCH_FIELDS = [{
  label: '文件名称',
  field: 'originalname',
  msg: '请输入文件名称'
}, {
  label: '文件类型',
  field: 'type',
  msg: '请输入文件类型'
}];
const GRID = {
  gutter: 16,
  xs: 1,
  sm: 2,
  md: 4,
  lg: 4,
  xl: 4,
  xxl: 6
};
const FileSelectDrawer = ({
  visible,
  isCopy = false,
  closeAfterClick = false,
  onClose,
  onChange
}) => {
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_10__["useRef"])();

  const _usePagination = Object(_hooks_usePagination__WEBPACK_IMPORTED_MODULE_15__[/* usePagination */ "a"])(_providers_file__WEBPACK_IMPORTED_MODULE_13__[/* FileProvider */ "a"].getFiles),
        {
    loading,
    data: files,
    refresh
  } = _usePagination,
        resetPagination = _objectWithoutProperties(_usePagination, ["loading", "data", "refresh"]);

  const previewImage = Object(react__WEBPACK_IMPORTED_MODULE_10__["useCallback"])(e => {
    e.stopPropagation();

    if (!viewer) {
      viewer = new viewerjs__WEBPACK_IMPORTED_MODULE_11___default.a(ref.current, {
        inline: false
      });
    } else {
      viewer.update();
    }
  }, []);
  const clickImage = Object(react__WEBPACK_IMPORTED_MODULE_10__["useCallback"])(file => {
    isCopy && Object(_utils_copy__WEBPACK_IMPORTED_MODULE_12__[/* copy */ "a"])(file.url);
    onChange && onChange(file.url);
    closeAfterClick && onClose();
  }, [isCopy, onChange, closeAfterClick, onClose]);
  const renderList = Object(react__WEBPACK_IMPORTED_MODULE_10__["useCallback"])(data => {
    const renderItem = file => __jsx(antd_lib_list__WEBPACK_IMPORTED_MODULE_7___default.a.Item, {
      key: file.id
    }, __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_9___default.a, {
      hoverable: true,
      cover: __jsx("div", {
        className: _index_module_scss__WEBPACK_IMPORTED_MODULE_17___default.a.preview,
        onClick: previewImage
      }, __jsx("img", {
        alt: file.originalname,
        src: file.url
      })),
      onClick: () => clickImage(file)
    }, __jsx(Meta, {
      title: file.originalname
    })));

    return __jsx(antd_lib_list__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_17___default.a.imgs,
      grid: GRID,
      dataSource: data,
      renderItem: renderItem
    });
  }, [clickImage, previewImage]);
  return __jsx(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1___default.a, {
    width: 786,
    placement: "right",
    title: '文件选择',
    closable: true,
    onClose: onClose,
    visible: visible
  }, isCopy && __jsx("div", {
    style: {
      marginBottom: 16
    }
  }, __jsx(antd_lib_alert__WEBPACK_IMPORTED_MODULE_5___default.a, {
    message: "\u70B9\u51FB\u5361\u7247\u590D\u5236\u94FE\u63A5\uFF0C\u70B9\u51FB\u56FE\u7247\u67E5\u770B\u5927\u56FE",
    type: "info"
  })), __jsx("div", {
    ref: ref
  }, __jsx(_components_PaginationTable__WEBPACK_IMPORTED_MODULE_16__[/* PaginationTable */ "a"], _extends({
    loading: loading,
    data: files
  }, resetPagination, {
    refresh: refresh,
    searchFields: SEARCH_FIELDS,
    rightNode: __jsx(_components_Upload__WEBPACK_IMPORTED_MODULE_14__[/* Upload */ "a"], {
      onOK: refresh,
      useDragger: false
    }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, null, "\u4E0A\u4F20\u6587\u4EF6")),
    customDataTable: renderList
  }))));
};

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

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

/***/ "MaXC":
/***/ (function(module, exports) {



/***/ }),

/***/ "NVXP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Upload; });
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nT0F");
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vEvA");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_upload_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("VDQ/");
/* harmony import */ var antd_lib_upload_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_upload_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("TfTO");
/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_upload__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("tL+A");
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("3PsY");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("nZwT");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _providers_file__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("+T3G");






var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const Upload = ({
  onChange = null,
  onOK = null,
  style = {},
  useDragger = true,
  children = null
}) => {
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false);
  const uploadProps = {
    name: 'file',
    multiple: true,
    action: '',
    showUploadList: false,

    beforeUpload(file) {
      setLoading(true);
      _providers_file__WEBPACK_IMPORTED_MODULE_8__[/* FileProvider */ "a"].uploadFile(file).then(res => {
        setLoading(false);

        antd_lib_message__WEBPACK_IMPORTED_MODULE_5___default.a.success('上传成功');

        onChange && onChange(res.url);
        onOK && onOK();
      }).catch(() => {
        setLoading(false);
      });
      return Promise.reject(new Error('cancel'));
    }

  };
  const Wrap = useDragger ? antd_lib_upload__WEBPACK_IMPORTED_MODULE_3___default.a.Dragger : antd_lib_upload__WEBPACK_IMPORTED_MODULE_3___default.a;
  return __jsx(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default.a, {
    tip: "\u6587\u4EF6\u4E0A\u4F20\u4E2D...",
    spinning: loading
  }, __jsx(Wrap, _extends({}, uploadProps, {
    style: style
  }), children || __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx("p", {
    className: "ant-upload-drag-icon"
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["InboxOutlined"], null)), __jsx("p", {
    className: "ant-upload-text"
  }, "\u70B9\u51FB\u9009\u62E9\u6587\u4EF6\u6216\u5C06\u6587\u4EF6\u62D6\u62FD\u5230\u6B64\u5904"), __jsx("p", {
    className: "ant-upload-hint"
  }, "\u6587\u4EF6\u5C06\u4E0A\u4F20\u5230 OSS, \u5982\u672A\u914D\u7F6E\u8BF7\u5148\u914D\u7F6E"))));
};

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

/***/ "OMj+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useUser; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("gFb0");


const useUser = () => {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_global__WEBPACK_IMPORTED_MODULE_1__[/* GlobalContext */ "a"]);
  return context.user;
};

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "PFYH":
/***/ (function(module, exports) {



/***/ }),

/***/ "Puj+":
/***/ (function(module, exports) {

module.exports = require("antd/lib/table");

/***/ }),

/***/ "TMRn":
/***/ (function(module, exports) {

module.exports = require("antd/lib/breadcrumb");

/***/ }),

/***/ "TfTO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/upload");

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

/***/ "UpNC":
/***/ (function(module, exports) {

module.exports = require("antd/lib/alert");

/***/ }),

/***/ "Uqqx":
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "VDQ/":
/***/ (function(module, exports) {



/***/ }),

/***/ "VzA1":
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

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

/***/ "Z8Mf":
/***/ (function(module, exports) {



/***/ }),

/***/ "a5Fm":
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ "abI1":
/***/ (function(module, exports) {

module.exports = require("@ant-design/compatible");

/***/ }),

/***/ "ajf4":
/***/ (function(module, exports) {

module.exports = require("viewerjs");

/***/ }),

/***/ "bfyb":
/***/ (function(module, exports) {

module.exports = require("monaco-editor/esm/vs/editor/editor.api.js");

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

/***/ "dc+4":
/***/ (function(module, exports) {



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

if (false) {}

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
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

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

    if (false) {}

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

    if (false) { var _this$locales; }

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

      if (false) {}

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

    if (false) {}

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

/***/ "fv9D":
/***/ (function(module, exports) {



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
  getSetting: () => ({}),
  user: {},
  setUser: () => ({}),
  collapsed: false,
  toggleCollapse: () => ({})
});

/***/ }),

/***/ "gR/H":
/***/ (function(module, exports) {

module.exports = require("antd/lib/pagination");

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

/***/ "hYNf":
/***/ (function(module, exports) {

module.exports = {
	"wrapper": "Jk_7c4uLfV5bARw2xi-sN"
};

/***/ }),

/***/ "hr7U":
/***/ (function(module, exports) {



/***/ }),

/***/ "kCYD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/antd/lib/tabs/style/index.js
var tabs_style = __webpack_require__("Z8Mf");

// EXTERNAL MODULE: external "antd/lib/tabs"
var tabs_ = __webpack_require__("zkM6");
var tabs_default = /*#__PURE__*/__webpack_require__.n(tabs_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./src/layout/AdminLayout/index.tsx + 2 modules
var AdminLayout = __webpack_require__("ELla");

// EXTERNAL MODULE: ./src/hooks/useSetting.ts
var useSetting = __webpack_require__("6HBy");

// EXTERNAL MODULE: ./node_modules/antd/lib/button/style/index.js
var button_style = __webpack_require__("MaXC");

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__("eGmO");
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: ./node_modules/antd/lib/input/style/index.js
var input_style = __webpack_require__("cUip");

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__("Uqqx");
var input_default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: ./node_modules/antd/lib/message/style/index.js
var message_style = __webpack_require__("tL+A");

// EXTERNAL MODULE: external "antd/lib/message"
var message_ = __webpack_require__("3PsY");
var message_default = /*#__PURE__*/__webpack_require__.n(message_);

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// EXTERNAL MODULE: external "@ant-design/compatible"
var compatible_ = __webpack_require__("abI1");

// EXTERNAL MODULE: ./src/components/FileSelectDrawer/index.tsx
var FileSelectDrawer = __webpack_require__("JT4/");

// EXTERNAL MODULE: ./src/providers/setting.ts
var providers_setting = __webpack_require__("HSfi");

// CONCATENATED MODULE: ./src/components/Setting/SystemSetting/index.tsx






var __jsx = external_react_default.a.createElement;





const SystemSetting = ({
  setting
}) => {
  const {
    0: visible,
    1: setVisible
  } = Object(external_react_["useState"])(false);
  const {
    0: mode,
    1: setMode
  } = Object(external_react_["useState"])('logo');
  const {
    0: systemUrl,
    1: setSystemUrl
  } = Object(external_react_["useState"])(null);
  const {
    0: systemTitle,
    1: setSystemTitle
  } = Object(external_react_["useState"])(null);
  const {
    0: systemLogo,
    1: setSystemLogo
  } = Object(external_react_["useState"])(null);
  const {
    0: systemFavicon,
    1: setSystemFavicon
  } = Object(external_react_["useState"])(null);
  const {
    0: systemFooterInfo,
    1: setSystemFooterInfo
  } = Object(external_react_["useState"])(null);
  const {
    0: adminSystemUrl,
    1: setAdminSystemUrl
  } = Object(external_react_["useState"])(null);
  Object(external_react_["useEffect"])(() => {
    setSystemUrl(setting && setting.systemUrl || null);
    setSystemTitle(setting && setting.systemTitle || null);
    setSystemLogo(setting && setting.systemLogo || null);
    setSystemFavicon(setting && setting.systemFavicon || null);
    setSystemFooterInfo(setting && setting.systemFooterInfo || null);
    setAdminSystemUrl(setting && setting.adminSystemUrl || null);
  }, [setting]);

  const save = () => {
    const data = {
      systemUrl,
      systemTitle,
      systemLogo,
      systemFavicon,
      systemFooterInfo,
      adminSystemUrl
    };
    providers_setting["a" /* SettingProvider */].updateSetting(data).then(() => {
      message_default.a.success('保存成功');
    });
  };

  return __jsx(compatible_["Form"], {
    layout: "vertical"
  }, __jsx(compatible_["Form"].Item, {
    label: "\u7CFB\u7EDF\u5730\u5740"
  }, __jsx(input_default.a, {
    placeholder: "\u8BF7\u8F93\u5165\u7CFB\u7EDF\u5730\u5740",
    value: systemUrl,
    onChange: e => {
      setSystemUrl(e.target.value);
    }
  })), __jsx(compatible_["Form"].Item, {
    label: "\u540E\u53F0\u5730\u5740"
  }, __jsx(input_default.a, {
    placeholder: "\u8BF7\u8F93\u5165\u540E\u53F0\u5730\u5740",
    value: adminSystemUrl,
    onChange: e => {
      setAdminSystemUrl(e.target.value);
    }
  })), __jsx(compatible_["Form"].Item, {
    label: "\u7CFB\u7EDF\u6807\u9898"
  }, __jsx(input_default.a, {
    placeholder: "\u8BF7\u8F93\u5165\u7CFB\u7EDF\u6807\u9898\uFF0C\u5C06\u4F5C\u4E3A head.title \u663E\u793A",
    value: systemTitle,
    onChange: e => {
      setSystemTitle(e.target.value);
    }
  })), __jsx(compatible_["Form"].Item, {
    label: "Logo"
  }, __jsx(input_default.a, {
    placeholder: "\u8BF7\u8F93\u5165 logo \u94FE\u63A5\u6216\u9009\u62E9\u6587\u4EF6\uFF0C\u4E5F\u53EF\u8F93\u5165 html",
    addonAfter: __jsx(icons_["FileImageOutlined"], {
      onClick: () => {
        setMode('logo');
        setVisible(true);
      }
    }),
    value: systemLogo,
    onChange: e => {
      setSystemLogo(e.target.value);
    }
  })), __jsx(compatible_["Form"].Item, {
    label: "Favicon"
  }, __jsx(input_default.a, {
    placeholder: "\u8BF7\u8F93\u5165 favicon \u94FE\u63A5\u6216\u9009\u62E9\u6587\u4EF6",
    addonAfter: __jsx(icons_["FileImageOutlined"], {
      onClick: () => {
        setMode('favicon');
        setVisible(true);
      }
    }),
    value: systemFavicon,
    onChange: e => {
      setSystemFavicon(e.target.value);
    }
  })), __jsx(compatible_["Form"].Item, {
    label: "\u9875\u811A\u4FE1\u606F"
  }, __jsx(input_default.a.TextArea, {
    placeholder: "\u8BF7\u8F93\u5165\u9875\u811A\u4FE1\u606F",
    rows: 8,
    value: systemFooterInfo,
    onChange: e => {
      setSystemFooterInfo(e.target.value);
    }
  })), __jsx(FileSelectDrawer["a" /* FileSelectDrawer */], {
    visible: visible,
    closeAfterClick: true,
    onClose: () => setVisible(false),
    onChange: url => {
      if (mode === 'logo') {
        setSystemLogo(url);
      } else {
        setSystemFavicon(url);
      }
    }
  }), __jsx(button_default.a, {
    type: "primary",
    onClick: save
  }, "\u4FDD\u5B58"));
};
// CONCATENATED MODULE: ./src/components/Setting/SEOSetting/index.tsx






var SEOSetting_jsx = external_react_default.a.createElement;



const SEOSetting = ({
  setting
}) => {
  const {
    0: seoKeyword,
    1: setSeoKeyword
  } = Object(external_react_["useState"])(null);
  const {
    0: seoDesc,
    1: setSeoDesc
  } = Object(external_react_["useState"])(null);
  Object(external_react_["useEffect"])(() => {
    setSeoKeyword(setting && setting.seoKeyword || null);
    setSeoDesc(setting && setting.seoDesc || null);
  }, [setting]);

  const save = () => {
    const data = {
      seoKeyword,
      seoDesc
    };
    providers_setting["a" /* SettingProvider */].updateSetting(data).then(() => {
      message_default.a.success('保存成功');
    });
  };

  return SEOSetting_jsx(compatible_["Form"], {
    layout: "vertical"
  }, SEOSetting_jsx(compatible_["Form"].Item, {
    label: "\u5173\u952E\u8BCD"
  }, SEOSetting_jsx(input_default.a, {
    placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\uFF0C\u7A7A\u683C\u5206\u5272",
    value: seoKeyword,
    onChange: e => {
      setSeoKeyword(e.target.value);
    }
  })), SEOSetting_jsx(compatible_["Form"].Item, {
    label: "\u63CF\u8FF0\u4FE1\u606F"
  }, SEOSetting_jsx(input_default.a.TextArea, {
    placeholder: "\u8BF7\u8F93\u5165\u63CF\u8FF0\u4FE1\u606F",
    rows: 6,
    value: seoDesc,
    onChange: e => {
      setSeoDesc(e.target.value);
    }
  })), SEOSetting_jsx(button_default.a, {
    type: "primary",
    onClick: save
  }, "\u4FDD\u5B58"));
};
// CONCATENATED MODULE: ./src/components/Setting/AnalyticsSetting/index.tsx






var AnalyticsSetting_jsx = external_react_default.a.createElement;



const AnalyticsSetting = ({
  setting
}) => {
  const {
    0: baiduAnalyticsId,
    1: setBaiduAnalyticsId
  } = Object(external_react_["useState"])(null);
  const {
    0: googleAnalyticsId,
    1: setGoogleAnalyticsId
  } = Object(external_react_["useState"])(null);
  Object(external_react_["useEffect"])(() => {
    setBaiduAnalyticsId(setting && setting.baiduAnalyticsId || null);
    setGoogleAnalyticsId(setting && setting.googleAnalyticsId || null);
  }, [setting]);

  const save = () => {
    const data = {
      baiduAnalyticsId,
      googleAnalyticsId
    };
    providers_setting["a" /* SettingProvider */].updateSetting(data).then(() => {
      message_default.a.success('保存成功');
    });
  };

  return AnalyticsSetting_jsx(compatible_["Form"], {
    layout: "vertical"
  }, AnalyticsSetting_jsx(compatible_["Form"].Item, {
    label: "\u767E\u5EA6\u7EDF\u8BA1"
  }, AnalyticsSetting_jsx(input_default.a, {
    placeholder: "\u8BF7\u8F93\u5165\u767E\u5EA6\u7EDF\u8BA1 Id",
    value: baiduAnalyticsId,
    onChange: e => {
      setBaiduAnalyticsId(e.target.value);
    }
  })), AnalyticsSetting_jsx(compatible_["Form"].Item, {
    label: "\u8C37\u6B4C\u5206\u6790"
  }, AnalyticsSetting_jsx(input_default.a, {
    placeholder: "\u8BF7\u8F93\u5165\u8C37\u6B4C\u5206\u6790 Id",
    value: googleAnalyticsId,
    onChange: e => {
      setGoogleAnalyticsId(e.target.value);
    }
  })), AnalyticsSetting_jsx(button_default.a, {
    type: "primary",
    onClick: save
  }, "\u4FDD\u5B58"));
};
// EXTERNAL MODULE: ./node_modules/antd/lib/alert/style/index.js
var alert_style = __webpack_require__("8YFG");

// EXTERNAL MODULE: external "antd/lib/alert"
var alert_ = __webpack_require__("UpNC");
var alert_default = /*#__PURE__*/__webpack_require__.n(alert_);

// CONCATENATED MODULE: ./src/utils/json.ts
function safeJsonParse(value) {
  try {
    if (value && typeof value === 'object') {
      return value;
    }

    if (typeof value === 'string') {
      return JSON.parse(value);
    }

    return {};
  } catch (e) {
    return {};
  }
}
// EXTERNAL MODULE: ./node_modules/antd/lib/spin/style/index.js
var spin_style = __webpack_require__("nT0F");

// EXTERNAL MODULE: external "antd/lib/spin"
var spin_ = __webpack_require__("vEvA");
var spin_default = /*#__PURE__*/__webpack_require__.n(spin_);

// CONCATENATED MODULE: ./src/components/JsonEditor.tsx




var JsonEditor_jsx = external_react_default.a.createElement;

const DEFAULT_STYLE = {
  height: '600px',
  overflow: 'hidden',
  border: '1px solid var(--border-color)',
  marginBottom: 24
};
const JsonEditor = ({
  value,
  onChange,
  style = DEFAULT_STYLE
}) => {
  const container = Object(external_react_["useRef"])(null);
  const editorRef = Object(external_react_["useRef"])(null);
  const {
    0: mounted,
    1: setMounted
  } = Object(external_react_["useState"])(false);
  const {
    0: error,
    1: setError
  } = Object(external_react_["useState"])(null);
  Object(external_react_["useEffect"])(() => {
    if (!mounted) {
      return;
    }

    editorRef.current.setValue(value);
  }, [mounted, value]);
  Object(external_react_["useEffect"])(() => {
    Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "bfyb", 7))]).then(res => {
      const monaco = res[0];
      const editor = monaco.editor.create(container.current, {
        language: 'json',
        automaticLayout: true,
        theme: 'vs',
        scrollBeyondLastLine: false,
        scrollbar: {
          useShadows: false,
          vertical: 'visible',
          horizontal: 'visible',
          verticalScrollbarSize: 6,
          horizontalScrollbarSize: 6
        }
      });
      editorRef.current = editor;
      editor.onDidChangeModelContent(() => {
        const content = editor.getValue();

        try {
          onChange(JSON.parse(content));
          setError(null);
        } catch (e) {
          console.log(e);
          setError(e);
        }
      });
      setMounted(true);
    });
    return () => {
      setMounted(false);
      editorRef.current && editorRef.current.dispose();
    };
  }, [onChange]);
  return JsonEditor_jsx(external_react_default.a.Fragment, null, JsonEditor_jsx("div", {
    ref: container,
    style: style
  }, mounted ? null : JsonEditor_jsx(spin_default.a, {
    tip: "\u7F16\u8F91\u5668\u52AA\u529B\u52A0\u8F7D\u4E2D...",
    spinning: true
  })), error ? JsonEditor_jsx(alert_default.a, {
    style: {
      marginBottom: 24
    },
    message: "Json \u683C\u5F0F\u5316\u51FA\u9519",
    type: "error",
    showIcon: true
  }) : null);
};
// CONCATENATED MODULE: ./src/components/Setting/OSSSetting/index.tsx






var OSSSetting_jsx = external_react_default.a.createElement;





const OSSSetting = ({
  setting
}) => {
  const {
    0: oss,
    1: setOss
  } = Object(external_react_["useState"])({});
  Object(external_react_["useEffect"])(() => {
    setOss(safeJsonParse(setting.oss));
  }, [setting.oss]);
  const save = Object(external_react_["useCallback"])(() => {
    const data = {
      oss: JSON.stringify(oss)
    };
    providers_setting["a" /* SettingProvider */].updateSetting(data).then(() => {
      message_default.a.success('保存成功');
    });
  }, [oss]);
  return OSSSetting_jsx(compatible_["Form"], {
    layout: "vertical"
  }, OSSSetting_jsx(alert_default.a, {
    message: "\u8BF4\u660E",
    description: `请在编辑器中输入您的 oss 配置，并添加 type 字段区分 \r\n {"type":"aliyun","accessKeyId":"","accessKeySecret":"","bucket":"","https":true,"region":""}`,
    type: "info",
    showIcon: true,
    style: {
      marginBottom: '1rem'
    }
  }), OSSSetting_jsx(JsonEditor, {
    value: JSON.stringify(oss, null, 2),
    onChange: setOss,
    style: {
      height: '400px',
      overflow: 'hidden',
      border: '1px solid var(--border-color)',
      marginBottom: 24
    }
  }), OSSSetting_jsx(button_default.a, {
    type: "primary",
    onClick: save
  }, "\u4FDD\u5B58"));
};
// EXTERNAL MODULE: ./src/providers/http.ts
var http = __webpack_require__("pUN5");

// CONCATENATED MODULE: ./src/providers/smtp.ts

class smtp_SMTPProvider {
  /**
   * 上传文件
   * @param file
   */
  static async testSendMail(user) {
    return http["a" /* httpProvider */].post('/smtp', {
      to: user,
      subject: '测试',
      text: '测试邮件'
    });
  }

}
// CONCATENATED MODULE: ./src/components/Setting/SMTPSetting/index.tsx






var SMTPSetting_jsx = external_react_default.a.createElement;




const SMTPSetting = ({
  setting
}) => {
  const {
    0: smtpHost,
    1: setsmtpHost
  } = Object(external_react_["useState"])(null);
  const {
    0: smtpPort,
    1: setsmtpPort
  } = Object(external_react_["useState"])(null);
  const {
    0: smtpUser,
    1: setsmtpUser
  } = Object(external_react_["useState"])(null);
  const {
    0: smtpPass,
    1: setsmtpPass
  } = Object(external_react_["useState"])(null);
  const {
    0: smtpFromUser,
    1: setSmtpFromUser
  } = Object(external_react_["useState"])(null);
  Object(external_react_["useEffect"])(() => {
    setsmtpHost(setting && setting.smtpHost || null);
    setsmtpPort(setting && setting.smtpPort || null);
    setsmtpUser(setting && setting.smtpUser || null);
    setsmtpPass(setting && setting.smtpPass || null);
    setSmtpFromUser(setting && setting.smtpFromUser || null);
  }, [setting]);

  const save = () => {
    const data = {
      smtpHost,
      smtpPort,
      smtpUser,
      smtpPass,
      smtpFromUser
    };
    providers_setting["a" /* SettingProvider */].updateSetting(data).then(() => {
      message_default.a.success('保存成功');
    });
  };

  const test = Object(external_react_["useCallback"])(() => {
    smtp_SMTPProvider.testSendMail(smtpFromUser).then(() => {
      message_default.a.success('邮件发送成功');
    }).catch(() => {
      message_default.a.error('邮件发送失败');
    });
  }, [smtpFromUser]);
  return SMTPSetting_jsx(compatible_["Form"], {
    layout: "vertical"
  }, SMTPSetting_jsx(compatible_["Form"].Item, {
    label: "SMTP \u5730\u5740"
  }, SMTPSetting_jsx(input_default.a, {
    placeholder: "\u8BF7\u8F93\u5165SMTP",
    value: smtpHost,
    onChange: e => {
      setsmtpHost(e.target.value);
    }
  })), SMTPSetting_jsx(compatible_["Form"].Item, {
    label: "SMTP \u7AEF\u53E3\uFF08\u5F3A\u5236\u4F7F\u7528 SSL \u8FDE\u63A5\uFF09"
  }, SMTPSetting_jsx(input_default.a, {
    placeholder: "\u8BF7\u8F93\u5165SMTP \u7AEF\u53E3",
    value: smtpPort,
    onChange: e => {
      setsmtpPort(e.target.value);
    }
  })), SMTPSetting_jsx(compatible_["Form"].Item, {
    label: "SMTP \u7528\u6237"
  }, SMTPSetting_jsx(input_default.a, {
    placeholder: "\u8BF7\u8F93\u5165SMTP \u7528\u6237",
    value: smtpUser,
    onChange: e => {
      setsmtpUser(e.target.value);
    }
  })), SMTPSetting_jsx(compatible_["Form"].Item, {
    label: "SMTP \u5BC6\u7801"
  }, SMTPSetting_jsx(input_default.a, {
    placeholder: "\u4E5F\u53EF\u80FD\u662F\u6388\u6743\u7801",
    value: smtpPass,
    onChange: e => {
      setsmtpPass(e.target.value);
    }
  })), SMTPSetting_jsx(compatible_["Form"].Item, {
    label: "\u53D1\u4EF6\u4EBA"
  }, SMTPSetting_jsx(input_default.a, {
    placeholder: "\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u5730\u5740",
    value: smtpFromUser,
    onChange: e => {
      setSmtpFromUser(e.target.value);
    }
  })), SMTPSetting_jsx(button_default.a, {
    type: "primary",
    onClick: save
  }, "\u4FDD\u5B58"), SMTPSetting_jsx(button_default.a, {
    style: {
      marginLeft: 16
    },
    onClick: test
  }, "\u6D4B\u8BD5"));
};
// EXTERNAL MODULE: ./node_modules/antd/lib/modal/style/index.js
var modal_style = __webpack_require__("fwXI");

// EXTERNAL MODULE: external "antd/lib/modal"
var modal_ = __webpack_require__("xKsY");
var modal_default = /*#__PURE__*/__webpack_require__.n(modal_);

// EXTERNAL MODULE: ./src/hooks/useForceUpdate.ts
var useForceUpdate = __webpack_require__("mMs/");

// CONCATENATED MODULE: ./src/components/Setting/LocaleSetting/index.tsx










var LocaleSetting_jsx = external_react_default.a.createElement;





const LocaleSetting = ({
  setting
}) => {
  const forceUpdate = Object(useForceUpdate["a" /* useForceUpdate */])();
  const {
    0: i18n,
    1: setI18n
  } = Object(external_react_["useState"])({});
  const locales = i18n && typeof i18n === 'object' ? Object.keys(i18n) : [];
  Object(external_react_["useEffect"])(() => {
    try {
      if (setting.i18n) {
        const json = JSON.parse(setting.i18n);
        setI18n(json);
      }
    } catch (e) {
      setI18n({});
    }
  }, [setting.i18n]);
  const onEdit = Object(external_react_["useCallback"])((key, action) => {
    const add = () => {
      let locale = '';

      const onChange = function (e) {
        locale = e.target.value;
      };

      modal_default.a.confirm({
        title: '请输入语言名称（英文）',
        // eslint-disable-next-line react/jsx-no-bind
        icon: LocaleSetting_jsx(input_default.a, {
          onChange: onChange
        }),

        onOk() {
          setI18n(json => {
            json[locale] = {};
            return json;
          });
          forceUpdate();
        },

        okText: '确认',
        cancelText: '取消',
        transitionName: '',
        maskTransitionName: ''
      });
    };

    const remove = () => {
      modal_default.a.confirm({
        title: '确认删除',
        icon: LocaleSetting_jsx(icons_["WarningOutlined"], null),

        onOk() {
          setI18n(json => {
            delete json[key];
            return json;
          });
          forceUpdate();
        },

        okText: '确认',
        cancelText: '取消',
        transitionName: '',
        maskTransitionName: ''
      });
    };

    if (action === 'add') {
      add();
    } else {
      remove();
    }
  }, [forceUpdate]);
  const onChange = Object(external_react_["useCallback"])(locale => {
    return value => {
      setI18n(json => {
        json[locale] = value;
        return json;
      });
    };
  }, []);
  const save = Object(external_react_["useCallback"])(() => {
    const data = {
      i18n: JSON.stringify(i18n)
    };
    providers_setting["a" /* SettingProvider */].updateSetting(data).then(() => {
      message_default.a.success('保存成功');
    });
  }, [i18n]);
  return LocaleSetting_jsx("div", null, LocaleSetting_jsx(tabs_default.a, {
    type: "editable-card",
    onEdit: onEdit
  }, locales.map(locale => LocaleSetting_jsx(tabs_default.a.TabPane, {
    tab: locale,
    key: locale
  }, LocaleSetting_jsx(JsonEditor, {
    value: JSON.stringify(i18n[locale], null, 2),
    onChange: onChange(locale)
  })))), LocaleSetting_jsx(button_default.a, {
    type: "primary",
    onClick: save
  }, "\u4FDD\u5B58"));
};
// CONCATENATED MODULE: ./pages/setting/index.tsx


var setting_jsx = external_react_default.a.createElement;










const {
  TabPane
} = tabs_default.a;

const Setting = ({
  type: defaultType
}) => {
  const router = Object(router_["useRouter"])();
  const {
    0: type,
    1: setType
  } = Object(external_react_["useState"])(defaultType);
  const setting = Object(useSetting["a" /* useSetting */])();
  const tabs = [{
    label: '系统设置',
    content: setting_jsx(SystemSetting, {
      setting: setting
    })
  }, {
    label: '国际化设置',
    content: setting_jsx(LocaleSetting, {
      setting: setting
    })
  }, {
    label: 'SEO设置',
    content: setting_jsx(SEOSetting, {
      setting: setting
    })
  }, {
    label: '数据统计',
    content: setting_jsx(AnalyticsSetting, {
      setting: setting
    })
  }, {
    label: 'OSS设置',
    content: setting_jsx(OSSSetting, {
      setting: setting
    })
  }, {
    label: 'SMTP服务',
    content: setting_jsx(SMTPSetting, {
      setting: setting
    })
  }];
  return setting_jsx(AdminLayout["a" /* AdminLayout */], null, setting && setting_jsx("div", {
    style: {
      background: '#fff',
      padding: 16
    }
  }, setting_jsx(tabs_default.a, {
    activeKey: type,
    tabPosition: 'left',
    onChange: key => {
      setType(key);
      router.push(`/setting`, `/setting?type=` + key, {
        shallow: true
      });
    }
  }, tabs.map(tab => {
    return setting_jsx(TabPane, {
      tab: tab.label,
      key: tab.label
    }, tab.content);
  }))));
};

Setting.getInitialProps = async ctx => {
  const {
    type
  } = ctx.query;
  return {
    type: '' + (type || '系统设置')
  };
};

/* harmony default export */ var pages_setting = __webpack_exports__["default"] = (Setting);

/***/ }),

/***/ "mMs/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useForceUpdate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useForceUpdate() {
  const {
    1: update
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(-1);
  const forceUpdate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    update(v => v + 1);
  }, []);
  return forceUpdate;
}

/***/ }),

/***/ "mN36":
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

/***/ "nZwT":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "oBNb":
/***/ (function(module, exports) {

module.exports = {
	"wrapper": "sPYrkftgglgcqyg8E-Hw1",
	"content": "_2BMYv5sd31d8Ka_hpoOXO2"
};

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

/***/ "ppZR":
/***/ (function(module, exports) {



/***/ }),

/***/ "s1bl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return usePagination; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useAsyncLoading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("7LGd");
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

  const [api, loading] = Object(_useAsyncLoading__WEBPACK_IMPORTED_MODULE_1__[/* useAsyncLoading */ "a"])(fetch);
  const {
    0: page,
    1: setPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultPage);
  const {
    0: pageSize,
    1: setPageSize
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultPageSize);
  const {
    0: params,
    1: setParams
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultParams);
  const {
    0: total,
    1: setTotal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const callAfter = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    after && after({
      page,
      pageSize,
      data,
      total,
      loading
    });
  }, [after, page, pageSize, data, total, loading]);
  const query = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((...args) => {
    return api(...args).then(res => {
      setData(res[0]);
      setTotal(res[1]);
      callAfter();
      return res;
    });
  }, [api, callAfter]); // eslint-disable-next-line react-hooks/exhaustive-deps

  const refresh = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => query(_objectSpread({
    page,
    pageSize
  }, params)), [page, pageSize, params]);
  const reset = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setPage(defaultPage);
    setPageSize(defaultPageSize);
    setParams(defaultParams);
  }, [defaultPage, defaultPageSize, defaultParams]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
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

/***/ }),

/***/ "tI3Q":
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "tL+A":
/***/ (function(module, exports) {



/***/ }),

/***/ "tV+F":
/***/ (function(module, exports) {

module.exports = {
	"preview": "Ww9TX_Nr4kCUq3meZJEr-"
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

/***/ "vsU0":
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "wvHv":
/***/ (function(module, exports) {

module.exports = require("antd/lib/drawer");

/***/ }),

/***/ "xKsY":
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

/***/ }),

/***/ "z6+L":
/***/ (function(module, exports) {

module.exports = require("antd/lib/tooltip");

/***/ }),

/***/ "zkM6":
/***/ (function(module, exports) {

module.exports = require("antd/lib/tabs");

/***/ }),

/***/ "zmYW":
/***/ (function(module, exports) {



/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });