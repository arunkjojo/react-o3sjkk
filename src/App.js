import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Dashboard } from './Components/Dashboard';
import { MyAccount } from './Components/MyAccount';
import { Edit } from './Components/Edit';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import { useSelector } from 'react-redux';
import './style.css';
export default function App() {
  const theme = useSelector((state) => state.user.theme);
  useEffect(() => {
    document.body.classList.toggle(`bg-${theme}-app`, theme);
  }, [theme]);
  return (
    <BrowserRouter>
      <div className={`app container `}>
        <div className="navbar">
          <Link to="/">Dashboard</Link>{' '}
          <Link to="/account">
            <PersonOutlineOutlinedIcon />
          </Link>{' '}
        </div>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/account" element={<MyAccount />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
