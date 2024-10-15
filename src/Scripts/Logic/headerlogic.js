import { navItems, taskArray } from "../Data/data.js";

function populateNavList() {
	var navList = document.getElementsByClassName("nav-list");
	if (navList.length === 0) {
		console.error("No elements with class 'nav-list' found.");
		return;
	}
	navItems.forEach((item, index) => {
		const li = document.createElement("li");
		li.textContent = item.Label; // Use item.label to get the text from the label
		console.log(item.Label);
		li.classList.add("nav-item"); // Add nav-item class to each item
		li.dataset.Label = item.Label; // Add data attribute with the name of the label
		li.addEventListener("click", (event) => {
			event.preventDefault();
			// Remove active class from all items
			document.querySelectorAll('.nav-list li').forEach(el => el.classList.remove('active'));
			// Add active class to the clicked item
			event.target.classList.add('active');
			console.log(event.target.dataset.Label); // Log
			updateComponent(item.Label); // Call the updateComponent function with the label name
			event.target.blur(); // Remove focus from the clicked item
		});
		navList[0].appendChild(li); // Assuming navList is a collection, append to the first element

		// Set the first item as active by default
		if (index === 0) {
			li.classList.add('active');
			updateComponent(item.Label);
		}
	});
}

//Updates the main component with the label name
function updateComponent(label) {
	const main = document.querySelector('#main-container');
	main.innerHTML = `<h1 class="main-label">${label}</h1>`;
	console.log('Update component with label:', label);
	const filteredTasks = taskArray.filter(task => {
		console.log('Checking task:', task);
		return task.Label === label;
	});
	console.log('Filtered tasks:', filteredTasks);
	const taskcontainer = document.createElement('div');
	taskcontainer.classList.add('task-container');
	main.appendChild(taskcontainer);
	filteredTasks.forEach(task => {
		console.log('Task:', task);
		const taskItem = document.createElement('div');
			taskItem.classList.add('task-item');
		const taskName = document.createElement('h4');
			taskName.classList.add('task-name');
			taskName.textContent = task.TaskName;
		const hrzLine = document.createElement('hr');
			hrzLine.classList.add('hrz-line');
		const taskDescription = document.createElement('p');
			taskDescription.textContent = task.TaskDescription;
		const taskDueDate = document.createElement('p');
		taskDueDate.textContent = task.DueDate;
		const buttonCt = document.createElement('div');
			buttonCt.classList.add('button-container');
		const deleteButton = document.createElement('button');
			deleteButton.classList.add('button-element');
			deleteButton.textContent = 'Delete';
		const completeButton = document.createElement('button');
			completeButton.classList.add('button-element');
			completeButton.textContent = 'Complete';
	
		// Apppends items to the taskItem
		taskItem.appendChild(taskName);
		taskItem.appendChild(hrzLine);
		taskItem.appendChild(taskDescription);
		taskItem.appendChild(taskDueDate);
		buttonCt.appendChild(deleteButton);
		buttonCt.appendChild(completeButton);
		taskItem.appendChild(buttonCt);

		taskcontainer.appendChild(taskItem);

	});

}


export { populateNavList };