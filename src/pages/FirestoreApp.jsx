import { Paper } from '@mui/material';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deletePostWithFireStore,
  fetchPostsWithFireStore,
} from '../store/postSlice';
import Loading from '../hoc/Loading';
import PostList from '../components/Posts/PostList';
const FirestoreApp = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsWithFireStore());
  }, [dispatch]);
  const { records, isLoading } = useSelector((state) => state.posts);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const deleteRecord = useCallback(
    (id) => {
      dispatch(deletePostWithFireStore(id));
    },
    [dispatch]
  );
  return (
    <Paper sx={{ padding: 2 }}>
      <Loading isLoading={isLoading}>
        <PostList
          records={records}
          isLoggedIn={isLoggedIn}
          deleteRecord={deleteRecord}
        />
      </Loading>
    </Paper>
  );
};
export default FirestoreApp;
