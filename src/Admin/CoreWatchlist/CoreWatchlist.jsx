import { Search } from '@mui/icons-material'
import { AppBar, Box, Button, InputAdornment, TextField, Toolbar, Typography } from '@mui/material'
import React from 'react'

function CoreWatchlist() {
  return (
    <Box
      sx={{ backgroundColor: "#C4D9FF", padding: "15px", height: "100vh" }}
    >
      <AppBar position="sticky" sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ color: "black", flexGrow: 1, ml: 3 }}>
            CORE WATCHLIST
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default CoreWatchlist