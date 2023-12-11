import React, { useEffect , useState,useRef } from "react";
import 'formdata-polyfill'
import { Box, Typography, Button } from "@mui/material";
import CustomizedInput from "../components/shared/CustomizedInput";
import { toast } from "react-hot-toast";
import {createNewBudget} from "../helpers/api-communicator";

const AddBudget = ({renderCharts}) => {

const [budget,setBudget] = useState([{categoy:"",price: ""}])

  const formRef = useRef(null);
  function addBudget() {
    const addnewCategory = [...budget]
    addnewCategory.push({categoy:"",price: ""})
    setBudget(addnewCategory)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const category = formData.getAll('category') === ""? "category not added" : formData.getAll("category");
    const price = formData.getAll('price')=== ""? 0 : formData.getAll("price");
    const _data ={data:{}} 
    category.map((item , index)=>{
      _data.data[item] = price[index]
    })
    console.log(_data);
    try {  
          toast.loading("Creating Budget", { id: "budget" });
          const data =  await createNewBudget(_data);
          toast.success("Budget Created Successfully", { id: "budget" });
          formRef.current.reset();
          renderCharts(true)
    } catch (error) {
      console.log(error);
      toast.error("Budget Creation Failed", { id: "budget" });
    }
  };

  return (
    <Box width={"100%"} height={"100%"} >
      
        <form
        ref={formRef}
          onSubmit={handleSubmit}
          style={{
            borderRadius: "10px",
            border: "none",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              textAlign="center"
              padding={2}
              fontWeight={600}
             
            >
              Add Budget
             </Typography>
           {budget.map((item , index)=>{
            return(
              <Box key={index}>
                 <CustomizedInput type="text" name="category" label="Category" 
                 />
                 <CustomizedInput type="number" name="price" label="Price" />
            </Box>
            )
           })}
          <Box >
            <Button
              type="button"
              sx={{
                px: 2,
                py: 1,
                mt: 2,
                width: "400px",
                borderRadius: 2,
                bgcolor: "#4d5791",
                color : "white",
                ":hover": {
                  bgcolor: "white",
                  color: "black",
                },
              }}
               onClick={()=>{addBudget()}}
            >
              Add Budget
            </Button>
            <Button
              type="submit"
              sx={{
                px: 2,
                py: 1,
                mt: 2,
                width: "400px",
                borderRadius: 2,
                bgcolor: "#4d5791",
                color : "white",
                ":hover": {
                  bgcolor: "white",
                  color: "black",
                },
              }}
            >
              Save Budget
            </Button>
          </Box>
            
          </Box>
        </form>
      </Box>
  );
};

export default AddBudget;
