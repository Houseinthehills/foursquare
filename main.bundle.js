webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location_location_component__ = __webpack_require__("./src/app/location/location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__image_location_image_location_component__ = __webpack_require__("./src/app/image-location/image-location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__specific_location_specific_location_component__ = __webpack_require__("./src/app/specific-location/specific-location.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: "",
        component: __WEBPACK_IMPORTED_MODULE_2__location_location_component__["a" /* LocationComponent */]
    },
    {
        path: "location-image",
        component: __WEBPACK_IMPORTED_MODULE_3__image_location_image_location_component__["a" /* ImageLocationComponent */]
    },
    {
        path: "specific-location",
        component: __WEBPACK_IMPORTED_MODULE_4__specific_location_specific_location_component__["a" /* SpecificLocationComponent */]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-nav></app-nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nav_nav_component__ = __webpack_require__("./src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__location_location_component__ = __webpack_require__("./src/app/location/location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__image_location_image_location_component__ = __webpack_require__("./src/app/image-location/image-location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__specific_location_specific_location_component__ = __webpack_require__("./src/app/specific-location/specific-location.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_7__location_location_component__["a" /* LocationComponent */],
                __WEBPACK_IMPORTED_MODULE_8__image_location_image_location_component__["a" /* ImageLocationComponent */],
                __WEBPACK_IMPORTED_MODULE_9__specific_location_specific_location_component__["a" /* SpecificLocationComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/image-location/image-location.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container padding\" >\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"alert alert-light\" role=\"alert\">\n                {{title}}\n              </div>\n        </div>\n      </div>\n      <div class=\"row\">\n            <div class=\"col-sm-12\">\n          <div class=\"row\">\n              <div class=\"col-md-4\" *ngFor=\"let result of results.response.photos.items\">\n               <div class=\"card\" style=\"width: 18rem;\">\n                <img class=\"card-img-top\" src={{result.prefix+size+result.suffix}} alt=\"{{result.source.name }}\">\n                <div class=\"card-body\">\n                 <h3>{{result.source.name }}</h3>\n                </div>\n               </div>\n              </div> \n          </div>\n     </div>\n     </div>\n  </div>"

/***/ }),

/***/ "./src/app/image-location/image-location.component.scss":
/***/ (function(module, exports) {

module.exports = "p {\n  color: #ffffff; }\n\nh3 {\n  color: red;\n  text-transform: uppercase;\n  font-size: 16px;\n  font-weight: 800; }\n\n.alert-light {\n  margin-top: 20px; }\n"

/***/ }),

/***/ "./src/app/image-location/image-location.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageLocationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImageLocationComponent = /** @class */ (function () {
    function ImageLocationComponent(httpClient) {
        this.httpClient = httpClient;
        this.title = "A page listing images for a location";
        this.v = 'v=20180323';
        this.client_id = 'client_id=F2RPZRORI153NZRIJ0YDEQEGIAKW0WDTPXP0AGDDDEXPN4HX';
        this.client_secret = 'client_secret=05P3UNFOLXF2UMK04ZFKNNUEDN40VV55DJU1VZQFIL0NVHOH';
        this.longlat = 'll=40.7243,-74.0018';
        this.venue_id = '54cf234f498eb6d4667aa8d1'; //Mele uyithole from the other link when they search for a location or something
        this.url = "https://api.foursquare.com/v2/venues/" + this.venue_id + "/photos/?" + this.v + "&" + this.client_id + "&" + this.client_secret;
        this.size = "300x500";
        this.results = [];
    }
    ImageLocationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpClient.get(this.url).subscribe(function (data) {
            _this.results = data;
        });
    };
    ImageLocationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-image-location',
            template: __webpack_require__("./src/app/image-location/image-location.component.html"),
            styles: [__webpack_require__("./src/app/image-location/image-location.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ImageLocationComponent);
    return ImageLocationComponent;
}());



/***/ }),

/***/ "./src/app/location/location.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container padding\" >\n  <div class=\"row\">\n      <div class=\"col-sm-12\">\n          <div class=\"alert alert-light\" role=\"alert\">\n              {{listofareas}}\n            </div>\n      </div>\n    </div>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"row\" [@listanimation] = \"results.response.venues.length\">\n          <div class=\"col-sm-2 block-square\" *ngFor=\"let result of results.response.venues\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <h5 class=\"card-title\">{{result.name}}</h5>\n                </div>\n              </div>\n            </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/location/location.component.scss":
/***/ (function(module, exports) {

module.exports = "p {\n  color: #666666; }\n\nli {\n  color: #666666; }\n\n.container {\n  color: #666666; }\n\n.card-title {\n  font-size: 13px; }\n\n.block-square {\n  margin-top: 20px; }\n\n.card-body {\n  height: 90px; }\n\n.alert-light {\n  margin-top: 20px; }\n"

/***/ }),

/***/ "./src/app/location/location.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocationComponent = /** @class */ (function () {
    function LocationComponent(httpClient) {
        this.httpClient = httpClient;
        this.name = '';
        this.listofareas = "Locations around Johannesburg";
        this.v = 'v=20180323';
        this.client_id = 'client_id=F2RPZRORI153NZRIJ0YDEQEGIAKW0WDTPXP0AGDDDEXPN4HX';
        this.client_secret = 'client_secret=05P3UNFOLXF2UMK04ZFKNNUEDN40VV55DJU1VZQFIL0NVHOH';
        this.longlat = 'll=-26.270760,28.112268';
        this.query = 'query=Johannesburg';
        this.url = "https://api.foursquare.com/v2/venues/search?" + this.v + "&" + this.client_id + "&" + this.client_secret + "&" + this.longlat + "&" + this.query;
        this.results = [];
    }
    LocationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpClient.get(this.url).subscribe(function (data) {
            _this.results = data;
        });
    };
    LocationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-location',
            template: __webpack_require__("./src/app/location/location.component.html"),
            styles: [__webpack_require__("./src/app/location/location.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* trigger */])('listanimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* transition */])('*=>*', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* style */])({ opacity: 0 }), { optional: true }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* stagger */])('300ms', [
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('1s ease-in', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["f" /* keyframes */])([
                                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* style */])({ opacity: 0, transform: 'translateY(-75px)', offset: 0 }),
                                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* style */])({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
                                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* style */])({ opacity: 1, transform: 'translateY(0px)', offset: 1 }),
                            ]))
                        ]))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], LocationComponent);
    return LocationComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-expand-lg fixed-top navbar-dark bg-primary\">\n  <div class=\"container\">\n    <a  class=\"navbar-brand\" routerLink=\"\">LOCATION APP</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"\">Location</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"location-image\">Images for a location</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"specific-location\">Details for specific image</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/***/ (function(module, exports) {

module.exports = ".fixed-top {\n  position: relative; }\n\n.bg-primary {\n  background-color: rgba(0, 0, 0, 0.5) !important; }\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("./src/app/nav/nav.component.html"),
            styles: [__webpack_require__("./src/app/nav/nav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/specific-location/specific-location.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container padding\" >\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"alert alert-light\" role=\"alert\">\n               Image details\n              </div>\n        </div>\n      </div>\n  <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                 <div class=\"card\" style=\"width: 18rem;\" *ngFor=\"let result of results.response.photos.items\">\n                    <img class=\"card-img-top\" src={{result.prefix+size+result.suffix}} alt=\"{{result.source.name }}\">\n                <div class=\"card-body\">\n                 <h3>{{result.source.name}}</h3>\n                 <p>User First Name: {{result.user.firstName}}</p>\n                </div>\n            </div>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/specific-location/specific-location.component.scss":
/***/ (function(module, exports) {

module.exports = "p {\n  color: #666666; }\n\n.alert-light {\n  margin-top: 20px; }\n\n.card-text {\n  color: #666666; }\n\nh3 {\n  font-size: 18px; }\n"

/***/ }),

/***/ "./src/app/specific-location/specific-location.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecificLocationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpecificLocationComponent = /** @class */ (function () {
    function SpecificLocationComponent(httpClient) {
        this.httpClient = httpClient;
        this.v = 'v=20180323';
        this.client_id = 'client_id=F2RPZRORI153NZRIJ0YDEQEGIAKW0WDTPXP0AGDDDEXPN4HX';
        this.client_secret = 'client_secret=05P3UNFOLXF2UMK04ZFKNNUEDN40VV55DJU1VZQFIL0NVHOH';
        this.longlat = 'll=40.7243,-74.0018';
        this.venue_id = '4bad93d7f964a520b05c3be3'; //Mele uyithole from the other link when they search for a location or something
        this.url = "https://api.foursquare.com/v2/venues/" + this.venue_id + "/photos/?" + this.v + "&" + this.client_id + "&" + this.client_secret;
        this.size = "300x500";
        this.results = [];
    }
    SpecificLocationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpClient.get(this.url).subscribe(function (data) {
            _this.results = data;
        });
    };
    SpecificLocationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-specific-location',
            template: __webpack_require__("./src/app/specific-location/specific-location.component.html"),
            styles: [__webpack_require__("./src/app/specific-location/specific-location.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SpecificLocationComponent);
    return SpecificLocationComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map