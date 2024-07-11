import React from "react";
import '../../Styles/main.scss';

function Modal(contentType) {
	const dialog = document.querySelector('#dialog');
	if(contentType === 'addTask') {
		console.log('Add Task');
		const dialog = document.createElement('dialog');
		dialog.id = 'dialog';
		dialog.innerHTML = `
			<form class='dialog-form'>
				<h2 class='dialog-form-title'>Add Task</h2>
				<input type="text"  class='input-element' id='input-data' value="Task name...">
				<div class='radio-container'>
					<div class='radio-selector'>
						<label for='priorityHigh'>High</label><br>
						<input type='Radio' class='Priority' id='priorityHigh' value='High'>
					</div>
					<div class='radio-selector'>
						<label for='priorityMedium'>Medium</label><br>
						<input type='Radio' class='Priority' id='priorityMedium' value='Medium'>
					</div>
					<div class='radio-selector'>
					<label for='priorityLow'>Low</label><br>
						<input type='Radio' class='Priority' id='priorityLow' value='Low'>
					</div>
				</div>
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
	}
}


export { Modal };