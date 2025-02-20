import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'

function SuccessStory() {
  return (
    <Box
      sx={{ backgroundColor: "#C4D9FF", padding: "15px", height: "100vh" }}
    >
       <AppBar position="sticky" sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ color: "black", flexGrow: 1, ml: 3 }}>
            Success
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default SuccessStory