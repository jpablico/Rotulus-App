import React from "react";
import '../../Styles/main.scss';

function Modal(contentType) {
	if(contentType === 'addTask') {
		console.log('Add Task');
		return <dialog id="dialog">
			<form className="dialog-form">
				<input type="text" value="Task name..." />
				<button>Cancel</button>
				<button>OK</button>
			</form>
		</dialog>;
	} else if(contentType === 'add') {

	}
}

function openModal(contentType) {
    // Assuming modal and navItem are accessible or passed as parameters
	const dialog = document.querySelector('#dialog');
	if(contentType === 'addTask') {
		console.log('Add Task');
		const dialog = document.createElement('dialog');
		dialog.id = 'dialog';
		dialog.innerHTML = `
			<form class='dialog-form'>
				<input type="text"  class='input-element' id='input-data' value="Task name...">
                
                <input type='Radio' class='Priority' value='Low'>
                <div class="button-container">
                    <button class='button-element' value="cancel">Cancel</button>
                    <button class='button-element' value="default">OK</button>
                </div>
			</form>
		`;
		document.body.appendChild(dialog);
		dialog.showModal();
	} else if(contentType === 'add') {
		console.log('Add');
		const dialog = document.createElement('dialog');
		dialog.id = 'dialog';
		dialog.innerHTML = `
			<form class='dialog-form'>
				<input type="text"  class='input-element' id='input-data' value="Label name...">
				<div class='button-container'>
					<button class='button-element' value="cancel">Cancel</button>
					<button class='button-element' value="default">OK</button>
				</div>
			</form>
		`;
		document.body.appendChild(dialog);
		dialog.showModal();
	} else {
		console.log('Default');
	}
	console.log('openModal');
    updateNavItemContent(); // Update the nav item content
    modal.style.display = 'block'; // Show the modal
}