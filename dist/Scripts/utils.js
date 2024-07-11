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