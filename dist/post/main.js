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
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _person_person_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./person/person.component */ "./src/app/person/person.component.ts");
/* harmony import */ var _select_input_select_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-input/select-input.component */ "./src/app/select-input/select-input.component.ts");
/* harmony import */ var _clothes_select_clothes_select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clothes-select/clothes-select.component */ "./src/app/clothes-select/clothes-select.component.ts");
/* harmony import */ var _background_select_background_select_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./background-select/background-select.component */ "./src/app/background-select/background-select.component.ts");
/* harmony import */ var _gender_select_gender_select_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gender-select/gender-select.component */ "./src/app/gender-select/gender-select.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bg_select_input_bg_select_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bg-select-input/bg-select-input.component */ "./src/app/bg-select-input/bg-select-input.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    { path: 'home/:id', component: _gender_select_gender_select_component__WEBPACK_IMPORTED_MODULE_8__["GenderSelectComponent"] },
    { path: 'clothes', component: _clothes_select_clothes_select_component__WEBPACK_IMPORTED_MODULE_6__["ClothesSelectComponent"] },
    { path: 'bgSelect', component: _background_select_background_select_component__WEBPACK_IMPORTED_MODULE_7__["BackgroundSelectComponent"] },
    { path: '**', component: _gender_select_gender_select_component__WEBPACK_IMPORTED_MODULE_8__["GenderSelectComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _person_person_component__WEBPACK_IMPORTED_MODULE_4__["PersonComponent"],
                _select_input_select_input_component__WEBPACK_IMPORTED_MODULE_5__["SelectInputComponent"],
                _clothes_select_clothes_select_component__WEBPACK_IMPORTED_MODULE_6__["ClothesSelectComponent"],
                _background_select_background_select_component__WEBPACK_IMPORTED_MODULE_7__["BackgroundSelectComponent"],
                _gender_select_gender_select_component__WEBPACK_IMPORTED_MODULE_8__["GenderSelectComponent"],
                _bg_select_input_bg_select_input_component__WEBPACK_IMPORTED_MODULE_10__["BgSelectInputComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_loading__WEBPACK_IMPORTED_MODULE_2__["LoadingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
                // AppRoutingModule
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
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

module.exports = "<div class=\"main\">\r\n    <div class=\"top\">\r\n        <img src=\"../../assets/background/select-top.png\" alt=\"\">\r\n    </div>\r\n    <div class=\"middle\">\r\n        <div *ngIf=\"longPutImg\">\r\n            <img [src]=\"canvasImg\" alt=\"\" style=\"height: 100%;\">\r\n        </div>\r\n        <div *ngIf=\"!longPutImg\">\r\n            <div class=\"white\" [style.background-image]=\"'url(' + '../../assets/background/bg'+ bgImgNumber + '.jpg'+ ')'\" id=\"mainTable\">\r\n                <div *ngIf=\"!getPost\">\r\n                    <input type=\"text\" maxlength=\"6\" placeholder=\"输入我的名字\" #box (keyup)=\"onKey(box.value)\">\r\n                </div>\r\n                <div *ngIf=\"getPost\">\r\n                    <button value=\"\">{{name}}</button>\r\n                </div>\r\n                <div class=\"erwei\" *ngIf=\"getPost\"></div>\r\n                <div class=\"person\">\r\n                    <app-person [bgData]='_str'></app-person>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"select-input\">\r\n\r\n        <div *ngIf=\"longPutImg\" class=\"center\">\r\n            <div >长按海报保存图片</div>\r\n        </div>\r\n\r\n        <div *ngIf=\"!longPutImg\">\r\n            <div *ngIf=\"!getPost\">\r\n                <div class=\"left-btn\" (click)=\"backClothes()\">\r\n                    <div *ngIf=\"id == 1\">\r\n                        <img src=\"../../assets/btn/f-back.png\" alt=\"\">\r\n                    </div>\r\n                    <div *ngIf=\"id == 2\">\r\n                        <img src=\"../../assets/btn/m-back.png\" alt=\"\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"bg-slide\">\r\n                    <app-bg-select-input (eventbg)=\"getInfoFromBg($event)\"></app-bg-select-input>\r\n                </div>\r\n                <div class=\"right-btn\" (click)=\"bornPost()\">\r\n                    <div *ngIf=\"id == 1\">\r\n                        <img src=\"../../assets/btn/f-born.png\" alt=\"\">\r\n                    </div>\r\n                    <div *ngIf=\"id == 2\">\r\n                        <img src=\"../../assets/btn/m-born.png\" alt=\"\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"getPost\">\r\n                <div class=\"back-btn\" (click)=\"backClothes()\">\r\n                    <div *ngIf=\"id == 1\">\r\n                        <img src=\"../../assets/btn/f-back.png\" alt=\"\">\r\n                    </div>\r\n                    <div *ngIf=\"id == 2\">\r\n                        <img src=\"../../assets/btn/m-back.png\" alt=\"\">\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"born-btn\" (click)=\"saveImg()\">\r\n                    <div *ngIf=\"id == 1\">\r\n                        <img src=\"../../assets/btn/f-save.png\" alt=\"\">\r\n                    </div>\r\n                    <div *ngIf=\"id == 2\">\r\n                        <img src=\"../../assets/btn/m-save.png\" alt=\"\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"bottom\">\r\n        <img src=\"../../assets/background/select-bottom.png\" alt=\"\">\r\n    </div>\r\n    <!-- <img src=\"{{canvasImg}}\" /> -->\r\n</div>"

/***/ }),

/***/ "./src/app/background-select/background-select.component.less":
/*!********************************************************************!*\
  !*** ./src/app/background-select/background-select.component.less ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  height: 100%;\n}\n.main .top {\n  height: 1.4rem;\n}\n.main .top img {\n  width: 100%;\n  padding-top: 0.35rem;\n}\n.main .bottom {\n  margin-top: calc(100% - 6.4rem);\n}\n.main .bottom img {\n  width: 100%;\n}\n.main .middle {\n  height: 7.2rem;\n  text-align: center;\n  padding-top: 0.3rem;\n}\n.main .middle .white {\n  width: 4.5rem;\n  height: 7.2rem;\n  background-color: #fff;\n  margin: 0 auto;\n  background-color: transparent;\n  top: 0;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  background-position: 10% 10%;\n  z-index: 5;\n}\n.main .middle .white input {\n  margin: 0.5rem auto auto 1rem;\n  height: 0.65rem;\n  width: 2rem;\n  font-size: 0.29rem;\n  font-weight: bold;\n  border: none;\n  outline: none;\n}\n.main .middle .white button {\n  margin: 0.5rem auto auto 1rem;\n  height: 0.65rem;\n  width: 2rem;\n  font-size: 0.29rem;\n  font-weight: bold;\n  border: none;\n  outline: none;\n  text-align: left;\n  background-color: #fff;\n}\n.main .middle .white input::-webkit-input-placeholder {\n  font-weight: normal;\n}\n.main .middle .white input::-ms-input-placeholder {\n  font-weight: normal;\n}\n.main .middle .white input::placeholder {\n  font-weight: normal;\n}\n.main .middle .white input:focus {\n  border: none;\n  outline: none;\n}\n.main .middle .white input:disabled {\n  background-color: transparent;\n  color: #333;\n}\n.main .middle .white .nameshow {\n  margin: 0.5rem auto auto 1rem;\n  height: 2.65rem;\n  width: 2rem;\n  font-size: 0.45rem;\n  font-weight: bold;\n  border: none;\n  outline: none;\n}\n.main .middle .white .person {\n  padding-top: 0.65rem;\n  width: 1.8rem;\n  float: right;\n  height: 4.7rem;\n}\n.main .middle .white .erwei {\n  width: 2rem;\n  float: left;\n  height: 100%;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfMAAALGCAMAAABmjoj6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODZCNjMyQTVBN0I2MTFFOEEzODNDM0NBMDVENDk4ODUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODZCNjMyQTZBN0I2MTFFOEEzODNDM0NBMDVENDk4ODUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4NkI2MzJBM0E3QjYxMUU4QTM4M0MzQ0EwNUQ0OTg4NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4NkI2MzJBNEE3QjYxMUU4QTM4M0MzQ0EwNUQ0OTg4NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ple7/BQAAAAwUExURQgE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);\n  background-size: 50%;\n  background-repeat: no-repeat;\n  background-position: 30% 78%;\n}\n.main .select-input {\n  height: 1.6rem;\n  padding-top: 0.8rem;\n  position: relative;\n}\n.main .select-input .center {\n  text-align: center;\n}\n.main .select-input img {\n  height: 1.8rem;\n}\n.main .select-input .left-btn {\n  position: absolute;\n  top: 0.5rem;\n  left: 0.2rem;\n}\n.main .select-input .right-btn {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.2rem;\n}\n.main .select-input .bg-slide {\n  width: 3.2rem;\n  position: absolute;\n  top: 0.5rem;\n  left: 50%;\n  margin-left: -2.1rem;\n}\n.main .select-input .back-btn {\n  position: absolute;\n  top: 0.5rem;\n  left: 2.2rem;\n}\n.main .select-input .born-btn {\n  position: absolute;\n  top: 0.5rem;\n  right: 2.2rem;\n}\n"

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
        this.name = "";
        this.canvasImg = "";
        this.longPutImg = false; //长按图片保存
    }
    BackgroundSelectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.name = "";
        this.route.queryParams.subscribe(function (params) {
            _this.id = params["id"];
            _this.str = params["obj"];
            _this.url = params["url"];
        });
        if (this.url == "clo") {
            this._str = JSON.parse(decodeURI(this.str));
        }
    };
    BackgroundSelectComponent.prototype.ngDoCheck = function () { };
    BackgroundSelectComponent.prototype.getInfoFromBg = function (data) {
        this.bgImgNumber = data;
    };
    BackgroundSelectComponent.prototype.backClothes = function () {
        var obj = encodeURI(JSON.stringify(this._str));
        this.router.navigate(["clothes"], {
            queryParams: { id: this.id, obj: obj, url: "bg" }
        });
    };
    BackgroundSelectComponent.prototype.bornPost = function () {
        this.getPost = true;
    };
    BackgroundSelectComponent.prototype.onKey = function (value) {
        this.name = value;
        console.log(value, "名字");
    };
    BackgroundSelectComponent.prototype.saveImg = function () {
        this.longPutImg = true;
        this.takeScreenShot();
    };
    BackgroundSelectComponent.prototype.takeScreenShot = function () {
        var _this = this;
        // 使用html2canvas插件，将数据源中的数据转换成画布。
        html2canvas__WEBPACK_IMPORTED_MODULE_2__(document.querySelector("#mainTable")).then(function (canvas) {
            // 修改生成的宽度
            canvas.style.width = "450px";
            canvas.style.height = "720px";
            console.log(canvas, "生成的画布文件");
            _this.canvasImg = canvas.toDataURL("image/png");
            // this.saveImgLocal();
        });
        // this.downloadFile("导出图片", this.canvasImg);
    };
    BackgroundSelectComponent.prototype.downloadFile = function (filename, content) {
        var base64Img = content;
        var oA = document.createElement("a");
        oA.href = base64Img;
        oA.download = filename;
        var event = document.createEvent("MouseEvents");
        event.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        oA.dispatchEvent(event);
    };
    // 方法调用
    BackgroundSelectComponent.prototype.saveImgLocal = function () {
        this.downloadFile("川农人" + this.name, this.canvasImg);
    };
    BackgroundSelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-background-select",
            template: __webpack_require__(/*! ./background-select.component.html */ "./src/app/background-select/background-select.component.html"),
            styles: [__webpack_require__(/*! ./background-select.component.less */ "./src/app/background-select/background-select.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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

module.exports = "<div class=\"main\">\r\n  <div class=\"left\">\r\n    <div>\r\n      <span *ngFor=\"let item of bgArr\">\r\n        <img [src]=\"item.src\" alt=\"\" (click)=\"selectBg(item.id)\">\r\n      </span>\r\n    </div>\r\n  </div>\r\n  <div class=\"right\"> &gt;</div>\r\n</div>"

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
                src: "../../assets/background/select-bg-btn (1).png",
                id: 1
            },
            {
                src: "../../assets/background/select-bg-btn (2).png",
                id: 2
            },
            {
                src: "../../assets/background/select-bg-btn (3).png",
                id: 3
            },
            {
                src: "../../assets/background/select-bg-btn (4).png",
                id: 4
            },
            {
                src: "../../assets/background/select-bg-btn (5).png",
                id: 5
            }
        ];
    };
    BgSelectInputComponent.prototype.selectBg = function (id) {
        console.log("emit");
        this.eventbg.emit(id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BgSelectInputComponent.prototype, "eventbg", void 0);
    BgSelectInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-bg-select-input",
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

module.exports = "<div class=\"main\">\r\n  <div class=\"top\">\r\n    <img src=\"../../assets/background/select-top.png\" alt=\"\">\r\n  </div>\r\n  <div class=\"middle\">\r\n    <div class=\"left\">\r\n      <div class=\"select\">\r\n        <app-select-input (eventChild1)=\"getInfoFromChild1($event)\" [gender]=\"id\"></app-select-input>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"right\">\r\n      <div class=\"person\">\r\n        <app-person [child2]=\"faList\" [gender]=\"id\"></app-person>\r\n      </div>\r\n      <div class=\"botton\">\r\n        <div *ngIf=\"id == 1\">\r\n          <div class=\"left-btn\" (click)=\"back()\"><img src=\"../../assets/btn/f-back.png\" alt=\"\"></div>\r\n          <div class=\"right-btn\" (click)=\"toSelectBg()\"><img src=\"../../assets/btn/f-select-bg.png\" alt=\"\"></div>\r\n        </div>\r\n        <div *ngIf=\"id == 2\">\r\n          <div class=\"left-btn\" (click)=\"back()\"><img src=\"../../assets/btn/m-back.png\" alt=\"\"></div>\r\n          <div class=\"right-btn\" (click)=\"toSelectBg()\"><img src=\"../../assets/btn/m-select-bg.png\" alt=\"\"></div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"bottom\">\r\n    <img src=\"../../assets/background/select-bottom.png\" alt=\"\">\r\n  </div>\r\n</div>"

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
            _this.id = params["id"];
            _this.str = params["obj"];
            _this.url = params["url"];
        });
        if (this.url == "bg") {
            this.faList = JSON.parse(decodeURI(this.str));
        }
        else if (this.url == "home") {
        }
    };
    ClothesSelectComponent.prototype.back = function () {
        this.router.navigate(["home"]);
    };
    ClothesSelectComponent.prototype.toSelectBg = function () {
        if (!this.faList) {
            this.faList = {
                gender: this.id,
                click: "hair",
                hair: {
                    has: true,
                    index: 0
                },
                jew: {
                    has: false,
                    index: 0
                },
                coat: {
                    has: true,
                    index: 0
                },
                suits: {
                    has: false,
                    index: 0,
                    hasShoes: false,
                    hasJew: false
                },
                pants: {
                    has: true,
                    index: 0
                },
                shoes: {
                    has: false,
                    index: 0
                }
            };
        }
        var str = encodeURI(JSON.stringify(this.faList));
        this.router.navigate(["bgSelect"], {
            queryParams: { id: this.id, obj: str, url: "clo" }
        }); //url代表自己身url
    };
    ClothesSelectComponent.prototype.getInfoFromChild1 = function (data) {
        this.faList = data;
    };
    ClothesSelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-clothes-select",
            template: __webpack_require__(/*! ./clothes-select.component.html */ "./src/app/clothes-select/clothes-select.component.html"),
            styles: [__webpack_require__(/*! ./clothes-select.component.less */ "./src/app/clothes-select/clothes-select.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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

module.exports = "<div class=\"main\">\r\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\r\n  <div class=\"top\"></div>\r\n  <div class=\"person\">\r\n    <div class=\"left-person\" (click)=\"toggleImage(2)\">\r\n      <img src=\"../../assets/background/man-1.png\" alt=\"\">\r\n    </div>\r\n    <div class=\"right-person\" (click)=\"toggleImage(1)\">\r\n      <img src=\"../../assets/background/women-1.png\" alt=\"\">\r\n    </div>\r\n  </div>\r\n  <div class=\"btn\">\r\n    <div class=\"l-btn\" (click)=\"toggleImage(2)\">\r\n      <img src=\"../../assets/background/btn1.png\" alt=\"\">\r\n    </div>\r\n    <div class=\"r-btn\" (click)=\"toggleImage(1)\">\r\n      <img src=\"../../assets/background/btn2.png\" alt=\"\">\r\n    </div>\r\n  </div>\r\n  <div class=\"bottom\">\r\n    <img src=\"../../assets/background/bottom-1.png\" alt=\"\">\r\n  </div>\r\n</div>"

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
    function GenderSelectComponent(route, router, cdr) {
        this.route = route;
        this.router = router;
        this.cdr = cdr;
        this.loading = false;
    }
    GenderSelectComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.cdr.detectChanges();
        setTimeout(function () {
            _this.loading = false;
        }, 1000);
    };
    GenderSelectComponent.prototype.ngOnInit = function () {
        this.loading = true;
    };
    GenderSelectComponent.prototype.toggleImage = function (id) {
        this.router.navigate(["clothes"], {
            queryParams: { id: id, obj: "", url: "home" }
        });
    };
    GenderSelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-gender-select",
            template: __webpack_require__(/*! ./gender-select.component.html */ "./src/app/gender-select/gender-select.component.html"),
            styles: [__webpack_require__(/*! ./gender-select.component.less */ "./src/app/gender-select/gender-select.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
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

module.exports = "<div class=\"main\">\r\n    <div *ngIf=\"personObj.gender ==1\">\r\n        <div class=\"person\">\r\n            <div *ngIf=\"personObj.hair.has\">\r\n                <div *ngIf=\"personObj.hair.index !== '5'\">\r\n                    <div class=\"hair\" [style.background-image]=\"'url(' + '../../assets/hair/fhair'+ personObj.hair.index + '.png'+ ')'\"></div>\r\n                </div>\r\n                <div *ngIf=\"personObj.hair.index == '5'\">\r\n                    <div class=\"hair\" [style.top]=\"'-0.70rem'\" [style.height]=\"'105%'\" [style.background-image]=\"'url(' + '../../assets/hair/fhair'+ personObj.hair.index + '.png'+ ')'\"></div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"personObj.shoes.has\">\r\n                <div class=\"shoes\" [style.background-image]=\"'url(' + '../../assets/shoes/fshoes'+ personObj.shoes.index + '.png'+ ')'\"></div>\r\n            </div>\r\n            <div *ngIf=\"personObj.suits.has\">\r\n                <div [ngSwitch]=\"personObj.suits.index\">\r\n                    <div *ngSwitchCase=\"22\">\r\n                        <div class=\"chibangsuits\" [style.background-image]=\"'url(' + '../../assets/suits/fsuits'+ personObj.suits.index + '.png'+ ')'\"></div>\r\n                    </div>\r\n                    <div *ngSwitchCase=\"25\">\r\n                        <div class=\"yuhangsuits\" [style.background-image]=\"'url(' + '../../assets/suits/fsuits'+ personObj.suits.index + '.png'+ ')'\"></div>\r\n                    </div>\r\n                    <div *ngSwitchCase=\"26\">\r\n                        <div class=\"yuhangsuits\" [style.background-image]=\"'url(' + '../../assets/suits/fsuits'+ personObj.suits.index + '.png'+ ')'\"></div>\r\n                    </div>\r\n                    <div *ngSwitchCase=\"27\">\r\n                        <div class=\"yuhangsuits\" [style.background-image]=\"'url(' + '../../assets/suits/fsuits'+ personObj.suits.index + '.png'+ ')'\"></div>\r\n                    </div>\r\n\r\n                    <div *ngSwitchCase=\"28\">\r\n                        <div class=\"wuyisuits\" [style.background-image]=\"'url(' + '../../assets/suits/fsuits'+ personObj.suits.index + '.png'+ ')'\"></div>\r\n                    </div>\r\n                    <div *ngSwitchCase=\"29\">\r\n                        <div class=\"wuyisuits\" [style.background-image]=\"'url(' + '../../assets/suits/fsuits'+ personObj.suits.index + '.png'+ ')'\"></div>\r\n                    </div>\r\n                    <div *ngSwitchCase=\"30\">\r\n                        <div class=\"wuyisuits\" [style.background-image]=\"'url(' + '../../assets/suits/fsuits'+ personObj.suits.index + '.png'+ ')'\"></div>\r\n                    </div>\r\n\r\n                    <div *ngSwitchDefault>\r\n                        <div class=\"suits\" [style.background-image]=\"'url(' + '../../assets/suits/fsuits'+ personObj.suits.index + '.png'+ ')'\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"personObj.coat.has\">\r\n                <div class=\"coats\" [ngStyle]=\"{'background-image': 'url(' + '../../assets/coat/fcoats'+ personObj.coat.index + '.png'+ ')'}\"></div>\r\n            </div>\r\n            <div *ngIf=\"personObj.pants.has\">\r\n                <div class=\"pants\" [style.background-image]=\"'url(' + '../../assets/pants/fpants'+ personObj.pants.index + '.png'+ ')'\"></div>\r\n            </div>\r\n            <div *ngIf=\"personObj.jew.has\">\r\n                <div class=\"jew\" [style.background-image]=\"'url(' + '../../assets/jew/fjew'+ personObj.jew.index + '.png'+ ')'\"></div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"personObj.gender ==2\">\r\n        <div class=\"mperson\">\r\n            <div *ngIf=\"personObj.hair.has\">\r\n                <div class=\"mhair\" [style.background-image]=\"'url(' + '../../assets/hair/mhair'+ personObj.hair.index + '.png'+ ')'\"></div>\r\n            </div>\r\n            <div *ngIf=\"personObj.shoes.has\">\r\n                <div class=\"mshoes\" [style.background-image]=\"'url(' + '../../assets/mshoes/mshoes'+ personObj.shoes.index + '.png'+ ')'\"></div>\r\n            </div>\r\n            <div *ngIf=\"personObj.suits.has\">\r\n                <div class=\"msuits\" [style.background-image]=\"'url(' + '../../assets/suits/msuits'+ personObj.suits.index + '.png'+ ')'\"></div>\r\n            </div>\r\n\r\n            <div *ngIf=\"personObj.coat.has\">\r\n\r\n                <div class=\"mcoats\" [ngStyle]=\"{'background-image': 'url(' + '../../assets/coat/mcoats'+ personObj.coat.index + '.png'+ ')'}\"></div>\r\n            </div>\r\n            <div *ngIf=\"personObj.pants.has\">\r\n\r\n                <div class=\"mpants\" [style.background-image]=\"'url(' + '../../assets/mpants/mpants'+ personObj.pants.index + '.png'+ ')'\"></div>\r\n            </div>\r\n            <div *ngIf=\"personObj.jew.has\">\r\n                <div class=\"mjew\" [style.background-image]=\"'url(' + '../../assets/jew/fjew'+ personObj.jew.index + '.png'+ ')'\"></div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/person/person.component.less":
/*!**********************************************!*\
  !*** ./src/app/person/person.component.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  width: 100%;\n}\n.main .person {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: transparent;\n  background-image: url('woman-none.png');\n  background-size: 100%;\n  background-repeat: no-repeat;\n}\n.main .person .hair {\n  position: absolute;\n  width: 105%;\n  height: 100%;\n  background-color: transparent;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  z-index: 11;\n  top: -0.5%;\n  left: -3%;\n}\n.main .person .pants {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: -4.5%;\n  top: -2.6%;\n  background-color: transparent;\n  background-size: 108%;\n  background-repeat: no-repeat;\n  z-index: 13;\n}\n.main .person .coats {\n  position: absolute;\n  width: 105%;\n  height: 100%;\n  background-color: transparent;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  z-index: 15;\n  top: -0.8%;\n  left: -2.9%;\n}\n.main .person .jew {\n  position: absolute;\n  width: 120%;\n  height: 100%;\n  top: -10%;\n  left: -10%;\n  background-color: transparent;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  z-index: 16;\n}\n.main .person .shoes {\n  position: absolute;\n  width: 105%;\n  height: 100%;\n  top: 2%;\n  left: -2.8%;\n  background-color: transparent;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  z-index: 12;\n}\n.main .person .suits {\n  position: absolute;\n  width: 105%;\n  height: 100%;\n  top: -0.9%;\n  left: -1.9%;\n  background-color: transparent;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  z-index: 15;\n}\n.main .person .yuhangsuits {\n  position: absolute;\n  width: 106%;\n  height: 100%;\n  top: -3%;\n  left: -3.5%;\n  background-color: transparent;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  z-index: 15;\n}\n.main .person .wuyisuits {\n  position: absolute;\n  width: 177%;\n  height: 100%;\n  top: 1.5%;\n  left: -40.5%;\n  background-color: transparent;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  z-index: 15;\n}\n.main .person .chibangsuits {\n  position: absolute;\n  width: 120%;\n  height: 100%;\n  top: 2.5%;\n  left: -10.5%;\n  background-color: transparent;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  z-index: 15;\n}\n.main .mperson {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: transparent;\n  background-image: url('mperson.png');\n  background-size: 100%;\n  background-repeat: no-repeat;\n}\n.main .mperson .mhair {\n  position: absolute;\n  width: 105%;\n  height: 100%;\n  background-color: transparent;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  z-index: 11;\n  top: -4%;\n  left: -1.5%;\n}\n.main .mperson .mpants {\n  position: absolute;\n  width: 96%;\n  height: 100%;\n  left: -1.5%;\n  top: -0.3%;\n  background-color: transparent;\n  background-size: 108%;\n  background-repeat: no-repeat;\n  z-index: 13;\n}\n.main .mperson .mcoats {\n  position: absolute;\n  width: 105%;\n  height: 100%;\n  background-color: transparent;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  top: -0.3%;\n  left: -2.3%;\n  z-index: 15;\n}\n.main .mperson .mjew {\n  position: absolute;\n  width: 120%;\n  height: 100%;\n  top: -10%;\n  left: -10%;\n  background-color: transparent;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  z-index: 16;\n}\n.main .mperson .mshoes {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 1.2%;\n  left: -0.5%;\n  background-color: transparent;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  z-index: 12;\n}\n.main .mperson .msuits {\n  position: absolute;\n  width: 105%;\n  height: 100%;\n  top: -4%;\n  left: -2%;\n  background-color: transparent;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  z-index: 15;\n}\n"

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
            click: "hair",
            hair: {
                has: true,
                index: 0
            },
            jew: {
                has: false,
                index: 0
            },
            coat: {
                has: true,
                index: 0
            },
            suits: {
                has: false,
                index: 0,
                hasShoes: false,
                hasJew: false
            },
            pants: {
                has: true,
                index: 0
            },
            shoes: {
                has: false,
                index: 0
            }
        };
    };
    PersonComponent.prototype.ngOnChanges = function (changes) {
        this.personObj = this.child2;
    };
    PersonComponent.prototype.ngDoCheck = function () {
        console.log(this.personObj.gender, "gender--->");
        if (this.bgData) {
            this.personObj = this.bgData;
        }
        if (this.personObj) {
            if (this.personObj.click == "suits") {
                this.personObj.coat.has = false;
                this.personObj.pants.has = false;
                if (this.personObj.suits.hasShoes) {
                    this.personObj.shoes.has = false;
                }
                if (this.personObj.suits.hasJew) {
                    this.personObj.jew.has = false;
                }
            }
            if (this.personObj.click == "coat") {
                this.personObj.suits.has = false;
            }
            if (this.personObj.click == "pants") {
                this.personObj.suits.has = false;
            }
            console.log("数据变化了");
        }
    };
    PersonComponent.prototype.suits = function () { };
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
            selector: "app-person",
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