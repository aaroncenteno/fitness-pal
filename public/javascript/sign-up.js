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
        // get all users and compare username email
        // const getUsers = await fetch('/api/users').then(
        //     function (response) {
        //         response.json().then(function (data) {
        //             let ifTakenUsername = false;
        //             let ifTakenEmail = false;
        //             for (let i = 0; i < data.length; i++) {
        //                 if (username === data[i].username) {
        //                     takenUsername.classList.remove('hide');
        //                     return ifTakenUsername = true;
        //                 } else if (email === data[i].email) {
        //                     takenEmail.classList.remove('hide');
        //                     return ifTakenEmail = true;
        //                 }
        //             }
        //         })
        //     });
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);