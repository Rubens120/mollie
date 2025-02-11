const icon = document.querySelector(".icon");
const navbar = document.querySelector(".navbar");

icon.addEventListener('click', () => {
    navbar.classList.toggle("responsive");
});



document.addEventListener('scroll', () => {
	const header = document.querySelector('header');
	
	if (window.scrollY > 96) {
		header.classList.add('scrolled');	
	}
	 else {
		header.classList.remove('scrolled');
	}
});

// Remove the transition class
const square = document.querySelector('.image');
square.classList.remove('image-transition');

// Create the observer, same as before:
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square.classList.add('image-transition');
      return;
    }

    square.classList.remove('image-transition');
  });
});

observer.observe(document.querySelector('.image'));