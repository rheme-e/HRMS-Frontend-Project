"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _axios = _interopRequireDefault(require("axios"));
class jobAdvertisementService {
  getJobAdvertisements() {
    return _axios.default.get("http://localhost:8080/api/job-advertisements/getAll");
  }
  getJobAdvertisementsById(employerId) {
    return _axios.default.get(`http://localhost:8080/api/job-advertisements/getAllByEmployerId/${employerId}`);
  }
}
exports.default = jobAdvertisementService;