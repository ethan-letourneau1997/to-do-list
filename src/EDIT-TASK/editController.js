import { taskList } from "..";

// keeps track of task being edited
let  arrayNum = 0;


export function editTask(task) {
    let title = document.getElementById('title-placeholder');
    let date = document.getElementById('date-placeholder');
    let project = document.getElementById('project-focus-placeholder');
    let priority = document.getElementById('priority-placeholder');
    let description = document.getElementById('description-placeholder');

    let container = document.getElementById('info-container');

  

    const selectTask = (() => {
        for(let i =0; i < taskList.length;i++ ){
            if (taskList[i].title == title.innerText){
                arrayNum = i;
                

                const createInputs = (() => {
                    
                    const createTitleInput = (() => {
                        const titleInput = document.createElement('input');
                        titleInput.value = title.innerText;
                        titleInput.classList.add('edit-input');
                        titleInput.id = 'title-placeholder';

                        container.replaceChild(titleInput, container.childNodes[1]);
                    })();
                    
                    const createDescriptionInput = (() => {
                        const descriptionInput = document.createElement('input');
                        descriptionInput.value = description.innerText;
                        descriptionInput.classList.add('edit-input');
                        descriptionInput.id = 'description-placeholder'

                        container.replaceChild(descriptionInput, container.childNodes[3]);
                    })();
                    
                    const createDateInput = (() => {
                        const dateInput = document.createElement('input');
                        dateInput.value = date.innerText;
                        dateInput.classList.add('edit-input');
                        dateInput.id = 'date-placeholder'

                        container.replaceChild(dateInput, container.childNodes[5]);
                    })();
                    
                    const createPriorityInput = (() => {
                        const priorityInput = document.createElement('input');
                        priorityInput.value = priority.innerText;
                        priorityInput.classList.add('edit-input');
                        priorityInput.id = 'priority-placeholder'

                        container.replaceChild(priorityInput, container.childNodes[7]);
                    })();
                    
                    const createProjectInput = (() => {
                        const projectInput = document.createElement('input');
                        projectInput.value = project.innerText;
                        projectInput.classList.add('edit-input');
                        projectInput.id = 'project-focus-placeholder'

                        container.replaceChild(projectInput, container.childNodes[9]);
                    })();
                    
    
                    
                })();

                const editToSubmit = (() => {
                    let buttonContainer = document.getElementById('edit-button-container');

                    const submitEdit = document.createElement('button');
                    submitEdit.id = 'submit-edit-button';
                    submitEdit.classList.add('focus-button');
                    // submitEdit.addEventListener('click', makeEdit);
                    submitEdit.innerText = 'Submit';

                    buttonContainer.replaceChild(submitEdit, buttonContainer.childNodes[0]);
                })();

                function taskSubmitHandler(event){
                    event.preventDefault();
                    makeEdit();
                }


                const createForm = (() => {
                    const taskFocus = document.getElementById('task-focus');
                    const content = document.getElementById('content');
                    
                    const focusForm = document.createElement('form');
                    focusForm.onsubmit = taskSubmitHandler;
                    focusForm.id = 'task-focus';
                    focusForm.classList.add('task-focus');

                    while (taskFocus.childNodes.length > 0){
                        focusForm.appendChild(taskFocus.childNodes[0]);
                    };

                    content.replaceChild(focusForm, content.childNodes[4]);
                })();

                function makeEdit(){
                    const revertInputs = (() => {

                        const titleEdit = document.createElement('div');
                        titleEdit.innerText = document.getElementById('title-placeholder').value;
                        titleEdit.id = 'title-placeholder';
                        titleEdit.classList.add('task-info');

                        taskList[arrayNum].title = titleEdit.innerText;

                        container.replaceChild(titleEdit, container.childNodes[1]);
                        

                        const descriptionEdit = document.createElement('div');
                        descriptionEdit.innerText = document.getElementById('description-placeholder').value;
                        descriptionEdit.id = 'description-placeholder';
                        descriptionEdit.classList.add('task-info');

                        taskList[arrayNum].description = descriptionEdit.innerText;

                        container.replaceChild(descriptionEdit, container.childNodes[3]);


                        const dateEdit = document.createElement('div');
                        dateEdit.innerText = document.getElementById('date-placeholder').value;
                        dateEdit.id = 'date-placeholder';
                        dateEdit.classList.add('task-info');

                        taskList[arrayNum].dueDate = dateEdit.innerText;

                        container.replaceChild(dateEdit, container.childNodes[5]);



                        const priorityEdit = document.createElement('div');
                        priorityEdit.innerText = document.getElementById('priority-placeholder').value;
                        priorityEdit.id = 'priority-placeholder';
                        priorityEdit.classList.add('task-info');

                        taskList[arrayNum].priority = priorityEdit.innerText;

                        container.replaceChild(priorityEdit, container.childNodes[7]);


                        const projectEdit = document.createElement('div');
                        projectEdit.innerText = document.getElementById('project-focus-placeholder').value;
                        projectEdit.id = 'project-focus-placeholder';
                        projectEdit.classList.add('task-info');

                        taskList[arrayNum].project = projectEdit.innerText;

                        container.replaceChild(projectEdit, container.childNodes[9]);
                    })();



                    const submitToEdit = (() => {
                        let buttonContainer = document.getElementById('edit-button-container');
    
                        const submitToEdit = document.createElement('button');
                        submitToEdit.id = 'submit-edit-button';
                        submitToEdit.classList.add('focus-button');
                        submitToEdit.addEventListener('click', editTask);
                        // submitEdit.addEventListener('click', makeEdit);
                        submitToEdit.innerText = 'Edit';
    
                        buttonContainer.replaceChild(submitToEdit, buttonContainer.childNodes[0]);
                    })();

                    const destroyForm = (() => {
                        const taskFocus = document.getElementById('task-focus');
                        const content = document.getElementById('content');
                        
                        const focusDiv = document.createElement('div');
                        focusDiv.id = 'task-focus';
                        focusDiv.classList.add('task-focus');
    
                        while (taskFocus.childNodes.length > 0){
                            focusDiv.appendChild(taskFocus.childNodes[0]);
                        };
    
                        content.replaceChild(focusDiv, content.childNodes[4]);

                        

                    })();
                };

                
                
            };
        };
    })();
    
};


