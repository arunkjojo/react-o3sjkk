import React from 'react';
import { Dashboard } from './Dashboard';
import { MyAccount } from './MyAccount';
import { Edit } from './Edit';
export const Main = (props) => {
  switch (props.data) {
    case 0:
      return <Dashboard />;
    default:
      return <Edit />;
  }
};
