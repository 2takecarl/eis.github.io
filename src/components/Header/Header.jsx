import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ecs from './logo.png'
import { Fab, makeStyles, Slide, useScrollTrigger } from '@mui/material';
import { Link } from 'react-router-dom';

const drawerWidth = 240;
const navItems = ['About Us', 'Our Services', 'Contact Sales'];


function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link to='/'>
          <img src={ecs} alt="" draggable={false} width="150px" height="50px" />
        </Link>
      </Typography>
      <Divider />
      <List>
        {/*{navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
        </ListItem>
        ))}*/}
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Fab variant="extended" sx={{fontFamily: `"Source Sans Pro", sans-serif`, backgroundColor: '#fff', color: '#315EA0', fontSize: '1.25rem', textTransform: 'capitalize', fontWeight: '550', boxShadow: 'none', width: {sm: '110px', md: '140px'}, marginRight: {sm: '5px', md:'7px', lg: '25px'}, "&:hover":{backgroundColor: '#EDF1F6'}, "&:active": {boxShadow: '0'}}}>
                About Us
            </Fab>
            <Fab variant="extended" sx={{ marginTop: '12px', fontFamily: `"Source Sans Pro", sans-serif`, backgroundColor: '#fff', color: '#315EA0', fontSize: '1.25rem', textTransform: 'capitalize', fontWeight: '550', boxShadow: 'none', width: {sm: '140px',md: '160px'}, marginRight: {sm: '5px', md:'7px', lg: '25px'}, "&:hover":{backgroundColor: '#EDF1F6'}, "&:active": {boxShadow: '0'}}}>
                Our Services
            </Fab>
            <Fab variant="extended" sx={{ marginTop: '12px', fontFamily: `"Source Sans Pro", sans-serif`, backgroundColor: '#fff', color: '#315EA0', fontSize: '1.25rem', textTransform: 'capitalize', fontWeight: '550', boxShadow: 'none', width: {sm: '150px', md:'180px'}, marginRight: {sm: '-5px',md: '85px', lg: '160px',xl: '310px'}, "&:hover":{backgroundColor: '#EDF1F6'}, "&:active": {boxShadow: '0'}}}>
                Contact Sales
            </Fab>
        </Box>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{background: 'white', color:'black', height: '80px'}}>
        <Toolbar>
          <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
            <Box sx={{ display: { sm: 'none', md: 'none'}, textDecoration: 'none', marginTop: '10px', marginLeft: {sm: '0px', md: '98px', lg: '200px', xl: '300px'} }}>
                <Link to="/">
                    <img src={ecs} alt="" draggable={false} width="150px" height="50px" />
                </Link>
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' }, fontSize: 80 }}
            >
              <MenuIcon sx={{fontSize: 40, marginTop: "10px" }} />
            </IconButton>
          </Box>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Box sx={{ display: {xs: 'none', sm: 'none', md: 'block'}, textDecoration: 'none', marginTop: '10px', marginLeft: {sm: '0px', md: '98px', lg: '200px', xl: '300px'} }}>
                <Link to="/">
                    <img src={ecs} alt="" draggable={false} width="175px" height="59px" />
                </Link>
            </Box>
            <Box sx={{ display: {xs: 'none', sm: 'block', md: 'none'}, textDecoration: 'none', marginTop: '10px', marginLeft: {sm: '0px', md: '98px', lg: '200px', xl: '300px'} }}>
                <Link to="/">
                    <img src={ecs} alt="" draggable={false} width="150px" height="50px" />
                </Link>
            </Box>
          </Typography>
          
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {/*navItems.map((item) => (
              <Button key={item} sx={{ color: '#315EA0', fontWeight: '600', fontSize:"1.4rem", borderRadius: '28' }}>
                {item}
              </Button>
            ))*/}
            <Fab variant="extended"  sx={{ fontFamily: `"Source Sans Pro", sans-serif`, backgroundColor: '#fff', color: '#315EA0', fontSize: {sm: '1.1rem',md:'1.25rem'}, textTransform: 'capitalize', fontWeight: '550', boxShadow: 'none', width: {sm: '110px', md: '140px'}, marginRight: {sm: '5px', md:'7px', lg: '25px'}, "&:hover":{backgroundColor: '#EDF1F6'}, "&:active": {boxShadow: '0'}}}>
                  <Link to="/about" style={{textDecoration: "inherit", color: 'inherit'}}>
                    About Us
                  </Link>
            </Fab>
            <Fab variant="extended" sx={{fontFamily: `"Source Sans Pro", sans-serif`, backgroundColor: '#fff', color: '#315EA0', fontSize: {sm: '1.1rem',md:'1.25rem'}, textTransform: 'capitalize', fontWeight: '550', boxShadow: 'none', width: {sm: '140px',md: '160px'}, marginRight: {sm: '5px', md:'7px', lg: '25px'}, "&:hover":{backgroundColor: '#EDF1F6'}, "&:active": {boxShadow: '0'}}}>
                <Link to="/services" style={{textDecoration: "inherit", color: 'inherit'}}>
                  Our Services
                </Link>
            </Fab>
            <Fab variant="extended"  sx={{fontFamily: `"Source Sans Pro", sans-serif`, backgroundColor: '#fff', color: '#315EA0', fontSize: {sm: '1.1rem',md:'1.25rem'}, textTransform: 'capitalize', fontWeight: '550', boxShadow: 'none', width: {sm: '150px', md:'180px'}, marginRight: {sm: '-5px',md: '85px', lg: '160px',xl: '310px'}, "&:hover":{backgroundColor: '#EDF1F6'}, "&:active": {boxShadow: '0'}}}>
              <Link to="/contact" style={{textDecoration: "inherit", color: 'inherit'}}>
                Contact Sales
              </Link>
            </Fab>
          </Box>
          
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
