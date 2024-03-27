"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProfilDashboard;
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrap = require("react-bootstrap");
require("./ProfilDashboard.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ProfilDashboard() {
  // Profil menüsünün açık/kapalı durumunu tutacak state
  const [isOpen, setIsOpen] = (0, _react.useState)(false);

  // Profil menüsünü açma fonksiyonu
  const handleToggleClick = () => {
    setIsOpen(!isOpen); // Menünün açık/kapalı durumunu tersine çevir
  };

  // "Profil Görüntüle" ve "Çıkış Yap" seçeneklerine tıklandığında yapılacak işlemler
  const handleMenuItemClick = action => {
    console.log(`${action} seçeneğine tıklandı`);
    // Burada profil seçeneklerine tıklandığında yapılacak işlemleri belirtebilirsiniz
  };
  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown, {
    show: isOpen,
    onToggle: handleToggleClick
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Toggle, {
    variant: "success",
    id: "dropdown-basic",
    onClick: handleToggleClick
  }, "Profil"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Menu, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: () => handleMenuItemClick('Profil Görüntüle')
  }, "Profil G\xF6r\xFCnt\xFCle"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: () => handleMenuItemClick('Çıkış Yap')
  }, "\xC7\u0131k\u0131\u015F Yap")));
}