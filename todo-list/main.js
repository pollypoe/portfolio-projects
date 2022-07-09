//background images
const images = [];

images[0] = 'images/image1.jpg';
images[1] = 'images/image2.jpg';
images[2] = 'images/image3.jpg';
images[3] = 'images/image4.jpg';
images[4] = 'images/image5.jpg';
images[5] = 'images/image6.jpg';
images[6] = 'images/image7.jpg';
images[7] = 'images/image8.jpg';
images[8] = 'images/image9.jpg';
images[9] = 'images/image10.jpg';
images[10] = 'images/image11.jpg';
images[11] = 'images/image12.jpg';
images[12] = 'images/image13.jpg';
images[13] = 'images/image14.jpg';
images[14] = 'images/image15.jpg';
images[15] = 'images/image16.jpg';
images[16] = 'images/image17.jpg';
images[17] = 'images/image18.jpg';
images[18] = 'images/image19.jpg';
images[19] = 'images/image20.jpg';
images[20] = 'images/image21.jpg';
images[21] = 'images/image22.jpg';
images[22] = 'images/image23.jpg';
images[23] = 'images/image24.jpg';
images[24] = 'images/image25.jpg';

window.onload = function() {
	const random = Math.floor(Math.random()* images.length);
	document.body.style.backgroundImage = `url(${images[random]})`;

}
//get and push task to localstorage
window.addEventListener('load', () => {
	todos = JSON.parse(localStorage.getItem('todos')) || [];
	const newTodoForm = document.querySelector('#new-todo-form');

	newTodoForm.addEventListener('submit', e => {
		e.preventDefault();

		const todo = {
			content: e.target.elements.content.value,
		}

		todos.push(todo);

		localStorage.setItem('todos', JSON.stringify(todos));

		// Reset the form
		e.target.reset();

		DisplayTodos()
	})

	DisplayTodos()
})
//function to display to-do task
function DisplayTodos () {
	const todoList = document.querySelector('#todo-list');
	todoList.innerHTML = "";
	//loop through each task added to local storage to display
	todos.forEach(todo => {
		const todoItem = document.createElement('div');
		todoItem.classList.add('todo-item');
		//create elements for each task added
		const label = document.createElement('label');
		const input = document.createElement('input');
		const content = document.createElement('div');
		const actions = document.createElement('div');
		const editButton = document.createElement('button');
		const deleteButton = document.createElement('button');

		content.classList.add('todo-content');
		actions.classList.add('actions');
		editButton.classList.add('edit');
		deleteButton.classList.add('delete');

		content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
		editButton.innerHTML = 'Edit';
		deleteButton.innerHTML = 'Delete';
		//add each part of the task to the page
		label.appendChild(input);
		actions.appendChild(editButton);
		actions.appendChild(deleteButton);
		todoItem.appendChild(content);
		todoItem.appendChild(actions);

		todoList.appendChild(todoItem);

		/*if (todo.done) {
			todoItem.classList.add('done');
		}

		/*input.addEventListener('change', (e) => {
			localStorage.setItem('todos', JSON.stringify(todos));

			if (todo.done) {
				todoItem.classList.add('done');
			} else {
				todoItem.classList.remove('done');
			}

			DisplayTodos()

		})*/
		//edit button on click
		editButton.addEventListener('click', (e) => {
			const input = content.querySelector('input');
			input.removeAttribute('readonly');
			input.focus();
			input.addEventListener('blur', (e) => {
				input.setAttribute('readonly', true);
				todo.content = e.target.value;
				localStorage.setItem('todos', JSON.stringify(todos));
				DisplayTodos()
			})
		})
		//delete button on click
		deleteButton.addEventListener('click', (e) => {
			todos = todos.filter(t => t != todo);
			localStorage.setItem('todos', JSON.stringify(todos));
			DisplayTodos()
		})

	})
}