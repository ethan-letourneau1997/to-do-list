export function buildMain () {
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

            const columnPlaceholder = document.createElement('th');
            columnPlaceholder.classList.add('column-header');
            columnPlaceholder.classList.add('column-placeholder');
            columnPlaceholder.innerHTML = '';
            tableHeaderRow.appendChild(columnPlaceholder);

            const column1 = document.createElement('th');
            column1.classList.add('column-header');
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
};