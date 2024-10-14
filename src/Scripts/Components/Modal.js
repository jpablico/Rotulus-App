import React from "react";
import '../../Styles/main.scss';
import { navItems } from "../Data/data";

function taskModal(){
		const dialog = document.createElement('dialog');
		dialog.id = 'dialog-task';
		dialog.innerHTML = `
			<form class='dialog-form'>
				<div class='dialog-text-input'>
					<input type="text"  class='input-element' id='input-data-task-name' value="Task name...">
					<hr class='input-separator'/>
					<input type="text"  class='input-element' id='input-data-task-description' value="Description...">
				</div>
                <div class='form-controls-container'>
					<div class='label-date-container'>
						<!-- Label selection will be inserted here -->
						<input type="date" class='input-element' id='input-data-due-date' value="Due date...">
					</div>
					<div class='button-container'>
						<button class='button-element' value="cancel">Cancel</button>
						<button class='button-element' value="submit">OK</button>
					</div>
                </div>
			</form>
		`;
		document.body.appendChild(dialog);
}

function labelModal(){
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

// Create a select element with options from the navItems
function createLabelSelection(navItems) {
	const formControls = document.querySelector('.label-date-container');
	// Map the navItems to option elements, assuming each item has a Label property
	const labelOptions = navItems.map((item, index) => (
		`<option key=${index} id='input-data-label'value="${item.Label}">${item.Label}</option>`
	));
	const select = document.createElement('select');
	select.className = 'select-element';
	select.innerHTML = labelOptions.join('');
	formControls.insertBefore(select, formControls.firstChild);
}

document.addEventListener('DOMContentLoaded', () => {
	createLabelSelection(navItems);
});

// Adds labels to navItems array
function addLabel(label) {
	
	navItems.push({ Label: label });
}


export { taskModal, labelModal, createLabelSelection };