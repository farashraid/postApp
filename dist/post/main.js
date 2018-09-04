(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!-- <app-gender-select></app-gender-select> -->\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  margin: 0px;\n}\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'post';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _person_person_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./person/person.component */ "./src/app/person/person.component.ts");
/* harmony import */ var _select_input_select_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select-input/select-input.component */ "./src/app/select-input/select-input.component.ts");
/* harmony import */ var _clothes_select_clothes_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clothes-select/clothes-select.component */ "./src/app/clothes-select/clothes-select.component.ts");
/* harmony import */ var _background_select_background_select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./background-select/background-select.component */ "./src/app/background-select/background-select.component.ts");
/* harmony import */ var _gender_select_gender_select_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gender-select/gender-select.component */ "./src/app/gender-select/gender-select.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bg_select_input_bg_select_input_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bg-select-input/bg-select-input.component */ "./src/app/bg-select-input/bg-select-input.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: 'home/:id', component: _gender_select_gender_select_component__WEBPACK_IMPORTED_MODULE_7__["GenderSelectComponent"] },
    { path: 'clothes', component: _clothes_select_clothes_select_component__WEBPACK_IMPORTED_MODULE_5__["ClothesSelectComponent"] },
    { path: 'bgSelect', component: _background_select_background_select_component__WEBPACK_IMPORTED_MODULE_6__["BackgroundSelectComponent"] },
    { path: '**', component: _gender_select_gender_select_component__WEBPACK_IMPORTED_MODULE_7__["GenderSelectComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _person_person_component__WEBPACK_IMPORTED_MODULE_3__["PersonComponent"],
                _select_input_select_input_component__WEBPACK_IMPORTED_MODULE_4__["SelectInputComponent"],
                _clothes_select_clothes_select_component__WEBPACK_IMPORTED_MODULE_5__["ClothesSelectComponent"],
                _background_select_background_select_component__WEBPACK_IMPORTED_MODULE_6__["BackgroundSelectComponent"],
                _gender_select_gender_select_component__WEBPACK_IMPORTED_MODULE_7__["GenderSelectComponent"],
                _bg_select_input_bg_select_input_component__WEBPACK_IMPORTED_MODULE_9__["BgSelectInputComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
                // AppRoutingModule
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/background-select/background-select.component.html":
/*!********************************************************************!*\
  !*** ./src/app/background-select/background-select.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n  <div class=\"top\">\r\n      <img src=\"../../assets/background/select-top.png\" alt=\"\">\r\n  </div>\r\n  <div class=\"middle\"   id=\"mainTable\">\r\n    <div class=\"white\" [style.background-image]=\"'url(' + '../../assets/background/bg'+ bgImgNumber + '.jpg'+ ')'\">\r\n      <!-- <input type=\"text\"  #box (keyup)=\"onKey(box.value)\"> -->\r\n      <div *ngIf=\"!getPost\" >\r\n          <input type=\"text\" maxlength=\"6\" placeholder=\"输入我的名字\" #box (keyup)=\"onKey(box.value)\">\r\n      </div>\r\n      <div *ngIf=\"getPost\" >\r\n          <!-- <input type=\"text\"  [value]=\"name\" disabled> -->\r\n         <!-- <div class=\"nameshow\"> </div> -->\r\n         <button value=\"\">{{name}}</button>\r\n          <!-- <input type=\"text\"  [value]=\"name\" #box (keyup)=\"onKey(box.value) \" disabled> -->\r\n      </div>\r\n      <div class=\"erwei\" *ngIf=\"getPost\"></div>\r\n      <div class=\"person\">\r\n        <app-person [bgData] = '_str'></app-person>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"select-input\">\r\n    <div *ngIf=\"!getPost\">\r\n        <div class=\"left-btn\" (click)=\"backClothes()\">\r\n            <div *ngIf=\"id == 1\">\r\n                <img src=\"../../assets/btn/f-back.png\" alt=\"\">\r\n            </div>\r\n            <div *ngIf=\"id == 2\">\r\n                <img src=\"../../assets/btn/m-back.png\" alt=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"bg-slide\">\r\n            <app-bg-select-input (eventbg)=\"getInfoFromBg($event)\"></app-bg-select-input>\r\n          </div>\r\n          <div class=\"right-btn\" (click)=\"bornPost()\">\r\n              <div *ngIf=\"id == 1\">\r\n                  <img src=\"../../assets/btn/f-born.png\" alt=\"\">\r\n              </div>\r\n              <div *ngIf=\"id == 2\">\r\n                  <img src=\"../../assets/btn/m-born.png\" alt=\"\">\r\n              </div>\r\n          </div>\r\n    </div>\r\n    <div *ngIf=\"getPost\">\r\n        <div class=\"back-btn\" (click)=\"backClothes()\">\r\n            <div *ngIf=\"id == 1\">\r\n                <img src=\"../../assets/btn/f-back.png\" alt=\"\">\r\n            </div>\r\n            <div *ngIf=\"id == 2\">\r\n                <img src=\"../../assets/btn/m-back.png\" alt=\"\">\r\n            </div>\r\n          \r\n        </div>\r\n        <div class=\"born-btn\" (click) = \"saveImg()\">\r\n            <div *ngIf=\"id == 1\">\r\n                <img src=\"../../assets/btn/f-save.png\" alt=\"\">\r\n            </div>\r\n            <div *ngIf=\"id == 2\">\r\n                <img src=\"../../assets/btn/m-save.png\" alt=\"\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"bottom\">\r\n      <img src=\"../../assets/background/select-bottom.png\" alt=\"\">\r\n  </div>\r\n  <!-- <img src=\"{{canvasImg}}\" /> -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/background-select/background-select.component.less":
/*!********************************************************************!*\
  !*** ./src/app/background-select/background-select.component.less ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  height: 100%;\n}\n.main .top {\n  height: 1.4rem;\n}\n.main .top img {\n  width: 100%;\n  padding-top: 0.35rem;\n}\n.main .bottom {\n  margin-top: calc(100% - 6.4rem);\n}\n.main .bottom img {\n  width: 100%;\n}\n.main .middle {\n  height: 7.2rem;\n  text-align: center;\n  padding-top: 0.3rem;\n}\n.main .middle .white {\n  width: 4.5rem;\n  height: 7.2rem;\n  background-color: #fff;\n  margin: 0 auto;\n  background-color: transparent;\n  top: 0;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  background-position: 10% 10%;\n  z-index: 5;\n}\n.main .middle .white input {\n  margin: 0.5rem auto auto 1rem;\n  height: 0.65rem;\n  width: 2rem;\n  font-size: 0.29rem;\n  font-weight: bold;\n  border: none;\n  outline: none;\n}\n.main .middle .white button {\n  margin: 0.5rem auto auto 1rem;\n  height: 0.65rem;\n  width: 2rem;\n  font-size: 0.29rem;\n  font-weight: bold;\n  border: none;\n  outline: none;\n  text-align: left;\n  background-color: #fff;\n}\n.main .middle .white input::-webkit-input-placeholder {\n  font-weight: normal;\n}\n.main .middle .white input::-ms-input-placeholder {\n  font-weight: normal;\n}\n.main .middle .white input::placeholder {\n  font-weight: normal;\n}\n.main .middle .white input:focus {\n  border: none;\n  outline: none;\n}\n.main .middle .white input:disabled {\n  background-color: transparent;\n  color: #333;\n}\n.main .middle .white .nameshow {\n  margin: 0.5rem auto auto 1rem;\n  height: 2.65rem;\n  width: 2rem;\n  font-size: 0.45rem;\n  font-weight: bold;\n  border: none;\n  outline: none;\n}\n.main .middle .white .person {\n  padding-top: 0.8rem;\n  width: 1.8rem;\n  float: right;\n  height: 4.7rem;\n}\n.main .middle .white .erwei {\n  width: 2rem;\n  float: left;\n  height: 100%;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfMAAALGCAYAAABRUHjIAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAJd5JREFUeNrs3dt1G8eiJuCmF/2wn8gTgTARiBOBoAjEE4GgCExHICgC0REYimDTEQiMYMAINhTBkE/7wQ8alFWcg00TYFXfL9+3lpZ8waVR3V1/VXd11cn3nQIAGKyfFAEACHMAQJgDAMIcAIQ5ACDMAQBhDgAIcwAQ5gCAMAcAhDkAIMwBQJgDAMIcABDmAMBhp1U/4B8//6wUB+zff/456P1fdfv7YOhlqA5Q/nRfh+mZA8DACXMAEOYAgDAHAIQ5AAhzAECYAwDCHAAQ5gAgzAEAYQ4ACHMAQJgDgDAHAIQ5ANCs0643YAzrUXdp6msZ9+H3T/0Y7no97q7Lf+jnoDp4HPtfzxwABk6YA4AwBwCEOQAgzAFAmAMAwhwAEOYAgDAHAGEOAAhzAECYAwDCHACEOQAgzAGAZp0O/QdYS3jaul5LewzHYNfrifdhH6IO1jMHAIQ5ACDMAUCYAwDCHAAQ5gCAMAcAYQ4ACHMAQJgDAMIcAIQ5ACDMAQBhDgAIcwAYsVNFQBXWou6+DKvqeh90vZ56198PeuYAgDAHAGEOAAhzAECYA4AwBwCEOQAgzAEAYQ4AwhwAEOYAgDAHAIQ5AAhzAECYAwANs545gzaG9dC7Xk976GvSj+EYAD1zABDmAIAwBwCEOQAgzAFAmAMAwhwAEOYAgDAHAGEOAAhzAECYAwDCHACEOQAgzAGABg1+PfOqazFTTddrceMcdA7Y/+iZA4AwBwCEOQAgzAFAmAMAwhwAEOYAgDAHAGEOAAhzAECYAwDCHACEOQAgzAEAYQ4AHNX5euZV1wJm2vqwlnTX2+D7p72euDoYPXMAEOYAgDAHAIQ5AAhzAECYAwDCHAAQ5gAgzAEAYQ4ACHMAQJgDgDAHAIQ5ACDMAYAXnHzfUQyUNfS1rOle1+uJd30MTX09dfTMAQBhDgDCHAAQ5gCAMAcAYQ4ACHMAQJgDAMIcAIQ5ACDMAQBhDgAIcwAQ5gCAMAcAGnc69B8w9PWsu17Pe+hrSY9hPfSpHwNDP4bUYcqvD+WnZw4AAyfMAUCYAwDCHAAQ5gAgzAEAYQ4ACHMAQJgDgDAHAIQ5ACDMAQBhDgDCHAAQ5gBAs06+73S5AV2vRWst6WHvv673v30A0z4H+5IBeuYAMHDCHACEOQAgzAEAYQ4AwhwAEOYAgDAHAIQ5AAhzAECYAwDCHAAQ5gAgzAEAYQ4ANKvyeubWs+5W12vpTv37+7INQz6HHYN/Dnr/qcP1zAEAYQ4ACHMAEOYAgDAHAIQ5AAhzAECYAwDCHAAQ5gAgzAEAYQ4ACHMAQJgDgDAHAHrvVBFUM/S1oO2/nwe/DVM/Boa+HvnUy8/5p2cOAAhzABDmAIAwBwCEOQAIcwBAmAMAwhwAEOYAIMwBAGEOAAhzAECYA4AwBwCEOQAgzAGA406+73S5AWNZGL6r319V1+XX9f6vo/y73oY+lIFzWPlNtfz7sv/0zAFg4IQ5AAhzAECYAwDCHACEOQAgzAEAYQ4ACHMAEOYAgDAHAIQ5ACDMAUCYAwDCHABoVufrmVdlLdthl//Q1wLvyzZM+RyiGPQ5aPutZw4ACHMAEOYAgDAHAIQ5AAhzAECYAwDCHAAQ5gAgzAEAYQ4ACHMAQJgDgDAHAIQ5ANC4yuuZD30t56qGvp53VUNfj3wMa3nbB4XtR89cEQCAMAcAhDkAIMwBQJgDAMIcABDmAIAwBwBhDgAIcwBAmAMAwhwAhDkAIMwBAGEOABw2+PXMh76euvW8i0Hvvz4Yw5rsU6YOlCF65gCAMAcAYQ4ACHMAQJgDgDAHAIQ5ACDMAQBhDgDCHAAQ5gCAMAcAhDkACHMAQJgDAA07nXoBWAt42Nvfh7W8p76m/NDL3+9Xh4+hDtYzB4CBE+YAIMwBAGEOAAhzABDmAIAwBwCEOQAgzAFAmAMAwhwAEOYAgDAHAGEOAAhzAKBZJ993qnzA0NdiHstatrbfMWgfMsXjf+jHn/XMAQBhDgDCHAAQ5gCAMAcAYQ4ACHMAQJgDAMIcAIQ5ACDMAQBhDgAIcwAQ5gCAMAcAWnDa9QZMfS1bazkPX9fHsGPQ/pvy9lfdf0Pf/3rmADASwhwAhDkAIMwBAGEOAMIcABDmAIAwBwCEOQAIcwBAmAMAwhwAEOYAIMwBAGEOADTrdOg/oOu1cOl2/1VVx/6f+nrMQ9+HYzgGp1x+MkTPHABGQZgDgDAHAIQ5ACDMAUCYAwDCHAAQ5gCAMAcAYQ4ACHMAQJgDAMIcAIQ5ACDMAYBmDX4986GvRz70tYCVv/WgGXYdYD36bsuvrjpUzxwABk6YA4AwBwCEOQAgzAFAmAMAwhwAEOYAgDAHAGEOAAhzAECYAwDCHACEOQAgzAGAZp1831EMlNX1Wr59WUvYPhju93dt6Meg9dD7sf/1zAFg4IQ5AAhzAECYAwDCHACEOQAgzAEAYQ4ACHMAEOYAgDAHAIQ5ACDMAUCYAwDCHABoVuX1zIe+lvDUjWE9b8fvsI+Bqe+Dqa8nP/U6SM8cABDmACDMAQBhDgAIcwAQ5gCAMAcAhDkAIMwBQJgDAMIcABDmAIAwBwBhDgAIcwCgBaddb4C1bKuZ+lrQ1lKuXgZdl6H11Kddhw59Pfa+7D89cwAYOGEOAMIcABDmAIAwBwBhDgAIcwBAmAMAwhwAhDkAIMwBAGEOAAhzABDmAIAwBwCadTr0H2At4mGXv/XsHUNDL7+u15OfurGsR65nDgATJ8wBQJgDAMIcABDmACDMAQBhDgAIcwBAmAOAMAcAhDkAIMwBAGEOAMIcABDmAECzThUBdMua8MMu/6q63n+OPz1zAECYAwDCHACEOQAgzAEAYQ4ACHMAEOYAgDAHAIQ5ACDMAUCYAwDCHAAQ5gCAMAeA0bOeOZ3qei3prr8/GPp61lMvv6mvRz709eDHsp67njkADJwwBwBhDgAIcwBAmAOAMAcAhDkAIMwBAGEOAMIcABDmAIAwBwCEOQAIcwBAmAMAzRr8euZ9WUt2qqa+lnMd2zD09ZSHfg4OfT1v0DMHAGEOAAhzAECYA4AwBwCEOQAgzAEAYQ4AwhwAEOYAgDAHAIQ5AAhzAECYAwDCHAB4QefrmVsLmKkff1NfT7vr7a9a/l2v5z70/d/18d/1/tMzBwCEOQAIcwBAmAMAwhwAhDkAIMwBAGEOAAhzABDmAIAwBwCEOQAgzAFAmAMAwhwAaMHJ9x3FAAB65gCAMAcAhDkACHMAQJgDAMIcABDmACDMAQBhDgAIcwBAmAOAMAcAhDkAIMwBAGEOAMIcABDmAEDNTnd/ThQDAOiZAwDCHAAQ5gAgzAEAYQ4ACHMAQJgDgDAHAIQ5ACDMAQBhDgDCHAAQ5gCAMAcAhDkACHMAQJgDAMIcABDmACDMAQBhDgAIcwBAmAOAMAcAhDkAIMwBQJgDAMIcABDmAIAwBwBhDgAIcwBAmAMAwhwAhDkAIMwBAGEOAAhzABDmAIAwBwCEOQAgzAFAmAMAwhwAEOYAgDAHAGEOAAhzAECYA4AwVwQAIMwBgA6dtvVF//j558Xur1nCS9f//vPPtV3TL7v9F/bJm8SXv7UP7SdK78NQTy5SX7/bh8sXPu9i99d54metn9TZqdtxtXvvxt6bQJjvzHd/3ie+bl7yJPjegzL99NzJlXuC1my726ZVDyqp691fFxM5t1Z9KHOGeexkNMg+JX7e64TX3T05P2cZ23GeUQ/kNBLK+qtxEevdWcf7M9S/2zGF+SYxzMda2YcD6mNH330bT+jck6nu1vZFRuUwdHq8lGnwXmWcIw+7P9cvfN55YpC3eczOWqgHHhsXiw7r3f0G13JsYZ7iLFwWcsmmFyfTuaKC1oI8NHY/Z/Y+7194zVwDdBr6GOaPPThhDuMNrkXR3W2nNpS5qrXKeO1t4m2c5DDffd6NI1OYpxwo97sT+NvuH18lvPwy88CGofS8rhv+mpzbVNe7bbpvcFuOjRuYFeO+5XKeeWwsi/TL4cGy5uPh1hkqzHN75ylh/m53cIfXPtdSNNqdIVfwfQqw1w1/vvM0vZGXc1/3S0YdmHq8zeKTEE8bXHU0DDe77b2yp8cX5u8yKprXKglgxEF+fqDTckgY9HaV+NnzjM99ldjR6qphyAvanjRGCAP8j2VmiF4nDHp7dKl49cybsu3J734o8gbYzSq2WskTxlaserptH+0eauqVh57zLznnxUsTxOx9drh0v1DKwrwR4cH53UEWJibo+pJMuIczzzjpli1X4r8mNjaui3Fe3tomzGqVsv/u637Ecfe9wpw6jqPzEg3WxZHPWzz5/70dXBjP7eXetofO0r8S3lpmxsJ1Qz8jNJbe9alcTzv4zhBAvzudX2xsrBMqhPspFk7sdXxNeOkXvRN6KgR5ztW+P16oE/o2uDI3GJMa+SUaDusmAj3OZplcn48yzMOjKnGWIwMmKCs1oLeZg4Aa79nD7pi8LNGre2nQ25CP05Qwf2hjStQMOfXKuo0NOu2oIBbxB545tWnwRPpYVLs9cluUXCeAFxv1y6KFKS57KvcxrU8JQTb2MO/b70vtjH7LGLA4vDCPE+BfxJP5fQHpvZpZMY2rOrc54zr2yic0khtbNS1e6fjqSGxNGAz64iXdOCnXw0A7SI2HeeYjgEefi8+82rduqxC76pkXsaUZeuiLzMLZOr8nzeM2TM3Nro586TWrGHi5980PNhozB/5WWU43ZexA1Xp/nlE2m4TPEuYHgn3tfOVAL3y295/CPy+VDBOSOpnLOv55M7BzPDUYq15mz+kEvJRHOWHe2u2BU+fKYINuyKNXUy0Kz3VDqu0Atzl1JPs8I/hXz4wxSA7ghAVnUrf5oc0BtI2HeZ2LS5S5hzhQKQtgzCZQDmthDsI8sx5Y75dFvMKX+hjgbUKenWVsR2va6JlPoQdZN4/t/Wi8rRPuFQLF/79deRJD5/tANruNTknOJfaXeuU5HcpWR+D/5BSg5+4yXx8G9Jw896f4MYlMjnvFD41qo6OXE8Av9aYvavwsYc6k5J4Qzz5SsuuprIq8xyBDI2Kh+KEZ8ZJ1G1LDPOUed3LDoO2B3QbATcNmItsenrO93rs0v43hvswM8vA5i7Yme4Aue8Y1XZL/euCW2Kcj6yw0HuaZ97hvXvisWVHTvXdhjjA/Lpy0+5ft3sSWdM4c2CHI56ZxZWBuhrSxMRivWviqOh9J6+0ldmE+DWE6wdVQNz6G6smTimCV0dMW5PTtmJ4nhF0YOLxN7FX+NqRjtuXBefOM165r/KzW94d75uP2UIxwxrRdxbUo8gezJbXiBTk9sUoM8nCOL4fWwWip0ZDzJNVdwvz3dTYM9MxJDvFw2W3Zs5WGag30+Cz+LzV95AczEdKTnmvOqmpXAxzbERrMOVfMPu398yLjvXWHb+ojw3dd7JPTlnbc2yP/fyqLNhwqh+vEg+RbkTC6ekqBFBZD2FV8oVx/ryHIV2KEHgT5eZE+ydbtQI/bTUZjpdgfQBdngUsN89rucWeuH9LJ1b3Gwzy2UNZHCmkqwfNsOcSBICm2eo7PlusqHkNlA12Q0yfLjLC6Guhv7OOtrNAxOFaes4zPmsfVC/frqXnTP8Bl9u6lPjaxVVRHAz2cLLnL6d4VHdzbgiO9v9TbRr8NeHxHH+uyOievSV0cR5gP+ER96ryGz0hxP8QTf/d7F0XaxC05z5LuC7c3/rX7nhDq9y80GOaOYhqWenm9zkFvD0d6yrOMUDp0Dm2fOZc2pmkW5l2Z1fAZVccGvC/R83wUJjAYYhjdF+1M92gufLpuuC4zjsM6B71talrP/CrzNuBtYc0OYV6Di6f3NI44V9l3xmNiTCHILzJC83YkYzwe61+BLswrOXMQ9V94rG5X0T0U5S6hw1DkLBF9NZJzexkbMt/t/nqYNIahtOBhjL3yq4yOxW8mNUKYt8fJ1r/y/EMx0sMgnxXpA9mGONMbwnzQrLTVj555GF376+7P/9r1ZsKMWv8V/z0E+zfFSg+Ey+upt5CurOLHMUaz1+vBxC71iuV5UmI98jDJzvXe59zHyvNaqdKDXnnOlK1NDnqbxVHrz5lnfM7iwKOz667qxHhfftngPgy/qzdjr4R5vVaKoDHhpLzM6Mm8C/cj9wMdehLk55l1RZOD3sJz5B9r+JxjDW0dHGE+KHcvtAI/PW0RZ/Q0bw+cEIuig5mGOmplh5Ht15kVz+fYAypbmaxdaaGhhmlqo9SgN4R5S0LQrl66DLa/WEBsnc8zwnz99P17n/FqQmV9XaIB86aodilMmFO3nJX+ftmd5ymv//RcHYEwH2rv7WRAm5szlevWofrjvne8v/e70gAOWFSY+jrFqo9LS+uZdydneT5h/j+BvsocPARMy/uGP3/dxzp5lGF+ZHTmsztm/75ofPZzkfH+a4+MtL4/wz3E0PI2MxzAGMM8hnHOIKn1k3+/L/H+dZM9c4OwsgYLBsdWgsqxVUUAwrwbOZev/xaU8b5smFQkdZDVvGSYnzv8koVHc3IeSwuvW41kQYq+cdyCMO9dmN8e+O+bjDC/KLmdqZXi5Gcriw2s3MfSfg/P83rOvD7x+eiFkhiVu+Lwc+xhX6deEfu1eP5q2FYRC/Oy5hmvXR/576kDrMqGeeqyqk6GH4G+3IXJosh7LC08Z/75SKPtJV327t+0sKLU1913OLim7f7QbbzMEeEbtwOFed1mNYR5zv3WV7EHaBBc80KYfy0TjCW/T+UECPO2xcuAyT23Qy3J8N8zeywXORV/bovXYfof+yUslOKxNIZ8HJ8oBYT5y6Ga6u6F/3+b0aObN9iLq73H3/QCBC30zkNZv3b6As/4teFOUC87WGML85we7zphh71p4HuDWZdhPvBezX28snEV/3jWvL/+do7FlaamJNxLvnIotF7mUzvOxhPmJUbarhP+f+ocymGw0kXGggg523nsMy9aLNveLPUXxyf8dXUhBvsss4FU1zHCYYeWA36jaKhgpghGEOaxVf9YQayehGL455yRzik98xz/Z7d9+6Omrx7D/ckMZvMyFdozM9Nd1NUrjaPEZ0dOnvd9PSbabIHHaWRJs1QEB8+1RUPnwrxMODa8nnmwrfJUyN72XRQ1LSwV69MqDYOLvjVMh9Yz318Ba12UXwL07qXR53HJzYfMwNzfuecVGhrPNSrC531sqFwviryVnBrfzy08lkVzfvN8/9GeZZ9CoI31zG+LvPXbn2qi3gsNj1Et2DT0y+zbkiG5znhdHSOnNyW38/GScvh70+AzwVt1bCvui/LPvOc0zFIboHdFfWMy7uNx3ssVpWDsdd7Qw3xdspXbRZiX+Zy7Z/69iVHcGydK8+Jtl3mT3xFvRaWeE1cm+mCi5+J6bBMm/dSDbbir8N6yIZRagd10HJabmkJy09D2PedBzwzoUOrVpruWtudhKmFeJUjKhMZt6mxtMZTquCxaNtxWDTUKnv7O+xoPuJW6JKvBCNTbmUitJ9vqdLRSF/QhzEtX/hk7bd8y8/WVnxEtuZ23z1wCLfM5D4lXGOronT8URjEH31y+hk7kDLzc9HCbSuv8nnm8d/GlKP/4U85MbR9yK9k48OxDUX3kY852hss/lzW1JK8Sr0TkTJJzKMjn5qj/qxw8wnb4fDKVKU2562GYf2irYf9TT07wRfjRRbnlPlMCLnzuf5d91jG+7+3uzx8Vfmbqdn46FIqZPfxwYL/N+M1VQjg0VC5KXoEYk9u478ynD+36UqIzsW1oWx5iVrxtc9XFk+/f+/U4b8bD/Js4tedLr9/2YUBWwnbep4RA4iIt2b85zvJWZka55O8Ks+QV6eu4D82mD1clMst440rKOGUu5tS0g3VbHdvpllZPwxwAyPOTIgAAYQ4ACHMAQJgDgDAHAIQ5ACDMAQBhDgDCHAAQ5gCAMAcAhDkACHMAQJgDAMIcABDmACDMAQBhDgAIcwBAmAOAMAcAhDkAIMwBAGEOAMIcABDmAIAwBwBhDgAIcwBAmAMAwhwAhDkAIMwBgHadjunH/OPnn9eJL938+88/r8a+c3flcbH76zrjLde7crnZe/9s99ci8b3b3XtXJbcz7IvLMtvI4I/RcHxeJL58sdv325q/P+fYu9p9/2YkdeD97rdc9mzbc+qrVdn6Rpg3s+POU16722mpB+gbu/Q/ym2zK+ecMgkV5c3e+7exsjtLeO9DOMFKbmr4jlepFbo9O5ogD+f/L4kv/1Z3kJc49rY1/ObrjN/8ISewdp99mVEHfunhIXGesf3rA2Uw3/0172FdvBxzz/wm4yQ6UfWVdrf78zrxtfMDJ827hPeehQZabs8lnnypx8EfDVXobYVXzpWOIUu9SnOZWV800aHIOfbua/jadUaYX2Y2kHPKcxvPvbbCbN3SV4Xf9LGH58Q4wzy2yFNPolt5XLnySA3zV2HfPKm0bhLD/LEyyb0MmRNurVZAFd0/07CZ9bSiqdttYgi1FT73BxqZjR97T0Ms3CLafU7q2989cz7WVZ4fWz4WdchG2jPPOSnWdlMlmxL75qZk+V/mtEBjo+59xuf/ktGr6UOgzR1+R/f9u4y3fG5gX8xbOPaeC7E/MhvIq4TyDK87c2QJ87ZdZLx2NGG+O+G+D2Az/5nRc3jq9d5vvN31KF6qLBdOwcm67PhcnBXpV6zqtq47zJ1L9L5n3uK9Ftp3pQiE+QS//ybjSsO7l8ailLjK0XWn5tDg55xO3uzpbY+pZ0VXYZ46YvEh41GLrCsDDX3uo0k8+lbxhA4n4islMcl934fw6ez8jE+JfMs4/texvtocGBV9PbBD4Lqo/uTR++Lvt+gmfV/+tIMTeZ7x8rOimcfNmvpc0i0UwWR1Ej6xR3gRj72uG5LrIn28yFls/IQ/y/hbVsWPAZXqMTrrmV8o9sn3yhZF3sA3xrHvQwB1OVBrWfTncvRNxXNAkFcXHtut8rjhRdGjQYddhPncMTS5Sjxc0vysJCZv1nHlt+lRmK9reL8wr+aqyn32eOujN/tAmNNWJcqPcng74O3/OvAA6s1xGJ4d34XBbYXy2JZ4z6c2ZiJj5GEeHwVZFp6FnJzQ+q3wuFvVS2F1e1OhHO6LAT9qWWEfVgmgY5NG5V7mzA3zhwPvqevy6qrC8bQp+X3Ucy6E24WzSYV53y5F0Jmc0bv7rvr0yMlA5gro85WJ3AbQvK66JY4izz32Vk3VaeGz4y2o1yXeu8n8LbdDngq5w/N9XVNDchQ9c2FeojeSMOFK00H0ZbcNixq/flt4FG3SSgRQI+dWYn30raVVuR6nQC4TDDnrLswafhz34NWAga9uNhtKvdVGmGsN9qiRkNGwqrsxoVFHbgA1VR+9dBw+FC1NKhOvFoTAuC7yR/pvM8ryVUehtHwu4IvnbzeFckgd4X9btHPLal1Uf/LmYSxhXubezm9lJl3J6Hk20vMdgE1GoL7KXOShieOA8ckJoKbOgfcvhESr65bHc2wR67DkpaGLfo3Oz/m9qwP19zwjONctDebbFNXD/KaNcj1tYceVubS2LmiqlZmzWMS8xgNxq/jpQQDdHAjLsF2bru8r5zQiYpgtYxCGvz86vHrRGX2qlUmS2hrNnnNp7S4sE+gYaizMc/wtzOOAndSew+qxcoyNuseRyb0bPEJrYbWMjfuPHX3/tmhhbekOmIyrmeNlXXGcx4e2rvK0FebbxDAP9xYWDqHGDsz7zDmhL54EeQj31Mlfvj29DPZ4a8MTDkxVXKr0n4kvzxmEeq50e9EZfXx9CPBlm1d62grzlEtrIWQu27xX1WPnmXPYH21ZPtM7T70H9DRwc3o0dfV+FnWVBcRjKeV42jYxCjtcdczo6V2OoMi3Q/8Bu302iKsebYX5zZETKOzs9cAfX6hbaAV+remzTiqE+V+VX7zUNM/oTT8U9d1rN4c7dQrH8cfEY7ipOin1qZKz0JNPvO3Yy8DxbPvIwjz2tvWu+mFdovJbZ/a0r2scBQ91H/8pYd7kmI6bjIbxZWLDOHV7v9TQWw4Nh3cjOBa+tjHvwa4ubGVp1lPn9rTE51ofMk7+eYle+bWShloa1HVfal9VnVExjpx/Zzf2y0+KQGWS0ArPeeZfr3yE4lzUY7DN+M2NXLqOVyq/Jb78LD5Bcmw7545Q9MynG+apLeuzjNfqlY/XYgw/InN+9vOGz8HU8SCfd9scyv++6mRX+73y+Jkv7dfwnb0diBdnz/vrcdmap58W5gxCU08M6JWnVUAWa+lWzm2mptwUeYM7m5g1b1sk3D6rMBPkbYPlF27/bfbK5XbqB7XL7BPU0CpkeuWMrTE7b3Ab6jwH5xnnaJl64Onnz3qwD98U3U4LrGdOb+QsuqJXTideWOlrsLOexQmc2l505rlGTMo2XBT/OaJ+5sgU5qQJg2NWR/7/oqi+AtK6xjBvslf+a9GvRVq+Ojxb74E1EWp9mIEwnOOfO96GTUKYzx2GwvxpK7sv9wrfNLwtbyteyt4eWxEojl59VcNJPIRe+aah2wJlj2G1RlpDsc9Sj9WmQ+ymTJjHJwv2r0qkDlC7Lzny/eLJ+1IHBu7PZLk5VkfEJwcWLR8HdxnHQhuNTD1zOq1w3StnrGHeqDiy/rcibyXDIgZ5mStE74pyz4eflfy+/Zks3z49LvZGol8W3ay1flWmoxAbKKnl8dDWjzEAbqJiK/mu571yhue2T1dSDki9KnXewnkYwmxSI7HDc/NxJPq/YkPm1cB+wjKnfhTmDKUHtVKMRHfFOBYH2e9ZttGwDj29T0X6RDJD97kY6Ej0zNkwv7UZ5i6zT1vV++ZfLKQgwIsfzyvfDGWxpBrWqG5im5aPPT4zurUmZW722ycT9eT0ypdtXrUU5nrmVSwVYeOV/IlS6LQndt72baQB3Kbom9ADvmnos988rlwX16JP7ZXftd24FebTDoowACecCGXuWbXVK78wgpyGAiDluL8o+j+gb4oel1m+jnPdN2kVB+vlXDK/artAhDmbkmHeVq/8s1006QbnyZFe87oo/4jQtujJwKvY40ut/FdF9SVMx+D62OO7NTuLDbrU46WTQaBth3nTozZzlulssjU3pNHd4aDLfVzFvXKmYtbCd1xk1F1Lu6TWPEot95wBe4sufkyrYV51xZ+EFm7qRDCbprdlYGHe1145NHncp1TkbUwZm1MXPU6+chLrvHAufkzsLVau8zKfsX7b8/v/oexWRb1XaDrr6Hg0beJK3G+61StnQn4JgdnwCPPUBsO3kc/p0MWjeXXe234oOrhX3knPnN7KWfDhQnExAjmN2I/xT+1PFsSpWc8qbPOs5PfOEt5738LgsseR6KGHfF60vPZBHKVe16JTnU6gJcwnLvY4cu4HnYV5lFs4yaFJfenh5jSOq4T5+pnv/WfC+0o3YI5cYn92JHqHz9cvih+z0VVtlHQ6rbUwn05oLw9UBGVm7Loo+rWSGUwhzNc1fm/SZz0+Y11zb/i8TwdChTny9y27vgUizKfjY42fFVrQK0XKUIUe4a4CDz3Es443pa2e+dPfn7qe+rz4zwlZzkd6SCxjD73M8XDbh9kPhfl01HVf6PEEb8uXol/P1X50KI3GqmJvrA6pYXx3oOeXOhJ7feC/5a5lPsoxM7FxEwav/V6yIdA5YT4d2xrD/FUYQNPSqPZVz9YzF+bjcV2hN1aX1HOyidta64TGzOsuprTtKNDDTG+LzHryj77UT8J8WmFep3nhUjvDrry3FXpjdTQMZxkv31R8//Xu9U8DOfWS+XrvvbOM37feK+v5QA6L0MvOGVE/68uGC/PpCCeW++bw997YYy+97R56m/fLqyw5Wva9bwZ4SOR2esKVi2WLU8sKc2q/TDdXpIwo0MMgr8uWe1oXGdu4tqda65nnutodP6uuJ9MS5tOpsO5rHr37air30pjG+VG0f6UpNczvDvz3mT1Xn3jb4n2Jt57FY6fTDo7pXPXO9c6hGxcVz9uxhXnXj70tK7z3TRw8p2dOKwf94oUKIPy/nMFAYfDQzVQKvYsZqlz9GGfohFkUi/THyqYyQdNlR+d12J/XJXvl+8Igw5uuztfTlgqqb88mnrdQMW/ipe3H339VU/mF7S41ICXe09m+8H05Yf4mjlgNJ8L9oTKoWI6LDqd5fFqBd1HZhMlNVkOtnasODDqy78N/b2yAVQzb8wPf+7ri75ll9gJH1zN/Uq/N4rn1ruXNuIy96fDdddx+/Gvd8zhr3naMPfOww7727Fh63cI2vS1+jCCfVfyutssvd3KZN0de/1gGVbwvpi303ob8bPuy4vu7qjsuGyr3ZW4j5Mjgt9mAj4tZ0X0uNDFhUMiWf8XZ9e6fdGwaXVHNZfbmeyab+OhL2fevq7y/hHUxzEdKoE7bBj835/y6LdFjb7pzltKL/XasDKvWiwPwuu0vFObtuKu4c78V6ffX6ghzs5wxJmVu9TQV5iGA32e+/lAgtrp2drw0/n8TX75KuMVStV5EmHfSyn9d8f2thHkHVwLGavNCb8vVj37siybPg4catqW13nfC+KacxsN9Ta9pu7HVhw5VKR5N62dlsnmmt1z2ikAZf9hlje5zy8e235iuK4yrHgO5+761p0XiYNWvR/7kDFBb1/SaQ/ul7ado5n2vF4V5P8P8pqYW7Krk+67tsso9shvlO4h90WSveHUgML8lvv+3Dh5zqiOwwpKgKWVXtpF13XK5fIij0xcVOkjCfII9gy/PjF4tU6mEJRNLhUb8/k92W2mLY5VNrBh+VUytuKpQ8VcJ87sja1yn1AchNJYdlFfVHm9oPKVeji8T5l9anAf9IQb5aq8hFnrovwnziUpspQafdq9d1FCpfCkqzs4WT5gPRfVLjVMSejX/e1d2NwnlGxpa/93nlv4IeuQfjgRqU2GTcv6tX+qRh/d3NPlIlTC/jdudVF+VmG/+UP3YxLET9uHF0+Mn7JM48PBt0bPL7v9PgAEAPWM/Dg9admEAAAAASUVORK5CYII=);\n  background-size: 50%;\n  background-repeat: no-repeat;\n  background-position: 30% 78%;\n}\n.main .select-input {\n  height: 1.6rem;\n  padding-top: 0.8rem;\n  position: relative;\n}\n.main .select-input img {\n  height: 1.8rem;\n}\n.main .select-input .left-btn {\n  position: absolute;\n  top: 0.5rem;\n  left: 0.2rem;\n}\n.main .select-input .right-btn {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.2rem;\n}\n.main .select-input .bg-slide {\n  width: 3.2rem;\n  position: absolute;\n  top: 0.5rem;\n  left: 50%;\n  margin-left: -2.1rem;\n}\n.main .select-input .back-btn {\n  position: absolute;\n  top: 0.5rem;\n  left: 2.2rem;\n}\n.main .select-input .born-btn {\n  position: absolute;\n  top: 0.5rem;\n  right: 2.2rem;\n}\n"

/***/ }),

/***/ "./src/app/background-select/background-select.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/background-select/background-select.component.ts ***!
  \******************************************************************/
/*! exports provided: BackgroundSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundSelectComponent", function() { return BackgroundSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/npm/index.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BackgroundSelectComponent = /** @class */ (function () {
    function BackgroundSelectComponent(route, router) {
        this.route = route;
        this.router = router;
        this.bgImgNumber = 1; //背景图的bg
        this.getPost = false; //生成海报
        this.canvasImg = '';
    }
    BackgroundSelectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.name = '';
        // this.id = this.route.snapshot.paramMap.get('id');
        this.route.queryParams.subscribe(function (params) {
            _this.id = params['id'];
            _this.str = params['obj'];
            _this.url = params['url'];
        });
        if (this.url == 'clo') {
            this._str = JSON.parse(decodeURI(this.str));
        }
    };
    BackgroundSelectComponent.prototype.ngDoCheck = function () {
    };
    BackgroundSelectComponent.prototype.getInfoFromBg = function (data) {
        this.bgImgNumber = data;
    };
    BackgroundSelectComponent.prototype.backClothes = function () {
        var obj = encodeURI(JSON.stringify(this._str));
        this.router.navigate(['clothes'], { queryParams: { 'id': this.id, 'obj': obj, 'url': 'bg' } });
    };
    BackgroundSelectComponent.prototype.bornPost = function () {
        this.getPost = true;
    };
    BackgroundSelectComponent.prototype.onKey = function (value) {
        this.name = value;
        console.log(value, '名字');
    };
    BackgroundSelectComponent.prototype.saveImg = function () {
        this.takeScreenShot();
    };
    BackgroundSelectComponent.prototype.takeScreenShot = function () {
        var _this = this;
        // 使用html2canvas插件，将数据源中的数据转换成画布。
        html2canvas__WEBPACK_IMPORTED_MODULE_2__(document.querySelector("#mainTable")).then(function (canvas) {
            // 修改生成的宽度
            canvas.style.width = "1000px";
            console.log(canvas, "生成的画布文件");
            _this.canvasImg = canvas.toDataURL("image/png");
            _this.saveImgLocal();
        });
        // this.downloadFile("导出图片", this.canvasImg);
    };
    BackgroundSelectComponent.prototype.downloadFile = function (filename, content) {
        var base64Img = content;
        var oA = document.createElement('a');
        oA.href = base64Img;
        oA.download = filename;
        var event = document.createEvent('MouseEvents');
        event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        oA.dispatchEvent(event);
    };
    // 方法调用
    BackgroundSelectComponent.prototype.saveImgLocal = function () {
        this.downloadFile("导出图片", this.canvasImg);
    };
    BackgroundSelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-background-select',
            template: __webpack_require__(/*! ./background-select.component.html */ "./src/app/background-select/background-select.component.html"),
            styles: [__webpack_require__(/*! ./background-select.component.less */ "./src/app/background-select/background-select.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BackgroundSelectComponent);
    return BackgroundSelectComponent;
}());



/***/ }),

/***/ "./src/app/bg-select-input/bg-select-input.component.html":
/*!****************************************************************!*\
  !*** ./src/app/bg-select-input/bg-select-input.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"left\">\n    <div>\n      <span *ngFor=\"let item of bgArr\"> \n        <img [src]=\"item.src\" alt=\"\" (click)=\"selectBg(item.id)\">\n      </span>\n      <!-- <img src=\"../../assets/background/select-bg-btn (1).png\" alt=\"\">\n      <img src=\"../../assets/background/select-bg-btn (2).png\" alt=\"\">\n      <img src=\"../../assets/background/select-bg-btn (3).png\" alt=\"\">\n      <img src=\"../../assets/background/select-bg-btn (4).png\" alt=\"\">\n      <img src=\"../../assets/background/select-bg-btn (5).png\" alt=\"\"> -->\n    </div>\n    <!-- <div>\n        <img src=\"../../assets/background/select-bg-btn (1).png\" alt=\"\">\n      </div>\n      <div>\n          <img src=\"../../assets/background/select-bg-btn (1).png\" alt=\"\">\n        </div> -->\n  </div>\n  <div class=\"right\">\t&gt;</div>\n</div>"

/***/ }),

/***/ "./src/app/bg-select-input/bg-select-input.component.less":
/*!****************************************************************!*\
  !*** ./src/app/bg-select-input/bg-select-input.component.less ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  height: 1.48rem;\n  position: relative;\n  float: left;\n  background-color: #e9c748;\n  padding: 0 0.3rem;\n  border: 0.15rem solid #e5a80c;\n  border-radius: 0.75rem;\n  width: 100%;\n}\n.main .left {\n  float: left;\n  margin-top: 0.245rem;\n  height: 1rem;\n  width: 2.35rem;\n  white-space: nowrap;\n  overflow-x: scroll;\n}\n.main .left div {\n  float: left;\n}\n.main .left img {\n  height: 1rem;\n  padding-right: 0.1rem;\n}\n.main .right {\n  position: absolute;\n  left: 2.7rem;\n  color: #e5a80c;\n  line-height: 1.48rem;\n  font-size: 1.43rem;\n}\n"

/***/ }),

/***/ "./src/app/bg-select-input/bg-select-input.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/bg-select-input/bg-select-input.component.ts ***!
  \**************************************************************/
/*! exports provided: BgSelectInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BgSelectInputComponent", function() { return BgSelectInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BgSelectInputComponent = /** @class */ (function () {
    function BgSelectInputComponent() {
        this.eventbg = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    BgSelectInputComponent.prototype.ngOnInit = function () {
        this.bgArr = [
            {
                src: '../../assets/background/select-bg-btn (1).png', id: 1
            },
            {
                src: '../../assets/background/select-bg-btn (2).png', id: 2
            },
            {
                src: '../../assets/background/select-bg-btn (3).png', id: 3
            },
            {
                src: '../../assets/background/select-bg-btn (4).png', id: 4
            },
            {
                src: '../../assets/background/select-bg-btn (5).png', id: 5
            }
        ];
    };
    BgSelectInputComponent.prototype.selectBg = function (id) {
        console.log('emit');
        this.eventbg.emit(id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BgSelectInputComponent.prototype, "eventbg", void 0);
    BgSelectInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bg-select-input',
            template: __webpack_require__(/*! ./bg-select-input.component.html */ "./src/app/bg-select-input/bg-select-input.component.html"),
            styles: [__webpack_require__(/*! ./bg-select-input.component.less */ "./src/app/bg-select-input/bg-select-input.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], BgSelectInputComponent);
    return BgSelectInputComponent;
}());

var Background = /** @class */ (function () {
    function Background() {
    }
    return Background;
}());


/***/ }),

/***/ "./src/app/clothes-select/clothes-select.component.html":
/*!**************************************************************!*\
  !*** ./src/app/clothes-select/clothes-select.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n  <div class=\"top\">\r\n    <img src=\"../../assets/background/select-top.png\" alt=\"\">\r\n  </div>\r\n  <div class=\"middle\">\r\n    <div class=\"left\">\r\n        <div class=\"select\">\r\n            <app-select-input (eventChild1)=\"getInfoFromChild1($event)\" [gender] =\"id\"></app-select-input>\r\n          </div>\r\n    </div>\r\n    \r\n    <div class=\"right\">\r\n        <div class=\"person\">\r\n          <app-person  [child2] = \"faList\" [gender] =\"id\"></app-person>\r\n        </div>\r\n        <div class=\"botton\">\r\n          <div *ngIf=\"id == 1\">\r\n              <div class=\"left-btn\" (click)=\"back()\"><img src=\"../../assets/btn/f-back.png\" alt=\"\"></div>\r\n              <div class=\"right-btn\" (click)=\"toSelectBg()\"><img src=\"../../assets/btn/f-select-bg.png\" alt=\"\"></div>\r\n          </div>\r\n          <div *ngIf=\"id == 2\">\r\n              <div class=\"left-btn\" (click)=\"back()\"><img src=\"../../assets/btn/m-back.png\" alt=\"\"></div>\r\n              <div class=\"right-btn\" (click)=\"toSelectBg()\"><img src=\"../../assets/btn/m-select-bg.png\" alt=\"\"></div>\r\n          </div>\r\n          \r\n        </div>\r\n    </div>\r\n    \r\n  </div>\r\n  <div class=\"bottom\" >\r\n    <img src=\"../../assets/background/select-bottom.png\" alt=\"\">\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/clothes-select/clothes-select.component.less":
/*!**************************************************************!*\
  !*** ./src/app/clothes-select/clothes-select.component.less ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  height: 100%;\n}\n.main .top {\n  height: 1.4rem;\n}\n.main .top img {\n  width: 100%;\n  padding-top: 0.35rem;\n}\n.main .middle {\n  height: 10.5rem;\n}\n.main .middle .left {\n  height: 10.5rem;\n  float: left;\n  width: 2.3rem;\n  padding-left: 0.4rem;\n}\n.main .middle .right {\n  height: 8.5rem;\n  float: right;\n  width: 4.8rem;\n}\n.main .middle .right .person {\n  float: right;\n  width: 3.6rem;\n  padding-right: 0.69rem;\n}\n.main .middle .right .botton {\n  padding-right: 0.3rem;\n  width: 4.6rem;\n}\n.main .middle .right .botton img {\n  height: 1.6rem;\n  padding-top: 0.4rem;\n}\n.main .middle .right .botton .left-btn {\n  float: left;\n  margin-left: 0.8rem;\n}\n.main .middle .right .botton .right-btn {\n  float: right;\n  margin-right: 0.6rem;\n}\n.main .bottom {\n  margin-top: calc(100% - 7rem);\n}\n.main .bottom img {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/clothes-select/clothes-select.component.ts":
/*!************************************************************!*\
  !*** ./src/app/clothes-select/clothes-select.component.ts ***!
  \************************************************************/
/*! exports provided: ClothesSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClothesSelectComponent", function() { return ClothesSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClothesSelectComponent = /** @class */ (function () {
    function ClothesSelectComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    ClothesSelectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.id = params['id'];
            _this.str = params['obj'];
            _this.url = params['url'];
        });
        if (this.url == 'bg') {
            this.faList = JSON.parse(decodeURI(this.str));
        }
        else if (this.url == 'home') {
        }
    };
    ClothesSelectComponent.prototype.back = function () {
        this.router.navigate(['home']);
    };
    ClothesSelectComponent.prototype.toSelectBg = function () {
        if (!this.faList) {
            this.faList = {
                gender: this.id,
                click: 'hair',
                hair: {
                    has: true,
                    index: 0,
                },
                jew: {
                    has: false,
                    index: 0,
                },
                coat: {
                    has: true,
                    index: 0,
                },
                suits: {
                    has: false,
                    index: 0,
                    hasShoes: false,
                    hasJew: false
                },
                pants: {
                    has: true,
                    index: 0,
                },
                shoes: {
                    has: false,
                    index: 0,
                }
            };
        }
        var str = encodeURI(JSON.stringify(this.faList));
        this.router.navigate(['bgSelect'], { queryParams: { 'id': this.id, 'obj': str, 'url': 'clo' } }); //url代表自己身url
    };
    ClothesSelectComponent.prototype.getInfoFromChild1 = function (data) {
        this.faList = data;
    };
    ClothesSelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clothes-select',
            template: __webpack_require__(/*! ./clothes-select.component.html */ "./src/app/clothes-select/clothes-select.component.html"),
            styles: [__webpack_require__(/*! ./clothes-select.component.less */ "./src/app/clothes-select/clothes-select.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ClothesSelectComponent);
    return ClothesSelectComponent;
}());



/***/ }),

/***/ "./src/app/gender-select/gender-select.component.html":
/*!************************************************************!*\
  !*** ./src/app/gender-select/gender-select.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"main\">\r\n  <div class=\"top\"></div>\r\n  <div class=\"person\">\r\n    <div class=\"left-person\"  (click)=\"toggleImage(2)\">\r\n      <img src=\"../../assets/background/man-1.png\" alt=\"\">\r\n    </div>\r\n    <div class=\"right-person\" (click)=\"toggleImage(1)\">\r\n      <img src=\"../../assets/background/women-1.png\" alt=\"\">\r\n    </div>\r\n  </div>\r\n  <div class=\"btn\">\r\n    <div class=\"l-btn\" (click)=\"toggleImage(2)\">\r\n      <img src=\"../../assets/background/btn1.png\" alt=\"\">\r\n    </div>\r\n    <div class=\"r-btn\" (click)=\"toggleImage(1)\">\r\n        <img src=\"../../assets/background/btn2.png\" alt=\"\">\r\n    </div>\r\n  </div>\r\n  <div class=\"bottom\">\r\n    <img src=\"../../assets/background/bottom-1.png\" alt=\"\">\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/gender-select/gender-select.component.less":
/*!************************************************************!*\
  !*** ./src/app/gender-select/gender-select.component.less ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  width: 100%;\n  height: 100%;\n  background-image: url('bg-2.jpg');\n  background-repeat: no-repeat;\n  background-size: 100% auto;\n}\n.main .top {\n  height: 30%;\n}\n.main .person {\n  height: 5rem;\n}\n.main .person img {\n  height: 100%;\n}\n.main .person .left-person {\n  float: left;\n}\n.main .person .left-person img {\n  padding-left: 1.5rem;\n}\n.main .person .right-person {\n  float: right;\n}\n.main .person .right-person img {\n  padding-right: 1.5rem;\n}\n.main .btn {\n  padding-top: 0.3rem;\n  height: 1.5rem;\n}\n.main .btn img {\n  height: 1.2rem;\n}\n.main .btn .l-btn {\n  float: left;\n}\n.main .btn .l-btn img {\n  padding-left: 1.91rem;\n}\n.main .btn .r-btn {\n  float: right;\n}\n.main .btn .r-btn img {\n  padding-right: 1.91rem;\n}\n.main .bottom {\n  height: 2.2rem;\n}\n.main .bottom img {\n  height: 100%;\n}\n"

/***/ }),

/***/ "./src/app/gender-select/gender-select.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/gender-select/gender-select.component.ts ***!
  \**********************************************************/
/*! exports provided: GenderSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenderSelectComponent", function() { return GenderSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GenderSelectComponent = /** @class */ (function () {
    function GenderSelectComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    GenderSelectComponent.prototype.ngOnInit = function () {
    };
    GenderSelectComponent.prototype.toggleImage = function (id) {
        this.router.navigate(['clothes'], { queryParams: { 'id': id, 'obj': '', 'url': 'home' } });
    };
    GenderSelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gender-select',
            template: __webpack_require__(/*! ./gender-select.component.html */ "./src/app/gender-select/gender-select.component.html"),
            styles: [__webpack_require__(/*! ./gender-select.component.less */ "./src/app/gender-select/gender-select.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], GenderSelectComponent);
    return GenderSelectComponent;
}());



/***/ }),

/***/ "./src/app/person/person.component.html":
/*!**********************************************!*\
  !*** ./src/app/person/person.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n  <div *ngIf=\"personObj.gender ==1\">\r\n      <div class=\"person\">\r\n          <div *ngIf=\"personObj.hair.has\">\r\n            <div *ngIf=\"personObj.hair.index !== 5\">\r\n                <div class=\"hair\" [style.background-image]=\"'url(' + '../../assets/hair/fhair'+ personObj.hair.index + '.png'+ ')'\"></div>\r\n              </div>\r\n            <div *ngIf=\"personObj.hair.index == 5\">\r\n                <div class=\"hair\" [style.top] = \"'-0.57rem'\"  [style.background-image]=\"'url(' + '../../assets/hair/fhair'+ personObj.hair.index + '.png'+ ')'\"></div>\r\n            </div>\r\n           </div>\r\n          <div *ngIf=\"personObj.shoes.has\">\r\n              <div class=\"shoes\"  [style.background-image]=\"'url(' + '../../assets/shoes/fshoes'+ personObj.shoes.index + '.png'+ ')'\"></div>\r\n          </div>\r\n          <div *ngIf=\"personObj.suits.has\">\r\n            <div [ngSwitch]=\"personObj.suits.index\">\r\n            <div *ngSwitchCase=\"25\">\r\n                <div class=\"yuhangsuits\"\r\n                \r\n                 [style.background-image]=\"'url(' + '../../assets/suits/fsuits'+ personObj.suits.index + '.png'+ ')'\"></div> \r\n            </div>\r\n            <div *ngSwitchCase=\"26\">\r\n                <div class=\"yuhangsuits\"\r\n                 [style.background-image]=\"'url(' + '../../assets/suits/fsuits'+ personObj.suits.index + '.png'+ ')'\"></div> \r\n            </div>\r\n            <div *ngSwitchCase=\"27\">\r\n                <div class=\"yuhangsuits\"\r\n                 [style.background-image]=\"'url(' + '../../assets/suits/fsuits'+ personObj.suits.index + '.png'+ ')'\"></div> \r\n              </div>\r\n\r\n              <div *ngSwitchCase=\"28\">\r\n                    <div class=\"wuyisuits\"\r\n                    \r\n                     [style.background-image]=\"'url(' + '../../assets/suits/fsuits'+ personObj.suits.index + '.png'+ ')'\"></div> \r\n                </div>\r\n                <div *ngSwitchCase=\"29\">\r\n                    <div class=\"wuyisuits\"\r\n                     [style.background-image]=\"'url(' + '../../assets/suits/fsuits'+ personObj.suits.index + '.png'+ ')'\"></div> \r\n                </div>\r\n                <div *ngSwitchCase=\"30\">\r\n                    <div class=\"wuyisuits\"\r\n                     [style.background-image]=\"'url(' + '../../assets/suits/fsuits'+ personObj.suits.index + '.png'+ ')'\"></div> \r\n                  </div>\r\n\r\n            <div *ngSwitchDefault>\r\n                <div class=\"suits\" [style.background-image]=\"'url(' + '../../assets/suits/fsuits'+ personObj.suits.index + '.png'+ ')'\"></div> \r\n            </div>\r\n            </div>\r\n           \r\n          </div>\r\n      \r\n          <div *ngIf=\"personObj.coat.has\">\r\n          \r\n              <div class=\"coats\" [ngStyle]=\"{'background-image': 'url(' + '../../assets/coat/fcoats'+ personObj.coat.index + '.png'+ ')'}\"></div>\r\n           </div>\r\n           <div *ngIf=\"personObj.pants.has\">\r\n               \r\n              <div class=\"pants\" [style.background-image]=\"'url(' + '../../assets/pants/fpants'+ personObj.pants.index + '.png'+ ')'\"></div>\r\n          </div>\r\n          <div *ngIf=\"personObj.jew.has\">\r\n              <div class=\"jew\" [style.background-image]=\"'url(' + '../../assets/jew/fjew'+ personObj.jew.index + '.png'+ ')'\"></div>\r\n          </div>\r\n     \r\n        </div>\r\n  </div>\r\n  <div *ngIf=\"personObj.gender ==2\">\r\n      <div class=\"mperson\">\r\n          <div *ngIf=\"personObj.hair.has\">\r\n                <div class=\"mhair\" [style.background-image]=\"'url(' + '../../assets/hair/mhair'+ personObj.hair.index + '.png'+ ')'\"></div>\r\n           </div>\r\n          <div *ngIf=\"personObj.shoes.has\">\r\n              <div class=\"mshoes\"  [style.background-image]=\"'url(' + '../../assets/mshoes/mshoes'+ personObj.shoes.index + '.png'+ ')'\"></div>\r\n          </div>\r\n          <div *ngIf=\"personObj.suits.has\">\r\n                <div class=\"msuits\"\r\n                 [style.background-image]=\"'url(' + '../../assets/suits/msuits'+ personObj.suits.index + '.png'+ ')'\"></div>\r\n          </div>\r\n      \r\n          <div *ngIf=\"personObj.coat.has\">\r\n          \r\n              <div class=\"mcoats\" [ngStyle]=\"{'background-image': 'url(' + '../../assets/coat/mcoats'+ personObj.coat.index + '.png'+ ')'}\"></div>\r\n           </div>\r\n           <div *ngIf=\"personObj.pants.has\">\r\n             \r\n              <div class=\"mpants\" [style.background-image]=\"'url(' + '../../assets/mpants/mpants'+ personObj.pants.index + '.png'+ ')'\"></div>\r\n          </div>\r\n          <div *ngIf=\"personObj.jew.has\">\r\n              <div class=\"mjew\" [style.background-image]=\"'url(' + '../../assets/jew/fjew'+ personObj.jew.index + '.png'+ ')'\"></div>\r\n          </div>\r\n     \r\n        </div>\r\n  </div>\r\n  \r\n\r\n</div>"

/***/ }),

/***/ "./src/app/person/person.component.less":
/*!**********************************************!*\
  !*** ./src/app/person/person.component.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  width: 100%;\n}\n.main .person {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: transparent;\n  background-image: url('woman-none.png');\n  background-size: 100%;\n  background-repeat: no-repeat;\n}\n.main .person .hair {\n  position: absolute;\n  width: 105%;\n  height: 100%;\n  background-color: transparent;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  z-index: 11;\n  top: -0.5%;\n  left: -3%;\n}\n.main .person .pants {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: -4.5%;\n  top: -3%;\n  background-color: transparent;\n  background-size: 108%;\n  background-repeat: no-repeat;\n  z-index: 13;\n}\n.main .person .coats {\n  position: absolute;\n  width: 105%;\n  height: 100%;\n  background-color: transparent;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  z-index: 15;\n  top: -1.2%;\n  left: -2.9%;\n}\n.main .person .jew {\n  position: absolute;\n  width: 120%;\n  height: 100%;\n  top: -10%;\n  left: -10%;\n  background-color: transparent;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  z-index: 16;\n}\n.main .person .shoes {\n  position: absolute;\n  width: 105%;\n  height: 100%;\n  top: 2%;\n  left: -2.8%;\n  background-color: transparent;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  z-index: 12;\n}\n.main .person .suits {\n  position: absolute;\n  width: 105%;\n  height: 100%;\n  top: -0.9%;\n  left: -1.9%;\n  background-color: transparent;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  z-index: 15;\n}\n.main .person .yuhangsuits {\n  position: absolute;\n  width: 106%;\n  height: 100%;\n  top: -3%;\n  left: -3.5%;\n  background-color: transparent;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  z-index: 15;\n}\n.main .person .wuyisuits {\n  position: absolute;\n  width: 177%;\n  height: 100%;\n  top: 1.5%;\n  left: -40.5%;\n  background-color: transparent;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  z-index: 15;\n}\n.main .mperson {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: transparent;\n  background-image: url('mperson.png');\n  background-size: 100%;\n  background-repeat: no-repeat;\n}\n.main .mperson .mhair {\n  position: absolute;\n  width: 105%;\n  height: 100%;\n  background-color: transparent;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  z-index: 11;\n  top: -4%;\n  left: -1.5%;\n}\n.main .mperson .mpants {\n  position: absolute;\n  width: 96%;\n  height: 100%;\n  left: -1.5%;\n  top: -0.3%;\n  background-color: transparent;\n  background-size: 108%;\n  background-repeat: no-repeat;\n  z-index: 13;\n}\n.main .mperson .mcoats {\n  position: absolute;\n  width: 105%;\n  height: 100%;\n  background-color: transparent;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  top: -0.3%;\n  left: -2.3%;\n  z-index: 15;\n}\n.main .mperson .mjew {\n  position: absolute;\n  width: 120%;\n  height: 100%;\n  top: -10%;\n  left: -10%;\n  background-color: transparent;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  z-index: 16;\n}\n.main .mperson .mshoes {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 1.2%;\n  left: -0.5%;\n  background-color: transparent;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  z-index: 12;\n}\n.main .mperson .msuits {\n  position: absolute;\n  width: 105%;\n  height: 100%;\n  top: -4%;\n  left: -2%;\n  background-color: transparent;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  z-index: 15;\n}\n"

/***/ }),

/***/ "./src/app/person/person.component.ts":
/*!********************************************!*\
  !*** ./src/app/person/person.component.ts ***!
  \********************************************/
/*! exports provided: PersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonComponent", function() { return PersonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PersonComponent = /** @class */ (function () {
    function PersonComponent() {
    }
    PersonComponent.prototype.ngOnInit = function () {
        this.personObj = {
            gender: this.gender,
            click: 'hair',
            hair: {
                has: true,
                index: 0,
            },
            jew: {
                has: false,
                index: 0,
            },
            coat: {
                has: true,
                index: 0,
            },
            suits: {
                has: false,
                index: 0,
                hasShoes: false,
                hasJew: false
            },
            pants: {
                has: true,
                index: 0,
            },
            shoes: {
                has: false,
                index: 0,
            }
        };
    };
    PersonComponent.prototype.ngOnChanges = function (changes) {
        this.personObj = this.child2;
    };
    PersonComponent.prototype.ngDoCheck = function () {
        console.log(this.personObj.gender, 'gender--->');
        if (this.bgData) {
            this.personObj = this.bgData;
        }
        if (this.personObj) {
            if (this.personObj.click == 'suits') {
                this.personObj.coat.has = false;
                this.personObj.pants.has = false;
                if (this.personObj.suits.hasShoes) {
                    this.personObj.shoes.has = false;
                }
                if (this.personObj.suits.hasJew) {
                    this.personObj.jew.has = false;
                }
            }
            if (this.personObj.click == 'coat') {
                this.personObj.suits.has = false;
            }
            if (this.personObj.click == 'pants') {
                this.personObj.suits.has = false;
            }
            console.log('数据变化了');
        }
    };
    PersonComponent.prototype.suits = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PersonComponent.prototype, "bgData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Wear)
    ], PersonComponent.prototype, "child2", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PersonComponent.prototype, "gender", void 0);
    PersonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-person',
            template: __webpack_require__(/*! ./person.component.html */ "./src/app/person/person.component.html"),
            styles: [__webpack_require__(/*! ./person.component.less */ "./src/app/person/person.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], PersonComponent);
    return PersonComponent;
}());

var Wear = /** @class */ (function () {
    function Wear() {
    }
    return Wear;
}());


/***/ }),

/***/ "./src/app/select-input/select-input.component.html":
/*!**********************************************************!*\
  !*** ./src/app/select-input/select-input.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"select\">\r\n  <div class=\"content\" *ngIf=\" id == 'top1'\">\r\n\r\n    <div *ngIf=\"gender == 1 \">\r\n        <div class=\"img-name\" (click)=\"select(clothesArr.hairArr)\">\r\n            <img src=\"../../assets/btn/select-1.png\" alt=\"\">\r\n          </div>\r\n          <div class=\"img-name\" (click)=\"select(clothesArr.jewArr)\">\r\n            <img src=\"../../assets/btn/select-2.png\" alt=\"\">\r\n          </div>\r\n          <div class=\"img-name\" (click)=\"select(clothesArr.coatArr)\"> \r\n            <img src=\"../../assets/btn/select-3.png\" alt=\"\">\r\n          </div>\r\n          <div class=\"img-name\" (click)=\"select(clothesArr.suitsArr)\"> \r\n            <img src=\"../../assets/btn/select-4.png\" alt=\"\">\r\n          </div>\r\n          <div class=\"img-name\" (click)=\"select(clothesArr.pantsArr)\">\r\n            <img src=\"../../assets/btn/select-5.png\" alt=\"\">\r\n          </div>\r\n          <div class=\"img-name\" (click)=\"select(clothesArr.shoesArr)\">\r\n            <img src=\"../../assets/btn/select-6.png\" alt=\"\">\r\n          </div>\r\n    </div>\r\n    <div *ngIf=\"gender == 2 \">\r\n        <div class=\"img-name\" (click)=\"select(mclothesArr.hairArr)\">\r\n            <img src=\"../../assets/btn/select-1.png\" alt=\"\">\r\n          </div>\r\n          <div class=\"img-name\" (click)=\"select(mclothesArr.jewArr)\">\r\n            <img src=\"../../assets/btn/select-2.png\" alt=\"\">\r\n          </div>\r\n          <div class=\"img-name\" (click)=\"select(mclothesArr.coatArr)\"> \r\n            <img src=\"../../assets/btn/select-3.png\" alt=\"\">\r\n          </div>\r\n          <div class=\"img-name\" (click)=\"select(mclothesArr.suitsArr)\"> \r\n            <img src=\"../../assets/btn/select-4.png\" alt=\"\">\r\n          </div>\r\n          <div class=\"img-name\" (click)=\"select(mclothesArr.pantsArr)\">\r\n            <img src=\"../../assets/btn/select-5.png\" alt=\"\">\r\n          </div>\r\n          <div class=\"img-name\" (click)=\"select(mclothesArr.shoesArr)\">\r\n            <img src=\"../../assets/btn/select-6.png\" alt=\"\">\r\n          </div>\r\n    </div>\r\n          \r\n  </div>\r\n  <div class=\"content\" *ngIf=\"id == 'clothes'\">\r\n      <div class=\"img-name\" (click)=\" id = 'top1'\">\r\n          <div *ngIf=\"obj.gender == 1\">\r\n              <img src=\"../../assets/btn/f-back.png\" alt=\"\">\r\n          </div>\r\n          <div *ngIf=\"obj.gender == 2\">\r\n              <img src=\"../../assets/btn/m-back.png\" alt=\"\">\r\n            </div>\r\n        </div>\r\n      <div class=\"img-name\" *ngFor=\"let index of showArr;let i=index\">\r\n          <!-- <div class=\"img-name\" *ngFor=\"let index of showArr;let i=index\" (click)=\"change()\"> -->\r\n          <!-- <img src=\"../../assets/jew/jew (1).png\" alt=\"\"> -->\r\n          <img  (click)=\"change(index.src,index.id)\" [src]=\"index.src\" alt=\"\">\r\n        </div>\r\n        <div class=\"img-name\" (click)=\" id = 'top1'\">\r\n          <div *ngIf=\"obj.gender == 1\">\r\n              <img src=\"../../assets/btn/f-back.png\" alt=\"\">\r\n          </div>\r\n          <div *ngIf=\"obj.gender == 2\">\r\n              <img src=\"../../assets/btn/m-back.png\" alt=\"\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n "

/***/ }),

/***/ "./src/app/select-input/select-input.component.less":
/*!**********************************************************!*\
  !*** ./src/app/select-input/select-input.component.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".select {\n  width: 1.9rem;\n  height: 10.5rem;\n  background-color: #efc717;\n  border: 0.15rem solid #e5a80c;\n  border-radius: 0.75rem;\n}\n.select .content {\n  padding: 0.3rem;\n  width: 1.3rem;\n  height: 92%;\n  overflow: hidden;\n  overflow-y: scroll;\n}\n.select .content .img-name {\n  text-align: center;\n  width: 1.3rem;\n  padding-bottom: 0.6rem;\n}\n.select .content .img-name img {\n  width: 1.2rem;\n}\n"

/***/ }),

/***/ "./src/app/select-input/select-input.component.ts":
/*!********************************************************!*\
  !*** ./src/app/select-input/select-input.component.ts ***!
  \********************************************************/
/*! exports provided: SelectInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectInputComponent", function() { return SelectInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SelectInputComponent = /** @class */ (function () {
    function SelectInputComponent() {
        this.id = 'top1';
        this.clothesArr = [];
        this.mclothesArr = [];
        this.showArr = [];
        this.eventChild1 = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SelectInputComponent.prototype.ngOnInit = function () {
        this.obj = {
            gender: this.gender,
            click: 'hair',
            hair: {
                has: true,
                index: 0,
            },
            jew: {
                has: false,
                index: 0,
            },
            coat: {
                has: true,
                index: 0,
            },
            suits: {
                has: false,
                index: 0,
                hasShoes: false,
                hasJew: false
            },
            pants: {
                has: true,
                index: 0,
            },
            shoes: {
                has: false,
                index: 0,
            }
        };
        this.clothesArr = {
            hairArr: [
                { src: '../../assets/hair/hair (1).png', id: '1' },
                { src: '../../assets/hair/hair (2).png', id: '2' },
                { src: '../../assets/hair/hair (3).png', id: '3' },
                { src: '../../assets/hair/hair (4).png', id: '4' },
                { src: '../../assets/hair/hair (5).png', id: '5' },
            ],
            jewArr: [
                { src: '../../assets/jew/jew (1).png', id: '1' },
                { src: '../../assets/jew/jew (2).png', id: '2' },
                // {src:'../../assets/jew/jew (3).png',id:'3'},
                // {src:'../../assets/jew/jew (4).png',id:'4'},
                { src: '../../assets/jew/jew (5).png', id: '5' },
                { src: '../../assets/jew/jew (6).png', id: '6' },
                { src: '../../assets/jew/jew (7).png', id: '7' },
                { src: '../../assets/jew/jew (8).png', id: '8' },
                { src: '../../assets/jew/jew (9).png', id: '9' },
                { src: '../../assets/jew/jew (10).png', id: '10' },
                { src: '../../assets/jew/jew (11).png', id: '11' },
                { src: '../../assets/jew/jew (12).png', id: '12' },
            ],
            coatArr: [
                { src: '../../assets/coat/coat (1).png', id: '1' },
                { src: '../../assets/coat/coat (2).png', id: '2' },
                { src: '../../assets/coat/coat (3).png', id: '3' },
                { src: '../../assets/coat/coat (4).png', id: '4' },
                { src: '../../assets/coat/coat (5).png', id: '5' },
                { src: '../../assets/coat/coat (6).png', id: '6' },
                { src: '../../assets/coat/coat (7).png', id: '7' },
                { src: '../../assets/coat/coat (8).png', id: '8' },
                { src: '../../assets/coat/coat (9).png', id: '9' },
                { src: '../../assets/coat/coat (10).png', id: '10' },
                { src: '../../assets/coat/coat (11).png', id: '11' },
                { src: '../../assets/coat/coat (12).png', id: '12' },
                { src: '../../assets/coat/coat (13).png', id: '13' },
                { src: '../../assets/coat/coat (14).png', id: '14' },
                { src: '../../assets/coat/coat (15).png', id: '15' },
                { src: '../../assets/coat/coat (16).png', id: '16' },
                { src: '../../assets/coat/coat (17).png', id: '17' },
                { src: '../../assets/coat/coat (18).png', id: '18' },
                { src: '../../assets/coat/coat (19).png', id: '19' },
                { src: '../../assets/coat/coat (20).png', id: '20' },
            ],
            suitsArr: [
                { src: '../../assets/suits/suits (1).png', id: '1', hasShoes: false, hasJew: false },
                { src: '../../assets/suits/suits (2).png', id: '2', hasShoes: false, hasJew: false },
                { src: '../../assets/suits/suits (3).png', id: '3', hasShoes: false, hasJew: false },
                { src: '../../assets/suits/suits (4).png', id: '4', hasShoes: true, hasJew: true },
                { src: '../../assets/suits/suits (5).png', id: '5', hasShoes: true, hasJew: true },
                { src: '../../assets/suits/suits (6).png', id: '6', hasShoes: true, hasJew: true },
                { src: '../../assets/suits/suits (7).png', id: '7', hasShoes: false, hasJew: false },
                { src: '../../assets/suits/suits (8).png', id: '8', hasShoes: false, hasJew: false },
                { src: '../../assets/suits/suits (9).png', id: '9', hasShoes: false, hasJew: false },
                { src: '../../assets/suits/suits (10).png', id: '10', hasShoes: false, hasJew: false },
                { src: '../../assets/suits/suits (11).png', id: '11', hasShoes: false, hasJew: false },
                { src: '../../assets/suits/suits (12).png', id: '12', hasShoes: false, hasJew: false },
                { src: '../../assets/suits/suits (13).png', id: '13', hasShoes: false, hasJew: false },
                { src: '../../assets/suits/suits (14).png', id: '14', hasShoes: false, hasJew: false },
                { src: '../../assets/suits/suits (15).png', id: '15', hasShoes: false, hasJew: false },
                { src: '../../assets/suits/suits (16).png', id: '16', hasShoes: false, hasJew: false },
                { src: '../../assets/suits/suits (17).png', id: '17', hasShoes: false, hasJew: false },
                { src: '../../assets/suits/suits (18).png', id: '18', hasShoes: false, hasJew: false },
                { src: '../../assets/suits/suits (19).png', id: '19', hasShoes: false, hasJew: false },
                { src: '../../assets/suits/suits (20).png', id: '20', hasShoes: false, hasJew: false },
                { src: '../../assets/suits/suits (21).png', id: '21', hasShoes: false, hasJew: false },
                { src: '../../assets/suits/suits (22).png', id: '22', hasShoes: false, hasJew: false },
                { src: '../../assets/suits/suits (23).png', id: '23', hasShoes: false, hasJew: false },
                { src: '../../assets/suits/suits (24).png', id: '24', hasShoes: false, hasJew: false },
                { src: '../../assets/suits/suits (25).png', id: '25', hasShoes: false, hasJew: false },
                { src: '../../assets/suits/suits (26).png', id: '26', hasShoes: false, hasJew: false },
                { src: '../../assets/suits/suits (27).png', id: '27', hasShoes: false, hasJew: false },
                { src: '../../assets/suits/suits (28).png', id: '28', hasShoes: false, hasJew: false },
                { src: '../../assets/suits/suits (29).png', id: '29', hasShoes: false, hasJew: false },
                { src: '../../assets/suits/suits (30).png', id: '30', hasShoes: false, hasJew: false },
            ],
            pantsArr: [
                { src: '../../assets/pants/pants (1).png', id: '1' },
                { src: '../../assets/pants/pants (2).png', id: '2' },
                { src: '../../assets/pants/pants (3).png', id: '3' },
                { src: '../../assets/pants/pants (4).png', id: '4' },
                { src: '../../assets/pants/pants (5).png', id: '5' },
                { src: '../../assets/pants/pants (6).png', id: '6' },
                { src: '../../assets/pants/pants (7).png', id: '7' },
                { src: '../../assets/pants/pants (8).png', id: '8' },
                { src: '../../assets/pants/pants (9).png', id: '9' },
                { src: '../../assets/pants/pants (10).png', id: '10' },
            ],
            shoesArr: [
                { src: '../../assets/shoes/shoes (1).png', id: '1' },
                { src: '../../assets/shoes/shoes (2).png', id: '2' },
                { src: '../../assets/shoes/shoes (3).png', id: '3' },
                { src: '../../assets/shoes/shoes (4).png', id: '4' },
                { src: '../../assets/shoes/shoes (5).png', id: '5' },
                { src: '../../assets/shoes/shoes (6).png', id: '6' },
                { src: '../../assets/shoes/shoes (7).png', id: '7' },
                { src: '../../assets/shoes/shoes (8).png', id: '8' },
                { src: '../../assets/shoes/shoes (9).png', id: '9' },
                { src: '../../assets/shoes/shoes (10).png', id: '10' },
                { src: '../../assets/shoes/shoes (11).png', id: '11' },
                { src: '../../assets/shoes/shoes (12).png', id: '12' },
                { src: '../../assets/shoes/shoes (13).png', id: '13' },
                { src: '../../assets/shoes/shoes (14).png', id: '14' },
            ]
        };
        this.mclothesArr = {
            hairArr: [
                { src: '../../assets/hair/mhair (1).png', id: '1' },
                { src: '../../assets/hair/mhair (2).png', id: '2' },
                { src: '../../assets/hair/mhair (3).png', id: '3' },
                { src: '../../assets/hair/mhair (4).png', id: '4' },
                { src: '../../assets/hair/mhair (5).png', id: '5' },
            ],
            jewArr: [
                { src: '../../assets/jew/jew (1).png', id: '1' },
                { src: '../../assets/jew/jew (2).png', id: '2' },
                // {src:'../../assets/jew/jew (3).png',id:'3'},
                // {src:'../../assets/jew/jew (4).png',id:'4'},
                { src: '../../assets/jew/jew (5).png', id: '5' },
                { src: '../../assets/jew/jew (6).png', id: '6' },
                { src: '../../assets/jew/jew (7).png', id: '7' },
                { src: '../../assets/jew/jew (8).png', id: '8' },
                { src: '../../assets/jew/jew (9).png', id: '9' },
                { src: '../../assets/jew/jew (10).png', id: '10' },
                { src: '../../assets/jew/jew (11).png', id: '11' },
                { src: '../../assets/jew/jew (12).png', id: '12' },
            ],
            coatArr: [
                { src: '../../assets/coat/mcoat (1).png', id: '1' },
                { src: '../../assets/coat/mcoat (2).png', id: '2' },
                { src: '../../assets/coat/mcoat (3).png', id: '3' },
                { src: '../../assets/coat/mcoat (4).png', id: '4' },
                { src: '../../assets/coat/mcoat (5).png', id: '5' },
                { src: '../../assets/coat/mcoat (6).png', id: '6' },
                { src: '../../assets/coat/mcoat (7).png', id: '7' },
                { src: '../../assets/coat/mcoat (8).png', id: '8' },
                { src: '../../assets/coat/mcoat (9).png', id: '9' },
                { src: '../../assets/coat/mcoat (10).png', id: '10' },
                { src: '../../assets/coat/mcoat (11).png', id: '11' },
                { src: '../../assets/coat/mcoat (12).png', id: '12' },
                { src: '../../assets/coat/mcoat (13).png', id: '13' },
                { src: '../../assets/coat/mcoat (14).png', id: '14' },
                { src: '../../assets/coat/mcoat (15).png', id: '15' },
                { src: '../../assets/coat/mcoat (16).png', id: '16' },
                { src: '../../assets/coat/mcoat (17).png', id: '17' },
                { src: '../../assets/coat/mcoat (18).png', id: '18' },
                { src: '../../assets/coat/mcoat (19).png', id: '19' },
                { src: '../../assets/coat/mcoat (20).png', id: '20' },
                { src: '../../assets/coat/mcoat (21).png', id: '21' },
                { src: '../../assets/coat/mcoat (22).png', id: '22' },
                { src: '../../assets/coat/mcoat (23).png', id: '23' },
                { src: '../../assets/coat/mcoat (24).png', id: '24' },
                { src: '../../assets/coat/mcoat (25).png', id: '25' },
            ],
            suitsArr: [
                { src: '../../assets/suits/msuits (1).png', id: '1', hasShoes: true, hasJew: true },
                { src: '../../assets/suits/msuits (2).png', id: '2', hasShoes: true, hasJew: true },
                { src: '../../assets/suits/msuits (3).png', id: '3', hasShoes: true, hasJew: true },
            ],
            pantsArr: [
                { src: '../../assets/mpants/mpants (2).png', id: '2' },
                { src: '../../assets/mpants/mpants (3).png', id: '3' },
                { src: '../../assets/mpants/mpants (1).png', id: '1' },
                { src: '../../assets/mpants/mpants (4).png', id: '4' },
                { src: '../../assets/mpants/mpants (5).png', id: '5' },
                { src: '../../assets/mpants/mpants (6).png', id: '6' },
                { src: '../../assets/mpants/mpants (7).png', id: '7' },
                { src: '../../assets/mpants/mpants (8).png', id: '8' },
                { src: '../../assets/mpants/mpants (9).png', id: '9' },
                { src: '../../assets/mpants/mpants (10).png', id: '10' },
                { src: '../../assets/mpants/mpants (11).png', id: '11' },
                { src: '../../assets/mpants/mpants (12).png', id: '12' },
                { src: '../../assets/mpants/mpants (13).png', id: '13' },
                { src: '../../assets/mpants/mpants (14).png', id: '14' },
            ],
            shoesArr: [
                { src: '../../assets/mshoes/mshoes (1).png', id: '1' },
                { src: '../../assets/mshoes/mshoes (2).png', id: '2' },
                { src: '../../assets/mshoes/mshoes (3).png', id: '3' },
                { src: '../../assets/mshoes/mshoes (4).png', id: '4' },
                { src: '../../assets/mshoes/mshoes (5).png', id: '5' },
                { src: '../../assets/mshoes/mshoes (6).png', id: '6' },
                { src: '../../assets/mshoes/mshoes (7).png', id: '7' },
                { src: '../../assets/mshoes/mshoes (8).png', id: '8' },
                { src: '../../assets/mshoes/mshoes (9).png', id: '9' },
                { src: '../../assets/mshoes/mshoes (10).png', id: '10' },
                { src: '../../assets/mshoes/mshoes (11).png', id: '11' },
                { src: '../../assets/mshoes/mshoes (12).png', id: '12' },
                { src: '../../assets/mshoes/mshoes (13).png', id: '13' },
            ]
        };
    };
    SelectInputComponent.prototype.select = function (param) {
        this.showArr = param;
        this.id = 'clothes';
    };
    SelectInputComponent.prototype.change = function (src, i) {
        if (src.includes('hair')) {
            this.obj.click = 'hair';
            this.obj.hair.has = true; //obj的第一位是种类的意思
            this.obj.hair.index = i; //obj第二位是第几件衣服的意思
            this.eventChild1.emit(this.obj);
        }
        if (src.includes('coat')) {
            this.obj.click = 'coat';
            this.obj.coat.has = true;
            this.obj.coat.index = i;
            this.eventChild1.emit(this.obj);
        }
        if (src.includes('suits')) {
            this.obj.click = 'suits';
            this.obj.suits.has = true;
            this.obj.suits.index = i;
            if (src.includes('4')) {
                this.obj.suits.hasShoes = true;
                this.obj.suits.hasJew = true;
            }
            else if (src.includes('5')) {
                this.obj.suits.hasShoes = true;
                this.obj.suits.hasJew = true;
            }
            else if (src.includes('6')) {
                this.obj.suits.hasShoes = true;
                this.obj.suits.hasJew = true;
            }
            this.eventChild1.emit(this.obj);
        }
        if (src.includes('pants')) {
            this.obj.click = 'pants';
            this.obj.pants.has = true;
            this.obj.pants.index = i;
            this.eventChild1.emit(this.obj);
        }
        if (src.includes('shoes')) {
            this.obj.click = 'shoes';
            this.obj.shoes.has = true;
            this.obj.shoes.index = i;
            this.eventChild1.emit(this.obj);
        }
        if (src.includes('jew')) {
            this.obj.click = 'jew';
            this.obj.jew.has = true;
            this.obj.jew.index = i;
            this.eventChild1.emit(this.obj);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SelectInputComponent.prototype, "eventChild1", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SelectInputComponent.prototype, "gender", void 0);
    SelectInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-select-input',
            template: __webpack_require__(/*! ./select-input.component.html */ "./src/app/select-input/select-input.component.html"),
            styles: [__webpack_require__(/*! ./select-input.component.less */ "./src/app/select-input/select-input.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], SelectInputComponent);
    return SelectInputComponent;
}());

var Wear = /** @class */ (function () {
    function Wear() {
    }
    return Wear;
}());


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Program Files\nodejs\post\postApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map