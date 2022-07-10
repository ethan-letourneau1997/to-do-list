
export function focusTask(task) {
    
        let title = document.getElementById('title-placeholder');
        let date = document.getElementById('date-placeholder');
        let project = document.getElementById('project-focus-placeholder');
        let priority = document.getElementById('priority-placeholder');
        let description = document.getElementById('description-placeholder');
    
        title.innerText = task.title;
        date.innerText = task.dueDate;
        project.innerText = task.project;
        priority.innerHTML = task.priority;
        description.innerHTML = task.description;
  
    

};