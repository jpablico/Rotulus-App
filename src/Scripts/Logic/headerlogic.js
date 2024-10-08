import { navItems, taskArray } from "../Data/data.js";

function populateNavList() {
	var navList = document.getElementsByClassName("nav-list");
	if (navList.length === 0) {
		console.error("No elements with class 'nav-list' found.");
		return;
	}
	navItems.forEach(item => {
		const li = document.createElement("li");
		li.textContent = item;
		li.classList.add("nav-item"); // Add nav-item class to each item
		li.dataset.label = item; // Add data attribute with the name of the label
		li.addEventListener("click", (event) => {
			event.preventDefault();
			// Remove active class from all items
			document.querySelectorAll('.nav-list li').forEach(el => el.classList.remove('active'));
			// Add active class to the clicked item
			event.target.classList.add('active');
			console.log(event.target.dataset.label); // Log
			updateComponent(item); // Call the updateComponent function with the label name
			event.target.blur(); // Remove focus from the clicked item
		});
		navList[0].appendChild(li); // Assuming navList is a collection, append to the first element
	});
}

//Updates the main component with the label name
function updateComponent(label) {
	const main = document.querySelector('#main-container');
	main.innerHTML = `<h1>${label}</h1>`;
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
		taskName.textContent = task.TaskName;
		const taskDescription = document.createElement('p');
		taskDescription.textContent = task.TaskDescription;
		const taskDueDate = document.createElement('p');
		taskDueDate.textContent = task.DueDate;
		taskItem.appendChild(taskName);
		taskItem.appendChild(taskDescription);
		taskItem.appendChild(taskDueDate);
		
		taskcontainer.appendChild(taskItem);
	});

	main.appendChild(taskList);
}

/**const taskList = document.createElement('ul');
	filteredTasks.forEach(task => {
		const taskItem = document.createElement('li');
		taskItem.textContent = task.TaskName;
		taskList.appendChild(taskItem);
	}); */
export { populateNavList };