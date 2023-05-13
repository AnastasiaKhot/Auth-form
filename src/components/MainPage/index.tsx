import { Container, Typography } from '@mui/material';
import React from 'react';

export default function MainPage(): JSX.Element {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant='h5' gutterBottom>
        Информация с главной страницы
      </Typography>
    </Container>
  );
}
