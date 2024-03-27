"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./App.css");
var _MainDashboard = _interopRequireDefault(require("./dashboards/MainDashboard"));
var _SignInDashboard = _interopRequireDefault(require("./dashboards/SignInDashboard"));
var _JobAdvertisementDashboard = _interopRequireDefault(require("./dashboards/JobAdvertisementDashboard"));
function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement(_JobAdvertisementDashboard.default, null));
}
var _default = exports.default = App;