import { Link } from 'react-router-dom';

/* ============================================================
   ENHANCEMENT 4 — Overall Visual Design Improvement
   Button variants updated to NU Bulldogs palette:
   • primary — Gold background, navy text
   • secondary — White background, navy border & text
   ============================================================ */
const variantClasses = {
  primary: 'bg-nu-gold text-nu-blue hover:bg-nu-gold-dark',
  secondary: 'bg-white text-nu-blue hover:bg-nu-gold-light',
};

const Button = ({
  children,
  to,
  type = 'button',
  variant = 'secondary',
  className = '',
}) => {
  const classes = [
    'inline-flex items-center justify-center rounded-full border-2 border-nu-blue px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] transition-all duration-200',
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
