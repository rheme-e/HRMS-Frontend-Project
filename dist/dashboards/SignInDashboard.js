"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SignInDashboard;
var _react = _interopRequireWildcard(require("react"));
var _Navi = _interopRequireDefault(require("../layouts/Navi"));
require("./SignInDashboard.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function SignInDashboard() {
  const [showModal, setShowModal] = (0, _react.useState)(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Navi.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-menu-container"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: openModal
  }, "Hesap Olu\u015Ftur"), /*#__PURE__*/_react.default.createElement("form", {
    className: "px-4 py-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "exampleDropdownFormEmail1"
  }, "Email"), /*#__PURE__*/_react.default.createElement("input", {
    type: "email",
    className: "form-control",
    id: "exampleDropdownFormEmail1",
    placeholder: "birisi@example.com"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "exampleDropdownFormPassword1"
  }, "\u015Eifre"), /*#__PURE__*/_react.default.createElement("input", {
    type: "password",
    className: "form-control",
    id: "exampleDropdownFormPassword1",
    placeholder: "\u015Fifre"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-check"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    className: "form-check-input",
    id: "dropdownCheck"
  }), /*#__PURE__*/_react.default.createElement("label", {
    className: "form-check-label",
    htmlFor: "dropdownCheck"
  }, "Beni Hat\u0131rla"))), /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Giri\u015F Yap")), /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-divider"
  }), /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, "Hesab\u0131n yoksa hesap olu\u015Ftur!"), /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, "\u015Eifreni mi unuttun?")));
}