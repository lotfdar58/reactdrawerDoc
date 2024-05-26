import React, { FC } from 'react';
import DatatValidationComponent from './DatatValidationComponent.tsx'; // Adjust the import path as necessary
import {  Route, Routes } from 'react-router-dom';
import RuleComponent from './RuleComponent.tsx';
import Layout from './Layout.tsx';



const AppRouter: FC= () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<DatatValidationComponent />} />
        <Route path="/rules" element={<RuleComponent />} />
      </Routes>
    </Layout>

  );
};

export default AppRouter;
