(self["webpackChunkresume_website"] = self["webpackChunkresume_website"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ 2186);
/* harmony import */ var _assets_me_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/me.json */ 4884);
/* harmony import */ var _filter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.service */ 7021);
/* harmony import */ var _models_filter_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/filter-item */ 4096);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _skills_list_skills_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skills-list/skills-list.component */ 5878);
/* harmony import */ var _experience_list_experience_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./experience-list/experience-list.component */ 2714);
/* harmony import */ var _filter_toolbar_filter_toolbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filter-toolbar/filter-toolbar.component */ 6604);















const _c0 = ["app_container"];
const _c1 = ["mobile_underlay"];
function AppComponent_section_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-experience-list", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("role", item_r4);
} }
function AppComponent_article_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "article");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-skills-list", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skills_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", skills_r5.title)("skills", skills_r5.skills);
} }
class AppComponent {
    constructor(firestore) {
        this.title = 'Resume';
        this.experienceList = _assets_me_json__WEBPACK_IMPORTED_MODULE_0__.experience;
        this.skillsLists = _assets_me_json__WEBPACK_IMPORTED_MODULE_0__.skills;
        this.contact = _assets_me_json__WEBPACK_IMPORTED_MODULE_0__.contact;
        this.education = _assets_me_json__WEBPACK_IMPORTED_MODULE_0__.education;
        this.filterObjects = new Array();
        this.filterIsExpanded = true;
        if (window.innerWidth < 600) {
            this.filterIsExpanded = false;
        }
        const docRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.doc)(firestore, 'resumes/krtYPHqlrLLVzPVV9R69'); //collection(firestore, 'resumes');
        this.item$ = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.docData)(docRef);
        this.item$.subscribe((value) => {
            if (!value) {
                return;
            }
            if (value.experience && value.experience.forEach) {
                value.experience.forEach((role) => {
                    role.experience = role.experience.sort((a, b) => moment__WEBPACK_IMPORTED_MODULE_3___default()(a.startDate).isBefore(b.startDate) ? 1 : -1);
                });
            }
            console.log(value);
            this.experienceList = value.experience;
            this.skillsLists = value.skills;
            this.contact = value.contact;
            this.education = value.education;
        });
        // Add all the filters
        this.filterObjects.push(new _filter_service__WEBPACK_IMPORTED_MODULE_1__.FilterIconPair(_models_filter_item__WEBPACK_IMPORTED_MODULE_2__.FilterItem.CSharp, 'C#', _filter_service__WEBPACK_IMPORTED_MODULE_1__.FilterService.NoIcon, false, 'csharp'));
        this.filterObjects.push(new _filter_service__WEBPACK_IMPORTED_MODULE_1__.FilterIconPair(_models_filter_item__WEBPACK_IMPORTED_MODULE_2__.FilterItem.Unity, 'Unity', _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faUnity));
        this.filterObjects.push(new _filter_service__WEBPACK_IMPORTED_MODULE_1__.FilterIconPair(_models_filter_item__WEBPACK_IMPORTED_MODULE_2__.FilterItem.Xamarin, 'Xamarin', _filter_service__WEBPACK_IMPORTED_MODULE_1__.FilterService.NoIcon, false, 'xamarin'));
        this.filterObjects.push(new _filter_service__WEBPACK_IMPORTED_MODULE_1__.FilterIconPair(_models_filter_item__WEBPACK_IMPORTED_MODULE_2__.FilterItem.Salesforce, 'Salesforce', _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faSalesforce));
        this.filterObjects.push(new _filter_service__WEBPACK_IMPORTED_MODULE_1__.FilterIconPair(_models_filter_item__WEBPACK_IMPORTED_MODULE_2__.FilterItem.Angular, 'Angular', _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faAngular));
        this.filterObjects.push(new _filter_service__WEBPACK_IMPORTED_MODULE_1__.FilterIconPair(_models_filter_item__WEBPACK_IMPORTED_MODULE_2__.FilterItem.HTML, 'HTML', _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faHtml5));
        this.filterObjects.push(new _filter_service__WEBPACK_IMPORTED_MODULE_1__.FilterIconPair(_models_filter_item__WEBPACK_IMPORTED_MODULE_2__.FilterItem.CSS, 'CSS', _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faCss3));
        this.filterObjects.push(new _filter_service__WEBPACK_IMPORTED_MODULE_1__.FilterIconPair(_models_filter_item__WEBPACK_IMPORTED_MODULE_2__.FilterItem.JavaScript, 'JavaScript', _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faJs));
        this.filterObjects.push(new _filter_service__WEBPACK_IMPORTED_MODULE_1__.FilterIconPair(_models_filter_item__WEBPACK_IMPORTED_MODULE_2__.FilterItem.TypeScript, 'TypeScript', _filter_service__WEBPACK_IMPORTED_MODULE_1__.FilterService.NoIcon, false, 'typescript'));
        this.filterObjects.push(new _filter_service__WEBPACK_IMPORTED_MODULE_1__.FilterIconPair(_models_filter_item__WEBPACK_IMPORTED_MODULE_2__.FilterItem.NodeJS, 'NodeJS', _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faNode));
        this.filterObjects.push(new _filter_service__WEBPACK_IMPORTED_MODULE_1__.FilterIconPair(_models_filter_item__WEBPACK_IMPORTED_MODULE_2__.FilterItem.React, 'React', _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faReact));
        this.filterObjects.push(new _filter_service__WEBPACK_IMPORTED_MODULE_1__.FilterIconPair(_models_filter_item__WEBPACK_IMPORTED_MODULE_2__.FilterItem.Flutter, 'Flutter', _filter_service__WEBPACK_IMPORTED_MODULE_1__.FilterService.NoIcon, false, 'flutter'));
        this.filterObjects.push(new _filter_service__WEBPACK_IMPORTED_MODULE_1__.FilterIconPair(_models_filter_item__WEBPACK_IMPORTED_MODULE_2__.FilterItem.CPlusPlus, 'C/C++', _filter_service__WEBPACK_IMPORTED_MODULE_1__.FilterService.NoIcon, false, 'cplusplus'));
    }
    ngAfterViewInit() {
        // Are we on a mobile device?
        if (window.innerWidth < 600) {
            this.mobileUnderlayElement.nativeElement.style.height =
                window.screen.availHeight + 'px';
            this.appContainerElement.nativeElement.style.backgroundSize =
                'auto ' + window.screen.availHeight + 'px';
            this.filterIsExpanded = false;
        }
    }
    ToggleFilterItem(filtereableItem) {
        _filter_service__WEBPACK_IMPORTED_MODULE_1__.FilterService.ToggleFilterItem(filtereableItem);
    }
    CheckFlag(item) {
        return (_filter_service__WEBPACK_IMPORTED_MODULE_1__.FilterService.CurrentFilters & item.value) != 0;
    }
    FilterToolbarToggled(isExpanded) {
        this.filterIsExpanded = isExpanded;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.Firestore)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.appContainerElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.mobileUnderlayElement = _t.first);
    } }, decls: 15, vars: 7, consts: [["id", "app-container"], ["app_container", ""], [3, "expandedEvent"], ["id", "mobile-underlay"], ["mobile_underlay", ""], [1, "primary-column", 3, "ngClass"], [1, "main-header"], [3, "title", "subtitle", "education", "contact"], [4, "ngFor", "ngForOf"], ["id", "skills-section"], [2, "text-align", "center"], ["id", "skills-body"], [3, "role"], [3, "title", "skills"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0, 1)(2, "app-filter-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("expandedEvent", function AppComponent_Template_app_filter_toolbar_expandedEvent_2_listener($event) { return ctx.FilterToolbarToggled($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 5)(6, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "app-header", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, AppComponent_section_8_Template, 2, 1, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "section", 9)(10, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, AppComponent_article_13_Template, 2, 2, "article", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx.filterIsExpanded ? "filterExpanded" : "filterHidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", ctx.contact.name)("subtitle", ctx.contact.title)("education", ctx.education)("contact", ctx.contact);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.experienceList);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.skillsLists);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterOutlet, _header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent, _skills_list_skills_list_component__WEBPACK_IMPORTED_MODULE_5__.SkillsListComponent, _experience_list_experience_list_component__WEBPACK_IMPORTED_MODULE_6__.ExperienceListComponent, _filter_toolbar_filter_toolbar_component__WEBPACK_IMPORTED_MODULE_7__.FilterToolbarComponent], styles: ["#app-container[_ngcontent-%COMP%] {\n  background-image: url('headerBackground.jpg');\n  background-size: 100% auto;\n  background-repeat: no-repeat;\n  background-color: black;\n  padding-bottom: 200px;\n}\n\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited {\n  color: white;\n}\n\n#mobile-underlay[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.primary-column[_ngcontent-%COMP%] {\n  height: 100%;\n  max-width: 1920px;\n  padding: 0 var(--site-side-padding);\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 12.5rem;\n}\n\n.filterExpanded[_ngcontent-%COMP%] {\n  padding-left: 102px !important;\n  transition: padding-left 0.25s ease;\n}\n\n.filterHidden[_ngcontent-%COMP%] {\n  padding-left: var(--site-side-padding) !important;\n  transition: padding-left 0.25s ease;\n}\n\n.primary-column[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:not(:first-child) {\n  background-color: rgba(0, 0, 0, 0.7);\n  border-radius: var(--card-radius);\n}\n\n.primary-column[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(even) {\n  align-self: flex-end;\n}\n\n.primary-column[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(odd) {\n  align-self: flex-start;\n}\n\n.main-header[_ngcontent-%COMP%] {\n  padding-top: 0;\n  width: calc(100% - var(--site-side-padding));\n}\n\n#skills-section[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n#skills-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n#skills-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n}\n\n@media screen and (max-width: 600px) {\n  #app-container[_ngcontent-%COMP%] {\n    background-image: url('phoneBackground.jpg');\n    overflow-x: hidden;\n    width: 100%;\n  }\n  .primary-column[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .primary-column[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n    border-radius: 0 !important;\n  }\n  .primary-column[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .primary-column[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:not(:first-child) {\n    background-color: rgba(0, 0, 0, 0);\n  }\n  .primary-column[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    z-index: 1;\n  }\n  .main-header[_ngcontent-%COMP%] {\n    z-index: 2 !important;\n  }\n  #mobile-underlay[_ngcontent-%COMP%] {\n    z-index: 0;\n    position: absolute;\n    display: block;\n    top: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0);\n    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.8) 80%, rgb(0, 0, 0) 100%);\n    width: 100%;\n  }\n}\n\n@media screen and (-moz-min-device-pixel-ratio: 2), screen and (-o-min-device-pixel-ratio: 2/1), screen and (-webkit-min-device-pixel-ratio: 2), screen and (min-device-pixel-ratio: 2) {\n  #app-container[_ngcontent-%COMP%] {\n    background-image: url('headerBackground@2x.jpg');\n  }\n}\n\n@media screen and (-moz-min-device-pixel-ratio: 2) and (max-width: 600px), screen and (-o-min-device-pixel-ratio: 2/1) and (max-width: 600px), screen and (-webkit-min-device-pixel-ratio: 2) and (max-width: 600px), screen and (min-device-pixel-ratio: 2) and (max-width: 600px) {\n  #app-container[_ngcontent-%COMP%] {\n    background-image: url('phoneBackground@2x.jpg');\n  }\n}\n\n.filterItem[_ngcontent-%COMP%], .filterItem-selected[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  fill: currentColor;\n}\n\n.filterItem[_ngcontent-%COMP%] {\n  color: var(--gray);\n  transition: color 0.5s ease;\n}\n\n.filterItem[_ngcontent-%COMP%]:hover {\n  color: hsla(var(--gray-h), var(--gray-s), var(--gray-l), 0.75);\n  transition: color 0.25s ease;\n}\n\n.filterItem-selected[_ngcontent-%COMP%] {\n  color: var(--blue);\n  transition: color 0.5s ease;\n}\n\n.filterItem-selected[_ngcontent-%COMP%]:hover {\n  color: hsla(var(--blue-h), var(--blue-s), var(--blue-l), 0.75);\n  transition: color 0.25s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQTtFQUNFLDZDQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUFYRjs7QUFjQTs7RUFFRSxZQUFBO0FBWEY7O0FBY0E7RUFDRSxhQUFBO0FBWEY7O0FBY0E7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFFQSxtQ0FBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBYkY7O0FBZ0JBO0VBQ0UsOEJBQUE7RUFDQSxtQ0FBQTtBQWJGOztBQWlCQTtFQUNFLGlEQUFBO0VBQ0EsbUNBQUE7QUFkRjs7QUFpQkE7RUFDRSxvQ0FBQTtFQUNBLGlDQUFBO0FBZEY7O0FBaUJBO0VBQ0Usb0JBQUE7QUFkRjs7QUFpQkE7RUFDRSxzQkFBQTtBQWRGOztBQWlCQTtFQUNFLGNBQUE7RUFDQSw0Q0FBQTtBQWRGOztBQWlCQTtFQUNFLFdBQUE7QUFkRjs7QUFlRTtFQUNFLGtCQUFBO0FBYko7O0FBaUJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FBZEY7O0FBbUJBO0VBQ0U7SUFDRSw0Q0FBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtFQWhCRjtFQW1CQTtJQUNFLFVBQUE7RUFqQkY7RUFtQkU7SUFDRSwyQkFBQTtFQWpCSjtFQW9CRTtJQUNFLGFBQUE7RUFsQko7RUFzQkE7SUFDRSxrQ0FBQTtFQXBCRjtFQXVCQTtJQUNFLFVBQUE7RUFyQkY7RUF3QkE7SUFDRSxxQkFBQTtFQXRCRjtFQXlCQTtJQUNFLFVBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxNQUFBO0lBQ0EsT0FBQTtJQUNBLDRCQUFBO0lBQ0Esb0dBQUE7SUFNQSxXQUFBO0VBNUJGO0FBQ0Y7O0FBZ0NBO0VBSUU7SUFDRSxnREFBQTtFQWpDRjtBQUNGOztBQW1DRTtFQUNFO0lBQ0UsK0NBQUE7RUFqQ0o7QUFDRjs7QUFxQ0E7O0VBRUUsYUFBQTtFQUNBLGtCQUFBO0FBbkNGOztBQXNDQTtFQUNFLGtCQUFBO0VBQ0EsMkJBQUE7QUFuQ0Y7O0FBcUNBO0VBNUpFLDhEQUFBO0VBOEpBLDRCQUFBO0FBbENGOztBQXFDQTtFQUNFLGtCQUFBO0VBQ0EsMkJBQUE7QUFsQ0Y7O0FBcUNBO0VBdEtFLDhEQUFBO0VBd0tBLDRCQUFBO0FBbENGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBhbHBoYSgkcHJvcGVydHksICRjb2xvci12YXJpYWJsZSwgJG9wYWNpdHkpIHtcbiAgJGNvbG9yLXZhcmlhYmxlLWg6IHZhcigjeyRjb2xvci12YXJpYWJsZSArIFwiLWhcIn0pO1xuICAkY29sb3ItdmFyaWFibGUtczogdmFyKCN7JGNvbG9yLXZhcmlhYmxlICsgXCItc1wifSk7XG4gICRjb2xvci12YXJpYWJsZS1sOiB2YXIoI3skY29sb3ItdmFyaWFibGUgKyBcIi1sXCJ9KTtcbiAgI3skcHJvcGVydHl9OiBoc2xhKFxuICAgICRjb2xvci12YXJpYWJsZS1oLFxuICAgICRjb2xvci12YXJpYWJsZS1zLFxuICAgICRjb2xvci12YXJpYWJsZS1sLFxuICAgICRvcGFjaXR5XG4gICk7XG59XG5cbiNhcHAtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL2hlYWRlckJhY2tncm91bmQuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgYXV0bztcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmctYm90dG9tOiAyMDBweDtcbn1cblxuYSxcbmE6dmlzaXRlZCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuI21vYmlsZS11bmRlcmxheSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5wcmltYXJ5LWNvbHVtbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxOTIwcHg7XG5cbiAgcGFkZGluZzogMCB2YXIoLS1zaXRlLXNpZGUtcGFkZGluZyk7XG4gIG1hcmdpbjogYXV0bztcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEyLjVyZW07XG59XG5cbi5maWx0ZXJFeHBhbmRlZCB7XG4gIHBhZGRpbmctbGVmdDogMTAycHggIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogcGFkZGluZy1sZWZ0IDAuMjVzIGVhc2U7XG59XG5cblxuLmZpbHRlckhpZGRlbiB7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0tc2l0ZS1zaWRlLXBhZGRpbmcpICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IHBhZGRpbmctbGVmdCAwLjI1cyBlYXNlO1xufVxuXG4ucHJpbWFyeS1jb2x1bW4gc2VjdGlvbjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tY2FyZC1yYWRpdXMpO1xufVxuXG4ucHJpbWFyeS1jb2x1bW4gc2VjdGlvbjpudGgtY2hpbGQoZXZlbikge1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cblxuLnByaW1hcnktY29sdW1uIHNlY3Rpb246bnRoLWNoaWxkKG9kZCkge1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xufVxuXG4ubWFpbi1oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogMDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIHZhcigtLXNpdGUtc2lkZS1wYWRkaW5nKSk7XG59XG5cbiNza2lsbHMtc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG5cbiNza2lsbHMtYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi8vIFBob25lIHN0eWxpbmdcblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgI2FwcC1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9waG9uZUJhY2tncm91bmQuanBnXCIpO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5wcmltYXJ5LWNvbHVtbiB7XG4gICAgcGFkZGluZzogMDtcblxuICAgIHNlY3Rpb24ge1xuICAgICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIGFydGljbGUge1xuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICB9XG4gIH1cblxuICAucHJpbWFyeS1jb2x1bW4gc2VjdGlvbjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgfVxuXG4gIC5wcmltYXJ5LWNvbHVtbiA+ICoge1xuICAgIHotaW5kZXg6IDE7XG4gIH1cblxuICAubWFpbi1oZWFkZXIge1xuICAgIHotaW5kZXg6IDIgIWltcG9ydGFudDtcbiAgfVxuXG4gICNtb2JpbGUtdW5kZXJsYXkge1xuICAgIHotaW5kZXg6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgMTgwZGVnLFxuICAgICAgcmdiYSgwLCAwLCAwLCAwKSAzMCUsXG4gICAgICByZ2JhKDAsIDAsIDAsIDAuOCkgODAlLFxuICAgICAgcmdiYSgwLCAwLCAwLCAxKSAxMDAlXG4gICAgKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4vLyA+IDIgRFBSIGJhY2tncm91bmRzXG5AbWVkaWEgc2NyZWVuIGFuZCAoLW1vei1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcbiAgc2NyZWVuIGFuZCAoLW8tbWluLWRldmljZS1waXhlbC1yYXRpbzogMi8xKSxcbiAgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcbiAgc2NyZWVuIGFuZCAobWluLWRldmljZS1waXhlbC1yYXRpbzogMikge1xuICAjYXBwLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL2hlYWRlckJhY2tncm91bmRAMnguanBnXCIpO1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAjYXBwLWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvcGhvbmVCYWNrZ3JvdW5kQDJ4LmpwZ1wiKTtcbiAgICB9XG4gIH1cbn1cblxuLmZpbHRlckl0ZW0sXG4uZmlsdGVySXRlbS1zZWxlY3RlZCB7XG4gIG1hcmdpbjogMCA1cHg7XG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcbn1cblxuLmZpbHRlckl0ZW0ge1xuICBjb2xvcjogdmFyKC0tZ3JheSk7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuNXMgZWFzZTtcbn1cbi5maWx0ZXJJdGVtOmhvdmVyIHtcbiAgQGluY2x1ZGUgYWxwaGEoY29sb3IsIC0tZ3JheSwgMC43NSk7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMjVzIGVhc2U7XG59XG5cbi5maWx0ZXJJdGVtLXNlbGVjdGVkIHtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzIGVhc2U7XG59XG5cbi5maWx0ZXJJdGVtLXNlbGVjdGVkOmhvdmVyIHtcbiAgQGluY2x1ZGUgYWxwaGEoY29sb3IsIC0tYmx1ZSwgMC43NSk7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMjVzIGVhc2U7XG59XG4iXX0= */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _sentry_angular_ivy__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @sentry/angular-ivy */ 2052);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact.component */ 1563);
/* harmony import */ var _skills_list_skills_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skills-list/skills-list.component */ 5878);
/* harmony import */ var _experience_list_experience_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./experience-list/experience-list.component */ 2714);
/* harmony import */ var _experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./experience-card/experience-card.component */ 1436);
/* harmony import */ var _skill_card_skill_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./skill-card/skill-card.component */ 206);
/* harmony import */ var _education_card_education_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./education-card/education-card.component */ 2591);
/* harmony import */ var _phone_pipe_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./phone-pipe.pipe */ 2650);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _wip_alert_wip_alert_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./wip-alert/wip-alert.component */ 1095);
/* harmony import */ var _svg_renderer_svg_renderer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./svg-renderer/svg-renderer.component */ 1438);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ 89);
/* harmony import */ var _angular_fire_app__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire/app */ 9150);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/analytics */ 7003);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _filter_toolbar_filter_toolbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./filter-toolbar/filter-toolbar.component */ 6604);


























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ErrorHandler,
            useValue: _sentry_angular_ivy__WEBPACK_IMPORTED_MODULE_15__.createErrorHandler({
                showDialog: true,
            }),
        },
        {
            provide: _sentry_angular_ivy__WEBPACK_IMPORTED_MODULE_15__.TraceService,
        },
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_14__.APP_INITIALIZER,
            useFactory: () => () => { },
            deps: [_sentry_angular_ivy__WEBPACK_IMPORTED_MODULE_15__.TraceService],
            multi: true,
        },
        _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_16__.ScreenTrackingService,
        _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_16__.UserTrackingService,
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_18__.FontAwesomeModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatTooltipModule,
        (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_21__.provideFirebaseApp)(() => (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_21__.initializeApp)(_environments_environment__WEBPACK_IMPORTED_MODULE_12__.environment.firebase)),
        // provideAnalytics(() => getAnalytics()),
        (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_22__.provideFirestore)(() => (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_22__.getFirestore)())] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent,
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__.ContactComponent,
        _skills_list_skills_list_component__WEBPACK_IMPORTED_MODULE_4__.SkillsListComponent,
        _experience_list_experience_list_component__WEBPACK_IMPORTED_MODULE_5__.ExperienceListComponent,
        _experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_6__.ExperienceCardComponent,
        _skill_card_skill_card_component__WEBPACK_IMPORTED_MODULE_7__.SkillCardComponent,
        _education_card_education_card_component__WEBPACK_IMPORTED_MODULE_8__.EducationCardComponent,
        _phone_pipe_pipe__WEBPACK_IMPORTED_MODULE_9__.PhonePipePipe,
        _wip_alert_wip_alert_component__WEBPACK_IMPORTED_MODULE_10__.WipAlertComponent,
        _svg_renderer_svg_renderer_component__WEBPACK_IMPORTED_MODULE_11__.SvgRendererComponent,
        _filter_toolbar_filter_toolbar_component__WEBPACK_IMPORTED_MODULE_13__.FilterToolbarComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_18__.FontAwesomeModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatTooltipModule, _angular_fire_app__WEBPACK_IMPORTED_MODULE_21__.FirebaseAppModule, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_22__.FirestoreModule] }); })();


/***/ }),

/***/ 1563:
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ 2186);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ 9636);
/* harmony import */ var _models_contact_me__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/contact-me */ 8513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);






function ContactComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 4)(1, "fa-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "mailto:" + ctx_r0.contact.email, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r0.faEnvelope);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Email me at ", ctx_r0.contact.email, "");
} }
function ContactComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 6)(1, "fa-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Visit my LinkedIn");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r1.contact.linkedin, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r1.faLinkedIn);
} }
function ContactComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 7)(1, "fa-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Visit my Github");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r2.contact.github, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r2.faGithub);
} }
class ContactComponent {
    constructor() {
        this.faEnvelope = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faEnvelope;
        this.faLinkedIn = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faLinkedin;
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faGithub;
        this.contact = new _models_contact_me__WEBPACK_IMPORTED_MODULE_0__.ContactMe();
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], inputs: { contact: "contact" }, decls: 4, vars: 3, consts: [[1, "contact-info"], ["id", "email", "alt", "", 3, "href", 4, "ngIf"], ["id", "linkedin", 3, "href", 4, "ngIf"], ["id", "github", 3, "href", 4, "ngIf"], ["id", "email", "alt", "", 3, "href"], ["size", "2x", 1, "icon", 3, "icon"], ["id", "linkedin", 3, "href"], ["id", "github", 3, "href"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContactComponent_a_1_Template, 3, 3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ContactComponent_a_2_Template, 3, 2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ContactComponent_a_3_Template, 3, 2, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.contact.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.contact.linkedin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.contact.github);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FaIconComponent], styles: [".contact-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row-reverse;\n  flex-wrap: wrap;\n  gap: 1.25rem;\n}\n\n@media screen and (max-width: 600px) {\n  .contact-info[_ngcontent-%COMP%] {\n    flex-direction: row;\n    padding-left: 0;\n  }\n}\n\na[_ngcontent-%COMP%] {\n  color: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLGVBQUE7RUFDRjtBQUNGOztBQUdBO0VBQ0UsY0FBQTtBQURGIiwiZmlsZSI6ImNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdC1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMS4yNXJlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhY3QtaW5mbyB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cbn1cblxuLy8gTm90IHN1cmUgd2h5LCBidXQgaGF2ZSB0byBzZXQgY29sb3I6aW5oZXJpdCBoZXJlIGFzIHdlbGwgaW4gYXMgc3R5bGVzLnNjc3MgZm9yIEZpcmVmb3hcbmEge1xuICBjb2xvcjogaW5oZXJpdDtcbn0iXX0= */"] });


/***/ }),

/***/ 2591:
/*!************************************************************!*\
  !*** ./src/app/education-card/education-card.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationCardComponent": () => (/* binding */ EducationCardComponent)
/* harmony export */ });
/* harmony import */ var _models_education__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/education */ 3448);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class EducationCardComponent {
    constructor() {
        this.education = new _models_education__WEBPACK_IMPORTED_MODULE_0__.Education();
    }
}
EducationCardComponent.ɵfac = function EducationCardComponent_Factory(t) { return new (t || EducationCardComponent)(); };
EducationCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EducationCardComponent, selectors: [["app-education-card"]], inputs: { education: "education" }, decls: 7, vars: 3, consts: [[1, "education-card"]], template: function EducationCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.education.degree);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.education.university);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.education.endDate);
    } }, styles: [".education-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 1rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkdWNhdGlvbi1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoiZWR1Y2F0aW9uLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWR1Y2F0aW9uLWNhcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nOiAxcmVtIDA7XG59Il19 */"] });


/***/ }),

/***/ 1436:
/*!**************************************************************!*\
  !*** ./src/app/experience-card/experience-card.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperienceCardComponent": () => (/* binding */ ExperienceCardComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ 2186);
/* harmony import */ var _filter_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../filter.service */ 7021);
/* harmony import */ var _models_experience_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/experience-item */ 5619);
/* harmony import */ var _models_filter_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/filter-item */ 4096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ 89);
/* harmony import */ var _svg_renderer_svg_renderer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../svg-renderer/svg-renderer.component */ 1438);










function ExperienceCardComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.item.company, " ");
} }
function ExperienceCardComponent_div_5_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx_r4.item.startDate, " - ", ctx_r4.item.endDate, " ");
} }
function ExperienceCardComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExperienceCardComponent_div_5_span_1_Template, 2, 2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.item.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.item.location);
} }
function ExperienceCardComponent_span_7_fa_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", item_r5.faIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r5.filterName);
} }
function ExperienceCardComponent_span_7_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-svg-renderer", 17);
} if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", item_r5.iconURI);
} }
function ExperienceCardComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExperienceCardComponent_span_7_Template_span_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const item_r5 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.ToggleFilterItem(item_r5)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExperienceCardComponent_span_7_fa_icon_1_Template, 2, 2, "fa-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ExperienceCardComponent_span_7_ng_template_2_Template, 1, 1, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r2.CheckFlag(item_r5) ? "filterItem-selected" : "filterItem")("matTooltip", item_r5.filterName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r5.isFA)("ngIfElse", _r7);
} }
function ExperienceCardComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const description_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", description_r13, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
class ExperienceCardComponent {
    constructor(filterService) {
        this.filterService = filterService;
        this.noIcon = _filter_service__WEBPACK_IMPORTED_MODULE_0__.FilterService.NoIcon;
        this.item = new _models_experience_item__WEBPACK_IMPORTED_MODULE_1__.ExperienceItem();
        this.filterObjects = new Array();
    }
    ngOnInit() {
        if ((this.item.filterableItems & _models_filter_item__WEBPACK_IMPORTED_MODULE_2__.FilterItem.CSharp) != 0) {
            this.filterObjects.push(new _filter_service__WEBPACK_IMPORTED_MODULE_0__.FilterIconPair(_models_filter_item__WEBPACK_IMPORTED_MODULE_2__.FilterItem.CSharp, 'C#', this.noIcon, false, 'csharp'));
        }
        if ((this.item.filterableItems & _models_filter_item__WEBPACK_IMPORTED_MODULE_2__.FilterItem.Unity) != 0) {
            this.filterObjects.push(new _filter_service__WEBPACK_IMPORTED_MODULE_0__.FilterIconPair(_models_filter_item__WEBPACK_IMPORTED_MODULE_2__.FilterItem.Unity, 'Unity', _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faUnity));
        }
        if ((this.item.filterableItems & _models_filter_item__WEBPACK_IMPORTED_MODULE_2__.FilterItem.Xamarin) != 0) {
            this.filterObjects.push(new _filter_service__WEBPACK_IMPORTED_MODULE_0__.FilterIconPair(_models_filter_item__WEBPACK_IMPORTED_MODULE_2__.FilterItem.Xamarin, 'Xamarin', this.noIcon, false, 'xamarin'));
        }
        if ((this.item.filterableItems & _models_filter_item__WEBPACK_IMPORTED_MODULE_2__.FilterItem.Salesforce) != 0) {
            this.filterObjects.push(new _filter_service__WEBPACK_IMPORTED_MODULE_0__.FilterIconPair(_models_filter_item__WEBPACK_IMPORTED_MODULE_2__.FilterItem.Salesforce, 'Salesforce', _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faSalesforce));
        }
        if ((this.item.filterableItems & _models_filter_item__WEBPACK_IMPORTED_MODULE_2__.FilterItem.Angular) != 0) {
            this.filterObjects.push(new _filter_service__WEBPACK_IMPORTED_MODULE_0__.FilterIconPair(_models_filter_item__WEBPACK_IMPORTED_MODULE_2__.FilterItem.Angular, 'Angular', _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faAngular));
        }
        if ((this.item.filterableItems & _models_filter_item__WEBPACK_IMPORTED_MODULE_2__.FilterItem.HTML) != 0) {
            this.filterObjects.push(new _filter_service__WEBPACK_IMPORTED_MODULE_0__.FilterIconPair(_models_filter_item__WEBPACK_IMPORTED_MODULE_2__.FilterItem.HTML, 'HTML', _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faHtml5));
        }
        if ((this.item.filterableItems & _models_filter_item__WEBPACK_IMPORTED_MODULE_2__.FilterItem.CSS) != 0) {
            this.filterObjects.push(new _filter_service__WEBPACK_IMPORTED_MODULE_0__.FilterIconPair(_models_filter_item__WEBPACK_IMPORTED_MODULE_2__.FilterItem.CSS, 'CSS', _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faCss3));
        }
        if ((this.item.filterableItems & _models_filter_item__WEBPACK_IMPORTED_MODULE_2__.FilterItem.JavaScript) != 0) {
            this.filterObjects.push(new _filter_service__WEBPACK_IMPORTED_MODULE_0__.FilterIconPair(_models_filter_item__WEBPACK_IMPORTED_MODULE_2__.FilterItem.JavaScript, 'JavaScript', _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faJs));
        }
        if ((this.item.filterableItems & _models_filter_item__WEBPACK_IMPORTED_MODULE_2__.FilterItem.TypeScript) != 0) {
            this.filterObjects.push(new _filter_service__WEBPACK_IMPORTED_MODULE_0__.FilterIconPair(_models_filter_item__WEBPACK_IMPORTED_MODULE_2__.FilterItem.TypeScript, 'TypeScript', this.noIcon, false, 'typescript'));
        }
        if ((this.item.filterableItems & _models_filter_item__WEBPACK_IMPORTED_MODULE_2__.FilterItem.NodeJS) != 0) {
            this.filterObjects.push(new _filter_service__WEBPACK_IMPORTED_MODULE_0__.FilterIconPair(_models_filter_item__WEBPACK_IMPORTED_MODULE_2__.FilterItem.NodeJS, 'NodeJS', _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faNode));
        }
        if ((this.item.filterableItems & _models_filter_item__WEBPACK_IMPORTED_MODULE_2__.FilterItem.React) != 0) {
            this.filterObjects.push(new _filter_service__WEBPACK_IMPORTED_MODULE_0__.FilterIconPair(_models_filter_item__WEBPACK_IMPORTED_MODULE_2__.FilterItem.React, 'React', _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faReact));
        }
        if ((this.item.filterableItems & _models_filter_item__WEBPACK_IMPORTED_MODULE_2__.FilterItem.Flutter) != 0) {
            this.filterObjects.push(new _filter_service__WEBPACK_IMPORTED_MODULE_0__.FilterIconPair(_models_filter_item__WEBPACK_IMPORTED_MODULE_2__.FilterItem.Flutter, 'Flutter', this.noIcon, false, 'flutter'));
        }
        if ((this.item.filterableItems & _models_filter_item__WEBPACK_IMPORTED_MODULE_2__.FilterItem.CPlusPlus) != 0) {
            this.filterObjects.push(new _filter_service__WEBPACK_IMPORTED_MODULE_0__.FilterIconPair(_models_filter_item__WEBPACK_IMPORTED_MODULE_2__.FilterItem.CPlusPlus, 'C/C++', this.noIcon, false, 'cplusplus'));
        }
        // ElasticSearch
        if ((this.item.filterableItems & _models_filter_item__WEBPACK_IMPORTED_MODULE_2__.FilterItem.ElasticSearch) != 0) {
            this.filterObjects.push(new _filter_service__WEBPACK_IMPORTED_MODULE_0__.FilterIconPair(_models_filter_item__WEBPACK_IMPORTED_MODULE_2__.FilterItem.ElasticSearch, 'ElasticSearch', this.noIcon, false, 'elasticsearch'));
        }
        // RabbitMQ
        if ((this.item.filterableItems & _models_filter_item__WEBPACK_IMPORTED_MODULE_2__.FilterItem.RabbitMQ) != 0) {
            this.filterObjects.push(new _filter_service__WEBPACK_IMPORTED_MODULE_0__.FilterIconPair(_models_filter_item__WEBPACK_IMPORTED_MODULE_2__.FilterItem.RabbitMQ, 'RabbitMQ', this.noIcon, false, 'rabbitmq'));
        }
        // ReactNative
        if ((this.item.filterableItems & _models_filter_item__WEBPACK_IMPORTED_MODULE_2__.FilterItem.ReactNative) != 0) {
            this.filterObjects.push(new _filter_service__WEBPACK_IMPORTED_MODULE_0__.FilterIconPair(_models_filter_item__WEBPACK_IMPORTED_MODULE_2__.FilterItem.ReactNative, 'ReactNative', this.noIcon, false, 'reactnative'));
        }
    }
    ToggleFilterItem(filtereableItem) {
        _filter_service__WEBPACK_IMPORTED_MODULE_0__.FilterService.ToggleFilterItem(filtereableItem);
    }
    CurrentFilters() {
        return _filter_service__WEBPACK_IMPORTED_MODULE_0__.FilterService.CurrentFilters;
    }
    CheckFlag(item) {
        return (_filter_service__WEBPACK_IMPORTED_MODULE_0__.FilterService.CurrentFilters & item.value) != 0;
    }
    IsInFilter() {
        // is the filter empty? If so, return true
        if (_filter_service__WEBPACK_IMPORTED_MODULE_0__.FilterService.CurrentFilters == 0) {
            return true;
        }
        // Otherwise, check if the filter bits for this card are contained in the filter
        return (_filter_service__WEBPACK_IMPORTED_MODULE_0__.FilterService.CurrentFilters & this.item.filterableItems) > 0;
    }
}
ExperienceCardComponent.ɵfac = function ExperienceCardComponent_Factory(t) { return new (t || ExperienceCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_filter_service__WEBPACK_IMPORTED_MODULE_0__.FilterService)); };
ExperienceCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ExperienceCardComponent, selectors: [["app-experience-card"]], inputs: { item: "item" }, decls: 10, vars: 6, consts: [[1, "experience-card", 3, "ngClass"], [1, "experience-primary"], [2, "display", "inline"], ["class", "company", "style", "float: right", 4, "ngIf"], ["class", "experience-secondary", 4, "ngIf"], [2, "display", "flex", "align-items", "center"], ["class", "filterItem", 3, "ngClass", "matTooltip", "click", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "company", 2, "float", "right"], [1, "experience-secondary"], ["class", "dates", 4, "ngIf"], [1, "location", 2, "float", "right"], [1, "dates"], [1, "filterItem", 3, "ngClass", "matTooltip", "click"], ["size", "2x", 3, "icon", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["size", "2x", 3, "icon"], [3, "title"], [3, "innerHTML"]], template: function ExperienceCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ExperienceCardComponent_p_4_Template, 2, 1, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ExperienceCardComponent_div_5_Template, 4, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ExperienceCardComponent_span_7_Template, 4, 4, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ExperienceCardComponent_li_9_Template, 2, 1, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.IsInFilter() ? "displayed" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.item.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.item.company);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.item.startDate || ctx.item.location);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.filterObjects);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.item.notes);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltip, _svg_renderer_svg_renderer_component__WEBPACK_IMPORTED_MODULE_3__.SvgRendererComponent], styles: ["li[_ngcontent-%COMP%] {\n  padding: 0.25rem 0;\n}\n\n.experience-primary[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  margin-bottom: 0.25rem;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  justify-content: space-between;\n  align-items: baseline;\n}\n\n.experience-secondary[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  justify-content: space-between;\n  align-items: baseline;\n}\n\nli[_ngcontent-%COMP%] {\n  list-style: square;\n}\n\nli[_ngcontent-%COMP%]:nth-child(even) {\n  font-weight: 400;\n}\n\nli[_ngcontent-%COMP%]:nth-child(odd) {\n  font-weight: 400;\n}\n\n.filterItem[_ngcontent-%COMP%], .filterItem-selected[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  fill: currentColor;\n}\n\n.hidden[_ngcontent-%COMP%] {\n  color: hsla(var(--white-h), var(--white-s), var(--white-l), 0.7);\n  transition: color 0.5s ease;\n}\n\n.hidden[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: hsla(var(--blue-h), var(--blue-s), var(--blue-l), 0.7);\n  transition: color 0.5s ease;\n}\n\n.hidden[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  color: hsla(var(--grayblue-h), var(--grayblue-s), var(--grayblue-l), 0.7);\n  transition: color 0.5s ease;\n}\n\n.hidden[_ngcontent-%COMP%]   .filterItem[_ngcontent-%COMP%] {\n  color: hsla(var(--gray-h), var(--gray-s), var(--gray-l), 0.7);\n  transition: color 0.5s ease;\n  transition: color 0.5s ease;\n}\n\n.hidden[_ngcontent-%COMP%]   .filterItem[_ngcontent-%COMP%]:hover {\n  color: hsla(var(--gray-h), var(--gray-s), var(--gray-l), 0.4);\n  transition: color 0.25s ease;\n}\n\n.hidden[_ngcontent-%COMP%]   .filterItem-selected[_ngcontent-%COMP%] {\n  color: var(--blue);\n  transition: color 0.5s ease;\n}\n\n.hidden[_ngcontent-%COMP%]   .filterItem-selected[_ngcontent-%COMP%]:hover {\n  color: hsla(var(--blue-h), var(--blue-s), var(--blue-l), 0.7);\n  transition: color 0.25s ease;\n}\n\n.displayed[_ngcontent-%COMP%] {\n  transition: color 0.5s ease;\n}\n\n.displayed[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  transition: color 0.5s ease;\n}\n\n.displayed[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  color: var(--grayblue);\n  transition: color 0.5s ease;\n}\n\n.displayed[_ngcontent-%COMP%]   .filterItem[_ngcontent-%COMP%] {\n  color: var(--gray);\n  transition: color 0.5s ease;\n}\n\n.displayed[_ngcontent-%COMP%]   .filterItem[_ngcontent-%COMP%]:hover {\n  color: hsla(var(--gray-h), var(--gray-s), var(--gray-l), 0.7);\n  transition: color 0.25s ease;\n}\n\n.displayed[_ngcontent-%COMP%]   .filterItem-selected[_ngcontent-%COMP%] {\n  color: var(--blue);\n  transition: color 0.5s ease;\n}\n\n.displayed[_ngcontent-%COMP%]   .filterItem-selected[_ngcontent-%COMP%]:hover {\n  color: hsla(var(--blue-h), var(--blue-s), var(--blue-l), 0.7);\n  transition: color 0.25s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVyaWVuY2UtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQTtFQUNFLGtCQUFBO0FBWEY7O0FBY0E7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtBQVhGOztBQWNBO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FBWEY7O0FBY0E7RUFDRSxrQkFBQTtBQVhGOztBQWNBO0VBQ0UsZ0JBQUE7QUFYRjs7QUFjQTtFQUNFLGdCQUFBO0FBWEY7O0FBY0E7O0VBRUUsYUFBQTtFQUNBLGtCQUFBO0FBWEY7O0FBY0E7RUFqREUsZ0VBQUE7RUFtREEsMkJBQUE7QUFYRjs7QUFhRTtFQXJEQSw2REFBQTtFQXVERSwyQkFBQTtBQVhKOztBQWNFO0VBMURBLHlFQUFBO0VBNERFLDJCQUFBO0FBWko7O0FBZUU7RUEvREEsNkRBQUE7RUFpRUUsMkJBQUE7RUFDQSwyQkFBQTtBQWJKOztBQWdCRTtFQXJFQSw2REFBQTtFQXVFRSw0QkFBQTtBQWRKOztBQWlCRTtFQUNFLGtCQUFBO0VBQ0EsMkJBQUE7QUFmSjs7QUFrQkU7RUEvRUEsNkRBQUE7RUFpRkUsNEJBQUE7QUFoQko7O0FBb0JBO0VBQ0UsMkJBQUE7QUFqQkY7O0FBa0JFO0VBQ0UsMkJBQUE7QUFoQko7O0FBbUJFO0VBQ0Usc0JBQUE7RUFDQSwyQkFBQTtBQWpCSjs7QUFvQkU7RUFDRSxrQkFBQTtFQUNBLDJCQUFBO0FBbEJKOztBQW9CRTtFQXBHQSw2REFBQTtFQXNHRSw0QkFBQTtBQWxCSjs7QUFxQkU7RUFDRSxrQkFBQTtFQUNBLDJCQUFBO0FBbkJKOztBQXNCRTtFQTlHQSw2REFBQTtFQWdIRSw0QkFBQTtBQXBCSiIsImZpbGUiOiJleHBlcmllbmNlLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gYWxwaGEoJHByb3BlcnR5LCAkY29sb3ItdmFyaWFibGUsICRvcGFjaXR5KSB7XG4gICRjb2xvci12YXJpYWJsZS1oOiB2YXIoI3skY29sb3ItdmFyaWFibGUgKyBcIi1oXCJ9KTtcbiAgJGNvbG9yLXZhcmlhYmxlLXM6IHZhcigjeyRjb2xvci12YXJpYWJsZSArIFwiLXNcIn0pO1xuICAkY29sb3ItdmFyaWFibGUtbDogdmFyKCN7JGNvbG9yLXZhcmlhYmxlICsgXCItbFwifSk7XG4gICN7JHByb3BlcnR5fTogaHNsYShcbiAgICAkY29sb3ItdmFyaWFibGUtaCxcbiAgICAkY29sb3ItdmFyaWFibGUtcyxcbiAgICAkY29sb3ItdmFyaWFibGUtbCxcbiAgICAkb3BhY2l0eVxuICApO1xufVxuXG5saSB7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMDtcbn1cblxuLmV4cGVyaWVuY2UtcHJpbWFyeSB7XG4gIG1hcmdpbi10b3A6IDEuMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAwLjVyZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufVxuXG4uZXhwZXJpZW5jZS1zZWNvbmRhcnkge1xuICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMC41cmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbn1cblxubGkge1xuICBsaXN0LXN0eWxlOiBzcXVhcmU7XG59XG5cbmxpOm50aC1jaGlsZChldmVuKSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmxpOm50aC1jaGlsZChvZGQpIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmZpbHRlckl0ZW0sXG4uZmlsdGVySXRlbS1zZWxlY3RlZCB7XG4gIG1hcmdpbjogMCA1cHg7XG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcbn1cblxuLmhpZGRlbiB7XG4gIEBpbmNsdWRlIGFscGhhKGNvbG9yLCAtLXdoaXRlLCAwLjcpO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzIGVhc2U7XG5cbiAgZGl2IGgzIHtcbiAgICBAaW5jbHVkZSBhbHBoYShjb2xvciwgLS1ibHVlLCAwLjcpO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuNXMgZWFzZTtcbiAgfVxuXG4gIGxpOm50aC1jaGlsZChvZGQpIHtcbiAgICBAaW5jbHVkZSBhbHBoYShjb2xvciwgLS1ncmF5Ymx1ZSwgMC43KTtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzIGVhc2U7XG4gIH1cblxuICAuZmlsdGVySXRlbSB7XG4gICAgQGluY2x1ZGUgYWxwaGEoY29sb3IsIC0tZ3JheSwgMC43KTtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzIGVhc2U7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC41cyBlYXNlO1xuICB9XG5cbiAgLmZpbHRlckl0ZW06aG92ZXIge1xuICAgIEBpbmNsdWRlIGFscGhhKGNvbG9yLCAtLWdyYXksIDAuNCk7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4yNXMgZWFzZTtcbiAgfVxuXG4gIC5maWx0ZXJJdGVtLXNlbGVjdGVkIHtcbiAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC41cyBlYXNlO1xuICB9XG5cbiAgLmZpbHRlckl0ZW0tc2VsZWN0ZWQ6aG92ZXIge1xuICAgIEBpbmNsdWRlIGFscGhhKGNvbG9yLCAtLWJsdWUsIDAuNyk7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4yNXMgZWFzZTtcbiAgfVxufVxuXG4uZGlzcGxheWVkIHtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC41cyBlYXNlO1xuICBkaXYgaDMge1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuNXMgZWFzZTtcbiAgfVxuXG4gIGxpOm50aC1jaGlsZChvZGQpIHtcbiAgICBjb2xvcjogdmFyKC0tZ3JheWJsdWUpO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuNXMgZWFzZTtcbiAgfVxuXG4gIC5maWx0ZXJJdGVtIHtcbiAgICBjb2xvcjogdmFyKC0tZ3JheSk7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC41cyBlYXNlO1xuICB9XG4gIC5maWx0ZXJJdGVtOmhvdmVyIHtcbiAgICBAaW5jbHVkZSBhbHBoYShjb2xvciwgLS1ncmF5LCAwLjcpO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMjVzIGVhc2U7XG4gIH1cblxuICAuZmlsdGVySXRlbS1zZWxlY3RlZCB7XG4gICAgY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuNXMgZWFzZTtcbiAgfVxuXG4gIC5maWx0ZXJJdGVtLXNlbGVjdGVkOmhvdmVyIHtcbiAgICBAaW5jbHVkZSBhbHBoYShjb2xvciwgLS1ibHVlLCAwLjcpO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMjVzIGVhc2U7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 2714:
/*!**************************************************************!*\
  !*** ./src/app/experience-list/experience-list.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperienceListComponent": () => (/* binding */ ExperienceListComponent)
/* harmony export */ });
/* harmony import */ var _models_role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/role */ 4946);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../experience-card/experience-card.component */ 1436);




function ExperienceListComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-experience-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", item_r1);
} }
class ExperienceListComponent {
    constructor() {
        this.role = new _models_role__WEBPACK_IMPORTED_MODULE_0__.Role();
    }
}
ExperienceListComponent.ɵfac = function ExperienceListComponent_Factory(t) { return new (t || ExperienceListComponent)(); };
ExperienceListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ExperienceListComponent, selectors: [["app-experience-list"]], inputs: { role: "role" }, decls: 5, vars: 2, consts: [[1, "experience-list"], [4, "ngFor", "ngForOf"], [3, "item"]], template: function ExperienceListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ExperienceListComponent_li_4_Template, 2, 1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.role.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.role.experience);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_1__.ExperienceCardComponent], styles: [".experience-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-width: 45rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVyaWVuY2UtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBQ0QiLCJmaWxlIjoiZXhwZXJpZW5jZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4cGVyaWVuY2UtbGlzdCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdG1heC13aWR0aDogNDVyZW07XG59Il19 */"] });


/***/ }),

/***/ 6604:
/*!************************************************************!*\
  !*** ./src/app/filter-toolbar/filter-toolbar.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterToolbarComponent": () => (/* binding */ FilterToolbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ 2186);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var _filter_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../filter.service */ 7021);
/* harmony import */ var _models_filter_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/filter-item */ 4096);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ 89);
/* harmony import */ var _svg_renderer_svg_renderer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../svg-renderer/svg-renderer.component */ 1438);










function FilterToolbarComponent_span_2_fa_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "fa-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", item_r3.faIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r3.filterName);
} }
function FilterToolbarComponent_span_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-svg-renderer", 9);
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", item_r3.iconURI);
} }
function FilterToolbarComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FilterToolbarComponent_span_2_Template_span_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const item_r3 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.ToggleFilterItem(item_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FilterToolbarComponent_span_2_fa_icon_1_Template, 2, 2, "fa-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, FilterToolbarComponent_span_2_ng_template_2_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r0.CheckFlag(item_r3) ? "filterItem-selected" : "filterItem")("matTooltip", item_r3.filterName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r3.isFA)("ngIfElse", _r5);
} }
function FilterToolbarComponent_fa_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "fa-icon", 10);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r1.faChevronLeft);
} }
function FilterToolbarComponent_fa_icon_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "fa-icon", 10);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r2.faChevronRight);
} }
class FilterToolbarComponent {
    constructor() {
        this.noIcon = _filter_service__WEBPACK_IMPORTED_MODULE_0__.FilterService.NoIcon;
        this.faChevronRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faChevronRight;
        this.faChevronLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faChevronLeft;
        this.expandedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter(true);
        this.isExpanded = true;
        this.filterObjects = new Array();
    }
    ngOnInit() {
        if (window.innerWidth < 600) {
            this.isExpanded = false;
        }
        this.filterObjects.push(new _filter_service__WEBPACK_IMPORTED_MODULE_0__.FilterIconPair(_models_filter_item__WEBPACK_IMPORTED_MODULE_1__.FilterItem.CSharp, 'C#', this.noIcon, false, 'csharp'));
        this.filterObjects.push(new _filter_service__WEBPACK_IMPORTED_MODULE_0__.FilterIconPair(_models_filter_item__WEBPACK_IMPORTED_MODULE_1__.FilterItem.Unity, 'Unity', _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faUnity));
        this.filterObjects.push(new _filter_service__WEBPACK_IMPORTED_MODULE_0__.FilterIconPair(_models_filter_item__WEBPACK_IMPORTED_MODULE_1__.FilterItem.Xamarin, 'Xamarin', this.noIcon, false, 'xamarin'));
        this.filterObjects.push(new _filter_service__WEBPACK_IMPORTED_MODULE_0__.FilterIconPair(_models_filter_item__WEBPACK_IMPORTED_MODULE_1__.FilterItem.Salesforce, 'Salesforce', _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faSalesforce));
        this.filterObjects.push(new _filter_service__WEBPACK_IMPORTED_MODULE_0__.FilterIconPair(_models_filter_item__WEBPACK_IMPORTED_MODULE_1__.FilterItem.Angular, 'Angular', _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faAngular));
        this.filterObjects.push(new _filter_service__WEBPACK_IMPORTED_MODULE_0__.FilterIconPair(_models_filter_item__WEBPACK_IMPORTED_MODULE_1__.FilterItem.HTML, 'HTML', _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faHtml5));
        this.filterObjects.push(new _filter_service__WEBPACK_IMPORTED_MODULE_0__.FilterIconPair(_models_filter_item__WEBPACK_IMPORTED_MODULE_1__.FilterItem.CSS, 'CSS', _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faCss3));
        this.filterObjects.push(new _filter_service__WEBPACK_IMPORTED_MODULE_0__.FilterIconPair(_models_filter_item__WEBPACK_IMPORTED_MODULE_1__.FilterItem.JavaScript, 'JavaScript', _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faJs));
        this.filterObjects.push(new _filter_service__WEBPACK_IMPORTED_MODULE_0__.FilterIconPair(_models_filter_item__WEBPACK_IMPORTED_MODULE_1__.FilterItem.TypeScript, 'TypeScript', this.noIcon, false, 'typescript'));
        this.filterObjects.push(new _filter_service__WEBPACK_IMPORTED_MODULE_0__.FilterIconPair(_models_filter_item__WEBPACK_IMPORTED_MODULE_1__.FilterItem.NodeJS, 'NodeJS', _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faNode));
        this.filterObjects.push(new _filter_service__WEBPACK_IMPORTED_MODULE_0__.FilterIconPair(_models_filter_item__WEBPACK_IMPORTED_MODULE_1__.FilterItem.React, 'React', _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faReact));
        this.filterObjects.push(new _filter_service__WEBPACK_IMPORTED_MODULE_0__.FilterIconPair(_models_filter_item__WEBPACK_IMPORTED_MODULE_1__.FilterItem.Flutter, 'Flutter', this.noIcon, false, 'flutter'));
        this.filterObjects.push(new _filter_service__WEBPACK_IMPORTED_MODULE_0__.FilterIconPair(_models_filter_item__WEBPACK_IMPORTED_MODULE_1__.FilterItem.CPlusPlus, 'C/C++', this.noIcon, false, 'cplusplus'));
        this.filterObjects.push(new _filter_service__WEBPACK_IMPORTED_MODULE_0__.FilterIconPair(_models_filter_item__WEBPACK_IMPORTED_MODULE_1__.FilterItem.ElasticSearch, 'ElasticSearch', this.noIcon, false, 'elasticsearch'));
        this.filterObjects.push(new _filter_service__WEBPACK_IMPORTED_MODULE_0__.FilterIconPair(_models_filter_item__WEBPACK_IMPORTED_MODULE_1__.FilterItem.RabbitMQ, 'ReactNative', this.noIcon, false, 'reactnative'));
        this.filterObjects.push(new _filter_service__WEBPACK_IMPORTED_MODULE_0__.FilterIconPair(_models_filter_item__WEBPACK_IMPORTED_MODULE_1__.FilterItem.RabbitMQ, 'RabbitMQ', this.noIcon, false, 'rabbitmq'));
    }
    ToggleFilterItem(filtereableItem) {
        _filter_service__WEBPACK_IMPORTED_MODULE_0__.FilterService.ToggleFilterItem(filtereableItem);
    }
    CheckFlag(item) {
        return (_filter_service__WEBPACK_IMPORTED_MODULE_0__.FilterService.CurrentFilters & item.value) != 0;
    }
    ToggleExpanded() {
        this.isExpanded = !this.isExpanded;
        // Are we on a desktop? If so, emit an expand event
        if (window.innerWidth >= 600) {
            this.expandedEvent.emit(this.isExpanded);
        }
    }
}
FilterToolbarComponent.ɵfac = function FilterToolbarComponent_Factory(t) { return new (t || FilterToolbarComponent)(); };
FilterToolbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FilterToolbarComponent, selectors: [["app-filter-toolbar"]], outputs: { expandedEvent: "expandedEvent" }, decls: 6, vars: 4, consts: [["id", "filter-toolbar-container", 3, "ngClass"], ["id", "filter-toolbar"], ["class", "filterItem", "matTooltipPosition", "right", 3, "ngClass", "matTooltip", "click", 4, "ngFor", "ngForOf"], ["id", "filter-handle", 3, "click"], [3, "icon", 4, "ngIf"], ["matTooltipPosition", "right", 1, "filterItem", 3, "ngClass", "matTooltip", "click"], ["size", "2x", 3, "icon", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["size", "2x", 3, "icon"], [3, "title"], [3, "icon"]], template: function FilterToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, FilterToolbarComponent_span_2_Template, 4, 4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FilterToolbarComponent_Template_div_click_3_listener() { return ctx.ToggleExpanded(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, FilterToolbarComponent_fa_icon_4_Template, 1, 1, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, FilterToolbarComponent_fa_icon_5_Template, 1, 1, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.isExpanded ? "expanded" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.filterObjects);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isExpanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isExpanded === false);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltip, _svg_renderer_svg_renderer_component__WEBPACK_IMPORTED_MODULE_2__.SvgRendererComponent], styles: ["#filter-toolbar-container[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1;\n  top: 50%;\n  transform: translate(0%, -50%);\n  display: flex;\n}\n\n.expanded[_ngcontent-%COMP%] {\n  left: 16px;\n  transition: left 0.25s ease;\n}\n\n.hidden[_ngcontent-%COMP%] {\n  left: -70px;\n  transition: left 0.25s ease;\n}\n\n#filter-toolbar-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.7);\n}\n\n#filter-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n  padding: 20px 10px;\n  border-radius: 10px;\n  max-height: 50vh;\n  overflow-y: scroll;\n}\n\n#filter-toolbar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n\n\n#filter-toolbar[_ngcontent-%COMP%] {\n  -ms-overflow-style: none; \n  scrollbar-width: none; \n}\n\n#filter-handle[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 20px;\n  align-self: center;\n  border-radius: 0 10px 10px 0;\n  display: flex;\n  align-items: center;\n}\n\n.filterItem[_ngcontent-%COMP%], .filterItem-selected[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  fill: currentColor;\n}\n\n.filterItem[_ngcontent-%COMP%] {\n  color: var(--gray);\n  transition: color 0.5s ease;\n}\n\n.filterItem[_ngcontent-%COMP%]:hover {\n  color: hsla(var(--gray-h), var(--gray-s), var(--gray-l), 0.7);\n  transition: color 0.25s ease;\n}\n\n.filterItem-selected[_ngcontent-%COMP%] {\n  color: var(--blue);\n  transition: color 0.5s ease;\n}\n\n.filterItem-selected[_ngcontent-%COMP%]:hover {\n  color: hsla(var(--blue-h), var(--blue-s), var(--blue-l), 0.7);\n  transition: color 0.25s ease;\n}\n\n@media screen and (max-width: 600px) {\n  #filter-toolbar-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    background-color: rgb(0, 0, 0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlci10b29sYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FBWEo7O0FBY0E7RUFDSSxVQUFBO0VBQ0EsMkJBQUE7QUFYSjs7QUFjQTtFQUNJLFdBQUE7RUFDQSwyQkFBQTtBQVhKOztBQWNBO0VBQ0ksb0NBQUE7QUFYSjs7QUFjQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUVBLGtCQUFBO0VBQ0EsbUJBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0FBYko7O0FBZ0JBO0VBQ0ksYUFBQTtBQWJKOztBQWdCQSw0Q0FBQTs7QUFDQTtFQUNJLHdCQUFBLEVBQUEsZ0JBQUE7RUFDQSxxQkFBQSxFQUFBLFlBQUE7QUFiSjs7QUFnQkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFiSjs7QUFpQkE7O0VBRUUsYUFBQTtFQUNBLGtCQUFBO0FBZEY7O0FBaUJBO0VBQ0ksa0JBQUE7RUFDQSwyQkFBQTtBQWRKOztBQWdCRTtFQXpFRSw2REFBQTtFQTJFQSw0QkFBQTtBQWJKOztBQWdCRTtFQUNFLGtCQUFBO0VBQ0EsMkJBQUE7QUFiSjs7QUFnQkU7RUFuRkUsNkRBQUE7RUFxRkEsNEJBQUE7QUFiSjs7QUFpQkU7RUFDRTtJQUNJLDhCQUFBO0VBZE47QUFDRiIsImZpbGUiOiJmaWx0ZXItdG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBhbHBoYSgkcHJvcGVydHksICRjb2xvci12YXJpYWJsZSwgJG9wYWNpdHkpIHtcbiAgICAkY29sb3ItdmFyaWFibGUtaDogdmFyKCN7JGNvbG9yLXZhcmlhYmxlICsgXCItaFwifSk7XG4gICAgJGNvbG9yLXZhcmlhYmxlLXM6IHZhcigjeyRjb2xvci12YXJpYWJsZSArIFwiLXNcIn0pO1xuICAgICRjb2xvci12YXJpYWJsZS1sOiB2YXIoI3skY29sb3ItdmFyaWFibGUgKyBcIi1sXCJ9KTtcbiAgICAjeyRwcm9wZXJ0eX06IGhzbGEoXG4gICAgICAkY29sb3ItdmFyaWFibGUtaCxcbiAgICAgICRjb2xvci12YXJpYWJsZS1zLFxuICAgICAgJGNvbG9yLXZhcmlhYmxlLWwsXG4gICAgICAkb3BhY2l0eVxuICAgICk7XG4gIH1cblxuI2ZpbHRlci10b29sYmFyLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5leHBhbmRlZCB7XG4gICAgbGVmdDogMTZweDtcbiAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuMjVzIGVhc2U7XG59XG5cbi5oaWRkZW4ge1xuICAgIGxlZnQ6IC03MHB4O1xuICAgIHRyYW5zaXRpb246IGxlZnQgMC4yNXMgZWFzZTtcbn1cblxuI2ZpbHRlci10b29sYmFyLWNvbnRhaW5lciA+ICoge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43KTtcbn1cblxuI2ZpbHRlci10b29sYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgICBtYXgtaGVpZ2h0OiA1MHZoO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuI2ZpbHRlci10b29sYmFyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbiAgXG4vKiBIaWRlIHNjcm9sbGJhciBmb3IgSUUsIEVkZ2UgYW5kIEZpcmVmb3ggKi9cbiNmaWx0ZXItdG9vbGJhciB7XG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLyogSUUgYW5kIEVkZ2UgKi9cbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7ICAvKiBGaXJlZm94ICovXG59XG5cbiNmaWx0ZXItaGFuZGxlIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cbi5maWx0ZXJJdGVtLFxuLmZpbHRlckl0ZW0tc2VsZWN0ZWQge1xuICBtYXJnaW46IDAgNXB4O1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG59XG5cbi5maWx0ZXJJdGVtIHtcbiAgICBjb2xvcjogdmFyKC0tZ3JheSk7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC41cyBlYXNlO1xuICB9XG4gIC5maWx0ZXJJdGVtOmhvdmVyIHtcbiAgICBAaW5jbHVkZSBhbHBoYShjb2xvciwgLS1ncmF5LCAwLjcpO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMjVzIGVhc2U7XG4gIH1cblxuICAuZmlsdGVySXRlbS1zZWxlY3RlZCB7XG4gICAgY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuNXMgZWFzZTtcbiAgfVxuXG4gIC5maWx0ZXJJdGVtLXNlbGVjdGVkOmhvdmVyIHtcbiAgICBAaW5jbHVkZSBhbHBoYShjb2xvciwgLS1ibHVlLCAwLjcpO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMjVzIGVhc2U7XG4gIH1cblxuICAvLyBQaG9uZSBTdHlsaW5nXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgI2ZpbHRlci10b29sYmFyLWNvbnRhaW5lciA+ICoge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApO1xuICAgIH1cbiAgfSJdfQ== */"] });


/***/ }),

/***/ 7021:
/*!***********************************!*\
  !*** ./src/app/filter.service.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterIconPair": () => (/* binding */ FilterIconPair),
/* harmony export */   "FilterService": () => (/* binding */ FilterService)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class FilterService {
    constructor() { }
    static ToggleFilterItem(filterItem) {
        // Is the filter already selected?
        FilterService.CurrentFilters ^= filterItem.value;
    }
}
FilterService.NoIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faFill;
FilterService.CurrentFilters = 0;
FilterService.ɵfac = function FilterService_Factory(t) { return new (t || FilterService)(); };
FilterService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FilterService, factory: FilterService.ɵfac, providedIn: 'root' });
class FilterIconPair {
    constructor(a, b, c, isFA = true, iconString = '') {
        this.filterName = '';
        this.value = 0;
        this.faIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faFill;
        this.iconURI = '';
        this.isFA = true;
        this.value = a;
        this.filterName = b;
        this.faIcon = c;
        this.isFA = isFA;
        this.iconURI = iconString;
    }
}


/***/ }),

/***/ 3482:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent),
/* harmony export */   "PropertyType": () => (/* binding */ PropertyType)
/* harmony export */ });
/* harmony import */ var _models_contact_me__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/contact-me */ 8513);
/* harmony import */ var _models_education__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/education */ 3448);
/* harmony import */ var _models_on_scroll_value_pair__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/on-scroll-value-pair */ 7432);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contact/contact.component */ 1563);






const _c0 = ["titleElement"];
const _c1 = ["header"];
const _c2 = ["header_offset"];
const _c3 = ["hideOnScroll"];
const _c4 = ["hideOnScrollPhone"];
class HeaderComponent {
    constructor() {
        this.headerValues = new _models_on_scroll_value_pair__WEBPACK_IMPORTED_MODULE_2__.OnScrollValuePair(0, 100, 0, 50);
        this.titleValues = new _models_on_scroll_value_pair__WEBPACK_IMPORTED_MODULE_2__.OnScrollValuePair(4, 4, 4, 2);
        this.colorValues = new _models_on_scroll_value_pair__WEBPACK_IMPORTED_MODULE_2__.OnScrollValuePair([0, 0, 0], [255, 255, 255], [255, 255, 255], [255, 255, 255]);
        this.opacityValues = new _models_on_scroll_value_pair__WEBPACK_IMPORTED_MODULE_2__.OnScrollValuePair(1, 0, 1, 0);
        this.backgroundColorValues = new _models_on_scroll_value_pair__WEBPACK_IMPORTED_MODULE_2__.OnScrollValuePair([0, 0, 0, 0], [0, 0, 0, 1], [0, 0, 0, 0], [0, 0, 0, 1]);
        this.finalScrollDistance = 350;
        this.title = '';
        this.subtitle = '';
        this.education = new _models_education__WEBPACK_IMPORTED_MODULE_1__.Education();
        this.contact = new _models_contact_me__WEBPACK_IMPORTED_MODULE_0__.ContactMe();
        this.isInitialized = false;
        this.counter = 0;
    }
    ngAfterViewChecked() {
        // TODO: Probably due to something caused by app.component's styling, the header's initial values on mobile for PROD builds
        // ONLY get messed up. Waited until after a few view checks to grab the initial heights
        this.counter++;
        // Were the header and offset elements found?
        if (this.counter > 2 && !this.isInitialized && this.headerElement && this.offsetElement) {
            // Get the native element
            let headerNativeElement = this.headerElement.nativeElement;
            this.headerValues.initialMobileValue =
                document.querySelector('header').offsetHeight;
            this.headerValues.initialDesktopValue =
                document.querySelector('header').offsetHeight;
            // Update the height of the offset element
            this.offsetElement.nativeElement.style.height =
                headerNativeElement.offsetHeight.toString() + 'px';
            // Update font colors
            this.headerElement.nativeElement.style.color =
                this.UpdatePropertyOnScroll(PropertyType.color, this.colorValues);
            // Set the final scroll distance
            this.finalScrollDistance = screen.availHeight * 0.75;
            this.isInitialized = true;
            console.log(this.headerValues.initialMobileValue);
        }
    }
    onScroll(event) {
        if (!this.isInitialized)
            return false;
        this.UpdateScrollValues();
        return true;
    }
    UpdateScrollValues() {
        // Update height
        this.headerElement.nativeElement.style.height = this.UpdatePropertyOnScroll(PropertyType.height, this.headerValues);
        // Update font colors
        this.headerElement.nativeElement.style.color = this.UpdatePropertyOnScroll(PropertyType.color, this.colorValues);
        // Update transparency of any hideOnScroll elements
        this.hideOnScrollElements.forEach((element) => {
            element.nativeElement.style.opacity = this.UpdatePropertyOnScroll(PropertyType.opacity, this.opacityValues, 2);
        });
        // Update font size
        this.titleElement.nativeElement.style.fontSize =
            this.UpdatePropertyOnScroll(PropertyType.fontSize, this.titleValues);
        // Update background
        this.headerElement.nativeElement.style.background =
            this.UpdatePropertyOnScroll(PropertyType.background, this.backgroundColorValues, 2);
        // Update mobile only hide on scroll
        if (window.innerWidth < 600) {
            this.hideOnScrollPhoneElements.forEach((element) => {
                element.nativeElement.style.opacity = this.UpdatePropertyOnScroll(PropertyType.opacity, this.opacityValues, 2);
            });
        }
    }
    // TODO: Update to be more functional, return CSS string
    // example: this.headerElement.nativeElement.style.height = this.UpdatePropertyOnScroll (height, valuePair);
    UpdatePropertyOnScroll(propertyType, valuePair, speed = 1) {
        // Get the distance the user has scrolled so far
        // Cap scroll distance off at 0
        let scrollDistance = Math.max(0, window.pageYOffset);
        // Calculate the percent towards the final scroll distance and cap at 1
        let scrollPercent = speed * Math.min(scrollDistance / this.finalScrollDistance, 1);
        // Is this a mobile device?
        let isMobile = window.innerWidth < 600;
        let newValue;
        // Calculate the new value
        // Is the property color or background?
        if (propertyType == PropertyType.color ||
            propertyType == PropertyType.background) {
            newValue = Array();
            // If so, iterate through the value arrays and calculate the value for the current index
            for (let index = 0; index < valuePair.initialMobileValue.length; index++) {
                if (isMobile) {
                    newValue[index] =
                        (1 - scrollPercent) * valuePair.initialMobileValue[index] +
                            scrollPercent * valuePair.finalMobileValue[index];
                }
                else {
                    newValue[index] =
                        (1 - scrollPercent) * valuePair.initialDesktopValue[index] +
                            scrollPercent * valuePair.finalDesktopValue[index];
                }
            }
        }
        else {
            // Otherwise, just calculate the new value
            if (isMobile) {
                newValue =
                    (1 - scrollPercent) * valuePair.initialMobileValue +
                        scrollPercent * valuePair.finalMobileValue;
            }
            else {
                newValue =
                    (1 - scrollPercent) * valuePair.initialDesktopValue +
                        scrollPercent * valuePair.finalDesktopValue;
            }
        }
        // Update the property
        switch (propertyType) {
            case PropertyType.height:
                return newValue.toString() + 'px';
            case PropertyType.fontSize:
                return newValue.toString() + 'rem';
            case PropertyType.color:
                return `rgb(${newValue[0]},${newValue[1]},${newValue[2]})`;
            case PropertyType.opacity:
                return newValue.toString();
            case PropertyType.background:
                return `rgba(${newValue[0]},${newValue[1]},${newValue[2]}, ${newValue[3]})`;
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c4, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.titleElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.headerElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.offsetElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.hideOnScrollElements = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.hideOnScrollPhoneElements = _t);
    } }, hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("scroll", function HeaderComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
    } }, inputs: { title: "title", subtitle: "subtitle", education: "education", contact: "contact" }, decls: 17, vars: 3, consts: [["id", "header-overlay"], ["header", ""], ["titleElement", ""], ["hideOnScroll", ""], ["hideOnScrollPhone", ""], [3, "contact"], [2, "height", "2rem"], ["id", "header-offset"], ["header_offset", ""]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "header")(1, "div", 0, 1)(3, "section")(4, "h1", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h2", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "section", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "app-contact", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "section", 6, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "div", 7, 8);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.subtitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("contact", ctx.contact);
    } }, dependencies: [_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__.ContactComponent], styles: ["header[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n  padding: 0;\n}\n\n#header-overlay[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n  display: grid;\n  grid-template-columns: auto auto;\n  overflow: hidden;\n}\n\nsection[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n@media screen and (max-width: 600px) {\n  #header-overlay[_ngcontent-%COMP%] {\n    grid-template-columns: auto;\n    padding: 0.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsMkJBQUE7SUFHQSxlQUFBO0VBREY7QUFDRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiBjYWxjKDEwMCUpOy8vIC0gMiAqIHZhcigtLXNpdGUtc2lkZS1wYWRkaW5nKSk7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuI2hlYWRlci1vdmVybGF5IHtcbiAgcGFkZGluZzogMCAxcmVtO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICNoZWFkZXItb3ZlcmxheSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgfVxufVxuIl19 */"] });
var PropertyType;
(function (PropertyType) {
    PropertyType[PropertyType["height"] = 0] = "height";
    PropertyType[PropertyType["fontSize"] = 1] = "fontSize";
    PropertyType[PropertyType["color"] = 2] = "color";
    PropertyType[PropertyType["opacity"] = 3] = "opacity";
    PropertyType[PropertyType["background"] = 4] = "background";
})(PropertyType || (PropertyType = {}));


/***/ }),

/***/ 8513:
/*!**************************************!*\
  !*** ./src/app/models/contact-me.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactMe": () => (/* binding */ ContactMe)
/* harmony export */ });
class ContactMe {
    constructor() {
        this.name = '';
        this.title = '';
        this.email = '';
        this.phone = '';
        this.location = '';
        this.linkedin = '';
        this.github = '';
    }
}


/***/ }),

/***/ 3448:
/*!*************************************!*\
  !*** ./src/app/models/education.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Education": () => (/* binding */ Education)
/* harmony export */ });
class Education {
    constructor() {
        this.degree = '';
        this.university = '';
        this.endDate = '';
    }
}


/***/ }),

/***/ 5619:
/*!*******************************************!*\
  !*** ./src/app/models/experience-item.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperienceItem": () => (/* binding */ ExperienceItem)
/* harmony export */ });
class ExperienceItem {
    constructor() {
        this.role = '';
        this.company = '';
        this.location = '';
        this.startDate = '';
        this.endDate = '';
        this.filterableItems = 0;
        this.notes = new Array();
    }
}


/***/ }),

/***/ 4096:
/*!***************************************!*\
  !*** ./src/app/models/filter-item.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterItem": () => (/* binding */ FilterItem)
/* harmony export */ });
var FilterItem;
(function (FilterItem) {
    FilterItem[FilterItem["Null"] = 0] = "Null";
    FilterItem[FilterItem["CSharp"] = 1] = "CSharp";
    FilterItem[FilterItem["Unity"] = 2] = "Unity";
    FilterItem[FilterItem["Xamarin"] = 4] = "Xamarin";
    FilterItem[FilterItem["Salesforce"] = 8] = "Salesforce";
    FilterItem[FilterItem["Angular"] = 16] = "Angular";
    FilterItem[FilterItem["HTML"] = 32] = "HTML";
    FilterItem[FilterItem["CSS"] = 64] = "CSS";
    FilterItem[FilterItem["JavaScript"] = 128] = "JavaScript";
    FilterItem[FilterItem["TypeScript"] = 256] = "TypeScript";
    FilterItem[FilterItem["NodeJS"] = 512] = "NodeJS";
    FilterItem[FilterItem["React"] = 1024] = "React";
    FilterItem[FilterItem["Flutter"] = 2048] = "Flutter";
    FilterItem[FilterItem["CPlusPlus"] = 4096] = "CPlusPlus";
    FilterItem[FilterItem["ElasticSearch"] = 8192] = "ElasticSearch";
    FilterItem[FilterItem["ReactNative"] = 16384] = "ReactNative";
    FilterItem[FilterItem["RabbitMQ"] = 32768] = "RabbitMQ";
})(FilterItem || (FilterItem = {}));
// HTML | CSS | JavaScript | TypeScript | ElasticSearch | React | React Native =
// 0b1110011111110000


/***/ }),

/***/ 7432:
/*!************************************************!*\
  !*** ./src/app/models/on-scroll-value-pair.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnScrollValuePair": () => (/* binding */ OnScrollValuePair)
/* harmony export */ });
class OnScrollValuePair {
    constructor(initDesktop, finalDesktop, initMobile, finalMobile) {
        this.initialDesktopValue = initDesktop;
        this.finalDesktopValue = finalDesktop;
        this.initialMobileValue = initMobile;
        this.finalMobileValue = finalMobile;
    }
}


/***/ }),

/***/ 4946:
/*!********************************!*\
  !*** ./src/app/models/role.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Role": () => (/* binding */ Role)
/* harmony export */ });
class Role {
    constructor() {
        this.title = '';
        this.experience = new Array();
    }
}


/***/ }),

/***/ 2650:
/*!************************************!*\
  !*** ./src/app/phone-pipe.pipe.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhonePipePipe": () => (/* binding */ PhonePipePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class PhonePipePipe {
    transform(value) {
        // Pull out each segment of the phone number
        let areaCode = value.substring(0, 3);
        let centralOffice = value.substring(3, 6);
        let subscriberNumber = value.substring(6, 10);
        // Format each segment
        return `(${areaCode}) ${centralOffice}-${subscriberNumber}`;
    }
}
PhonePipePipe.ɵfac = function PhonePipePipe_Factory(t) { return new (t || PhonePipePipe)(); };
PhonePipePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "phonePipe", type: PhonePipePipe, pure: true });


/***/ }),

/***/ 206:
/*!****************************************************!*\
  !*** ./src/app/skill-card/skill-card.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillCardComponent": () => (/* binding */ SkillCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class SkillCardComponent {
    constructor() {
        this.title = '';
        this.skill = 0;
    }
}
SkillCardComponent.ɵfac = function SkillCardComponent_Factory(t) { return new (t || SkillCardComponent)(); };
SkillCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillCardComponent, selectors: [["app-skill-card"]], inputs: { title: "title", skill: "skill" }, decls: 4, vars: 5, consts: [[3, "for"], ["max", "10", 3, "id", "value"]], template: function SkillCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "progress", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.title)("value", ctx.skill);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.skill, "/10 ");
    } }, styles: ["label[_ngcontent-%COMP%], progress[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxsLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0oiLCJmaWxlIjoic2tpbGwtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsLCBwcm9ncmVzcyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59Il19 */"] });


/***/ }),

/***/ 5878:
/*!******************************************************!*\
  !*** ./src/app/skills-list/skills-list.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillsListComponent": () => (/* binding */ SkillsListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _skill_card_skill_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../skill-card/skill-card.component */ 206);



function SkillsListComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-skill-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", skill_r1.title)("skill", skill_r1.skill);
} }
class SkillsListComponent {
    constructor() {
        this.title = "";
        this.skills = new Array();
    }
}
SkillsListComponent.ɵfac = function SkillsListComponent_Factory(t) { return new (t || SkillsListComponent)(); };
SkillsListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SkillsListComponent, selectors: [["app-skills-list"]], inputs: { title: "title", skills: "skills" }, decls: 5, vars: 2, consts: [[4, "ngFor", "ngForOf"], [3, "title", "skill"]], template: function SkillsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section")(1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SkillsListComponent_li_4_Template, 2, 2, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.skills);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _skill_card_skill_card_component__WEBPACK_IMPORTED_MODULE_0__.SkillCardComponent], styles: ["h3[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nh3[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n  padding: 0.25rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxscy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0oiLCJmaWxlIjoic2tpbGxzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oMywgbGkge1xuICAgIHBhZGRpbmc6IDAuMjVyZW0gMDtcbn0iXX0= */"] });


/***/ }),

/***/ 1438:
/*!********************************************************!*\
  !*** ./src/app/svg-renderer/svg-renderer.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SvgRendererComponent": () => (/* binding */ SvgRendererComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);


function SvgRendererComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1)(2, "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "cplusplus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
function SvgRendererComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1)(2, "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "csharp");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
function SvgRendererComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1)(2, "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "flutter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
function SvgRendererComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1)(2, "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "typescript");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
function SvgRendererComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1)(2, "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "xamarin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
function SvgRendererComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 7)(2, "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "elasticsearch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 8)(5, "path", 9)(6, "path", 10)(7, "path", 11)(8, "path", 12)(9, "path", 13)(10, "path", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
function SvgRendererComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 15)(2, "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "rabbitmq");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
function SvgRendererComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 17)(2, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 18)(4, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} }
class SvgRendererComponent {
    constructor() {
        this.title = '';
    }
}
SvgRendererComponent.ɵfac = function SvgRendererComponent_Factory(t) { return new (t || SvgRendererComponent)(); };
SvgRendererComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SvgRendererComponent, selectors: [["app-svg-renderer"]], inputs: { title: "title" }, decls: 8, vars: 8, consts: [[4, "ngIf"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "width", "28", "height", "28", "viewBox", "0 0 32 32"], ["d", "M29.857 8c-0.223-0.387-0.531-0.724-0.869-0.92l-11.755-6.787c-0.677-0.391-1.785-0.391-2.463 0l-11.757 6.787c-0.677 0.391-1.231 1.351-1.231 2.133v13.573c0 0.392 0.139 0.827 0.361 1.213s0.531 0.724 0.869 0.919l11.755 6.788c0.677 0.391 1.785 0.391 2.463 0l11.755-6.788c0.339-0.195 0.647-0.532 0.869-0.919s0.361-0.821 0.361-1.213v-13.573c0.003-0.392-0.136-0.827-0.359-1.213zM16 25.479c-5.227 0-9.479-4.252-9.479-9.479s4.252-9.479 9.479-9.479c3.487 0.007 6.533 1.889 8.184 4.691l0.024 0.044-4.101 2.375c-0.837-1.426-2.361-2.369-4.106-2.372h-0c-2.613 0-4.739 2.127-4.739 4.74s2.125 4.74 4.739 4.74c1.745-0.004 3.269-0.946 4.095-2.348l0.012-0.022 4.103 2.373c-1.675 2.847-4.722 4.729-8.208 4.736h-0.001zM25.479 16.527h-1.053v1.053h-1.053v-1.053h-1.053v-1.053h1.053v-1.053h1.053v1.053h1.053zM29.428 16.527h-1.053v1.053h-1.053v-1.053h-1.052v-1.053h1.052v-1.053h1.053v1.053h1.053z"], ["d", "M16 0c-8.837 0-16 7.163-16 16v0c0 8.837 7.163 16 16 16v0c8.837 0 16-7.163 16-16v0c0-8.837-7.163-16-16-16v0zM12.568 9.493c0.954 0.006 1.863 0.191 2.697 0.524l-0.050-0.018v1.575c-0.84-0.475-1.844-0.755-2.914-0.755-0.030 0-0.060 0-0.090 0.001l0.005-0c-0.045-0.002-0.099-0.003-0.152-0.003-1.319 0-2.509 0.557-3.345 1.449l-0.002 0.002c-0.842 0.957-1.356 2.22-1.356 3.603 0 0.095 0.002 0.19 0.007 0.285l-0.001-0.013c-0.004 0.081-0.007 0.175-0.007 0.27 0 1.304 0.48 2.495 1.272 3.408l-0.005-0.006c0.785 0.842 1.901 1.367 3.14 1.367 0.059 0 0.119-0.001 0.178-0.004l-0.008 0c0.046 0.001 0.1 0.002 0.154 0.002 1.154 0 2.234-0.315 3.16-0.863l-0.029 0.016-0.005 1.44c-0.944 0.47-2.057 0.745-3.233 0.745-0.094 0-0.187-0.002-0.28-0.005l0.013 0c-0.073 0.003-0.159 0.005-0.246 0.005-1.595 0-3.034-0.665-4.056-1.733l-0.002-0.002c-1.007-1.125-1.623-2.618-1.623-4.255 0-0.102 0.002-0.204 0.007-0.304l-0.001 0.014c-0.004-0.086-0.006-0.187-0.006-0.289 0-1.781 0.695-3.399 1.829-4.598l-0.003 0.003c1.122-1.148 2.686-1.86 4.417-1.86 0.075 0 0.15 0.001 0.225 0.004l-0.011-0c0.040-0.002 0.095-0.004 0.151-0.005l0.009-0c0.042-0.001 0.092-0.001 0.142-0.001 0.007 0 0.015 0 0.022 0h-0.001zM20.385 9.7h1.115l-0.74 3.536h2.215l0.756-3.536h1.080l-0.74 3.536 2.309-0.005-0.2 0.929h-2.3l-0.549 2.64h2.469l-0.235 0.931h-2.421l-0.773 3.5h-1.107l0.756-3.5h-2.2l-0.74 3.5h-1.080l0.74-3.5h-2.32l0.175-0.931h2.331l0.535-2.635h-2.435l0.184-0.929h2.435zM20.575 14.16l-0.575 2.64h2.231l0.564-2.64z"], ["d", "M19.085 0l-16.019 16 4.933 4.933 20.912-20.917h-9.809zM19.104 14.763l-8.628 8.609 8.627 8.627h9.831l-8.613-8.624 8.613-8.613z"], ["d", "M0 16v16h32v-32h-32zM25.788 14.725c0.813 0.203 1.432 0.564 2.001 1.153 0.295 0.315 0.732 0.888 0.767 1.027 0.011 0.040-1.381 0.973-2.224 1.497-0.031 0.020-0.153-0.112-0.289-0.315-0.413-0.6-0.844-0.859-1.504-0.904-0.971-0.067-1.595 0.441-1.589 1.289-0.001 0.015-0.001 0.032-0.001 0.050 0 0.201 0.051 0.391 0.14 0.557l-0.003-0.006c0.213 0.441 0.611 0.707 1.853 1.244 2.292 0.987 3.272 1.636 3.881 2.56 0.68 1.031 0.833 2.677 0.371 3.901-0.507 1.331-1.767 2.235-3.54 2.533-0.548 0.097-1.848 0.083-2.437-0.024-1.285-0.229-2.504-0.864-3.256-1.697-0.295-0.324-0.869-1.173-0.833-1.233 0.015-0.021 0.147-0.103 0.293-0.188 0.144-0.081 0.681-0.392 1.189-0.687l0.92-0.533 0.193 0.285c0.269 0.411 0.857 0.975 1.213 1.163 1.021 0.539 2.423 0.463 3.113-0.157 0.257-0.217 0.419-0.54 0.419-0.9 0-0.021-0.001-0.042-0.002-0.062l0 0.003c0-0.371-0.047-0.533-0.24-0.813-0.248-0.355-0.756-0.653-2.199-1.28-1.651-0.711-2.361-1.152-3.012-1.853-0.392-0.445-0.694-0.981-0.871-1.57l-0.008-0.030c-0.121-0.452-0.152-1.585-0.056-2.041 0.34-1.596 1.544-2.707 3.281-3.037 0.564-0.107 1.875-0.067 2.428 0.071zM18.276 16.061l0.011 1.311h-4.167v11.835h-2.947v-11.835h-4.163v-1.285c0-0.712 0.015-1.307 0.035-1.32 0.016-0.021 2.551-0.032 5.623-0.027l5.593 0.016z"], ["d", "M9.516 1.896c-1.188 0-2.101 0.367-2.74 1.467-0.639 1.095-5.852 10.147-6.4 10.968-0.551 0.823-0.551 1.832 0.364 3.476 0.915 1.645 5.487 9.692 6.036 10.699s1.371 1.6 2.74 1.6h12.973c1.373 0 2.196-0.597 2.743-1.6 0.549-1.007 5.12-9.049 6.033-10.699 0.908-1.644 0.908-2.653 0.363-3.476-0.549-0.823-5.76-9.869-6.401-10.969-0.639-1.095-1.552-1.467-2.74-1.467zM8.916 8.661h3.063l4.037 7.076 4.033-7.076h3.065l-4.115 7.336 4.115 7.336h-3.019l-4.080-7.076-4.080 7.076h-3.020l4.111-7.336z"], ["xmlns", "http://www.w3.org/2000/svg", "width", "28", "height", "28", "viewBox", "0 0 32 32"], ["d", "M32 16.77c0-2.678-1.664-5.03-4.166-5.937a9.14 9.14 0 0 0 .162-1.718c0-5-4.057-9.048-9.035-9.048-2.92 0-5.626 1.393-7.33 3.746a4.78 4.78 0 0 0-2.935-1c-2.65 0-4.8 2.15-4.8 4.8 0 .582.108 1.15.298 1.677A6.36 6.36 0 0 0 0 15.243a6.31 6.31 0 0 0 4.179 5.951 9.02 9.02 0 0 0-.162 1.718 9.03 9.03 0 0 0 9.021 9.021c2.92 0 5.626-1.407 7.317-3.76.84.663 1.866 1.028 2.935 1.028 2.65 0 4.8-2.15 4.8-4.8 0-.582-.108-1.15-.298-1.677A6.37 6.37 0 0 0 32 16.771"], ["d", "M12.578 13.795l7.006 3.192 7.06-6.194a7.4 7.4 0 0 0 .149-1.555 7.91 7.91 0 0 0-7.899-7.899 7.89 7.89 0 0 0-6.505 3.435l-1.177 6.1z"], ["d", "M5.33 21.207a7.66 7.66 0 0 0-.15 1.582c0 4.37 3.557 7.912 7.926 7.912a7.92 7.92 0 0 0 6.546-3.462l1.163-6.073-1.555-2.975-7.033-3.205z"], ["d", "M5.288 9.09l4.8 1.136 1.055-5.45c-.65-.5-1.46-.77-2.3-.77A3.79 3.79 0 0 0 5.058 7.79c0 .446.08.893.23 1.298"], ["d", "M4.87 10.238c-2.137.703-3.638 2.76-3.638 5.018 0 2.205 1.366 4.166 3.408 4.95l6.735-6.086-1.23-2.637z"], ["d", "M20.87 27.24a3.8 3.8 0 0 0 2.286.784 3.79 3.79 0 0 0 3.787-3.787 3.82 3.82 0 0 0-.23-1.312l-4.788-1.123z"], ["d", "M21.843 20.544l5.275 1.23a5.33 5.33 0 0 0 3.638-5.031 5.29 5.29 0 0 0-3.408-4.937l-6.898 6.046z"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "-169 285.9 64 64", "width", "28", "height", "28"], ["d", "M-109.242 311.496h-20.113a1.82 1.82 0 0 1-1.82-1.82v-20.963c0-1.56-1.253-2.812-2.812-2.812h-7.185c-1.56 0-2.812 1.253-2.812 2.812v20.822c0 1.087-.874 1.962-1.962 1.962l-6.594.024c-1.087 0-1.985-.874-1.962-1.962l.047-20.845c0-1.56-1.253-2.812-2.812-2.812h-7.185c-1.56 0-2.812 1.253-2.812 2.812v58.682c0 1.37 1.11 2.505 2.505 2.505h55.516c1.37 0 2.505-1.11 2.505-2.505V314a2.49 2.49 0 0 0-2.505-2.505zm-9.43 22.027a3.27 3.27 0 0 1-3.262 3.261h-5.672a3.27 3.27 0 0 1-3.261-3.261v-5.672a3.27 3.27 0 0 1 3.261-3.261h5.672a3.27 3.27 0 0 1 3.262 3.261z"], ["height", "28", "width", "28", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "670.088 32.46226489559854 2224.1720000000005 2666.4877351044024"], ["d", "M2870 1250.22c0-145.34-182.01-283.079-461.07-368.495 64.4-284.424 35.78-510.711-90.34-583.159-29.07-16.994-63.05-25.044-100.17-25.044v99.728c20.57 0 37.12 4.025 50.98 11.627 60.82 34.882 87.21 167.703 66.63 338.536-4.91 42.038-12.96 86.311-22.8 131.479-87.66-21.466-183.36-38.012-283.98-48.745-60.37-82.734-122.98-157.865-186.04-223.604 145.79-135.504 282.64-209.741 375.66-209.741v-99.727c-122.99 0-283.98 87.653-446.76 239.703-162.79-151.156-323.78-237.914-446.76-237.914v99.727c92.57 0 229.86 73.79 375.65 208.399-62.61 65.74-125.22 140.423-184.7 223.157-101.07 10.733-196.77 27.279-284.42 49.192-10.29-44.72-17.89-88.1-23.26-129.69-21.01-170.833 4.92-303.654 65.3-338.983 13.41-8.05 30.85-11.627 51.43-11.627v-99.728c-37.57 0-71.56 8.05-101.07 25.044-125.67 72.447-153.84 298.287-89 581.817C857.119 968.036 676 1105.33 676 1250.22c0 145.35 182.013 283.09 461.07 368.5-64.4 284.43-35.78 510.71 90.34 583.16 29.07 16.99 63.05 25.04 100.62 25.04 122.98 0 283.98-87.65 446.76-239.7 162.78 151.16 323.78 237.92 446.76 237.92 37.56 0 71.55-8.05 101.07-25.05 125.66-72.45 153.84-298.29 88.99-581.81 277.27-85.42 458.39-223.16 458.39-368.06zm-582.26-298.284c-16.55 57.694-37.12 117.164-60.38 176.644-18.33-35.77-37.56-71.55-58.58-107.33-20.57-35.773-42.49-70.655-64.4-104.643 63.5 9.391 124.77 21.019 183.36 35.329zm-204.83 476.274c-34.88 60.38-70.65 117.62-107.77 170.84-66.64 5.81-134.16 8.94-202.14 8.94-67.53 0-135.06-3.13-201.24-8.5-37.12-53.22-73.35-110.01-108.23-169.94-33.99-58.58-64.84-118.06-93.02-177.98 27.73-59.93 59.03-119.86 92.58-178.44 34.88-60.37 70.65-117.616 107.77-170.834 66.64-5.814 134.16-8.944 202.14-8.944 67.53 0 135.06 3.13 201.24 8.497 37.12 53.218 73.35 110.011 108.23 169.941 33.99 58.58 64.84 118.06 93.02 177.99-28.18 59.92-59.03 119.85-92.58 178.43zm144.45-58.13a1918.154 1918.154 0 0 1 61.72 177.98c-58.59 14.31-120.3 26.39-184.25 35.78 21.91-34.43 43.82-69.76 64.4-105.99 20.57-35.77 39.8-72 58.13-107.77zm-453.47 477.17c-41.59-42.94-83.18-90.79-124.32-143.11 40.25 1.79 81.39 3.13 122.98 3.13 42.04 0 83.63-.89 124.33-3.13a1746.499 1746.499 0 0 1-122.99 143.11zm-332.72-263.41c-63.5-9.39-124.77-21.02-183.35-35.33 16.54-57.69 37.12-117.17 60.37-176.65 18.34 35.78 37.57 71.56 58.58 107.33 21.02 35.78 42.49 70.66 64.4 104.65zm330.49-930.638c41.59 42.931 83.18 90.783 124.32 143.106-40.25-1.789-81.39-3.13-122.98-3.13-42.04 0-83.63.894-124.32 3.13a1746.3 1746.3 0 0 1 122.98-143.106zm-330.94 263.405c-21.91 34.435-43.82 69.764-64.39 105.983-20.57 35.78-39.8 71.56-58.14 107.33a1914.757 1914.757 0 0 1-61.71-177.984c58.58-13.863 120.29-25.938 184.24-35.329zM1036 1476.51c-158.309-67.53-260.72-156.07-260.72-226.29 0-70.21 102.411-159.2 260.72-226.28 38.46-16.55 80.5-31.308 123.88-45.171 25.49 87.651 59.03 178.881 100.62 272.351-41.14 93.02-74.24 183.8-99.28 271.01-44.27-13.87-86.31-29.07-125.22-45.62zm240.6 639.06c-60.82-34.88-87.21-167.7-66.63-338.54 4.92-42.03 12.96-86.31 22.8-131.48 87.66 21.47 183.36 38.02 283.98 48.75 60.37 82.73 122.98 157.86 186.04 223.6-145.79 135.51-282.64 209.74-375.66 209.74-20.12-.44-37.11-4.47-50.53-12.07zm1060.78-340.77c21.01 170.83-4.92 303.65-65.3 338.98-13.41 8.05-30.85 11.63-51.43 11.63-92.57 0-229.86-73.79-375.65-208.4 62.61-65.74 125.22-140.42 184.7-223.16 101.07-10.73 196.77-27.28 284.42-49.19 10.29 45.17 18.34 88.55 23.26 130.14zm172.17-298.29c-38.46 16.55-80.5 31.31-123.88 45.17-25.49-87.65-59.03-178.88-100.62-272.35 41.15-93.02 74.24-183.8 99.28-271.009 44.28 13.864 86.31 29.069 125.67 45.619 158.31 67.52 260.72 156.07 260.72 226.28-.45 70.22-102.86 159.21-261.17 226.29z"], ["d", "M1772.55 1454.6c112.88 0 204.38-91.5 204.38-204.38 0-112.87-91.5-204.37-204.38-204.37-112.87 0-204.37 91.5-204.37 204.37 0 112.88 91.5 204.38 204.37 204.38zM775.625 2578.81H708.16V2695h-38.072v-287.22h95.082c32.351 0 57.207 7.37 74.566 22.1 17.491 14.72 26.237 36.16 26.237 64.3 0 17.89-4.866 33.47-14.598 46.76-9.6 13.28-23.014 23.21-40.242 29.78l67.465 121.91v2.37h-40.637zm-67.465-30.97h58.194c18.806 0 33.732-4.87 44.779-14.6 11.178-9.73 16.767-22.75 16.767-39.06 0-17.75-5.326-31.36-15.978-40.83-10.521-9.47-25.776-14.27-45.766-14.4H708.16zm293.93 151.11c-28.936 0-52.477-9.47-70.625-28.41-18.149-19.07-27.223-44.52-27.223-76.34v-6.71c0-21.17 4.011-40.04 12.033-56.61 8.154-16.71 19.464-29.73 33.93-39.06 14.598-9.47 30.379-14.21 47.344-14.21 27.751 0 49.321 9.14 64.701 27.42 15.39 18.28 23.08 44.45 23.08 78.51v15.19H940.736c.526 21.05 6.642 38.08 18.346 51.1 11.836 12.88 26.828 19.33 44.978 19.33 12.89 0 23.8-2.63 32.74-7.89 8.95-5.26 16.77-12.23 23.48-20.91l22.29 17.36c-17.89 27.48-44.71 41.23-80.48 41.23zm-4.541-191.35c-14.729 0-27.091 5.39-37.086 16.17-9.995 10.66-16.176 25.65-18.543 44.98h106.92v-2.76c-1.05-18.54-6.05-32.88-14.99-43.01-8.95-10.25-21.05-15.38-36.301-15.38zM1259.52 2695c-2.11-4.21-3.82-11.7-5.13-22.49-16.97 17.62-37.22 26.44-60.76 26.44-21.04 0-38.33-5.92-51.88-17.76-13.41-11.97-20.12-27.09-20.12-45.37 0-22.22 8.42-39.45 25.25-51.68 16.96-12.37 40.77-18.55 71.41-18.55h35.51v-16.76c0-12.76-3.82-22.89-11.44-30.38-7.63-7.63-18.88-11.44-33.74-11.44-13.02 0-23.93 3.28-32.74 9.86-8.81 6.57-13.22 14.53-13.22 23.87h-36.69c0-10.65 3.75-20.91 11.24-30.78 7.63-9.99 17.89-17.88 30.78-23.67 13.02-5.78 27.28-8.68 42.8-8.68 24.6 0 43.86 6.18 57.8 18.55 13.94 12.23 21.17 29.13 21.7 50.69v98.24c0 19.6 2.5 35.18 7.5 46.75v3.16zm-60.56-27.81c11.44 0 22.29-2.96 32.55-8.88 10.25-5.92 17.68-13.61 22.29-23.08v-43.79h-28.61c-44.71 0-67.07 13.08-67.07 39.25 0 11.44 3.82 20.39 11.44 26.83 7.63 6.44 17.43 9.67 29.4 9.67zm234.15 1.97c13.02 0 24.4-3.95 34.13-11.84s15.12-17.75 16.17-29.59h34.53c-.66 12.23-4.87 23.87-12.63 34.92s-18.15 19.86-31.17 26.43c-12.89 6.58-26.56 9.87-41.03 9.87-29.06 0-52.21-9.67-69.44-29-17.09-19.47-25.64-46.03-25.64-79.7v-6.11c0-20.78 3.81-39.26 11.44-55.43 7.63-16.18 18.54-28.74 32.75-37.68 14.33-8.95 31.23-13.42 50.69-13.42 23.94 0 43.8 7.17 59.58 21.51 15.91 14.33 24.39 32.94 25.45 55.82h-34.53c-1.05-13.81-6.31-25.12-15.78-33.93-9.33-8.94-20.91-13.41-34.72-13.41-18.54 0-32.94 6.7-43.2 20.12-10.12 13.28-15.19 32.55-15.19 57.8v6.9c0 24.59 5.07 43.53 15.19 56.81 10.13 13.29 24.6 19.93 43.4 19.93zm175.37-239.28v51.68h39.85v28.21h-39.85v132.36c0 8.55 1.78 14.99 5.33 19.33 3.55 4.21 9.6 6.32 18.15 6.32 4.2 0 9.99-.79 17.35-2.37V2695c-9.6 2.63-18.93 3.95-28.01 3.95-16.3 0-28.6-4.94-36.89-14.8-8.28-9.86-12.42-23.87-12.42-42.02v-132.36h-38.87v-28.21h38.87v-51.68zM2017.81 2695h-38.08l-144.59-221.33V2695h-38.07v-287.22h38.07l144.99 222.32v-222.32h37.68zm193.32 0c-2.11-4.21-3.82-11.7-5.13-22.49-16.97 17.62-37.22 26.44-60.76 26.44-21.04 0-38.34-5.92-51.88-17.76-13.41-11.97-20.12-27.09-20.12-45.37 0-22.22 8.41-39.45 25.25-51.68 16.96-12.37 40.77-18.55 71.41-18.55h35.51v-16.76c0-12.76-3.82-22.89-11.45-30.38-7.62-7.63-18.87-11.44-33.73-11.44-13.02 0-23.93 3.28-32.74 9.86-8.81 6.57-13.22 14.53-13.22 23.87h-36.69c0-10.65 3.75-20.91 11.24-30.78 7.63-9.99 17.89-17.88 30.78-23.67 13.02-5.78 27.28-8.68 42.8-8.68 24.59 0 43.86 6.18 57.8 18.55 13.94 12.23 21.17 29.13 21.7 50.69v98.24c0 19.6 2.5 35.18 7.5 46.75v3.16zm-60.56-27.81c11.44 0 22.29-2.96 32.55-8.88 10.25-5.92 17.68-13.61 22.29-23.08v-43.79h-28.61c-44.71 0-67.07 13.08-67.07 39.25 0 11.44 3.82 20.39 11.44 26.83 7.63 6.44 17.43 9.67 29.4 9.67zm198.05-237.31v51.68h39.85v28.21h-39.85v132.36c0 8.55 1.78 14.99 5.33 19.33 3.55 4.21 9.6 6.32 18.15 6.32 4.2 0 9.99-.79 17.36-2.37V2695c-9.61 2.63-18.94 3.95-28.02 3.95-16.3 0-28.6-4.94-36.89-14.8-8.28-9.86-12.42-23.87-12.42-42.02v-132.36h-38.86v-28.21h38.86v-51.68zM2470.93 2695h-36.5v-213.44h36.5zm-39.46-270.06c0-5.91 1.78-10.91 5.33-14.99 3.68-4.08 9.07-6.11 16.17-6.11 7.11 0 12.5 2.03 16.18 6.11s5.52 9.08 5.52 14.99c0 5.92-1.84 10.85-5.52 14.8-3.68 3.94-9.07 5.92-16.18 5.92-7.1 0-12.49-1.98-16.17-5.92-3.55-3.95-5.33-8.88-5.33-14.8zm168.47 220.55l52.86-163.93h37.29L2613.55 2695h-27.82l-77.32-213.44h37.28zm211.07 53.46c-28.93 0-52.47-9.47-70.62-28.41-18.15-19.07-27.22-44.52-27.22-76.34v-6.71c0-21.17 4.01-40.04 12.03-56.61 8.15-16.71 19.46-29.73 33.93-39.06 14.6-9.47 30.38-14.21 47.34-14.21 27.75 0 49.32 9.14 64.71 27.42 15.38 18.28 23.08 44.45 23.08 78.51v15.19h-144.6c.53 21.05 6.64 38.08 18.35 51.1 11.83 12.88 26.83 19.33 44.97 19.33 12.89 0 23.81-2.63 32.75-7.89s16.77-12.23 23.48-20.91l22.29 17.36c-17.89 27.48-44.72 41.23-80.49 41.23zm-4.54-191.35c-14.72 0-27.09 5.39-37.08 16.17-10 10.66-16.18 25.65-18.54 44.98h106.91v-2.76c-1.05-18.54-6.05-32.88-14.99-43.01-8.94-10.25-21.04-15.38-36.3-15.38z"]], template: function SvgRendererComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SvgRendererComponent_div_0_Template, 5, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SvgRendererComponent_div_1_Template, 5, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SvgRendererComponent_div_2_Template, 5, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SvgRendererComponent_div_3_Template, 5, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SvgRendererComponent_div_4_Template, 5, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SvgRendererComponent_div_5_Template, 11, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SvgRendererComponent_div_6_Template, 5, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SvgRendererComponent_div_7_Template, 5, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title === "cplusplus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title === "csharp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title === "flutter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title === "typescript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title === "xamarin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title === "elasticsearch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title === "rabbitmq");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title === "reactnative");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["div[_ngcontent-%COMP%] {\n  height: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN2Zy1yZW5kZXJlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRiIsImZpbGUiOiJzdmctcmVuZGVyZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xuICBoZWlnaHQ6IDI4cHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ 1095:
/*!**************************************************!*\
  !*** ./src/app/wip-alert/wip-alert.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WipAlertComponent": () => (/* binding */ WipAlertComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);




const _c0 = ["wip_alert"];
class WipAlertComponent {
    constructor() {
        this.faXmark = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faXmark;
    }
    close() {
        this.wipAlertElement.nativeElement.style.display = "none";
    }
}
WipAlertComponent.ɵfac = function WipAlertComponent_Factory(t) { return new (t || WipAlertComponent)(); };
WipAlertComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WipAlertComponent, selectors: [["app-wip-alert"]], viewQuery: function WipAlertComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.wipAlertElement = _t.first);
    } }, decls: 6, vars: 1, consts: [["id", "wip-alert"], ["wip_alert", ""], [3, "click"], [3, "icon"]], template: function WipAlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WipAlertComponent_Template_button_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "WIP - Site is actively under development, please excuse any issues :)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faXmark);
    } }, dependencies: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FaIconComponent], styles: ["#wip-alert[_ngcontent-%COMP%] {\n  z-index: 9999;\n  position: fixed;\n  border-radius: 0.6rem;\n  width: 10rem;\n  background-color: var(--blue);\n  color: black;\n  bottom: 1rem;\n  right: 1rem;\n  padding: 1rem;\n  font-size: 1rem;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background: none;\n  color: inherit;\n  font-family: inherit;\n  border: none;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpcC1hbGVydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUFGIiwiZmlsZSI6IndpcC1hbGVydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFdJUCBBbGVydFxuI3dpcC1hbGVydCB7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm9yZGVyLXJhZGl1czogMC42cmVtO1xuICB3aWR0aDogMTByZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvdHRvbTogMXJlbTtcbiAgcmlnaHQ6IDFyZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBib3JkZXI6IG5vbmU7XG4gIGZsb2F0OiByaWdodDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    firebase: {
        projectId: 'resume-cdf24',
        appId: '1:972438190848:web:db3a526b97415a9e1d91e5',
        storageBucket: 'resume-cdf24.appspot.com',
        apiKey: 'AIzaSyBhm8OV2P_wtSrLRkqXDFZHARalKjqeVcA',
        authDomain: 'resume-cdf24.firebaseapp.com',
        messagingSenderId: '972438190848',
        measurementId: 'G-ELTLGLBHEF',
    },
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _sentry_angular_ivy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/angular-ivy */ 2052);
/* harmony import */ var _sentry_angular_ivy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/angular-ivy */ 6778);
/* harmony import */ var _sentry_angular_ivy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/angular-ivy */ 6356);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);




// import { environment } from './environments/environment.js';
// if (environment.production) {
//   enableProdMode();
// }
_sentry_angular_ivy__WEBPACK_IMPORTED_MODULE_1__.init({
    dsn: "https://953f62f29e44de26fab8242656793fa5@o4506140418441216.ingest.sentry.io/4506140429516800",
    integrations: [
        new _sentry_angular_ivy__WEBPACK_IMPORTED_MODULE_2__.BrowserTracing({
            // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
            tracePropagationTargets: ["localhost", "https://wild-sun-3772.fly.dev/", "https://michaelcmuniz.com", "https://resume.michaelcmuniz.com"],
            routingInstrumentation: _sentry_angular_ivy__WEBPACK_IMPORTED_MODULE_1__.routingInstrumentation,
        }),
        new _sentry_angular_ivy__WEBPACK_IMPORTED_MODULE_3__.Replay(),
    ],
    // Performance Monitoring
    tracesSampleRate: 1.0,
    // Session Replay
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});
(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.enableProdMode)();
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.platformBrowser()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .then((success) => console.error(`Hello Sentry`))
    .catch(err => console.error(err));


/***/ }),

/***/ 6700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 8685,
	"./af.js": 8685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 2614,
	"./ar-kw.js": 2614,
	"./ar-ly": 8630,
	"./ar-ly.js": 8630,
	"./ar-ma": 8674,
	"./ar-ma.js": 8674,
	"./ar-sa": 9032,
	"./ar-sa.js": 9032,
	"./ar-tn": 4730,
	"./ar-tn.js": 4730,
	"./ar.js": 254,
	"./az": 3052,
	"./az.js": 3052,
	"./be": 150,
	"./be.js": 150,
	"./bg": 3069,
	"./bg.js": 3069,
	"./bm": 3466,
	"./bm.js": 3466,
	"./bn": 8516,
	"./bn-bd": 557,
	"./bn-bd.js": 557,
	"./bn.js": 8516,
	"./bo": 6273,
	"./bo.js": 6273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 9815,
	"./bs.js": 9815,
	"./ca": 3331,
	"./ca.js": 3331,
	"./cs": 1320,
	"./cs.js": 1320,
	"./cv": 2219,
	"./cv.js": 2219,
	"./cy": 8266,
	"./cy.js": 8266,
	"./da": 6427,
	"./da.js": 6427,
	"./de": 7435,
	"./de-at": 2871,
	"./de-at.js": 2871,
	"./de-ch": 2994,
	"./de-ch.js": 2994,
	"./de.js": 7435,
	"./dv": 2357,
	"./dv.js": 2357,
	"./el": 5649,
	"./el.js": 5649,
	"./en-au": 9961,
	"./en-au.js": 9961,
	"./en-ca": 9878,
	"./en-ca.js": 9878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 864,
	"./en-ie.js": 864,
	"./en-il": 1579,
	"./en-il.js": 1579,
	"./en-in": 940,
	"./en-in.js": 940,
	"./en-nz": 6181,
	"./en-nz.js": 6181,
	"./en-sg": 4301,
	"./en-sg.js": 4301,
	"./eo": 5291,
	"./eo.js": 5291,
	"./es": 4529,
	"./es-do": 3764,
	"./es-do.js": 3764,
	"./es-mx": 2584,
	"./es-mx.js": 2584,
	"./es-us": 3425,
	"./es-us.js": 3425,
	"./es.js": 4529,
	"./et": 5203,
	"./et.js": 5203,
	"./eu": 678,
	"./eu.js": 678,
	"./fa": 3483,
	"./fa.js": 3483,
	"./fi": 6262,
	"./fi.js": 6262,
	"./fil": 2521,
	"./fil.js": 2521,
	"./fo": 4555,
	"./fo.js": 4555,
	"./fr": 3131,
	"./fr-ca": 8239,
	"./fr-ca.js": 8239,
	"./fr-ch": 1702,
	"./fr-ch.js": 1702,
	"./fr.js": 3131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 3821,
	"./ga.js": 3821,
	"./gd": 1753,
	"./gd.js": 1753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 2762,
	"./gom-deva.js": 2762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 2809,
	"./gu.js": 2809,
	"./he": 5402,
	"./he.js": 5402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 410,
	"./hr.js": 410,
	"./hu": 8288,
	"./hu.js": 8288,
	"./hy-am": 7928,
	"./hy-am.js": 7928,
	"./id": 1334,
	"./id.js": 1334,
	"./is": 6959,
	"./is.js": 6959,
	"./it": 4864,
	"./it-ch": 1124,
	"./it-ch.js": 1124,
	"./it.js": 4864,
	"./ja": 6141,
	"./ja.js": 6141,
	"./jv": 9187,
	"./jv.js": 9187,
	"./ka": 2136,
	"./ka.js": 2136,
	"./kk": 4332,
	"./kk.js": 4332,
	"./km": 8607,
	"./km.js": 8607,
	"./kn": 4305,
	"./kn.js": 4305,
	"./ko": 234,
	"./ko.js": 234,
	"./ku": 6003,
	"./ku.js": 6003,
	"./ky": 5061,
	"./ky.js": 5061,
	"./lb": 2786,
	"./lb.js": 2786,
	"./lo": 6183,
	"./lo.js": 6183,
	"./lt": 29,
	"./lt.js": 29,
	"./lv": 4169,
	"./lv.js": 4169,
	"./me": 8577,
	"./me.js": 8577,
	"./mi": 8177,
	"./mi.js": 8177,
	"./mk": 337,
	"./mk.js": 337,
	"./ml": 5260,
	"./ml.js": 5260,
	"./mn": 2325,
	"./mn.js": 2325,
	"./mr": 4695,
	"./mr.js": 4695,
	"./ms": 5334,
	"./ms-my": 7151,
	"./ms-my.js": 7151,
	"./ms.js": 5334,
	"./mt": 3570,
	"./mt.js": 3570,
	"./my": 7963,
	"./my.js": 7963,
	"./nb": 8028,
	"./nb.js": 8028,
	"./ne": 6638,
	"./ne.js": 6638,
	"./nl": 302,
	"./nl-be": 6782,
	"./nl-be.js": 6782,
	"./nl.js": 302,
	"./nn": 3501,
	"./nn.js": 3501,
	"./oc-lnc": 563,
	"./oc-lnc.js": 563,
	"./pa-in": 869,
	"./pa-in.js": 869,
	"./pl": 5302,
	"./pl.js": 5302,
	"./pt": 9687,
	"./pt-br": 7398,
	"./pt-br.js": 7398,
	"./pt.js": 9687,
	"./ro": 9107,
	"./ro.js": 9107,
	"./ru": 3627,
	"./ru.js": 3627,
	"./sd": 355,
	"./sd.js": 355,
	"./se": 3427,
	"./se.js": 3427,
	"./si": 1848,
	"./si.js": 1848,
	"./sk": 4590,
	"./sk.js": 4590,
	"./sl": 184,
	"./sl.js": 184,
	"./sq": 6361,
	"./sq.js": 6361,
	"./sr": 8965,
	"./sr-cyrl": 1287,
	"./sr-cyrl.js": 1287,
	"./sr.js": 8965,
	"./ss": 5456,
	"./ss.js": 5456,
	"./sv": 451,
	"./sv.js": 451,
	"./sw": 7558,
	"./sw.js": 7558,
	"./ta": 2702,
	"./ta.js": 2702,
	"./te": 3693,
	"./te.js": 3693,
	"./tet": 1243,
	"./tet.js": 1243,
	"./tg": 2500,
	"./tg.js": 2500,
	"./th": 5768,
	"./th.js": 5768,
	"./tk": 7761,
	"./tk.js": 7761,
	"./tl-ph": 5780,
	"./tl-ph.js": 5780,
	"./tlh": 9590,
	"./tlh.js": 9590,
	"./tr": 3807,
	"./tr.js": 3807,
	"./tzl": 3857,
	"./tzl.js": 3857,
	"./tzm": 654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 654,
	"./ug-cn": 845,
	"./ug-cn.js": 845,
	"./uk": 9232,
	"./uk.js": 9232,
	"./ur": 7052,
	"./ur.js": 7052,
	"./uz": 7967,
	"./uz-latn": 2233,
	"./uz-latn.js": 2233,
	"./uz.js": 7967,
	"./vi": 8615,
	"./vi.js": 8615,
	"./x-pseudo": 2320,
	"./x-pseudo.js": 2320,
	"./yo": 1313,
	"./yo.js": 1313,
	"./zh-cn": 4490,
	"./zh-cn.js": 4490,
	"./zh-hk": 5910,
	"./zh-hk.js": 5910,
	"./zh-mo": 8262,
	"./zh-mo.js": 8262,
	"./zh-tw": 4223,
	"./zh-tw.js": 4223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6700;

/***/ }),

/***/ 4884:
/*!****************************!*\
  !*** ./src/assets/me.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"id":"krtYPHqlrLLVzPVV9R69","education":{"degree":"B.S. in Computer Engineering","university":"Clemson University","endDate":"December 2019"},"contact":{"name":"Michael Muñiz","title":"Senior Software Engineer","email":"mcmuniz218@gmail.com","phone":"","location":"Charlotte, NC","linkedin":"https://www.linkedin.com/in/michael-muniz-24065b159/","github":"https://github.com/mcm218/resume-website"},"skills":[{"title":"Languages","skills":[{"title":"Typescript","skill":8},{"title":"Javascript","skill":8},{"title":"HTML5","skill":9},{"title":"CSS","skill":9},{"title":"C#","skill":7},{"title":"Aura","skill":6},{"title":"Apex","skill":5}]},{"title":"Frameworks/Tools","skills":[{"title":"Xamarin","skill":5},{"title":"Salesforce Lightning","skill":8},{"title":"Angular","skill":7},{"title":"React","skill":3},{"title":"Node.js","skill":3},{"title":"Unity","skill":6}]},{"title":"Other","skills":[{"title":"Git","skill":8},{"title":"Agile","skill":8},{"title":"Scrum","skill":8},{"title":"Organization","skill":9},{"title":"Communication","skill":7}]}],"experience":[{"title":"Professional Experience","experience":[{"role":"Senior Software Engineer","company":"Persistent Systems","location":"Charlotte, NC","startDate":"January 2022","endDate":"August 2022","filterableItems":504,"notes":["Lead the design and development of client\'s global OAuth architecture across multiple Salesforce Experience sites creating a single user experience","Worked with a client to create a developer portal allowing customers to learn and test the client\'s APIs through their Salesforce Experience site"]},{"role":"Staff Software Engineer","company":"Fusion360","location":"Charlotte, NC","startDate":"January 2020","endDate":"December 2021","filterableItems":501,"notes":["Lead the Android development for a client\'s Xamarin mobile app and released the app to both iOS and Android platforms within 6 months","Supervised and taught Xamarin and C# to interns throughout their onboarding process","Coordinated with testers to resolve defects for apps, closing 100+ issues","Supervised and taught Xamarin and C# to interns throughout their onboarding process","Responded to user reviews and bug reports, boosting individual ratings by 3.6 stars on average","Built an in-house desktop app, using JS and Electron, for processing ICRE files improving developers efficiency"]}]},{"title":"Personal Projects","experience":[{"role":"Discord Music Bot","company":"","location":"","startDate":"","endDate":"","filterableItems":1008,"notes":["Developed a bot that utilized Discord\'s APIs to allow users to play music from YouTube within the server\'s voice channels via text commands","Designed web client to allow for easier manipulation of a Discord server\'s music queue and watch synced music videos in groups"]},{"role":"Game Jams","company":"","location":"","startDate":"","endDate":"","filterableItems":3,"notes":["<a href=\\"https://ldjam.com/events/ludum-dare/51/thirsty-vampire\\">Ludum Dare 51 - Theme: \\" Every 10 Seconds\\"</a> - Third game jam overall and the first one I did solo. For this entry, I decided to make a top down game where you played as a vampire who had to suck blood every 10 seconds to stay alive. The twist was that you had to pickpocket your victim and check their blood donor card to ensure they had a compatitible blood type. Overall, I was happy with this game jam and how it turned out. Currently working on a mobile version of the game to release on both Andorid and iOS.","GMTK 2022 - Theme: \\"Roll of the Dice \\" - My second game jam and again I was the lead programmer and project lead. This time, we had a group with more writing experience, so we wanted to lean into that with a visual novel that follows a chimp trying to escape a jungle science facility. Unfortunately, we ended up not having enough time so we didn\'t have as many random encounters and the overall combat was weak.","<a href=\\"https://ldjam.com/events/ludum-dare/50/i-was-reincarnated-as-a-middle-aged-dad-protecting-his-sons-sand-castle\\">Ludum Dare 50 - Theme: \\"Delay the Inevitable\\"</a> - This was my first game jam ever. I was lead programmer and project lead working with a group of friends. We made a tower defense style game where you had to protect your son\'s sand castle from the ocean until mom returned with the camera."]},{"role":"Journaling Mobile App","company":"","location":"","startDate":"May 2018","endDate":"November 2019","filterableItems":2048,"notes":["Designed UI and systems to allow users to create new entries based on prompts or create reflections based on previous entries","Developed the app using Flutter and launched for both iOS and Android","Utilized Firebase to handle user authentication and data"]},{"role":"Computer Vision System for Automated Nerf Toy","company":"Clemson University","location":"","startDate":"","endDate":"","filterableItems":4096,"notes":["Built the computer vision system using C++ and OpenCV for an automated nerf gun which allowed it to track and fire at moving targets using multiple fire modes"]},{"role":"Automated Chess Robot","company":"Clemson University","location":"","startDate":"","endDate":"","filterableItems":4096,"notes":["Lead the development of the computer vision system for recognizing the chess pieces and the board","Worked with one developer to design the system for controlling the motors used to move the grabber, similar to systems used in 3D printers"]}]}]}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map