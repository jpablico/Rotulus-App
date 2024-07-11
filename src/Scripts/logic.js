import { Modal } from "./Components/Modal";

function initializeButtons() {
    const addTaskButton = document.getElementById('addTaskButton');
    const addButton = document.getElementById('addLabelButton');
    const dialogContainer = document.querySelector('body'); // Or any other container

    if (addTaskButton) {
        addTaskButton.addEventListener('click', () => {
            const dialog = Modal('addTask'); // Assuming Modal returns a DOM node

        });
    } else {
        console.error('Add Task Button not found');
    }
    if (addButton) {
        addButton.addEventListener('click', () => {
            const dialog = Modal('add'); // Assuming Modal returns a DOM node
        });
    } else {
        console.error('+ Button not found');
    }
}

export { initializeButtons };