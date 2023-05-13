import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { setUser } from '../../redux/slices/userSlice';

interface LoginState {
  login: string;
  password: string;
}

export default function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [values, setValues] = useState<LoginState>({
    login: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (values.password === '12345' && values.login === 'Admin') {
      localStorage.setItem('loggedIn', 'true');
      dispatch(setUser(true));
      navigate('/profile');
    } else {
      alert('Имя пользователя или пароль введены не верно');
    }
  };

  return (
    <Box
      component='form'
      sx={{
        mt: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      onSubmit={submitHandler}
    >
      <Typography variant='h5' component='h1' mb={3}>
        Авторизация
      </Typography>
      <TextField
        id='outlined-basic'
        label='Логин'
        name='login'
        variant='outlined'
        value={values.login}
        onChange={handleChange}
      />
      <TextField
        id='outlined-password-input'
        label='Пароль'
        name='password'
        type='password'
        value={values.password}
        onChange={handleChange}
      />
      <Button
        type='submit'
        variant='contained'
        sx={{
          mt: 3,
          bgcolor: '#439639',
          '&:active': {
            bgcolor: '#7DC244',
          },
          '&:hover': {
            bgcolor: '#7DC244',
          },
        }}
      >
        Войти
      </Button>
    </Box>
  );
}
