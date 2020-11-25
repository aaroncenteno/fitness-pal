// Search Database for Buddy 
async function searchBuddyHandler(event) {
    const username = document.querySelector("#add-buddy-input").value.trim();
    const foundUser = document.querySelector(".found-user")


    if (username) {
        const response = await fetch('/api/users/' + username, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                return response.json();
            })
        foundUser.innerHTML = response.username + ' User ID: ' + response.id;

        if (username == response.username) {
            $("#add-buddy-modal").modal('toggle')
        } else {
            $("#search-fail-modal").modal('toggle')
        }
    }
}

// Add a buddy to buddy list
async function addBuddyHandler(event) {
    const addToBuddyList = document.querySelector("#add-to-buddy-list");
    const foundUser = document.querySelector(".found-user");
    const userId = foundUser.innerHTML.split(": ")[1];

    const response = await fetch('/api/users/buddy/' + userId, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (response.ok) {
        document.location.reload();
    }
}

$(".added-buddy").click(function (event) {
    var parent = $(this).closest('.added-buddy')
    const buddyName = parent[0].innerText.split(" ")[0]
    const buddyId = parent[0].innerText.split(" ")[2]
    const removeBuddyName = document.querySelector('.remove-buddy-name');
    const removeBuddyId = document.querySelector('.remove-buddy-id');
    console.log(buddyId)

    removeBuddyName.innerHTML = buddyName;
    removeBuddyId.innerHTML = buddyId;
    $("#remove-buddy-modal").modal('toggle')
})

async function removeBuddyHandler(event) {
    const buddyIdEL = document.querySelector('.remove-buddy-id');
    const buddyId = buddyIdEL.innerHTML

    const response = await fetch('/api/users/buddy/' + buddyId, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (response.ok) {
        document.location.reload();
    }
}


// Sample Exercise
async function sampleExercise() {
    const exerciseEl = document.querySelector('.random-exercise');
    const exerciseInstructions = document.querySelector('.random-instruction');
    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const response = await fetch('/api/exercises/dashboard/' + randomNumber(1, 24), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            return response.json();
        })
    exerciseEl.innerHTML = response.exercise_name
    exerciseInstructions.innerHTML = response.instructions;

}

sampleExercise();


// Add a users weight to the database
async function addWeightHandler(event) {
    const weight = document.querySelector("#weight-chart-input").value.trim();

    const response = await fetch('/api/users/weight', {
        method: 'POST',
        body: JSON.stringify({ weight }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (response.ok) {
        window.location.reload();
    }
}

async function deleteWeightHandler(event) {
    const userIdEl = document.querySelector('.req-session-id');
    const user_id = userIdEl.innerHTML

    const response = await fetch('/api/users/weight/' + user_id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (response.ok) {
        document.location.reload();
    }
}

async function pushWeightChart() {
    const userIdEl = document.querySelector('.req-session-id');
    const user_id = userIdEl.innerHTML

    const response = await fetch('/api/users/weight/' + user_id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            let weight = [];
            let date = [];

            for (i = 0; i < data.length; i++) {
                var formatDate = moment(data[i].createdAt).format('MMM Do YY')
                date.push(formatDate);
                weight.push(data[i].weight);
            }
            // Create a new chart
            let ctx = document.getElementById('myChart').getContext('2d');
            let chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'line',

                // The data for our dataset
                data: {
                    labels: date,
                    datasets: [
                        {
                            label: 'Your weight journey',
                            backgroundColor: 'rgba(54, 189, 207, .8)',
                            borderColor: 'rgba(255, 255, 255, .8)',
                            data: weight
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
        })
}

const buddyWeight = [];
const buddyDate = [];
const userWeight = [];
const userDate = [];
const buddyBtn = document.querySelector('.buddyInfo');

if (buddyBtn) {

    $(".buddyInfo").click(async function () {
        var buddyName = $(this).val();
        const response = await fetch('api/users/' + buddyName, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                const weightData = data.weights;
                for (i = 0; i < weightData.length; i++) {
                    var formatDate = moment(weightData[i].createdAt).format('MMM Do YY');
                    buddyDate.push(formatDate);
                    buddyWeight.push(weightData[i].weight)
                }
            })
    })

    $(".buddyInfo").click(async function () {
        const chartCanvas = document.querySelector("#buddyCompareChart")

        const username = document.querySelector('.req-session-username').innerHTML
        const response = await fetch('api/users/' + username, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                const weightData = data.weights;
                for (i = 0; i < weightData.length; i++) {
                    var formatDate = moment(weightData[i].createdAt).format('MMM Do YY');
                    userDate.push(formatDate);
                    userWeight.push(weightData[i].weight)
                }
                const buddyCompareChart = document.createElement('canvas');
                const chartContainer = document.querySelector("#buddy-chart-container");
                buddyCompareChart.setAttribute('id', 'buddyCompareChart')
                buddyCompareChart.classList = "buddyCompareChart"
                chartContainer.appendChild(buddyCompareChart);

                let ctx = document.getElementById('buddyCompareChart').getContext('2d');
                let chart = new Chart(ctx, {
                    // The type of chart we want to create
                    type: 'line',

                    // The data for our dataset
                    data: {
                        labels: [userDate],
                        datasets: [
                            {
                                label: 'Your Weight',
                                backgroundColor: 'rgba(54, 189, 207, .8)',
                                borderColor: 'rgba(255, 255, 255, .8)',
                                data: userWeight
                            },
                            {
                                label: 'Buddy Weight',
                                backgroundColor: 'rgb(253, 70, 95, .8)',
                                borderColor: 'rgba(0, 0, 0, .8)',
                                data: buddyWeight
                            }
                        ],
                    },
                    options: {
                        responsive: true,
                        scales: {
                            yAxes: [{
                                gridLines: {
                                    drawBorder: false,
                                    color: 'black'
                                },
                                ticks: {
                                    fontColor: 'black',
                                    fontFamily: 'Russo One',
                                    fontSize: 16,
                                }
                            }],
                            xAxes: [{
                                gridLines: {
                                    drawBorder: false,
                                    color: 'black'
                                },
                                ticks: {
                                    fontColor: 'black',
                                    fontFamily: 'Russo one',
                                    fontSize: 16,
                                }
                            }],
                        },
                        legend: {
                            labels: {
                                fontColor: 'black',
                                fontSize: 16,
                                fontFamily: 'Russo One',
                            }
                        }
                    }
                });
            })
    })
}

$(document).ready(function () {
    $(".buddyModalWeight").on("hidden.bs.modal", function () {
        document.location.reload()
    });
});

// async function buddyWeightCompare(event) {
//     const buddyCompareChartEl = document.querySelector("#buddy-chart-container")
//     buddyCompareChartEl.innerHTML = ""
//     const buddyName = document.querySelector('.buddyInfo').value.trim()

//     const response = await fetch('api/users/' + buddyName, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         const weightData = data.weights;
//         for (i = 0; i < weightData.length; i++) {
//             var formatDate = moment(weightData[i].createdAt).format('MMM Do YY');
//             buddyDate.push(formatDate);
//             buddyWeight.push(weightData[i].weight)
//         }
//     })
// }

// 

document.querySelector('.add-buddy-btn').addEventListener('click', searchBuddyHandler)
document.querySelector('#add-to-buddy-list').addEventListener('click', addBuddyHandler)
document.querySelector('#remove-buddy-confirm').addEventListener('click', removeBuddyHandler)
document.querySelector('#submit-weight-btn').addEventListener('click', addWeightHandler)
document.querySelector('#delete-weight-confirm').addEventListener('click', deleteWeightHandler)

pushWeightChart()