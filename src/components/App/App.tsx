import { Route, Routes } from 'react-router-dom';
import About from '../About/About';
import CoursesPage from '../CoursesPage/CoursesPage';
import Header from '../Header/Header';
import { ThemeProvider } from 'styled-components';
import { THEME } from '../../utils/theme';

const App = () => {
  return (
    <ThemeProvider theme={THEME}>
      <Header/>
      <Routes>
        <Route path='/main' element={<About/>}/>
        <Route path='/courses' element={<CoursesPage/>}/>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
