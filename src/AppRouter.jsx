import React from 'react';
import DataDisplay from './DataDisplay'; // Adjust the import path as necessary
import {  Route, Routes } from 'react-router-dom';
import RuleComponent from './RuleComponent';
import Layout from './Layout';



const AppRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<DataDisplay />} />
        <Route path="/rules" element={<RuleComponent />} />
      </Routes>
    </Layout>

  );
};

export default AppRouter;