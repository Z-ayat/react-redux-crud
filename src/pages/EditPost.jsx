import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Paper,
  TextField,
} from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { cleanRecord, editPost } from '../store/postSlice';
import Loading from '../hoc/Loading';
import usePostDetails from '../hooks/use-post-details';
import { useNavigate } from 'react-router-dom';
import withGuard from '../hoc/withGuard';
import { postSchema } from '../utils/validationScheme';
import { useFormik } from 'formik';
const EditPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, error, record } = usePostDetails();

  useEffect(() => {
    return () => {
      dispatch(cleanRecord());
    };
  }, [dispatch]);

  const formScheme = postSchema;

  const formik = useFormik({
    initialValues: {
      title: record ? record?.title : '',
      content: record ? record?.content : '',
    },
    enableReinitialize: true,
    validationSchema: formScheme,
    onSubmit: (values) => {
      dispatch(
        editPost({
          id: record.id,
          title: values.title,
          content: values.content,
        })
      )
        .unwrap()
        .then(() => navigate('/'));
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
            name='title'
            value={formik.values.title}
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
export default withGuard(EditPost);
