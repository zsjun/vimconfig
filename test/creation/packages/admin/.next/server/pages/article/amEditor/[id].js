module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("xEBc");


/***/ }),

/***/ "1/37":
/***/ (function(module, exports) {



/***/ }),

/***/ "3PsY":
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

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

/***/ "BkMR":
/***/ (function(module, exports) {

module.exports = {
	"wrapper": "_38PLOQh-zw9cQlK5HN1R0q",
	"header": "_2IGIbgFAV8hflczoBMa1Wp",
	"main": "m4LN_dckPy9tt8EewM3Hw"
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

/***/ "TfTO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/upload");

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

/***/ "s7gp":
/***/ (function(module, exports) {

module.exports = {
	"formItem": "_1hU3v0qX8YLrsSjgQcAOzP",
	"cover": "_13rP2zWZyhJsRJBdROVahI",
	"preview": "_2n27HhrJVGBC_3aJN8O1JN"
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

/***/ "xEBc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _providers_article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("hfvm");
/* harmony import */ var _components_AmArticleEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xdNc");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Editor = ({
  id,
  article
}) => {
  return __jsx(_components_AmArticleEditor__WEBPACK_IMPORTED_MODULE_2__[/* AmArticleEditor */ "a"], {
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

/***/ "xKsY":
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

/***/ }),

/***/ "xdNc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ AmArticleEditor; });

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

// EXTERNAL MODULE: ./src/components/AmArticleEditor/ArticleSettingDrawer/index.module.scss
var index_module = __webpack_require__("s7gp");
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);

// CONCATENATED MODULE: ./src/components/AmArticleEditor/ArticleSettingDrawer/index.tsx










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
  // 支付金额
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
// EXTERNAL MODULE: ./src/components/AmArticleEditor/index.module.scss
var AmArticleEditor_index_module = __webpack_require__("BkMR");
var AmArticleEditor_index_module_default = /*#__PURE__*/__webpack_require__.n(AmArticleEditor_index_module);

// CONCATENATED MODULE: ./src/components/AmArticleEditor/index.tsx
















var AmArticleEditor_jsx = external_react_default.a.createElement;

function AmArticleEditor_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function AmArticleEditor_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { AmArticleEditor_ownKeys(Object(source), true).forEach(function (key) { AmArticleEditor_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { AmArticleEditor_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function AmArticleEditor_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 // md编辑器




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

const AmArticleEditor = ({
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
    const data = AmArticleEditor_objectSpread(AmArticleEditor_objectSpread({}, article), patch);

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
  Object(external_react_["useEffect"])(() => {
    // 监听子窗口的postMessage
    window.addEventListener('message', event => {
      console.log('event...', event);

      if (event.origin.indexOf(window.location.origin) === -1) {
        patchArticle('content')(event.data);
        patchArticle('html')(event.data);
      }
    });
  }, []);
  return AmArticleEditor_jsx("div", {
    className: AmArticleEditor_index_module_default.a.wrapper
  }, AmArticleEditor_jsx(external_react_helmet_["Helmet"], null, AmArticleEditor_jsx("title", null, id ? `编辑文章 ${article.title ? '-' + article.title : ''}` : '新建文章')), AmArticleEditor_jsx("header", {
    className: AmArticleEditor_index_module_default.a.header
  }, AmArticleEditor_jsx(page_header_default.a, {
    backIcon: AmArticleEditor_jsx(popconfirm_default.a, {
      title: "\u786E\u8BA4\u5173\u95ED\uFF1F\u5982\u679C\u6709\u5185\u5BB9\u53D8\u66F4\uFF0C\u8BF7\u5148\u4FDD\u5B58\u3002",
      onConfirm: () => router_default.a.push('/article'),
      onCancel: () => null,
      okText: "\u786E\u8BA4",
      cancelText: "\u53D6\u6D88",
      placement: "rightBottom"
    }, AmArticleEditor_jsx(button_default.a, {
      size: "small",
      icon: AmArticleEditor_jsx(icons_["CloseOutlined"], null)
    })),
    style: {
      borderBottom: '1px solid rgb(235, 237, 240)'
    },
    onBack: () => null,
    title: AmArticleEditor_jsx(input_default.a, {
      style: {
        width: 300
      },
      placeholder: "\u8BF7\u8F93\u5165\u6587\u7AE0\u6807\u9898",
      defaultValue: article.title,
      onChange: patchArticle('title')
    }),
    extra: [AmArticleEditor_jsx(button_default.a, {
      key: "publish",
      type: "primary",
      onClick: publish
    }, "\u53D1\u5E03"), AmArticleEditor_jsx(dropdown_default.a, {
      key: "more",
      overlay: AmArticleEditor_jsx(menu_default.a, null, AmArticleEditor_jsx(menu_default.a.Item, {
        key: "view",
        disabled: isCreate,
        onClick: preview
      }, "\u67E5\u770B"), AmArticleEditor_jsx(menu_default.a.Item, {
        key: "setting",
        onClick: openSetting
      }, "\u8BBE\u7F6E"), AmArticleEditor_jsx(menu_default.a.Divider, {
        key: "divide-1"
      }), AmArticleEditor_jsx(menu_default.a.Item, {
        key: "draft",
        onClick: saveDraft
      }, "\u4FDD\u5B58\u8349\u7A3F"), AmArticleEditor_jsx(menu_default.a.Divider, {
        key: "divide-2"
      }), AmArticleEditor_jsx(menu_default.a.Item, {
        key: "delete",
        disabled: isCreate,
        onClick: deleteArticle
      }, "\u5220\u9664"))
    }, AmArticleEditor_jsx(button_default.a, {
      icon: AmArticleEditor_jsx(icons_["EllipsisOutlined"], null),
      type: "link"
    }))]
  })), AmArticleEditor_jsx("main", {
    className: external_classnames_default()(AmArticleEditor_index_module_default.a.main)
  }, AmArticleEditor_jsx("iframe", {
    src: "https://jasonandjay.com/editor/static/"
  })), AmArticleEditor_jsx(ArticleSettingDrawer, {
    article: article,
    visible: settingDrawerVisible,
    onClose: toggleSettingDrawerVisible,
    onChange: saveSetting
  }));
};

/***/ }),

/***/ "z6+L":
/***/ (function(module, exports) {

module.exports = require("antd/lib/tooltip");

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