"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Navi;
var _react = _interopRequireDefault(require("react"));
require("./Navi.css");
require("../dashboards/ProfilDashboard.jsx");
// Navi.js

function Navi() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "navi",
    style: {
      backgroundImage: "url('https://i.imgur.com/f10FU84.jpeg')"
    }
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "item",
    style: {
      float: 'left'
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "ui avatar image",
    src: "https://i.imgur.com/lULxviV.jpeg",
    alt: "Logo"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "right menu",
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "item"
  }, "Profile")));
}