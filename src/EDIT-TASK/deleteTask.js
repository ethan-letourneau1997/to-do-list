import { taskList } from "..";
import { Task } from "../task";
import { displayAllTasks } from "../displayAllTasks";
import { removeTableRows } from "../removeTableRows";

export function deleteTask(){
    for (let i = 0; i < taskList.length; i++){
        const title = document.getElementById('title-placeholder');
        if (taskList[i].title == title.innerText){
            delete taskList[i];
            taskList[i] = new Task("","","","","");
            removeTableRows();
            return displayAllTasks();
            
            
            
        };
        
        
       
    }
    
};