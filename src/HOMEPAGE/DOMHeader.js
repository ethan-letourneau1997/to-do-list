function buildHeader() {
    const header = document.createElement('header');
    header.id = 'header';
    header.classList.add('header');
    content.appendChild(header);

        const buildTitle = (() => {
            const title = document.createElement('h1');
            title.id = 'title';
            title.classList.add('title');
            title.innerText = 'To Do List';
            header.appendChild(title);

        })();
};

export { buildHeader };