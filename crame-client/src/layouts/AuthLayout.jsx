import { Outlet } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';
import banner from '../assets/img/nu_bulldogex_banner.jpg';

/* ============================================================
   ENHANCEMENT 3 — Accessible Sign In & Sign Up Navigation
   AuthLayout wraps sign-in and sign-up routes.
   ============================================================ */

/* ============================================================
   ENHANCEMENT 4 — Overall Visual Design Improvement
   Auth layout uses NU Blue left panel with the campus banner
   image overlaid, logo branding, and a white form panel on
   the right. Replaces the geometric X placeholder.
   ============================================================ */

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-nu-cream text-nu-blue">
      <div className="grid min-h-screen w-full lg:grid-cols-[1fr_0.95fr]">
        {/* Left branding panel */}
        <div className="relative flex items-center justify-center overflow-hidden border-b-2 border-nu-gold/30 bg-nu-blue p-8 sm:p-10 lg:border-b-0 lg:border-r-2 lg:border-nu-gold/30 lg:p-16">
          {/* Background banner image */}
          <img
            src={banner}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-nu-blue/80 via-nu-blue/60 to-nu-blue/90" />

          {/* Logo and branding */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <img
              src={logo}
              alt="BulldogEx"
              className="h-28 w-28 rounded-full border-4 border-nu-gold bg-white object-contain shadow-lg sm:h-36 sm:w-36"
            />
            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
              BulldogEx Shop
            </h2>
            <p className="mt-2 text-sm text-nu-gold">
              Campus Marketplace
            </p>
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/60">
              Your one-stop shop for NU Bulldogs essentials, merch, and school supplies.
            </p>
          </div>
        </div>

        {/* Right form panel */}
        <main className="flex items-center bg-white px-6 py-10 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-md">
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;
