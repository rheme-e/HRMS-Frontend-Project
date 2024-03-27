"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Pagination;
var _react = _interopRequireDefault(require("react"));
require("./Pagination.css");
function Pagination({
  jobAdvertisementsPerPage,
  totalJobAdvertisements,
  paginate
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalJobAdvertisements / jobAdvertisementsPerPage); i++) {
    pageNumbers.push(i);
  }
  return /*#__PURE__*/_react.default.createElement("nav", null, /*#__PURE__*/_react.default.createElement("ul", {
    className: "pagination"
  }, pageNumbers.map(number => /*#__PURE__*/_react.default.createElement("li", {
    key: number,
    className: "page-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    onClick: () => paginate(number),
    href: "!#",
    className: "page-link"
  }, number)))));
}