export function buildFormBarHeader() {
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
}; 