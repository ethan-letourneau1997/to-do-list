import { projectList } from "..";

export function switchProject(){     
    const allProjectsButton = document.getElementById('all-projects');

    
    for (let i = 0; i < projectList.length; i++){
        if (projectList[i].name == button.id) {
            removeTableRows();
            sortList(button.id);

                function sortList(x) {
                    for (let i = 0; i < taskList.length; i++ ){
                        if (x == taskList[i].project){
                            createTask(taskList[i]);
                        }
                        
                    }
                    
                }

        }
    };
};