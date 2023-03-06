import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage.jsx';
import Home from '../pages/Home.jsx';
import Layout from '../pages/Layout.jsx';
import React, { Suspense } from 'react';

const FireStoreDetails = React.lazy(() => import('../pages/FireStoreDetails'));
const FireStoreEdit = React.lazy(() => import('../pages/FireStoreEdit'));
const FirestoreApp = React.lazy(() => import('../pages/FirestoreApp'));
const FireStoreAdd = React.lazy(() => import('../pages/FireStoreAdd'));
const AddPost = React.lazy(() => import('../pages/AddPost'));
const PostDetails = React.lazy(() => import('../pages/PostDetails'));
const Login = React.lazy(() => import('../pages/Login'));
const EditPost = React.lazy(() => import('../pages/EditPost'));

const postParamHandler = ({ params }) => {
  if (isNaN(params.id)) {
    throw new Error(
      'Please check this item if the error occured again ask the developer to maintain it'
    );
  } else {
    // fetch data and return an object with the data
    return { data: 'some data' };
  }
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'post/:id',
        element: (
          <Suspense fallback='Loading Please Wait'>
            <PostDetails />
          </Suspense>
        ),
        loader: postParamHandler,
      },
      {
        path: 'post/:id/edit',

        element: (
          <Suspense fallback='Loading Please Wait'>
            <EditPost />
          </Suspense>
        ),
        loader: postParamHandler,
      },
      {
        path: 'add-post',
        element: (
          <Suspense fallback='Loading Please Wait'>
            <AddPost />
          </Suspense>
        ),
      },
      {
        path: 'login',
        element: (
          <Suspense fallback='Loading Please Wait'>
            <Login />
          </Suspense>
        ),
      },
      {
        path: 'firestore',
        element: (
          <Suspense fallback='Loading Please Wait'>
            <FirestoreApp />
          </Suspense>
        ),
      },
      {
        path: 'firestore/add',
        element: (
          <Suspense fallback='Loading Please Wait'>
            <FireStoreAdd />
          </Suspense>
        ),
      },
      {
        path: 'firestore/post/:id/edit',
        element: (
          <Suspense fallback='Loading Please Wait'>
            <FireStoreEdit />
          </Suspense>
        ),
      },
      {
        path: 'firestore/post/:id',
        element: (
          <Suspense fallback='Loading Please Wait'>
            <FireStoreDetails />
          </Suspense>
        ),
      },
    ],
  },
]);
//code to route to home ?
