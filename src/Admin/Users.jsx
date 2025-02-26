import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'

function Users() {
  return (
    <Box
    sx={{ bgcolor: "#C4D9FF", p: "15px", height: "100vh" }}
  >
     <AppBar position="sticky" sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ color: "black", flexGrow: 1, ml: 3 }}>
            Users
          </Typography>
        </Toolbar>
      </AppBar>
  </Box>
  )
}

export default Users