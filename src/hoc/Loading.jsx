import { Typography } from '@mui/material';
import React from 'react';

const Loading = ({ isLoading, error, children }) => {
  const elementType = children?.type?.render?.name;
  const renderHandler = () => {
    if (elementType === 'Button') {
      const cloneButton = React.cloneElement(
        children,
        { disabled: true },
        'Loading ...'
      );
      return (
        <>
          {isLoading ? (
            cloneButton
          ) : error ? (
            <>
              {children}
              <Typography>
                <br />
                {error}
              </Typography>
            </>
          ) : (
            children
          )}
        </>
      );
    }
    return (
      <>
        {isLoading ? (
          <Typography>Loading Please Wait ...</Typography>
        ) : error ? (
          <>
            {children}
            <Typography>{error}</Typography>
          </>
        ) : (
          children
        )}
      </>
    );
  };

  return renderHandler();
};
export default Loading;
