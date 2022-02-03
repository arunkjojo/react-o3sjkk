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
      <h3>ID : {id}</h3>
      <h3>Name : {name}</h3>
      <h3>Email : {email}</h3>
      <h3>Theme : {theme}</h3>
      <button onClick={saveProfile}>Save Profile</button>
      <button>Edit</button>
    </div>
  );
};
