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
 * @github https://github.com/dsc-youssef
 * @facebook https://www.facebook.com/YoussefBibawy1/
 */
const useChart = () => {
  const defaultOptions: ChartOptions<any> = chartOptions;
  const defaultDataset: ChartDataset<any> = chartDataset;
  const defaultChartData: ChartData<any> = chartData;

  // This Function Used To avoid CategoryScale Error ( IMPORTANT )
  Chart.register(CategoryScale);

  /** 
   * @desc This Function Used To Create Chart Data Object
   * @param { ChartData } data
   * @default chartData
   * @return { ChartData }
   */
  const createDataObject = (data: ChartData = chartData): ChartData<any> => data;

  /** 
   * @desc This Function Used To Create Chart Options.
   * @param { ChartOptions } options
   * @default chartOptions
   * @return ChartOptions 
   */
  const createOptionsObject = (options: ChartOptions = chartOptions): ChartOptions<any> => options;

  /** 
   * @desc This Function Used To Create a Dataset Object.
   * @param  { ChartDataset } dataset
   * @default chartDataset
   * @return ChartDataset 
   */
  const createDatasetObject = (dataset: ChartDataset = chartDataset): ChartDataset<any> => dataset;

  /** 
   * @desc This Function Used To Create Array Of Dataset Objects.
   * @param { ChartDataset[] } datasets
   * @return ChartDataset[] 
  */
  const createDatasetsArray = (datasets: ChartDataset[]): ChartDataset<any>[] => datasets;

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
