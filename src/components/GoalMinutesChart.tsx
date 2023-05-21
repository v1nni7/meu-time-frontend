import { Chart } from 'chart.js'
import { Bar } from 'react-chartjs-2'

export function GoalMinutesChart({ goalMinutes }: any) {
  Chart.register()

  const labels = Object.keys(goalMinutes)
  const data = Object.values(goalMinutes).map((minute: any) => minute.total)

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Quantidade de Gols',
        data,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  }

  return <Bar data={chartData} />
}
