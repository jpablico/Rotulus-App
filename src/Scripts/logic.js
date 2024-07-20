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
        const taskName = document.getElementById('input-data-task-name').value;  
        const taskDescription = document.getElementById('input-data-task-description').value;
        const dueDate = document.getElementById('input-data-due-date').value;
        const label = document.getElementById('input-data-label').value;
        newTask(taskName, taskDescription, dueDate, label);
    });
}

function newTask(taskName, taskDescription, dueDate, label) {
    const task = {
        taskName: taskName,
        taskDescription: taskDescription,
        dueDate: dueDate,
        label: label
    };

    taskArray.push(task);

    console.log('New task created');
    console.log(taskName, taskDescription, dueDate, label);
}

export { initializeButtons };