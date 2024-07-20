import { navItems } from './data';

function populateNavList(navItems) {
    const navList = document.querySelector('.nav-list')
    navList.innerHTML = '';
    navItems.forEach(item => {
        const li = document.createElement('li');
        li.className = 'nav-item';
        li.textContent = item.Label;
        li.addEventListener('click', function(event) {
            document.querySelectorAll('.nav-item').forEach(navItem => {
                navItem.classList.remove('active');
            });
            event.target.classList.add('active');
            updateNavItemContent(event.target);
        });
        navList.appendChild(li);
    });
}

function updateNavItemContent(navItem) {
    const main = document.querySelector('.main');
    main.innerHTML = '';
    const filteredItems = navItems.filter(item => item.Label === navItem.textContent);
    filteredItems.forEach(item => {
        const div = document.createElement('div');
        div.className = 'main-item';
        div.textContent = item.Content;
        main.appendChild(div);
    });
}

function populateTaskList() {
    const taskList = document.querySelector('.task-list');
    taskList.innerHTML = '';
    taskArray.forEach(task => {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.textContent = task.taskName;
        taskList.appendChild(li);
    });
}

export { populateNavList }