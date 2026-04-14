import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

/* ============================================================
   ENHANCEMENT 4 — Overall Visual Design Improvement
   ============================================================ */

const Layout = () => {
  return (
    <div className="min-h-screen bg-nu-cream text-nu-blue">
      <NavBar />
      <main className="pb-16 pt-20">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
