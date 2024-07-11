"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializeButtons = initializeButtons;
var _Modal = require("./Components/Modal");
function initializeButtons() {
  var addTaskButton = document.getElementById('addTaskButton');
  var addButton = document.getElementById('addLabelButton');
  var dialogContainer = document.querySelector('body'); // Or any other container

  if (addTaskButton) {
    addTaskButton.addEventListener('click', function () {
      var dialog = (0, _Modal.Modal)('addTask'); // Assuming Modal returns a DOM node
      dialogContainer.appendChild(dialog); // Append the dialog to the DOM
      (0, _Modal.ModalShow)();
    });
  } else {
    console.error('Add Task Button not found');
  }
  if (addButton) {
    addButton.addEventListener('click', function () {
      var dialog = (0, _Modal.Modal)('add'); // Assuming Modal returns a DOM node
      if (dialog) {
        dialogContainer.appendChild(dialog); // Append the dialog to the DOM
        dialog.showModal();
      } else {
        console.error('Dialog creation failed');
      }
    });
  } else {
    console.error('+ Button not found');
  }
}