import { pushTask } from "./taskFormPush";


export function buildTaskForm() {

    // change color of selected button
    const changeButtonColor = (() => {
        let taskButton = document.getElementById('task-button');
        taskButton.style.color = 'white';

        let projectButton = document.getElementById('project-button');
        projectButton.style.color = 'black';
    })();
    
    const content = document.getElementById('content');  

    // build form 
    const buildAddBar = (() => {
        const taskForm = document.createElement('form');
        taskForm.id = 'form';
        taskForm.setAttribute('onsubmit', pushTask)
        // taskForm.setAttribute('action', 'javascript:submitTask()')
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
    
            const priorityInput = document.createElement('input');
            priorityInput.classList.add('form-priority');
            priorityInput.id = 'form-priority';
            formItem.appendChild(priorityInput);
        })();
    
        const addSubmit = (() => {
            const submitContainer = document.createElement('div');
            submitContainer.classList.add('submit-container');
            taskForm.appendChild(submitContainer);
    
            const submit = document.createElement('input');
            submit.classList.add('submit');
            submit.innerText = 'Add';
            submit.setAttribute('type', 'submit')
            submitContainer.appendChild(submit);

            // link to submit function 
            // submit.addEventListener('click', pushTask);

            // prevent task reset 
            // submit.addEventListener("click", function(event){
            //     event.preventDefault()
            //   });
              
            // reset form fields
            // submit.addEventListener('click', buildTaskForm);

        })();
    })();        
};

