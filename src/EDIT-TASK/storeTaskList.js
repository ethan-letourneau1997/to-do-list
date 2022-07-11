import { taskList } from "..";

export function storeTaskList(){
    var tasksToStore = taskList;
    localStorage.setItem('taskStorage', JSON.stringify(tasksToStore));
};

