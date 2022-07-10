import { buildHeader } from "./buildHeader";
import { buildSidebar } from "./buildProjectBar";
import { buildMain } from "./buildMain";
import { buildFormBarHeader } from "./buildFormBarHeader";
import { buildTaskFocus } from "./buildTaskFocus";


export function createHomePage() {

    const defineContent = (() => {
        const content = document.getElementById('content');
    })();

    buildHeader();
    buildSidebar();
    buildMain();
    buildFormBarHeader();
    buildTaskFocus();   
};



