window.addEventListener('scroll', function() {
    var navbar = document.getElementById('black');
    if (window.scrollY > 100) { // Adjust the scroll threshold as needed
        navbar.classList.add('scrolled'); // Add a class to change the navbar's style
    } else {
        navbar.classList.remove('scrolled'); // Remove the class if the scroll position is within the threshold
    }
});


