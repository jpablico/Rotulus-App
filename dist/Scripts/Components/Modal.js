"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createLabelSelection = createLabelSelection;
exports.labelModal = labelModal;
exports.taskModal = taskModal;
var _react = _interopRequireDefault(require("react"));
require("../../Styles/main.scss");
var _data = require("../data");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function taskModal() {
  var dialog = document.createElement('dialog');
  dialog.id = 'dialog-task';
  dialog.innerHTML = "\n\t\t\t<form class='dialog-form'>\n\t\t\t\t<div class='dialog-text-input'>\n\t\t\t\t\t<input type=\"text\"  class='input-element' id='input-data-task-name' value=\"Task name...\">\n\t\t\t\t\t<hr class='input-separator'/>\n\t\t\t\t\t<input type=\"text\"  class='input-element' id='input-data-task-description' value=\"Description...\">\n\t\t\t\t</div>\n                <div class='form-controls-container'>\n\t\t\t\t\t<div class='label-date-container'>\n\t\t\t\t\t\t<!-- Label selection will be inserted here -->\n\t\t\t\t\t\t<input type=\"date\" class='input-element' id='input-data-due-date' value=\"Due date...\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='button-container'>\n\t\t\t\t\t\t<button class='button-element' value=\"cancel\">Cancel</button>\n\t\t\t\t\t\t<button class='button-element' value=\"default\">OK</button>\n\t\t\t\t\t</div>\n                </div>\n\t\t\t</form>\n\t\t";
  document.body.appendChild(dialog);
}
function labelModal() {
  var dialog = document.createElement('dialog');
  dialog.id = 'dialog-label';
  dialog.innerHTML = "\n\t\t\t<form class='dialog-form'>\n\t\t\t\t<input type=\"text\"  class='input-element' id='input-data' value=\"Label name...\">\n\t\t\t\t<div class='button-container'>\n\t\t\t\t\t<button class='button-element' value=\"cancel\">Cancel</button>\n\t\t\t\t\t<button class='button-element' value=\"default\">OK</button>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t";
  document.body.appendChild(dialog);
}
function createLabelSelection(navItems) {
  var formControls = document.querySelector('.label-date-container');
  // Map the navItems to option elements, assuming each item has a Label property
  var labelOptions = navItems.map(function (item, index) {
    return "<option key=".concat(index, " id='input-data-label'value=\"").concat(item.Label, "\">").concat(item.Label, "</option>");
  });
  var select = document.createElement('select');
  select.className = 'select-element';
  select.innerHTML = labelOptions.join('');
  formControls.insertBefore(select, formControls.firstChild);
}
document.addEventListener('DOMContentLoaded', function () {
  createLabelSelection(_data.navItems);
});