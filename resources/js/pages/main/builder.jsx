import { MainPage } from './MainPage';
import MainLayout from '../../layouts/main/MainLayout';
import React from 'react';
import buildApp from '../../default';

buildApp(
  <MainLayout>
    <MainPage />
  </MainLayout>
);
