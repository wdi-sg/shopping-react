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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/component/Products.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/component/Products.jsx":
/*!*****************************************************!*\
  !*** ./app/javascript/packs/component/Products.jsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/yannieyeung/code/SEI22-github-repo/shopping-react/app/javascript/packs/component/Products.jsx: Identifier 'data' has already been declared (23:13)\n\n  21 |     axios\n  22 |       .post(url, { search: newInput })\n> 23 |       .then((data) => {\n     |              ^\n  24 |         debugger;\n  25 |         const data = response.data;\n  26 |         console.log(data);\n    at Object._raise (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:746:17)\n    at Object.raiseWithData (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:739:17)\n    at Object.raise (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:733:17)\n    at ScopeHandler.checkRedeclarationInScope (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:4793:12)\n    at ScopeHandler.declareName (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:4773:14)\n    at Object.checkLVal (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:9261:22)\n    at Object.checkParams (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:10742:12)\n    at Object.<anonymous> (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:10717:14)\n    at Object.parseBlockOrModuleBlockBody (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:11757:23)\n    at Object.parseBlockBody (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:11717:10)\n    at Object.parseBlock (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:11701:10)\n    at Object.parseFunctionBody (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:10708:24)\n    at Object.parseArrowExpression (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:10677:10)\n    at Object.parseParenAndDistinguishExpression (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:10295:12)\n    at Object.parseExprAtom (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:10007:21)\n    at Object.parseExprAtom (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:4638:20)\n    at Object.parseExprSubscripts (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:9656:23)\n    at Object.parseMaybeUnary (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:9636:21)\n    at Object.parseExprOps (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:9506:23)\n    at Object.parseMaybeConditional (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:9479:23)\n    at Object.parseMaybeAssign (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:9434:21)\n    at Object.parseExprListItem (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:10792:18)\n    at Object.parseCallExpressionArguments (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:9850:22)\n    at Object.parseSubscript (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:9750:31)\n    at Object.parseSubscripts (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:9679:19)\n    at Object.parseExprSubscripts (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:9662:17)\n    at Object.parseMaybeUnary (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:9636:21)\n    at Object.parseExprOps (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:9506:23)\n    at Object.parseMaybeConditional (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:9479:23)\n    at Object.parseMaybeAssign (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:9434:21)");

/***/ })

/******/ });
//# sourceMappingURL=Products-b3b3b7b742658f09a7c3.js.map