import './style.css';
import { createHomePage } from './HOMEPAGE/homepageController';
import { buildTaskForm } from './buildTaskFormDOM';

import { createProject } from "./createProject";

import { Task } from './task';
import { Project } from './project';
import { rightSidebarLogic } from './rightSidebarLogic';

import { displayAllTasks } from './displayAllTasks';
import { addToProjectSelect } from './addToProjectSelect';
import { showTaskDetails } from './showTaskDetails';
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
    let task1 = new Task('Do Laundry', 'wash all clothes and towels', '10/01/22', 'HIGH', 'Errands');
    let task2 = new Task('Do Homework', 'do all homework', '9/01/22', 'HIGH', 'School');
    let task3 = new Task('Schedule Appointment', 'make an appoinment', '7/10/22', 'LOW',  'Errands');
    let task4 = new Task('Order Package', 'order a box', '07/08/22', 'MEDIUM', 'School');
    let task5 = new Task('Shave', 'shave beard with razor', '12/24/22', 'LOW', 'Errands');

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



