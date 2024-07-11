"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("../../Styles/main.scss");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Main() {
  return /*#__PURE__*/_react["default"].createElement("main", {
    id: "main-container"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "main-title"
  }, "Tasks"));
}
var _default = exports["default"] = Main;