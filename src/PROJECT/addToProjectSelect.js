import { projectList } from "..";

  
export function addToProjectSelect() {

    for(let i = 0; i < projectList.length; i++){
        if (projectList[i].name != ""){
            let select = document.getElementById('form-project');
         
            let option = document.createElement('option');
            option.innerText = projectList[i].name;
            option.value = projectList[i].name;
            select.appendChild(option);
            
            let deleteSelect = document.getElementById('delete-select');

            let otherOption = document.createElement('option')
            otherOption.innerText = projectList[i].name;
            otherOption.value = projectList[i].name;
            deleteSelect.appendChild(otherOption);
        };
        
    }
    
}
