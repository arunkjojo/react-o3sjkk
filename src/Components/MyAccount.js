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
      <h3>User Information </h3>
      <Link to="/edit">
        <EditIcon />
      </Link>
      <hr />
      <h4>Name : {name} </h4>
      <h4>Email : {email} </h4>
    </div>
  );
};
