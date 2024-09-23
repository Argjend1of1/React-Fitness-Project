import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './pages/Home';
import ExcerciseDetail from './pages/ExcerciseDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Box width="400px" sx={{ width: {xl: '1448px'}}} m="auto">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/excecise/:id' element={< ExcerciseDetail />} />
        </Routes>
        <Footer />
      </Router>
    </Box>
  )
}

export default App
