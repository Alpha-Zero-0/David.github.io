function validateAnswers() {
    // Get the answers from the form
    const q1 = document.getElementById('q1').value.trim();
    const q2 = document.getElementById('q2').value.trim();
    const q3 = document.getElementById('q3').value.trim();
    
    // Define correct answers
    const correctAnswers = {
        q1: '10',
        q2: '150',
        q3: '浩克'
    };
    
    // Check if answers match
    if (q1 === correctAnswers.q1 && q2 === correctAnswers.q2.toLowerCase() && q3 === correctAnswers.q3) {
        // Redirect to the restricted page if correct
        window.location.href = 'restricted.html'; // Change to the actual restricted page
    } else {
        // Display error message if answers are wrong
        document.getElementById('errorMessage').textContent = 'One or more answers are incorrect. Please try again.';
    }
}
