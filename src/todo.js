
// creates class for To Do tasks

const taskList = [];


class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
    getTaskPreview() {
        return this.title + ' / ' + this.dueDate;
    }
    getTaskFull() {
        return this.title + ' | ' + this.description + ' | ' + this.dueDate + ' | ' + this.priority + ' | ';
    } 
}




export function submitTask() {
    let  title = document.getElementById('form-title').value;
    let description = document.getElementById('form-description').value;
    let date = document.getElementById('form-date').value;
    let priority = document.getElementById('form-priority').value;
    

    let task1 = new Task(title, description, date, priority);
    taskList.push(task1);

    console.log(taskList);

    const createTask = (() => {

        const table = document.getElementById('table');

        const task = document.createElement('tr');
        task.classList.add('task');
        table.appendChild(task);

        const addTaskTitle = (() => {
            const taskTitle = document.createElement('td');
            taskTitle.classList.add('task-title');
            taskTitle.innerText = task1.title;
            task.appendChild(taskTitle);
        })();

        const addTaskDueDate = (() => {
            const taskDueDate = document.createElement('td');
            taskDueDate.classList.add('task-due-date');
            taskDueDate.innerText = task1.dueDate;
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

    })();
}

console.log(taskList)
