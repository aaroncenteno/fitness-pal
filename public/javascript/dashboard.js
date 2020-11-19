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
            backgroundColor: 'rgb(0, 0, 0, .8)',
            borderColor: 'rgba(54, 189, 207, 1)',
            data: [0, 10, 5, 2, 20, 30, 45]
            },
            {
                label: 'My Second dataset',
                backgroundColor: 'rgb(0, 0, 0, .8)',
                borderColor: 'rgba(54, 189, 207, 1)',
                data: [1, 5, 30, 20, 10, 25, 45]  
            }
        ]
    },

    // Configuration options go here
    options: {}
});