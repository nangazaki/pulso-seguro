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
  </style>
</head>

<body>
  <div style="margin-bottom: 32px;">
    <img src="{{$data['image']}}" />
    <p>Pulso Seguro</p>
    <p>Instito de Telecomunicações - ITEL</p>
  </div>

  <h1>Lista de Pacientes</h1>

  <table>
    <td>Nome</td>
    <td>Telefone</td>
    <td>E-mail</td>
    <td>Província</td>
    <td>Doctor</td>
    @foreach ($paciente as $pacientes)
    @php
    $variavel = $pacientes->user_id;
    $variavel = intval($variavel);
    $variavel = $variavel-1
    @endphp

    <tr>
      <td>{{$pacientes->name}} {{$pacientes->sobrenome}}</td>
      <td>{{$pacientes->telefone}}</td>
      <td>{{$pacientes->email}}</td>
      <td>{{$pacientes->provincia}}</td>
      <td>{{$medico[$variavel]->name}} {{$medico[$variavel]->sobrenome}} </td>
    <tr>
      @endforeach
  </table>
</body>

</html>