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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/hello_react.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/hello_react.jsx":
/*!**********************************************!*\
  !*** ./app/javascript/packs/hello_react.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/bobby/floobits/floobits_demo/modules/shopping-react/app/javascript/packs/hello_react.jsx: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>? (12:2)\n\n  10 | const App = props => (\n  11 |   <div>hello react</div>\n> 12 |   <Search />\n     |   ^\n  13 | )\n  14 | \n  15 | App.defaultProps = {\n    at Object.raise (/home/bobby/floobits/floobits_demo/modules/shopping-react/node_modules/@babel/parser/lib/index.js:6975:17)\n    at Object.jsxParseElementAt (/home/bobby/floobits/floobits_demo/modules/shopping-react/node_modules/@babel/parser/lib/index.js:4075:18)\n    at Object.jsxParseElement (/home/bobby/floobits/floobits_demo/modules/shopping-react/node_modules/@babel/parser/lib/index.js:4085:17)\n    at Object.parseExprAtom (/home/bobby/floobits/floobits_demo/modules/shopping-react/node_modules/@babel/parser/lib/index.js:4092:19)\n    at Object.parseExprSubscripts (/home/bobby/floobits/floobits_demo/modules/shopping-react/node_modules/@babel/parser/lib/index.js:9210:23)\n    at Object.parseMaybeUnary (/home/bobby/floobits/floobits_demo/modules/shopping-react/node_modules/@babel/parser/lib/index.js:9190:21)\n    at Object.parseExprOps (/home/bobby/floobits/floobits_demo/modules/shopping-react/node_modules/@babel/parser/lib/index.js:9056:23)\n    at Object.parseMaybeConditional (/home/bobby/floobits/floobits_demo/modules/shopping-react/node_modules/@babel/parser/lib/index.js:9029:23)\n    at Object.parseMaybeAssign (/home/bobby/floobits/floobits_demo/modules/shopping-react/node_modules/@babel/parser/lib/index.js:8975:21)\n    at Object.parseParenAndDistinguishExpression (/home/bobby/floobits/floobits_demo/modules/shopping-react/node_modules/@babel/parser/lib/index.js:9765:28)\n    at Object.parseExprAtom (/home/bobby/floobits/floobits_demo/modules/shopping-react/node_modules/@babel/parser/lib/index.js:9548:21)\n    at Object.parseExprAtom (/home/bobby/floobits/floobits_demo/modules/shopping-react/node_modules/@babel/parser/lib/index.js:4097:20)\n    at Object.parseExprSubscripts (/home/bobby/floobits/floobits_demo/modules/shopping-react/node_modules/@babel/parser/lib/index.js:9210:23)\n    at Object.parseMaybeUnary (/home/bobby/floobits/floobits_demo/modules/shopping-react/node_modules/@babel/parser/lib/index.js:9190:21)\n    at Object.parseExprOps (/home/bobby/floobits/floobits_demo/modules/shopping-react/node_modules/@babel/parser/lib/index.js:9056:23)\n    at Object.parseMaybeConditional (/home/bobby/floobits/floobits_demo/modules/shopping-react/node_modules/@babel/parser/lib/index.js:9029:23)\n    at Object.parseMaybeAssign (/home/bobby/floobits/floobits_demo/modules/shopping-react/node_modules/@babel/parser/lib/index.js:8975:21)\n    at Object.parseFunctionBody (/home/bobby/floobits/floobits_demo/modules/shopping-react/node_modules/@babel/parser/lib/index.js:10204:24)\n    at Object.parseArrowExpression (/home/bobby/floobits/floobits_demo/modules/shopping-react/node_modules/@babel/parser/lib/index.js:10163:10)\n    at Object.parseExprAtom (/home/bobby/floobits/floobits_demo/modules/shopping-react/node_modules/@babel/parser/lib/index.js:9501:18)\n    at Object.parseExprAtom (/home/bobby/floobits/floobits_demo/modules/shopping-react/node_modules/@babel/parser/lib/index.js:4097:20)\n    at Object.parseExprSubscripts (/home/bobby/floobits/floobits_demo/modules/shopping-react/node_modules/@babel/parser/lib/index.js:9210:23)\n    at Object.parseMaybeUnary (/home/bobby/floobits/floobits_demo/modules/shopping-react/node_modules/@babel/parser/lib/index.js:9190:21)\n    at Object.parseExprOps (/home/bobby/floobits/floobits_demo/modules/shopping-react/node_modules/@babel/parser/lib/index.js:9056:23)\n    at Object.parseMaybeConditional (/home/bobby/floobits/floobits_demo/modules/shopping-react/node_modules/@babel/parser/lib/index.js:9029:23)\n    at Object.parseMaybeAssign (/home/bobby/floobits/floobits_demo/modules/shopping-react/node_modules/@babel/parser/lib/index.js:8975:21)\n    at Object.parseVar (/home/bobby/floobits/floobits_demo/modules/shopping-react/node_modules/@babel/parser/lib/index.js:11307:26)\n    at Object.parseVarStatement (/home/bobby/floobits/floobits_demo/modules/shopping-react/node_modules/@babel/parser/lib/index.js:11126:10)\n    at Object.parseStatementContent (/home/bobby/floobits/floobits_demo/modules/shopping-react/node_modules/@babel/parser/lib/index.js:10723:21)\n    at Object.parseStatement (/home/bobby/floobits/floobits_demo/modules/shopping-react/node_modules/@babel/parser/lib/index.js:10656:17)");

/***/ })

/******/ });
//# sourceMappingURL=hello_react-05023647269da9be153e.js.map