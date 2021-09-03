import { ForgotPasswordPage } from './ForgotPasswordPage';
import OneSideLayout from '../../../layouts/one-side/OneSideLayout';
import React from 'react';
import ResetPasswordPageDescription from './ForgotPasswordPageDescription';
import buildApp from '../../../default';

buildApp(
  <OneSideLayout description={<ResetPasswordPageDescription />}>
    <ForgotPasswordPage />
  </OneSideLayout>
);
