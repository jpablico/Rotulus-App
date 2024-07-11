"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = require("react-dom/client");
var _header = require("./Components/header");
var _main = _interopRequireDefault(require("./Components/main"));
var _Modal = require("./Components/Modal");
var _utils = require("./utils");
var _data = require("./data");
var _logic = require("./logic");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Ensure this is correctly imported as a component

// Select a dedicated container instead of 'body'
var container = document.getElementById('app');
var root = (0, _client.createRoot)(container); // Create a root.

// Use the new API to render
root.render( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_header.Header, null), /*#__PURE__*/_react["default"].createElement(_main["default"], null)));
document.addEventListener('DOMContentLoaded', function () {
  (0, _utils.populateNavList)(_data.navItems);
  (0, _logic.initializeButtons)();
});