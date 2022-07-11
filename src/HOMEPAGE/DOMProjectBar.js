import { removeTableRows } from "../TASK/removeTaskTableRows";
import { displayAllTasks } from "../TASK/displayAllTasks";
import { projectList } from "..";
import { Project } from "../PROJECT/project";
import { storeProjectList } from "../PROJECT/storeProjectList";
import { addToProjectSelect } from "../PROJECT/addToProjectSelect";
import { storeTaskList } from "../EDIT-TASK/storeTaskList";

export function buildSidebar () {
    const sidebar = document.createElement('div');
    sidebar.id = 'sidebar';
    sidebar.classList.add('sidebar');
    content.appendChild(sidebar);

    const sidebarHeader = document.createElement('h2');
    sidebarHeader.classList.add('projects-header');
    sidebarHeader.innerText = 'Projects';
    sidebar.appendChild(sidebarHeader);

    const BuildProjectTable = (() => {
        const projectTable = document.createElement('div');
        projectTable.classList.add('project-table');
        projectTable.id = 'project-table';
        sidebar.appendChild(projectTable);

        const buildTableHeader = (() => {
            const tableHeaderRow = document.createElement('div');
            tableHeaderRow.classList.add('column-header');
            tableHeaderRow.innerText = 'projects';
            tableHeaderRow.classList.add('task');
            projectTable.appendChild(tableHeaderRow);

            // const columnHeader = document.createElement('th');
            // columnHeader.classList.add('column-header');
            // columnHeader.classList.add('project-header');
            // // columnHeader.innerText = 'Projects';
            // tableHeaderRow.appendChild(columnHeader);
        });

        const buildAllRow = (() => {
            const allRow = document.createElement('div');
            allRow.classList.add('all-row');
            projectTable.appendChild(allRow);

            const createTableButton = (() => {

                const button = document.createElement('button');
                button.id = 'all-projects';
                button.classList.add('project-table-button');
                button.innerHTML = 'All Projects'
                button.addEventListener('click', removeTableRows)
                button.addEventListener('click', displayAllTasks)
                
                
                allRow.appendChild(button);
            })();
            

        })();
    })();

    const createDeleteContainer = (() => {
        const deleteContainer = document.createElement('div');
        deleteContainer.id = 'delete-container';
        deleteContainer.classList.add('delete-container');
        sidebar.appendChild(deleteContainer);

        const deleteHeader = document.createElement('h2');
        deleteHeader.classList.add('delete-header')
        deleteHeader.innerText = 'Delete Project';
        deleteContainer.appendChild(deleteHeader);

        const deleteForm = document.createElement('form');
        deleteForm.id = 'delete-form';
        deleteForm.classList.add('delete-form');
        deleteForm.onsubmit = projectDeleteHandler;
        deleteContainer.appendChild(deleteForm);

        const deleteSelect = document.createElement('input');
        deleteSelect.id = 'delete-select';
        deleteSelect.classList.add('delete-select');
        deleteForm.appendChild(deleteSelect);

        const deleteProjectButton = document.createElement('button');
        deleteProjectButton.id = 'delete-project';
        deleteProjectButton.classList.add('delete-project');
        deleteProjectButton.innerHTML = 'Delete';
        deleteForm.appendChild(deleteProjectButton);

        
        

        function projectDeleteHandler(event){
            event.preventDefault();
            deleteProject();
        }

        

        function deleteProject(){
            for (let i = 0; i < projectList.length; i++){
                const projectName = document.getElementById('delete-select').value;
                if (projectName == projectList[i].name){
                    console.log(projectName);
                    delete projectList[i];
                    projectList[i] = new Project("","","","","");
                    console.log(projectList);
                    
                    
                   
                        // let filteredProjects = projectList.filter(function(e) {
                        //     return e.name != "";
                        // });
                        // console.log(filteredProjects);

                        
                        
                  

                };
                
            };
        }

    })();
}; 