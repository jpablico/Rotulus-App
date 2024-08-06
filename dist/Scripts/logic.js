"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializeButtons = initializeButtons;
var _Modal = require("./Components/Modal");
var _data = require("./data");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function initializeButtons() {
  var addTaskButton = document.getElementById('addTaskButton');
  var addButton = document.getElementById('addLabelButton');
  var navItems = _toConsumableArray(document.querySelectorAll('.nav-item'));
  submitForm();
  if (addTaskButton) {
    addTaskButton.addEventListener('click', function () {
      document.querySelector('#dialog-task').showModal();
    });
  } else {
    console.error('Add Task Button not found');
  }
  if (addButton) {
    addButton.addEventListener('click', function () {
      Modal('add'); // Assuming Modal returns a DOM node
    });
  } else {
    console.error('+ Button not found');
  }
}
function submitForm() {
  console.log('Form submit event');
  var form = document.querySelector('.dialog-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var taskName = document.getElementById('input-data-task-name').value;
    var taskDescription = document.getElementById('input-data-task-description').value;
    var dueDate = document.getElementById('input-data-due-date').value;
    var label = document.getElementById('input-data-label').value;
    newTask(taskName, taskDescription, dueDate, label);
  });
}
function newTask(taskName, taskDescription, dueDate, label) {
  var task = {
    taskName: taskName,
    taskDescription: taskDescription,
    dueDate: dueDate,
    label: label
  };
  taskArray.push(task);
  console.log('New task created');
  console.log(taskName, taskDescription, dueDate, label);
}