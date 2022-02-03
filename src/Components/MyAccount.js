import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { save_profile } from '../Redux/userSlice';
export const MyAccount = () => {
  const id = useSelector((state) => state.user.id);
  const name = useSelector((state) => state.user.name);
  const email = useSelector((state) => state.user.email);
  const theme = useSelector((state) => state.user.theme);
  const dispatch = useDispatch();
  const saveProfile = () => {
    dispatch(
      save_profile({
        userName: 'ARUN JOJO K',
        userEmail: 'arunjojokalariparambil@gmail.com',
        userTheme: 'dark',
      })
    );
  };
  return (
    <div className="userData">
      <h2>User Information</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Theme</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{theme}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={saveProfile}>Edit</button>
    </div>
  );
};
