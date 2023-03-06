import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
const Layout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};
export default Layout;
