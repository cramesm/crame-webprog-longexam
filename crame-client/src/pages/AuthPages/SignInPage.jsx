import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

/* ============================================================
   ENHANCEMENT 3 — Accessible Sign In & Sign Up Navigation
   ============================================================ */

/* ============================================================
   ENHANCEMENT 4 — Overall Visual Design Improvement
   ============================================================ */

/* ============================================================
   ENHANCEMENT 5 — Custom Font Integration
   ============================================================ */

const inputClasses =
  'mt-2 w-full rounded-xl border border-nu-blue/15 bg-nu-cream px-4 py-3 text-sm text-nu-blue outline-none transition-all duration-200 placeholder:text-nu-blue/35 focus:border-nu-gold focus:bg-white focus:ring-2 focus:ring-nu-gold/30 focus:shadow-sm';

const selectClasses =
  'mt-2 w-full appearance-none rounded-xl border border-nu-blue/15 bg-nu-cream px-4 py-3 text-sm text-nu-blue outline-none transition-all duration-200 focus:border-nu-gold focus:bg-white focus:ring-2 focus:ring-nu-gold/30 focus:shadow-sm';

const actionButtonClassName = 'w-full rounded-xl py-3 text-[11px] tracking-[0.2em]';

const SignInPage = () => {
  const [accountType, setAccountType] = useState('guest');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <>
      <div className="animate-fade-up">
        <p className="gold-bar text-[11px] font-semibold uppercase tracking-[0.28em] text-nu-gold-dark">
          Welcome Back
        </p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-nu-blue sm:text-4xl">Sign In</h1>
        <p className="mt-3 text-sm font-light leading-6 text-nu-blue/60">
          Access your store account to review orders, saved items, and pickup details.
        </p>
      </div>

      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        {/* Account Type Dropdown */}
        <div>
          <label htmlFor="account-type" className="text-sm font-medium text-nu-blue">
            Select Account Type
          </label>
          <div className="relative">
            <select
              id="account-type"
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
              className={selectClasses}
            >
              <option value="guest">Guest</option>
              <option value="student">Student</option>
              <option value="employee">Employee</option>
            </select>
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-nu-blue/40">
              ▾
            </span>
          </div>
        </div>

        {/* ── Guest: NU Credentials (email + password) ── */}
        {accountType === 'guest' && (
          <>
            <div>
              <label htmlFor="signin-email" className="text-sm font-medium text-nu-blue">
                Email / Username
              </label>
              <input
                id="signin-email"
                type="email"
                placeholder="student@email.com"
                autoComplete="email"
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="signin-password" className="text-sm font-medium text-nu-blue">
                Password
              </label>
              <input
                id="signin-password"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                className={inputClasses}
              />
              <p className="mt-2 text-xs font-light leading-5 text-nu-blue/45">
                It must be a combination of minimum 8 letters, numbers, and symbols.
              </p>
            </div>

            <div className="flex items-center justify-between gap-4 text-sm">
              <label className="flex items-center gap-2 text-nu-blue/60">
                <input type="checkbox" className="h-4 w-4 rounded border-nu-blue/20 accent-nu-gold" />
                <span className="font-light">Remember me</span>
              </label>
              <button type="button" className="font-medium text-nu-gold-dark transition hover:text-nu-gold">
                Forgot Password?
              </button>
            </div>

            <Button type="submit" variant="primary" className={actionButtonClassName}>
              Login with NU Credentials
            </Button>
          </>
        )}

        {/* ── Student / Employee: single NUIS button ── */}
        {(accountType === 'student' || accountType === 'employee') && (
          <div className="space-y-4 pt-2">
            <p className="text-sm font-light leading-6 text-nu-blue/60">
              {accountType === 'student'
                ? 'Sign in using your official NU student account.'
                : 'Sign in using your official NU employee account.'}
            </p>
            <Button type="submit" variant="primary" className={actionButtonClassName}>
              Login with NUIS
            </Button>
          </div>
        )}

        <p className="pt-1 text-center text-xs text-nu-blue/40 transition hover:text-nu-blue/60">
          <button type="button" className="underline">Need help?</button>
        </p>
      </form>

      <div className="mt-8 border-t border-nu-blue/10 pt-6 text-sm text-nu-blue/60">
        No account yet?{' '}
        <Link to="/auth/signup" className="font-bold text-nu-gold-dark transition hover:text-nu-gold">
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default SignInPage;
