import React from 'react'
import { TextField,Box } from '@mui/material'
import Button from './Button';


export default function Form({title, setEmail, setPassword, handleAction }) {
  return (
    <div  className=' text-center  my-5'>
         <div className='text-center my-5'>
         <h1>
          {title}
          </h1>
        
         </div>
         <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          onChange={(e) => setEmail (e.target.value)}

        />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}

        />
        <br />
        <Button title={title } handleAction={handleAction} />
      </Box>
    </div>
  )
}

