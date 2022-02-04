import React, { useState, useEffect } from 'react';
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
    <div className={`container `}>
      <h3>Edit Profile</h3>
      <form>
        <div className="form-group nameField">
          <label for="name">Name </label>
          <input
            id="name"
            className="form-control"
            onChange={nameChange}
            value={userName}
          />
        </div>
        <div className="form-group emailField">
          <label for="email">Email </label>
          <input
            id="email"
            className="form-control"
            onChange={emailChange}
            value={userEmail}
          />
        </div>
        <div className="form-group themeField">
          <label for="theme">Theme </label>
          <select
            id="theme"
            className="form-control"
            onChange={themeChange}
            value={userTheme}
          >
            <option value="light">light</option>
            <option value="dark">dark</option>
          </select>
        </div>
        <div className="form-group saveField">
          <button className="btn btn-block btn-primary" onClick={saveProfile}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
