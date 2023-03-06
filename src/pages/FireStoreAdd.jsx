import {
  Button,
  Paper,
  Box,
  TextField,
  FormControl,
  FormHelperText,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { insertPost, insertPostWithFireStore } from '../store/postSlice';
import { useNavigate } from 'react-router-dom';
import Loading from '../hoc/Loading';
import withGuard from '../hoc/withGuard';
import { useFormik } from 'formik';
import { postSchema } from '../utils/validationScheme';
const FireStoreAdd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.posts);

  const formScheme = postSchema;

  const formik = useFormik({
    initialValues: {
      title: '',
      content: '',
    },
    validationSchema: formScheme,
    onSubmit: (values) => {
      dispatch(
        insertPostWithFireStore({
          title: values.title,
          content: values.content,
        })
      )
        .unwrap()
        .then(() => {
          navigate('/firestore');
        })
        .catch((err) => console.log(err));
    },
  });
  return (
    <Paper
      sx={{
        padding: 3,
      }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <FormControl
          error
          variant='standard'>
          <TextField
            label='Post Title'
            variant='standard'
            value={formik.values.title}
            name='title'
            onChange={formik.handleChange}
          />
          {formik.errors.title && formik.touched.title ? (
            <FormHelperText id='component-error-text'>
              {formik.errors.title}
            </FormHelperText>
          ) : null}
        </FormControl>
        <FormControl
          error
          variant='standard'>
          <TextField
            label='Post Content'
            multiline
            rows={4}
            name='content'
            value={formik.values.content}
            onChange={formik.handleChange}
            variant='standard'
          />
          {formik.errors.content && formik.touched.content ? (
            <FormHelperText id='component-error-text'>
              {formik.errors.content}
            </FormHelperText>
          ) : null}
        </FormControl>
        <Box>
          <Loading
            isLoading={isLoading}
            error={error}>
            <Button
              disabled={isLoading}
              variant='contained'
              onClick={formik.handleSubmit}>
              Submit
            </Button>
          </Loading>
        </Box>
      </Box>
    </Paper>
  );
};
export default withGuard(FireStoreAdd);
