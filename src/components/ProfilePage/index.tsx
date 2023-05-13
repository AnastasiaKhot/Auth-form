import { Container, Typography } from '@mui/material';
import React from 'react';

export default function ProfilePage(): JSX.Element {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant='h5' gutterBottom>
        Информация о пользователе
      </Typography>
    </Container>
  );
}
