/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./PCFDownload/index.ts":
/*!******************************!*\
  !*** ./PCFDownload/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PCFDownload: () => (/* binding */ PCFDownload)\n/* harmony export */ });\nclass PCFDownload {\n  /**\r\n   * Empty constructor.\r\n   */\n  constructor() {}\n  /**\r\n   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.\r\n   * Data-set values are not initialized here, use updateView.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.\r\n   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.\r\n   * @param state A piece of data that persists in\r\n   *  one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.\r\n   * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.\r\n   */\n  initAnchor(context, notifyOutputChanged, state, container) {}\n  initButton(context, notifyOutputChanged, state, container) {\n    this._btnDownloadClick = () => {\n      var contenutoFile = context.parameters.pcfContentFile.raw;\n      var nomeFile = context.parameters.pcfFileName.raw;\n      if (contenutoFile != null) {\n        this.downloadBase64File(String(contenutoFile), String(nomeFile));\n      }\n    };\n    var AnchorLink = document.createElement(\"a\");\n    this._LinkDownload = AnchorLink;\n    var buttonElement = document.createElement(\"button\");\n    buttonElement.textContent = \"Download\";\n    buttonElement.id = \"bottonepcfperdownloadspecifico\";\n    buttonElement.disabled = context.mode.isControlDisabled;\n    buttonElement.style.backgroundColor = \"#ffffff\";\n    buttonElement.style.borderColor = \"#ffffff\";\n    buttonElement.style.fontFamily = \"\\\"Open Sans\\\", sans-serif\";\n    buttonElement.style.fontSize = \"13pt\";\n    buttonElement.style.fontWeight = \"600\";\n    buttonElement.style.textAlign = \"right\";\n    buttonElement.style.color = \"#3860b2\";\n    buttonElement.style.border = \"0px solid #fff\";\n    buttonElement.addEventListener(\"click\", this._btnDownloadClick);\n    this._container.appendChild(buttonElement);\n  }\n  init(context, notifyOutputChanged, state, container) {\n    this._downloadbutton = false;\n    //        this._container2 = null;\n    this._container = container;\n    this._notifyOutputChanged = notifyOutputChanged;\n    if (this._downloadbutton) this.initButton(context, notifyOutputChanged, state, container);\n    if (!this._downloadbutton) this.initAnchor(context, notifyOutputChanged, state, container);\n  }\n  updateView(context) {\n    if (this._downloadbutton) this.updateViewDownloadButton(context);\n    if (!this._downloadbutton) this.updateViewAnchor(context);\n  }\n  updateViewAnchor(context) {\n    var _a, _b;\n    if (context == null) return;\n    console.log('Update View Anchor DEBUG --- --- -');\n    console.log(context.parameters.pcfFileName.raw);\n    console.log(context.parameters.pcfContentFile.raw);\n    console.log(context.parameters.download.raw);\n    console.log('Update View Anchor DEBUG --- --- -');\n    if (context.updatedProperties == null) return;\n    if (context.parameters == null) return;\n    if (context.parameters.pcfFileName == null) return;\n    if (context.parameters.pcfContentFile == null) return;\n    if (context.parameters.pcfFileName.raw == null) return;\n    if (context.parameters.pcfContentFile.raw == null) return;\n    if (context.parameters.pcfFileName.error) return;\n    if (context.parameters.pcfContentFile.error) return;\n    if (context.parameters.download.error) return;\n    if (context.parameters.download.raw) {\n      if (context.parameters.pcfFileName.raw != '') {\n        console.log(context.parameters.download.raw);\n        var mimetype = 'application/octet-stream';\n        var params = context.parameters;\n        if (!((_a = params.download) === null || _a === void 0 ? void 0 : _a.raw)) return;\n        var a = document.createElement('a');\n        a.href = ((_b = context.parameters.pcfContentFile.raw) === null || _b === void 0 ? void 0 : _b.startsWith('data:')) ? context.parameters.pcfContentFile.raw : \"data:\".concat(mimetype, \";base64,\").concat(context.parameters.pcfContentFile.raw);\n        a.download = params.pcfFileName.raw || '';\n        document.body.appendChild(a);\n        a.click();\n        document.body.removeChild(a);\n        this._notifyOutputChanged();\n      }\n    }\n  }\n  /**\r\n   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions\r\n   */\n  updateViewDownloadButton(context) {\n    console.log('updateView ' + context.parameters.pcfDownload.raw);\n    console.log(context.parameters.pcfDownload.raw);\n    console.log('------------------------------');\n    if (context == null) return;\n    if (context.updatedProperties == null) return;\n    if (context.parameters == null) return;\n    if (context.parameters.pcfFileName == null) return;\n    if (context.parameters.pcfContentFile == null) return;\n    if (context.parameters.pcfFileName.raw == null) return;\n    if (context.parameters.pcfContentFile.raw == null) return;\n    if (context.parameters.pcfDownload == null) return;\n    if (context.parameters.pcfDownload.raw == null) return;\n    if (context.parameters.pcfFileName.error) return;\n    if (context.parameters.pcfContentFile.error) return;\n    if (context.parameters.pcfDownload.error) return;\n    if (context.parameters.pcfDownload.raw == '') return;\n    if (context.parameters.pcfDownload.raw != 'READYTOGO' && context.parameters.pcfDownload.raw != 'DOWNLOADFILEOK') {\n      this._pcfdownloadparameter = 'WAIT';\n    }\n    if (context.parameters.pcfDownload.raw == 'READYTOGO') {\n      this._pcfdownloadparameter = 'READYTOGO';\n    }\n    if (context.parameters.pcfDownload.raw == 'DOWNLOADFILEOK' && this._pcfdownloadparameter == 'READYTOGO') {\n      this._pcfdownloadparameter = 'DOWNLOADINCORSO';\n      this._btnDownloadClick();\n      this._pcfdownloadparameter = 'WAIT';\n      this._notifyOutputChanged();\n    }\n    return;\n  }\n  /**\r\n   * It is called by the framework prior to a control receiving new data.\r\n   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as \"bound\" or \"output\"\r\n   */\n  getOutputs() {\n    return {\n      pcfDownload: this._pcfdownloadparameter,\n      download: false,\n      pcfFileName: ''\n    };\n  }\n  /**\r\n   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.\r\n   * i.e. cancelling any pending remote calls, removing listeners, etc.\r\n   */\n  destroy() {\n    // Add code to cleanup control if necessary\n  }\n  downloadBase64File(contenutoBase64, nomefile) {\n    var link = document.getElementById('downloadLink');\n    var byteCharacters = atob(contenutoBase64);\n    var byteNumbers = new Array(byteCharacters.length);\n    for (var i = 0; i < byteCharacters.length; i++) {\n      byteNumbers[i] = byteCharacters.charCodeAt(i);\n    }\n    var byteArray = new Uint8Array(byteNumbers);\n    var blob = new Blob([byteArray], {\n      type: 'application/octet-stream'\n    });\n    var url = URL.createObjectURL(blob);\n    this._LinkDownload.href = url;\n    this._LinkDownload.download = nomefile;\n    this._LinkDownload.click();\n    URL.revokeObjectURL(url);\n  }\n}\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./PCFDownload/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./PCFDownload/index.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('PCFDownload.PCFDownload', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.PCFDownload);
} else {
	var PCFDownload = PCFDownload || {};
	PCFDownload.PCFDownload = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.PCFDownload;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}