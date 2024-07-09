import { navItems } from './data';

function populateNavList(navItems) {
	const navList = document.querySelector('.nav-list');
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

export { populateNavList }