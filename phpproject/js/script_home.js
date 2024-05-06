function animateButton(button) {
    button.classList.add('clicked');
    setTimeout(function() {
        button.classList.remove('clicked');
    }, 500); // Adjust the time to match the animation duration
}
