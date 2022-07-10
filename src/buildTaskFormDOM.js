
import { pushTask } from "./pushTask";
import { focusTask } from "./focusTask";

export function buildTaskForm() {


    // change color of selected button
    const changeButtonColor = (() => {
        let taskButton = document.getElementById('task-button');
        taskButton.style.color = 'white';

        let projectButton = document.getElementById('project-button');
        projectButton.style.color = 'black';
    })();
    
    const content = document.getElementById('content');  

    /**** PUSH TASK FUNCTION ********/
    function taskSubmitHandler(event){
        event.preventDefault();
        pushTask();
    }
    /**** PUSH TASK FUNCTION ********/

    // build form 
    const buildAddBar = (() => {
        const taskForm = document.createElement('form');
        taskForm.onsubmit = taskSubmitHandler;
        taskForm.id = 'task-form';
        
        taskForm.classList.add('task-form');
        content.appendChild(taskForm);

        const formTitle = (() => {
            const formItem = document.createElement('div');
            formItem.classList.add('form-item')
            taskForm.appendChild(formItem);
    
            const titleLabel = document.createElement('label');
            titleLabel.classList.add('form-label');
            titleLabel.setAttribute('for', 'form-title');
            titleLabel.innerText = 'Title';
            formItem.appendChild(titleLabel);
    
            const titleInput = document.createElement('input');
            titleInput.classList.add('form-input');
            titleInput.id = 'form-title';
            formItem.appendChild(titleInput);
        })();
    
        const formDescription = (() => {
            const formItem = document.createElement('div');
            formItem.classList.add('form-item')
            taskForm.appendChild(formItem);
    
            const descriptionLabel = document.createElement('label');
            descriptionLabel.classList.add('form-label');
            descriptionLabel.setAttribute('for', 'form-description');
            descriptionLabel.innerText = 'Description';
            formItem.appendChild(descriptionLabel);
    
            const descriptionInput = document.createElement('input');
            descriptionInput.classList.add('form-input');
            descriptionInput.id = 'form-description';
            formItem.appendChild(descriptionInput);
        })();
    
        const formDueDate = (() => {
            const formItem = document.createElement('div');
            formItem.classList.add('form-item')
            taskForm.appendChild(formItem);
    
            const dueDateLabel = document.createElement('label');
            dueDateLabel.classList.add('form-label');
            dueDateLabel.setAttribute('for', 'form-date');
            dueDateLabel.innerText = 'Due Date';
            formItem.appendChild(dueDateLabel);
    
            const dueDateInput = document.createElement('input');
            dueDateInput.type = 'date';
            dueDateInput.classList.add('form-input');
            dueDateInput.id = 'form-date';
            formItem.appendChild(dueDateInput);
        })();
    
        const formPriority = (() => {
            const formItem = document.createElement('div');
            formItem.classList.add('form-item')
            taskForm.appendChild(formItem);
    
            const priorityLabel = document.createElement('label');
            priorityLabel.classList.add('form-label');
            priorityLabel.setAttribute('for', 'form-priority');
            priorityLabel.innerText = 'Priority';
            formItem.appendChild(priorityLabel);
    
            const priorityInput = document.createElement('select');
            priorityInput.classList.add('form-priority');
            priorityInput.id = 'form-priority';
            formItem.appendChild(priorityInput);

            const priorityOptions = (() => {
                const optionLow = document.createElement('option');
                optionLow.value = 'Low';
                optionLow.innerHTML = 'Low';
                priorityInput.appendChild(optionLow);

                const optionMedium = document.createElement('option');
                optionMedium.value = 'Medium';
                optionMedium.innerHTML = 'Medium';
                priorityInput.appendChild(optionMedium);

                const optionHigh = document.createElement('option');
                optionHigh.value = 'High';
                optionHigh.innerHTML = 'High';
                priorityInput.appendChild(optionHigh);
            })();
        })();

        const formProject = (() => {
            const formItem = document.createElement('div');
            formItem.classList.add('form-item')
            taskForm.appendChild(formItem);
    
            const projectLabel = document.createElement('label');
            projectLabel.classList.add('form-label');
            projectLabel.setAttribute('for', 'form-project');
            projectLabel.innerText = 'Project';
            formItem.appendChild(projectLabel);
    
            const projectInput = document.createElement('select');
            projectInput.classList.add('form-project');
            projectInput.id = 'form-project';
            formItem.appendChild(projectInput);

            const defaultSelect = document.createElement('option');
            defaultSelect.value = 'None';
            defaultSelect.innerText = '';
            projectInput.appendChild(defaultSelect);
        })();
    
        const addSubmit = (() => {
            const submitContainer = document.createElement('div');
            submitContainer.classList.add('submit-container');
            taskForm.appendChild(submitContainer);
    
            const submit = document.createElement('button');
            submit.classList.add('submit');
            submit.innerText = 'Add';
            submit.setAttribute('type', 'submit')
            submitContainer.appendChild(submit);
        })();
    })();        
};
