/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "yeoman-generator"
/*!***********************************!*\
  !*** external "yeoman-generator" ***!
  \***********************************/
(module) {

module.exports = require("yeoman-generator");

/***/ },

/***/ "child_process"
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
(module) {

module.exports = require("child_process");

/***/ },

/***/ "util"
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
(module) {

module.exports = require("util");

/***/ },

/***/ "./generators/app/index.js"
/*!*********************************!*\
  !*** ./generators/app/index.js ***!
  \*********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var yeoman_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yeoman-generator */ \"yeoman-generator\");\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! util */ \"util\");\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! child_process */ \"child_process\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ \"./generators/app/utils.js\");\n//#!/usr/bin/env node\n\n\n\n\nconst exec = util__WEBPACK_IMPORTED_MODULE_1__.promisify(child_process__WEBPACK_IMPORTED_MODULE_2__.exec);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = { default: (class extends yeoman_generator__WEBPACK_IMPORTED_MODULE_0__ {\n  constructor(args, opts) {\n    super(args, opts, {\n      customInstallTask: true\n    });\n    this.answers = {};\n  }\n  async prompting() {\n    const prompt = (name, message, defaultValue = name) => ({\n      type: 'input',\n      name,\n      message,\n      default: defaultValue,\n      validate: name === 'databaseUserPassword' ? _utils_js__WEBPACK_IMPORTED_MODULE_3__.testValidPasswordValue : _utils_js__WEBPACK_IMPORTED_MODULE_3__.testValidInputValue\n    });\n    const nameAnswer = await this.prompt({\n      type: 'input',\n      name: 'name',\n      message: 'Your project name',\n      default: 'my-project-name'\n    });\n    const otherAnswers = await this.prompt([prompt('databaseName', 'What will be your MYSQL database name?', `${nameAnswer.name}_database`), prompt('databaseUser', 'What will be your database user name?', 'admin'), prompt('databaseUserPassword', 'What will be your database user password?', 'password'), prompt('databasePort', 'What port will your database run on?', '3306')]);\n    this.answers = {\n      ...nameAnswer,\n      ...otherAnswers\n    };\n    this.log('You chose: \\n' + Object.entries(this.answers).map(([key, value]) => `  ${key}: ${value}`).join('\\n'));\n  }\n  async writing() {\n    const projectName = this.answers.name;\n    this.destinationRoot(this.destinationPath(projectName));\n    this.log(`Creating a new directory: ${projectName}`);\n    this.log('Copying template files...');\n\n    // Copies all non-template files (ignoring `.ejs`)\n    this.fs.copy(this.templatePath(), this.destinationPath(), {\n      globOptions: {\n        dot: true,\n        ignore: ['**/*.ejs']\n      }\n    });\n    const packageJsonPath = this.destinationPath('package.json');\n    try {\n      const packageJson = this.fs.readJSON(packageJsonPath);\n      packageJson.name = projectName;\n      packageJson.description = 'Your project description';\n      packageJson.version = '1.0.0';\n      this.fs.writeJSON(packageJsonPath, packageJson);\n      const templateVariables = {\n        ...packageJson,\n        ...this.answers\n      };\n\n      // Copy and template individual `.ejs` files\n      const copyTpl = (src, dest) => {\n        this.fs.copyTpl(this.templatePath(`${src}.ejs`), this.destinationPath(dest), templateVariables);\n      };\n\n      // Template file-specific copying\n      copyTpl('README.md', 'README.md');\n      copyTpl('.env', '.env');\n      copyTpl('app/layout.tsx', 'app/layout.tsx');\n      copyTpl('scripts/connect-to-mysql.sh', 'scripts/connect-to-mysql.sh');\n      copyTpl('docker-compose.yml', 'docker-compose.yml');\n\n      // Special handling for `.gitignore` - copy and then delete the original\n      this.fs.copy(this.templatePath('gitignore'), this.destinationPath('.gitignore'));\n      this.fs.delete(this.destinationPath('gitignore'));\n      this.log(`Updated package.json with the new name: ${projectName}`);\n    } catch (err) {\n      this.log(`Error reading or updating package.json: ${err.message}`);\n    }\n  }\n  async install() {\n    if (this.options.skipInstall) {\n      this.log('Skipping yarn package installation...');\n      return;\n    }\n    this.log('Installing yarn packages...');\n    await exec(`yarn install --cwd ${this.destinationPath()}`);\n  }\n  end() {\n    this.log(`💥 BOOM! 🎉 New Integrity app has been created. Let's make something awesome.`);\n  }\n}) }.default;\n\n//# sourceURL=webpack://generator-integrity/./generators/app/index.js?\n}");

/***/ },

/***/ "./generators/app/utils.js"
/*!*********************************!*\
  !*** ./generators/app/utils.js ***!
  \*********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   testValidInputValue: () => (/* binding */ testValidInputValue),\n/* harmony export */   testValidPasswordValue: () => (/* binding */ testValidPasswordValue)\n/* harmony export */ });\nconst isEmpty = packageName => packageName === undefined || packageName.trim().length === 0;\nconst startsWithDotOrUnderscore = packageName => packageName.startsWith('.') || packageName.startsWith('_');\nconst matchesRegex = (packageName, regex) => regex.test(packageName);\nfunction testValidInputValue(input) {\n  const validations = [{\n    test: isEmpty,\n    message: 'Project name cannot be empty'\n  }, {\n    test: str => matchesRegex(str, /[A-Z]/),\n    message: 'Project name cannot have uppercase letters'\n  }, {\n    test: str => !matchesRegex(str, /^[a-zA-Z0-9-_]+$/),\n    message: 'Project name can only contain letters, numbers, dashes, and underscores'\n  }, {\n    test: startsWithDotOrUnderscore,\n    message: 'Project name cannot start with a period or underscore'\n  }, {\n    test: str => matchesRegex(str, /\\s/),\n    message: 'Project name cannot contain leading, trailing spaces, or spaces between characters'\n  }, {\n    test: str => matchesRegex(str, /[~)('!*]/),\n    message: 'Project name cannot contain ~ ) ( \\' * !'\n  }, {\n    test: str => str.length > 214,\n    message: 'Project name cannot be longer than 214 characters'\n  }];\n  for (const {\n    test,\n    message\n  } of validations) {\n    if (test(input)) return message;\n  }\n  return true;\n}\nfunction testValidPasswordValue(input) {\n  const validations = [{\n    test: isEmpty,\n    message: 'Password cannot be empty'\n  }, {\n    test: str => matchesRegex(str, /\\s/),\n    message: 'Password cannot contain spaces'\n  }];\n  for (const {\n    test,\n    message\n  } of validations) {\n    if (test(input)) return message;\n  }\n  return true;\n}\n\n//# sourceURL=webpack://generator-integrity/./generators/app/utils.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./generators/app/index.js");
/******/ 	
/******/ })()
;