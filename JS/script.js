// Navbar
const navbar = document.querySelector('.navbar')

window.addEventListener('scroll', () => {
  if(window.scrollY > 0) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove('sticky')
  }
})

// Projects filter
const filterLinks = document.querySelectorAll('.filter-nav-link');

filterLinks.forEach((filterLink) => {
filterLink.addEventListener(('click'), (e) => {
  e.preventDefault();

  document.querySelector('.filter-nav-link.active').classList.remove("active")
  filterLink.classList.add('active')

  const projects = document.querySelectorAll('.project')
  projects.forEach((project) => {
    project.classList.add('hide')

    if (filterLink.getAttribute('data-type') === project.getAttribute('data-type') || filterLink.getAttribute('data-type') == 'all') {
      project.classList.remove('hide');
    }
  })
})
});
