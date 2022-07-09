
import { displayAllTasks } from "./displayAllTasks";
import { removeTableRows } from "./removeTableRows";



export function createHomePage() {

    const defineContent = (() => {
        const content = document.getElementById('content');
    })();
    
    const buildHeader = (() => {
        const header = document.createElement('header');
        header.id = 'header';
        header.classList.add('header');
        content.appendChild(header);

            const buildTitle = (() => {
                const title = document.createElement('h1');
                title.id = 'title';
                title.classList.add('title');
                title.innerText = 'To Do List';
                header.appendChild(title);

            })();
    })();

    const buildSidebar = (() => {
        const sidebar = document.createElement('div');
        sidebar.id = 'sidebar';
        sidebar.classList.add('sidebar');
        content.appendChild(sidebar);

        const sidebarHeader = document.createElement('h2');
        sidebarHeader.classList.add('projects-header');
        sidebarHeader.innerText = 'Projects';
        sidebar.appendChild(sidebarHeader);

        const BuildProjectTable = (() => {
            const projectTable = document.createElement('table');
            projectTable.classList.add('project-table');
            projectTable.id = 'project-table';
            sidebar.appendChild(projectTable);

            const buildTableHeader = (() => {
                const tableHeaderRow = document.createElement('tr');
                tableHeaderRow.classList.add('column-header');
                tableHeaderRow.classList.add('task');
                projectTable.appendChild(tableHeaderRow);

                const columnHeader = document.createElement('th');
                columnHeader.classList.add('column-header');
                columnHeader.classList.add('project-header');
                columnHeader.innerText = 'Projects';
                tableHeaderRow.appendChild(columnHeader);
            });

            const buildAllRow = (() => {
                const allRow = document.createElement('tr');
                allRow.classList.add('all-row');
                projectTable.appendChild(allRow);

                const createTableButton = (() => {
                    const all = document.createElement('td');
                    all.classList.add('project-table-item');
                    
                    allRow.appendChild(all);
    
                    const button = document.createElement('button');
                    button.id = 'all-projects';
                    button.classList.add('project-table-button');
                    button.innerHTML = 'All Projects'
                    button.addEventListener('click', removeTableRows)
                    button.addEventListener('click', displayAllTasks)

                    all.appendChild(button);
                })();
                

            })();
        })();
    })(); 

    const buildMain = (() => {
        const main = document.createElement('main');
        main.id = 'main';
        main.classList.add('main');
        content.appendChild(main);

        const buildTable = (() => {
            const table = document.createElement('table');
            table.id = 'task-table';
            table.classList.add = 'task-table';
            main.appendChild(table);

            const buildTableHeader = (() => {
                const tableHeaderRow = document.createElement('tr');
                tableHeaderRow.classList.add('column-header');
                tableHeaderRow.classList.add('task');
                table.appendChild(tableHeaderRow);

                const column1 = document.createElement('th');
                column1.classList.add('column-header');
                column1.classList.add('task-title');
                column1.innerText = 'Task';
                tableHeaderRow.appendChild(column1);

                const column2 = document.createElement('th');
                column2.classList.add('column-header');
                column2.classList.add('task-due-date');
                column2.innerText = 'Date-Due';
                tableHeaderRow.appendChild(column2);

                const column3 = document.createElement('th');
                column3.classList.add('column-header');
                column3.classList.add('task-due-date');
                column3.innerHTML = 'Completed?';
                tableHeaderRow.appendChild(column3);
            })();
        })();
    })();

    const createFormHeader = (() => {
        let content = document.getElementById('content');
        const formHeader = document.createElement('div');
        formHeader.classList.add('form-header');
        content.appendChild(formHeader);
        
    
        const add = document.createElement('span');
        add.classList.add('add');
        add.innerText = 'Add';
        formHeader.appendChild(add);
    
        const createTaskButton = (() => {
            const taskButton =  document.createElement('button');
            taskButton.classList.add('task-button');
            taskButton.id = 'task-button';
            taskButton.innerText = 'Task';
            formHeader.appendChild(taskButton);
        })();

        const createProjectButton = (() => {
            const projectButton =  document.createElement('button');
            projectButton.classList.add('project-button');
            projectButton.id = 'project-button';
            projectButton.innerText = 'Project';
            formHeader.appendChild(projectButton);
        })();  
    })();   
    
};



