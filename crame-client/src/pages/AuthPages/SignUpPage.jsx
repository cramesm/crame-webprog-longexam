import { Link } from 'react-router-dom';
import Button from '../../components/Button';

/* ============================================================
   ENHANCEMENT 3 — Accessible Sign In & Sign Up Navigation
   ============================================================ */

/* ============================================================
   ENHANCEMENT 4 — Overall Visual Design Improvement
   Auth form uses NU Blue, Gold, White palette with refined
   focus states and consistent styling.
   ============================================================ */

/* ============================================================
   ENHANCEMENT 5 — Custom Font Integration
   "Plus Jakarta Sans" inherited from global CSS.
   ============================================================ */

const inputClasses =
  'mt-2 w-full rounded-xl border border-nu-blue/20 bg-nu-cream px-4 py-3 text-sm text-nu-blue outline-none transition-all duration-200 placeholder:text-nu-blue/40 focus:border-nu-gold focus:bg-white focus:ring-1 focus:ring-nu-gold';

const actionButtonClassName = 'w-full rounded-xl py-3 text-[11px] tracking-[0.2em]';

const SignUpPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight text-nu-blue sm:text-4xl">Sign Up</h1>
      <p className="mt-3 text-sm leading-6 text-nu-blue/60">
        Create a store account for faster checkout, order updates, and pickup details.
      </p>

      <form className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="text-sm font-medium text-nu-blue">
              First Name
            </label>
            <input
              id="first-name"
              type="text"
              placeholder="First name"
              autoComplete="given-name"
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="last-name" className="text-sm font-medium text-nu-blue">
              Last Name
            </label>
            <input
              id="last-name"
              type="text"
              placeholder="Last name"
              autoComplete="family-name"
              className={inputClasses}
            />
          </div>
        </div>

        <div>
          <label htmlFor="signup-email" className="text-sm font-medium text-nu-blue">
            Email
          </label>
          <input
            id="signup-email"
            type="email"
            placeholder="student@email.com"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="signup-password" className="text-sm font-medium text-nu-blue">
            Password
          </label>
          <input
            id="signup-password"
            type="password"
            placeholder="Password"
            autoComplete="new-password"
            className={inputClasses}
          />
          <p className="mt-2 text-xs leading-5 text-nu-blue/50">
            Use a secure password with letters, numbers, and symbols.
          </p>
        </div>

        <Button type="submit" variant="primary" className={actionButtonClassName}>
          Create Account
        </Button>

        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <Button type="button" variant="secondary" className={actionButtonClassName}>
            Sign Up with Google
          </Button>
          <Button type="button" variant="secondary" className={actionButtonClassName}>
            Sign Up with Apple
          </Button>
        </div>
      </form>

      <div className="mt-8 border-t border-nu-blue/15 pt-6 text-sm text-nu-blue/60">
        Already have an account?{' '}
        <Link to="/auth/signin" className="font-semibold text-nu-blue transition hover:text-nu-gold-dark">
          Log In
        </Link>
      </div>
    </>
  );
};

export default SignUpPage;
