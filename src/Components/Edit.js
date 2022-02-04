import React, { useState } from 'react';
import { Header } from './Header';
import { useSelector, useDispatch } from 'react-redux';
import { save_profile } from '../Redux/userSlice';
export const Edit = () => {
  const name = useSelector((state) => state.user.name);
  const email = useSelector((state) => state.user.email);
  const theme = useSelector((state) => state.user.theme);

  const [userName, setUserName] = useState(name);
  const [userEmail, setUserEmail] = useState(email);
  const [userTheme, setUserTheme] = useState(theme);

  const nameChange = (e) => {
    setUserName(e.target.value);
  };
  const emailChange = (e) => {
    setUserEmail(e.target.value);
  };
  const themeChange = (e) => {
    setUserTheme(e.target.value);
  };

  const dispatch = useDispatch();
  const saveProfile = (e) => {
    e.preventDefault();
    dispatch(
      save_profile({
        userName: userName,
        userEmail: userEmail,
        userTheme: userTheme,
      })
    );
  };
  return (
    <>
      <form>
        <div className="nameField">
          <label for="name">Name </label>
          <input id="name" onChange={nameChange} value={userName} />
        </div>
        <div className="emailField">
          <label for="email">Email </label>
          <input id="nemail" onChange={emailChange} value={userEmail} />
        </div>
        <div className="themeField">
          <label for="theme">Theme </label>
          <select onChange={themeChange} value={userTheme}>
            <option value="light">light</option>
            <option value="dark">dark</option>
          </select>
        </div>
        <div className="saveField">
          <button onClick={saveProfile}>Save</button>
        </div>
      </form>
    </>
  );
};
