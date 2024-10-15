import React from "react";
import '../../Styles/main.scss';
import { navItems } from "../Data/data";
import { populateNavList } from "../Logic/headerlogic";

function taskModalt(){
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

function taskModal(){
	console.log('taskModal');
	const dialog = document.createElement('dialog');
	dialog.id = 'dialog-task';
	dialog.innerHTML= `
		<form id='add-task-form'>
			<label for="Task-Name">Task Title</label>
				<input type="text" id="Task-Name" required>
		
				<label for="Task-Description">Task Description</label>
				<textarea id="Task-Description" required></textarea>
		
				<label for="Task-Due-Date">Due Date</label>
				<input type="date" id="Task-Due-Date">
		
				<label for="Task-Priority">Priority</label>
				<select id="Task-Priority">
					<option value="low">Low</option>
					<option value="medium">Medium</option>
					<option value="high">High</option>
				</select>
		
				<label for="Task-Notes">Notes</label>
				<textarea id="Task-Notes"></textarea>
				<div class="label-container">
				<div class="button-wrapper">
					<button type="button" id="Cancel-Task">Cancel</button>
					<button type="submit" id="Submit-Task">Add Task</button>
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

function clearNavList() {
	const navList = document.querySelector('.nav-list');
	navList.innerHTML = '';
}

document.addEventListener('submit', (event) => {
	event.preventDefault();
	const form = event.target.closest('form');
	if (form) {
		const dialogId = form.closest('dialog').id;
		if (dialogId === 'dialog-task') {
			const taskName = form.querySelector('#input-data-task-name').value;
			const taskDescription = form.querySelector('#input-data-task-description').value;
			const dueDate = form.querySelector('#input-data-due-date').value;
			const label = form.querySelector('.select-element').value;
			navItems.push({ Label: label, TaskName: taskName, TaskDescription: taskDescription, DueDate: dueDate });
		} else if (dialogId === 'dialog-label') {
			const labelName = form.querySelector('#input-data').value;
			addLabel(labelName);
			clearNavList();
			populateNavList(navItems);
			console.log(navItems);
		}
		form.closest('dialog').close();
	}
});
export { taskModal, labelModal, createLabelSelection };