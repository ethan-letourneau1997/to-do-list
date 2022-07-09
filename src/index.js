import './style.css';
import { createHomePage } from './homepage';
import { createTasks } from './todo';
import { submitTask } from './todo';
import { buildTaskForm } from './addTaskDOM';
import { buildProjectForm } from './addProjectDOM';

// builds page
createHomePage();
buildTaskForm();

const sidebarLogic = (() => {

    // removes sidebar for Task / Project form switch
    function removeLastChild(){
        let select = document.getElementById('content');
        select.removeChild(select.lastChild);
    };

    // task form switch
    const taskButtonLogic = (() => {
        document.getElementById('task-button').addEventListener('click', openTaskMenu);
        function openTaskMenu(){
            let button = document.getElementById('task-button');
            console.log(button.style.color);
                removeLastChild();
                buildTaskForm();

        };
    })();

    // project form switch
    const projectButtonLogic = (() => {
        document.getElementById('project-button').addEventListener('click', openTaskMenu);
        const content = document.getElementById('content');
        function openTaskMenu(){
            let button = document.getElementById('task-button');
                removeLastChild();
                buildProjectForm();
    
        };
    })();
})();
