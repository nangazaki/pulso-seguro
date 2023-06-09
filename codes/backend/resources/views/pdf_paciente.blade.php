<!DOCTYPE html>
<html lang="pt-pt">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
   @foreach ($paciente as $pacientes)
  <title>(Mês: {{$mesActual}})-Pulso Seguro - diagnosticos - {{$pacientes->name}} {{$pacientes->sobrenome}}</title>
  @endforeach
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
   
  </style>
</head>

<body>
  <div style="margin-bottom: 32px;">
    <img src="{{$data['image']}}" />
    <p>Pulso Seguro</p>
    <p>Instito de Telecomunicações - ITEL</p>
  </div>

   @foreach ($paciente as $pacientes)
  <h1>Paciente: {{$pacientes->name}} {{$pacientes->sobrenome}}</h1>
  @endforeach

  <table>
    <td>Temperatura</td>
    <td>Pulso Cardíaco</td>
    @foreach ($estadoSaude as $estadoSaudes)

    <tr>
      <td>{{$estadoSaudes->temperatura}}</td>
      <td>{{$estadoSaudes->batcardiaco}}</td>
    <tr>
      @endforeach
    <tr>
      <td>Máximo: {{$temperaturaMax}}</td>
      <td>Máximo: {{$batcardiacoMax}}</td>
    <tr> 
    <tr>
      <td>Mínimo: {{$temperaturaMin}}</td>
      <td>Mínimo: {{$batcardiacoMin}}</td>
    <tr> 
    <tr>
      <td>Média: {{$temperaturaTotal}}</td>
      <td>Média: {{$batcardiacoTotal}}</td>
    <tr>  
  </table>
</body>

</html>