import React from "react";
import '../../Styles/main.scss';
import { navItems } from "../data";

function taskModal(){
	console.log('Add Task');
		const dialog = document.createElement('dialog');
		dialog.id = 'dialog-task';
		dialog.innerHTML = `
			<form class='dialog-form'>
				<div class='dialog-text-input'>
					<input type="text"  class='input-element' id='input-data' value="Task name...">
					<input type="text"  class='input-element' id='input-data' value="Description...">
				</div>
                <div class='form-controls-container'>
					
					<input type="date" class='input-element' id='input-data' value="Due date...">
					<input type="time" class='input-element' id='input-data' value="Due time...">
					<div class='button-container'>
						<button class='button-element' value="cancel">Cancel</button>
						<button class='button-element' value="default">OK</button>
					</div>
                </div>
			</form>
		`;
		document.body.appendChild(dialog);
}

function labelModal(){
	console.log('Add');
		const dialog = document.createElement('dialog');
		dialog.id = 'dialog-label';
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
}

function createLabelSelection(navItems) {
	
	const formControls = document.querySelector('.form-controls-container');

	const labelOptions = navItems.map((label, index) => (
		`<option key=${index} value=${label}>${label}</option>`
	));

	const select = document.createElement('select');
	select.className = 'select-element';
	select.innerHTML = labelOptions.join('');
	formControls.appendChild(select);
}

document.addEventListener('DOMContentLoaded', () => {
	createLabelSelection(navItems);
});

export { taskModal, labelModal, createLabelSelection};