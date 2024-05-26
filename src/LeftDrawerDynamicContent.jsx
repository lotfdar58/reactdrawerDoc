import React from 'react';
import { useLocation } from 'react-router-dom';
import DocumentSearchComponent from './DocumentSearchComponent';

function LeftDrawerDynamicContent() {
    const location = useLocation();

    const renderContent = () => {
        switch (location.pathname) {
          case '/':
            return <DocumentSearchComponent/>;
          default:
            return null;
        }
      };

  
  return (
    <>
    {renderContent()}
    </>
  );
};

export default LeftDrawerDynamicContent;
