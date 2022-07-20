module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		8: 0
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+PSA":
/***/ (function(module, exports) {

module.exports = require("antd/lib/switch");

/***/ }),

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

/***/ "/xgg":
/***/ (function(module, exports) {



/***/ }),

/***/ "0/K+":
/***/ (function(module, exports) {



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

/***/ "1/37":
/***/ (function(module, exports) {



/***/ }),

/***/ "27qp":
/***/ (function(module, exports) {

module.exports = require("antd/lib/popover");

/***/ }),

/***/ "3PsY":
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("LMIn");


/***/ }),

/***/ "4Jgv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryProvider; });
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pUN5");

class CategoryProvider {
  /**
   * 获取所有标签
   */
  static async getCategory() {
    return _http__WEBPACK_IMPORTED_MODULE_0__[/* httpProvider */ "a"].get('/category');
  }
  /**
   * 添加标签
   * @param data
   */


  static async add(data) {
    return _http__WEBPACK_IMPORTED_MODULE_0__[/* httpProvider */ "a"].post('/category', data);
  }
  /**
   * 更新标签
   * @param id
   * @param data
   */


  static async update(id, data) {
    return _http__WEBPACK_IMPORTED_MODULE_0__[/* httpProvider */ "a"].patch(`/category/${id}`, data);
  }
  /**
   * 删除标签
   * @param id
   */


  static async delete(id) {
    return _http__WEBPACK_IMPORTED_MODULE_0__[/* httpProvider */ "a"].delete(`/category/${id}`);
  }

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

/***/ "4ugE":
/***/ (function(module, exports) {

module.exports = require("showdown");

/***/ }),

/***/ "5rRV":
/***/ (function(module, exports) {

module.exports = require("antd/lib/card");

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

/***/ "9Oib":
/***/ (function(module, exports) {

module.exports = require("highlight.js");

/***/ }),

/***/ "9kiZ":
/***/ (function(module, exports) {

module.exports = {
	"formItem": "_2JqVwlivDvuj5Yr3G6BP0A",
	"cover": "_1ELLRPoAPiBhBiNggeLlNx",
	"preview": "_3IFTNizfXdCWVFOnNGMoBI"
};

/***/ }),

/***/ "A4pX":
/***/ (function(module, exports) {

module.exports = require("antd/lib/select");

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

/***/ "G851":
/***/ (function(module, exports) {



/***/ }),

/***/ "HgHO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/dropdown");

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

/***/ "LGkk":
/***/ (function(module, exports) {



/***/ }),

/***/ "LMIn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _providers_article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("hfvm");
/* harmony import */ var _components_ArticleEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Tvge");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Editor = ({
  id,
  article
}) => {
  return __jsx(_components_ArticleEditor__WEBPACK_IMPORTED_MODULE_2__[/* ArticleEditor */ "a"], {
    id: id,
    article: article
  });
};

Editor.getInitialProps = async ctx => {
  const {
    id
  } = ctx.query;
  const article = await _providers_article__WEBPACK_IMPORTED_MODULE_1__[/* ArticleProvider */ "a"].getArticle(id);
  return {
    id,
    article
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Editor);

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
  const toggle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setValue(v => !v);
  }, []);
  return [value, toggle];
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

/***/ "MLMA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return groupBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatFileSize; });
/* unused harmony export debounce */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return resolveUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isOdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return scrollToBottom; });
const groupBy = function (data, condition) {
  if (!condition || !Array.isArray(data)) {
    return data;
  }

  const result = Object.create(null);
  let key = null;
  data.forEach((item, i, arr) => {
    key = condition(item, i, arr);

    if (key === null || key === undefined) {
      return;
    }

    if (result[key]) {
      result[key].push(item);
    } else {
      result[key] = [item];
    }
  });
  return result;
};
const formatFileSize = size => {
  if (size < 1024) {
    return size + ' Byte';
  }

  if (size < 1024 * 1024) {
    return (size / 1024).toFixed(2) + ' KB';
  }

  return (size / 1024 / 1024).toFixed(2) + ' MB';
};
function debounce(func, wait, immediate = false) {
  let timeout;

  const debounced = function () {
    const context = this; // eslint-disable-line @typescript-eslint/no-this-alias

    const args = arguments; // eslint-disable-line prefer-rest-params

    const later = function () {
      timeout = null;

      if (!immediate) {
        func.apply(context, args);
      }
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };

  debounced.cancel = () => {
    clearTimeout(timeout);
  };

  return debounced;
}
function resolveUrl(baseURL, relativeURL) {
  if (!baseURL) {
    baseURL = '/';
  }

  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
}
const isOdd = v => v % 2 !== 0;
const scrollToBottom = el => {
  const currentScrollTop = el.scrollTop;
  const clientHeight = el.offsetHeight;
  const scrollHeight = el.scrollHeight;
  el.scrollTo(0, currentScrollTop + (scrollHeight - currentScrollTop - clientHeight));
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

/***/ "Nuea":
/***/ (function(module, exports) {

module.exports = require("monaco-markdown");

/***/ }),

/***/ "PFYH":
/***/ (function(module, exports) {



/***/ }),

/***/ "Puj+":
/***/ (function(module, exports) {

module.exports = require("antd/lib/table");

/***/ }),

/***/ "QghY":
/***/ (function(module, exports) {

module.exports = require("antd/lib/popconfirm");

/***/ }),

/***/ "SgnO":
/***/ (function(module, exports) {

module.exports = {
	"wrapper": "_2Z5bKQ-ABqi55xre8aDMAq",
	"toolWrap": "HOxS4yLF9JtST7GE9ykAC",
	"modeWrapper": "_1p8JqQveq9_Dc5ZE6XOSMW",
	"tocWrapper": "zXw8_fyADjXeVOFVWEhs1"
};

/***/ }),

/***/ "TfTO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/upload");

/***/ }),

/***/ "Tvge":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ ArticleEditor; });

// EXTERNAL MODULE: ./node_modules/antd/lib/page-header/style/index.js
var style = __webpack_require__("1/37");

// EXTERNAL MODULE: external "antd/lib/page-header"
var page_header_ = __webpack_require__("p9i8");
var page_header_default = /*#__PURE__*/__webpack_require__.n(page_header_);

// EXTERNAL MODULE: ./node_modules/antd/lib/dropdown/style/index.js
var dropdown_style = __webpack_require__("G851");

// EXTERNAL MODULE: external "antd/lib/dropdown"
var dropdown_ = __webpack_require__("HgHO");
var dropdown_default = /*#__PURE__*/__webpack_require__.n(dropdown_);

// EXTERNAL MODULE: ./node_modules/antd/lib/menu/style/index.js
var menu_style = __webpack_require__("PFYH");

// EXTERNAL MODULE: external "antd/lib/menu"
var menu_ = __webpack_require__("a5Fm");
var menu_default = /*#__PURE__*/__webpack_require__.n(menu_);

// EXTERNAL MODULE: ./node_modules/antd/lib/input/style/index.js
var input_style = __webpack_require__("cUip");

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__("Uqqx");
var input_default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: ./node_modules/antd/lib/popconfirm/style/index.js
var popconfirm_style = __webpack_require__("eOfH");

// EXTERNAL MODULE: external "antd/lib/popconfirm"
var popconfirm_ = __webpack_require__("QghY");
var popconfirm_default = /*#__PURE__*/__webpack_require__.n(popconfirm_);

// EXTERNAL MODULE: ./node_modules/antd/lib/button/style/index.js
var button_style = __webpack_require__("MaXC");

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__("eGmO");
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: ./node_modules/antd/lib/modal/style/index.js
var modal_style = __webpack_require__("fwXI");

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

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__("zIXN");

// EXTERNAL MODULE: ./src/utils/index.tsx
var utils = __webpack_require__("MLMA");

// EXTERNAL MODULE: ./src/hooks/useSetting.ts
var useSetting = __webpack_require__("6HBy");

// EXTERNAL MODULE: ./src/hooks/useToggle.ts
var useToggle = __webpack_require__("M7TQ");

// EXTERNAL MODULE: ./src/components/Editor/index.tsx + 15 modules
var Editor = __webpack_require__("gFvc");

// EXTERNAL MODULE: ./src/providers/article.ts
var providers_article = __webpack_require__("hfvm");

// EXTERNAL MODULE: ./node_modules/antd/lib/drawer/style/index.js
var drawer_style = __webpack_require__("dc+4");

// EXTERNAL MODULE: external "antd/lib/drawer"
var drawer_ = __webpack_require__("wvHv");
var drawer_default = /*#__PURE__*/__webpack_require__.n(drawer_);

// EXTERNAL MODULE: ./node_modules/antd/lib/select/style/index.js
var select_style = __webpack_require__("ek7I");

// EXTERNAL MODULE: external "antd/lib/select"
var select_ = __webpack_require__("A4pX");
var select_default = /*#__PURE__*/__webpack_require__.n(select_);

// EXTERNAL MODULE: ./node_modules/antd/lib/switch/style/index.js
var switch_style = __webpack_require__("LGkk");

// EXTERNAL MODULE: external "antd/lib/switch"
var switch_ = __webpack_require__("+PSA");
var switch_default = /*#__PURE__*/__webpack_require__.n(switch_);

// EXTERNAL MODULE: ./src/components/FileSelectDrawer/index.tsx
var FileSelectDrawer = __webpack_require__("JT4/");

// EXTERNAL MODULE: ./src/providers/category.ts
var category = __webpack_require__("4Jgv");

// EXTERNAL MODULE: ./src/providers/tag.ts
var providers_tag = __webpack_require__("iatk");

// EXTERNAL MODULE: ./src/components/ArticleEditor/ArticleSettingDrawer/index.module.scss
var index_module = __webpack_require__("9kiZ");
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);

// CONCATENATED MODULE: ./src/components/ArticleEditor/ArticleSettingDrawer/index.tsx










var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const FormItem = ({
  label,
  content
}) => {
  return __jsx("div", {
    className: index_module_default.a.formItem
  }, __jsx("span", null, label), __jsx("div", null, content));
};

const initialArticleAttrs = {
  summary: null,
  // 摘要
  password: null,
  // 密码
  totalAmount: null,
  //支付金额
  isCommentable: true,
  // 评论
  isRecommended: true,
  // 推荐到首页
  category: null,
  // 分类
  tags: [],
  // 标签
  cover: null // 封面

};

function reducer(state = initialArticleAttrs, action) {
  const payload = action.payload;

  switch (action.type) {
    case 'summary':
      return _objectSpread(_objectSpread({}, state), {}, {
        summary: payload
      });

    case 'password':
      return _objectSpread(_objectSpread({}, state), {}, {
        password: payload
      });

    case 'totalAmount':
      return _objectSpread(_objectSpread({}, state), {}, {
        totalAmount: payload
      });

    case 'isCommentable':
      return _objectSpread(_objectSpread({}, state), {}, {
        isCommentable: payload
      });

    case 'isRecommended':
      return _objectSpread(_objectSpread({}, state), {}, {
        isRecommended: payload
      });

    case 'category':
      return _objectSpread(_objectSpread({}, state), {}, {
        category: payload
      });

    case 'tags':
      return _objectSpread(_objectSpread({}, state), {}, {
        tags: payload
      });

    case 'cover':
      return _objectSpread(_objectSpread({}, state), {}, {
        cover: payload
      });

    default:
      return state;
  }
}

const ArticleSettingDrawer = ({
  article,
  visible,
  onClose,
  onChange
}) => {
  const {
    0: fileVisible,
    1: setFileVisible
  } = Object(external_react_["useState"])(false);
  const {
    0: attrs,
    1: dispatch
  } = Object(external_react_["useReducer"])(reducer, article);
  const {
    0: categorys,
    1: setCategorys
  } = Object(external_react_["useState"])([]);
  const {
    0: tags,
    1: setTags
  } = Object(external_react_["useState"])([]);
  Object(external_react_["useEffect"])(() => {
    category["a" /* CategoryProvider */].getCategory().then(res => setCategorys(res));
    providers_tag["a" /* TagProvider */].getTags().then(tags => setTags(tags));
  }, []);

  const ok = () => {
    onChange(_objectSpread(_objectSpread({}, attrs), {}, {
      tags: (attrs.tags || []).join(',')
    }));
  };

  return __jsx(drawer_default.a, {
    width: 480,
    placement: "right",
    title: '文章设置',
    closable: true,
    onClose: onClose,
    visible: visible
  }, __jsx(FormItem, {
    label: "\u6587\u7AE0\u6458\u8981",
    content: __jsx(input_default.a.TextArea, {
      className: index_module_default.a.formItem,
      placeholder: "\u8BF7\u8F93\u5165\u6587\u7AE0\u6458\u8981",
      autoSize: {
        minRows: 6,
        maxRows: 8
      },
      value: attrs.summary,
      onChange: e => {
        dispatch({
          type: 'summary',
          payload: e.target.value
        });
      }
    })
  }), __jsx(FormItem, {
    label: "\u8BBF\u95EE\u5BC6\u7801",
    content: __jsx(input_default.a.Password, {
      placeholder: "\u8F93\u5165\u540E\u67E5\u770B\u9700\u8981\u5BC6\u7801",
      value: attrs.password,
      onChange: e => {
        dispatch({
          type: 'password',
          payload: e.target.value
        });
      }
    })
  }), __jsx(FormItem, {
    label: "\u4ED8\u8D39\u67E5\u770B",
    content: __jsx(input_default.a.Password, {
      placeholder: "\u8F93\u5165\u540E\u9700\u8981\u652F\u4ED8\u7684\u8D39\u7528",
      value: attrs.totalAmount,
      onChange: e => {
        dispatch({
          type: 'totalAmount',
          payload: e.target.value
        });
      }
    })
  }), __jsx(FormItem, {
    label: "\u5F00\u542F\u8BC4\u8BBA",
    content: __jsx(switch_default.a, {
      checked: attrs.isCommentable,
      onChange: val => {
        dispatch({
          type: 'isCommentable',
          payload: val
        });
      }
    })
  }), __jsx(FormItem, {
    label: "\u9996\u9875\u63A8\u8350",
    content: __jsx(switch_default.a, {
      checked: attrs.isRecommended,
      onChange: val => {
        dispatch({
          type: 'isRecommended',
          payload: val
        });
      }
    })
  }), __jsx(FormItem, {
    label: "\u9009\u62E9\u5206\u7C7B",
    content: __jsx(select_default.a, {
      value: attrs.category && attrs.category.id || attrs.category,
      onChange: id => {
        dispatch({
          type: 'category',
          payload: id
        });
      },
      style: {
        width: '100%'
      }
    }, categorys.map(t => __jsx(select_default.a.Option, {
      key: t.id,
      value: t.id
    }, t.label)))
  }), __jsx(FormItem, {
    label: "\u9009\u62E9\u6807\u7B7E",
    content: __jsx(select_default.a, {
      style: {
        width: '100%'
      },
      mode: "tags",
      value: (attrs.tags || []).map(t => t.id || t),
      onChange: tags => {
        dispatch({
          type: 'tags',
          payload: tags
        });
      }
    }, tags.map(tag => __jsx(select_default.a.Option, {
      key: tag.id,
      value: tag.id
    }, tag.label)))
  }), __jsx(FormItem, {
    label: "\u6587\u7AE0\u5C01\u9762",
    content: __jsx("div", {
      className: index_module_default.a.cover
    }, __jsx("div", {
      onClick: () => setFileVisible(true),
      className: index_module_default.a.preview
    }, __jsx("img", {
      src: attrs.cover,
      alt: "\u9884\u89C8\u56FE"
    })), __jsx(input_default.a, {
      placeholder: "\u6216\u8F93\u5165\u5916\u90E8\u94FE\u63A5",
      value: attrs.cover,
      onChange: e => {
        dispatch({
          type: 'cover',
          payload: e.target.value
        });
      }
    }), __jsx(button_default.a, {
      onClick: () => {
        dispatch({
          type: 'cover',
          payload: null
        });
      }
    }, "\u79FB\u9664"))
  }), __jsx(FileSelectDrawer["a" /* FileSelectDrawer */], {
    closeAfterClick: true,
    visible: fileVisible,
    onClose: () => setFileVisible(false),
    onChange: url => {
      dispatch({
        type: 'cover',
        payload: url
      });
    }
  }), __jsx("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      borderTop: '1px solid #e8e8e8',
      padding: '10px 16px',
      textAlign: 'right',
      left: 0,
      background: '#fff',
      borderRadius: '0 0 4px 4px'
    }
  }, __jsx(button_default.a, {
    type: "primary",
    onClick: ok
  }, "\u786E\u8BA4")));
};
// EXTERNAL MODULE: ./src/components/ArticleEditor/index.module.scss
var ArticleEditor_index_module = __webpack_require__("z6IJ");
var ArticleEditor_index_module_default = /*#__PURE__*/__webpack_require__.n(ArticleEditor_index_module);

// CONCATENATED MODULE: ./src/components/ArticleEditor/index.tsx
















var ArticleEditor_jsx = external_react_default.a.createElement;

function ArticleEditor_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ArticleEditor_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ArticleEditor_ownKeys(Object(source), true).forEach(function (key) { ArticleEditor_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ArticleEditor_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ArticleEditor_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const REQUIRED_ARTICLE_ATTRS = [['title', '请输入文章标题'], ['content', '请输入文章内容']]; // 副作用：传给服务端的 category 需要是 id

const transformCategory = article => {
  if (article.category && article.category.id) {
    article.category = article.category.id;
  }
};

const transformTags = article => {
  if (Array.isArray(article.tags)) {
    try {
      article.tags = article.tags.map(t => t.id).join(',');
    } catch (e) {
      console.log(e);
    }
  }
};

const ArticleEditor = ({
  id: defaultId,
  article: defaultArticle = {
    title: ''
  }
}) => {
  const isCreate = !defaultId; // 一开始是否是新建

  const setting = Object(useSetting["a" /* useSetting */])();
  const {
    0: id,
    1: setId
  } = Object(external_react_["useState"])(defaultId);
  const {
    0: article,
    1: setArticle
  } = Object(external_react_["useState"])(defaultArticle);
  const [settingDrawerVisible, toggleSettingDrawerVisible] = Object(useToggle["a" /* useToggle */])(false);
  const patchArticle = Object(external_react_["useMemo"])(() => key => value => {
    if (value.target) {
      value = value.target.value;
    }

    setArticle(article => {
      article[key] = value;
      return article;
    });
  }, []); // 校验文章必要属性

  const check = Object(external_react_["useCallback"])(() => {
    let canPublish = true;
    let errorMsg = null;
    REQUIRED_ARTICLE_ATTRS.forEach(([key, msg]) => {
      if (!article[key]) {
        errorMsg = msg;
        canPublish = false;
      }
    });

    if (!canPublish) {
      return Promise.reject(new Error(errorMsg));
    }

    return Promise.resolve();
  }, [article]); // 打开发布抽屉

  const openSetting = Object(external_react_["useCallback"])(() => {
    check().then(() => {
      toggleSettingDrawerVisible();
    }).catch(err => {
      message_default.a.warn(err.message);
    });
  }, [check, toggleSettingDrawerVisible]);
  const saveSetting = Object(external_react_["useCallback"])(setting => {
    toggleSettingDrawerVisible();
    Object.assign(article, setting);
  }, [article, toggleSettingDrawerVisible]); // 保存草稿或者发布线上

  const saveOrPublish = Object(external_react_["useCallback"])((patch = {}) => {
    const data = ArticleEditor_objectSpread(ArticleEditor_objectSpread({}, article), patch);

    check().then(() => {
      transformCategory(data);
      transformTags(data);
      const promise = !isCreate ? providers_article["a" /* ArticleProvider */].updateArticle(id, data) : providers_article["a" /* ArticleProvider */].addArticle(data);
      promise.then(res => {
        setId(res.id);

        message_default.a.success(res.status === 'draft' ? '文章已保存为草稿' : '文章已发布');
      });
    }).catch(err => {
      message_default.a.warn(err.message);
    });
  }, [article, isCreate, check, id]);
  const saveDraft = Object(external_react_["useCallback"])(() => {
    saveOrPublish({
      status: 'draft'
    });
  }, [saveOrPublish]);
  const publish = Object(external_react_["useCallback"])(() => {
    saveOrPublish({
      status: 'publish'
    });
  }, [saveOrPublish]); // 预览文章

  const preview = Object(external_react_["useCallback"])(() => {
    if (id) {
      window.open(Object(utils["d" /* resolveUrl */])(setting.systemUrl, '/article/' + id));
    } else {
      message_default.a.warn('请先保存');
    }
  }, [id, setting.systemUrl]);
  const deleteArticle = Object(external_react_["useCallback"])(() => {
    if (!id) {
      return;
    }

    const handle = () => {
      providers_article["a" /* ArticleProvider */].deleteArticle(id).then(() => {
        message_default.a.success('文章删除成功');

        router_default.a.push('/article');
      });
    };

    modal_default.a.confirm({
      title: '确认删除？',
      content: '删除内容后，无法恢复。',
      onOk: handle,
      okText: '确认',
      cancelText: '取消',
      transitionName: '',
      maskTransitionName: ''
    });
  }, [id]);
  Object(external_react_["useEffect"])(() => {
    if (isCreate && id) {
      router_default.a.replace('/article/editor/' + id);
    }
  }, [id, isCreate]);
  return ArticleEditor_jsx("div", {
    className: ArticleEditor_index_module_default.a.wrapper
  }, ArticleEditor_jsx(external_react_helmet_["Helmet"], null, ArticleEditor_jsx("title", null, id ? `编辑文章 ${article.title ? '-' + article.title : ''}` : '新建文章')), ArticleEditor_jsx("header", {
    className: ArticleEditor_index_module_default.a.header
  }, ArticleEditor_jsx(page_header_default.a, {
    backIcon: ArticleEditor_jsx(popconfirm_default.a, {
      title: "\u786E\u8BA4\u5173\u95ED\uFF1F\u5982\u679C\u6709\u5185\u5BB9\u53D8\u66F4\uFF0C\u8BF7\u5148\u4FDD\u5B58\u3002",
      onConfirm: () => router_default.a.push('/article'),
      onCancel: () => null,
      okText: "\u786E\u8BA4",
      cancelText: "\u53D6\u6D88",
      placement: "rightBottom"
    }, ArticleEditor_jsx(button_default.a, {
      size: "small",
      icon: ArticleEditor_jsx(icons_["CloseOutlined"], null)
    })),
    style: {
      borderBottom: '1px solid rgb(235, 237, 240)'
    },
    onBack: () => null,
    title: ArticleEditor_jsx(input_default.a, {
      style: {
        width: 300
      },
      placeholder: "\u8BF7\u8F93\u5165\u6587\u7AE0\u6807\u9898",
      defaultValue: article.title,
      onChange: patchArticle('title')
    }),
    extra: [ArticleEditor_jsx(button_default.a, {
      key: "publish",
      type: "primary",
      onClick: publish
    }, "\u53D1\u5E03"), ArticleEditor_jsx(dropdown_default.a, {
      key: "more",
      overlay: ArticleEditor_jsx(menu_default.a, null, ArticleEditor_jsx(menu_default.a.Item, {
        key: "view",
        disabled: isCreate,
        onClick: preview
      }, "\u67E5\u770B"), ArticleEditor_jsx(menu_default.a.Item, {
        key: "setting",
        onClick: openSetting
      }, "\u8BBE\u7F6E"), ArticleEditor_jsx(menu_default.a.Divider, {
        key: "divide-1"
      }), ArticleEditor_jsx(menu_default.a.Item, {
        key: "draft",
        onClick: saveDraft
      }, "\u4FDD\u5B58\u8349\u7A3F"), ArticleEditor_jsx(menu_default.a.Divider, {
        key: "divide-2"
      }), ArticleEditor_jsx(menu_default.a.Item, {
        key: "delete",
        disabled: isCreate,
        onClick: deleteArticle
      }, "\u5220\u9664"))
    }, ArticleEditor_jsx(button_default.a, {
      icon: ArticleEditor_jsx(icons_["EllipsisOutlined"], null),
      type: "link"
    }))]
  })), ArticleEditor_jsx("main", {
    className: external_classnames_default()(ArticleEditor_index_module_default.a.main)
  }, ArticleEditor_jsx(Editor["a" /* Editor */], {
    defaultValue: article.content,
    onChange: ({
      value,
      html,
      toc
    }) => {
      patchArticle('content')(value);
      patchArticle('html')(html);
      patchArticle('toc')(toc);
    }
  })), ArticleEditor_jsx(ArticleSettingDrawer, {
    article: article,
    visible: settingDrawerVisible,
    onClose: toggleSettingDrawerVisible,
    onChange: saveSetting
  }));
};

/***/ }),

/***/ "TxAo":
/***/ (function(module, exports) {



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

/***/ "bybV":
/***/ (function(module, exports) {

module.exports = {
	"wrapper": "_1sKidYwHy5rfKd_e6Z5wYv",
	"item": "_3qXCrOzOrs8M_4-seSIIy4",
	"active": "_2XFs_bs8wvk8RFtVoqjKwn"
};

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cUip":
/***/ (function(module, exports) {



/***/ }),

/***/ "dc+4":
/***/ (function(module, exports) {



/***/ }),

/***/ "eGmO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "eOfH":
/***/ (function(module, exports) {



/***/ }),

/***/ "ek7I":
/***/ (function(module, exports) {



/***/ }),

/***/ "fv9D":
/***/ (function(module, exports) {



/***/ }),

/***/ "fwXI":
/***/ (function(module, exports) {



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

/***/ "gFvc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Editor; });

// EXTERNAL MODULE: ./node_modules/antd/lib/divider/style/index.js
var style = __webpack_require__("lSEL");

// EXTERNAL MODULE: external "antd/lib/divider"
var divider_ = __webpack_require__("xZtu");
var divider_default = /*#__PURE__*/__webpack_require__.n(divider_);

// EXTERNAL MODULE: ./node_modules/antd/lib/tooltip/style/index.js
var tooltip_style = __webpack_require__("93XW");

// EXTERNAL MODULE: external "antd/lib/tooltip"
var tooltip_ = __webpack_require__("z6+L");
var tooltip_default = /*#__PURE__*/__webpack_require__.n(tooltip_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// EXTERNAL MODULE: ./src/hooks/useToggle.ts
var useToggle = __webpack_require__("M7TQ");

// CONCATENATED MODULE: ./src/components/Editor/DefaultMarkdown.ts
const DEFAULT_MARKDOWN = `
# 欢迎使用 Wipi Markdown 编辑器

> * 整理知识，学习笔记
> * 发布日记，杂文，所见所想
> * 撰写发布技术文稿（代码支持）

## 什么是 Markdown

Markdown 是一种方便记忆、书写的纯文本标记语言，用户可以使用这些标记符号以最小的输入代价生成极富表现力的文档：譬如您正在阅读的这份文档。它使用简单的符号标记不同的标题，分割不同的段落，**粗体** 或者 *斜体* 某些文字。

### 1. 待办事宜 Todo 列表

- [ ] 支持以 PDF 格式导出文稿
- [x] 新增 Todo 列表功能

### 2. 高亮一段代码[^code]

\`\`\`python
@requires_authorization
class SomeClass:
    pass

if __name__ == '__main__':
    # A comment
    print 'hello world'
\`\`\`

### 3. 绘制表格

| 项目        | 价格   |  数量  |
| --------   | -----:  | :----:  |
| 计算机     | 1600 |   5     |
| 手机        |   12   |   12   |
| 管线        |    10    |  234  |

### 4. 嵌入网址
<iframe src="//player.bilibili.com/player.html?aid=77737877&bvid=BV1xJ411z7eS&cid=132993821&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

\`\`\`HTML
<iframe src="//player.bilibili.com/player.html?aid=77737877&bvid=BV1xJ411z7eS&cid=132993821&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
\`\`\`
`;
// EXTERNAL MODULE: ./node_modules/antd/lib/popover/style/index.js
var popover_style = __webpack_require__("/xgg");

// EXTERNAL MODULE: external "antd/lib/popover"
var popover_ = __webpack_require__("27qp");
var popover_default = /*#__PURE__*/__webpack_require__.n(popover_);

// EXTERNAL MODULE: ./node_modules/antd/lib/spin/style/index.js
var spin_style = __webpack_require__("nT0F");

// EXTERNAL MODULE: external "antd/lib/spin"
var spin_ = __webpack_require__("vEvA");
var spin_default = /*#__PURE__*/__webpack_require__.n(spin_);

// EXTERNAL MODULE: ./node_modules/antd/lib/message/style/index.js
var message_style = __webpack_require__("tL+A");

// EXTERNAL MODULE: external "antd/lib/message"
var message_ = __webpack_require__("3PsY");
var message_default = /*#__PURE__*/__webpack_require__.n(message_);

// EXTERNAL MODULE: ./src/providers/file.ts
var providers_file = __webpack_require__("+T3G");

// CONCATENATED MODULE: ./src/components/Editor/utils/syncScroll.tsx
const subjects = new Map();
const ignore = {};
const subjectScrollListener = (self, target, callback) => {
  const fns = subjects.get(target) || [];
  fns.push(arg => {
    callback(arg);
    ignore[self] = true;
  });
  subjects.set(target, fns);
};
const removeScrollListener = (target, callback) => {
  const fns = subjects.get(target);

  if (fns && fns.length) {
    const idx = fns.indexOf(callback);

    if (idx > -1) {
      fns.splice(idx, 1);
    } else {
      subjects.set(target, []);
    }
  }
};
const registerScollListener = (self, callback) => {
  return (...args) => {
    const tmp = ignore[self];
    ignore[self] = false;

    if (tmp) {
      return;
    }

    const value = callback(...args);
    const subjectFns = subjects.get(self) || [];
    subjectFns.forEach(fn => {
      fn(value);
    });
  };
};
// CONCATENATED MODULE: ./src/components/Editor/MonacoEditor.tsx




var __jsx = external_react_default.a.createElement;



let monaco = null;
const IMG_REXEXP = /^image\/(png|jpg|jpeg|gif)$/i;

const _MonacoEditor = (props, ref) => {
  const {
    defaultValue,
    onChange,
    onSave
  } = props;
  const container = Object(external_react_["useRef"])(null);
  const editorRef = Object(external_react_["useRef"])(null);
  const {
    0: mounted,
    1: setMounted
  } = Object(external_react_["useState"])(false);
  const registerChange = Object(external_react_["useCallback"])(() => {
    editorRef.current.onDidChangeModelContent(() => {
      const content = editorRef.current.getValue();
      onChange(content);
    });
  }, [onChange]);
  const registerScroll = Object(external_react_["useCallback"])(() => {
    editorRef.current.onDidScrollChange(registerScollListener('editor', () => {
      const top = editorRef.current.getScrollTop() / (editorRef.current.getContentHeight() - editorRef.current.getLayoutInfo().height);
      return {
        id: 'editor-scroll',
        top: top,
        left: editorRef.current.getScrollLeft()
      };
    }));
  }, []);
  const registerSave = Object(external_react_["useCallback"])(() => {
    // eslint-disable-next-line no-bitwise
    editorRef.current.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S, () => {
      onSave(editorRef.current.getValue());
    });
  }, [onSave]);
  const notifyMounted = Object(external_react_["useCallback"])(() => {
    window.postMessage({
      id: 'editor-mounted'
    }, window.location.href);
  }, []);
  Object(external_react_["useImperativeHandle"])(ref, () => editorRef.current, [mounted]); // eslint-disable-line react-hooks/exhaustive-deps

  Object(external_react_["useEffect"])(() => {
    Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "bfyb", 7)), Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "Nuea", 7))]).then(res => {
      monaco = res[0];
      const MonacoMarkdown = res[1];
      const editor = monaco.editor.create(container.current, {
        language: 'markdown',
        automaticLayout: true,
        wordWrap: 'on',
        theme: 'vs',
        minimap: {
          enabled: false
        },
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
      const extension = new MonacoMarkdown.MonacoMarkdownExtension();
      extension.activate(editor);
      registerScroll();
      registerChange();
      registerSave();
      notifyMounted();
      setMounted(true);
    });
    return () => {
      setMounted(false);
      editorRef.current && editorRef.current.dispose();
    };
  }, [registerScroll, registerChange, registerSave, notifyMounted]);
  Object(external_react_["useEffect"])(() => {
    if (!mounted) {
      return undefined;
    }

    const listener = ({
      top,
      left
    }) => {
      editorRef.current.setScrollTop(top * editorRef.current.getContentHeight());
      editorRef.current.setScrollLeft(left);
    };

    subjectScrollListener('editor', 'preview', listener);
    return () => {
      removeScrollListener('preview', listener);
    };
  }, [mounted]);
  Object(external_react_["useEffect"])(() => {
    if (!mounted) {
      return undefined;
    }

    const editor = editorRef.current;
    const clearRef = {
      current: () => {
        return undefined;
      }
    };
    editor.onDidPaste(e => {
      const pastePosition = e.range;
      const delta = [{
        range: new monaco.Range(pastePosition.startLineNumber, pastePosition.startColumn, pastePosition.endLineNumber, pastePosition.endColumn),
        text: ``
      }];

      clearRef.current = () => {
        editor.executeEdits('', delta);
      };
    });

    const onPaste = async e => {
      const selection = editor.getSelection();
      const items = e.clipboardData.items;
      const imgFiles = Array.from(items).filter(item => item.type.match(IMG_REXEXP)).map(item => item.getAsFile());

      if (!imgFiles.length) {
        return;
      }

      const hide = message_default.a.loading('正在上传图片中', 0);

      const upload = file => {
        return providers_file["a" /* FileProvider */].uploadFile(file, 1).then(({
          url
        }) => {
          const delta = [{
            range: new monaco.Range(selection.endLineNumber, selection.endColumn, selection.endLineNumber, selection.endColumn),
            text: `![${file.name}](${url})`
          }];
          editor.executeEdits('', delta);
          const {
            endLineNumber,
            endColumn
          } = editor.getSelection();
          editor.setPosition({
            lineNumber: endLineNumber,
            column: endColumn
          });
        });
      };

      await Promise.all(imgFiles.map(upload));
      hide();
      clearRef.current();
    };

    window.addEventListener('paste', onPaste);
    return () => {
      window.removeEventListener('paste', onPaste);
    };
  }, [mounted]);
  Object(external_react_["useEffect"])(() => {
    if (!mounted || !editorRef.current) {
      return;
    }

    editorRef.current.setValue(defaultValue);
  }, [mounted, defaultValue]);
  return __jsx("div", {
    ref: container,
    style: {
      height: '100%',
      overflow: 'hidden'
    }
  }, mounted ? null : __jsx(spin_default.a, {
    tip: "\u7F16\u8F91\u5668\u52AA\u529B\u52A0\u8F7D\u4E2D...",
    spinning: true
  }));
};

const MonacoEditor = /*#__PURE__*/Object(external_react_["forwardRef"])(_MonacoEditor);
// CONCATENATED MODULE: ./src/components/Editor/toolbar/emojis.ts
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
// CONCATENATED MODULE: ./src/components/Editor/toolbar/Emoji.tsx




var Emoji_jsx = external_react_default.a.createElement;



const Emoji = ({
  editor
}) => {
  const insert = Object(external_react_["useCallback"])(key => {
    const result = emojis[key];
    const p = editor.getPosition();
    editor.executeEdits('', [{
      range: new monaco.Range(p.lineNumber, p.column, p.lineNumber, p.column),
      text: result
    }]);
  }, [editor]);
  return Emoji_jsx(popover_default.a, {
    content: Emoji_jsx("ul", {
      style: {
        width: 300,
        height: 300,
        overflow: 'auto',
        display: 'flex',
        flexWrap: 'wrap'
      }
    }, Object.keys(emojis).map(key => {
      return Emoji_jsx("li", {
        style: {
          display: 'inline-flex',
          padding: 4,
          fontSize: 16,
          cursor: 'pointer'
        },
        key: key,
        onClick: () => insert(key)
      }, emojis[key]);
    })),
    placement: "bottom",
    trigger: "click"
  }, Emoji_jsx(tooltip_default.a, {
    title: '插入表情'
  }, Emoji_jsx("svg", {
    viewBox: "0 0 1024 1024",
    width: "16px",
    height: "16px"
  }, Emoji_jsx("path", {
    d: "M288.92672 400.45568c0 30.80192 24.97024 55.77216 55.77216 55.77216s55.77216-24.97024 55.77216-55.77216c0-30.7968-24.97024-55.76704-55.77216-55.76704s-55.77216 24.97024-55.77216 55.76704z m334.60224 0c0 30.80192 24.97024 55.77216 55.77216 55.77216s55.77216-24.97024 55.77216-55.77216c0-30.7968-24.97024-55.76704-55.77216-55.76704s-55.77216 24.97024-55.77216 55.76704z m-111.5392 362.4704c-78.05952 0-156.13952-39.08096-200.75008-100.3776-16.77312-22.31296-27.84256-50.15552-39.08096-72.45824-5.53472-16.77312 5.5296-33.4592 16.77312-39.08096 16.77312-5.53472 27.84256 5.53472 33.46432 16.768 5.53472 22.30784 16.77312 39.08608 27.84256 55.77728 44.61568 55.76704 100.38272 83.69664 161.664 83.69664 61.30176 0 122.7008-27.84256 156.16-78.07488 11.15136-16.77824 22.30784-38.99904 27.84256-55.77728 5.62176-16.768 22.30784-22.30272 33.4592-16.768 16.768 5.53472 22.30784 22.30272 16.768 33.4592-5.61152 27.84256-22.2976 50.14528-39.08096 72.45824-38.912 61.37856-116.98176 100.3776-195.06176 100.3776z m0 194.51392C268.4928 957.44 66.56 755.52256 66.56 511.99488 66.56 268.48256 268.4928 66.56 511.98976 66.56 755.50208 66.56 957.44 268.48256 957.44 511.99488 957.44 755.52256 755.50208 957.44 511.98976 957.44z m0-831.45728c-213.78048 0-386.00192 172.21632-386.00192 386.01216 0 213.8112 172.22144 386.0224 386.00192 386.0224 213.80096 0 386.0224-172.2112 386.0224-386.0224 0-213.79584-172.22144-386.01216-386.0224-386.01216z",
    fill: "currentColor"
  }))));
};
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

// CONCATENATED MODULE: ./src/components/Editor/toolbar/Iframe.tsx








var Iframe_jsx = external_react_default.a.createElement;


const Iframe = ({
  editor
}) => {
  const {
    0: url,
    1: setURL
  } = Object(external_react_["useState"])('');
  const insertIframe = Object(external_react_["useCallback"])(() => {
    if (!url) {
      return;
    }

    const result = `<iframe src="${url}"></iframe>\n`;
    const p = editor.getPosition();
    editor.executeEdits('', [{
      range: new monaco.Range(p.lineNumber, p.column, p.lineNumber, p.column),
      text: result
    }]);
    setURL('');
  }, [editor, url]);
  return Iframe_jsx(popover_default.a, {
    content: Iframe_jsx("div", {
      style: {
        display: 'flex',
        flexWrap: 'nowrap'
      }
    }, Iframe_jsx(input_default.a, {
      autoFocus: true,
      value: url,
      onChange: e => setURL(e.target.value)
    }), Iframe_jsx(button_default.a, {
      style: {
        marginLeft: 6
      },
      onClick: insertIframe
    }, "\u5D4C\u5165")),
    placement: "bottom",
    trigger: "click"
  }, Iframe_jsx(tooltip_default.a, {
    title: '嵌入链接'
  }, Iframe_jsx("svg", {
    viewBox: "0 0 1024 1024",
    width: "16px",
    height: "16px"
  }, Iframe_jsx("path", {
    d: "M554.666667 853.333333h298.666666V170.666667H170.666667v298.666666h298.666666a85.333333 85.333333 0 0 1 85.333334 85.333334v298.666666z m-85.333334 0v-298.666666H170.666667v298.666666h298.666666zM170.666667 85.333333h682.666666a85.333333 85.333333 0 0 1 85.333334 85.333334v682.666666a85.333333 85.333333 0 0 1-85.333334 85.333334H170.666667a85.333333 85.333333 0 0 1-85.333334-85.333334V170.666667a85.333333 85.333333 0 0 1 85.333334-85.333334z",
    fill: "currentColor"
  }))));
};
// EXTERNAL MODULE: ./node_modules/antd/lib/upload/style/index.js
var upload_style = __webpack_require__("VDQ/");

// EXTERNAL MODULE: external "antd/lib/upload"
var upload_ = __webpack_require__("TfTO");
var upload_default = /*#__PURE__*/__webpack_require__.n(upload_);

// CONCATENATED MODULE: ./src/components/Editor/toolbar/Image.tsx






var Image_jsx = external_react_default.a.createElement;



const Image = ({
  editor
}) => {
  const uploadProps = {
    name: 'file',
    accept: `.jpg, .jpeg, .pjpeg, .png, .apng, .bmp, .gif, .svg, .webp`,
    multiple: false,
    showUploadList: false,
    action: '',

    beforeUpload(file) {
      const hide = message_default.a.loading('图片上传中...', 0);

      providers_file["a" /* FileProvider */].uploadFile(file).then(res => {
        message_default.a.success('上传成功');

        const result = `![${res.filename}](${res.url})`;
        const p = editor.getPosition();
        editor.executeEdits('', [{
          range: new monaco.Range(p.lineNumber, p.column, p.lineNumber, p.column),
          text: result
        }]);
        hide();
      }).catch(() => {
        message_default.a.error('上传失败');

        hide();
      });
      return Promise.reject(new Error('canceld'));
    }

  };
  return Image_jsx(upload_default.a, uploadProps, Image_jsx(tooltip_default.a, {
    title: '上传图片'
  }, Image_jsx("svg", {
    viewBox: "0 0 24 24",
    width: "16px",
    height: "16px",
    style: {
      marginTop: 6
    }
  }, Image_jsx("path", {
    fillRule: "evenodd",
    fill: "currentColor",
    d: "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
  }))));
};
// CONCATENATED MODULE: ./src/components/Editor/toolbar/Video.tsx






var Video_jsx = external_react_default.a.createElement;



const Video = ({
  editor
}) => {
  const uploadProps = {
    name: 'file',
    multiple: false,
    accept: `.mp4, .mov, .wmv, .flv, .avi, .webm, .mkv, .avchd`,
    action: '',
    showUploadList: false,

    beforeUpload(file) {
      const hide = message_default.a.loading('视频上传中...', 0);

      providers_file["a" /* FileProvider */].uploadFile(file).then(res => {
        message_default.a.success('上传成功');

        const result = `<video src="${res.url}"></video>\n`;
        const p = editor.getPosition();
        editor.executeEdits('', [{
          range: new monaco.Range(p.lineNumber, p.column, p.lineNumber, p.column),
          text: result
        }]);
        hide();
      }).catch(() => {
        message_default.a.error('上传失败');

        hide();
      });
      return Promise.reject(new Error('canceld'));
    }

  };
  return Video_jsx(upload_default.a, uploadProps, Video_jsx(tooltip_default.a, {
    title: '上传视频'
  }, Video_jsx("svg", {
    viewBox: "0 0 24 24",
    width: "16px",
    height: "16px",
    style: {
      marginTop: 6
    }
  }, Video_jsx("path", {
    fillRule: "evenodd",
    fill: "currentColor",
    d: "M21 19c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14zm-5-7L9 8v8l7-4z"
  }))));
};
// EXTERNAL MODULE: ./src/components/FileSelectDrawer/index.tsx
var FileSelectDrawer = __webpack_require__("JT4/");

// CONCATENATED MODULE: ./src/components/Editor/toolbar/File.tsx


var File_jsx = external_react_default.a.createElement;




const File = ({
  editor
}) => {
  const [fileDrawerVisible, toggleFileDrawerVisible] = Object(useToggle["a" /* useToggle */])(false);
  const insert = Object(external_react_["useCallback"])(img => {
    const result = `![图片](${img})`;
    const p = editor.getPosition();
    editor.executeEdits('', [{
      range: new monaco.Range(p.lineNumber, p.column, p.lineNumber, p.column),
      text: result
    }]);
  }, [editor]);
  return File_jsx(external_react_default.a.Fragment, null, File_jsx(tooltip_default.a, {
    title: '打开文件库'
  }, File_jsx("svg", {
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    onClick: toggleFileDrawerVisible
  }, File_jsx("path", {
    d: "M400.128 213.333333c25.472 0 49.92 10.453333 67.925333 29.013334l67.84 70.101333h221.44c53.034667 0 96 44.373333 96 99.072v342.698667C853.333333 808.96 810.368 853.333333 757.333333 853.333333H224C170.965333 853.333333 128 808.96 128 754.218667V312.448C128 257.706667 170.965333 213.333333 224 213.333333h176.128z m0 66.048H224a32.554667 32.554667 0 0 0-32 33.066667v441.770667c0 18.261333 14.336 33.066667 32 33.066666h533.333333c17.664 0 32-14.805333 32-33.066666V411.52a32.554667 32.554667 0 0 0-32-33.024h-234.666666a31.402667 31.402667 0 0 1-22.613334-9.685333L422.826667 289.066667a31.488 31.488 0 0 0-22.698667-9.685334zM629.333333 640a32 32 0 1 1 0 64h-277.333333a32 32 0 1 1 0-64h277.333333z",
    fill: "currentColor"
  }))), File_jsx(FileSelectDrawer["a" /* FileSelectDrawer */], {
    isCopy: true,
    closeAfterClick: true,
    visible: fileDrawerVisible,
    onChange: insert,
    onClose: toggleFileDrawerVisible
  }));
};
// CONCATENATED MODULE: ./src/components/Editor/toolbar/index.tsx
var toolbar_jsx = external_react_default.a.createElement;






const toolbar = [{
  label: '标题',
  content: () => toolbar_jsx("svg", {
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em"
  }, toolbar_jsx("path", {
    fillRule: "evenodd",
    fill: "currentColor",
    d: "M15 13H9v6H7V5h2v6h6V5h2v14h-2v-6z"
  })),
  getAction: editor => () => {
    editor.getAction('markdown.extension.editing.toggleHeadingUp').run(editor);
  }
}, {
  label: '加粗',
  content: () => toolbar_jsx("svg", {
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em"
  }, toolbar_jsx("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M13.5 19h-7V5h6a4 4 0 013.063 6.572A4 4 0 0113.5 19zm0-6h-5v4h5a2 2 0 100-4zm-1-2a2 2 0 100-4h-4v4h4z"
  })),
  getAction: editor => () => {
    editor.getAction('markdown.extension.editing.toggleBold').run(editor);
  }
}, {
  label: '斜体',
  content: () => toolbar_jsx("svg", {
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em"
  }, toolbar_jsx("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M10 5v2h2.623l-3.42 10H6v2h8.9v-2h-3.11l3.42-10H18V5z"
  })),
  getAction: editor => () => {
    editor.getAction('markdown.extension.editing.toggleItalic').run(editor);
  }
}, {
  label: '行内代码',
  content: () => toolbar_jsx("svg", {
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em"
  }, toolbar_jsx("path", {
    fillRule: "evenodd",
    fill: "currentColor",
    d: "M8.5 6l-3 5h-2l1-5h4zm12 0l-3 5h-2l1-5h4z"
  })),
  getAction: editor => () => {
    editor.getAction('markdown.extension.editing.toggleCodeSpan').run(editor);
  }
}, {
  label: '删除线',
  content: () => toolbar_jsx("svg", {
    viewBox: "64 64 896 896",
    width: "0.9em",
    height: "0.9em"
  }, toolbar_jsx("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M952 474H569.9c-10-2-20.5-4-31.6-6-15.9-2.9-22.2-4.1-30.8-5.8-51.3-10-82.2-20-106.8-34.2-35.1-20.5-52.2-48.3-52.2-85.1 0-37 15.2-67.7 44-89 28.4-21 68.8-32.1 116.8-32.1 54.8 0 97.1 14.4 125.8 42.8 14.6 14.4 25.3 32.1 31.8 52.6 1.3 4.1 2.8 10 4.3 17.8.9 4.8 5.2 8.2 9.9 8.2h72.8c5.6 0 10.1-4.6 10.1-10.1v-1c-.7-6.8-1.3-12.1-2-16-7.3-43.5-28-81.7-59.7-110.3-44.4-40.5-109.7-61.8-188.7-61.8-72.3 0-137.4 18.1-183.3 50.9-25.6 18.4-45.4 41.2-58.6 67.7-13.5 27.1-20.3 58.4-20.3 92.9 0 29.5 5.7 54.5 17.3 76.5 8.3 15.7 19.6 29.5 34.1 42H72c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h433.2c2.1.4 3.9.8 5.9 1.2 30.9 6.2 49.5 10.4 66.6 15.2 23 6.5 40.6 13.3 55.2 21.5 35.8 20.2 53.3 49.2 53.3 89 0 35.3-15.5 66.8-43.6 88.8-30.5 23.9-75.6 36.4-130.5 36.4-43.7 0-80.7-8.5-110.2-25-29.1-16.3-49.1-39.8-59.7-69.5-.8-2.2-1.7-5.2-2.7-9-1.2-4.4-5.3-7.5-9.7-7.5h-79.7c-5.6 0-10.1 4.6-10.1 10.1v1c.2 2.3.4 4.2.6 5.7 6.5 48.8 30.3 88.8 70.7 118.8 47.1 34.8 113.4 53.2 191.8 53.2 84.2 0 154.8-19.8 204.2-57.3 25-18.9 44.2-42.2 57.1-69 13-27.1 19.7-57.9 19.7-91.5 0-31.8-5.8-58.4-17.8-81.4-5.8-11.2-13.1-21.5-21.8-30.8H952c4.4 0 8-3.6 8-8v-60a8 8 0 0 0-8-7.9z"
  })),
  getAction: editor => () => {
    editor.getAction('markdown.extension.editing.toggleStrikethrough').run(editor);
  }
}, {
  label: '列表',
  content: () => toolbar_jsx("svg", {
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em"
  }, toolbar_jsx("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M2 17v-1h3v4H2v-1h2v-.5H3v-1h1V17H2zm1-9V5H2V4h2v4H3zm-1 3v-1h3v.9L3.2 13H5v1H2v-.9L3.8 11H2zm5-6h14v2H7V5zm0 14v-2h14v2H7zm0-6v-2h14v2H7z"
  })),
  getAction: editor => () => {
    editor.getAction('markdown.extension.editing.toggleList').run(editor);
  }
}, {
  label: '表情',
  content: ({
    editor
  }) => toolbar_jsx(Emoji, {
    editor: editor
  }),
  getAction: () => () => {
    return undefined;
  }
}, {
  label: '上传图片',
  content: ({
    editor
  }) => toolbar_jsx(Image, {
    editor: editor
  }),
  getAction: () => () => {
    return undefined;
  }
}, {
  label: '上传视频',
  content: ({
    editor
  }) => toolbar_jsx(Video, {
    editor: editor
  }),
  getAction: () => () => {
    return undefined;
  }
}, {
  label: '嵌入链接',
  content: ({
    editor
  }) => toolbar_jsx(Iframe, {
    editor: editor
  }),
  getAction: () => () => {
    return undefined;
  }
}, {
  label: '文件库',
  content: ({
    editor
  }) => toolbar_jsx(File, {
    editor: editor
  }),
  getAction: () => () => {
    return undefined;
  }
}];
// EXTERNAL MODULE: external "highlight.js"
var external_highlight_js_ = __webpack_require__("9Oib");
var external_highlight_js_default = /*#__PURE__*/__webpack_require__.n(external_highlight_js_);

// EXTERNAL MODULE: ./src/utils/copy.ts
var copy = __webpack_require__("0Kvv");

// EXTERNAL MODULE: ./src/components/MarkdownReader/index.module.scss
var index_module = __webpack_require__("0/K+");

// CONCATENATED MODULE: ./src/components/MarkdownReader/index.tsx
var MarkdownReader_jsx = external_react_default.a.createElement;




const MarkdownReader = ({
  content
}) => {
  const ref = Object(external_react_["useRef"])();
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
        span.innerText = '复制';

        span.onclick = () => Object(copy["a" /* copy */])(block.innerText);

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
  }, [content]);
  return MarkdownReader_jsx("div", {
    ref: ref,
    className: 'markdown'
  });
};
// EXTERNAL MODULE: external "showdown"
var external_showdown_ = __webpack_require__("4ugE");

// CONCATENATED MODULE: ./src/components/Editor/utils/markdown.ts

const converter = new external_showdown_["Converter"]({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
  emoji: true,
  smoothLivePreview: true,
  simpleLineBreaks: true,
  underline: true,
  parseImgDimensions: true,
  rawHeaderId: false,
  ghCompatibleHeaderId: true
});
const makeHtml = value => {
  return converter.makeHtml(value);
};
function makeToc(html) {
  const reg = /<h([\d]) id="([^<]+)">([^<]+)<\/h([\d])>/gi;
  let ret = null;
  const toc = [];

  while ((ret = reg.exec(html)) !== null) {
    toc.push({
      level: ret[1],
      id: ret[2],
      text: ret[3]
    });
  }

  return toc;
}
// CONCATENATED MODULE: ./src/components/Editor/Preview.tsx
var Preview_jsx = external_react_default.a.createElement;




const Preview = ({
  value
}) => {
  const ref = Object(external_react_["useRef"])();
  const html = makeHtml(value);
  Object(external_react_["useEffect"])(() => {
    const listener = ({
      top,
      left
    }) => {
      const scrollHeight = ref.current.scrollHeight;
      ref.current.scrollTop = top * scrollHeight;
      ref.current.scrollLeft = left;
    };

    subjectScrollListener('preview', 'editor', listener);
    return () => {
      removeScrollListener('editor', listener);
    };
  }, []);
  Object(external_react_["useEffect"])(() => {
    const el = ref.current;
    const listener = registerScollListener('preview', () => {
      return {
        top: el.scrollTop / (el.scrollHeight - el.offsetHeight),
        left: el.scrollLeft
      };
    });
    el.addEventListener('scroll', listener, true);
    return () => {
      el.removeEventListener('scroll', listener, true);
    };
  }, []);
  return Preview_jsx("div", {
    ref: ref,
    style: {
      height: '100%',
      padding: '10px 2rem 40px',
      overflow: 'auto'
    }
  }, Preview_jsx(MarkdownReader, {
    content: html
  }));
};
// EXTERNAL MODULE: ./node_modules/antd/lib/modal/style/index.js
var modal_style = __webpack_require__("fwXI");

// EXTERNAL MODULE: external "antd/lib/modal"
var modal_ = __webpack_require__("xKsY");
var modal_default = /*#__PURE__*/__webpack_require__.n(modal_);

// CONCATENATED MODULE: ./src/components/Editor/utils/modal.tsx


const modal_confirm = () => {
  return new Promise((resolve, reject) => {
    return modal_default.a.confirm({
      title: '内容恢复',
      content: '系统检测到上一次内容缓存，是否恢复该内容？',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        resolve(null);
      },
      onCancel: () => {
        reject(new Error('canceld'));
      },
      transitionName: '',
      maskTransitionName: ''
    });
  });
};
// EXTERNAL MODULE: ./src/components/Editor/index.module.scss
var Editor_index_module = __webpack_require__("SgnO");
var Editor_index_module_default = /*#__PURE__*/__webpack_require__.n(Editor_index_module);

// EXTERNAL MODULE: ./src/utils/index.tsx
var utils = __webpack_require__("MLMA");

// EXTERNAL MODULE: ./src/components/Toc/index.module.scss
var Toc_index_module = __webpack_require__("bybV");
var Toc_index_module_default = /*#__PURE__*/__webpack_require__.n(Toc_index_module);

// CONCATENATED MODULE: ./src/components/Toc/index.tsx
var Toc_jsx = external_react_default.a.createElement;




const Toc = ({
  tocs = []
}) => {
  const goto = Object(external_react_["useCallback"])(toc => {
    try {
      const el = document.getElementById(toc.id);

      if (el) {
        el.scrollIntoView();
      }
    } catch (e) {} // eslint-disable-line no-empty

  }, []);
  return Toc_jsx("div", {
    className: Toc_index_module_default.a.wrapper
  }, Toc_jsx("div", null, tocs.map((toc, idx) => {
    const v = toc.level;
    const f = Object(utils["c" /* isOdd */])(v - 1);
    return Toc_jsx("div", {
      key: `js-toc-` + idx,
      className: external_classnames_default()(Toc_index_module_default.a.item),
      id: `js-toc-` + idx,
      style: {
        'paddingLeft': 12 * (v - 1),
        'cursor': 'pointer',
        '--dot-left': 10 * (v - 2) + 'px',
        '--dot-width': 6 - (v - 1) + (f ? 1 : 0) + 'px'
      },
      onClick: () => goto(toc)
    }, Toc_jsx("div", null, toc.text));
  })));
};
// CONCATENATED MODULE: ./src/components/Editor/index.tsx




var Editor_jsx = external_react_default.a.createElement;












const CACHE_KEY = 'MONACO_CONTENT_STORAGE';
let timer;
const Editor = ({
  defaultValue = DEFAULT_MARKDOWN,
  onChange
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const editorRef = Object(external_react_["useRef"])();
  const editorContainerRef = Object(external_react_["useRef"])();
  const {
    0: innerValue,
    1: setInnerValue
  } = Object(external_react_["useState"])(defaultValue);
  const {
    0: mode,
    1: setMode
  } = Object(external_react_["useState"])('edit');
  const {
    0: two,
    1: setTwo
  } = Object(external_react_["useState"])(true);
  const {
    0: saveState,
    1: setSaveState
  } = Object(external_react_["useState"])(false);
  const [tocVisible, toggleTocVisible] = Object(useToggle["a" /* useToggle */])(true);
  const {
    0: tocs,
    1: setTocs
  } = Object(external_react_["useState"])([]);
  const {
    0: fullWidth,
    1: halfWidth
  } = Object(external_react_["useMemo"])(() => {
    return [tocVisible ? '80%' : '100%', tocVisible ? '40%' : '50%'];
  }, [tocVisible]);
  const toggleMode = Object(external_react_["useCallback"])(() => {
    setMode(mode => mode === 'preview' ? 'edit' : 'preview');
  }, []);
  const toggleTwo = Object(external_react_["useCallback"])(() => {
    setTwo(v => !v);
  }, []);
  const toggleSaveState = Object(external_react_["useCallback"])(() => {
    setSaveState(v => {
      const nextValue = !v;

      if (nextValue) {
        timer = setTimeout(toggleSaveState, 2000);
      }

      return nextValue;
    });
  }, []);
  const saveCache = Object(external_react_["useCallback"])(value => {
    localStorage.setItem(CACHE_KEY, value);
    toggleSaveState();
  }, [toggleSaveState]);
  Object(external_react_["useEffect"])(() => {
    const html = makeHtml(innerValue);
    const tocs = makeToc(html);
    setTocs(tocs);
    onChange({
      value: innerValue,
      html,
      toc: JSON.stringify(tocs)
    });
  }, [innerValue, onChange]);
  Object(external_react_["useEffect"])(() => {
    const listener = evt => {
      const handle = value => {
        setInnerValue(value);
        editorRef.current && editorRef.current.setValue(value);
      };

      if (evt.data.id !== 'editor-mounted') {
        return;
      }

      const cache = localStorage.getItem(CACHE_KEY);

      if (cache && defaultValue === DEFAULT_MARKDOWN) {
        modal_confirm().then(() => handle(cache)).catch(() => handle(defaultValue));
      } else {
        handle(defaultValue);
      }

      window.removeEventListener('message', listener);
    };

    window.addEventListener('message', listener);
    return () => {
      window.removeEventListener('message', listener);
    };
  }, [defaultValue]);
  Object(external_react_["useEffect"])(() => {
    return () => {
      clearTimeout(timer);
    };
  }, []);
  Object(external_react_["useEffect"])(() => {
    if (!editorRef.current || !editorContainerRef.current) {
      return;
    }

    if (!two && mode === 'preview') {
      return;
    }

    editorRef.current.layout(editorContainerRef.current.getBoundingClientRect());
  }, [two, mode, tocVisible]);
  return Editor_jsx("div", {
    className: external_classnames_default()(Editor_index_module_default.a.wrapper)
  }, Editor_jsx("header", null, Editor_jsx("div", null, toolbar.map(tool => {
    return Editor_jsx("span", {
      key: tool.label,
      className: Editor_index_module_default.a.toolWrap,
      onClick: tool.getAction(editorRef.current)
    }, Editor_jsx(tooltip_default.a, {
      title: tool.label
    }, Editor_jsx(tool.content, {
      editor: editorRef.current
    })));
  }), Editor_jsx("span", {
    style: {
      opacity: saveState ? 1 : 0
    }
  }, "\u5DF2\u4FDD\u5B58\u5230\u672C\u5730")), Editor_jsx("div", null, Editor_jsx("span", {
    className: Editor_index_module_default.a.modeWrapper
  }, Editor_jsx("span", null, "\u5F53\u524D\u6A21\u5F0F\uFF1A"), Editor_jsx("span", {
    onClick: toggleMode
  }, mode === 'preview' ? '预览' : '编辑')), Editor_jsx(divider_default.a, {
    type: "vertical"
  }), Editor_jsx("span", {
    onClick: toggleTwo
  }, two ? '退出' : '', "\u4E24\u680F\u663E\u793A"), Editor_jsx(divider_default.a, {
    type: "vertical"
  }), Editor_jsx("span", {
    onClick: toggleTocVisible
  }, Editor_jsx("span", null, "\u5927\u7EB2")))), Editor_jsx("main", null, Editor_jsx("div", {
    ref: editorContainerRef,
    style: {
      width: two ? halfWidth : mode === 'preview' ? 0 : fullWidth,
      overflow: 'hidden'
    }
  }, Editor_jsx(MonacoEditor, {
    ref: editorRef,
    defaultValue: defaultValue,
    onChange: setInnerValue,
    onSave: saveCache
  })), Editor_jsx("div", {
    style: {
      width: two ? halfWidth : mode === 'edit' ? 0 : fullWidth
    }
  }, Editor_jsx(Preview, {
    value: innerValue
  })), Editor_jsx("div", {
    style: {
      width: tocVisible ? '20%' : 0
    }
  }, Editor_jsx("div", {
    className: Editor_index_module_default.a.tocWrapper
  }, Editor_jsx("header", null, Editor_jsx("span", null, "\u5927\u7EB2"), Editor_jsx("span", {
    onClick: toggleTocVisible
  }, Editor_jsx(icons_["CloseOutlined"], null))), Editor_jsx("main", null, Editor_jsx(Toc, {
    tocs: tocs
  }))))));
};

/***/ }),

/***/ "gR/H":
/***/ (function(module, exports) {

module.exports = require("antd/lib/pagination");

/***/ }),

/***/ "hYNf":
/***/ (function(module, exports) {

module.exports = {
	"wrapper": "Jk_7c4uLfV5bARw2xi-sN"
};

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

/***/ "hr7U":
/***/ (function(module, exports) {



/***/ }),

/***/ "iatk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagProvider; });
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pUN5");

class TagProvider {
  /**
   * 获取所有标签
   */
  static async getTags() {
    return _http__WEBPACK_IMPORTED_MODULE_0__[/* httpProvider */ "a"].get('/tag');
  }
  /**
   * 获取指定标签下文章
   * @param id
   */


  static async getTagWithArticles(id, needFilter = false) {
    return _http__WEBPACK_IMPORTED_MODULE_0__[/* httpProvider */ "a"].get(`/tag/${id}/article`, needFilter ? {
      params: {
        status: 'publish'
      }
    } : {});
  }
  /**
   * 添加标签
   * @param data
   */


  static async addTag(data) {
    return _http__WEBPACK_IMPORTED_MODULE_0__[/* httpProvider */ "a"].post('/tag', data);
  }
  /**
   * 更新标签
   * @param id
   * @param data
   */


  static async updateTag(id, data) {
    return _http__WEBPACK_IMPORTED_MODULE_0__[/* httpProvider */ "a"].patch(`/tag/${id}`, data);
  }
  /**
   * 删除标签
   * @param id
   */


  static async deleteTag(id) {
    return _http__WEBPACK_IMPORTED_MODULE_0__[/* httpProvider */ "a"].delete(`/tag/${id}`);
  }

}

/***/ }),

/***/ "lSEL":
/***/ (function(module, exports) {



/***/ }),

/***/ "mN36":
/***/ (function(module, exports) {



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

/***/ "p9i8":
/***/ (function(module, exports) {

module.exports = require("antd/lib/page-header");

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

/***/ "vsU0":
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "wvHv":
/***/ (function(module, exports) {

module.exports = require("antd/lib/drawer");

/***/ }),

/***/ "xKsY":
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

/***/ }),

/***/ "xZtu":
/***/ (function(module, exports) {

module.exports = require("antd/lib/divider");

/***/ }),

/***/ "z6+L":
/***/ (function(module, exports) {

module.exports = require("antd/lib/tooltip");

/***/ }),

/***/ "z6IJ":
/***/ (function(module, exports) {

module.exports = {
	"wrapper": "_2zMNm79JZFNvsYks6hybn-",
	"header": "_1syxLD385DKbg2c7J0wN5D",
	"main": "Vahsw5dqmN0bzB7VryKqz"
};

/***/ }),

/***/ "zIXN":
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "zmYW":
/***/ (function(module, exports) {



/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });