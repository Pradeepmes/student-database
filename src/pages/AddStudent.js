import React4 from "react"
import { useState } from "react"
import { Box, TextField, Button, Typography } from "@mui/material";
//import { Button } from "@mui/material"


import axios from "axios"

export const AddStudent = ()=>{

    const [studentData,setStudentData] = useState({
        name:'',
        email:'',
        dob:'',
        mob:'',
        year:'',

    })

    const changeHandler = (e) => {
        //debugger;
        const { name, value } = e.target;
       
        setStudentData(prevData => ({
            ...prevData,
            [name]: value
        }));
       
    };
    

    const  submitHandler=async(e)=>{
          e.preventDefault()
         // console.log(studentData);
         //debugger;
          try{
            const response = await axios.post("https://jsonplaceholder.typicode.com/posts",setStudentData)
            console.log(response)

          } catch(err){

          }

          
    }

    return (
        <Box 
          component="form" 
          onSubmit={submitHandler} 
          sx={{ 
            maxWidth: 400, 
            mx: "auto", 
            mt: 4, 
            display: "flex", 
            flexDirection: "column", 
            gap: 2, 
            p: 3, 
            boxShadow: 3, 
            borderRadius: 2 
          }}
        >
          <Typography variant="h5" align="center">Add Student</Typography>
    
          <TextField
            label="Name"
            name="name"
            value={studentData.name}
            onChange={changeHandler}
            fullWidth
            
          />
    
          <TextField
            label="Email"
            name="email"
            value={studentData.email}
            onChange={changeHandler}
            fullWidth
            
          />
    
          <TextField
            label="Date of Birth"
            name="dob"
            value={studentData.dob}
            onChange={changeHandler}
            fullWidth
            
          />
    
          <TextField
            label="Mobile Number"
            name="mob"
            value={studentData.mob}
            onChange={changeHandler}
            fullWidth
           
          />
    
          <TextField
            label="Year of Joining"
            name="year"
            value={studentData.year}
            onChange={changeHandler}
            fullWidth
            
          />
    
          <Button variant="contained" type="submit" fullWidth>
            Submit
          </Button>
        </Box>
      );
    };
    