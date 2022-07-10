"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Carousel.js":
/*!********************************!*\
  !*** ./components/Carousel.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SlideData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SlideData */ \"./components/SlideData.js\");\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icons */ \"./components/Icons.js\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Carousel = function(param) {\n    var slides = param.slides;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), current = ref[0], setCurrent = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), touchPosition = ref1[0], setTouchPosition = ref1[1];\n    var length = slides.length;\n    if (!Array.isArray(slides) || slides.length <= 0) {\n        return null;\n    }\n    var nextSlide = function() {\n        setCurrent(current === length - 1 ? 0 : current + 1);\n    };\n    var prevSlide = function() {\n        setCurrent(current === 0 ? length - 1 : current - 1);\n    };\n    var dotControl = function(index) {\n        setCurrent(index);\n    };\n    var handleTouchStart = function(el) {\n        var touchDown = el.touches[0].clientX;\n        setTouchPosition(touchDown);\n    };\n    var handleTouchMove = function(el) {\n        var touchDown = touchPosition;\n        if (touchDown === null) {\n            return;\n        }\n        var currentTouch = el.touches[0].clientX;\n        var diff = touchDown - currentTouch;\n        if (diff > 5) {\n            nextSlide();\n        }\n        if (diff < -5) {\n            prevSlide();\n        }\n        setTouchPosition(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex z-10 relative col-start-2 md:col-start-3 col-span-10 md:col-span-8 row-start-2 row-span-4 my-16 justify-between\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"invisible md:visible z-10 my-auto cursor-pointer\",\n                onClick: prevSlide,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"text-7xl\",\n                    children: \"<\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\johna\\\\Projects\\\\personal\\\\components\\\\Carousel.js\",\n                    lineNumber: 60,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\johna\\\\Projects\\\\personal\\\\components\\\\Carousel.js\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"z-10 w-full lg:w-1/2 relative my-auto\",\n                children: _SlideData__WEBPACK_IMPORTED_MODULE_2__.SlideData.map(function(slide, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: index === current ? \"slide active\" : \"slide\",\n                        onTouchStart: handleTouchStart,\n                        onTouchMove: handleTouchMove,\n                        children: index === current && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            name: slide.icons,\n                            className: \"w-fit dark:fill-white\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\johna\\\\Projects\\\\personal\\\\components\\\\Carousel.js\",\n                            lineNumber: 72,\n                            columnNumber: 48\n                        }, _this1)\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\johna\\\\Projects\\\\personal\\\\components\\\\Carousel.js\",\n                        lineNumber: 68,\n                        columnNumber: 21\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\johna\\\\Projects\\\\personal\\\\components\\\\Carousel.js\",\n                lineNumber: 65,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"invisible md:visible z-10 my-auto cursor-pointer\",\n                onClick: nextSlide,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"text-7xl\",\n                    children: \">\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\johna\\\\Projects\\\\personal\\\\components\\\\Carousel.js\",\n                    lineNumber: 78,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\johna\\\\Projects\\\\personal\\\\components\\\\Carousel.js\",\n                lineNumber: 77,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex lg:hidden absolute justify-center bottom-0 left-0 right-0 text-7xl m-5\",\n                children: _SlideData__WEBPACK_IMPORTED_MODULE_2__.SlideData.map(function(slide, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(index === current ? \" text-neutral-700\" : \"text-black\"),\n                        onClick: function() {\n                            return dotControl(index);\n                        },\n                        children: \".\"\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\johna\\\\Projects\\\\personal\\\\components\\\\Carousel.js\",\n                        lineNumber: 85,\n                        columnNumber: 17\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\johna\\\\Projects\\\\personal\\\\components\\\\Carousel.js\",\n                lineNumber: 83,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"z-0 absolute left-0 right-0 bottom-20 md:bottom-1/2 lg:left-10 lg:right-10 opacity-10\",\n                children: _SlideData__WEBPACK_IMPORTED_MODULE_2__.SlideData.map(function(slide, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: index === current ? \"slide active\" : \"slide\",\n                        children: index === current && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            name: slide.background,\n                            className: \"w-fit fill-black dark:fill-slate-300\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\johna\\\\Projects\\\\personal\\\\components\\\\Carousel.js\",\n                            lineNumber: 97,\n                            columnNumber: 48\n                        }, _this1)\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\johna\\\\Projects\\\\personal\\\\components\\\\Carousel.js\",\n                        lineNumber: 95,\n                        columnNumber: 21\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\johna\\\\Projects\\\\personal\\\\components\\\\Carousel.js\",\n                lineNumber: 92,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\johna\\\\Projects\\\\personal\\\\components\\\\Carousel.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, _this);\n};\n_s(Carousel, \"PqucvgcnpEE0peorvD0o52D2kqk=\");\n_c = Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\nvar _c;\n$RefreshReg$(_c, \"Carousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2Fyb3VzZWwuanM/MjdiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBTbGlkZURhdGEgfSBmcm9tICcuL1NsaWRlRGF0YSdcclxuaW1wb3J0IEljb25zIGZyb20gJy4vSWNvbnMnXHJcblxyXG5jb25zdCBDYXJvdXNlbCA9ICh7c2xpZGVzfSkgPT4ge1xyXG4gICAgXHJcbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbdG91Y2hQb3NpdGlvbiwgc2V0VG91Y2hQb3NpdGlvbl0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IGxlbmd0aCA9IHNsaWRlcy5sZW5ndGhcclxuICBcclxuICBpZiAoIUFycmF5LmlzQXJyYXkoc2xpZGVzKSB8fCBzbGlkZXMubGVuZ3RoIDw9IDApIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG5cclxuICBjb25zdCBuZXh0U2xpZGUgPSAoKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50KGN1cnJlbnQgPT09IGxlbmd0aCAtIDEgPyAwIDogY3VycmVudCArIDEpXHJcbiAgfVxyXG5cclxuICBjb25zdCBwcmV2U2xpZGUgPSAoKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50KGN1cnJlbnQgPT09IDAgPyBsZW5ndGggLSAxIDogY3VycmVudCAtIDEpXHJcbiAgfVxyXG5cclxuICBjb25zdCBkb3RDb250cm9sID0gKGluZGV4KSA9PiB7XHJcbiAgICBzZXRDdXJyZW50KGluZGV4KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlVG91Y2hTdGFydCA9IChlbCkgPT4ge1xyXG4gICAgY29uc3QgdG91Y2hEb3duID0gZWwudG91Y2hlc1swXS5jbGllbnRYXHJcbiAgICBzZXRUb3VjaFBvc2l0aW9uKHRvdWNoRG93bilcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRvdWNoTW92ZSA9IChlbCkgPT4ge1xyXG4gICAgY29uc3QgdG91Y2hEb3duID0gdG91Y2hQb3NpdGlvblxyXG5cclxuICAgIGlmKHRvdWNoRG93biA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRUb3VjaCA9IGVsLnRvdWNoZXNbMF0uY2xpZW50WFxyXG4gICAgY29uc3QgZGlmZiA9IHRvdWNoRG93biAtIGN1cnJlbnRUb3VjaFxyXG5cclxuICAgIGlmIChkaWZmID4gNSkge1xyXG4gICAgICAgIG5leHRTbGlkZSgpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRpZmYgPCAtNSkge1xyXG4gICAgICAgIHByZXZTbGlkZSgpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0VG91Y2hQb3NpdGlvbihudWxsKVxyXG4gIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHotMTAgcmVsYXRpdmUgY29sLXN0YXJ0LTIgbWQ6Y29sLXN0YXJ0LTMgY29sLXNwYW4tMTAgbWQ6Y29sLXNwYW4tOCByb3ctc3RhcnQtMiByb3ctc3Bhbi00IG15LTE2IGp1c3RpZnktYmV0d2Vlbic+XHJcbiAgICAgICAgXHJcbiAgICAgICAgey8qY2Fyb3VzZWwgaW5uZXIgY29udGVudCAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW52aXNpYmxlIG1kOnZpc2libGUgei0xMCBteS1hdXRvIGN1cnNvci1wb2ludGVyJyBvbkNsaWNrPXtwcmV2U2xpZGV9PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtN3hsJz5cclxuICAgICAgICAgICAgICAgICYjNjA7XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nei0xMCB3LWZ1bGwgbGc6dy0xLzIgcmVsYXRpdmUgbXktYXV0byc+XHJcbiAgICAgICAgICAgIHtTbGlkZURhdGEubWFwKChzbGlkZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2luZGV4ID09PSBjdXJyZW50ID8gJ3NsaWRlIGFjdGl2ZScgOiAnc2xpZGUnfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBvblRvdWNoU3RhcnQ9e2hhbmRsZVRvdWNoU3RhcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBvblRvdWNoTW92ZT17aGFuZGxlVG91Y2hNb3ZlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2luZGV4ID09PSBjdXJyZW50ICYmICg8SWNvbnMgIG5hbWU9e3NsaWRlLmljb25zfSBjbGFzc05hbWU9J3ctZml0IGRhcms6ZmlsbC13aGl0ZScvPil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnZpc2libGUgbWQ6dmlzaWJsZSB6LTEwIG15LWF1dG8gY3Vyc29yLXBvaW50ZXInIG9uQ2xpY2s9e25leHRTbGlkZX0+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC03eGwnPlxyXG4gICAgICAgICAgICAgICAgJiM2MjtcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKkRvdHMqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBsZzpoaWRkZW4gYWJzb2x1dGUganVzdGlmeS1jZW50ZXIgYm90dG9tLTAgbGVmdC0wIHJpZ2h0LTAgdGV4dC03eGwgbS01Jz5cclxuICAgICAgICAgICAge1NsaWRlRGF0YS5tYXAoKHNsaWRlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2luZGV4ID09PSBjdXJyZW50ID8gJyB0ZXh0LW5ldXRyYWwtNzAwJyA6ICd0ZXh0LWJsYWNrJ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkb3RDb250cm9sKGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICAgPi48L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qQmFja2dyb3VuZCByZW5kZXIqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nei0wIGFic29sdXRlIGxlZnQtMCByaWdodC0wICBib3R0b20tMjAgbWQ6Ym90dG9tLTEvMiBsZzpsZWZ0LTEwIGxnOnJpZ2h0LTEwIG9wYWNpdHktMTAnPlxyXG4gICAgICAgIHtTbGlkZURhdGEubWFwKChzbGlkZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2luZGV4ID09PSBjdXJyZW50ID8gJ3NsaWRlIGFjdGl2ZScgOiAnc2xpZGUnfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aW5kZXggPT09IGN1cnJlbnQgJiYgKDxJY29ucyBuYW1lPXtzbGlkZS5iYWNrZ3JvdW5kfSBjbGFzc05hbWU9J3ctZml0IGZpbGwtYmxhY2sgZGFyazpmaWxsLXNsYXRlLTMwMCcvPil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICAgICBcclxuICApXHJcbiAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiU2xpZGVEYXRhIiwiSWNvbnMiLCJDYXJvdXNlbCIsInNsaWRlcyIsImN1cnJlbnQiLCJzZXRDdXJyZW50IiwidG91Y2hQb3NpdGlvbiIsInNldFRvdWNoUG9zaXRpb24iLCJsZW5ndGgiLCJBcnJheSIsImlzQXJyYXkiLCJuZXh0U2xpZGUiLCJwcmV2U2xpZGUiLCJkb3RDb250cm9sIiwiaW5kZXgiLCJoYW5kbGVUb3VjaFN0YXJ0IiwiZWwiLCJ0b3VjaERvd24iLCJ0b3VjaGVzIiwiY2xpZW50WCIsImhhbmRsZVRvdWNoTW92ZSIsImN1cnJlbnRUb3VjaCIsImRpZmYiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwic3BhbiIsIm1hcCIsInNsaWRlIiwib25Ub3VjaFN0YXJ0Iiwib25Ub3VjaE1vdmUiLCJuYW1lIiwiaWNvbnMiLCJiYWNrZ3JvdW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Carousel.js\n"));

/***/ })

});