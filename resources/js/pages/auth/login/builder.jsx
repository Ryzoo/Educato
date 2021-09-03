import LoginPage from './LoginPage';
import LoginPageDescription from './LoginPageDescription';
import OneSideLayout from '../../../layouts/one-side/OneSideLayout';
import React from 'react';
import buildApp from '../../../default';

buildApp(
  <OneSideLayout description={<LoginPageDescription />}>
    <LoginPage />
  </OneSideLayout>
);
