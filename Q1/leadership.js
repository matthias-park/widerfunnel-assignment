//Sticky Sider Bar
const stickyBlock = document.querySelector('.show-on-desktop-min');
const headerOffsetY = document.querySelector('.site-header').clientHeight;

//Position Sticky Solution -> for without IE
// stickyBlock.style.position = 'sticky';
// stickyBlock.style.position = '-webkit-sticky';
// stickyBlock.style.top = `${headerOffsetY}px`;

//Fixed Solution -> for IE
const startOffsetY = document.querySelector('.banner-small').offsetHeight;
const stopOffsetY = document.querySelector('#post-32522').scrollHeight;
const sidebarWidth = stickyBlock.offsetWidth;

function onScroll() {
    //sidebar is working like sticky, if scrollY values is in main section id post-32522
    if ( window.scrollY >= startOffsetY && stopOffsetY >= window.scrollY) {
        stickyBlock.style.position = 'fixed';
        stickyBlock.style.top = `${headerOffsetY}px`;
        stickyBlock.style.width = `${sidebarWidth}px`;
    // if scroll Y value is bigger(scroll is lower) than go-group-leader scroll height, sidebar will be held
    } else if (window.scrollY >= stopOffsetY) {
        stickyBlock.style.position = 'absolute';
        stickyBlock.style.top = `${stopOffsetY}px`;
        stickyBlock.style.width = `${sidebarWidth}px`;
    // when scroll is above sidebar, it will be at an original place.
    } else {
        stickyBlock.style.position = 'static';
    }
}

document.addEventListener('scroll', onScroll);

//Modal
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelector('.show-modal');

//Open Modal Function
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  };

//Close Modal Function
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
  
btnOpenModal.addEventListener('click', openModal);
  
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
  
document.addEventListener('keydown', function (e) {
    // console.log(e.key);

// When you click out of modal, the modal will be closed.
if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
}
});