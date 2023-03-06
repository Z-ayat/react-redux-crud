import { Box, Button, Typography } from '@mui/material';
import { useNavigate, useRouteError } from 'react-router-dom';
import styles from './styles.module.css';
const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  console.error(error);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        textAlign: 'center',
      }}>
      <div
        id='error-page'
        className={styles.errorPage}>
        <Typography variant='h1'>Oops!</Typography>
        <Typography variant='overline'>
          Sorry, an unexpected error has occurred.
        </Typography>
        <Typography>
          <i>{error.statusText || error.message}</i>
        </Typography>
        <Button
          variant='text'
          onClick={() => navigate('/', { replace: true })}>
          Go Back
        </Button>
      </div>
    </Box>
  );
};
export default ErrorPage;
