import { taskList } from "..";

export function showTaskDetails() {
    let task = taskList[0];
    console.log(taskList[0]);
    console.log(task.title);
    console.log(task.description);
    console.log(task.dueDate);
    console.log(task.priority);
    console.log(task.project);
};

