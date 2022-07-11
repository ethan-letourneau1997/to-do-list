import { taskList } from "..";
import { Task } from "./task";
import { createTask } from "./createTask";
import { storeTaskList } from "../EDIT-TASK/storeTaskList";
import { removeTableRows } from "./removeTaskTableRows";
import { displayAllTasks } from "./displayAllTasks";


export function pushTask() {

    let  title = document.getElementById('form-title');
    let description = document.getElementById('form-description');
    let date = document.getElementById('form-date');
    let priority = document.getElementById('form-priority');
    let project = document.getElementById('form-project')

    let task = new Task(title.value, description.value, date.value, priority.value, project.value);
    taskList.push(task);
    
    

    // Put the object into storage
    storeTaskList();
    
    title.value = "";
    description.value = "";
    date.value = "";
    priority.value = "";
    project.value = "";

    removeTableRows();
    displayAllTasks();

  
};