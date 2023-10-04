function login(event) {
    event.preventDefault(); // Prevent the form from submitting (for demonstration purposes)
    // Implement actual login logic here (e.g., validate credentials)

    // For demonstration, redirect to the home page after successful login
    window.location.href = 'ProjectView.html';
}

function logout() {
    // Implement logout logic here (e.g., clear session, cookies, etc.)

    // Redirect to the home page after logout
    window.location.href = 'mss.html';
}
