export const dataDoughnut = {
  labels: ['Male', 'Female'],
  datasets: [
    {
      label: '',
      borderColor: ["#1ca35e", "#64e564"],
      backgroundColor: ['rgba(28,163,94,0.1)', 'rgba(100,229,100,0.1)'],
      borderWidth: 2,
      data: [44, 25],
    }
  ]
}

export const optionsDoughnut = {
  responsive: true,
  maintainAspectRatio: false
}

export const dataBar = {
  type: 'horizontalBar',
  options: {
    indexAxis: 'y',
    cornerRadius: 8,
    plugins: {
      crosshair: false,
      datalabels: {display: false},
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          gridLines: {
            display: true,
            lineWidth: 1,
            color: "f1f1f1",
            drawBorder: false,
          },
          ticks: {
            beginAtZero: true,
            stepSize: 100,
            min: 10,
            max: 150,
            padding: 20,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {display: false},
        },
      ],
    },
    legend: {
      position: 'bottom',
    },
  },
  labels: ['50-59', '60-69', '70-79', '80+'],
  datasets: [
    {
      axis: 'y',
      label: 'Patients',
      borderColor: "#1ca35e",
      backgroundColor: 'rgba(28,163,94,0.1)',
      data: [38, 70, 36, 25],
      borderWidth: 2,
    }
  ]
}

export const optionsBar = {
  responsive: true,
  maintainAspectRatio: false
}

