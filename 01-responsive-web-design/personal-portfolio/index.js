'use strict';
window.onload = function() {
  // On portrait view, Collapse deployed menu when menu item is clicked
  const checkbox = document.getElementById('navi-toggle');
  const uncheck = () => (checkbox.checked = false);
  const menuItems = document.querySelectorAll('.navbar__link');
  menuItems.forEach(el => el.addEventListener('click', uncheck));

  // On portrait view, Collapse menu when deployed and logo is clicked
  const navLogo = document.querySelector('.navbar__logo-img');
  navLogo.addEventListener('click', () => {
    if (checkbox.checked) uncheck();
  });

  // sizing the actual viewport height non cropped on mobile browsers
  const setVhVariable = () => {
    // get the viewport height and multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  setVhVariable();

  // --vh update on window resize.
  // window.addEventListener("resize", setVhVariable);

  window.onscroll = highlightMenuBySection;

  //  highlight menu item related to the current section on viewport
  function highlightMenuBySection() {
    const sections = document.querySelectorAll('section');
    let navHeight = document.getElementById('navbar').offsetHeight;
    let headerHeight = document.querySelector('header').offsetHeight;
    let currentPos = window.scrollY;

    sections.forEach(section => {
      let top = section.offsetTop - navHeight;
      let bottom = top + section.offsetHeight;
      let href = `#${section.getAttribute('id')}`;

      if (currentPos >= top && currentPos <= bottom) {
        menuItems.forEach(item => {
          let itemHref = item.getAttribute('href');
          itemHref === href
            ? item.classList.add('active')
            : item.classList.remove('active');
        });
      } else if (currentPos < headerHeight - navHeight) {
        menuItems.forEach(item => item.classList.remove('active'));
      }
    });
  }

  // clean and update active class while mouse over menu
  document.querySelectorAll('.navbar__link').forEach(link => {
    link.addEventListener('mouseenter', function() {
      menuItems.forEach(item => item.classList.remove('active'));
    });
  });

  document.querySelectorAll('.navbar__link').forEach(link => {
    link.addEventListener('mouseleave', highlightMenuBySection);
  });

  /* 
  // highlight menu item related to url hash
  function highlightMenuItem() {
    let hash = window.location.hash;

    menuItems.forEach(el => {
      let elHref = el.getAttribute("href");
      elHref === hash
        ? el.classList.add("active")
        : el.classList.remove("active");
    });
  }
 */
};
