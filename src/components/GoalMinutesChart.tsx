import Chart from 'chart.js/auto'
import { BarChart3 } from 'lucide-react'
import { Bar } from 'react-chartjs-2'

export function GoalMinutesChart({ goalMinutes }: any) {
  console.log(goalMinutes)

  if (!goalMinutes) {
    return null
  }

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

  return (
    <div className="flex flex-col gap-4">
      <h2 className="flex items-center font-alt text-xl">
        <BarChart3 className="mr-2" size={28} /> Gols por minutos
      </h2>

      <div className="rounded-lg bg-neutral-200 p-2 shadow">
        <Bar data={chartData} />
      </div>
    </div>
  )
}
