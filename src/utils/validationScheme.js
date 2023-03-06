import * as Yup from 'yup';

export const postSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Please insert at least 2 characters')
    .max(50, 'Please insert maximum 50 characters')
    .required('Title is Required'),
  content: Yup.string()
    .min(2, 'Please insert at least 2 characters')
    .max(50, 'Please insert maximum 50 characters')
    .required('Content is Required'),
});
