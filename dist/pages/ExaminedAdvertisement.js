"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ExaminedAdvertisement;
var _react = _interopRequireWildcard(require("react"));
var _jobAdvertisementService = _interopRequireDefault(require("../services/jobAdvertisementService.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ExaminedAdvertisement() {
  const [jobAdvertisements, setJobAdvertisements] = (0, _react.useState)([]);
  const employerId = 10; // Örnek bir employerId değeri

  (0, _react.useEffect)(() => {
    const fetchData = async () => {
      try {
        const jobAdvertisementService = new _jobAdvertisementService.default();
        const result = await jobAdvertisementService.getJobAdvertisementsById(employerId);
        console.log(result.data);
        setJobAdvertisements(result.data);
      } catch (error) {
        console.error('Error fetching job advertisements:', error);
        if (error.response) {
          console.error('Response status:', error.response.status);
          console.error('Response data:', error.response.data);
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Error message:', error.message);
        }
        // Kullanıcıya daha spesifik bir hata mesajı göstermek için setState ile bir hata mesajı tanımlayabilirsiniz.
        // setErrorMessage('Veri alınamadı. Lütfen daha sonra tekrar deneyin.');
      }
    };
    fetchData();
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "job-advertisement-details"
  }, jobAdvertisements.length > 0 ? jobAdvertisements.map(jobAdvertisement => /*#__PURE__*/_react.default.createElement("div", {
    key: jobAdvertisement.id
  }, /*#__PURE__*/_react.default.createElement("h2", null, jobAdvertisement.jobPositionName), /*#__PURE__*/_react.default.createElement("p", null, jobAdvertisement.jobDescription), /*#__PURE__*/_react.default.createElement("p", null, "\u015Eirket: ", jobAdvertisement.companyName), /*#__PURE__*/_react.default.createElement("p", null, "Pozisyon: ", jobAdvertisement.openPosition), /*#__PURE__*/_react.default.createElement("p", null, "Minimum Maa\u015F: ", jobAdvertisement.minSalary), /*#__PURE__*/_react.default.createElement("p", null, "Maksimum Maa\u015F: ", jobAdvertisement.maxSalary), /*#__PURE__*/_react.default.createElement("p", null, "Ba\u015Fvuru Son Tarihi: ", jobAdvertisement.applicationDeadline), /*#__PURE__*/_react.default.createElement("p", null, "Yay\u0131mlanma Tarihi: ", jobAdvertisement.releaseDate), /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => applyForJob(jobAdvertisement.id)
  }, "Ba\u015Fvur"))) : jobAdvertisements === null ? /*#__PURE__*/_react.default.createElement("p", null, "Y\xFCkleniyor...") : /*#__PURE__*/_react.default.createElement("p", null, "Veri bulunamad\u0131 veya i\u015Flenemedi."));
}
const applyForJob = advertisementId => {
  console.log(`Başvuru yapıldı: ${advertisementId}`);
};