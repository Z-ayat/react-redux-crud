import { Paper, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Loading from '../hoc/Loading';
import usePostDetails from '../hooks/use-post-details';
import { cleanRecord } from '../store/postSlice';
const FireStoreDetails = () => {
  const dispatch = useDispatch();
  const { isLoading, error, record } = usePostDetails();
  useEffect(() => {
    return () => {
      dispatch(cleanRecord());
    };
  }, [dispatch]);
  return (
    <Paper
      sx={{
        padding: 2,
      }}>
      <Loading
        isLoading={isLoading}
        error={error}>
        <Typography variant='h3'>Title : {record?.title}</Typography>
        <Typography variant='h3'>Content : {record?.content}</Typography>
      </Loading>
    </Paper>
  );
};
export default FireStoreDetails;
