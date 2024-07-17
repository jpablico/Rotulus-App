import { taskModal, labelModal, createLabelSelection } from "./Components/Modal";
import { navItems } from "./data";



function initializeButtons() {
    const addTaskButton = document.getElementById('addTaskButton');
    const addButton = document.getElementById('addLabelButton');
    const navItems = [...document.querySelectorAll('.nav-item')];
    submitForm();
    if (addTaskButton) {
        addTaskButton.addEventListener('click', () => {
           document.querySelector('#dialog-task').showModal();
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

function submitForm() {
    console.log('Form submit event');
    const form = document.querySelector('.dialog-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const data = {};
        for (const [key, value] of formData.entries()) {
            data[key] = value;
        }
        
        console.log(data);
    });
}

export { initializeButtons };