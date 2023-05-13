import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import ProtectedRoute from './components/hocs/ProtectedRoute';
import { useAppSelector } from './redux/hooks';

function App(): JSX.Element {
  const user = useAppSelector((store) => store.user);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route element={<ProtectedRoute isAllowed={user} redirect='/login' />}>
          <Route path='/profile' element={<ProfilePage />} />
        </Route>
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
