import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const PieChart = ({data})=>{
  const [chartData,setChartData] = useState(    {
  "labels" : [],
  "datasets": [
    {
      data: [],
      backgroundColor: [],
    },]
})
useEffect(()=>{
  setChartData(
    {
  "labels" : data[0],
  "datasets": [
    {
      data: data[1],
      backgroundColor: ['orangered','lightgreen','purple','fuchsia','cyan','gold','skyblue','yellow','green'],
    },]
}
  )
},[data])
  const options = {
};
  return <Pie data ={chartData} options={options}></Pie>
}

export default PieChart;