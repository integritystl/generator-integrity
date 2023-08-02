/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var t={89:t=>{"use strict";t.exports=require("yeoman-generator")},81:t=>{"use strict";t.exports=require("child_process")},837:t=>{"use strict";t.exports=require("util")},683:(t,e,r)=>{function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e,r){return(e=h(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(){"use strict";c=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var a=e&&e.prototype instanceof y?e:y,i=Object.create(a.prototype),c=new k(n||[]);return o(i,"_invoke",{value:P(t,r,c)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var p={};function y(){}function d(){}function v(){}var m={};l(m,i,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(S([])));b&&b!==e&&r.call(b,i)&&(m=b);var w=v.prototype=y.prototype=Object.create(m);function j(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function a(o,i,c,s){var u=h(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==n(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){a("next",t,c,s)}),(function(t){a("throw",t,c,s)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return a("throw",t,c,s)}))}s(u.arg)}var i;o(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){a(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function P(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=h(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function x(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function S(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return d.prototype=v,o(w,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:d,configurable:!0}),d.displayName=l(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},j(O.prototype),l(O.prototype,s,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new O(f(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},j(w),l(w,u,"Generator"),l(w,i,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=S,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function u(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function l(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){u(a,n,o,i,c,"next",t)}function c(t){u(a,n,o,i,c,"throw",t)}i(void 0)}))}}function f(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,h(n.key),n)}}function h(t){var e=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===n(e)?e:String(e)}function p(t,e){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},p(t,e)}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},y(t)}var d=r(89),v=r(837),m=r(81),g=r(491),b=v.promisify(m.exec);t.exports=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&p(t,e)}(m,t);var e,r,o,i,u,h,d,v=(h=m,d=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=y(h);if(d){var r=y(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function m(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,m),(r=v.call(this,t,e,{customInstallTask:!0})).answers={},r}return e=m,r=[{key:"prompting",value:(u=l(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=function(t,e){return{type:"input",name:t,message:e,default:arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,validate:"databaseUserPassword"===t?g.testValidPasswordValue:g.testValidInputValue}},t.next=3,this.prompt([e("name","Your project name"),e("databaseName","What will be your MYSQL database name?"),e("databaseUser","What will be your database user name?","admin"),e("databaseUserPassword","What will be your database user password?","password"),e("databaseLocalContainerName","What will be the name of your local database docker container?","localdb"),e("databaseTestContainerName","What will be the name of your test database docker container?","testdb")]);case 3:this.answers=t.sent,this.log("You chose: \n"+Object.entries(this.answers).map((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],s=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);s=!0);}catch(t){u=!0,o=t}finally{try{if(!s&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(e,r)||function(t,e){if(t){if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],a=n[1];return"  ".concat(o,": ").concat(a)})).join("\n"));case 5:case"end":return t.stop()}}),t,this)}))),function(){return u.apply(this,arguments)})},{key:"writing",value:(i=l(c().mark((function t(){var e,r,n,o,i,s=this;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this.answers.name,this.destinationRoot(this.destinationPath(e)),this.log("Creating a new directory: ".concat(e)),this.log("Copying template files..."),this.fs.copy(this.templatePath(),this.destinationPath(),{globOptions:{dot:!0,ignore:["**/*.ejs"]}}),r=this.destinationPath("package.json");try{(n=this.fs.readJSON(r)).name=e,n.description="Your project description",n.version="1.0.0",this.fs.writeJSON(r,n),o=a(a({},n),this.answers),(i=function(t,e){s.fs.copyTpl(s.templatePath("".concat(t,".ejs")),s.destinationPath(e),o)})("README.md","README.md"),i("cypress/e2e/home.cy","cypress/e2e/home.cy.js"),i("components/Meta.tsx","components/Meta.tsx"),i(".env",".env"),i("scripts/connect-to-mysql.sh","scripts/connect-to-mysql.sh"),i("docker-compose.test.yml","docker-compose.test.yml"),i("docker-compose.yml","docker-compose.yml"),this.log("Updated package.json with the new name: ".concat(e))}catch(t){this.log("Error reading or updating package.json: ".concat(t.message))}case 7:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)})},{key:"install",value:(o=l(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.log("Installing yarn packages..."),t.next=3,b("yarn install --cwd ".concat(this.destinationPath()));case 3:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)})},{key:"end",value:function(){this.log("New React app has been created based on the template successfully!")}}],r&&f(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),m}(d)},491:t=>{var e=function(t){return void 0===t||0===t.trim().length},r=function(t){return t.startsWith(".")||t.startsWith("_")},n=function(t,e){return e.test(t)};t.exports={testValidInputValue:function(t){for(var o=0,a=[{test:e,message:"Project name cannot be empty"},{test:function(t){return n(t,/[A-Z]/)},message:"Project name cannot have uppercase letters"},{test:function(t){return!n(t,/^[a-zA-Z0-9-_]+$/)},message:"Project name can only contain letters, numbers, dashes, and underscores"},{test:r,message:"Project name cannot start with a period or underscore"},{test:function(t){return n(t,/\s/)},message:"Project name cannot contain leading, trailing spaces, or spaces between characters"},{test:function(t){return n(t,/[~)('!*]/)},message:"Project name cannot contain ~ ) ( ' * !"},{test:function(t){return t.length>214},message:"Project name cannot be longer than 214 characters"}];o<a.length;o++){var i=a[o],c=i.test,s=i.message;if(c(t))return s}return!0},testValidPasswordValue:function(t){for(var r=0,o=[{test:e,message:"Password cannot be empty"},{test:function(t){return n(t,/\s/)},message:"Password cannot contain spaces"}];r<o.length;r++){var a=o[r],i=a.test,c=a.message;if(i(t))return c}return!0}}}},e={};!function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}(683)})();