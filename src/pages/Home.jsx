import { Paper } from '@mui/material';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, deletePost } from '../store/postSlice';
import PostList from '../components/Posts/PostList';
import Loading from '../hoc/Loading';
const Home = () => {
  const dispatch = useDispatch();
  const { records, isLoading, error } = useSelector((state) => state.posts);
  const { isLoggedIn } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  const deleteRecord = useCallback(
    (id) => {
      dispatch(deletePost(id));
    },
    [dispatch]
  );

  return (
    <Paper
      sx={{
        padding: 2,
      }}>
      <Loading
        isLoading={isLoading}
        error={error}>
        <PostList
          records={records}
          deleteRecord={deleteRecord}
          isLoggedIn={isLoggedIn}
        />
      </Loading>
    </Paper>
  );
};
export default Home;
