"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = Modal;
exports.ModalShow = ModalShow;
var _react = _interopRequireDefault(require("react"));
require("../../Styles/main.scss");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Modal(contentType) {
  if (contentType === 'addTask') {
    console.log('Add Task');
    return /*#__PURE__*/_react["default"].createElement("dialog", {
      id: "dialog"
    }, /*#__PURE__*/_react["default"].createElement("form", {
      className: "dialog-form"
    }, /*#__PURE__*/_react["default"].createElement("input", {
      type: "text",
      className: "input-element",
      id: "input-data",
      defaultValue: "Task name..."
    }), /*#__PURE__*/_react["default"].createElement("input", {
      type: "radio",
      className: "Priority",
      value: "Low"
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "button-container"
    }, /*#__PURE__*/_react["default"].createElement("button", {
      className: "button-element",
      value: "cancel"
    }, "Cancel"), /*#__PURE__*/_react["default"].createElement("button", {
      className: "button-element",
      value: "default"
    }, "OK"))));
  } else if (contentType === 'add') {
    return /*#__PURE__*/_react["default"].createElement("dialog", {
      id: "dialog"
    }, /*#__PURE__*/_react["default"].createElement("form", {
      className: "dialog-form"
    }, /*#__PURE__*/_react["default"].createElement("input", {
      type: "text",
      className: "input-element",
      defaultValue: "Label name..."
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "button-container"
    }, /*#__PURE__*/_react["default"].createElement("button", {
      className: "button-element",
      value: "cancel"
    }, "Cancel"), /*#__PURE__*/_react["default"].createElement("button", {
      className: "button-element",
      value: "default"
    }, "OK"))));
  }
}
function ModalShow() {
  if (dialog) {
    dialog.showModal();
  } else {
    console.error('Dialog not found');
  }
}
function openModal(contentType) {
  // Assuming modal and navItem are accessible or passed as parameters
  var dialog = document.querySelector('#dialog');
  if (contentType === 'addTask') {
    console.log('Add Task');
    var _dialog = document.createElement('dialog');
    _dialog.id = 'dialog';
    _dialog.innerHTML = "\n\t\t\t<form class='dialog-form'>\n\t\t\t\t<input type=\"text\"  class='input-element' id='input-data' value=\"Task name...\">\n                \n                <input type='Radio' class='Priority' value='Low'>\n                <div class=\"button-container\">\n                    <button class='button-element' value=\"cancel\">Cancel</button>\n                    <button class='button-element' value=\"default\">OK</button>\n                </div>\n\t\t\t</form>\n\t\t";
    document.body.appendChild(_dialog);
    _dialog.showModal();
  } else if (contentType === 'add') {
    console.log('Add');
    var _dialog2 = document.createElement('dialog');
    _dialog2.id = 'dialog';
    _dialog2.innerHTML = "\n\t\t\t<form class='dialog-form'>\n\t\t\t\t<input type=\"text\"  class='input-element' id='input-data' value=\"Label name...\">\n\t\t\t\t<div class='button-container'>\n\t\t\t\t\t<button class='button-element' value=\"cancel\">Cancel</button>\n\t\t\t\t\t<button class='button-element' value=\"default\">OK</button>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t";
    document.body.appendChild(_dialog2);
    _dialog2.showModal();
  } else {
    console.log('Default');
  }
  console.log('openModal');
  updateNavItemContent(); // Update the nav item content
  modal.style.display = 'block'; // Show the modal
}