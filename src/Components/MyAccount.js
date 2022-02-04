import React from 'react';
import { Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import { useSelector } from 'react-redux';
export const MyAccount = () => {
  const name = useSelector((state) => state.user.name);
  const email = useSelector((state) => state.user.email);
  const theme = useSelector((state) => state.user.theme);
  return (
    <div className="container userData">
      <h2>
        User Information{' '}
        <Link to="/edit">
          <EditIcon />
        </Link>
      </h2>

      <table className="responsive">
        <tr>
          <th>Name</th>
          <th>: </th>
          <td>{name} </td>
        </tr>
        <tr>
          <th>Email</th>
          <th>: </th>
          <td>{email} </td>
        </tr>
        <tr>
          <th>Theme</th>
          <th>: </th>
          <td>{theme} </td>
        </tr>
      </table>
    </div>
  );
};
