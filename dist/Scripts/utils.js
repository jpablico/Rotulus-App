"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.populateNavList = populateNavList;
var _data = require("./data");
function populateNavList(navItems) {
  var navList = document.querySelector('.nav-list');
  navList.innerHTML = '';
  navItems.forEach(function (item) {
    var li = document.createElement('li');
    li.className = 'nav-item';
    li.textContent = item.Label;
    li.addEventListener('click', function (event) {
      document.querySelectorAll('.nav-item').forEach(function (navItem) {
        navItem.classList.remove('active');
      });
      event.target.classList.add('active');
      updateNavItemContent(event.target);
    });
    navList.appendChild(li);
  });
}
function updateNavItemContent(navItem) {
  var main = document.querySelector('.main');
  main.innerHTML = '';
  var filteredItems = _data.navItems.filter(function (item) {
    return item.Label === navItem.textContent;
  });
  filteredItems.forEach(function (item) {
    var div = document.createElement('div');
    div.className = 'main-item';
    div.textContent = item.Content;
    main.appendChild(div);
  });
}
function populateTaskList() {
  var taskList = document.querySelector('.task-list');
  taskList.innerHTML = '';
  taskArray.forEach(function (task) {
    var li = document.createElement('li');
    li.className = 'task-item';
    li.textContent = task.taskName;
    taskList.appendChild(li);
  });
}