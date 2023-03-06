import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { RouterProvider } from 'react-router-dom';
import { theme } from './configs/theme';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import './index.css';
import { router } from './configs/router';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </Provider>
);
