
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

    const createTaskFocus = (() => {

        let taskFocus = document.createElement('div');
        taskFocus.id = 'task-focus';
        taskFocus.classList.add('task-focus');
        content.appendChild(taskFocus);

        const infoContainer = document.createElement('div');
        infoContainer.classList.add('info-container');
        taskFocus.appendChild(infoContainer);

        const createTitleSection = (() => {
            const titleSection = document.createElement('div');
            titleSection.classList.add('focus-section');
            titleSection.id = ('title-section');
            titleSection.innerText = 'Title : ';
            infoContainer.appendChild(titleSection);

            const titlePlaceholder = document.createElement('div');
            titlePlaceholder.classList.add('task-info');
            titlePlaceholder.id = 'title-placeholder';
            titlePlaceholder.innerText = '';
            infoContainer.appendChild(titlePlaceholder);
        })();

        const createDescriptionSection = (() => {
            const descriptionSection = document.createElement('div');
            descriptionSection.classList.add('focus-section');
            descriptionSection.id = ('description-section');
            descriptionSection.innerText = 'Description: ';
            infoContainer.appendChild(descriptionSection);

            const descriptionPlaceholder = document.createElement('div');
            descriptionPlaceholder.classList.add('task-info');
            descriptionPlaceholder.id = 'description-placeholder';
            descriptionPlaceholder.innerText = '';
            infoContainer.appendChild(descriptionPlaceholder);
        })();

        const createDateSection = (() => {
            const dateSection = document.createElement('div');
            dateSection.classList.add('focus-section');
            dateSection.id = ('date-section');
            dateSection.innerText = 'Date: ';
            infoContainer.appendChild(dateSection);

            const datePlaceholder = document.createElement('div');
            datePlaceholder.classList.add('task-info');
            datePlaceholder.id = 'date-placeholder';
            datePlaceholder.innerText = '';
            infoContainer.appendChild(datePlaceholder);
        })();

        const createPrioritySection = (() => {
            const prioritySection = document.createElement('div');
            prioritySection.classList.add('focus-section');
            prioritySection.id = ('priority-section');
            prioritySection.innerText = 'Priority: ';
            infoContainer.appendChild(prioritySection);

            const priorityPlaceholder = document.createElement('div');
            priorityPlaceholder.classList.add('task-info');
            priorityPlaceholder.id = 'priority-placeholder';
            priorityPlaceholder.innerText = '';
            infoContainer.appendChild(priorityPlaceholder);
        })();

        const createProjectSection = (() => {
            const projectSection = document.createElement('div');
            projectSection.classList.add('focus-section');
            projectSection.id = ('project-focus-section');
            projectSection.innerText = 'Project: ';
            infoContainer.appendChild(projectSection);

            const projectPlaceholder = document.createElement('div');
            projectPlaceholder.classList.add('task-info');
            projectPlaceholder.id = 'project-focus-placeholder';
            projectPlaceholder.innerText = '';
            infoContainer.appendChild(projectPlaceholder);
        })();

        const createButtonSection = (() => {
            const buttonSection = document.createElement('div');
            buttonSection.classList.add('focus-button-section');
            taskFocus.appendChild(buttonSection);

            const createEditButton = (() => {
                const editButtonContainer = document.createElement('div');
                editButtonContainer.classList.add('focus-button-container');
                buttonSection.appendChild(editButtonContainer);

                const editButton = document.createElement('button');
                editButton.classList.add('focus-button');
                editButton.innerText = 'Edit';
                editButtonContainer.appendChild(editButton);
            })();

            const createDeleteButton = (() => {
                const deleteButtonContainer = document.createElement('div');
                deleteButtonContainer.classList.add('focus-button-container');
                buttonSection.appendChild(deleteButtonContainer);

                const deleteButton = document.createElement('button');
                deleteButton.classList.add('focus-button');
                deleteButton.innerText = 'Delete';
               deleteButtonContainer.appendChild(deleteButton);
            })();
        })();
    })();
    
};



