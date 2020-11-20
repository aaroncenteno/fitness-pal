var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
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
            data: [0, 10, 5, 2, 20, 30, 45]
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