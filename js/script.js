// // Відбираємо елементи
// const input  = document.getElementById('taskInput');
// const button = document.getElementById('taskAdd');
// const list   = document.getElementById('tasksList');

// // Масив задач
// const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// // Виводимо задачі в список
// function renderTasks() {

// 	// Очищуємо список задач
// 	list.innerHTML = '';

// 	// Перевіряємо масива задач на пустоту
// 	if (tasks.length === 0) {

// 		// Виводимо текст пустого значення
// 		list.insertAdjacentHTML('beforeend', '<li class="no-result">Задач не знайдено</li>');
// 	} else {

// 		// Статуси задачі
// 		const statuses = {
// 			new: 'Нова задача',
// 			testing: 'Тестується',
// 			done: 'Готове'
// 		};

// 		// Перебираємо масив задач
// 		tasks.forEach(({id, task, status}) => {
			
// 			// Виводимо задачі в список
// 			list.insertAdjacentHTML('beforeend', `<li draggable="true" data-id="${id}">
// 													<div class="dropdown">
// 														<button class="dropdown-btn" data-status="${status}">${statuses[status]}</button>
// 														<div class="dropdown-content">
// 															<a data-id="${id}" href="new" class="set-status">Нова задача</a>
// 															<a data-id="${id}" href="testing" class="set-status">Тестується</a>
// 															<a data-id="${id}" href="done" class="set-status">Готове</a>
// 														</div>
// 													</div>
// 													<input type="text" value="${task}" class="edit" data-id="${id}" readonly>
// 													<button class='save-edit' data-id="${id}">💾</button>
// 													<button class='delete' data-id="${id}">&#10006</button>
// 												</li>`);
// 		});
// 	}
// }

// // Виводимо задачі в список
// renderTasks();

// // Слідкуємо за кнопкю добавлення задачі
// button.addEventListener('click', (e) => {

// 	// Дістаємо значення з поля input
// 	const task = input.value;

// 	// Очищаємо поле input
// 	input.value = '';

// 	// Створюємо об'єкт задачі
// 	const taskObj = {
// 		id: Date.now(),
// 		task: task,
// 		status: 'new'
// 	};

// 	// Добавляємо задачу до масиву 
// 	tasks.push(taskObj);

// 	// Зберігаємо масив задач
// 	localStorage.setItem('tasks', JSON.stringify(tasks));
	
// 	// Виводимо задачі в список
// 	renderTasks();
// })

// // Видалення задачі
// function deleteTask(id) {
// 	// Виводимо відповідь на кнопці
// 	if(confirm('Ви впевнені, що хочете видалити задачу?')) {

// 		// Формуємо ключ масива
// 		const arrayKey = tasks.findIndex(task => task.id == id);

// 		// Видалюємо задачу з масиву
// 		tasks.splice(arrayKey, 1);

// 		// Зберігаємо масив задач
// 		localStorage.setItem('tasks', JSON.stringify(tasks));

// 		// Виводимо задачі в список
// 		renderTasks();
// 	}
// }

// // Редагуємо назву задачі
// function editTask(el) {

// 	// Запитуємо чи редагувати назву задачі
// 	if(confirm('Ви впевнені, що хочете редагувати назву задачі?')) {

// 		// Забираєммо атрибут readonly
// 		el.removeAttribute('readonly');

// 		// Вішаємо курсорчик на цей елемент
// 		el.classList.add('editing');
		
// 		// До батьківського елемента добавляємо клас
// 		el.parentElement.classList.add('editing');
		
// 		// Видаляємо клас edit
// 		el.classList.remove('edit');
// 	}
// }

// // Зберігаємо оновлену назву задачі
// function saveEditTask(el, id) {

// 	// Витягуємо input з data-id
// 	const inputEdit = document.querySelector(`input[data-id="${id}"]`);

// 	// Забираєммо атрибут readonly
// 	inputEdit.setAttribute('readonly', true);
	
// 	// Вішаємо курсорчик на цей елемент
// 	inputEdit.classList.remove('editing');
	
// 	// Видаляємо клас edit
// 	inputEdit.classList.add('edit');

// 	// До батьківського елемента добавляємо клас
// 	el.parentElement.classList.remove('editing');
	
// 	// Формуємо ключ масива
// 	const arrayKey = tasks.findIndex(task => task.id == id);

// 	// Змінюємо назву задачі
// 	tasks[arrayKey].task = inputEdit.value;

// 	// Зберігаємо масив задач
// 	localStorage.setItem('tasks', JSON.stringify(tasks));
// }

// // Зміна статусу задачі
// function saveStatusTask(el, id) {	

// 	// Дістаємо href з елементу
// 	const status = el.getAttribute('href');
	
// 	// Формуємо ключ масива
// 	const arrayKey = tasks.findIndex(task => task.id == id);

// 	// Змінюємо статус задачі
// 	tasks[arrayKey].status = status;

// 	// Зберігаємо масив задач
// 	localStorage.setItem('tasks', JSON.stringify(tasks));
	
// 	// Виводимо задачі в список
// 	renderTasks();
// }

// // Активності відносно задачі
// list.addEventListener('click', (e) => {

// 	// Отримуємо елемент по якому був клік
// 	const el = e.target;

// 	// Зазвичай працюємо з дата атрибутами тому відразу їх також отримаємо
// 	const data = el.dataset;

// 	// Перевіряємо клік на кнопці
// 	if (el.classList.contains('delete')) {

// 		// Видалюємо задачу
// 		deleteTask(data.id);
// 	}

// 	// Редагуємо назву задачі
// 	if (el.classList.contains('edit')) {

// 		// Виводимо відповідь на кнопці
// 		editTask(el);
// 	}

// 	// Зберігаємо оновлену назву задачі до масиву
// 	if (el.classList.contains('save-edit')) {

// 		// Зберігаємо задачу
// 		saveEditTask(el, data.id);
// 	}

// 	// Зміна статусу задачі
// 	if (el.classList.contains('set-status')) {
// 		e.preventDefault();

// 		// Зберігаємо задачу
// 		saveStatusTask(el, data.id);
// 	}
// })


// // Робимо drag and drop списка задач [ початок ]
// list.addEventListener('dragstart', (e) => {
	
// 	// Добавляємо клас до поточного елемента
// 	setTimeout(() => e.target.classList.add('dragging'), 0);
// })

// // Робимо drag and drop списка задач [ закінчення ]
// list.addEventListener('dragend', (e) => {
	
// 	// Забираємо клас поточного елемента
// 	e.target.classList.remove('dragging');

// 	// Оновлюємо в масиві послідовність задач
// 	const listLi = [...list.querySelectorAll("li")];

// 	// Новий масив задач
// 	const tasksSorting = [];

// 	// Формуємо новий масив
// 	listLi.forEach(li => {

// 		// Знаходимо поточний об'єкт задачі в масиві tasks
// 		const task = tasks.find(task => task.id == li.dataset.id);

// 		// Додаємо задачу до нового масиву
// 		tasksSorting.push(task);
// 	});

// 	// Зберігаємо масив задач
// 	localStorage.setItem('tasks', JSON.stringify(tasksSorting));
// })

// // Робимо drag and drop списка задач [ закінчення ]
// list.addEventListener('dragover', (e) => {
//     e.preventDefault();
    
//     // Поточний елемент який перетягуємо
//     let el = e.target;

// 	// Якщо елемент не ul тоді запускаємо код
// 	if (el.nodeName != 'ul') {
// 		// Якщо поточна назва html тега не li тоді беремо батьківський елемент
// 		if (el.nodeName != 'li')
// 			el = el.parentElement;
	
// 		// Отримання всіх елементів, окрім поточного, та створення масиву з них
// 		const listLi = [...list.querySelectorAll("li:not(.dragging)")];
	
// 		// Елемент ісля якого слід розмістити елемент, що перетягується
// 		const nextLi = listLi.find(li => {
// 			return e.clientY <= li.offsetTop + li.offsetHeight / 2;
// 		});
		
// 		// Inserting the dragging item before the found sibling
// 		if (typeof nextLi != undefined)
// 			list.insertBefore(el, nextLi);
// 	}
// })

