import { buildTaskForm } from "./TASK/DOMTaskForm";
import { buildProjectForm } from "./PROJECT/DOMProjectForm.js";
import { addToProjectSelect } from "./PROJECT/addToProjectSelect";

export function rightSidebarLogic() {

    // removes sidebar for Task / Project form switch
    function removeLastChild() {
        let select = document.getElementById('content');
        select.removeChild(select.lastChild);
    };

    // task form switch
    const taskButtonLogic = (() => {
        document.getElementById('task-button').addEventListener('click', openTaskMenu);
        function openTaskMenu() {
            let button = document.getElementById('task-button');
            console.log(button.style.color);
            removeLastChild();
            buildTaskForm();
            addToProjectSelect();

        };
    })();

    // project form switch
    const projectButtonLogic = (() => {
        document.getElementById('project-button').addEventListener('click', openTaskMenu);
        const content = document.getElementById('content');
        function openTaskMenu() {
            let button = document.getElementById('task-button');
            removeLastChild();
            buildProjectForm();

        };
    })();
}
