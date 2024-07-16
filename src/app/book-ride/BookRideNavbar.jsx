'use client'
import React, { useState } from 'react'
import { Avatar, IconButton, Toolbar, List ,Typography, Drawer } from '@mui/material';
import {Box} from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import {Button} from '@mui/material';
import DrawerList from './DrawerList';
 
const BookRideNavbar = () => {
    const [sidebarOpen,setSideBarOpen]=useState(false);

    const handleSidebarClose=() => setSideBarOpen(false);

    const handleSidebarOpen=() => setSideBarOpen(true);
    return (
        <Box className=''>
            <AppBar position="static" sx={{backgroundColor:'#120E43'}} className="">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleSidebarOpen}>
                            
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Green Cabs
                    </Typography>
                    {
                        true? (
                            <Avatar 
                            className="coursor-pointer"
                            // onClock={() => Router.push("/profile")}
                            sx={{bgcolor: deepOrange[500] }}
                            >
                                A
                            </Avatar>
                        ) : (
                            <Button color="inherit" >
                                Login
                            </Button>
                        )}
                </Toolbar>
            </AppBar>
            <Drawer anchor={"left"} open={sidebarOpen} onClose={handleSidebarClose}>
                {DrawerList("left")}
            </Drawer>
        </Box>
    )
}

export default BookRideNavbar
