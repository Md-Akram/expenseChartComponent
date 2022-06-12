const labels = [];
const numbers = [];

const fetchData = () => {
    fetch('./data.json')
        .then(response => response.json())
        .then(info => {
            info.map((i) => {
                labels.push(i.day.toUpperCase())
                numbers.push(i.amount)
            })
            constructChart()
        }).catch(error => console.log(error))

}

const constructChart = () => {
    const data = {
        labels: labels,
        datasets: [{
            label: "expenses",
            backgroundColor: 'hsl(10, 79%, 65%)',
            lineWidth: 0,
            tickColor: 'rgb(0,0,0)',
            data: numbers,
        }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    display: false
                },
                x: {
                    display: false,
                }

            },
        },
    };

    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );

}

fetchData()



