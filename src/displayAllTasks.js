import { taskList } from ".";
import { createTask } from "./createTask";

export function displayAllTasks() {
    for (let i = 0; i < taskList.length; i++){
        createTask(taskList[i]);
    }
}