const tabs = document.querySelectorAll('.cultures__tab');
const tabsContainer = document.querySelector('.cultures__tab-container');
const tabsContent = document.querySelectorAll('.cultures__content');

tabsContainer.addEventListener('click', function (e) {
    const clicked = e.target.closest('.cultures__tab');
  
    // Guard clause
    if (!clicked) return;
  
    // Remove active classes
    tabs.forEach(t => t.classList.remove('cultures__tab--active'));
    tabsContent.forEach(c => c.classList.remove('cultures__content--active'));
  
    // Activate tab
    clicked.classList.add('cultures__tab--active');
  
    // Activate content area
    document
      .querySelector(`.cultures__content--${clicked.dataset.tab}`)
      .classList.add('cultures__content--active');
  });