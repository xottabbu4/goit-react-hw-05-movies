import { AppBar } from 'components/AppBar/AppBar';
import { Box } from './Layout.styled';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <Box>
      <AppBar />
        <Outlet />
    </Box>
  );
};