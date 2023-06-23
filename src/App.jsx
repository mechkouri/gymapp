import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
import { Home,ExerciseDetail } from './pages';
import { Footer, Navbar } from './components';

function App() {
  return (
    <Router>
      <Box width="400px" sx={{ width: {xl: '1488px'}}} m="auto">
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/exercise/:id' element={<ExerciseDetail />}/>
        </Routes>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
