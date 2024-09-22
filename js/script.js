document.getElementById('contactForm').addEventListener('submit', function(event) {
    var email = document.getElementById('email').value;
    var confirmEmail = document.getElementById('confirmEmail').value;

    if (email !== confirmEmail) {
        // Prevent the form from being submitted
        event.preventDefault();
        // Show an alert if emails don't match
        alert('The email confirmation does not compare with the email entered.');
    }
});