import OneSideLayout from '../../../layouts/one-side/OneSideLayout';
import React from 'react';
import RegisterPage from './RegisterPage';
import RegisterPageDescription from './RegisterPageDescription';
import buildApp from '../../../default';

buildApp(
  <OneSideLayout description={<RegisterPageDescription />}>
    <RegisterPage />
  </OneSideLayout>
);
