import { Link } from 'react-router-dom';
import Button from '../components/Button';

/* ============================================================
   ENHANCEMENT 2 — Customized Not Found Page
   Themed 404 page using NU Blue, Gold, and White palette.
   All links work correctly via React Router.
   ============================================================ */

/* ============================================================
   ENHANCEMENT 4 — Overall Visual Design Improvement
   ============================================================ */

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-nu-cream">
      {/* Top bar */}
      <header className="border-b-2 border-nu-gold bg-nu-blue px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Link to="/" className="text-xl font-bold text-white transition-colors duration-200 hover:text-nu-gold">
            BulldogEx Shop
          </Link>
        </div>
      </header>

      {/* Hero error section */}
      <section className="border-b-2 border-nu-blue/15 bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-nu-gold-dark">
            Error 404
          </p>
          <h1 className="text-6xl font-bold leading-tight text-nu-blue sm:text-7xl">
            Page Not Found
          </h1>
          <p className="mt-4 max-w-lg text-lg leading-7 text-nu-blue/60">
            The page you&apos;re looking for doesn&apos;t exist or may have been moved.
            Let&apos;s get you back on track.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button to="/" variant="primary">Back to Home</Button>
            <Button to="/products">Browse Products</Button>
          </div>
        </div>
      </section>

      {/* Quick links section */}
      <section className="border-b-2 border-nu-blue/15 bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-nu-gold-dark">
            Quick Links
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-nu-blue">Explore the site</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border-2 border-nu-blue/15 bg-nu-cream p-5 transition-all duration-300 hover:border-nu-gold hover:shadow-lg">
              <h3 className="font-semibold text-nu-blue">Home</h3>
              <p className="mt-1 text-sm leading-6 text-nu-blue/60">Return to the main page</p>
              <Button to="/" className="mt-4">Go Home</Button>
            </div>

            <div className="rounded-3xl border-2 border-nu-blue/15 bg-nu-cream p-5 transition-all duration-300 hover:border-nu-gold hover:shadow-lg">
              <h3 className="font-semibold text-nu-blue">Products</h3>
              <p className="mt-1 text-sm leading-6 text-nu-blue/60">Browse campus essentials</p>
              <Button to="/products" className="mt-4">View Products</Button>
            </div>

            <div className="rounded-3xl border-2 border-nu-blue/15 bg-nu-cream p-5 transition-all duration-300 hover:border-nu-gold hover:shadow-lg">
              <h3 className="font-semibold text-nu-blue">Sign In</h3>
              <p className="mt-1 text-sm leading-6 text-nu-blue/60">Access your account</p>
              <Button to="/auth/signin" className="mt-4">Sign In</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t-2 border-nu-gold bg-nu-blue px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-sm font-bold text-nu-gold">BulldogEx Shop</p>
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} BulldogEx Shop. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NotFoundPage;
