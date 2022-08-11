import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box } from "@mui/material";
import Navbar from './components/Navbar.component';
import Home from './pages/Home.pages';
import ExerciseDetail from './pages/ExerciseDetail.pages';
import Footer from './components/Footer.component';
import Modal from './components/Modal.component';
import { useEffect, useState } from 'react';

function App() {
  const [isOpenModal, setIsOpenModal] = useState(null);

  useEffect(() => {
    const openModal = JSON.parse(localStorage.getItem('isOpenModal'));
    console.log(openModal)
    if (openModal !== false) {
      console.log("entro qui")
      localStorage.setItem('isOpenModal', true);
      setIsOpenModal(JSON.parse(localStorage.getItem('isOpenModal')))
    } else {
      setIsOpenModal(JSON.parse(localStorage.getItem('isOpenModal')))
    }
  }, [])

  return (
    <Box
      width='400px'
      sx={{
        width: {
          xl: "1488px"
        }
      }}
      m='auto'
    >
      <Modal open={isOpenModal} setOpen={setIsOpenModal} />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
