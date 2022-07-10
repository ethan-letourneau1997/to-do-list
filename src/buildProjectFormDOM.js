import { pushProject } from "./pushProject";

export function buildProjectForm() {

    // change color of selected button
    const changeButtonColor = (() => {
        let taskButton = document.getElementById('task-button');
        taskButton.style.color = 'black';

        let projectButton = document.getElementById('project-button');
        projectButton.style.color = 'white';
    })();

    const content = document.getElementById('content');  

    /**** PUSH PROJECT FUNCTION ********/
    function projectSubmitHandler(event){
        console.log('test');
        event.preventDefault();
        pushProject();
    }
    /**** PUSH PROJECT FUNCTION ********/

    // build form 
    const buildAddBar = (() => {
        const projectForm = document.createElement('form');
        projectForm.onsubmit = projectSubmitHandler;
        projectForm.id = 'form';
        projectForm.classList.add('task-form');
        content.appendChild(projectForm);


        const createProjectName = (() => {
            const formItem = document.createElement('div');
            formItem.classList.add('form-item')
            projectForm.appendChild(formItem);
    
            const nameLabel = document.createElement('label');
            nameLabel.classList.add('form-label');
            nameLabel.setAttribute('for', 'project-name');
            nameLabel.innerText = 'Project Name';
            formItem.appendChild(nameLabel);
    
            const projectNameInput = document.createElement('input');
            projectNameInput.classList.add('form-input');
            projectNameInput.id = 'project-name';
            formItem.appendChild(projectNameInput);
        })();
    
        const createProjectDescription = (() => {
            const formItem = document.createElement('div');
            formItem.classList.add('form-item')
            projectForm.appendChild(formItem);
    
            const projectDescriptionLabel = document.createElement('label');
            projectDescriptionLabel.classList.add('form-label');
            projectDescriptionLabel.setAttribute('for', 'project-description');
            projectDescriptionLabel.innerText = 'Project Description';
            formItem.appendChild(projectDescriptionLabel);
    
            const projectDescriptionInput = document.createElement('input');
            projectDescriptionInput.classList.add('form-input');
            projectDescriptionInput.id = 'project-description';
            formItem.appendChild(projectDescriptionInput);  
        })();  

        const addSubmit = (() => {
            const submitContainer = document.createElement('div');
            submitContainer.classList.add('submit-container');
            projectForm.appendChild(submitContainer);
    
            const submit = document.createElement('button');
            submit.classList.add('submit');
            submit.innerText = 'Add';
            submit.setAttribute('type', 'submit')
            submitContainer.appendChild(submit);
        })();
    })();      
};