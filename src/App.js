import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box } from "@mui/material";
import Navbar from './components/Navbar.component';
import Home from './pages/Home.pages';
import ExerciseDetail from './pages/ExerciseDetail.pages';
import Footer from './components/Footer.component';

function App() {
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
