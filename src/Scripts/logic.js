import { taskModal, labelModal, createLabelSelection } from "./Components/Modal";
import { navItems } from "./data";



function initializeButtons() {
    const addTaskButton = document.getElementById('addTaskButton');
    const addButton = document.getElementById('addLabelButton');
    const navItems = [...document.querySelectorAll('.nav-item')];
    if (addTaskButton) {
        addTaskButton.addEventListener('click', () => {
           document.querySelector('#dialog-task').showModal();
            
            createLabelSelection(navItems);
        });
    } else {
        console.error('Add Task Button not found');
    }
    if (addButton) {
        addButton.addEventListener('click', () => {
            Modal('add'); // Assuming Modal returns a DOM node
        });
    } else {
        console.error('+ Button not found');
    }
}

export { initializeButtons };