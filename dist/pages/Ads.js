"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Ads;
var _react = _interopRequireWildcard(require("react"));
var _jobAdvertisementService = _interopRequireDefault(require("../services/jobAdvertisementService"));
require("./Ads.css");
var _Pagination = _interopRequireDefault(require("./Pagination"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// Sayfalama bileşeni

function Ads() {
  const [jobAdvertisements, setJobAdvertisements] = (0, _react.useState)([]);
  const [currentPage, setCurrentPage] = (0, _react.useState)(1); // Şu anki sayfa numarası
  const [jobAdvertisementsPerPage] = (0, _react.useState)(5); // Sayfa başına gösterilecek iş ilanı sayısı

  (0, _react.useEffect)(() => {
    const fetchData = async () => {
      try {
        const jobAdvertisementService = new _jobAdvertisementService.default();
        const result = await jobAdvertisementService.getJobAdvertisements();
        setJobAdvertisements(result.data.data);
      } catch (error) {
        console.error('Error fetching job advertisements:', error);
      }
    };
    fetchData();
  }, []);

  // Mevcut sayfadaki iş ilanlarını al
  const indexOfLastJob = currentPage * jobAdvertisementsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobAdvertisementsPerPage;
  const currentJobAdvertisements = jobAdvertisements.slice(indexOfFirstJob, indexOfLastJob);

  // Sayfa değiştirme işlevi
  const paginate = pageNumber => setCurrentPage(pageNumber);
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("table", {
    className: "ui fixed table"
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, "\u015Eirket Ad\u0131"), /*#__PURE__*/_react.default.createElement("th", null, "Pozisyon"), /*#__PURE__*/_react.default.createElement("th", null, "A\xE7\u0131k Pozisyon"), /*#__PURE__*/_react.default.createElement("th", null, "Yay\u0131nlanma Tarihi"), /*#__PURE__*/_react.default.createElement("th", null, "Son Ba\u015Fvuru"), /*#__PURE__*/_react.default.createElement("th", null, "\xC7al\u0131\u015Fma \u015Eekli"), /*#__PURE__*/_react.default.createElement("th", null, "\xC7al\u0131\u015Fma Tercihi"), /*#__PURE__*/_react.default.createElement("th", null, "\u015Eehir"), /*#__PURE__*/_react.default.createElement("th", null, "Aktif"), /*#__PURE__*/_react.default.createElement("th", null))), /*#__PURE__*/_react.default.createElement("tbody", null, currentJobAdvertisements.map((jobAdvertisement, index) => /*#__PURE__*/_react.default.createElement("tr", {
    key: index
  }, /*#__PURE__*/_react.default.createElement("td", null, jobAdvertisement.companyName), /*#__PURE__*/_react.default.createElement("td", null, jobAdvertisement.jobPositionName), /*#__PURE__*/_react.default.createElement("td", null, jobAdvertisement.openPosition), /*#__PURE__*/_react.default.createElement("td", null, new Date(jobAdvertisement.releaseDate).toLocaleDateString('tr-TR')), /*#__PURE__*/_react.default.createElement("td", null, new Date(jobAdvertisement.applicationDeadline).toLocaleDateString('tr-TR')), /*#__PURE__*/_react.default.createElement("td", null, jobAdvertisement.model), /*#__PURE__*/_react.default.createElement("td", null, jobAdvertisement.time), /*#__PURE__*/_react.default.createElement("td", null, jobAdvertisement.city), /*#__PURE__*/_react.default.createElement("td", null, jobAdvertisement.isActive ? 'Aktif' : 'Pasif'), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("button", {
    className: "ui button"
  }, "\u0130ncele")))))), /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    jobAdvertisementsPerPage: jobAdvertisementsPerPage,
    totalJobAdvertisements: jobAdvertisements.length,
    paginate: paginate
  }));
}