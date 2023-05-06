import { estatsStore } from "@/store/estatsStore";

// async function main() {

// }



async function getRandomInt() {
  const Estatisticas = estatsStore()
  await Estatisticas.PegarDados

  const data = Estatisticas.estatisticas[3]

  return data
}

export const randomData = () => ({
  labels: [
    'January',
    'February',
    'MArco',
    'Abril'
  ],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#f87979',
      data: getRandomInt()
    }
  ]
})

export const options = {
  responsive: true,
  maintainAspectRatio: false
}