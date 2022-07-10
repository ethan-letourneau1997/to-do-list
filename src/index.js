import './style.css';
import { createHomePage } from './createHomepage';
import { buildTaskForm } from './buildTaskFormDOM';

import { createTask } from "./createTask";
import { createProject } from "./createProject";

import { Task } from './task';
import { Project } from './project';
import { rightSidebarLogic } from './rightSidebarLogic';

import { displayAllTasks } from './displayAllTasks';
import { addToProjectSelect } from './addToProjectSelect';
import { showTaskDetails } from './showTaskDetails';
import { focusTask } from './focusTask';
// import { pushTask } from './taskFormPush';





export var taskList = [];
export var projectList = [];

// builds page
createHomePage();
buildTaskForm();
rightSidebarLogic();

// createSidebarLogic()

/************** NEW STUFF ***************/







const createTaskData = (() => {
    let task1 = new Task('errand1', 'wash clothes', '10/01/22', '!!', 'Errands');
    let task2 = new Task('school 1', 'make an appointment for fungus', '9/01/22', '!!', 'School');
    let task3 = new Task('errand2', 'make chiro appoinment', '7/10/22', '!',  'Errands');
    let task4 = new Task('school 2', 'make week 4 discussion post', '07/08/22', '!!!', 'School');
    let task5 = new Task('errand3', 'shave beard', '12/24/22', '!!!', 'Errands');

    taskList.push(task1);
    taskList.push(task2);
    taskList.push(task3);
    taskList.push(task4);
    taskList.push(task5);

        
})();

let project1 = new Project('Errands', 'simple errands I need to do');
    let project2 = new Project('School', 'stuff related to school');

    projectList.push(project1);
    projectList.push(project2);

displayAllTasks();



for (let i = 0; i < projectList.length; i++){
    createProject(projectList[i]);
}

addToProjectSelect();

/************** NEW STUFF ***************/

showTaskDetails();

focusTask(taskList[0]);

