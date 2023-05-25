<!DOCTYPE html>
<html>
<head>
  <title>Gráfico de Barras</title>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <style>
    canvas {
      display: block;
      margin: 20px auto;
      max-width: 800px;
    }
  </style>
</head>
<body>
  <canvas id="barChart"></canvas>

  <script>
    // Dados do gráfico
    var data = {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
      datasets: [{
        label: 'Vendas',
        data: [120, 200, 150, 80, 220],
        backgroundColor: 'rgba(66, 134, 244, 0.6)',
        borderColor: 'rgba(66, 134, 244, 1)',
        borderWidth: 1
      }]
    };

    // Configurações do gráfico
    var options = {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    };

    // Criação do gráfico de barras
    var ctx = document.getElementById('barChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });
  </script>
</body>
</html>