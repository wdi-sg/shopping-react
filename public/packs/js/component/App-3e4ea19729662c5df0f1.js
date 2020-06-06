/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/component/App.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/component/App.jsx":
/*!************************************************!*\
  !*** ./app/javascript/packs/component/App.jsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/yannieyeung/code/SEI22-github-repo/shopping-react/app/javascript/packs/component/App.jsx: Unexpected token, expected \",\" (5:49)\n\n  3 | import axios from \"axios\";\n  4 | \n> 5 | const csrfToken = document.querySelector(\"[name=\"csrf - token\"]\").content\n    |                                                  ^\n  6 | axios.defaults.headers.common[\"X-CSRF-TOKEN\"] = csrfToken \n  7 | \n  8 | function App() {\n    at Object._raise (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:746:17)\n    at Object.raiseWithData (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:739:17)\n    at Object.raise (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:733:17)\n    at Object.unexpected (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:8807:16)\n    at Object.expect (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:8793:28)\n    at Object.parseCallExpressionArguments (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:9830:14)\n    at Object.parseSubscript (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:9750:31)\n    at Object.parseSubscripts (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:9679:19)\n    at Object.parseExprSubscripts (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:9662:17)\n    at Object.parseMaybeUnary (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:9636:21)\n    at Object.parseExprOps (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:9506:23)\n    at Object.parseMaybeConditional (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:9479:23)\n    at Object.parseMaybeAssign (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:9434:21)\n    at Object.parseVar (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:11815:26)\n    at Object.parseVarStatement (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:11624:10)\n    at Object.parseStatementContent (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:11223:21)\n    at Object.parseStatement (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:11156:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:11731:25)\n    at Object.parseBlockBody (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:11717:10)\n    at Object.parseTopLevel (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:11087:10)\n    at Object.parse (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:12768:10)\n    at parse (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:12821:38)\n    at parser (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/core/lib/parser/index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/core/lib/transformation/normalize-file.js:93:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/core/lib/transformation/index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/core/lib/transform.js:27:41)\n    at transform.next (<anonymous>)");

/***/ })

/******/ });
//# sourceMappingURL=App-3e4ea19729662c5df0f1.js.map