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
import Button from '@mui/material/Button';
import eis from './EIS.png'
import { Fab, makeStyles } from '@mui/material';

const drawerWidth = 240;
const navItems = ['About Us', 'Our Services', 'Contact Sales'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        EIS
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{background: 'white', color:'black', height: '80px'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Box sx={{ marginTop: '15px', marginLeft: {sm: '0px', md: '100px', lg: '200px', xl: '300px'} }}>
                <a href='#'>
                    <img src={eis} alt="" draggable={false} />
                </a>
            </Box>
          </Typography>
          
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {/*navItems.map((item) => (
              <Button key={item} sx={{ color: '#315EA0', fontWeight: '600', fontSize:"1.4rem", borderRadius: '28' }}>
                {item}
              </Button>
            ))*/}
            <Fab variant="extended" href="#" disableElevation sx={{backgroundColor: '#fff', color: '#314EA0', fontSize: '1rem', textTransform: 'capitalize', fontWeight: '550', boxShadow: 'none', width: {sm: '110px', md: '140px'}, marginRight: {sm: '5px', md:'7px', lg: '25px'}, "&:hover":{backgroundColor: '#EDF1F6'}, "&:active": {boxShadow: '0'}}}>
                About Us
            </Fab>
            <Fab variant="extended" href="#" disableElevation sx={{backgroundColor: '#fff', color: '#314EA0', fontSize: '1rem', textTransform: 'capitalize', fontWeight: '550', boxShadow: 'none', width: {sm: '140px',md: '160px'}, marginRight: {sm: '5px', md:'7px', lg: '25px'}, "&:hover":{backgroundColor: '#EDF1F6'}, "&:active": {boxShadow: '0'}}}>
                Our Services
            </Fab>
            <Fab variant="extended" href="#" disableElevation sx={{backgroundColor: '#fff', color: '#314EA0', fontSize: '1rem', textTransform: 'capitalize', fontWeight: '550', boxShadow: 'none', width: {sm: '150px', md:'180px'}, marginRight: {sm: '-5px',md: '85px', lg: '160px',xl: '310px'}, "&:hover":{backgroundColor: '#EDF1F6'}, "&:active": {boxShadow: '0'}}}>
                Contact Sales
            </Fab>
          </Box>
          
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
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
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
