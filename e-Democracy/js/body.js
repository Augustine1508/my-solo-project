// const countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();

// const interval = setInterval(() => {
//     const now = new Date().getTime();
//     const duration = countDownDate - now;

//     if (duration < 0) {
//         clearInterval(interval);
//         updateDuration(0);
//         return;
//     }

//     updateDuration(duration)
// }, 1000);

// function updateDuration(duration) {
//     const days = Math.floor(duration / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((duration % (1000 * 60)) / 1000);

//     document.getElementById("days").innerHtml = days;
//     document.getElementById("hours").innerHtml = hours;
//     document.getElementById("minutes").innerHtml = minutes;
//     document.getElementById("seconds").innerHtml = seconds;
// }



function countdown() {
    const endDate = new Date("2027-02-25T23:59:59").getTime();
    const now = new Date().getTime();
    const timeLeft = endDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (timeLeft < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerText = "EXPIRED";
    }
}

const x = setInterval(countdown, 1000);


// dougnut statistic

const ctx = document.getElementById('myDoughnutChart').getContext('2d');

const data = {
    labels: ['APC', 'PDP', 'LP',],
    datasets: [{
        label: 'Stats by %',
        data: [10, 15, 75],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1
    }]
};

const config = {
    type: 'doughnut',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Support Statistics'
            }
        }
    },
};

const myDoughnutChart = new Chart(ctx, config);


