import { Link } from 'react-router-dom';

/* ============================================================
   ENHANCEMENT 2 — Customized Footer
   ============================================================ */

/* ============================================================
   ENHANCEMENT 4 — Overall Visual Design Improvement
   ============================================================ */

const Footer = () => {
  return (
    <footer className="border-t-2 border-nu-gold/80 bg-gradient-to-b from-nu-blue to-nu-blue-dark px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div>
            <p className="bg-gradient-to-r from-nu-gold to-nu-gold-dark bg-clip-text text-lg font-extrabold text-transparent">BulldogEx Shop</p>
            <p className="mt-2 text-sm font-light leading-6 text-white/50">
              Your one-stop campus marketplace for NU Bulldogs essentials, merch, and school supplies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-nu-gold">
              Quick Links
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link to="/" className="text-sm font-light text-white/60 transition-colors duration-200 hover:text-nu-gold">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm font-light text-white/60 transition-colors duration-200 hover:text-nu-gold">
                  About
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm font-light text-white/60 transition-colors duration-200 hover:text-nu-gold">
                  Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Account Links */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-nu-gold">
              Account
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link to="/auth/signin" className="text-sm font-light text-white/60 transition-colors duration-200 hover:text-nu-gold">
                  Sign In
                </Link>
              </li>
              <li>
                <Link to="/auth/signup" className="text-sm font-light text-white/60 transition-colors duration-200 hover:text-nu-gold">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-nu-gold">
              Contact
            </p>
            <ul className="mt-3 space-y-2 text-sm font-light text-white/60">
              <li>bulldogex@nu.edu.ph</li>
              <li>NU Campus, Manila</li>
              <li>Mon – Fri, 8 AM – 5 PM</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs font-light text-white/40">
            &copy; {new Date().getFullYear()} BulldogEx Shop. All rights reserved.
          </p>
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-nu-gold/50">
            Campus Essentials · Simple Ordering
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
