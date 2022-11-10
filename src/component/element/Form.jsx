import React from 'react'
import { TextField,Box } from '@mui/material'
import Button from './Button';


export default function Form({title, setEmail, setPassword, handleAction }) {
  return (
    <div  className=' text-center  my-5'>
         <div className=' my-5'>
         <h1 className='fw-bold display-1 text-danger'>
          {title}
          </h1>
        
         </div>
         <Box 
        component="form"
        sx={{
          "& > :not(style)": { m:60, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
   

        <div className="card  my-5 rounded-5  bg-info"  style={{width: '28rem', height:'22rem'}}>

          <div className="cad-body text-center">

          <TextField className='  bg-white  mt-5 '
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          onChange={(e) => setEmail (e.target.value)}

        />
        <br />
        <TextField className=' bg-white  border-none my-4'
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}

        />
        <br />
        <Button className="btn btn-danger rounded-3 my-4" title={title } handleAction={handleAction} />
          </div>
        
      </div>
      </Box>
    </div>
  )
}

