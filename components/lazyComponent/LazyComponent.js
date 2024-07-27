import React from 'react';

const LazyComponent = ({children}) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default LazyComponent;