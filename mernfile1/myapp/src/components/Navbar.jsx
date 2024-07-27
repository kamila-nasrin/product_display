import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
            <Typography variant='h4' sx={{ flexGrow: 1 }}>Product.in</Typography>&nbsp;&nbsp;&nbsp;
            <Link to='/homes'><Button variant='contained' color='success' style={{ color: 'black',backgroundColor:'white'}}>Home</Button></Link>&nbsp;&nbsp;&nbsp;
            <Link to='/added'><Button variant='contained' color='success' style={{ color: 'black',backgroundColor:'white'}}>Add</Button></Link>&nbsp;&nbsp;&nbsp;
            </Toolbar>
        </AppBar>
      
    </div>
  )
}

export default Navbar
