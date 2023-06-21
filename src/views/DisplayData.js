import React from 'react'
import  { useEffect, useState } from 'react';
import authfetch from './Auth_interceptor';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';


export default function Display_data_InGrid() {

     const columns = [
          { field : 'id'},
          { field : 'title' , headerName : 'Tilte' , width:120},
          { field : 'firstName' , headerName : 'FirstName' , width:120},
       
          { field : 'lastName' , headerName : 'Last Name' , width:120  },
          { field : 'email' , headerName : 'Email_id' , width:120  },

          
          { 
               field: 'delete' , 
               headerName: 'Delete' , 
               width: 90,
               renderCell : (params) =>{
                   return (<Button variant="contained" color='warning'
                   onClick={()=>
                   { } }>Delete</Button>)
               }
               
          },
          
          { 
               field: 'edit' , 
               headerName: 'Edit' , 
               width: 90,
               renderCell : (params) =>{
                   return (<Button variant="contained" 
                   onClick={()=>{}}>Edit</Button>)
               }
               
          }
     ]     

     const [apiData , apisetData] = useState([])

     useEffect(()=>{
          try
          {
                      
               authfetch.get("/accounts") 
               
               .then(y=> {
                    apisetData(y.data);
                    console.log(y.data)
               })
               .catch(y=>{
                    console.log(y);
               
               })      
          
         }

          catch(err)
          {
               //console.log(err);
          }

     },[])

  return (
     <>
     <Typography variant="h4" textAlign="center" className='text-info mt-3'>
          Display Data from Api</Typography>
    <div style={{ height: 700, width: '90%'}} className='ms-5 mt-3'>
            <DataGrid 
             rows ={apiData}
             columns = {columns}
             pageSize = {5}
             rowsPerPageOptions ={[5]}
            checkboxSelection>
            
      </DataGrid>
    </div>
    </>
  )
}
