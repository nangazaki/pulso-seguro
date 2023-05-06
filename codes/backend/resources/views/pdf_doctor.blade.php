<!DOCTYPE html>
<html lang="pt-pt">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Pulso Seguro - Lista de Doctores</title>
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
    <img src="/pulso.png" />
    <p>Pulso Seguro</p>
    <p>Instito de Telecomunicações - ITEL</p>
  </div>

  <h1>Lista de Doctores</h1>

  <table>
    <td>Nome</td>
    <td>Sobrenome</td>
    <td>Telefone</td>
    <td>E-mail</td>
    <td>Usuário</td>
    <td>Província</td>
    @foreach ($medico as $medico)
    <tr>
      <td>{{$medico->name}}</td>
      <td>{{$medico->sobrenome}}</td>
      <td>{{$medico->telefone}}</td>
      <td>{{$medico->email}}</td>
      <td>{{$medico->usuario}}</td>
      <td>{{$medico->provincia}}</td>
    <tr>
      @endforeach
  </table>
</body>

</html>