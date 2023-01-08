

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Stack } from '@mui/material';
import styled from 'styled-components';




export default function Menu() {
  return (
    
      <AppBar color='inherit' elevation={0} position="sticky">
        <Toolbar style={{paddingBottom : "0.7rem"}}  sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Stack direction="row" spacing={4}>
        <Button color="inherit">Collections</Button>
        <Button color="inherit">most popular</Button>
        </Stack>


          <Typography variant="h6" style={{letterSpacing : "5px" , fontWeight : "bold"}} component="div" align='center' noWrap sx={{ flex: 1 }}>
            BLOGIN
          </Typography>
          <Stack direction="row" spacing={4}>

            <Button color="inherit">my account</Button>
            
            <IconButton style={    {width : "42px" , height : "42px" , backgroundColor : "#000" , borderRadius : "0" , padding : "0" }
}>
                <SearchIcon style={{color : "#fff"}} />
            </IconButton>

          </Stack>

          


        </Toolbar>
      </AppBar>
   
  );
}