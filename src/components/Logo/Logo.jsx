import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { VscTerminalBash } from 'react-icons/vsc';

const Logo = () => {
  return (
    <Box
      display={'flex'}
      gap={2}
      alignItems='center'
      my={2}>
      <VscTerminalBash size={70} />
      <Typography
        variant='h2'
        color='Primary'>
        CRUD
      </Typography>
    </Box>
  );
};
export default Logo;
