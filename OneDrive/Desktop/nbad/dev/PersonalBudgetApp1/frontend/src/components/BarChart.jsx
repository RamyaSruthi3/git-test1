import { useState ,useEffect} from "react";
import { Box,  } from "@mui/material";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const BarChart = ({data}) => {
const [chartData, setChartData] = useState({
      labels: [],
    datasets: [
      {
        label: [],
       
      data: [],
      backgroundColor: [],
      
      },
    ],
  });

useEffect(()=>{
setChartData({
      labels: data[0],
    datasets: [
      {
        label: data[0],
        borderWidth: 1,
      data: data[1],
      backgroundColor: ['orangered','lightgreen','purple','fuchsia','cyan','gold','skyblue','yellow','green'],
      
      },
    ],
  })
},[data])



  const options = {
    scales: {
      x: {
        type: 'category',
      },
      y: {
        type: 'linear',
        beginAtZero: true,
      },
    },
     plugins:{
          legend: {
                display:false,
                }}
        
  };

  return (
    <Box  >
      <h2>Bar Chart </h2>
      <Bar
        data={chartData} 
        options={options}
      />
    </Box>
  );
};

export default BarChart;