import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Tooltip,
  Avatar,
  Menu,
  Typography,
  MenuItem,
  IconButton,
  AppBar,
  Box,
  Toolbar,
  Button,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setUser } from '../../redux/slices/userSlice';

export default function Navbar(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((store) => store.user);

  const buttons = ['главная', 'профиль'];
  const links = ['/', '/profile'];

  const clickHandler = (link: string): void => {
    navigate(link);
  };

  const logoutHandler = (): void => {
    localStorage.setItem('loggedIn', 'false');
    dispatch(setUser(false));
    navigate('login');
  };

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' sx={{ bgcolor: '#7DC244' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {buttons.map((button: string) => (
            <Box key={button}>
              <Button
                onClick={() => clickHandler(links[buttons.indexOf(button)])}
                color='inherit'
              >
                {button}
              </Button>
            </Box>
          ))}
          {user ? (
            <Box>
              <Tooltip title='Пользователь'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt='Cat avatar' src='/img/kot.png' />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign='center' onClick={logoutHandler}>
                    Выйти
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Box>
              <Button onClick={() => clickHandler('login')} color='inherit'>
                Войти
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
