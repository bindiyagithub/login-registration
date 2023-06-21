import React from 'react';
import { useFormik } from 'formik';

import { TextField , Button } from '@mui/material';
import loginField from '../fields/LoginField';


import { LoginSchema } from '../validations/LoginSchema'
import axios from 'axios';
import { useNavigate } from 'react-router';


export default function LoginForm2() {

     const navigate = useNavigate();
  const {values ,handleChange ,handleBlur , errors ,touched, handleSubmit} =  
    
    useFormik(
    {
     initialValues : loginField,
     validationSchema : LoginSchema,
     
      onSubmit : async(values)=>{   
        let response = await axios.post("https://real-pear-fly-kilt.cyclic.app/accounts/authenticate" , values)
        .then(y=>
       {
           
             console.log(y.data);
             //localStorage.setItem("token" , JSON.stringify(y.data));   // it store all data in localstorage
             localStorage.setItem("token" , y.data.jwtToken)  // it store only token into localstorage
             navigate('/DisplayData');
              
       })
         .catch((error)=>{
             console.error("Login failed!")
         })
          
            
     
      }                    
  })
  return (
    <div>
       <form onSubmit={handleSubmit} autoComplete='false'>
        <TextField sx={{mb:2}}
          fullWidth
          id="email"
          name="email"
          
          label="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />

      <TextField sx={{mb:2}}
          fullWidth
          id="password"
          name="password"
          type='password'
          label="Password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
      />

        <Button 
        color="info" 
        variant="contained" 
        fullWidth type="submit">
          Submit
        </Button>
       </form>
    </div>
  )
}
