import { projectList } from "..";

export function storeProjectList(){
    var projectsToStore = projectList;
    localStorage.setItem('storedProject', JSON.stringify(projectsToStore));
};