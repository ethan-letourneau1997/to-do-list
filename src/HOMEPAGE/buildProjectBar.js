import { removeTableRows } from "../removeTableRows";
import { displayAllTasks } from "../displayAllTasks";

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
}; 