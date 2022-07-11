import './style.css';
import { createHomePage } from './HOMEPAGE/homepageController';
import { buildTaskForm } from './TASK/DOMTaskForm';

import { createProject } from "./PROJECT/createProject";

import { Task } from './TASK/task';
import { Project } from './PROJECT/project';
import { rightSidebarLogic } from './rightSidebarLogic';

import { displayAllTasks } from './TASK/displayAllTasks';

import { addToProjectSelect } from './PROJECT/addToProjectSelect';




/************** STORE TASKS ****************/

// const retrievedTaskList = [];

// const taskStorage = (() => {
//     var retrievedTasks = localStorage.getItem('taskStorage');

//     let parsedTaskList = JSON.parse(retrievedTasks);
    
     
//     function makeTaskList(array){
//         for(let i=0; i<array.length;i++){
//             let task = new Task(array[i].title, array[i].description, array[i].dueDate, array[i].priority, array[i].project);
//             retrievedTaskList.push(task);  
//         };  
//     }; 
//     makeTaskList(parsedTaskList);
// })();

// let filteredTasks = retrievedTaskList.filter(function(e) {
//     return e.title != "";
// });


/************** STORE PROJECTS ****************/

// localStorage.removeItem("storedProjects");

// var retrievedProject = localStorage.getItem('storedProject');



// let parsedProjectList = JSON.parse(retrievedProject);


// const retrievedProjectList = [];

// function makeProjectList(array){
//     for(let i=0; i<array.length;i++){
//         let project = new Project(array[i].name, array[i].description);
//         retrievedProjectList.push(project);  
//     };  
// }; 

// console.log(retrievedProjectList);

// makeProjectList(parsedProjectList);
// console.log(retrievedProjectList);

// let filteredProjectList = retrievedProjectList.filter(function(e) {
//     return e.name != "";
// });

// console.log(filteredProjectList);



/*****************************************************/

export var taskList = [];
export var projectList = [];

// builds page
createHomePage();
buildTaskForm();
rightSidebarLogic();

// createSidebarLogic()

/************** NEW STUFF ***************/




// localStorage.removeItem("storedProject");


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




// var testObject = { 'one': 1, 'two': 2, 'three': 3 };

// // Put the object into storage
// const storeProject = projectList;
// localStorage.setItem('storedProject', JSON.stringify(storeProject));

// console.log(projectList);



// // Retrieve the object from storage


// // Put the object into storage
// localStorage.setItem('testObject', JSON.stringify(testObject));

// // Retrieve the object from storage
// var retrievedObject = localStorage.getItem('testObject');

// console.log('retrievedObject: ', JSON.parse(retrievedObject));

// console.log(projectList);
// console.log(taskList);
