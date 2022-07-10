import { projectList} from ".";
import { Project } from "./project";
import { createProject } from "./createProject";

export function pushProject() {

    let  projectName = document.getElementById('project-name');
    let projectDescription = document.getElementById('project-description');
 

    let project = new Project(projectName.value, projectDescription.value);

    createProject(project);

    projectList.push(project);
    
    projectName.value = "";
    projectDescription.value = "";
};