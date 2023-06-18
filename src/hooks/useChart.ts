// Dependencies
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';

// Types
import { ChartData, ChartOptions, ChartDataset } from 'chart.js';

// Chart Utils
import { chartOptions } from "@/utils/charts/options";
import { chartDataset, chartData } from '@/utils/charts/data';

/**
 * @author #Dev.Youssef
 * @description This hook used to control chart ( data, options, ...)
 * @documentation  https://www.chartjs.org/docs/latest/
 */
const useChart = () => {
  const defaultOptions: ChartOptions = chartOptions;
  const defaultDataset: ChartDataset = chartDataset;
  const defaultChartData: ChartData = chartData;

  // This Function Used To avoid CategoryScale Error ( IMPORTANT )
  Chart.register(CategoryScale);

  /** 
   * @desc This Function Used To Create Chart Data Object
   * @param { ChartData } data
   * @default chartData
   * @return { ChartData }
   */
  const createDataObject = (data: ChartData = chartData): ChartData => data;

  /** 
   * @desc This Function Used To Create Chart Options.
   * @param { ChartOptions } options
   * @default chartOptions
   * @return ChartOptions 
   */
  const createOptionsObject = (options: ChartOptions = chartOptions): ChartOptions => options;

  /** 
   * @desc This Function Used To Create a Dataset Object.
   * @param  { ChartDataset } dataset
   * @default chartDataset
   * @return ChartDataset 
   */
  const createDatasetObject = (dataset: ChartDataset = chartDataset): ChartDataset => dataset;

  /** 
   * @desc This Function Used To Create Array Of Dataset Objects.
   * @param { ChartDataset[] } datasets
   * @return ChartDataset[] 
  */
  const createDatasetsArray = (datasets: ChartDataset[]): ChartDataset[] => datasets;

  return {
    defaultOptions,
    defaultDataset,
    defaultChartData,
    createDataObject,
    createOptionsObject,
    createDatasetObject,
    createDatasetsArray
  }
}

export default useChart;
