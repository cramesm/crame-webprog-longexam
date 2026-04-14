import { Link } from 'react-router-dom';

/* ============================================================
   ENHANCEMENT 4 — Overall Visual Design Improvement
   Button variants updated to NU Bulldogs palette with scale
   hover effect and gradient primary button for premium feel.
   ============================================================ */
const variantClasses = {
  primary:
    'border-nu-gold bg-gradient-to-r from-nu-gold to-nu-gold-dark text-nu-blue hover:brightness-110 hover:scale-[1.03]',
  secondary:
    'border-nu-blue/25 bg-white text-nu-blue hover:bg-nu-gold-light hover:border-nu-gold hover:scale-[1.03]',
};

const Button = ({
  children,
  to,
  type = 'button',
  variant = 'secondary',
  className = '',
}) => {
  const classes = [
    'inline-flex items-center justify-center rounded-full border-2 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.24em] shadow-sm transition-all duration-200 active:scale-[0.97]',
    variantClasses[variant] ?? variantClasses.secondary,
    className,
  ]
    .join(' ')
    .trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
};

export default Button;
