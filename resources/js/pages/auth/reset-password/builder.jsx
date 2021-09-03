import { ResetPasswordPage } from './ResetPasswordPage';
import OneSideLayout from '../../../layouts/one-side/OneSideLayout';
import React from 'react';
import ResetPasswordPageDescription from './ResetPasswordPageDescription';
import buildApp from '../../../default';

buildApp(
  <OneSideLayout description={<ResetPasswordPageDescription />}>
    <ResetPasswordPage />
  </OneSideLayout>
);
