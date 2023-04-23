<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Paciente;
use App\Models\User;

class StatisticsController extends Controller
{

    public function __construct(Paciente $paciente, User $medico)
    {
        $this->paciente = $paciente;
        $this->medico = $medico;
    }

    public function Estatisticas()
    {

        $statistics = [];

        // Start PacienteTotalMes

        $mes = [0, 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

        $dates = [
            now()->subMonths(3)->startOfMonth(),
            now()->subMonths(2)->startOfMonth(),
            now()->subMonths(1)->startOfMonth(),
            now()->startOfMonth(),
        ];
        $meses = [];
        foreach ($dates as $date) {
            $carbon = \Carbon\Carbon::parse($date);
            $meses[] = $carbon->month;
        }

        $meses[2] = $meses[2] - 1;
        foreach ($meses as $m) {
            $counts[] = $this->paciente->wheremonth('created_at', '=', $m)->count();
        }


        $estatistica = [
            $mes[$meses[0]] => $counts[0],
            $mes[$meses[1]] => $counts[1],
            $mes[$meses[2]] => $counts[2],
            $mes[$meses[3]] => $counts[3]
        ];

        //$estatistica = $meses;

        $statistics[0] = $estatistica;
        //End PacienteTotalMes

        //Start PacienteTotalGenero


        $totalMasculino = $this->paciente->where('genero', 'Masculino')->count();
        $totalFeminino = $this->paciente->where('genero', 'Feminino')->count();

        $estatistica = [
            'pacientes-masculinos' => $totalMasculino,
            'pacientes-femininos' => $totalFeminino
        ];

        $statistics[1] = $estatistica;
        //End PacienteTotalGenero

        //Start MedicoTotalGenero

        $totalMasculino = $this->medico->where('genero', 'Masculino')->count();
        $totalFeminino = $this->medico->where('genero', 'Feminino')->count();

        $estatistica = [
            $totalMasculino,
            $totalFeminino
        ];
        $statistics[2] = $estatistica;

        //End MedicoTotalGenero    


        //Start PacienteTotalFaixaEtaria

        // Array com as faixas etárias
        $faixas_etarias = [
            ['min' => 60, 'max' => 69],
            ['min' => 70, 'max' => 79],
            ['min' => 80, 'max' => 89],
            ['min' => 90, 'max' => 125]
        ];

        // Array para armazenar os resultados
        $counts = [];

        // Loop através das faixas etárias e contar pacientes cadastrados
        foreach ($faixas_etarias as $faixa) {
            // Calcula a data mínima e máxima para a faixa etária atual
            $min_date = now()->subYears($faixa['max']);
            $max_date = now()->subYears($faixa['min'] - 1);

            // Conta o número de pacientes com data de nascimento entre as datas mínima e máxima
            $count = $this->paciente
                ->whereBetween('dataNascimento', [$min_date, $max_date])
                ->count();

            // Adiciona o resultado ao array de contagens
            $counts[] = ['faixa_etaria' => $faixa['min'] . '-' . $faixa['max'], 'total' => $count];
        }
        $totalEtario = [];
        // Imprime os resultados
        foreach ($counts as $item) {
            $totalEtario[] = $item['total'];
        }

        $estatistica = $totalEtario;
        $statistics[3] = $estatistica;


        //End PacienteTotalFaixaEtaria


        //Start PacienteTotal


        $totalPacientes = $this->paciente->count();

        $estatistica = $totalPacientes;
        $statistics[4] = $estatistica;

        //End PacienteTotal

        //Start MedicoTotal

        $medico = $this->medico->all()->where('isAdmin', '0');
        $totalMedicos = $medico->count();

        $estatistica = $totalMedicos;
        $statistics[5] = $estatistica;

        //End MedicoTotal

        //Start UserTotal

        $medico = $this->medico->all();
        $totalMedicos = $medico->count();

        $totalPacientes = Paciente::count();
        $userMedicos = $totalMedicos + $totalPacientes;

        $estatistica = $userMedicos;
        $statistics[6] = $estatistica;

        //End UserTotal

        return response()->json($statistics);
    }
}
