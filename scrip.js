function validateAnswers() {
    // Get the answers from the form
    const q1 = document.getElementById('q1').value;
    const q2 = document.getElementById('q2').value;
    const q3 = document.getElementById('q3').value;
    
    // Define correct answers
    const correctAnswers = {
        q1: 'Esme',
        q2: 'London',
        q3: 'Liverpool'
    };
    
    // Check if answers match
    if (q1 === correctAnswers.q1 && q2.toLowerCase() === correctAnswers.q2.toLowerCase() && q3 === correctAnswers.q3) {
        // Redirect to the restricted page if correct
        window.location.href = 'restricted.html'; // Change to the actual restricted page
    } else {
        // Display error message if answers are wrong
        document.getElementById('errorMessage').textContent = 'One or more answers are incorrect. Please try again.';
    }
}
