import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPost, fetchPostWithFireStore } from '../store/postSlice';

const usePostDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { isLoading, error, record } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(fetchPostWithFireStore(id));
  }, [dispatch, id]);
  return { isLoading, error, record };
};
export default usePostDetails;
