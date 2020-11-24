async function displayLatestWorkout(event) {
    event.preventDefault();

    const response = await fetch('/api/exercises/workout/:id', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            return response.json();
        })

}