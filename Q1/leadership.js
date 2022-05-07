//Sticky Sider Bar
var stickyBlock = document.querySelector('.show-on-desktop-min');
var headerOffsetY = document.querySelector('.site-header').offsetHeight;
var stopOffsetY = document.querySelector('.go-group-leader-content').offsetTop + headerOffsetY;
var sidebarWidth = document.querySelector('#sidebar').offsetWidth;

function onScroll() {
    //if scroll Y point is bigger(scroll is lower) than go-group-leader section, sidebar will be held
    if (window.scrollY >= stopOffsetY - headerOffsetY) {
        stickyBlock.style.position = 'absolute';
        stickyBlock.style.top = `${stopOffsetY}px`;
        stickyBlock.style.width = `${sidebarWidth}px`;
    // otherwise, sidebar is working like sticky
    } else {
        stickyBlock.style.position = 'sticky';
        stickyBlock.style.position = '-webkit-sticky';
        stickyBlock.style.top = `${headerOffsetY}px`;
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