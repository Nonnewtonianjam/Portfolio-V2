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

/***/ "./components/ProjectData.js":
/*!***********************************!*\
  !*** ./components/ProjectData.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _public_projects_onDeck_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../public/projects/onDeck.webp */ \"./public/projects/onDeck.webp\");\n/* harmony import */ var _public_projects_bookClub_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/projects/bookClub.webp */ \"./public/projects/bookClub.webp\");\n/* harmony import */ var _public_projects_clothing_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/projects/clothing.webp */ \"./public/projects/clothing.webp\");\n/* harmony import */ var _public_projects_thereBeDragons_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/projects/thereBeDragons.webp */ \"./public/projects/thereBeDragons.webp\");\n/* harmony import */ var _public_projects_puzzle_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/projects/puzzle.webp */ \"./public/projects/puzzle.webp\");\n\n\n\n\n\n//import Meeting from '../public/projects/meeting.webp'\n//import Nurish from '../public/projects/nurish.webp'\n\nvar Data = [\n    {\n        id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),\n        name: \"OnDeck\",\n        excerpt: \"Application to assist user's in finding live musical performances. The user \\n        selects their desired parameters, and is presented with a list of recommendations along with a score \\n        for how likely it is that they will enjoy the event.\",\n        desc: \"The goal of this project was to make the app feel like a natural extension of the spotify experience. \\n        I created the wireframe around the idea that the information would be displayed in the same fashion as \\n        the playlists created on Spotify itself. Using the Spotify API I was able to create profile on a user's \\n        musical preferences by looking at their most recently favorited songs. I would then use this profile to \\n        generate a list of performers whose discography most closely matched the user's profile within a specified \\n        region.\",\n        img: _public_projects_onDeck_webp__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n        alt: \"Render of OnDeck Project\",\n        tags: \"React, SCSS, Node, Spotify API, Google Maps API, BandsInTown API\"\n    },\n    // {\n    //     id: uuidv4(),\n    //     name: 'Nurish App',\n    //     excerpt:'Application to assist those without access to sufficient healthcare in preparing affordable meals that meet their dietary needs',\n    //     desc:\n    //     'An app to help people to get an overview of how they can make the city beautiful.',\n    //     img: Nurish,\n    //     tags: ['React, Typescript, MySql, Chomp API']\n    // },\n    // {\n    //     id: uuidv4(),\n    //     name: 'Meeting Room',\n    //     excerpt: 'Application for scheduling meetings',\n    //     desc:\n    //     'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',\n    //     img: Meeting,\n    //     tags: ['React', 'JavaScript', 'Firebase']\n    // },\n    {\n        id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),\n        name: \"BookClub\",\n        excerpt: \"Book Club is a social media platform that empowers users to read and discuss various forms of \\n        media through its groupchat functionality. The app also gives readers easy access to information regarding \\n        events and new releases hosted by authors and local bookstores.\",\n        desc: \"This app was my attempt to redesign Goodreads in order to create a more centralized experience for content \\n        creators and their fans. The primary focus emphasized parasocial and \\n        user-created content that could then be curated and highlighted for greater visibility. The secondary element \\n        of the app would be the 'book circles' which would allow users to create groups for structured discussions, \\n        interviews and events.\",\n        img: _public_projects_bookClub_webp__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        alt: \"rendering of Book Club Application\",\n        tags: \"React, JavaScript, WebRTC API, Firebase, GraphQL\"\n    },\n    {\n        id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),\n        name: \"There Be Dragons\",\n        excerpt: \"A mobile application to assist Game Masters in running impromptu campaigns of \\n        Dungeons and Dragons. \",\n        desc: \"The primary focus of the project was finding a way to run a streamlined version of the game across several devices\\n         anywhere at any time. For the UI, I wanted to emulate the look of the games that we would normally run on desktop \\n         as much as possible while also leaning into the UX inherent to touchscreen devices to create something that felt \\n         familiar yet novel.\",\n        img: _public_projects_thereBeDragons_webp__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        alt: \"Render Of There Be Dragons \",\n        tags: \"React Native, Redux, TypeScript, Firebase\"\n    },\n    {\n        id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),\n        name: \"Clothing E-Commerce Experience\",\n        excerpt: \"Application for clothing brand e-commerce app with a focus on finding clothing compatible with a user's personal style.\",\n        desc: \"The goal of this project was to attempt to make fashion more accessible for users by creating a system that \\n        assists them in clothing coordination while also increasing theoretical conversion rates in the process. The \\n        app initially prompts user to fill out a short survey regarding characteristics and preferences. This allows \\n        for the creation of a heuristic profile of the user that allows for more accurate recommendations. Clothing is \\n        parsed from a variety of different retailers, aggregated, and then displayed for the user.\",\n        img: _public_projects_clothing_webp__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        alt: \"Render of Clothing E-Commerce Experience\",\n        tags: \"React, TypeScript, Next, MongoDB, Cheerio\"\n    },\n    {\n        id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),\n        name: \"Puzzle Solver\",\n        excerpt: \"This project came about at the beginning of the pandemic when I incorrectly assumed my four roommates shared my enthusiasm for puzzles.\",\n        desc: \"This project ended up being scaled down significantly as I did not have the workspace neccessary to for the gantry system that was\\n           initially designed. The question then became, how do I translate this into something more practical? The answer came in the form of \\n           an OpenCV plugin for flutter. Operating the application on a mobile did present some issues regarding occlusion due to inconsistent lighting, the project \\n           was successful. The final iteration of the algorithm could determine where a piece should be placed with an accuracy of roughly 94%. \\n          I learned a great deal from this project: working with embedded systems, deploying ML models on mobile devices and computer vision are\\n           just a few of the topics I studied extensively to bring this project to life. The knowledge I gained working through this project is \\n           indispensible. However, I do sometimes wonder if I should've just returned the puzzles.\",\n        img: _public_projects_puzzle_webp__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        alt: \"Puzzle Solver\",\n        tags: \"OpenCV, Python\"\n    }, \n];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Data);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3REYXRhLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBbUM7QUFDZ0I7QUFDSTtBQUNBO0FBQ1k7QUFDbkUsdURBQXVEO0FBQ3ZELHFEQUFxRDtBQUNGO0FBR25ELElBQU1PLElBQUksR0FBRztJQUNUO1FBQ0lDLEVBQUUsRUFBRVAsd0NBQU0sRUFBRTtRQUNaUSxJQUFJLEVBQUUsUUFBUTtRQUNkQyxPQUFPLEVBQ04sMlBBRW1EO1FBQ3BEQyxJQUFJLEVBQ0gsbWtCQUtNO1FBQ1BDLEdBQUcsRUFBRVYsb0VBQU07UUFDWFcsR0FBRyxFQUFFLDBCQUEwQjtRQUMvQkMsSUFBSSxFQUFFLGtFQUFrRTtLQUMzRTtJQUNELElBQUk7SUFDSixvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLGlKQUFpSjtJQUNqSixZQUFZO0lBQ1osMkZBQTJGO0lBQzNGLG1CQUFtQjtJQUNuQixvREFBb0Q7SUFDcEQsS0FBSztJQUNMLElBQUk7SUFDSixvQkFBb0I7SUFDcEIsNEJBQTRCO0lBQzVCLHNEQUFzRDtJQUN0RCxZQUFZO0lBQ1oseUhBQXlIO0lBQ3pILG9CQUFvQjtJQUNwQixnREFBZ0Q7SUFDaEQsS0FBSztJQUNMO1FBQ0lOLEVBQUUsRUFBRVAsd0NBQU0sRUFBRTtRQUNaUSxJQUFJLEVBQUUsVUFBVTtRQUNoQkMsT0FBTyxFQUFHLDhSQUVxRDtRQUMvREMsSUFBSSxFQUNILDBjQUlxQjtRQUN0QkMsR0FBRyxFQUFFVCxzRUFBUTtRQUNiVSxHQUFHLEVBQUUsb0NBQW9DO1FBQ3pDQyxJQUFJLEVBQUMsa0RBQWtEO0tBQzFEO0lBQ0Q7UUFDSU4sRUFBRSxFQUFFUCx3Q0FBTSxFQUFFO1FBQ1pRLElBQUksRUFBRSxrQkFBa0I7UUFDeEJDLE9BQU8sRUFBRSxnSEFDYTtRQUN0QkMsSUFBSSxFQUNILDJZQUdtQjtRQUNwQkMsR0FBRyxFQUFFUCw0RUFBYztRQUNuQlEsR0FBRyxFQUFFLDZCQUE2QjtRQUNsQ0MsSUFBSSxFQUFFLDJDQUEyQztLQUNwRDtJQUNEO1FBQ0lOLEVBQUUsRUFBRVAsd0NBQU0sRUFBRTtRQUNaUSxJQUFJLEVBQUUsZ0NBQWdDO1FBQ3RDQyxPQUFPLEVBQUMseUhBQTBIO1FBQ2xJQyxJQUFJLEVBQ0gseWpCQUl5RjtRQUMxRkMsR0FBRyxFQUFFUixzRUFBUTtRQUNiUyxHQUFHLEVBQUUsMENBQTBDO1FBQy9DQyxJQUFJLEVBQUUsMkNBQTJDO0tBQ3BEO0lBQ0Q7UUFDSU4sRUFBRSxFQUFFUCx3Q0FBTSxFQUFFO1FBQ1pRLElBQUksRUFBRSxlQUFlO1FBQ3JCQyxPQUFPLEVBQUUseUlBQXVJO1FBQ2hKQyxJQUFJLEVBQ0QsczlCQU11RjtRQUMxRkMsR0FBRyxFQUFFTixvRUFBTTtRQUNYTyxHQUFHLEVBQUUsZUFBZTtRQUNwQkMsSUFBSSxFQUFFLGdCQUFnQjtLQUN2QjtDQUNKO0FBRUQsK0RBQWVQLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2plY3REYXRhLmpzPzAwYWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCdcclxuaW1wb3J0IE9uRGVjayBmcm9tICcuLi9wdWJsaWMvcHJvamVjdHMvb25EZWNrLndlYnAnXHJcbmltcG9ydCBCb29rQ2x1YiBmcm9tICcuLi9wdWJsaWMvcHJvamVjdHMvYm9va0NsdWIud2VicCdcclxuaW1wb3J0IENsb3RoaW5nIGZyb20gJy4uL3B1YmxpYy9wcm9qZWN0cy9jbG90aGluZy53ZWJwJ1xyXG5pbXBvcnQgVGhlcmVCZURyYWdvbnMgZnJvbSAnLi4vcHVibGljL3Byb2plY3RzL3RoZXJlQmVEcmFnb25zLndlYnAnXHJcbi8vaW1wb3J0IE1lZXRpbmcgZnJvbSAnLi4vcHVibGljL3Byb2plY3RzL21lZXRpbmcud2VicCdcclxuLy9pbXBvcnQgTnVyaXNoIGZyb20gJy4uL3B1YmxpYy9wcm9qZWN0cy9udXJpc2gud2VicCdcclxuaW1wb3J0IFB1enpsZSBmcm9tICcuLi9wdWJsaWMvcHJvamVjdHMvcHV6emxlLndlYnAnXHJcblxyXG5cclxuY29uc3QgRGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogdXVpZHY0KCksXHJcbiAgICAgICAgbmFtZTogJ09uRGVjaycsXHJcbiAgICAgICAgZXhjZXJwdDpcclxuICAgICAgICBgQXBwbGljYXRpb24gdG8gYXNzaXN0IHVzZXIncyBpbiBmaW5kaW5nIGxpdmUgbXVzaWNhbCBwZXJmb3JtYW5jZXMuIFRoZSB1c2VyIFxyXG4gICAgICAgIHNlbGVjdHMgdGhlaXIgZGVzaXJlZCBwYXJhbWV0ZXJzLCBhbmQgaXMgcHJlc2VudGVkIHdpdGggYSBsaXN0IG9mIHJlY29tbWVuZGF0aW9ucyBhbG9uZyB3aXRoIGEgc2NvcmUgXHJcbiAgICAgICAgZm9yIGhvdyBsaWtlbHkgaXQgaXMgdGhhdCB0aGV5IHdpbGwgZW5qb3kgdGhlIGV2ZW50LmAsXHJcbiAgICAgICAgZGVzYzogXHJcbiAgICAgICAgYFRoZSBnb2FsIG9mIHRoaXMgcHJvamVjdCB3YXMgdG8gbWFrZSB0aGUgYXBwIGZlZWwgbGlrZSBhIG5hdHVyYWwgZXh0ZW5zaW9uIG9mIHRoZSBzcG90aWZ5IGV4cGVyaWVuY2UuIFxyXG4gICAgICAgIEkgY3JlYXRlZCB0aGUgd2lyZWZyYW1lIGFyb3VuZCB0aGUgaWRlYSB0aGF0IHRoZSBpbmZvcm1hdGlvbiB3b3VsZCBiZSBkaXNwbGF5ZWQgaW4gdGhlIHNhbWUgZmFzaGlvbiBhcyBcclxuICAgICAgICB0aGUgcGxheWxpc3RzIGNyZWF0ZWQgb24gU3BvdGlmeSBpdHNlbGYuIFVzaW5nIHRoZSBTcG90aWZ5IEFQSSBJIHdhcyBhYmxlIHRvIGNyZWF0ZSBwcm9maWxlIG9uIGEgdXNlcidzIFxyXG4gICAgICAgIG11c2ljYWwgcHJlZmVyZW5jZXMgYnkgbG9va2luZyBhdCB0aGVpciBtb3N0IHJlY2VudGx5IGZhdm9yaXRlZCBzb25ncy4gSSB3b3VsZCB0aGVuIHVzZSB0aGlzIHByb2ZpbGUgdG8gXHJcbiAgICAgICAgZ2VuZXJhdGUgYSBsaXN0IG9mIHBlcmZvcm1lcnMgd2hvc2UgZGlzY29ncmFwaHkgbW9zdCBjbG9zZWx5IG1hdGNoZWQgdGhlIHVzZXIncyBwcm9maWxlIHdpdGhpbiBhIHNwZWNpZmllZCBcclxuICAgICAgICByZWdpb24uYCxcclxuICAgICAgICBpbWc6IE9uRGVjayxcclxuICAgICAgICBhbHQ6ICdSZW5kZXIgb2YgT25EZWNrIFByb2plY3QnLFxyXG4gICAgICAgIHRhZ3M6ICdSZWFjdCwgU0NTUywgTm9kZSwgU3BvdGlmeSBBUEksIEdvb2dsZSBNYXBzIEFQSSwgQmFuZHNJblRvd24gQVBJJ1xyXG4gICAgfSxcclxuICAgIC8vIHtcclxuICAgIC8vICAgICBpZDogdXVpZHY0KCksXHJcbiAgICAvLyAgICAgbmFtZTogJ051cmlzaCBBcHAnLFxyXG4gICAgLy8gICAgIGV4Y2VycHQ6J0FwcGxpY2F0aW9uIHRvIGFzc2lzdCB0aG9zZSB3aXRob3V0IGFjY2VzcyB0byBzdWZmaWNpZW50IGhlYWx0aGNhcmUgaW4gcHJlcGFyaW5nIGFmZm9yZGFibGUgbWVhbHMgdGhhdCBtZWV0IHRoZWlyIGRpZXRhcnkgbmVlZHMnLFxyXG4gICAgLy8gICAgIGRlc2M6XHJcbiAgICAvLyAgICAgJ0FuIGFwcCB0byBoZWxwIHBlb3BsZSB0byBnZXQgYW4gb3ZlcnZpZXcgb2YgaG93IHRoZXkgY2FuIG1ha2UgdGhlIGNpdHkgYmVhdXRpZnVsLicsXHJcbiAgICAvLyAgICAgaW1nOiBOdXJpc2gsXHJcbiAgICAvLyAgICAgdGFnczogWydSZWFjdCwgVHlwZXNjcmlwdCwgTXlTcWwsIENob21wIEFQSSddXHJcbiAgICAvLyB9LFxyXG4gICAgLy8ge1xyXG4gICAgLy8gICAgIGlkOiB1dWlkdjQoKSxcclxuICAgIC8vICAgICBuYW1lOiAnTWVldGluZyBSb29tJyxcclxuICAgIC8vICAgICBleGNlcnB0OiAnQXBwbGljYXRpb24gZm9yIHNjaGVkdWxpbmcgbWVldGluZ3MnLFxyXG4gICAgLy8gICAgIGRlc2M6XHJcbiAgICAvLyAgICAgJ1VzaW5nIHRoaXMgYXBwIHlvdSBjYW4gdHJhY2sgYW55IGUgY29pbi4gQWxzbyB5b3Ugd2lsbCBnZXQgYSBnb29kIGFkdmlzZSBhYm91dCBpbnZlc3RtZW50IGZvcm0gdGhlIHByb2Zlc3Npb25hbCcsXHJcbiAgICAvLyAgICAgaW1nOiBNZWV0aW5nLFxyXG4gICAgLy8gICAgIHRhZ3M6IFsnUmVhY3QnLCAnSmF2YVNjcmlwdCcsICdGaXJlYmFzZSddXHJcbiAgICAvLyB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiB1dWlkdjQoKSxcclxuICAgICAgICBuYW1lOiAnQm9va0NsdWInLFxyXG4gICAgICAgIGV4Y2VycHQ6IGBCb29rIENsdWIgaXMgYSBzb2NpYWwgbWVkaWEgcGxhdGZvcm0gdGhhdCBlbXBvd2VycyB1c2VycyB0byByZWFkIGFuZCBkaXNjdXNzIHZhcmlvdXMgZm9ybXMgb2YgXHJcbiAgICAgICAgbWVkaWEgdGhyb3VnaCBpdHMgZ3JvdXBjaGF0IGZ1bmN0aW9uYWxpdHkuIFRoZSBhcHAgYWxzbyBnaXZlcyByZWFkZXJzIGVhc3kgYWNjZXNzIHRvIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBcclxuICAgICAgICBldmVudHMgYW5kIG5ldyByZWxlYXNlcyBob3N0ZWQgYnkgYXV0aG9ycyBhbmQgbG9jYWwgYm9va3N0b3Jlcy5gLFxyXG4gICAgICAgIGRlc2M6XHJcbiAgICAgICAgYFRoaXMgYXBwIHdhcyBteSBhdHRlbXB0IHRvIHJlZGVzaWduIEdvb2RyZWFkcyBpbiBvcmRlciB0byBjcmVhdGUgYSBtb3JlIGNlbnRyYWxpemVkIGV4cGVyaWVuY2UgZm9yIGNvbnRlbnQgXHJcbiAgICAgICAgY3JlYXRvcnMgYW5kIHRoZWlyIGZhbnMuIFRoZSBwcmltYXJ5IGZvY3VzIGVtcGhhc2l6ZWQgcGFyYXNvY2lhbCBhbmQgXHJcbiAgICAgICAgdXNlci1jcmVhdGVkIGNvbnRlbnQgdGhhdCBjb3VsZCB0aGVuIGJlIGN1cmF0ZWQgYW5kIGhpZ2hsaWdodGVkIGZvciBncmVhdGVyIHZpc2liaWxpdHkuIFRoZSBzZWNvbmRhcnkgZWxlbWVudCBcclxuICAgICAgICBvZiB0aGUgYXBwIHdvdWxkIGJlIHRoZSAnYm9vayBjaXJjbGVzJyB3aGljaCB3b3VsZCBhbGxvdyB1c2VycyB0byBjcmVhdGUgZ3JvdXBzIGZvciBzdHJ1Y3R1cmVkIGRpc2N1c3Npb25zLCBcclxuICAgICAgICBpbnRlcnZpZXdzIGFuZCBldmVudHMuYCxcclxuICAgICAgICBpbWc6IEJvb2tDbHViLFxyXG4gICAgICAgIGFsdDogJ3JlbmRlcmluZyBvZiBCb29rIENsdWIgQXBwbGljYXRpb24nLFxyXG4gICAgICAgIHRhZ3M6J1JlYWN0LCBKYXZhU2NyaXB0LCBXZWJSVEMgQVBJLCBGaXJlYmFzZSwgR3JhcGhRTCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiB1dWlkdjQoKSxcclxuICAgICAgICBuYW1lOiAnVGhlcmUgQmUgRHJhZ29ucycsXHJcbiAgICAgICAgZXhjZXJwdDpgQSBtb2JpbGUgYXBwbGljYXRpb24gdG8gYXNzaXN0IEdhbWUgTWFzdGVycyBpbiBydW5uaW5nIGltcHJvbXB0dSBjYW1wYWlnbnMgb2YgXHJcbiAgICAgICAgRHVuZ2VvbnMgYW5kIERyYWdvbnMuIGAsXHJcbiAgICAgICAgZGVzYzpcclxuICAgICAgICBgVGhlIHByaW1hcnkgZm9jdXMgb2YgdGhlIHByb2plY3Qgd2FzIGZpbmRpbmcgYSB3YXkgdG8gcnVuIGEgc3RyZWFtbGluZWQgdmVyc2lvbiBvZiB0aGUgZ2FtZSBhY3Jvc3Mgc2V2ZXJhbCBkZXZpY2VzXHJcbiAgICAgICAgIGFueXdoZXJlIGF0IGFueSB0aW1lLiBGb3IgdGhlIFVJLCBJIHdhbnRlZCB0byBlbXVsYXRlIHRoZSBsb29rIG9mIHRoZSBnYW1lcyB0aGF0IHdlIHdvdWxkIG5vcm1hbGx5IHJ1biBvbiBkZXNrdG9wIFxyXG4gICAgICAgICBhcyBtdWNoIGFzIHBvc3NpYmxlIHdoaWxlIGFsc28gbGVhbmluZyBpbnRvIHRoZSBVWCBpbmhlcmVudCB0byB0b3VjaHNjcmVlbiBkZXZpY2VzIHRvIGNyZWF0ZSBzb21ldGhpbmcgdGhhdCBmZWx0IFxyXG4gICAgICAgICBmYW1pbGlhciB5ZXQgbm92ZWwuYCxcclxuICAgICAgICBpbWc6IFRoZXJlQmVEcmFnb25zLFxyXG4gICAgICAgIGFsdDogJ1JlbmRlciBPZiBUaGVyZSBCZSBEcmFnb25zICcsXHJcbiAgICAgICAgdGFnczogJ1JlYWN0IE5hdGl2ZSwgUmVkdXgsIFR5cGVTY3JpcHQsIEZpcmViYXNlJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogdXVpZHY0KCksXHJcbiAgICAgICAgbmFtZTogJ0Nsb3RoaW5nIEUtQ29tbWVyY2UgRXhwZXJpZW5jZScsXHJcbiAgICAgICAgZXhjZXJwdDonQXBwbGljYXRpb24gZm9yIGNsb3RoaW5nIGJyYW5kIGUtY29tbWVyY2UgYXBwIHdpdGggYSBmb2N1cyBvbiBmaW5kaW5nIGNsb3RoaW5nIGNvbXBhdGlibGUgd2l0aCBhIHVzZXJcXCdzIHBlcnNvbmFsIHN0eWxlLicsXHJcbiAgICAgICAgZGVzYzpcclxuICAgICAgICBgVGhlIGdvYWwgb2YgdGhpcyBwcm9qZWN0IHdhcyB0byBhdHRlbXB0IHRvIG1ha2UgZmFzaGlvbiBtb3JlIGFjY2Vzc2libGUgZm9yIHVzZXJzIGJ5IGNyZWF0aW5nIGEgc3lzdGVtIHRoYXQgXHJcbiAgICAgICAgYXNzaXN0cyB0aGVtIGluIGNsb3RoaW5nIGNvb3JkaW5hdGlvbiB3aGlsZSBhbHNvIGluY3JlYXNpbmcgdGhlb3JldGljYWwgY29udmVyc2lvbiByYXRlcyBpbiB0aGUgcHJvY2Vzcy4gVGhlIFxyXG4gICAgICAgIGFwcCBpbml0aWFsbHkgcHJvbXB0cyB1c2VyIHRvIGZpbGwgb3V0IGEgc2hvcnQgc3VydmV5IHJlZ2FyZGluZyBjaGFyYWN0ZXJpc3RpY3MgYW5kIHByZWZlcmVuY2VzLiBUaGlzIGFsbG93cyBcclxuICAgICAgICBmb3IgdGhlIGNyZWF0aW9uIG9mIGEgaGV1cmlzdGljIHByb2ZpbGUgb2YgdGhlIHVzZXIgdGhhdCBhbGxvd3MgZm9yIG1vcmUgYWNjdXJhdGUgcmVjb21tZW5kYXRpb25zLiBDbG90aGluZyBpcyBcclxuICAgICAgICBwYXJzZWQgZnJvbSBhIHZhcmlldHkgb2YgZGlmZmVyZW50IHJldGFpbGVycywgYWdncmVnYXRlZCwgYW5kIHRoZW4gZGlzcGxheWVkIGZvciB0aGUgdXNlci5gLFxyXG4gICAgICAgIGltZzogQ2xvdGhpbmcsXHJcbiAgICAgICAgYWx0OiAnUmVuZGVyIG9mIENsb3RoaW5nIEUtQ29tbWVyY2UgRXhwZXJpZW5jZScsXHJcbiAgICAgICAgdGFnczogJ1JlYWN0LCBUeXBlU2NyaXB0LCBOZXh0LCBNb25nb0RCLCBDaGVlcmlvJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogdXVpZHY0KCksXHJcbiAgICAgICAgbmFtZTogJ1B1enpsZSBTb2x2ZXInLFxyXG4gICAgICAgIGV4Y2VycHQ6YFRoaXMgcHJvamVjdCBjYW1lIGFib3V0IGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIHBhbmRlbWljIHdoZW4gSSBpbmNvcnJlY3RseSBhc3N1bWVkIG15IGZvdXIgcm9vbW1hdGVzIHNoYXJlZCBteSBlbnRodXNpYXNtIGZvciBwdXp6bGVzLmAsXHJcbiAgICAgICAgZGVzYzpcclxuICAgICAgICAgIGBUaGlzIHByb2plY3QgZW5kZWQgdXAgYmVpbmcgc2NhbGVkIGRvd24gc2lnbmlmaWNhbnRseSBhcyBJIGRpZCBub3QgaGF2ZSB0aGUgd29ya3NwYWNlIG5lY2Nlc3NhcnkgdG8gZm9yIHRoZSBnYW50cnkgc3lzdGVtIHRoYXQgd2FzXHJcbiAgICAgICAgICAgaW5pdGlhbGx5IGRlc2lnbmVkLiBUaGUgcXVlc3Rpb24gdGhlbiBiZWNhbWUsIGhvdyBkbyBJIHRyYW5zbGF0ZSB0aGlzIGludG8gc29tZXRoaW5nIG1vcmUgcHJhY3RpY2FsPyBUaGUgYW5zd2VyIGNhbWUgaW4gdGhlIGZvcm0gb2YgXHJcbiAgICAgICAgICAgYW4gT3BlbkNWIHBsdWdpbiBmb3IgZmx1dHRlci4gT3BlcmF0aW5nIHRoZSBhcHBsaWNhdGlvbiBvbiBhIG1vYmlsZSBkaWQgcHJlc2VudCBzb21lIGlzc3VlcyByZWdhcmRpbmcgb2NjbHVzaW9uIGR1ZSB0byBpbmNvbnNpc3RlbnQgbGlnaHRpbmcsIHRoZSBwcm9qZWN0IFxyXG4gICAgICAgICAgIHdhcyBzdWNjZXNzZnVsLiBUaGUgZmluYWwgaXRlcmF0aW9uIG9mIHRoZSBhbGdvcml0aG0gY291bGQgZGV0ZXJtaW5lIHdoZXJlIGEgcGllY2Ugc2hvdWxkIGJlIHBsYWNlZCB3aXRoIGFuIGFjY3VyYWN5IG9mIHJvdWdobHkgOTQlLiBcclxuICAgICAgICAgIEkgbGVhcm5lZCBhIGdyZWF0IGRlYWwgZnJvbSB0aGlzIHByb2plY3Q6IHdvcmtpbmcgd2l0aCBlbWJlZGRlZCBzeXN0ZW1zLCBkZXBsb3lpbmcgTUwgbW9kZWxzIG9uIG1vYmlsZSBkZXZpY2VzIGFuZCBjb21wdXRlciB2aXNpb24gYXJlXHJcbiAgICAgICAgICAganVzdCBhIGZldyBvZiB0aGUgdG9waWNzIEkgc3R1ZGllZCBleHRlbnNpdmVseSB0byBicmluZyB0aGlzIHByb2plY3QgdG8gbGlmZS4gVGhlIGtub3dsZWRnZSBJIGdhaW5lZCB3b3JraW5nIHRocm91Z2ggdGhpcyBwcm9qZWN0IGlzIFxyXG4gICAgICAgICAgIGluZGlzcGVuc2libGUuIEhvd2V2ZXIsIEkgZG8gc29tZXRpbWVzIHdvbmRlciBpZiBJIHNob3VsZCd2ZSBqdXN0IHJldHVybmVkIHRoZSBwdXp6bGVzLmAsXHJcbiAgICAgICAgaW1nOiBQdXp6bGUsXHJcbiAgICAgICAgYWx0OiAnUHV6emxlIFNvbHZlcicsXHJcbiAgICAgICAgdGFnczogJ09wZW5DViwgUHl0aG9uJyxcclxuICAgICAgfSxcclxuICBdO1xyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IERhdGE7Il0sIm5hbWVzIjpbInY0IiwidXVpZHY0IiwiT25EZWNrIiwiQm9va0NsdWIiLCJDbG90aGluZyIsIlRoZXJlQmVEcmFnb25zIiwiUHV6emxlIiwiRGF0YSIsImlkIiwibmFtZSIsImV4Y2VycHQiLCJkZXNjIiwiaW1nIiwiYWx0IiwidGFncyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProjectData.js\n"));

/***/ })

});