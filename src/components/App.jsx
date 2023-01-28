import { Routes, Route } from 'react-router-dom';
import { GlobalStyleComponent } from 'styles/GlobalStyles';
import { Layout } from 'components/Layout/Layout';

export const App = () => {
  return (
  <>
    <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
  </>
  );
};
