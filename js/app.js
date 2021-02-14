

//*****     Line Graph trafic */

let trafficCanvas = document.querySelector(`#traffic-chart`);

let trafficData = {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets:[{
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
            backgroundColor: 'rgba(116, 119, 191, 0.3)',
            borderWidth: 1,
        }]
}

let trafficOptions = {
    aspectRation: 2.5,
    animation: {
        duration: 0,
    },
    scales: {
        yAses: [{
            ticks: {
                beginAtZero: true,
            }
        }]
    },
    legend :{
        display: false,
    }
}

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
    });
    

// daily trafic 
// bar chart
const dailyCanvas = document.querySelector("#daily-trafic")

const dailyData = {
    labels: ['Mo','Tu','We','Th','Fr','Sa','Su'],
    datasets: [{
            label: '# of Hits',
            data: [75, 115, 175, 125, 225, 200, 100],
            backgroundColor: '#7477BF',
            borderWidth: 1,
}],
};

const dailyOptions = {
    scales: {
        yAxes:[{
            ticks: {
                beginAtZero: true,
            }
        }]
    },
    legend: {
        display: false,
    }
}

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions,
});

// doughnat chart

const mobileCanvas = document.querySelector('#mobile-users-chart');

const mobileUsers = {
    labels: ['phone', 'tablet', 'desctop'],
    datasets: [{
        data: [70, 17, 13],
        backgroundColor: ['#484CCB', '#CCA05C', '#9052CC'],
        borderWidth: 1,

    }]
}

const mobileOptions = {
    legend: {
        display: true,
        position: 'right',
        align: 'center'
    },

}


let mobileChart = new Chart(mobileCanvas, {
        type : "doughnut",
        data : mobileUsers,
        options : mobileOptions,
})

//style select option element



//******  hide alert messag when clicked */
const alertBox = document.querySelector('#alert-box');

alertBox.addEventListener('click', e => {
    if(e.target.className === 'close-icon'){   
       let parentEl = e.target.parentElement; 
        
            parentEl.style.display = "none";
    }
})