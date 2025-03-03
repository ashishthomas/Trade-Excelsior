import { ArrowBackIosNew } from '@mui/icons-material'
import { AppBar, Box, Button, TextField, Toolbar, Typography } from '@mui/material'
import React from 'react'

function Myprofile() {
  return (
    <>
    <Box > 
       <AppBar >
        <Toolbar sx={{display:"flex", justifyContent:"space-between", bgcolor:"white"}} color="inherit" >
            <Typography  variant='h6' color='black'>Excelsior</Typography>
            <Button variant='contained'> <ArrowBackIosNew /> Dashboard</Button>
        </Toolbar>
       </AppBar>
       <br /><br /><br /> <br />
       <Box bgcolor="whitesmoke">
            <Box width="35%" sx={{ml:7,mt:2, bgcolor:"white"}}>
                
                <Typography variant='h6'>Subscription</Typography>
                <hr />
                <Typography variant='p'><b>License :GOLD</b></Typography><br />
                <Typography variant='p'>Member Since : 2024-10-28</Typography><br />
                <Typography variant='p'>Subscription Start: 2024-10-28</Typography><br />
                <Typography variant='p' sx={{mb:3}}>Subscription End: 2024-11-20</Typography>

                <TextField sx={{mb:3}} fullWidth id="insta" label="instagram URL" variant="outlined" placeholder="https://example.com" />

            </Box>

       </Box>


    </Box>
    </>
  )
}

export default Myprofile