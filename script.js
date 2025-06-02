// Search Button Functionality
document.getElementById('searchBtn').addEventListener('click', () => {
    const query = document.querySelector('.search .field').value;
    alert(`You searched for: ${query}`);
});

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // You can add form validation and submission logic here
    alert('Form submitted successfully!');
});

// Trigger class name on load
window.onload = function () {
    document.body.className += ' loaded'
};