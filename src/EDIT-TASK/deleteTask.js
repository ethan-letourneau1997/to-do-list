import { taskList } from "..";
import { Task } from "../TASK/task";
import { displayAllTasks } from "../TASK/displayAllTasks";
import { removeTableRows } from "../TASK/removeTaskTableRows";
import { storeTaskList } from "./storeTaskList";

export function deleteTask(){
    for (let i = 0; i < taskList.length; i++){
        const title = document.getElementById('title-placeholder');
        if (taskList[i].title == title.innerText){
            delete taskList[i];
            taskList[i] = new Task("","","","","");

            
            removeTableRows();
            displayAllTasks();
            storeTaskList();
            
            
            
        };
        
        
       
    }
    
};