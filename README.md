# to-do-list
use factories / constructors to dynamically create objects

Minimum properties for todo-items
    title 
    description
    dueDate
    priority
    notes *optional*
    checklist *optional*

UI should be able to:
    view all projects
    view all todos in each project (prob just title and duedate... perhaps changing color for different priorities)
    expand a single todo to see/edit its details
    delete a todo

should have projects or seperate lists of todos 

when a user first opens the app, there should be a 'default' project where all todos are put

users should be able to create new projects and choose which project their todos go into

application logic (ie. creating new todos, setting todeos as complete, changing todo priority etc. ) should be in seperate odules than DOM-related stuff

use localStorage to save data on a user's computer 
    set up a function that saves the projects (and todos) to localStore anytime one is created
    another fucntion that looks for that data in localStoarge when the app is first loaded

    make sure app doesn't crash if data you may want to retrieve isn't there
    find a way to add methods back to object properties once they are fetched (you cannot store functions in JSON)

Step 1: set up webpack
step 2: set up base ui 