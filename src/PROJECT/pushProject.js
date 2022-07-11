import { projectList} from "..";
import { Project } from "./project";
import { createProject } from "./createProject";
import { storeProjectList } from "./storeProjectList";

export function pushProject() {
 
        
        let projectName = document.getElementById('project-name');
        let projectDescription = document.getElementById('project-description');
 

        let project = new Project(projectName.value, projectDescription.value);
        console.log(project);
    
        createProject(project);
       

        projectList.push(project);

        storeProjectList();
        

    
    

};