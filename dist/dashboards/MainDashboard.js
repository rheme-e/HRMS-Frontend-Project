"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MainDashboard;
var _react = _interopRequireDefault(require("react"));
var _Navi = _interopRequireDefault(require("../layouts/Navi"));
var _Search = _interopRequireDefault(require("../layouts/Search"));
var _Ads = _interopRequireDefault(require("../pages/Ads"));
var _reactBootstrap = require("react-bootstrap");
require("./JobAdvertisementDashboard.css");
function MainDashboard() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Navi.default, null), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Container, {
    className: "job-advertisement-dashboard-container"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    sm: 4,
    className: "search-col"
  }, " ", /*#__PURE__*/_react.default.createElement(_Search.default, null), " "), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
    sm: 8,
    className: "job-advertisements-col"
  }, " ", /*#__PURE__*/_react.default.createElement(_Ads.default, null), " "))));
}