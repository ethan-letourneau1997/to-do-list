export function removeTableRows(){
    let table = document.getElementById('task-table');
    for(let i = 1; i<table.rows.length;){
        table.deleteRow(i);
    }
};