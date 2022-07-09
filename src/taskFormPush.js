import { taskList } from ".";
import { Task } from "./task";
import { createTask } from "./createTask";

export function pushTask() {

    let  title = document.getElementById('form-title').value;
    let description = document.getElementById('form-description').value;
    let date = document.getElementById('form-date').value;
    let priority = document.getElementById('form-priority').value;

    console.log(title);
    console.log(description);
    console.log(date);
    console.log(priority);

    let task = new Task(title, description, date, priority);
    
    
    const titlee = documen.getElementById('title');
    titlee.innerText = 'test';
};