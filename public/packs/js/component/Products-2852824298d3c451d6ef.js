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

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/yannieyeung/code/SEI22-github-repo/shopping-react/app/javascript/packs/component/Products.jsx: Unexpected keyword 'var' (79:4)\n\n  77 |       console.log(event.target.name);\n  78 |       var \n> 79 |     var newQuantity = event.target.value;\n     |     ^\n  80 |     setProduct({ quantity: newQuantity });\n  81 |   }\n  82 | \n    at Object._raise (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:746:17)\n    at Object.raiseWithData (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:739:17)\n    at Object.raise (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:733:17)\n    at Object.checkReservedWord (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:10859:12)\n    at Object.parseIdentifierName (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:10829:12)\n    at Object.parseIdentifier (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:10800:23)\n    at Object.parseBindingAtom (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:9171:17)\n    at Object.parseVarId (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:11836:20)\n    at Object.parseVar (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:11812:12)\n    at Object.parseVarStatement (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:11624:10)\n    at Object.parseStatementContent (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:11223:21)\n    at Object.parseStatement (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:11156:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:11731:25)\n    at Object.parseBlockBody (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:11717:10)\n    at Object.parseBlock (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:11701:10)\n    at Object.parseFunctionBody (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:10708:24)\n    at Object.parseFunctionBodyAndFinish (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:10691:10)\n    at /Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:11871:12\n    at Object.withTopicForbiddingContext (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:11031:14)\n    at Object.parseFunction (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:11870:10)\n    at Object.parseFunctionStatement (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:11502:17)\n    at Object.parseStatementContent (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:11194:21)\n    at Object.parseStatement (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:11156:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:11731:25)\n    at Object.parseBlockBody (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:11717:10)\n    at Object.parseBlock (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:11701:10)\n    at Object.parseFunctionBody (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:10708:24)\n    at Object.parseFunctionBodyAndFinish (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:10691:10)\n    at /Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:11871:12\n    at Object.withTopicForbiddingContext (/Users/yannieyeung/code/SEI22-github-repo/shopping-react/node_modules/@babel/parser/lib/index.js:11031:14)");

/***/ })

/******/ });
//# sourceMappingURL=Products-2852824298d3c451d6ef.js.map