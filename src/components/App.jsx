import { Routes, Route } from 'react-router-dom';
import { GlobalStyleComponent } from 'styles/GlobalStyles';
import { Layout } from '../components/Layout/Layout';

export const App = () => {
  return (
  <div>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
  </div>
  );
};
