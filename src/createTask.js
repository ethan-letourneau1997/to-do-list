import { taskList } from ".";
import { focusTask } from "./focusTask";
export function createTask (todo) {

        
    const table = document.getElementById('task-table');

    const task = document.createElement('tr');
    task.classList.add('task');
    table.appendChild(task);

    const taskButtonContainer = document.createElement('td');
        taskButtonContainer.classList.add('task-title');
        task.appendChild(taskButtonContainer);
    
    const createTaskButton = (() => {
        const taskButton = document.createElement('button');
            taskButton.classList.add('task-switch-button');
            taskButton.id = todo.title;
            taskButton.addEventListener('click', sortTask);
            taskButtonContainer.appendChild(taskButton);

            function sortTask() {
                for(let i = 0; i < taskList.length; i++){
                    if (taskList[i].title == taskButton.id){
                        focusTask(taskList[i]);
                    } 
                };
            };
    })();
    
        

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