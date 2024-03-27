"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _axios = _interopRequireDefault(require("axios"));
class citiesService {
  getCities() {
    return _axios.default.get("http://localhost:8080/api/cities/all");
  }
}
exports.default = citiesService;