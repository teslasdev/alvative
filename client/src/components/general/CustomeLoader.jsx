import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex',height:10,alignItems:'center',justifyContent:'center',fontSize: 10 }}>
      <CircularProgress sx={{color:'white',width:20, height :20}}/>
    </Box>
  );
}