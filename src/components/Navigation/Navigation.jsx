import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';

const Navigation = () => {
  const { navLink } = styles;

  return (
    <nav>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingY: 3,
          gap: 3,
        }}>
        <Box sx={{ gap: 3, display: 'flex' }}>
          <NavLink
            to='/'
            end
            className={navLink}>
            Home
          </NavLink>
          <NavLink
            to='add-post'
            className={navLink}>
            Add Post
          </NavLink>
          <NavLink
            to='/firestore'
            end
            className={navLink}>
            FireStore App
          </NavLink>
          <NavLink
            to='/firestore/add'
            className={navLink}>
            FireStore Add
          </NavLink>
        </Box>
        <NavLink
          to='/login'
          className={navLink}>
          Login
        </NavLink>
      </Box>
    </nav>
  );
};
export default Navigation;
