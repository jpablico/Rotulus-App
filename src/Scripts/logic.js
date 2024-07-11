import { Modal, ModalShow } from "./Components/Modal";

function initializeButtons() {
    const addTaskButton = document.getElementById('addTaskButton');
    const addButton = document.getElementById('addLabelButton');
    const dialog = document.querySelector('#dialog'); // Move dialog selection here to avoid repetition

    if (addTaskButton) {
        addTaskButton.addEventListener('click', () => {
            Modal('addTask');
            ModalShow();   
        });
    } else {
        console.error('Add Task Button not found');
    }
    if (addButton) {
        addButton.addEventListener('click', () => {
            if (dialog) {
                Modal('add');
                dialog.showModal();
            } else {
                console.error('Dialog not found');
            }
        });
    } else {
        console.error('+ Button not found');
    }
}
export { initializeButtons };