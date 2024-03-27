"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Search;
var _react = _interopRequireWildcard(require("react"));
var _axios = _interopRequireDefault(require("axios"));
require("./Search.css");
var _jobAdvertisementService = _interopRequireDefault(require("../services/jobAdvertisementService"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function Search() {
  const [cities, setCities] = (0, _react.useState)([]);
  const [jobModels, setJobModels] = (0, _react.useState)([]); // Benzersiz iş modelleri için state tanımlayın
  const [jobTimes, setJobTimes] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    getCitiesFromApi();
    getJobModelsFromApi(); // İş modellerini alma fonksiyonunu çağırın
    getJobTimesFromApi();
  }, []);
  const getCitiesFromApi = async () => {
    try {
      const response = await _axios.default.get("http://localhost:8080/api/cities/all");
      setCities(response.data); // Şehir verilerini state'e kaydet
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };
  const getJobModelsFromApi = async () => {
    try {
      const jobAdvertisementService = new _jobAdvertisementService.default();
      const result = await jobAdvertisementService.getJobAdvertisements();
      const uniqueModels = [...new Set(result.data.data.map(item => item.model))]; // Benzersiz iş modellerini alın
      setJobModels(uniqueModels);
    } catch (error) {
      console.error('Error fetching job models:', error);
    }
  };
  const getJobTimesFromApi = async () => {
    try {
      const jobAdvertisementService = new _jobAdvertisementService.default();
      const result = await jobAdvertisementService.getJobAdvertisements();
      const uniqueTimes = [...new Set(result.data.data.map(item => item.time))];
      setJobTimes(uniqueTimes);
    } catch (error) {
      console.error('Error fetching job models:', error);
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("form", {
    className: "ui form"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "field"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "job-positions"
  }, "Pozisyon"), /*#__PURE__*/_react.default.createElement("select", {
    id: "job-positions",
    name: "job-positions",
    className: "ui dropdown"
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: ""
  }, "Pozisyon Se\xE7iniz"), /*#__PURE__*/_react.default.createElement("option", {
    value: "software-engineer"
  }, "Yaz\u0131l\u0131m M\xFChendisi"), /*#__PURE__*/_react.default.createElement("option", {
    value: "data-scientist"
  }, "Veri Bilimcisi"), /*#__PURE__*/_react.default.createElement("option", {
    value: "project-manager"
  }, "Proje Y\xF6neticisi"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "field"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "city"
  }, "\u015Eehir"), /*#__PURE__*/_react.default.createElement("select", {
    id: "city",
    name: "city",
    className: "ui dropdown"
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: ""
  }, "\u015Eehir Se\xE7iniz"), cities.length > 0 && cities.map(city => /*#__PURE__*/_react.default.createElement("option", {
    key: city.id,
    value: city.name
  }, city.name)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "field"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "model"
  }, "\xC7al\u0131\u015Fma Modeli"), /*#__PURE__*/_react.default.createElement("select", {
    id: "model",
    name: "model",
    className: "ui dropdown"
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: ""
  }, "\xC7al\u0131\u015Fma modeli se\xE7iniz"), jobModels.map((model, index) => /*#__PURE__*/_react.default.createElement("option", {
    key: index,
    value: model
  }, model)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "field"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "time"
  }, "\xC7al\u0131\u015Fma \u015Eekli"), /*#__PURE__*/_react.default.createElement("select", {
    id: "time",
    name: "time",
    className: "ui dropdown"
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: ""
  }, "\xC7al\u0131\u015Fma \u015Fekli se\xE7iniz"), jobTimes.map((time, index) => /*#__PURE__*/_react.default.createElement("option", {
    key: index,
    value: time
  }, time)))), /*#__PURE__*/_react.default.createElement("button", {
    className: "ui button",
    type: "submit"
  }, "\u0130\u015F Bul")));
}