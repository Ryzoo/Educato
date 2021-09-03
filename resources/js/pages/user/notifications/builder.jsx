import NotificationsPage from './NotificationsPage';
import React from 'react';
import SearchLayout from '../../../layouts/search-layout/SearchLayout';
import buildApp from '../../../default';

buildApp(
  <SearchLayout>
    <NotificationsPage />
  </SearchLayout>
);
