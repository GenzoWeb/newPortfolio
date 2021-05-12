swup.on('contentReplaced', mount);
swup.on('willReplaceContent', unmount);

function mount() {
    init();
    menuNav();
    buttonHome();
}

function init() {
    if (document.querySelector('.contain_home')) {
        container.classList.add('container_home')
    } else {
        container.classList.remove('container_home')
    }

    if (document.querySelector('.contain_contact')) {
        swup.on('pageView', validFormContact);
    }
}

function menuNav(){
    linksMenu.forEach(function(linkMenu) {
        const html = document.querySelector('html');
        linkMenu.addEventListener('click', function (e){
            linkActive(e, linkMenu)
            disabledLink()
        })
    })
}

function disabledLink() {
    linksMenu.forEach(linkM => linkM.classList.add('disabled'));
    setTimeout(() => {
        linksMenu.forEach(linkMu => linkMu.classList.remove('disabled'));
    }, 1000);
}

function buttonHome() {
    if(document.querySelector('.btn')){
        const btnHome = document.querySelector('.btn');
        btnHome.addEventListener('click', linkProjectsActive)
    }
}

function linkActive(e, link) {
    if(document.querySelector('.contain_projects')) {
        linkProjects.classList.remove('active')
    }

    if(document.querySelector('.contain_home')) {
        linkHome.classList.remove('active')
    }

    if(!e.ctrlKey){
        linksMenu.forEach(linkM => linkM.classList.remove('active'));
        link.classList.add('active');
    }
} 

function linkProjectsActive() {
    linksMenu.forEach(linkM => linkM.classList.remove('active'));
    linkProjects.classList.add('active');
}


function unmount() {
    buttonHomeRemoveEvent();
    menuNavRemoveEvent();
}

function buttonHomeRemoveEvent() {
    if(document.querySelector('.btn')){
        const btnHome = document.querySelector('.btn');
        btnHome.addEventListener('click', linkProjectsActive)
    }
}

function menuNavRemoveEvent(){
    linksMenu.forEach(function(linkMenu) {
        const html = document.querySelector('html');
        linkMenu.addEventListener('click', function (e){
            linkActive(e, linkMenu)
            disabledLink()
        })
    })
}

mount()