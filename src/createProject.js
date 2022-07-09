import { projectList, taskList } from ".";
import { removeTableRows } from "./removeTableRows";
import { createTask } from "./createTask";


export function createProject(proj){
    const table = document.getElementById('project-table');

    const project = document.createElement('tr');
    // project.classList.add('project-table-item');
    table.appendChild(project);



    const createTableButton = (() => {
        const row = document.createElement('td');
        row.classList.add('project-table-item');
        project.appendChild(row);

        const button = document.createElement('button');
        button.id = proj.name;
        button.classList.add('project-table-button');
        button.innerText = proj.name;
        button.addEventListener('click', switchProject)
        row.appendChild(button);

        function switchProject(){

            
            for (let i = 0; i < projectList.length; i++){
                if (projectList[i].name == button.id) {
                    removeTableRows();
                    sortList(button.id);

                        function sortList(x) {
                            for (let i = 0; i < taskList.length; i++ ){
                                if (x == taskList[i].project){
                                    createTask(taskList[i]);
                                }
                                
                            }
                            
                        }
    
                }
            };
        };
    })();
};