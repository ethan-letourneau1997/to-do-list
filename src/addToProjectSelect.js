import { projectList } from ".";

  
export function addToProjectSelect() {

    for(let i = 0; i < projectList.length; i++){
        let select = document.getElementById('form-project');
        let option = document.createElement('option');
        option.innerText = projectList[i].name;
        option.value = projectList[i].name;
        select.appendChild(option);
    }
}
