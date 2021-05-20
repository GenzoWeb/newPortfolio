init()
swup.on('contentReplaced', init);

function init() {
    if (document.querySelector('.contain_home')) {
        removeActiveclass();
        linkHome.classList.add('active');
        autoText();
    }

    if (document.querySelector('.contain_projects')) {
        removeActiveclass();
        linkProjects.classList.add('active');
    }

    if (document.querySelector('.contain_comp')) {
        removeActiveclass();
        linkComp.classList.add('active');
    }

    if (document.querySelector('.contain_contact')) {
        removeActiveclass();
        linkContact.classList.add('active');
        swup.on('pageView', validFormContact);
    }
}

function removeActiveclass() {
    linksMenu.forEach(linkM => linkM.classList.remove('active'));

    // linksMenu.forEach(myFunction);
    // function myFunction(linkM) {
    //     linkM.classList.remove('active')
    // }
}