// Types
import { ChartData, ChartDataset } from "chart.js";

export const chartDataset: ChartDataset = {
  label: '# of Votes',
  data: [12, 19, 3, 5, 2, 3],
  borderWidth: 1,
  backgroundColor: "blue",
  fill: false,
}

export const chartData: ChartData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [chartDataset]
}
