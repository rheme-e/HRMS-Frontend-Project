"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = JobAdvertisementDashboard;
var _react = _interopRequireDefault(require("react"));
var _Navi = _interopRequireDefault(require("../layouts/Navi"));
var _ExaminedAdvertisement = _interopRequireDefault(require("../pages/ExaminedAdvertisement.jsx"));
function JobAdvertisementDashboard() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Navi.default, null), /*#__PURE__*/_react.default.createElement(_ExaminedAdvertisement.default, null));
}