async function signupFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email-signup').value.trim();
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    // const takenEmail = document.querySelector('#taken-email');
    // const takenUsername = document.querySelector('#taken-username');

    if (email && username && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                email,
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
            
        });

        if (response.ok) {
            document.location.replace('/profile');
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);