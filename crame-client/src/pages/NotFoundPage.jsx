import { Link } from 'react-router-dom';
import Button from '../components/Button';

/* ============================================================
   ENHANCEMENT 2 — Customized Not Found Page
   ============================================================ */

/* ============================================================
   ENHANCEMENT 4 — Overall Visual Design Improvement
   ============================================================ */

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-nu-cream">
      {/* Top bar */}
      <header className="border-b-2 border-nu-gold/80 bg-gradient-to-r from-nu-blue-dark via-nu-blue to-nu-blue-dark px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Link to="/" className="text-xl font-extrabold text-white transition-colors duration-200 hover:text-nu-gold">
            BulldogEx Shop
          </Link>
        </div>
      </header>

      {/* Hero error section */}
      <section className="border-b border-nu-blue/10 bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl animate-fade-up">
          <p className="gold-bar text-[11px] font-semibold uppercase tracking-[0.28em] text-nu-gold-dark">
            Error 404
          </p>
          <h1 className="mt-1 bg-gradient-to-r from-nu-blue to-nu-blue-light bg-clip-text text-6xl font-extrabold leading-tight text-transparent sm:text-7xl">
            Page Not Found
          </h1>
          <p className="mt-4 max-w-lg text-lg font-light leading-8 text-nu-blue/60">
            The page you&apos;re looking for doesn&apos;t exist or may have been moved.
            Let&apos;s get you back on track.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/" variant="primary">Back to Home</Button>
            <Button to="/products">Browse Products</Button>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="border-b border-nu-blue/10 bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="gold-bar text-[11px] font-semibold uppercase tracking-[0.28em] text-nu-gold-dark">
            Quick Links
          </p>
          <h2 className="mt-1 text-2xl font-bold text-nu-blue sm:text-3xl">Explore the site</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-nu-blue/10 bg-nu-cream p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-nu-gold hover:shadow-lg">
              <h3 className="font-bold text-nu-blue">Home</h3>
              <p className="mt-1 text-sm font-light leading-6 text-nu-blue/60">Return to the main page</p>
              <Button to="/" className="mt-4">Go Home</Button>
            </div>

            <div className="rounded-3xl border border-nu-blue/10 bg-nu-cream p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-nu-gold hover:shadow-lg">
              <h3 className="font-bold text-nu-blue">Products</h3>
              <p className="mt-1 text-sm font-light leading-6 text-nu-blue/60">Browse campus essentials</p>
              <Button to="/products" className="mt-4">View Products</Button>
            </div>

            <div className="rounded-3xl border border-nu-blue/10 bg-nu-cream p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-nu-gold hover:shadow-lg">
              <h3 className="font-bold text-nu-blue">Sign In</h3>
              <p className="mt-1 text-sm font-light leading-6 text-nu-blue/60">Access your account</p>
              <Button to="/auth/signin" className="mt-4">Sign In</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t-2 border-nu-gold/80 bg-gradient-to-r from-nu-blue-dark via-nu-blue to-nu-blue-dark px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="bg-gradient-to-r from-nu-gold to-nu-gold-dark bg-clip-text text-sm font-extrabold text-transparent">BulldogEx Shop</p>
          <p className="text-xs font-light text-white/40">
            &copy; {new Date().getFullYear()} BulldogEx Shop. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NotFoundPage;
