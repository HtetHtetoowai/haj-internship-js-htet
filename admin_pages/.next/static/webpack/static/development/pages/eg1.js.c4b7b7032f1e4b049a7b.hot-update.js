webpackHotUpdate("static\\development\\pages\\eg1.js",{

/***/ "./pages/eg1.js":
/*!**********************!*\
  !*** ./pages/eg1.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return jobList; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _lib_db_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/db.js */ "./lib/db.js");









var _jsxFileName = "C:\\Users\\lenovo\\Desktop\\admin_pages\\pages\\eg1.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var jobList = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(jobList, _React$Component);

  var _super = _createSuper(jobList);

  function jobList(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, jobList);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "deletePassId", function (id) {
      $("#deleteConfirmModal").modal('show');

      _this.setState({
        delete_id: id
      });

      console.log(_this.state.delete_id);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "viewPassId", function (id) {
      _this.setState({
        edit_id: id
      });

      var firebase = Object(_lib_db_js__WEBPACK_IMPORTED_MODULE_12__["loadFirebase"])();
      var data = {};

      try {
        firebase.firestore().collection('job').doc(id).get().then(function (snapshot) {
          data = snapshot.data();
          console.log(data);

          _this.setState({
            Jname: data.Jname,
            J_Contract: data.J_Contract,
            J_min_salary: data.J_min_salary,
            J_max_salary: data.J_max_salary,
            J_hours: data.J_hours,
            J_Working_Day: data.J_Working_Day,
            J_JpLevel: data.J_JpLevel,
            AREAID: data.AREAID,
            CITYID: data.CITYID,
            J_tel: data.J_tel,
            PostedDate: data.PostedDate,
            J_email: data.J_email,
            J_area: data.J_area,
            J_city: data.J_city,
            J_Address: data.J_Address,
            J_Description: data.J_Description,
            J_Qualification: data.J_Qualification
          });
        });
        console.log("getting data");
      } catch (error) {
        console.log(error);
      }

      console.log(_this.state.jobName);
      $("#viewModal").modal('show');
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "editPassId", function (id) {
      _this.setState({
        edit_id: id
      });

      var firebase = Object(_lib_db_js__WEBPACK_IMPORTED_MODULE_12__["loadFirebase"])();
      var data = {};

      try {
        firebase.firestore().collection('job').doc(id).get().then(function (snapshot) {
          data = snapshot.data();
          console.log();
          console.log(data);

          _this.setState({
            Jname: data.Jname,
            J_Contract: data.J_Contract,
            J_min_salary: data.J_min_salary,
            J_max_salary: data.J_max_salary,
            J_hours: data.J_hours,
            J_Working_Day: data.J_Working_Day,
            J_JpLevel: data.J_JpLevel,
            AREAID: data.AREAID,
            CITYID: data.CITYID,
            J_tel: data.J_tel,
            PostedDate: data.PostedDate,
            J_email: data.J_email,
            J_area: data.J_area,
            J_city: data.J_city,
            J_Address: data.J_Address,
            J_Description: data.J_Description,
            J_Qualification: data.J_Qualification
          });

          _this.getArea(data.AREAID);
        });
      } catch (error) {
        console.log(error);
      }

      $("#editModal").modal('show');
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "updateJob", function () {
      var firebase = Object(_lib_db_js__WEBPACK_IMPORTED_MODULE_12__["loadFirebase"])();

      try {
        firebase.firestore().collection('job').doc(_this.state.edit_id).update({
          Jname: _this.state.Jname,
          J_Contract: _this.state.J_Contract,
          J_min_salary: _this.state.J_min_salary,
          J_max_salary: _this.state.J_max_salary,
          J_hours: _this.state.J_hours,
          J_Working_Day: _this.state.J_Working_Day,
          J_JpLevel: _this.state.J_JpLevel,
          AREAID: _this.state.AREAID,
          CITYID: _this.state.CITYID,
          J_tel: _this.state.J_tel,
          PostedDate: _this.state.PostedDate,
          J_email: _this.state.J_email,
          J_area: _this.state.J_area,
          J_city: _this.state.J_city,
          J_Address: _this.state.J_Address,
          J_Description: _this.state.J_Description,
          J_Qualification: _this.state.J_Qualification
        });

        _this.refreshTable();
      } catch (error) {
        console.log(error);
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function (event) {
      _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, event.target.name, event.target.value));

      if (event.target.name == "AREAID") {}
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "deleteJob", function () {
      var firebase = Object(_lib_db_js__WEBPACK_IMPORTED_MODULE_12__["loadFirebase"])();

      try {
        firebase.firestore().collection('job').doc(_this.state.delete_id)["delete"]();
        console.log("Delete successful");

        _this.decreaseJobCount(_this.state.company);

        _this.refreshTable();
      } catch (error) {
        console.log(error);
      }

      _this.refreshAfterAddTable();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "decreaseJobCount", function (id) {
      var data = {};

      try {
        var firebase = Object(_lib_db_js__WEBPACK_IMPORTED_MODULE_12__["loadFirebase"])();
        firebase.firestore().collection('employer').doc(id).get().then(function (employerQuerySnapshot) {
          data = employerQuerySnapshot.data();
          firebase.firestore().collection('employer').doc(id).update({
            jobCount: data.jobCount - 1
          });
          console.log(data.jobCount - 1);
        });
      } catch (error) {
        console.log(error);
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getEmployer", function (EMPLOYERID) {
      var employers = _this.props.employer;
      var employerName = '';
      console.log(EMPLOYERID);
      employers && employers.map(function (Employers) {
        if (Employers.id == EMPLOYERID) {
          employerName = Employers.data.employerName;
        }
      });
      console.log(employerName);
      return employerName;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getLocation", function (CITYID, AREAID) {
      var city = _this.props.city;
      var area = _this.props.area;
      var cityName = '';
      var areaName = '';
      city && city.map(function (City) {
        if (City.id == CITYID) {
          cityName = City.cityName;
        }
      });
      area && area.map(function (Area) {
        if (Area.id == AREAID) {
          areaName = Area.areaName;
        }
      });
      return cityName + "," + areaName;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getArea", function (id) {
      var area = {};

      try {
        var firebase = Object(_lib_db_js__WEBPACK_IMPORTED_MODULE_12__["loadFirebase"])();
        firebase.firestore().collection('area').doc(id).get().then(function (areaQuerySnapshot) {
          area = areaQuerySnapshot.data();

          _this.setState({
            areaName: area.areaName
          });
        });
      } catch (error) {
        console.log(error);
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "form_clear", function (event) {
      _this.setState(_this.initial_state);

      var inputs, index;
      inputs = document.getElementsByTagName('input');

      for (index = 0; index < inputs.length; ++index) {
        inputs[index].value = '';
      }

      document.getElementById('J_Address').value = '';
      document.getElementById('J_Description').value = '';
      document.getElementById('J_Qualification').value = '';
      $("#J_Contract option[selected]").removeAttr("selected");
      $("#J_Contract option:first").attr("selected", "selected");
      $("#J_JpLevel option[selected]").removeAttr("selected");
      $("#J_JpLevel option:first").attr("selected", "selected");
      $("#city option[selected]").removeAttr("selected");
      $("#city option:first").attr("selected", "selected");
      $("#area option[selected]").removeAttr("selected");
      $("#area option:first").attr("selected", "selected");
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "disable", function (event) {
      $("#J_Contract option:first").attr("disabled", "disabled");
      $("#J_JpLevel option:first").attr("disabled", "disabled");
      $("#city option:first").attr("disabled", "disabled");
      $("#area option:first").attr("disabled", "disabled");
    });

    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.datatableRef = react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef();
    _this.$datatable = null;
    _this.state = {
      edit_id: '',
      delete_id: '',
      Jname: '',
      J_tel: '',
      J_min_salary: '',
      J_max_salary: '',
      PostedDate: '',
      J_hours: '',
      J_email: '',
      J_city: '',
      J_area: '',
      J_Working_Day: '',
      J_Qualification: '',
      J_JpLevel: '',
      J_Description: '',
      J_Contract: '',
      J_Address: '',
      areaName: '',
      jobs: props.job || [],
      areas: props.area || []
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(jobList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initializeDatatable();
    }
  }, {
    key: "initializeDatatable",
    value: function initializeDatatable() {
      this.$datatable = $(this.datatableRef.current).DataTable({
        order: [[3, "desc"]]
      });
    }
  }, {
    key: "refreshTable",
    value: function refreshTable() {
      this.$datatable.clear();
      var self = this;
      jobList.getInitialProps().then(function (response) {
        self.setState({
          jobs: response.job
        }); // self.initializeDatatable()
      }).bind(this);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
          _jsx;

      var cities = this.state.cities;
      var areas = this.state.areas;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("body", {
        className: "sb-nav-fixed",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328,
          columnNumber: 1
        }
      }, __jsx("nav", {
        className: "sb-topnav navbar navbar-expand navbar-dark bg-dark",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329,
          columnNumber: 9
        }
      }, __jsx("a", {
        className: "navbar-brand",
        href: "dashboard",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330,
          columnNumber: 13
        }
      }, "Admin"), __jsx("button", {
        className: "btn btn-link btn-sm order-1 order-lg-0",
        id: "sidebarToggle",
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331,
          columnNumber: 13
        }
      }, __jsx("i", {
        className: "fas fa-bars",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331,
          columnNumber: 100
        }
      })), __jsx("form", {
        className: "d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "input-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334,
          columnNumber: 17
        }
      }, __jsx("ul", {
        className: "navbar-nav ml-auto ml-md-0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335,
          columnNumber: 21
        }
      }, __jsx("li", {
        className: "nav-item dropdown",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336,
          columnNumber: 25
        }
      }, __jsx("a", {
        className: "nav-link dropdown-toggle",
        id: "userDropdown",
        href: "#",
        role: "button",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337,
          columnNumber: 29
        }
      }, __jsx("i", {
        className: "fas fa-user fa-fw",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337,
          columnNumber: 176
        }
      })), __jsx("div", {
        className: "dropdown-menu dropdown-menu-right",
        "aria-labelledby": "userDropdown",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338,
          columnNumber: 29
        }
      }, __jsx("a", {
        className: "dropdown-item",
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339,
          columnNumber: 33
        }
      }, "Profile"), __jsx("a", {
        className: "dropdown-item",
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340,
          columnNumber: 33
        }
      }, "Activity Log"), __jsx("div", {
        className: "dropdown-divider",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341,
          columnNumber: 33
        }
      }), __jsx("a", {
        className: "dropdown-item",
        href: "login",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342,
          columnNumber: 33
        }
      }, "Logout"))))))), __jsx("div", {
        id: "layoutSidenav",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351,
          columnNumber: 9
        }
      }, __jsx("div", {
        id: "layoutSidenav_nav",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352,
          columnNumber: 13
        }
      }, __jsx("nav", {
        className: "sb-sidenav accordion sb-sidenav-dark",
        id: "sidenavAccordion",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "sb-sidenav-menu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "nav",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "sb-sidenav-menu-heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356,
          columnNumber: 29
        }
      }, "Core"), __jsx("a", {
        className: "nav-link",
        href: "dashboard",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: "sb-nav-link-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 33
        }
      }, __jsx("i", {
        className: "fas fa-tachometer-alt",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 67
        }
      })), "Dashboard"), __jsx("a", {
        className: "nav-link collapsed",
        href: "#",
        "data-toggle": "collapse",
        "data-target": "#collapsePages",
        "aria-expanded": "false",
        "aria-controls": "collapsePages",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: "sb-nav-link-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363,
          columnNumber: 33
        }
      }, __jsx("i", {
        className: "fas fa-book-open",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363,
          columnNumber: 67
        }
      })), "Pages", __jsx("div", {
        className: "sb-sidenav-collapse-arrow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365,
          columnNumber: 33
        }
      }, __jsx("i", {
        className: "fas fa-angle-down",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365,
          columnNumber: 76
        }
      }))), __jsx("div", {
        className: "collapse",
        id: "collapsePages",
        "aria-labelledby": "headingTwo",
        "data-parent": "#sidenavAccordion",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367,
          columnNumber: 29
        }
      }, __jsx("nav", {
        className: "sb-sidenav-menu-nested nav accordion",
        id: "sidenavAccordionPages",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368,
          columnNumber: 33
        }
      }, __jsx("a", {
        className: "nav-link collapsed",
        href: "#",
        "data-toggle": "collapse",
        "data-target": "#pagesCollapseAuth",
        "aria-expanded": "false",
        "aria-controls": "pagesCollapseAuth",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369,
          columnNumber: 37
        }
      }, "Authentication", __jsx("div", {
        className: "sb-sidenav-collapse-arrow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371,
          columnNumber: 41
        }
      }, __jsx("i", {
        className: "fas fa-angle-down",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371,
          columnNumber: 84
        }
      }))), __jsx("div", {
        className: "collapse",
        id: "pagesCollapseAuth",
        "aria-labelledby": "headingOne",
        "data-parent": "#sidenavAccordionPages",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373,
          columnNumber: 37
        }
      }, __jsx("nav", {
        className: "sb-sidenav-menu-nested nav",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374,
          columnNumber: 41
        }
      }, __jsx("a", {
        className: "nav-link",
        href: "login",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375,
          columnNumber: 45
        }
      }, "Login"), __jsx("a", {
        className: "nav-link",
        href: "register",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376,
          columnNumber: 45
        }
      }, "Register"), __jsx("a", {
        className: "nav-link",
        href: "password",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377,
          columnNumber: 45
        }
      }, "Forgot Password"))))))))), __jsx("div", {
        id: "layoutSidenav_content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388,
          columnNumber: 13
        }
      }, __jsx("main", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "container-fluid",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390,
          columnNumber: 21
        }
      }, __jsx("h1", {
        className: "mt-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391,
          columnNumber: 25
        }
      }, "List of Jobs"), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "col-xl-3 col-md-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: "card bg-success text-white mb-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396,
          columnNumber: 33
        }
      }, __jsx("div", {
        className: "card-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397,
          columnNumber: 37
        }
      }, "Employers Table"), __jsx("div", {
        className: "card-footer d-flex align-items-center justify-content-between",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398,
          columnNumber: 37
        }
      }, __jsx("a", {
        className: "small text-white stretched-link",
        href: "emplyoer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399,
          columnNumber: 41
        }
      }, "View Details"), __jsx("div", {
        className: "small text-white",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400,
          columnNumber: 41
        }
      }, __jsx("i", {
        className: "fas fa-angle-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400,
          columnNumber: 75
        }
      })))))), __jsx("div", {
        className: "card-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "container admin-container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "table-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411,
          columnNumber: 9
        }
      }, __jsx("table", {
        ref: this.datatableRef,
        className: "display table table-bordered",
        style: {
          width: 100 + "%"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413,
          columnNumber: 9
        }
      }, __jsx("thead", {
        className: "thread-color",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414,
          columnNumber: 21
        }
      }, __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415,
          columnNumber: 21
        }
      }, __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416,
          columnNumber: 29
        }
      }, "Job Name"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 417,
          columnNumber: 29
        }
      }, "Employment Status"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418,
          columnNumber: 29
        }
      }, "City"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419,
          columnNumber: 29
        }
      }, "Salary"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420,
          columnNumber: 29
        }
      }, "Posted Date"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421,
          columnNumber: 29
        }
      }, "Action"))), __jsx("tbody", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424,
          columnNumber: 21
        }
      }, this.state.jobs.map(function (Job) {
        return __jsx("tr", {
          key: Job.id,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 426,
            columnNumber: 25
          }
        }, __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 427,
            columnNumber: 29
          }
        }, Job.Jname), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 428,
            columnNumber: 29
          }
        }, Job.J_Contract), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 429,
            columnNumber: 29
          }
        }, Job.J_city), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 430,
            columnNumber: 29
          }
        }, Job.J_min_salary, "~", Job.J_max_salary), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 431,
            columnNumber: 29
          }
        }, Job.PostedDate), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 432,
            columnNumber: 29
          }
        }, __jsx("a", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 433,
            columnNumber: 33
          }
        }, __jsx("i", {
          onClick: function onClick() {
            return _this2.viewPassId(Job.id);
          },
          className: "view material-icons icon-padding",
          title: "View",
          style: {
            color: "rgb(0, 110, 255)",
            cursor: "pointer"
          },
          "data-dismiss": "modal",
          "data-toggle": "tooltip",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 433,
            columnNumber: 36
          }
        }, "\uE417")), " \xA0", __jsx("a", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 434,
            columnNumber: 33
          }
        }, __jsx("i", {
          onClick: function onClick() {
            return _this2.editPassId(Job.id);
          },
          className: "edit material-icons icon-padding",
          title: "Edit",
          style: {
            color: "yellow",
            cursor: "pointer"
          },
          "data-dismiss": "modal",
          "data-toggle": "tooltip",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 434,
            columnNumber: 36
          }
        }, "\uE254")), " \xA0", __jsx("a", {
          onClick: function onClick() {
            return _this2.deletePassId(Job.id);
          },
          className: "delete material-icons icon-padding",
          title: "Delete",
          style: {
            color: "red",
            cursor: "pointer"
          },
          "data-dismiss": "modal",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 435,
            columnNumber: 9
          }
        }, "\uE872"), " \xA0"));
      }))))), __jsx("div", {
        id: "viewModal",
        className: "modal fade",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 445,
          columnNumber: 2
        }
      }, __jsx("div", {
        className: "modal-dialog info-dialog",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 446,
          columnNumber: 3
        }
      }, __jsx("div", {
        className: "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 447,
          columnNumber: 4
        }
      }, __jsx("div", {
        className: "modal-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 448,
          columnNumber: 6
        }
      }, __jsx("h4", {
        className: "modal-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 449,
          columnNumber: 7
        }
      }, "Detail Information"), __jsx("button", {
        type: "button",
        className: "close",
        "data-dismiss": "modal",
        "aria-hidden": "true",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 450,
          columnNumber: 7
        }
      }, "\xD7")), __jsx("div", {
        className: "modal-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452,
          columnNumber: 6
        }
      }, __jsx("table", {
        className: "table table-bordered",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 453,
          columnNumber: 21
        }
      }, __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 454,
          columnNumber: 26
        }
      }, " ", __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 454,
          columnNumber: 31
        }
      }, "Job Name:"), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 454,
          columnNumber: 49
        }
      }, this.state.Jname)), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 455,
          columnNumber: 26
        }
      }, __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 455,
          columnNumber: 30
        }
      }, " Employer Name:"), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 455,
          columnNumber: 54
        }
      }, " ", this.getEmployer(this.state.EMPLOYERID))), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456,
          columnNumber: 26
        }
      }, __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456,
          columnNumber: 30
        }
      }, "Posted_Date: "), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456,
          columnNumber: 52
        }
      }, this.state.PostedDate)), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 457,
          columnNumber: 26
        }
      }, " ", __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 457,
          columnNumber: 31
        }
      }, "Phone Number:"), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 457,
          columnNumber: 53
        }
      }, " ", this.state.J_tel)), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 458,
          columnNumber: 26
        }
      }, " ", __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 458,
          columnNumber: 31
        }
      }, "Email:"), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 458,
          columnNumber: 46
        }
      }, " ", this.state.J_email)), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 459,
          columnNumber: 26
        }
      }, " ", __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 459,
          columnNumber: 31
        }
      }, "Address:"), " ", __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 459,
          columnNumber: 49
        }
      }, " ", this.state.J_Address, ", ", this.getLocation(this.state.CITYID, this.state.AREAID), " ")), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 460,
          columnNumber: 26
        }
      }, __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 460,
          columnNumber: 30
        }
      }, "Employment Status:"), " ", __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 460,
          columnNumber: 58
        }
      }, this.state.J_Contract)), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 461,
          columnNumber: 26
        }
      }, " ", __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 461,
          columnNumber: 31
        }
      }, "Salary:"), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 461,
          columnNumber: 47
        }
      }, " ", this.state.J_min_salary, "~", this.state.J_max_salary, " Yen")), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 462,
          columnNumber: 26
        }
      }, __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 462,
          columnNumber: 30
        }
      }, "Working Days:"), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 462,
          columnNumber: 52
        }
      }, " ", this.state.J_Working_Day, " Days per Week")), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 463,
          columnNumber: 26
        }
      }, __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 463,
          columnNumber: 30
        }
      }, "Working Hours:"), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 463,
          columnNumber: 53
        }
      }, this.state.J_hours)), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 464,
          columnNumber: 26
        }
      }, " ", __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 464,
          columnNumber: 31
        }
      }, "Minimum Japanese Skill:"), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 464,
          columnNumber: 63
        }
      }, " ", this.state.J_JpLevel)), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465,
          columnNumber: 26
        }
      }, __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465,
          columnNumber: 30
        }
      }, "Job Description:"), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465,
          columnNumber: 55
        }
      }, " ", this.state.J_Description)), __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466,
          columnNumber: 26
        }
      }, " ", __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466,
          columnNumber: 31
        }
      }, "Job Qualification:"), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466,
          columnNumber: 58
        }
      }, " ", this.state.J_Qualification)))), __jsx("div", {
        className: "modal-footer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 470,
          columnNumber: 6
        }
      }, __jsx("input", {
        type: "button",
        className: "btn btn-secondary",
        "data-dismiss": "modal",
        value: "Cancel",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 471,
          columnNumber: 7
        }
      }), __jsx("a", {
        onClick: function onClick() {
          return _this2.deletePassId(_this2.state.id);
        },
        "data-dismiss": "modal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472,
          columnNumber: 25
        }
      }, __jsx("button", {
        className: "btn btn-danger",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472,
          columnNumber: 96
        }
      }, "Delete")))))), __jsx("div", {
        id: "editModal",
        className: "modal fade",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 478,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "modal-dialog info-dialog",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 479,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 480,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "modal-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 481,
          columnNumber: 25
        }
      }, __jsx("h4", {
        className: "modal-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 482,
          columnNumber: 29
        }
      }, "Application Requirement"), __jsx("button", {
        type: "button",
        className: "close",
        "data-dismiss": "modal",
        onClick: this.form_clear,
        "aria-hidden": "true",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 483,
          columnNumber: 29
        }
      }, "\xD7")), __jsx("form", {
        action: "#",
        method: "post",
        style: {
          width: 100 + "%"
        },
        onSubmit: this.addJob,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 485,
          columnNumber: 25
        }
      }, __jsx("form", {
        role: "Form",
        method: "post",
        action: "",
        "accept-charset": "UTF-8",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 486,
          columnNumber: 29
        }
      }, __jsx("div", {
        "class": "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 487,
          columnNumber: 33
        }
      }, __jsx("div", {
        "class": "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 488,
          columnNumber: 37
        }
      }, __jsx("div", {
        "class": "col-xl-6 col-md-8 border",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 489,
          columnNumber: 41
        }
      }, __jsx("div", {
        "class": "panel-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 492,
          columnNumber: 49
        }
      }, __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 494,
          columnNumber: 57
        }
      }, __jsx("label", {
        "for": "Jname",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 495,
          columnNumber: 61
        }
      }, "Job Name"), __jsx("input", {
        type: "text",
        id: "Jname",
        "class": "form-control",
        name: "Jname",
        placeholder: "Enter your Job Name",
        onChange: this.handleChange,
        value: this.state.Jname,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 496,
          columnNumber: 61
        }
      })), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 499,
          columnNumber: 57
        }
      }, __jsx("label", {
        "for": "J_Contract",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 500,
          columnNumber: 61
        }
      }, "Employment Status"), __jsx("select", {
        name: "J_Contract",
        id: "J_Contract",
        onClick: this.disable,
        className: "form-control",
        onChange: this.handleChange,
        value: this.state.selectedValue,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 501,
          columnNumber: 61
        }
      }, __jsx("option", {
        value: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 502,
          columnNumber: 53
        }
      }, "Choose Employment Status"), __jsx("option", {
        value: "Full-Time",
        selected: this.state.employmentStatus == "Full-Time" ? "selected" : "false",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 503,
          columnNumber: 53
        }
      }, "Full Time"), __jsx("option", {
        value: "Part-Time",
        selected: this.state.employmentStatus == "Part-Time" ? "selected" : "false",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 504,
          columnNumber: 53
        }
      }, "Part Time"))), __jsx("label", {
        "for": "salary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 507,
          columnNumber: 57
        }
      }, "Salary(\xA5)"), __jsx("div", {
        "class": "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 508,
          columnNumber: 57
        }
      }, __jsx("div", {
        "class": "col-xl-6 col-md-8 ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 509,
          columnNumber: 53
        }
      }, __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 510,
          columnNumber: 57
        }
      }, __jsx("input", {
        type: "text",
        id: "min_salary",
        "class": "form-control",
        name: "J_min_salary",
        placeholder: "Enter Minimun Salary",
        onChange: this.handleChange,
        value: this.state.J_min_salary,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 511,
          columnNumber: 57
        }
      }))), __jsx("div", {
        "class": "col-xl-6 col-md-8 ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 515,
          columnNumber: 53
        }
      }, __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 516,
          columnNumber: 57
        }
      }, __jsx("input", {
        type: "text",
        id: "max_salary",
        "class": "form-control",
        name: "J_max_salary",
        placeholder: "Enter Maximun Salary",
        onChange: this.handleChange,
        value: this.state.J_max_salary,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 517,
          columnNumber: 57
        }
      })))), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 520,
          columnNumber: 57
        }
      }, __jsx("label", {
        "for": "J_hours",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 521,
          columnNumber: 61
        }
      }, "Working Hours"), __jsx("input", {
        type: "text",
        id: "J_hours",
        "class": "form-control",
        name: "J_hours",
        placeholder: "Enter Working Hours",
        onChange: this.handleChange,
        value: this.state.J_hours,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 522,
          columnNumber: 61
        }
      })), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 524,
          columnNumber: 57
        }
      }, __jsx("label", {
        "for": "J_Working_Day",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 525,
          columnNumber: 61
        }
      }, "Working Days"), __jsx("input", {
        type: "text",
        id: "J_Working_Day",
        "class": "form-control",
        name: "J_Working_Day",
        placeholder: "Enter Working Days",
        onChange: this.handleChange,
        value: this.state.J_Working_Day,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 526,
          columnNumber: 61
        }
      })), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 528,
          columnNumber: 57
        }
      }, __jsx("label", {
        "for": "J_JpLevel",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 529,
          columnNumber: 61
        }
      }, "Select Japanese Skill"), __jsx("select", {
        id: "J_JpLevel",
        "class": "form-control",
        name: "J_JpLevel",
        onChange: this.handleChange,
        value: this.state.selectedValue,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 530,
          columnNumber: 61
        }
      }, __jsx("option", {
        selected: true,
        disabled: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 531,
          columnNumber: 61
        }
      }, "Select Japanese level"), __jsx("option", {
        value: "N3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 532,
          columnNumber: 65
        }
      }, "N3"), __jsx("option", {
        value: "N2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 533,
          columnNumber: 65
        }
      }, "N2"), __jsx("option", {
        value: "N1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 534,
          columnNumber: 65
        }
      }, "N1"))), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 538,
          columnNumber: 57
        }
      }, __jsx("label", {
        "for": "J_tel",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 539,
          columnNumber: 61
        }
      }, "Tel:"), __jsx("input", {
        type: "text",
        id: "J_tel",
        "class": "form-control",
        name: "J_tel",
        placeholder: "Enter phone:",
        onChange: this.handleChange,
        value: this.state.J_tel,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 540,
          columnNumber: 61
        }
      })))), __jsx("div", {
        "class": "col-xl-6 col-md-8 border",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 548,
          columnNumber: 37
        }
      }, __jsx("div", {
        "class": "panel-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 549,
          columnNumber: 45
        }
      }, __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 550,
          columnNumber: 45
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 551,
          columnNumber: 69
        }
      }, "Posted Date"), __jsx("input", (_jsx = {
        type: "datetime-local",
        "class": "form-control",
        value: "datetime",
        name: "PostedDate",
        onChange: this.handleChange
      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_jsx, "value", this.state.PostedDate), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_jsx, "required", true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_jsx, "__self", this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_jsx, "__source", {
        fileName: _jsxFileName,
        lineNumber: 552,
        columnNumber: 69
      }), _jsx))), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 554,
          columnNumber: 49
        }
      }, __jsx("label", {
        "for": "J_email",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 555,
          columnNumber: 61
        }
      }, "Email Address"), __jsx("input", {
        type: "text",
        id: "J_email",
        "class": "form-control",
        name: "J_email",
        placeholder: "abc@gmail.com",
        onChange: this.handleChange,
        value: this.state.J_email,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 556,
          columnNumber: 61
        }
      })), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 558,
          columnNumber: 57
        }
      }, __jsx("label", {
        "for": "J-area",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 559,
          columnNumber: 61
        }
      }, "Select Area"), __jsx("select", {
        name: "AREAID",
        id: "area",
        className: "form-control",
        onClick: this.disable,
        onChange: this.handleChange,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 560,
          columnNumber: 61
        }
      }, __jsx("option", {
        disabled: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 561,
          columnNumber: 53
        }
      }, "Select Area in Japan"), this.state.areas.map(function (Area) {
        return _this2.state.AREAID == Area.id ? __jsx("option", {
          value: Area.id,
          selected: true,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 563,
            columnNumber: 57
          }
        }, Area.areaName) : __jsx("option", {
          value: Area.id,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 564,
            columnNumber: 57
          }
        }, Area.areaName);
      }))), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 568,
          columnNumber: 57
        }
      }, __jsx("label", {
        "for": "J_city",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 569,
          columnNumber: 61
        }
      }, "Select your City"), __jsx("select", {
        name: "CITYID",
        id: "city",
        className: "form-control",
        onClick: this.disable,
        onChange: this.handleChange,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 570,
          columnNumber: 61
        }
      }, __jsx("option", {
        disabled: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 571,
          columnNumber: 57
        }
      }, "Select City"), cities && cities.map(function (city) {
        return _this2.state.CITYID == city.id ? __jsx("option", {
          value: city.id,
          selected: true,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 573,
            columnNumber: 61
          }
        }, city.cityName) : __jsx("option", {
          value: city.id,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 574,
            columnNumber: 61
          }
        }, city.cityName);
      }))), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 580,
          columnNumber: 57
        }
      }, __jsx("label", {
        "for": "detailAddr",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 581,
          columnNumber: 61
        }
      }, "Detail Address"), __jsx("textarea", {
        "class": "form-control",
        name: "J_Address",
        onChange: this.handleChange,
        value: this.state.J_Address,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 582,
          columnNumber: 61
        }
      })), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 586,
          columnNumber: 57
        }
      }, __jsx("label", {
        "for": "JobDes",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 587,
          columnNumber: 61
        }
      }, "Job Description"), __jsx("textarea", {
        "class": "form-control",
        name: "J_Description",
        onChange: this.handleChange,
        value: this.state.J_Description,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 588,
          columnNumber: 61
        }
      })), __jsx("div", {
        "class": "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 593,
          columnNumber: 57
        }
      }, __jsx("label", {
        "for": "Qual",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 594,
          columnNumber: 61
        }
      }, "Other Qualification"), __jsx("textarea", {
        "class": "form-control",
        name: "J_Qualification",
        onChange: this.handleChange,
        value: this.state.J_Qualification,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 595,
          columnNumber: 61
        }
      }))))))))))), __jsx("div", {
        id: "deleteConfirmModal",
        className: "modal fade",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 613,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "modal-dialog del-dialog",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 614,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 615,
          columnNumber: 33
        }
      }, __jsx("div", {
        className: "modal-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 616,
          columnNumber: 37
        }
      }, __jsx("h4", {
        className: "modal-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 617,
          columnNumber: 41
        }
      }, "Delete Job"), __jsx("button", {
        type: "button",
        className: "close",
        "data-dismiss": "modal",
        "aria-hidden": "true",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 618,
          columnNumber: 41
        }
      }, "\xD7")), __jsx("form", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 620,
          columnNumber: 37
        }
      }, __jsx("div", {
        className: "modal-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 621,
          columnNumber: 41
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 622,
          columnNumber: 45
        }
      }, "Are you sure you want to delete this job?"), __jsx("p", {
        className: "text-warning",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 623,
          columnNumber: 45
        }
      }, __jsx("small", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 623,
          columnNumber: 73
        }
      }, "This action cannot be undone.")))), __jsx("div", {
        className: "modal-footer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 626,
          columnNumber: 37
        }
      }, __jsx("input", {
        type: "button",
        className: "btn btn-secondary",
        "data-dismiss": "modal",
        value: "Cancel",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 627,
          columnNumber: 41
        }
      }), __jsx("input", {
        type: "button",
        className: "btn btn-danger",
        value: "Delete",
        "data-dismiss": "modal",
        onClick: this.deleteJob,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 628,
          columnNumber: 41
        }
      }))))))))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var firebase, jobQuerySnapshot, jobs, areaQuerySnapshot, areas, cityQuerySnapshot, cities, employerQuerySnapshot, employers;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_lib_db_js__WEBPACK_IMPORTED_MODULE_12__["loadFirebase"])();

              case 2:
                firebase = _context.sent;
                _context.next = 5;
                return firebase.firestore().collection("job").get();

              case 5:
                jobQuerySnapshot = _context.sent;
                jobs = jobQuerySnapshot.docs.map(function (doc) {
                  return _objectSpread(_objectSpread({}, doc.data()), {}, {
                    id: doc.id
                  });
                });
                _context.next = 9;
                return firebase.firestore().collection("area").get();

              case 9:
                areaQuerySnapshot = _context.sent;
                areas = areaQuerySnapshot.docs.map(function (doc) {
                  return _objectSpread(_objectSpread({}, doc.data()), {}, {
                    id: doc.id
                  });
                });
                _context.next = 13;
                return firebase.firestore().collection("city").get();

              case 13:
                cityQuerySnapshot = _context.sent;
                cities = cityQuerySnapshot.docs.map(function (doc) {
                  return _objectSpread(_objectSpread({}, doc.data()), {}, {
                    id: doc.id
                  });
                });
                _context.next = 17;
                return firebase.firestore().collection("employer").limit(10).get();

              case 17:
                employerQuerySnapshot = _context.sent;
                employers = employerQuerySnapshot.docs.map(function (doc) {
                  return {
                    data: doc.data(),
                    id: doc.id
                  };
                });
                return _context.abrupt("return", {
                  job: jobs,
                  area: areas,
                  city: cities,
                  employer: employers
                });

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return jobList;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9lZzEuanMiXSwibmFtZXMiOlsiam9iTGlzdCIsInByb3BzIiwiaWQiLCIkIiwibW9kYWwiLCJzZXRTdGF0ZSIsImRlbGV0ZV9pZCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsImVkaXRfaWQiLCJmaXJlYmFzZSIsImxvYWRGaXJlYmFzZSIsImRhdGEiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZG9jIiwiZ2V0IiwidGhlbiIsInNuYXBzaG90IiwiSm5hbWUiLCJKX0NvbnRyYWN0IiwiSl9taW5fc2FsYXJ5IiwiSl9tYXhfc2FsYXJ5IiwiSl9ob3VycyIsIkpfV29ya2luZ19EYXkiLCJKX0pwTGV2ZWwiLCJBUkVBSUQiLCJDSVRZSUQiLCJKX3RlbCIsIlBvc3RlZERhdGUiLCJKX2VtYWlsIiwiSl9hcmVhIiwiSl9jaXR5IiwiSl9BZGRyZXNzIiwiSl9EZXNjcmlwdGlvbiIsIkpfUXVhbGlmaWNhdGlvbiIsImVycm9yIiwiam9iTmFtZSIsImdldEFyZWEiLCJ1cGRhdGUiLCJyZWZyZXNoVGFibGUiLCJldmVudCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImRlY3JlYXNlSm9iQ291bnQiLCJjb21wYW55IiwicmVmcmVzaEFmdGVyQWRkVGFibGUiLCJlbXBsb3llclF1ZXJ5U25hcHNob3QiLCJqb2JDb3VudCIsIkVNUExPWUVSSUQiLCJlbXBsb3llcnMiLCJlbXBsb3llciIsImVtcGxveWVyTmFtZSIsIm1hcCIsIkVtcGxveWVycyIsImNpdHkiLCJhcmVhIiwiY2l0eU5hbWUiLCJhcmVhTmFtZSIsIkNpdHkiLCJBcmVhIiwiYXJlYVF1ZXJ5U25hcHNob3QiLCJpbml0aWFsX3N0YXRlIiwiaW5wdXRzIiwiaW5kZXgiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibGVuZ3RoIiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW1vdmVBdHRyIiwiYXR0ciIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJkYXRhdGFibGVSZWYiLCJSZWFjdCIsImNyZWF0ZVJlZiIsIiRkYXRhdGFibGUiLCJqb2JzIiwiam9iIiwiYXJlYXMiLCJpbml0aWFsaXplRGF0YXRhYmxlIiwiY3VycmVudCIsIkRhdGFUYWJsZSIsIm9yZGVyIiwiY2xlYXIiLCJzZWxmIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzcG9uc2UiLCJjaXRpZXMiLCJ3aWR0aCIsIkpvYiIsInZpZXdQYXNzSWQiLCJjb2xvciIsImN1cnNvciIsImVkaXRQYXNzSWQiLCJkZWxldGVQYXNzSWQiLCJnZXRFbXBsb3llciIsImdldExvY2F0aW9uIiwiZm9ybV9jbGVhciIsImFkZEpvYiIsImRpc2FibGUiLCJzZWxlY3RlZFZhbHVlIiwiZW1wbG95bWVudFN0YXR1cyIsImRlbGV0ZUpvYiIsImpvYlF1ZXJ5U25hcHNob3QiLCJkb2NzIiwiY2l0eVF1ZXJ5U25hcHNob3QiLCJsaW1pdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsTzs7Ozs7QUFFakIsbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSx1TkE0RkosVUFBQ0MsRUFBRCxFQUFNO0FBQ2pCQyxPQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QkMsS0FBekIsQ0FBK0IsTUFBL0I7O0FBQ0EsWUFBS0MsUUFBTCxDQUFjO0FBQUNDLGlCQUFTLEVBQUdKO0FBQWIsT0FBZDs7QUFDQUssYUFBTyxDQUFDQyxHQUFSLENBQVksTUFBS0MsS0FBTCxDQUFXSCxTQUF2QjtBQUNILEtBaEdrQjs7QUFBQSxxTkFpR0YsVUFBQ0osRUFBRCxFQUFRO0FBQ2pCLFlBQUtHLFFBQUwsQ0FBYztBQUFDSyxlQUFPLEVBQUdSO0FBQVgsT0FBZDs7QUFDQSxVQUFJUyxRQUFRLEdBQUdDLGdFQUFZLEVBQTNCO0FBQ0EsVUFBSUMsSUFBSSxHQUFHLEVBQVg7O0FBQ0EsVUFB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QUFFLEVBQUVjLEdBQUcsQ0FBQ2Q7QUFGK0MsbUJBQVY7QUFBQSxpQkFBL0IsQztpREFJWDtBQUFDOEUscUJBQUcsRUFBR0QsSUFBUDtBQUFhckIsc0JBQUksRUFBR3VCLEtBQXBCO0FBQTJCeEIsc0JBQUksRUFBR2lDLE1BQWxDO0FBQTBDckMsMEJBQVEsRUFBRUQ7QUFBcEQsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEzRnNCd0IsNENBQUssQ0FBQ2tDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGVnMS5qcy5jNGI3YjcwMzJmMWU0YjA0OWE3Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHtsb2FkRmlyZWJhc2V9IGZyb20gJy4uL2xpYi9kYi5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBqb2JMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5kYXRhdGFibGVSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgICAgICB0aGlzLiRkYXRhdGFibGUgPSBudWxsXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZWRpdF9pZCA6ICcnLFxyXG4gICAgICAgICAgICBkZWxldGVfaWQgOiAnJyxcclxuICAgICAgICAgICAgSm5hbWU6JycsXHJcbiAgICAgICAgICAgIEpfdGVsOicnLFxyXG4gICAgICAgICAgICBKX21pbl9zYWxhcnk6JycsXHJcbiAgICAgICAgICAgIEpfbWF4X3NhbGFyeTonJyxcclxuICAgICAgICAgICAgUG9zdGVkRGF0ZTonJyxcclxuICAgICAgICAgICAgSl9ob3VyczonJyxcclxuICAgICAgICAgICAgSl9lbWFpbDonJyxcclxuICAgICAgICAgICAgSl9jaXR5OicnLFxyXG4gICAgICAgICAgICBKX2FyZWE6JycsXHJcbiAgICAgICAgICAgIEpfV29ya2luZ19EYXk6JycsXHJcbiAgICAgICAgICAgIEpfUXVhbGlmaWNhdGlvbjonJyxcclxuICAgICAgICAgICAgSl9KcExldmVsOicnLFxyXG4gICAgICAgICAgICBKX0Rlc2NyaXB0aW9uOicnLFxyXG4gICAgICAgICAgICBKX0NvbnRyYWN0OicnLFxyXG4gICAgICAgICAgICBKX0FkZHJlc3M6JycsXHJcbiAgICAgICAgICAgIGFyZWFOYW1lIDogJycsXHJcbiAgICAgICAgICAgIGpvYnMgOiBwcm9wcy5qb2IgfHwgW10sXHJcbiAgICAgICAgICAgIGFyZWFzIDogcHJvcHMuYXJlYSB8fCBbXSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplRGF0YXRhYmxlKClcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplRGF0YXRhYmxlKCkge1xyXG4gICAgICB0aGlzLiRkYXRhdGFibGUgPSAkKHRoaXMuZGF0YXRhYmxlUmVmLmN1cnJlbnQpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICBvcmRlcjogW1szLCBcImRlc2NcIl1dLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hUYWJsZSgpIHtcclxuICAgICAgdGhpcy4kZGF0YXRhYmxlLmNsZWFyKClcclxuICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgIGpvYkxpc3RcclxuICAgICAgICAuZ2V0SW5pdGlhbFByb3BzKClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBqb2JzOiByZXNwb25zZS5qb2IsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIC8vIHNlbGYuaW5pdGlhbGl6ZURhdGF0YWJsZSgpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuYmluZCh0aGlzKTtcclxuICAgIH1cclxuICBcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XHJcbiAgICAgICAgY29uc3QgZmlyZWJhc2UgPSBhd2FpdCBsb2FkRmlyZWJhc2UoKSBcclxuICAgICAgICBjb25zdCBqb2JRdWVyeVNuYXBzaG90ID0gYXdhaXQgZmlyZWJhc2VcclxuICAgICAgICAgICAgLmZpcmVzdG9yZSgpXHJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKFwiam9iXCIpXHJcbiAgICAgICAgICAgIC5nZXQoKTtcclxuICAgICAgICBjb25zdCBqb2JzID0gam9iUXVlcnlTbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiAoe1xyXG4gICAgICAgICAgICAuLi5kb2MuZGF0YSgpLFxyXG4gICAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBjb25zdCBhcmVhUXVlcnlTbmFwc2hvdCA9IGF3YWl0IGZpcmViYXNlXHJcbiAgICAgICAgICAgIC5maXJlc3RvcmUoKVxyXG4gICAgICAgICAgICAuY29sbGVjdGlvbihcImFyZWFcIilcclxuICAgICAgICAgICAgLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IGFyZWFzID0gYXJlYVF1ZXJ5U25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gKHtcclxuICAgICAgICAgICAgLi4uZG9jLmRhdGEoKSxcclxuICAgICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNpdHlRdWVyeVNuYXBzaG90ID0gYXdhaXQgZmlyZWJhc2VcclxuICAgICAgICAuZmlyZXN0b3JlKClcclxuICAgICAgICAuY29sbGVjdGlvbihcImNpdHlcIilcclxuICAgICAgICAuZ2V0KCk7XHJcbiAgICAgICAgY29uc3QgY2l0aWVzID0gY2l0eVF1ZXJ5U25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gKHtcclxuICAgICAgICAgICAgLi4uZG9jLmRhdGEoKSxcclxuICAgICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGVtcGxveWVyUXVlcnlTbmFwc2hvdCA9IGF3YWl0IGZpcmViYXNlXHJcbiAgICAgICAgICAgIC5maXJlc3RvcmUoKVxyXG4gICAgICAgICAgICAuY29sbGVjdGlvbihcImVtcGxveWVyXCIpXHJcbiAgICAgICAgICAgIC5saW1pdCgxMClcclxuICAgICAgICAgICAgLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IGVtcGxveWVycyA9IGVtcGxveWVyUXVlcnlTbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiAoe1xyXG4gICAgICAgICAgICBkYXRhIDogZG9jLmRhdGEoKSxcclxuICAgICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgcmV0dXJuIHtqb2IgOiBqb2JzLCBhcmVhIDogYXJlYXMsIGNpdHkgOiBjaXRpZXMsIGVtcGxveWVyOiBlbXBsb3llcnN9O1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVBhc3NJZCA9IChpZCk9PntcclxuICAgICAgICAkKFwiI2RlbGV0ZUNvbmZpcm1Nb2RhbFwiKS5tb2RhbCgnc2hvdycpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2RlbGV0ZV9pZCA6IGlkfSlcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmRlbGV0ZV9pZClcclxuICAgIH07ICAgICAgXHJcbiAgICAgICAgdmlld1Bhc3NJZCA9IChpZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlZGl0X2lkIDogaWR9KVxyXG4gICAgICAgICAgICBsZXQgZmlyZWJhc2UgPSBsb2FkRmlyZWJhc2UoKVxyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHt9XHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oJ2pvYicpLmRvYyhpZCkuZ2V0KCkuXHJcbiAgICAgICAgICAgICAgICB0aGVuKChzbmFwc2hvdCk9PntcclxuICAgICAgICAgICAgICAgICAgICBkYXRhID0gc25hcHNob3QuZGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBKbmFtZTpkYXRhLkpuYW1lLFxyXG4gICAgICAgICAgICAgICAgSl9Db250cmFjdDpkYXRhLkpfQ29udHJhY3QsXHJcbiAgICAgICAgICAgICAgICBKX21pbl9zYWxhcnk6ZGF0YS5KX21pbl9zYWxhcnksXHJcbiAgICAgICAgICAgICAgICBKX21heF9zYWxhcnk6ZGF0YS5KX21heF9zYWxhcnksXHJcbiAgICAgICAgICAgICAgICBKX2hvdXJzOmRhdGEuSl9ob3VycyxcclxuICAgICAgICAgICAgICAgIEpfV29ya2luZ19EYXk6ZGF0YS5KX1dvcmtpbmdfRGF5LFxyXG4gICAgICAgICAgICAgICAgSl9KcExldmVsOmRhdGEuSl9KcExldmVsLFxyXG4gICAgICAgICAgICAgICAgQVJFQUlEIDogZGF0YS5BUkVBSUQsXHJcbiAgICAgICAgICAgICAgICBDSVRZSUQgOiBkYXRhLkNJVFlJRCxcclxuICAgICAgICAgICAgICAgICBKX3RlbDpkYXRhLkpfdGVsLFxyXG4gICAgICAgICAgICAgICAgUG9zdGVkRGF0ZTpkYXRhLlBvc3RlZERhdGUsXHJcbiAgICAgICAgICAgICAgICBKX2VtYWlsOmRhdGEuSl9lbWFpbCxcclxuICAgICAgICAgICAgICAgIEpfYXJlYTpkYXRhLkpfYXJlYSxcclxuICAgICAgICAgICAgICAgIEpfY2l0eTpkYXRhLkpfY2l0eSxcclxuICAgICAgICAgICAgICAgIEpfQWRkcmVzczpkYXRhLkpfQWRkcmVzcyxcclxuICAgICAgICAgICAgICAgIEpfRGVzY3JpcHRpb246ZGF0YS5KX0Rlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgSl9RdWFsaWZpY2F0aW9uOmRhdGEuSl9RdWFsaWZpY2F0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0dGluZyBkYXRhXCIpXHJcbiAgICAgICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmpvYk5hbWUpXHJcbiAgICAgICAgICAgICQoXCIjdmlld01vZGFsXCIpLm1vZGFsKCdzaG93JylcclxuICAgICAgICB9O1xyXG4gICAgICAgIGVkaXRQYXNzSWQgPSAoaWQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZWRpdF9pZCA6IGlkfSlcclxuICAgICAgICAgICAgbGV0IGZpcmViYXNlID0gbG9hZEZpcmViYXNlKClcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSB7fVxyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdqb2InKS5kb2MoaWQpLmdldCgpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoc25hcHNob3QpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IHNuYXBzaG90LmRhdGEoKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKClcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUgKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSm5hbWU6ZGF0YS5KbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgSl9Db250cmFjdDpkYXRhLkpfQ29udHJhY3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpfbWluX3NhbGFyeTpkYXRhLkpfbWluX3NhbGFyeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgSl9tYXhfc2FsYXJ5OmRhdGEuSl9tYXhfc2FsYXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKX2hvdXJzOmRhdGEuSl9ob3VycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgSl9Xb3JraW5nX0RheTpkYXRhLkpfV29ya2luZ19EYXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpfSnBMZXZlbDpkYXRhLkpfSnBMZXZlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgQVJFQUlEIDogZGF0YS5BUkVBSUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENJVFlJRCA6IGRhdGEuQ0lUWUlELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgSl90ZWw6ZGF0YS5KX3RlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUG9zdGVkRGF0ZTpkYXRhLlBvc3RlZERhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpfZW1haWw6ZGF0YS5KX2VtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKX2FyZWE6ZGF0YS5KX2FyZWEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpfY2l0eTpkYXRhLkpfY2l0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgSl9BZGRyZXNzOmRhdGEuSl9BZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKX0Rlc2NyaXB0aW9uOmRhdGEuSl9EZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgSl9RdWFsaWZpY2F0aW9uOmRhdGEuSl9RdWFsaWZpY2F0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRBcmVhKGRhdGEuQVJFQUlEKVxyXG4gICAgICAgICAgICAgICAgfSkgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKFwiI2VkaXRNb2RhbFwiKS5tb2RhbCgnc2hvdycpXHJcbiAgICAgICAgfTtcclxuICAgICAgICB1cGRhdGVKb2IgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBmaXJlYmFzZSA9IGxvYWRGaXJlYmFzZSgpXHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oJ2pvYicpLmRvYyh0aGlzLnN0YXRlLmVkaXRfaWQpLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgSm5hbWU6dGhpcy5zdGF0ZS5KbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBKX0NvbnRyYWN0OnRoaXMuc3RhdGUuSl9Db250cmFjdCxcclxuICAgICAgICAgICAgICAgICAgICBKX21pbl9zYWxhcnk6dGhpcy5zdGF0ZS5KX21pbl9zYWxhcnksXHJcbiAgICAgICAgICAgICAgICAgICAgSl9tYXhfc2FsYXJ5OnRoaXMuc3RhdGUuSl9tYXhfc2FsYXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgIEpfaG91cnM6dGhpcy5zdGF0ZS5KX2hvdXJzLFxyXG4gICAgICAgICAgICAgICAgICAgIEpfV29ya2luZ19EYXk6dGhpcy5zdGF0ZS5KX1dvcmtpbmdfRGF5LFxyXG4gICAgICAgICAgICAgICAgICAgIEpfSnBMZXZlbDp0aGlzLnN0YXRlLkpfSnBMZXZlbCxcclxuICAgICAgICAgICAgICAgICAgICBBUkVBSUQgOiB0aGlzLnN0YXRlLkFSRUFJRCxcclxuICAgICAgICAgICAgICAgICAgICBDSVRZSUQgOiB0aGlzLnN0YXRlLkNJVFlJRCxcclxuICAgICAgICAgICAgICAgICAgICBKX3RlbDp0aGlzLnN0YXRlLkpfdGVsLFxyXG4gICAgICAgICAgICAgICAgICAgIFBvc3RlZERhdGU6dGhpcy5zdGF0ZS5Qb3N0ZWREYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIEpfZW1haWw6dGhpcy5zdGF0ZS5KX2VtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIEpfYXJlYTp0aGlzLnN0YXRlLkpfYXJlYSxcclxuICAgICAgICAgICAgICAgICAgICBKX2NpdHk6dGhpcy5zdGF0ZS5KX2NpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgSl9BZGRyZXNzOnRoaXMuc3RhdGUuSl9BZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgIEpfRGVzY3JpcHRpb246dGhpcy5zdGF0ZS5KX0Rlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIEpfUXVhbGlmaWNhdGlvbjp0aGlzLnN0YXRlLkpfUXVhbGlmaWNhdGlvblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hUYWJsZSgpO1xyXG4gICAgICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7W2V2ZW50LnRhcmdldC5uYW1lXSA6IGV2ZW50LnRhcmdldC52YWx1ZX0pXHJcbiAgICAgICAgaWYoZXZlbnQudGFyZ2V0Lm5hbWUgPT0gXCJBUkVBSURcIil7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGRlbGV0ZUpvYiA9ICgpID0+IHtcclxuICAgICAgICBsZXQgZmlyZWJhc2UgPSBsb2FkRmlyZWJhc2UoKVxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbignam9iJylcclxuICAgICAgICAgICAgLmRvYyh0aGlzLnN0YXRlLmRlbGV0ZV9pZClcclxuICAgICAgICAgICAgLmRlbGV0ZSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRlbGV0ZSBzdWNjZXNzZnVsXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmRlY3JlYXNlSm9iQ291bnQodGhpcy5zdGF0ZS5jb21wYW55KVxyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hUYWJsZSgpO1xyXG4gICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlZnJlc2hBZnRlckFkZFRhYmxlKClcclxuICAgIH07XHJcblxyXG4gICAgZGVjcmVhc2VKb2JDb3VudCA9IChpZCkgPT4ge1xyXG4gICAgICAgIGxldCBkYXRhID0ge31cclxuICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICBsZXQgZmlyZWJhc2UgPSBsb2FkRmlyZWJhc2UoKVxyXG4gICAgICAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oJ2VtcGxveWVyJylcclxuICAgICAgICAgICAgICAuZG9jKGlkKVxyXG4gICAgICAgICAgICAgIC5nZXQoKVxyXG4gICAgICAgICAgICAgIC50aGVuKChlbXBsb3llclF1ZXJ5U25hcHNob3QpPT57XHJcbiAgICAgICAgICAgICAgICAgIGRhdGEgPSBlbXBsb3llclF1ZXJ5U25hcHNob3QuZGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdlbXBsb3llcicpXHJcbiAgICAgICAgICAgICAgICAgICAgLmRvYyhpZClcclxuICAgICAgICAgICAgICAgICAgICAudXBkYXRlKHtqb2JDb3VudCA6IGRhdGEuam9iQ291bnQtMX0pIFxyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmpvYkNvdW50LTEpIFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEVtcGxveWVyID0gKEVNUExPWUVSSUQpID0+IHtcclxuICAgICAgICBjb25zdCBlbXBsb3llcnMgPSB0aGlzLnByb3BzLmVtcGxveWVyXHJcbiAgICAgICAgbGV0IGVtcGxveWVyTmFtZSA9ICcnXHJcbiAgICAgICAgY29uc29sZS5sb2coRU1QTE9ZRVJJRClcclxuICAgICAgICBlbXBsb3llcnMgJiYgZW1wbG95ZXJzLm1hcChFbXBsb3llcnMgPT4ge1xyXG4gICAgICAgICAgICBpZihFbXBsb3llcnMuaWQgPT0gRU1QTE9ZRVJJRCl7XHJcbiAgICAgICAgICAgICAgICBlbXBsb3llck5hbWUgPSBFbXBsb3llcnMuZGF0YS5lbXBsb3llck5hbWVcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zb2xlLmxvZyhlbXBsb3llck5hbWUpXHJcbiAgICAgICAgcmV0dXJuIGVtcGxveWVyTmFtZVxyXG4gICAgIH1cclxuXHJcbiAgICAgZ2V0TG9jYXRpb24gPSAoQ0lUWUlELCBBUkVBSUQpID0+IHtcclxuICAgICAgICBjb25zdCBjaXR5ID0gdGhpcy5wcm9wcy5jaXR5XHJcbiAgICAgICAgY29uc3QgYXJlYSA9IHRoaXMucHJvcHMuYXJlYVxyXG4gICAgICAgIGxldCBjaXR5TmFtZSA9ICcnXHJcbiAgICAgICAgbGV0IGFyZWFOYW1lID0gJydcclxuXHJcbiAgICAgICAgY2l0eSAmJiBjaXR5Lm1hcChDaXR5PT57XHJcbiAgICAgICAgICAgIGlmKENpdHkuaWQgPT0gQ0lUWUlEKXtcclxuICAgICAgICAgICAgICAgIGNpdHlOYW1lID0gQ2l0eS5jaXR5TmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBhcmVhICYmIGFyZWEubWFwKEFyZWE9PntcclxuICAgICAgICAgICAgaWYoQXJlYS5pZCA9PSBBUkVBSUQpe1xyXG4gICAgICAgICAgICAgICAgYXJlYU5hbWUgPSBBcmVhLmFyZWFOYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgcmV0dXJuIGNpdHlOYW1lICsgXCIsXCIgKyBhcmVhTmFtZVxyXG4gICAgIH1cclxuXHJcbiAgICBnZXRBcmVhID0gKGlkKSA9PiB7XHJcbiAgICAgICAgbGV0IGFyZWEgPSB7fVxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgbGV0IGZpcmViYXNlID0gbG9hZEZpcmViYXNlKClcclxuICAgICAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbignYXJlYScpXHJcbiAgICAgICAgICAgIC5kb2MoaWQpXHJcbiAgICAgICAgICAgIC5nZXQoKVxyXG4gICAgICAgICAgICAudGhlbigoYXJlYVF1ZXJ5U25hcHNob3QpPT57XHJcbiAgICAgICAgICAgICAgICBhcmVhID0gYXJlYVF1ZXJ5U25hcHNob3QuZGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YXJlYU5hbWUgOiBhcmVhLmFyZWFOYW1lfSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9ybV9jbGVhciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5pbml0aWFsX3N0YXRlKTtcclxuICAgICAgICBsZXQgaW5wdXRzLCBpbmRleDtcclxuICAgICAgICBpbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKTtcclxuICAgICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBpbnB1dHMubGVuZ3RoOyArK2luZGV4KSB7XHJcbiAgICAgICAgICAgIGlucHV0c1tpbmRleF0udmFsdWUgPSAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSl9BZGRyZXNzJykudmFsdWUgPSAnJztcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSl9EZXNjcmlwdGlvbicpLnZhbHVlID0gJyc7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0pfUXVhbGlmaWNhdGlvbicpLnZhbHVlID0gJyc7XHJcbiAgICAgICBcclxuICBcclxuICAgICAgICAkKFwiI0pfQ29udHJhY3Qgb3B0aW9uW3NlbGVjdGVkXVwiKS5yZW1vdmVBdHRyKFwic2VsZWN0ZWRcIik7ICAgIFxyXG4gICAgICAgICQoXCIjSl9Db250cmFjdCBvcHRpb246Zmlyc3RcIikuYXR0cihcInNlbGVjdGVkXCIsXCJzZWxlY3RlZFwiKTtcclxuICAgICAgICAkKFwiI0pfSnBMZXZlbCBvcHRpb25bc2VsZWN0ZWRdXCIpLnJlbW92ZUF0dHIoXCJzZWxlY3RlZFwiKTsgICAgXHJcbiAgICAgICAgJChcIiNKX0pwTGV2ZWwgb3B0aW9uOmZpcnN0XCIpLmF0dHIoXCJzZWxlY3RlZFwiLFwic2VsZWN0ZWRcIik7XHJcbiAgICAgICAgJChcIiNjaXR5IG9wdGlvbltzZWxlY3RlZF1cIikucmVtb3ZlQXR0cihcInNlbGVjdGVkXCIpOyAgICBcclxuICAgICAgICAkKFwiI2NpdHkgb3B0aW9uOmZpcnN0XCIpLmF0dHIoXCJzZWxlY3RlZFwiLFwic2VsZWN0ZWRcIik7IFxyXG4gICAgICAgICQoXCIjYXJlYSBvcHRpb25bc2VsZWN0ZWRdXCIpLnJlbW92ZUF0dHIoXCJzZWxlY3RlZFwiKTsgICAgXHJcbiAgICAgICAgJChcIiNhcmVhIG9wdGlvbjpmaXJzdFwiKS5hdHRyKFwic2VsZWN0ZWRcIixcInNlbGVjdGVkXCIpOyAgIFxyXG4gICAgfTtcclxuXHJcbiAgICBkaXNhYmxlID0gKGV2ZW50KSA9PiB7ICAgXHJcbiAgICAgICAgJChcIiNKX0NvbnRyYWN0IG9wdGlvbjpmaXJzdFwiKS5hdHRyKFwiZGlzYWJsZWRcIixcImRpc2FibGVkXCIpOyBcclxuICAgICAgICAkKFwiI0pfSnBMZXZlbCBvcHRpb246Zmlyc3RcIikuYXR0cihcImRpc2FibGVkXCIsXCJkaXNhYmxlZFwiKTsgXHJcbiAgICAgICAgJChcIiNjaXR5IG9wdGlvbjpmaXJzdFwiKS5hdHRyKFwiZGlzYWJsZWRcIixcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICQoXCIjYXJlYSBvcHRpb246Zmlyc3RcIikuYXR0cihcImRpc2FibGVkXCIsXCJkaXNhYmxlZFwiKTsgXHJcbiAgICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGNpdGllcyA9IHRoaXMuc3RhdGUuY2l0aWVzXHJcbiAgICBjb25zdCBhcmVhcyA9IHRoaXMuc3RhdGUuYXJlYXNcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuXHJcbjxib2R5IGNsYXNzTmFtZT1cInNiLW5hdi1maXhlZFwiPlxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwic2ItdG9wbmF2IG5hdmJhciBuYXZiYXItZXhwYW5kIG5hdmJhci1kYXJrIGJnLWRhcmtcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cImRhc2hib2FyZFwiPkFkbWluPC9hPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbGluayBidG4tc20gb3JkZXItMSBvcmRlci1sZy0wXCIgaWQ9XCJzaWRlYmFyVG9nZ2xlXCIgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtYmFyc1wiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZC1ub25lIGQtbWQtaW5saW5lLWJsb2NrIGZvcm0taW5saW5lIG1sLWF1dG8gbXItMCBtci1tZC0zIG15LTIgbXktbWQtMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1sLWF1dG8gbWwtbWQtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZVwiIGlkPVwidXNlckRyb3Bkb3duXCIgaHJlZj1cIiNcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXIgZmEtZndcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtcmlnaHRcIiBhcmlhLWxhYmVsbGVkYnk9XCJ1c2VyRHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5Qcm9maWxlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPkFjdGl2aXR5IExvZzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWRpdmlkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cImxvZ2luXCI+TG9nb3V0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICBcclxuICAgICAgICA8L25hdj5cclxuICAgICAgICA8ZGl2IGlkPVwibGF5b3V0U2lkZW5hdlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibGF5b3V0U2lkZW5hdl9uYXZcIj5cclxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwic2Itc2lkZW5hdiBhY2NvcmRpb24gc2Itc2lkZW5hdi1kYXJrXCIgaWQ9XCJzaWRlbmF2QWNjb3JkaW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYi1zaWRlbmF2LW1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Itc2lkZW5hdi1tZW51LWhlYWRpbmdcIj5Db3JlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCJkYXNoYm9hcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNiLW5hdi1saW5rLWljb25cIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtdGFjaG9tZXRlci1hbHRcIj48L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGFzaGJvYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgY29sbGFwc2VkXCIgaHJlZj1cIiNcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjY29sbGFwc2VQYWdlc1wiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCJjb2xsYXBzZVBhZ2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYi1uYXYtbGluay1pY29uXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJvb2stb3BlblwiPjwvaT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Itc2lkZW5hdi1jb2xsYXBzZS1hcnJvd1wiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1kb3duXCI+PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZVwiIGlkPVwiY29sbGFwc2VQYWdlc1wiIGFyaWEtbGFiZWxsZWRieT1cImhlYWRpbmdUd29cIiBkYXRhLXBhcmVudD1cIiNzaWRlbmF2QWNjb3JkaW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJzYi1zaWRlbmF2LW1lbnUtbmVzdGVkIG5hdiBhY2NvcmRpb25cIiBpZD1cInNpZGVuYXZBY2NvcmRpb25QYWdlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayBjb2xsYXBzZWRcIiBocmVmPVwiI1wiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNwYWdlc0NvbGxhcHNlQXV0aFwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCJwYWdlc0NvbGxhcHNlQXV0aFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXV0aGVudGljYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Itc2lkZW5hdi1jb2xsYXBzZS1hcnJvd1wiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1kb3duXCI+PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2VcIiBpZD1cInBhZ2VzQ29sbGFwc2VBdXRoXCIgYXJpYS1sYWJlbGxlZGJ5PVwiaGVhZGluZ09uZVwiIGRhdGEtcGFyZW50PVwiI3NpZGVuYXZBY2NvcmRpb25QYWdlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJzYi1zaWRlbmF2LW1lbnUtbmVzdGVkIG5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cImxvZ2luXCI+TG9naW48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwicmVnaXN0ZXJcIj5SZWdpc3RlcjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCJwYXNzd29yZFwiPkZvcmdvdCBQYXNzd29yZDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJsYXlvdXRTaWRlbmF2X2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtdC00XCI+TGlzdCBvZiBKb2JzPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC0zIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJnLXN1Y2Nlc3MgdGV4dC13aGl0ZSBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+RW1wbG95ZXJzIFRhYmxlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic21hbGwgdGV4dC13aGl0ZSBzdHJldGNoZWQtbGlua1wiIGhyZWY9XCJlbXBseW9lclwiPlZpZXcgRGV0YWlsczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwgdGV4dC13aGl0ZVwiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1yaWdodFwiPjwvaT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGFkbWluLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtd3JhcHBlclwiPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIDx0YWJsZSByZWY9e3RoaXMuZGF0YXRhYmxlUmVmfSBjbGFzc05hbWU9XCJkaXNwbGF5IHRhYmxlIHRhYmxlLWJvcmRlcmVkXCIgc3R5bGU9e3t3aWR0aDoxMDArXCIlXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwidGhyZWFkLWNvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkpvYiBOYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5FbXBsb3ltZW50IFN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q2l0eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U2FsYXJ5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Qb3N0ZWQgRGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QWN0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5qb2JzLm1hcChKb2I9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e0pvYi5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e0pvYi5KbmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntKb2IuSl9Db250cmFjdH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntKb2IuSl9jaXR5fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e0pvYi5KX21pbl9zYWxhcnl9fntKb2IuSl9tYXhfc2FsYXJ5fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e0pvYi5Qb3N0ZWREYXRlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+PGkgb25DbGljaz17KCk9PnRoaXMudmlld1Bhc3NJZChKb2IuaWQpfSBjbGFzc05hbWU9XCJ2aWV3IG1hdGVyaWFsLWljb25zIGljb24tcGFkZGluZ1wiIHRpdGxlPVwiVmlld1wiIHN0eWxlPXt7Y29sb3I6IFwicmdiKDAsIDExMCwgMjU1KVwiLCBjdXJzb3I6XCJwb2ludGVyXCJ9fSBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiPiYjeEU0MTc7PC9pPjwvYT4gJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+PGkgb25DbGljaz17KCk9PnRoaXMuZWRpdFBhc3NJZChKb2IuaWQpfSBjbGFzc05hbWU9XCJlZGl0IG1hdGVyaWFsLWljb25zIGljb24tcGFkZGluZ1wiIHRpdGxlPVwiRWRpdFwiIHN0eWxlPXt7Y29sb3I6IFwieWVsbG93XCIsIGN1cnNvcjpcInBvaW50ZXJcIn19IGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCI+JiN4RTI1NDs8L2k+PC9hPiAmbmJzcDtcclxuXHRcdFx0XHRcdFx0XHRcdDxhIG9uQ2xpY2s9eygpPT50aGlzLmRlbGV0ZVBhc3NJZChKb2IuaWQpfSBjbGFzc05hbWU9XCJkZWxldGUgbWF0ZXJpYWwtaWNvbnMgaWNvbi1wYWRkaW5nXCIgdGl0bGU9XCJEZWxldGVcIiAgc3R5bGU9e3tjb2xvcjogXCJyZWRcIiwgY3Vyc29yOlwicG9pbnRlclwifX0gZGF0YS1kaXNtaXNzPVwibW9kYWxcIj4mI3hFODcyOzwvYT4gJm5ic3A7XHJcblx0XHRcdFx0XHRcdFx0PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblx0XHJcblx0PGRpdiBpZD1cInZpZXdNb2RhbFwiIGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIj5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIGluZm8tZGlhbG9nXCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+RGV0YWlsIEluZm9ybWF0aW9uPC9oND5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWJvcmRlcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+IDx0ZD5Kb2IgTmFtZTo8L3RkPjx0ZD57dGhpcy5zdGF0ZS5KbmFtZX08L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+PHRkPiBFbXBsb3llciBOYW1lOjwvdGQ+PHRkPiB7dGhpcy5nZXRFbXBsb3llcih0aGlzLnN0YXRlLkVNUExPWUVSSUQpfTwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj48dGQ+UG9zdGVkX0RhdGU6IDwvdGQ+PHRkPnt0aGlzLnN0YXRlLlBvc3RlZERhdGV9PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHRyPiA8dGQ+UGhvbmUgTnVtYmVyOjwvdGQ+PHRkPiB7dGhpcy5zdGF0ZS5KX3RlbH08L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+IDx0ZD5FbWFpbDo8L3RkPjx0ZD4ge3RoaXMuc3RhdGUuSl9lbWFpbH08L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+IDx0ZD5BZGRyZXNzOjwvdGQ+IDx0ZD4ge3RoaXMuc3RhdGUuSl9BZGRyZXNzfSwge3RoaXMuZ2V0TG9jYXRpb24odGhpcy5zdGF0ZS5DSVRZSUQsdGhpcy5zdGF0ZS5BUkVBSUQpfSA8L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+PHRkPkVtcGxveW1lbnQgU3RhdHVzOjwvdGQ+IDx0ZD57dGhpcy5zdGF0ZS5KX0NvbnRyYWN0fTwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj4gPHRkPlNhbGFyeTo8L3RkPjx0ZD4ge3RoaXMuc3RhdGUuSl9taW5fc2FsYXJ5fX57dGhpcy5zdGF0ZS5KX21heF9zYWxhcnl9IFllbjwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj48dGQ+V29ya2luZyBEYXlzOjwvdGQ+PHRkPiB7dGhpcy5zdGF0ZS5KX1dvcmtpbmdfRGF5fSBEYXlzIHBlciBXZWVrPC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHRyPjx0ZD5Xb3JraW5nIEhvdXJzOjwvdGQ+PHRkPnt0aGlzLnN0YXRlLkpfaG91cnN9PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHRyPiA8dGQ+TWluaW11bSBKYXBhbmVzZSBTa2lsbDo8L3RkPjx0ZD4ge3RoaXMuc3RhdGUuSl9KcExldmVsfTwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj48dGQ+Sm9iIERlc2NyaXB0aW9uOjwvdGQ+PHRkPiB7dGhpcy5zdGF0ZS5KX0Rlc2NyaXB0aW9ufTwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj4gPHRkPkpvYiBRdWFsaWZpY2F0aW9uOjwvdGQ+PHRkPiB7dGhpcy5zdGF0ZS5KX1F1YWxpZmljYXRpb259PC90ZD48L3RyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgdmFsdWU9XCJDYW5jZWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKT0+dGhpcy5kZWxldGVQYXNzSWQodGhpcy5zdGF0ZS5pZCl9IGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiPkRlbGV0ZTwvYnV0dG9uPjwvYT4gXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBpZD1cImVkaXRNb2RhbFwiIGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgaW5mby1kaWFsb2dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlx0XHRcdFx0XHRcdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+QXBwbGljYXRpb24gUmVxdWlyZW1lbnQ8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIG9uQ2xpY2s9e3RoaXMuZm9ybV9jbGVhcn0gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiIG1ldGhvZD1cInBvc3RcIiBzdHlsZT17e3dpZHRoOiAxMDArXCIlXCJ9fSBvblN1Ym1pdD17dGhpcy5hZGRKb2J9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gcm9sZT1cIkZvcm1cIiBtZXRob2Q9XCJwb3N0XCIgYWN0aW9uPVwiXCIgYWNjZXB0LWNoYXJzZXQ9XCJVVEYtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14bC02IGNvbC1tZC04IGJvcmRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkpuYW1lXCI+Sm9iIE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIkpuYW1lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiSm5hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgSm9iIE5hbWVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkpuYW1lfSByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkpfQ29udHJhY3RcIj5FbXBsb3ltZW50IFN0YXR1czwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cIkpfQ29udHJhY3RcIiBpZD1cIkpfQ29udHJhY3RcIiBvbkNsaWNrPXt0aGlzLmRpc2FibGV9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRWYWx1ZX0gcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+Q2hvb3NlIEVtcGxveW1lbnQgU3RhdHVzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRnVsbC1UaW1lXCIgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUuZW1wbG95bWVudFN0YXR1cyA9PSBcIkZ1bGwtVGltZVwiICAgPyAoXCJzZWxlY3RlZFwiKSA6IChcImZhbHNlXCIpfT5GdWxsIFRpbWU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQYXJ0LVRpbWVcIiBzZWxlY3RlZD17dGhpcy5zdGF0ZS5lbXBsb3ltZW50U3RhdHVzID09IFwiUGFydC1UaW1lXCIgPyAoXCJzZWxlY3RlZFwiKSA6IChcImZhbHNlXCIpfT5QYXJ0IFRpbWU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInNhbGFyeVwiPlNhbGFyeSjCpSk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteGwtNiBjb2wtbWQtOCBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibWluX3NhbGFyeVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIkpfbWluX3NhbGFyeVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgTWluaW11biBTYWxhcnlcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkpfbWluX3NhbGFyeX0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteGwtNiBjb2wtbWQtOCBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibWF4X3NhbGFyeVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIkpfbWF4X3NhbGFyeVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgTWF4aW11biBTYWxhcnlcIiAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5KX21heF9zYWxhcnl9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiSl9ob3Vyc1wiPldvcmtpbmcgSG91cnM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIkpfaG91cnNcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJKX2hvdXJzXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBXb3JraW5nIEhvdXJzXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5KX2hvdXJzfSByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkpfV29ya2luZ19EYXlcIj5Xb3JraW5nIERheXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIkpfV29ya2luZ19EYXlcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJKX1dvcmtpbmdfRGF5XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBXb3JraW5nIERheXNcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkpfV29ya2luZ19EYXl9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiSl9KcExldmVsXCI+U2VsZWN0IEphcGFuZXNlIFNraWxsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cIkpfSnBMZXZlbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIkpfSnBMZXZlbFwiICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkVmFsdWV9IHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkIGRpc2FibGVkPlNlbGVjdCBKYXBhbmVzZSBsZXZlbDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk4zXCI+TjM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOMlwiPk4yPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTjFcIj5OMTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJKX3RlbFwiPlRlbDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIkpfdGVsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiSl90ZWxcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHBob25lOlwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuSl90ZWx9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhsLTYgY29sLW1kLTggYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Qb3N0ZWQgRGF0ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRldGltZS1sb2NhbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9XCJkYXRldGltZVwiIG5hbWU9XCJQb3N0ZWREYXRlXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5Qb3N0ZWREYXRlfSByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJKX2VtYWlsXCI+RW1haWwgQWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiSl9lbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIkpfZW1haWxcIiBwbGFjZWhvbGRlcj1cImFiY0BnbWFpbC5jb21cIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkpfZW1haWx9IHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiSi1hcmVhXCI+U2VsZWN0IEFyZWE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJBUkVBSURcIiBpZD1cImFyZWFcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNsaWNrPXt0aGlzLmRpc2FibGV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGRpc2FibGVkPlNlbGVjdCBBcmVhIGluIEphcGFuPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5hcmVhcy5tYXAoQXJlYSA9PiAodGhpcy5zdGF0ZS5BUkVBSUQgPT0gQXJlYS5pZCA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e0FyZWEuaWR9IHNlbGVjdGVkPntBcmVhLmFyZWFOYW1lfTwvb3B0aW9uPiA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e0FyZWEuaWR9PntBcmVhLmFyZWFOYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJKX2NpdHlcIj5TZWxlY3QgeW91ciBDaXR5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiQ0lUWUlEXCIgaWQ9XCJjaXR5XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DbGljaz17dGhpcy5kaXNhYmxlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gZGlzYWJsZWQ+U2VsZWN0IENpdHk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2l0aWVzICYmICBjaXRpZXMubWFwKGNpdHkgPT4gKCB0aGlzLnN0YXRlLkNJVFlJRCA9PSBjaXR5LmlkID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2NpdHkuaWR9IHNlbGVjdGVkID57Y2l0eS5jaXR5TmFtZX08L29wdGlvbj4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtjaXR5LmlkfT57Y2l0eS5jaXR5TmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRldGFpbEFkZHJcIj5EZXRhaWwgQWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJKX0FkZHJlc3NcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkpfQWRkcmVzc30gcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiSm9iRGVzXCI+Sm9iIERlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIkpfRGVzY3JpcHRpb25cIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLkpfRGVzY3JpcHRpb259IHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiUXVhbFwiPk90aGVyIFF1YWxpZmljYXRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiSl9RdWFsaWZpY2F0aW9uXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5KX1F1YWxpZmljYXRpb259ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImRlbGV0ZUNvbmZpcm1Nb2RhbFwiIGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIGRlbC1kaWFsb2dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cdFx0XHRcdFx0XHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPkRlbGV0ZSBKb2I8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlx0XHRcdFx0XHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgam9iPzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdhcm5pbmdcIj48c21hbGw+VGhpcyBhY3Rpb24gY2Fubm90IGJlIHVuZG9uZS48L3NtYWxsPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiB2YWx1ZT1cIkNhbmNlbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgdmFsdWU9XCJEZWxldGVcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIG9uQ2xpY2s9e3RoaXMuZGVsZXRlSm9ifSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuXHRcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICBcclxuXHQgICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2JvZHk+XHJcbjwvPlxyXG4pfX0iXSwic291cmNlUm9vdCI6IiJ9