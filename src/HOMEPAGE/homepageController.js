import { buildHeader } from "./DOMHeader";
import { buildSidebar } from "./DOMProjectBar";
import { buildMain } from "./DOMMain";
import { buildFormBarHeader } from "./DOMFormBarHeader";
import { buildTaskFocus } from "./DOMTaskFocus";


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



