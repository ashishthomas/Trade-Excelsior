import { Box } from '@mui/material'
import React from 'react'

function AddUser() {

    
  return (
    <Box
    component="form"
    autoComplete='on'
    >
        <TextField id="fname" label="First Name" variant="outlined" />
        <TextField id="lname" label="Last Name" variant="outlined" />
        <TextField id="Occupation" label="Occupation" variant="outlined" />
        <TextField id="PhoneNumber" label="Phone Number" variant="outlined" />
        <TextField id="EmailId" label="Email ID" variant="outlined" />
        <TextField id="Password" label="Password" variant="outlined" />
    </Box>
  )
}

export default AddUser