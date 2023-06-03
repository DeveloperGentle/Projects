import React,{ useState } from 'react'

import {Routes,Route,Link} from 'react-router-dom';
import { Typography } from '@material-ui/core'
import { AppBar, Box, Menu, Avatar, Toolbar, MenuItem, Container, IconButton, Button, Tooltip } from "@mui/material"
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome';
// faHome,faClock, faCancel, faCheckCircle, faArrowDown, faArrowUp, faBook,
import {faBars} from '@fortawesome/free-solid-svg-icons';


const Navbar = ({user,setUser}) => {
 const [anchorElNav, setAnchorElNav] = React.useState(null);
const [anchorElUser, setAnchorElUser] = React.useState(null);

const handleOpenNavMenu = (event) => {
  setAnchorElNav(event.currentTarget);
};
const handleOpenUserMenu = (event) => {
  setAnchorElUser(event.currentTarget);
};

const handleCloseNavMenu = () => {
  setAnchorElNav(null);
};

const handleCloseUserMenu = () => {
  setAnchorElUser(null);
};

  return (
   <AppBar position="static" style={{background: "#EC5252"}}>
<Container maxWidth="xl">
  <Toolbar>
    
    
  {/* <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
      
      
    </Box> */}
    <Link to="/all"><h1 style={{fontSize:"1.2em", color: "white"}}>Projectory</h1></Link>
    

    

    <Box sx={{ flexGrow: 0, ml: {lg: 135, md: 95, xs: 30}}}>
      
        {user ? <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt={user.result.given_name ? user.result.given_name.charAt(0)  : user.result.name.charAt(0)} src="/static/images/avatar/2.jpg" />
        </IconButton> : <Link to="/auth"><Button variant="contained" endIcon='' size="large" style={{background: "#EC5252", padding: "6px 15px", color: "white"}}>
 <div>Sign In</div>
</Button></Link>}
      
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        
          <MenuItem onClick={handleCloseUserMenu}>
            {/* <Typography textAlign="center">{setting}</Typography> */}
            <div onClick={() => { 
             localStorage.clear()
             setUser(null)
            }}>Log out</div>

          </MenuItem>

        <Link to="/stats"><MenuItem onClick={handleCloseUserMenu}>
          <div>Stats</div>
        </MenuItem></Link>
        <Link to="/all"><MenuItem onClick={handleCloseUserMenu}>
          <div>Projects</div>
        </MenuItem></Link>
      </Menu>
    </Box>
  </Toolbar>
</Container>
</AppBar>
  )
}

export default Navbar