// Add Buddy 
async function addBuddyHandler(event) {
    const name = document.querySelector("#add-buddy-input").value.trim()
    console.log('clicked')

    if(name) {
        const response = await fetch ('/api/users/buddy/' + name, {
            method: 'POST',
            body: JSON.stringify({
                name
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(response.ok) {
            document.location.reload();
        } else {
            $("#buddy-fail").modal('toggle')
        }
    }
}

// Create a new chart
let ctx = document.getElementById('myChart').getContext('2d');
let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
            label: 'My First dataset',
            backgroundColor: 'rgba(54, 189, 207, .8)',
            borderColor: 'rgba(255, 255, 255, .8)',
            data: [1, 10, 20, 30, 40, 20, 30]
            },
            {
                label: 'My Second dataset',
                backgroundColor: 'rgba(255, 98, 208, .8)',
                borderColor: 'rgba(255, 255, 255, 1)',
                data: [1, 5, 30, 20, 10, 25, 45]  
            }
        ],
    },
    options: {
        responsive: true,
        scales: {
            yAxes: [{
                gridLines: {
                    drawBorder: false,
                    color: 'white'
                },
                ticks: {
                    fontColor: 'white',
                    fontFamily: 'Russo One',
                    fontSize: 16,
                }
            }],
            xAxes: [{
                gridLines: {
                    drawBorder: false,
                    color: 'white'
                },
                ticks: {
                    fontColor: 'white',
                    fontFamily: 'Russo one',
                    fontSize: 16,
                }
            }],
        },
        legend: {
            labels: {
                fontColor: 'white',
                fontSize: 16,
                fontFamily: 'Russo One',
            }
        }
    }
});

document.querySelector('.add-buddy-btn').addEventListener('click', addBuddyHandler)