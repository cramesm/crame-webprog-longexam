import { NavLink } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
];

/* ============================================================
   ENHANCEMENT 4 — Overall Visual Design Improvement
   ============================================================ */
const navLinkClassName = ({ isActive }) =>
  [
    'rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition-all duration-200',
    isActive
      ? 'border-nu-gold bg-gradient-to-r from-nu-gold to-nu-gold-dark text-nu-blue shadow-sm'
      : 'border-transparent text-white/70 hover:border-white/30 hover:text-white',
  ].join(' ');

/* ============================================================
   ENHANCEMENT 3 — Accessible Sign In & Sign Up Navigation
   ============================================================ */
const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-nu-gold/80 bg-gradient-to-r from-nu-blue-dark via-nu-blue to-nu-blue-dark backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02]">
          <img src={logo} alt="BulldogEx" className="h-9 w-9 rounded-full border-2 border-nu-gold bg-white object-contain shadow-md" />
          <div className="space-y-0.5">
            <p className="text-xl font-extrabold tracking-tight text-white">BulldogEx Shop</p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/home'} className={navLinkClassName}>
              {link.label}
            </NavLink>
          ))}

          <span className="mx-1 h-5 w-px bg-white/20" aria-hidden="true" />
          <NavLink
            to="/auth/signin"
            className={({ isActive }) =>
              [
                'rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition-all duration-200',
                isActive
                  ? 'border-nu-gold bg-gradient-to-r from-nu-gold to-nu-gold-dark text-nu-blue shadow-sm'
                  : 'border-transparent text-white/70 hover:border-white/30 hover:text-white',
              ].join(' ')
            }
          >
            Sign In
          </NavLink>
          <NavLink
            to="/auth/signup"
            className={({ isActive }) =>
              [
                'rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition-all duration-200',
                isActive
                  ? 'border-nu-gold bg-gradient-to-r from-nu-gold to-nu-gold-dark text-nu-blue shadow-sm'
                  : 'border-nu-gold bg-gradient-to-r from-nu-gold to-nu-gold-dark text-nu-blue hover:brightness-110 hover:scale-[1.03] shadow-sm',
              ].join(' ')
            }
          >
            Sign Up
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
