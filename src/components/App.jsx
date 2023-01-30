import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { Movies } from 'pages/Movies/Movies';
import { Home } from 'pages/Home/Home';
import { GlobalStyleComponent } from 'styles/GlobalStyles';

export const App = () => {
  return (
  <>
    <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
      <GlobalStyleComponent />
  </>
  );
};
