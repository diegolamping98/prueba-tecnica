import { AppBar, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import {  useNavigate } from 'react-router-dom';


import React from 'react'

export const NavBar = () => {
 
    const navigate = useNavigate()
 
    return (
    <AppBar 
    position='fixed'

    >
    <Toolbar  className='primary'>
       

        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
            <Typography variant='h6' noWrap component='div'> CRUD Empleados </Typography>
            <Button variant="contained" color="success"
            
            onClick={() => navigate("/nuevo")}
            >Nuevo Empleado
            </Button>
          
            
        </Grid>
            <Button variant="contained" color="info"
            onClick={() => navigate("/api")}
            >
              
              API
            </Button>


    </Toolbar>
</AppBar>
  )
}
