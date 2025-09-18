import { Outlet } from 'react-router-dom';
import Footer from './Footer.jsx';
import ScrollToTop from './ScrollToTop.jsx';

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
