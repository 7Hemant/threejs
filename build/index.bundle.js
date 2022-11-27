/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ (() => {

eval("const canvas = document.querySelector(\".canvas\");\r\n//scene\r\nconst scene = new THREE.Scene();\r\n\r\n//cube\r\nconst geometry = new THREE.BoxGeometry(1, 1, 1);\r\nconst material = new THREE.MeshBasicMaterial({ color: \"yellow\" });\r\nconst mesh = new THREE.Mesh(geometry, material);\r\nscene.add(mesh);\r\n\r\n// sizes\r\nconst size = {\r\n  width: innerWidth,\r\n  height: innerHeight,\r\n};\r\n\r\n//camera //PerspectiveCamera like human eye see things\r\nconst camera = new THREE.PerspectiveCamera(75, size.width / size.height);\r\ncamera.position.z = 3;\r\ncamera.position.x = 0;\r\ncamera.position.y = -1;\r\nscene.add(camera);\r\n\r\n//renderer\r\nconst renderer = new THREE.WebGL1Renderer({\r\n  canvas,\r\n});\r\n\r\nrenderer.setSize(innerWidth, innerHeight);\r\n\r\nrenderer.render(scene, camera);\r\n\n\n//# sourceURL=webpack://threejs-setup/./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script.js"]();
/******/ 	
/******/ })()
;