import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header';
import { Edit } from './Components/Edit';
// import './style.css';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exat path="/" element={<Header />} />
        <Route path="edit" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}
