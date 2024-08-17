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

// Video
const videoContainer = document.querySelector('.video-container');
const mainVideo = document.querySelector('video');
const playPauseBtn = document.querySelector('.play-pause i');
const progressBar = document.querySelector('.progress-bar');
const skipBackward = document.querySelector('.skip-backward i');
const skipForward = document.querySelector('.skip-forward i');

mainVideo.addEventListener('timeupdate', (e) => {
  let {currentTime, duration} = e.target;

  let percent = (currentTime / duration) * 100;

  progressBar.style.width = `${percent}%`
});

playPauseBtn.addEventListener('click', () => {
  if(mainVideo.paused) {
    mainVideo.play()
  } else {
    mainVideo.pause()
  }
});

mainVideo.addEventListener('play', () => {
  playPauseBtn.classList.replace('fa-play', 'fa-pause')
});

mainVideo.addEventListener('pause', () => {
  playPauseBtn.classList.replace('fa-pause', 'fa-play')
});

skipBackward.addEventListener('click', () => {
  mainVideo.currentTime -= 5
})
skipForward.addEventListener('click', () => {
  mainVideo.currentTime += 5
})
