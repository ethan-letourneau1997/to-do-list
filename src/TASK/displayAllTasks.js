import { taskList } from "..";
import { createTask } from "./createTask";

export function displayAllTasks() {
    for (let i = 0; i < taskList.length; i++){
        if(taskList[i].title != ""){
            createTask(taskList[i]);
        };
        
    };
};