import React, { useState } from 'react';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Container,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PublicIcon from '@mui/icons-material/Public';
import { Link as RouterLink } from 'react-router';

// Menu items for navigation
const navItems = [
  { name: 'Khái Niệm', path: '/concepts' },
  { name: 'Thách Thức', path: '/challenges' },
  { name: 'Giải Pháp', path: '/solutions' },
  { name: 'Thành Tựu', path: '/achievements' },
  { name: 'Tài Liệu', path: '/references' },
];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <PublicIcon sx={{ mr: 1 }} />
        BIÊN GIỚI MỀM
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton 
              sx={{ textAlign: 'center' }}
              component={RouterLink}
              to={item.path}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="static" 
        elevation={2} 
        sx={{
          background: 'linear-gradient(90deg, #d32f2f 0%, #9a0007 100%)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar>
            {isMobile && (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            )}
            
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{ 
                flexGrow: 1, 
                textDecoration: 'none', 
                color: 'inherit',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <PublicIcon sx={{ mr: 1 }} />
              BIÊN GIỚI MỀM & ĐỘC LẬP TỰ CHỦ
            </Typography>
            
            {!isMobile && (
              <Box sx={{ display: 'flex' }}>
                {navItems.map((item) => (
                  <Button 
                    key={item.name} 
                    component={RouterLink}
                    to={item.path}
                    sx={{ 
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      }
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      
      {/* Mobile drawer */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better mobile performance
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};