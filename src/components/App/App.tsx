import { Route, Routes } from 'react-router-dom';
import About from '../About/About';
import CoursesPage from '../CoursesPage/CoursesPage';
import Header from '../Header/Header';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/main' element={<About />} />
        <Route path='/courses' element={<CoursesPage />} />
      </Routes>
    </>
  );
};

export default App;
