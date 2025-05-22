import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import {FooterComp, NavComp} from "./components";
import { Landing } from './pages';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3F51B5',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <NavComp />
        <Routes>
          <Route path="/" element={<Landing/>} />
        </Routes>
        <FooterComp />
      </Router>
    </ThemeProvider>
  );
}

export default App;
