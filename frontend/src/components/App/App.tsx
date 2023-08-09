import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import About from '../About/About';
import CoursesPage from '../CoursesPage/CoursesPage';
import Header from '../Header/Header';
import { THEME } from '../../utils/theme';

const App = () => (
  <ThemeProvider theme={THEME}>
    <Header />
    <Routes>
      <Route path={'/main'} element={<About />} />
      <Route path={'/courses'} element={<CoursesPage />} />
    </Routes>
  </ThemeProvider>
);

export default App;
