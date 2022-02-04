import React from 'react';
import { Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import { useSelector } from 'react-redux';
export const MyAccount = () => {
  const id = useSelector((state) => state.user.id);
  const name = useSelector((state) => state.user.name);
  const email = useSelector((state) => state.user.email);
  const theme = useSelector((state) => state.user.theme);
  return (
    <div className="userData">
      <h2>
        User Information{' '}
        <Link to="/edit">
          <EditIcon />
        </Link>
      </h2>

      <table>
        <tr>
          <th>ID</th>
          <th>{id}</th>
        </tr>
        <tr>
          <th>Name</th>
          <th>{name} </th>
        </tr>
        <tr>
          <th>Email</th>
          <th>{email} </th>
        </tr>
        <tr>
          <th>Theme</th>
          <th>{theme} </th>
        </tr>
      </table>
    </div>
  );
};
