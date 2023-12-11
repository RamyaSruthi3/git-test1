import React, { useEffect, useState} from "react";
import { Box,  } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {getAllBudget} from "../helpers/api-communicator";
import Hero from "../components/Hero";
import DonutChart from "../components/DonutChart";
import PieChart from "../components/PieChart";
import BarChart from "../components/BarChart";
import AddBudget from "../components/AddBudget";
import { toast } from "react-hot-toast";




const Dashboard = () => {

  const [budget,setBudget]= useState([])
  const[renderCharts, setRenderCharts]=useState(true)
  
  const navigate = useNavigate();
  const auth = useAuth();
  

  useEffect(()=>{
    if (renderCharts) {
      loadData()
      setRenderCharts(false)
    } 
  },[renderCharts])
  useEffect(() => {
    if (!auth?.user) {
      return navigate("/login");
    }
  }, [auth]);


function loadData() {
     let label =[]
     let _value = []
     const _data = []
    toast.loading("Loading Budget", { id: "loadbudget" });
      getAllBudget()
        .then((data) => {
          
          for(const item of data.budget){
             _data.push(item.data);
          }
     
       const result = _data.reduce((acc, curr) => {
        for (let key in curr) {
          if (Object.keys(acc).includes(key)) { 
            acc[key] =  parseFloat(acc[key])
           curr[key]  = parseFloat (curr[key]);
            acc[key] += (curr[key]);
          } else { 
             acc[key] =  parseFloat(acc[key])
            curr[key]  = parseFloat (curr[key]);
            acc[key] = curr[key];
          }
        }
        return acc; 
        }, {});
     
        for (const [key, value] of Object.entries(result)) {
          label.push(key) 
          _value.push(value)
        }
        setBudget([label,_value])
        toast.success("Successfully loaded Budget", { id: "loadbudget" });
        })
        .catch((err) => {
          console.log(err);
          toast.error("Loading Failed", { id: "loadbudget" });
        });
}
    return (
    <Box>
      <Hero />
      <Box
        sx={{
          width: "100%",
          height: "100%",
          mt: 3,
          gap: 3,
        }}
      >
          <Box><AddBudget renderCharts={setRenderCharts} /></Box>
        {budget?.length > 0 ? <>
         <Box sx={{ margin:'auto', width:'375px'}} >
             <h1>Pie Chart</h1>
             <PieChart data={budget} />
          </Box>
          <Box sx={{  textAlign:"center" }}>
            <h1>Donut Pie Chart with Polylines and Labels</h1>
            <DonutChart budget={budget} height={400} width={700}  />
          </Box>
          <Box  sx={{ margin:'auto', width:'65%',textAlign:"center"}}>
            <BarChart data={budget}/>
          </Box>
        </> : <></>}
  
      </Box>
    </Box>
  );

};

export default Dashboard;




