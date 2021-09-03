import React from 'react';
import SearchLayout from '../../../../layouts/search-layout/SearchLayout';
import UserDataPage from './UserDataPage';
import buildApp from '../../../../default';

buildApp(
  <SearchLayout>
    <UserDataPage />
  </SearchLayout>
);
