function modalButtons(event) {
	if (event == "task") {
		document.getElementById('dialog-task').showModal();

	} else if (event == "label") {
		document.getElementById('dialog-label').showModal();
	}
}

function buttonInit() {
		document.getElementById('addTaskButton').addEventListener('click', function () {
			modalButtons('task');
		});
		document.getElementById('addLabelButton').addEventListener('click', function () {
			modalButtons('label');
		});

}



export { modalButtons, buttonInit };