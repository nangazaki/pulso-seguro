<!DOCTYPE html>
<html lang="pt-pt">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Pulso Seguro - Lista de Pacientes</title>
  <style>
    table,
    td,
    th {
      border: 1px solid #ddd;
      text-align: left;
    }

    table {
      border-collapse: collapse;
      width: 100%;
    }

    th,
    td {
      padding: 6px;
    }

    #Gpaciente {
      width: 100%;
      border: 1px solid;
    }

    #p1 {
      width: 50px;
      height: 10px;
      border: 1px solid red;
    }

    #p2 {
      width: 50px;
      height: 10px;
      border: 1px solid;
    }

    #p {
      width: 50px;
      height: 10px;

      background: black;
      border: 1px solid;
    }
  </style>
</head>

<body>
  <div style="margin-bottom: 32px;">
    <img src="/pulso.png" />
    <p>Pulso Seguro</p>
    <p>Instito de Telecomunicações - ITEL</p>
  </div>

  <h1>Estatistica</h1>
  <h2>Pacientes cadastrados</h2>
  <p>Nesse momento existe {{$statistics[4]}} pacientes cadastrados, onde {{$statistics[1]['pacientes-femininos']}} são mulheres e {{$statistics[1]['pacientes-masculinos']}} são homens.</p>
  <h3>Homem</h3>
  <p id="p"></p>
  <div id='Gpaciente'>
    <p id="p1"></p>
    <p id="p2"></p>
  </div>
</body>

</html>