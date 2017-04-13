/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(2); // 引入样式表
	__webpack_require__(6); // 引入组件

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/._css-loader@0.14.5@css-loader/index.js!../../node_modules/._sass-loader@1.0.4@sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!../../node_modules/._css-loader@0.14.5@css-loader/index.js!../../node_modules/._sass-loader@1.0.4@sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	exports.push([module.id, "/**\r\n * Created by yikun on 16/05/04.\r\n */\nbody {\n  background: #fff; }\n\nheader {\n  text-align: center; }\n\nheader .todo-title {\n  font-weight: bold; }\n\n.text-success {\n  color: #090; }\n\n.task-done {\n  text-decoration: line-through; }\n\n.btn {\n  display: inline-block;\n  padding: 4px 12px;\n  margin-bottom: 0;\n  font-size: 14px;\n  line-height: 20px;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);\n  border-radius: 4px; }\n\n.btn-danger {\n  color: #fff;\n  background-color: #da4f49;\n  border: 1px solid #bd362f; }\n\n.btn-danger:hover {\n  color: #fff;\n  background-color: #bd362f; }\n\n.btn:focus {\n  outline: none; }\n\n.container {\n  width: 600px;\n  margin: 0 auto; }\n  .container .todo-wrap {\n    padding: 10px;\n    border: 1px solid #ddd;\n    border-radius: 5px; }\n    .container .todo-wrap .todo-header input {\n      width: 560px;\n      height: 28px;\n      font-size: 14px;\n      border: 1px solid #ccc;\n      border-radius: 4px;\n      padding: 4px 7px; }\n    .container .todo-wrap .todo-header input:focus {\n      outline: none;\n      border-color: rgba(82, 168, 236, 0.8);\n      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6); }\n    .container .todo-wrap .todo-main {\n      margin-left: 0px;\n      border: 1px solid #ddd;\n      border-radius: 2px;\n      padding: 0px; }\n      .container .todo-wrap .todo-main li {\n        list-style: none;\n        height: 36px;\n        line-height: 36px;\n        padding: 0 5px;\n        border-bottom: 1px solid #ddd; }\n        .container .todo-wrap .todo-main li label {\n          float: left;\n          cursor: pointer; }\n          .container .todo-wrap .todo-main li label input {\n            vertical-align: middle;\n            margin-right: 6px;\n            position: relative;\n            top: -1px; }\n        .container .todo-wrap .todo-main li button {\n          float: right;\n          display: none;\n          margin-top: 3px; }\n      .container .todo-wrap .todo-main li:before {\n        content: initial; }\n      .container .todo-wrap .todo-main li:last-child {\n        border-bottom: none; }\n    .container .todo-wrap .todo-empty {\n      height: 40px;\n      line-height: 40px;\n      border: 1px solid #ddd;\n      border-radius: 2px;\n      padding-left: 5px;\n      margin-top: 10px; }\n    .container .todo-wrap .todo-footer {\n      height: 40px;\n      line-height: 40px;\n      padding-left: 6px;\n      margin-top: 5px; }\n      .container .todo-wrap .todo-footer label {\n        display: inline-block;\n        margin-right: 20px;\n        cursor: pointer; }\n        .container .todo-wrap .todo-footer label input {\n          position: relative;\n          top: -1px;\n          vertical-align: middle;\n          margin-right: 5px; }\n      .container .todo-wrap .todo-footer button {\n        float: right;\n        margin-top: 5px; }\n", ""]);

/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _localDb = __webpack_require__(8);

	var _localDb2 = _interopRequireDefault(_localDb);

	var _TodoHeader = __webpack_require__(9);

	var _TodoHeader2 = _interopRequireDefault(_TodoHeader);

	var _TodoMain = __webpack_require__(10);

	var _TodoMain2 = _interopRequireDefault(_TodoMain);

	var _TodoFooter = __webpack_require__(12);

	var _TodoFooter2 = _interopRequireDefault(_TodoFooter);

	var App = (function (_React$Component) {
		_inherits(App, _React$Component);

		function App() {
			_classCallCheck(this, App);

			_get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this);
			this.db = new _localDb2['default']('ReactDemo');
			this.state = {
				todos: this.db.get('todos') || [],
				isAllChecked: false
			};
		}

		// 判断是否所有任务的状态都完成，同步底部的全选框

		_createClass(App, [{
			key: 'allChecked',
			value: function allChecked() {
				var isAllChecked = false;
				if (this.state.todos.every(function (todo) {
					return todo.isDone;
				})) {

					isAllChecked = true;
				}
				this.setState({ //改变状态，组件重绘	            
					todos: this.state.todos,
					isAllChecked: isAllChecked
				});
			}

			// 添加任务，是传递给Header组件的方法
		}, {
			key: 'addTodo',
			value: function addTodo(todoItem) {
				this.state.todos.push(todoItem);
				this.setState({
					todos: this.state.todos
				});
				this.db.set('todos', this.state.todos);
			}

			// 删除当前的任务，传递给TodoItem的方法
		}, {
			key: 'deleteTodo',
			value: function deleteTodo(index) {
				this.state.todos.splice(index, 1);
				this.setState({
					todos: this.state.todos
				});
				this.db.set('todos', this.state.todos);
			}

			// 清除已完成的任务，传递给Footer组件的方法
		}, {
			key: 'clearIsDone',
			value: function clearIsDone() {
				var todos = this.state.todos.filter(function (todo) {
					return !todo.isDone;
				});
				this.setState({
					todos: todos,
					isAllChecked: false
				});
				this.db.set('todos', todos);
			}

			// 改变任务状态，传递给TodoItem和Footer组件的方法  不一定会重绘
		}, {
			key: 'changeTodoState',
			value: function changeTodoState(index, isDone) {
				var isAllChecked = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

				if (isAllChecked) {
					this.setState({
						todos: this.state.todos.map(function (todo) {
							todo.isDone = isDone;
							return todo;
						}),
						isAllChecked: isDone
					});
				} else {
					this.state.todos[index].isDone = isDone;
					this.allChecked();
				}
				this.db.set('todos', this.state.todos);
			}
		}, {
			key: 'render',
			value: function render() {
				var info = {
					isAllChecked: this.state.isAllChecked,
					todoCount: this.state.todos.length || 0,
					todoDoneCount: (this.state.todos && this.state.todos.filter(function (todo) {
						return todo.isDone;
					})).length || 0
				};
				return _react2['default'].createElement(
					'div',
					{ className: 'todo-wrap' },
					_react2['default'].createElement(_TodoHeader2['default'], { addTodo: this.addTodo.bind(this) }),
					_react2['default'].createElement(_TodoMain2['default'], { todos: this.state.todos, deleteTodo: this.deleteTodo.bind(this), changeTodoState: this.changeTodoState.bind(this) }),
					_react2['default'].createElement(_TodoFooter2['default'], _extends({}, info, { changeTodoState: this.changeTodoState.bind(this), clearIsDone: this.clearIsDone.bind(this) }))
				);
			}
		}]);

		return App;
	})(_react2['default'].Component);

	_react2['default'].render(_react2['default'].createElement(App, null), document.getElementById('app'));

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * Created by YikaJ on 15/6/10.
	 */
	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var LocalDb = (function () {
	    function LocalDb() {
	        var localDb = arguments[0] === undefined ? 'localDb' : arguments[0];

	        _classCallCheck(this, LocalDb);

	        if (!window.localStorage) {
	            throw new Error('Not supports localStorage');
	        }
	        this.localDb = localDb;

	        if (localStorage[localDb]) {
	            this.db = JSON.parse(localStorage[localDb]);
	        } else {
	            this.db = {};
	        }
	    }

	    _createClass(LocalDb, [{
	        key: 'getDb',
	        value: function getDb() {
	            return this.db;
	        }
	    }, {
	        key: 'set',
	        value: function set(key, value) {
	            if (key) {
	                this.db[key] = value;

	                return this._saveToLocalStorage();
	            }

	            throw new Error('set参数key不能为空');
	        }
	    }, {
	        key: 'get',
	        value: function get(key) {
	            if (key) {
	                var value = this.db[key];
	                if (typeof value === 'undefined') {
	                    console.warn(key + '的值不存在');
	                }
	                return value;
	            }

	            throw new Error('get参数key不能为空');
	        }
	    }, {
	        key: 'clean',
	        value: function clean() {
	            this.db = {};
	            this._saveToLocalStorage();
	        }
	    }, {
	        key: '_saveToLocalStorage',
	        value: function _saveToLocalStorage() {
	            localStorage[this.localDb] = JSON.stringify(this.getDb());
	        }
	    }]);

	    return LocalDb;
	})();

	module.exports = LocalDb;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var TodoHeader = (function (_React$Component) {
		_inherits(TodoHeader, _React$Component);

		function TodoHeader() {
			_classCallCheck(this, TodoHeader);

			_get(Object.getPrototypeOf(TodoHeader.prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(TodoHeader, [{
			key: 'handleEvent',
			value: function handleEvent(e) {
				var value = e.target.value;
				if (e.keyCode == 13) {
					if (value == '') {
						return false;
					}
					this.props.addTodo({
						value: value,
						isDone: false
					});
					//清空输入框
					e.target.value = '';
				}
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2['default'].createElement(
					'div',
					{ className: 'todo-header' },
					_react2['default'].createElement('input', { type: 'text', onKeyUp: this.handleEvent.bind(this), placeholder: '请输入任务' })
				);
			}
		}]);

		return TodoHeader;
	})(_react2['default'].Component);

	exports['default'] = TodoHeader;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _TodoItem = __webpack_require__(11);

	var _TodoItem2 = _interopRequireDefault(_TodoItem);

	var TodoMain = (function (_React$Component) {
		_inherits(TodoMain, _React$Component);

		function TodoMain() {
			_classCallCheck(this, TodoMain);

			_get(Object.getPrototypeOf(TodoMain.prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(TodoMain, [{
			key: 'render',
			value: function render() {
				var _this = this;

				if (this.props.todos.length == 0) {
					return _react2['default'].createElement(
						'div',
						{ className: 'todo-empty' },
						'恭喜您，目前没有待办任务！'
					);
				} else {
					return _react2['default'].createElement(
						'ul',
						{ className: 'todo-main' },
						this.props.todos.map(function (todo, index) {
							return _react2['default'].createElement(_TodoItem2['default'], _extends({ index: index, text: todo.value, isDone: todo.isDone }, _this.props));
						})
					);
				}
			}
		}]);

		return TodoMain;
	})(_react2['default'].Component);

	exports['default'] = TodoMain;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var TodoItem = (function (_React$Component) {
		_inherits(TodoItem, _React$Component);

		function TodoItem() {
			_classCallCheck(this, TodoItem);

			_get(Object.getPrototypeOf(TodoItem.prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(TodoItem, [{
			key: 'handlerChange',
			value: function handlerChange() {
				this.props.isDone = !this.props.isDone;
				this.props.changeTodoState(this.props.index, this.props.isDone);
			}
		}, {
			key: 'handlerDelete',
			value: function handlerDelete() {
				this.props.deleteTodo(this.props.index);
			}

			// 鼠标移入事件
		}, {
			key: 'handlerMouseEnter',
			value: function handlerMouseEnter() {
				_react2['default'].findDOMNode(this).style.background = '#eee';
				_react2['default'].findDOMNode(this.refs.list).style.display = 'inline-block';
			}
		}, {
			key: 'handlerMouseLeave',
			value: function handlerMouseLeave() {
				_react2['default'].findDOMNode(this).style.background = '#fff';
				_react2['default'].findDOMNode(this.refs.list).style.display = 'none';
			}
		}, {
			key: 'render',
			value: function render() {
				var className = this.props.isDone ? 'task-done' : '';
				return _react2['default'].createElement(
					'li',
					{ onMouseEnter: this.handlerMouseEnter.bind(this), onMouseLeave: this.handlerMouseLeave.bind(this) },
					_react2['default'].createElement(
						'label',
						null,
						_react2['default'].createElement('input', { type: 'checkbox', checked: this.props.isDone, onChange: this.handlerChange.bind(this) }),
						_react2['default'].createElement(
							'span',
							{ className: className },
							this.props.text
						)
					),
					_react2['default'].createElement(
						'button',
						{ ref: 'list', className: 'btn btn-danger', onClick: this.handlerDelete.bind(this) },
						'删除'
					)
				);
			}
		}]);

		return TodoItem;
	})(_react2['default'].Component);

	exports['default'] = TodoItem;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var TodoFooter = (function (_React$Component) {
		_inherits(TodoFooter, _React$Component);

		function TodoFooter() {
			_classCallCheck(this, TodoFooter);

			_get(Object.getPrototypeOf(TodoFooter.prototype), "constructor", this).apply(this, arguments);
		}

		_createClass(TodoFooter, [{
			key: "handlerSelectAll",
			value: function handlerSelectAll(e) {
				var isDone = e.target.checked;
				this.props.changeTodoState(null, isDone, true);
			}
		}, {
			key: "handlerDeleteDone",
			value: function handlerDeleteDone() {
				this.props.clearIsDone();
			}
		}, {
			key: "render",
			value: function render() {
				return _react2["default"].createElement(
					"div",
					{ className: "todo-footer" },
					_react2["default"].createElement(
						"label",
						null,
						_react2["default"].createElement("input", { type: "checkbox", checked: this.props.isAllChecked, onChange: this.handlerSelectAll.bind(this) }),
						"全选"
					),
					_react2["default"].createElement(
						"span",
						null,
						_react2["default"].createElement(
							"span",
							{ className: "text-success" },
							"已完成",
							this.props.todoDoneCount
						),
						" / 全部",
						this.props.todoCount
					),
					_react2["default"].createElement(
						"button",
						{ className: "btn btn-danger", onClick: this.handlerDeleteDone.bind(this) },
						"清除已完成任务"
					)
				);
			}
		}]);

		return TodoFooter;
	})(_react2["default"].Component);

	exports["default"] = TodoFooter;
	module.exports = exports["default"];

/***/ }
/******/ ]);