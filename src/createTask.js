
export function createTask (todo) {

        
    const table = document.getElementById('task-table');

    const task = document.createElement('tr');
    task.classList.add('task');
    table.appendChild(task);

    const addTaskTitle = (() => {
        const taskTitle = document.createElement('td');
        taskTitle.classList.add('task-title');
        taskTitle.innerText = todo.title;
        task.appendChild(taskTitle);
    })();

    const addTaskDueDate = (() => {
        const taskDueDate = document.createElement('td');
        taskDueDate.classList.add('task-due-date');
        taskDueDate.innerText = todo.dueDate;
        task.appendChild(taskDueDate);
    })(); 

    const addCompletion = (() => {
        const completion = document.createElement('td');
        completion.classList.add('task-completion');
        task.appendChild(completion);

        const addCompletedCheckbox = (() => {
            const completedCheckbox = document.createElement('input');
            completedCheckbox.setAttribute('type', 'checkbox');
            completion.appendChild(completedCheckbox);
        })();
    })(); 

};