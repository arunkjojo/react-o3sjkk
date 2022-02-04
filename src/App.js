import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Dashboard } from './Components/Dashboard';
import { MyAccount } from './Components/MyAccount';
import { Edit } from './Components/Edit';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
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
    </BrowserRouter>
  );
}
