import { editTask } from "../EDIT-TASK/editController";
import { deleteTask } from "../EDIT-TASK/deleteTask";

export function buildTaskFocus() {

    let taskFocus = document.createElement('div');
    taskFocus.id = 'task-focus';
    taskFocus.classList.add('task-focus');
    content.appendChild(taskFocus);

    const infoContainer = document.createElement('div');
    infoContainer.id = 'info-container';
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
        buttonSection.id = 'focus-button-section';
        taskFocus.appendChild(buttonSection);

        const createEditButton = (() => {
            const editButtonContainer = document.createElement('div');
            editButtonContainer.id = 'edit-button-container';
            editButtonContainer.classList.add('focus-button-container');
            buttonSection.appendChild(editButtonContainer);

            const editButton = document.createElement('button');
            editButton.classList.add('focus-button');
            editButton.innerText = 'Edit';
            editButton.addEventListener('click', editTask);
            editButtonContainer.appendChild(editButton);
        })();

        const createDeleteButton = (() => {
            const deleteButtonContainer = document.createElement('div');
            deleteButtonContainer.classList.add('focus-button-container');
            buttonSection.appendChild(deleteButtonContainer);

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('focus-button');
            deleteButton.innerText = 'Delete';
            deleteButton.addEventListener('click', deleteTask);
           deleteButtonContainer.appendChild(deleteButton);
        })();
    })();
};