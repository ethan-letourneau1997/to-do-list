import { taskList } from ".";
import { Task } from "./task";
import { createTask } from "./createTask";

export function pushTask() {

    let  title = document.getElementById('form-title');
    let description = document.getElementById('form-description');
    let date = document.getElementById('form-date');
    let priority = document.getElementById('form-priority');
    let project = document.getElementById('form-project')

    let task = new Task(title.value, description.value, date.value, priority.value, project.value);
    taskList.push(task);

    createTask(task);
    
    title.value = "";
    description.value = "";
    date.value = "";
    priority.value = "";
    project.value = "";

    console.log(taskList);
};