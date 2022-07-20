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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("D0cd");


/***/ }),

/***/ "3PsY":
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),

/***/ "3X/a":
/***/ (function(module, exports) {

module.exports = require("mime-types");

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
  static async getCategory(params) {
    return _http__WEBPACK_IMPORTED_MODULE_0__[/* httpProvider */ "a"].get('/category', {
      params
    });
  }
  /**
   * 添加标签
   * @param data
   */


  static async add(data) {
    return _http__WEBPACK_IMPORTED_MODULE_0__[/* httpProvider */ "a"].post('/category', data);
  }
  /**
   * 获取分类
   * @param id
   */


  static async getCategoryById(id) {
    return _http__WEBPACK_IMPORTED_MODULE_0__[/* httpProvider */ "a"].get(`/category/${id}`);
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

/***/ "D0cd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/rss/index.js


const mime = __webpack_require__("3X/a");

const xml = __webpack_require__("JBIC");

function ifTruePush(bool, array, data) {
  if (bool) {
    array.push(data);
  }
}

function ifTruePushArray(bool, array, dataArray) {
  if (!bool) {
    return;
  }

  dataArray.forEach(function (item) {
    ifTruePush(item, array, item);
  });
}

function getSize() {
  return 0;
}

function generateXML(data) {
  const channel = [];
  channel.push({
    title: {
      _cdata: data.title
    }
  });
  channel.push({
    description: {
      _cdata: data.description || data.title
    }
  });
  channel.push({
    link: data.site_url || 'http://github.com/dylang/node-rss'
  }); // image_url set?

  if (data.image_url) {
    channel.push({
      image: [{
        url: data.image_url
      }, {
        title: data.title
      }, {
        link: data.site_url
      }]
    });
  }

  channel.push({
    generator: data.generator
  });
  channel.push({
    lastBuildDate: new Date().toUTCString()
  });
  ifTruePush(data.feed_url, channel, {
    'atom:link': {
      _attr: {
        href: data.feed_url,
        rel: 'self',
        type: 'application/rss+xml'
      }
    }
  });
  ifTruePush(data.author, channel, {
    author: {
      _cdata: data.author
    }
  });
  ifTruePush(data.pubDate, channel, {
    pubDate: new Date(data.pubDate).toGMTString()
  });
  ifTruePush(data.copyright, channel, {
    copyright: {
      _cdata: data.copyright
    }
  });
  ifTruePush(data.language, channel, {
    language: {
      _cdata: data.language
    }
  });
  ifTruePush(data.managingEditor, channel, {
    managingEditor: {
      _cdata: data.managingEditor
    }
  });
  ifTruePush(data.webMaster, channel, {
    webMaster: {
      _cdata: data.webMaster
    }
  });
  ifTruePush(data.docs, channel, {
    docs: data.docs
  });
  ifTruePush(data.ttl, channel, {
    ttl: data.ttl
  });
  ifTruePush(data.hub, channel, {
    'atom:link': {
      _attr: {
        href: data.hub,
        rel: 'hub'
      }
    }
  });

  if (data.categories) {
    data.categories.forEach(function (category) {
      ifTruePush(category, channel, {
        category: {
          _cdata: category
        }
      });
    });
  }

  ifTruePushArray(data.custom_elements, channel, data.custom_elements);
  data.items.forEach(function (item) {
    const item_values = [{
      title: {
        _cdata: item.title
      }
    }];
    ifTruePush(item.description, item_values, {
      description: {
        _cdata: item.description
      }
    });
    ifTruePush(item.url, item_values, {
      link: item.url
    });
    ifTruePush(item.link || item.guid || item.title, item_values, {
      guid: [{
        _attr: {
          isPermaLink: !item.guid && !!item.url
        }
      }, item.guid || item.url || item.title]
    });
    item.categories.forEach(function (category) {
      ifTruePush(category, item_values, {
        category: {
          _cdata: category
        }
      });
    });
    ifTruePush(item.author || data.author, item_values, {
      'dc:creator': {
        _cdata: item.author || data.author
      }
    });
    ifTruePush(item.date, item_values, {
      pubDate: new Date(item.date).toGMTString()
    }); // Set GeoRSS to true if lat and long are set

    data.geoRSS = data.geoRSS || item.lat && item.long;
    ifTruePush(item.lat, item_values, {
      'geo:lat': item.lat
    });
    ifTruePush(item.long, item_values, {
      'geo:long': item.long
    });

    if (item.enclosure && item.enclosure.url) {
      if (item.enclosure.file) {
        item_values.push({
          enclosure: {
            _attr: {
              url: item.enclosure.url,
              length: item.enclosure.size || getSize(item.enclosure.file),
              type: item.enclosure.type || mime.lookup(item.enclosure.file)
            }
          }
        });
      } else {
        item_values.push({
          enclosure: {
            _attr: {
              url: item.enclosure.url,
              length: item.enclosure.size || 0,
              type: item.enclosure.type || mime.lookup(item.enclosure.url)
            }
          }
        });
      }
    }

    ifTruePushArray(item.custom_elements, item_values, item.custom_elements);
    channel.push({
      item: item_values
    });
  }); // set up the attributes for the RSS feed.

  const _attr = {
    'xmlns:dc': 'http://purl.org/dc/elements/1.1/',
    'xmlns:content': 'http://purl.org/rss/1.0/modules/content/',
    'xmlns:atom': 'http://www.w3.org/2005/Atom',
    'version': '2.0'
  };
  Object.keys(data.custom_namespaces).forEach(function (name) {
    _attr['xmlns:' + name] = data.custom_namespaces[name];
  }); // only add namespace if GeoRSS is true

  if (data.geoRSS) {
    _attr['xmlns:geo'] = 'http://www.w3.org/2003/01/geo/wgs84_pos#';
  }

  return {
    rss: [{
      _attr: _attr
    }, {
      channel: channel
    }]
  };
}

function RSS(options, items) {
  options = options || {};
  this.title = options.title || 'Untitled RSS Feed';
  this.description = options.description || '';
  this.generator = options.generator || 'RSS for Node';
  this.feed_url = options.feed_url;
  this.site_url = options.site_url;
  this.image_url = options.image_url;
  this.author = options.author;
  this.categories = options.categories;
  this.pubDate = options.pubDate;
  this.hub = options.hub;
  this.docs = options.docs;
  this.copyright = options.copyright;
  this.language = options.language;
  this.managingEditor = options.managingEditor;
  this.webMaster = options.webMaster;
  this.ttl = options.ttl; // option to return feed as GeoRSS is set automatically if feed.lat/long is used

  this.geoRSS = options.geoRSS || false;
  this.custom_namespaces = options.custom_namespaces || {};
  this.custom_elements = options.custom_elements || [];
  this.items = items || [];

  this.item = function (options) {
    options = options || {};
    const item = {
      title: options.title || 'No title',
      description: options.description || '',
      url: options.url,
      guid: options.guid,
      categories: options.categories || [],
      author: options.author,
      date: options.date,
      lat: options.lat,
      long: options.long,
      enclosure: options.enclosure || false,
      custom_elements: options.custom_elements || []
    };
    this.items.push(item);
    return this;
  };

  this.xml = function (indent) {
    return '<?xml version="1.0" encoding="UTF-8"?>' + xml(generateXML(this), indent);
  };
}

/* harmony default export */ var rss = (RSS);
// EXTERNAL MODULE: ./src/providers/article.ts
var article = __webpack_require__("hfvm");

// EXTERNAL MODULE: ./src/providers/setting.ts
var providers_setting = __webpack_require__("HSfi");

// EXTERNAL MODULE: ./src/providers/category.ts
var category = __webpack_require__("4Jgv");

// CONCATENATED MODULE: ./pages/rss/index.tsx





const url = __webpack_require__("bzos");

const Rss = () => {
  return null;
}; // 服务端预取数据


Rss.getInitialProps = async ctx => {
  const {
    res
  } = ctx;
  res.setHeader('Content-Type', 'text/xml');
  const [[articles], setting, categories] = await Promise.all([article["a" /* ArticleProvider */].getArticles({
    page: 1,
    pageSize: 99999,
    status: 'publish'
  }), providers_setting["a" /* SettingProvider */].getSetting(), category["a" /* CategoryProvider */].getCategory({
    articleStatus: 'publish'
  })]);
  const feed = new rss({
    title: setting.systemTitle,
    description: setting.seoDesc,
    feed_url: url.resolve(setting.systemUrl, 'rss'),
    site_url: setting.systemUrl,
    author: 'https://github.com/fantasticit',
    categories: categories.map(c => c.label)
  }, null);
  articles.forEach(article => {
    feed.item({
      title: article.title,
      description: article.html || article.content,
      url: url.resolve(setting.systemUrl, 'article/' + article.id),
      date: article.publishAt,
      categories: [(article.category || {}).label]
    });
  }); // @ts-ignore

  res.write(feed.xml());
  res.end();
};

/* harmony default export */ var pages_rss = __webpack_exports__["default"] = (Rss);

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

/***/ "JBIC":
/***/ (function(module, exports) {

module.exports = require("xml");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

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

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });