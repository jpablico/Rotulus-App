"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = Header;
var _react = _interopRequireDefault(require("react"));
require("../../Styles/main.scss");
var _portraitJoshP = _interopRequireDefault(require("../../Assets/portraitJoshP.jpeg"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Header() {
  return /*#__PURE__*/_react["default"].createElement("header", {
    id: "header-container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "header-account-wrapper"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _portraitJoshP["default"],
    alt: "User profile picture",
    className: "header-account-image"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "header-account-info"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "header-account-name"
  }, "Josh Pablico"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "header-account-email"
  }, "jbpablico@gmail.com"))), /*#__PURE__*/_react["default"].createElement("nav", {
    className: "nav-container"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "nav-button",
    id: "addTaskButton"
  }, "Add task"), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "nav-list"
  }), /*#__PURE__*/_react["default"].createElement("button", {
    className: "label-button",
    id: "addLabelButton"
  }, "Add label")));
}