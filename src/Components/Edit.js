import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { save_profile, change_theme } from '../Redux/userSlice';
export const Edit = () => {
  var name = useSelector((state) => state.user.name);
  var email = useSelector((state) => state.user.email);
  var theme = useSelector((state) => state.user.theme);

  const [userName, setUserName] = useState(name);
  const [userEmail, setUserEmail] = useState(email);
  const [userTheme, setUserTheme] = useState(theme);

  const dispatch = useDispatch();

  const nameChange = (e) => {
    setUserName(e.target.value);
  };
  const emailChange = (e) => {
    setUserEmail(e.target.value);
  };
  const themeChange = (e) => {
    setUserTheme(e.target.value);
    dispatch(
      change_theme({
        userTheme: e.target.value,
      })
    );
  };

  console.log(theme);
  const saveProfile = (e) => {
    e.preventDefault();
    theme = userTheme;
    console.log('save', theme);
    dispatch(
      save_profile({
        userName: userName,
        userEmail: userEmail,
        userTheme: userTheme,
      })
    );
  };

  useEffect(() => {
    console.log('mounted', theme);
    return () => {
      console.log('un-mounted', theme);
      dispatch(
        change_theme({
          userTheme: theme,
        })
      );
    };
  }, []);

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
