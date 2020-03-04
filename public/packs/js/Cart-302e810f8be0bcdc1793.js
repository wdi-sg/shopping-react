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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/Cart.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/Cart.jsx":
/*!***************************************!*\
  !*** ./app/javascript/packs/Cart.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/joyce/wdi_sandbox/shopping-react/app/javascript/packs/Cart.jsx: Unexpected token, expected \",\" (23:69)\n\n  21 |     console.log(cartList);\n  22 | \n> 23 |     let cartPrice = this.props.cartList.map([CartList.product.price] => { function getTotal(total, num) {\n     |                                                                      ^\n  24 |         return total + Math.round(num);\n  25 |       }\n  26 |         document.getElementById(\"subtotal\").innerHTML = numbers.reduce(getTotal, 0);})\n    at Object.raise (/Users/joyce/wdi_sandbox/shopping-react/node_modules/@babel/parser/lib/index.js:6975:17)\n    at Object.unexpected (/Users/joyce/wdi_sandbox/shopping-react/node_modules/@babel/parser/lib/index.js:8368:16)\n    at Object.expect (/Users/joyce/wdi_sandbox/shopping-react/node_modules/@babel/parser/lib/index.js:8354:28)\n    at Object.parseCallExpressionArguments (/Users/joyce/wdi_sandbox/shopping-react/node_modules/@babel/parser/lib/index.js:9387:14)\n    at Object.parseSubscript (/Users/joyce/wdi_sandbox/shopping-react/node_modules/@babel/parser/lib/index.js:9315:29)\n    at Object.parseSubscripts (/Users/joyce/wdi_sandbox/shopping-react/node_modules/@babel/parser/lib/index.js:9231:19)\n    at Object.parseExprSubscripts (/Users/joyce/wdi_sandbox/shopping-react/node_modules/@babel/parser/lib/index.js:9220:17)\n    at Object.parseMaybeUnary (/Users/joyce/wdi_sandbox/shopping-react/node_modules/@babel/parser/lib/index.js:9190:21)\n    at Object.parseExprOps (/Users/joyce/wdi_sandbox/shopping-react/node_modules/@babel/parser/lib/index.js:9056:23)\n    at Object.parseMaybeConditional (/Users/joyce/wdi_sandbox/shopping-react/node_modules/@babel/parser/lib/index.js:9029:23)\n    at Object.parseMaybeAssign (/Users/joyce/wdi_sandbox/shopping-react/node_modules/@babel/parser/lib/index.js:8975:21)\n    at Object.parseVar (/Users/joyce/wdi_sandbox/shopping-react/node_modules/@babel/parser/lib/index.js:11307:26)\n    at Object.parseVarStatement (/Users/joyce/wdi_sandbox/shopping-react/node_modules/@babel/parser/lib/index.js:11126:10)\n    at Object.parseStatementContent (/Users/joyce/wdi_sandbox/shopping-react/node_modules/@babel/parser/lib/index.js:10723:21)\n    at Object.parseStatement (/Users/joyce/wdi_sandbox/shopping-react/node_modules/@babel/parser/lib/index.js:10656:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/joyce/wdi_sandbox/shopping-react/node_modules/@babel/parser/lib/index.js:11232:25)\n    at Object.parseBlockBody (/Users/joyce/wdi_sandbox/shopping-react/node_modules/@babel/parser/lib/index.js:11219:10)\n    at Object.parseBlock (/Users/joyce/wdi_sandbox/shopping-react/node_modules/@babel/parser/lib/index.js:11203:10)\n    at Object.parseFunctionBody (/Users/joyce/wdi_sandbox/shopping-react/node_modules/@babel/parser/lib/index.js:10222:24)\n    at Object.parseFunctionBodyAndFinish (/Users/joyce/wdi_sandbox/shopping-react/node_modules/@babel/parser/lib/index.js:10192:10)\n    at Object.parseMethod (/Users/joyce/wdi_sandbox/shopping-react/node_modules/@babel/parser/lib/index.js:10146:10)\n    at Object.pushClassMethod (/Users/joyce/wdi_sandbox/shopping-react/node_modules/@babel/parser/lib/index.js:11637:30)\n    at Object.parseClassMemberWithIsStatic (/Users/joyce/wdi_sandbox/shopping-react/node_modules/@babel/parser/lib/index.js:11556:12)\n    at Object.parseClassMember (/Users/joyce/wdi_sandbox/shopping-react/node_modules/@babel/parser/lib/index.js:11498:10)\n    at /Users/joyce/wdi_sandbox/shopping-react/node_modules/@babel/parser/lib/index.js:11453:14\n    at Object.withTopicForbiddingContext (/Users/joyce/wdi_sandbox/shopping-react/node_modules/@babel/parser/lib/index.js:10531:14)\n    at Object.parseClassBody (/Users/joyce/wdi_sandbox/shopping-react/node_modules/@babel/parser/lib/index.js:11430:10)\n    at Object.parseClass (/Users/joyce/wdi_sandbox/shopping-react/node_modules/@babel/parser/lib/index.js:11404:22)\n    at Object.parseExportDefaultExpression (/Users/joyce/wdi_sandbox/shopping-react/node_modules/@babel/parser/lib/index.js:11825:19)\n    at Object.parseExport (/Users/joyce/wdi_sandbox/shopping-react/node_modules/@babel/parser/lib/index.js:11738:31)");

/***/ })

/******/ });
//# sourceMappingURL=Cart-302e810f8be0bcdc1793.js.map