import Button from './Button';

/* ============================================================
   ENHANCEMENT 1 — Original Product Catalog
   ProductCard renders product image with placeholder fallback.
   ============================================================ */

/* ============================================================
   ENHANCEMENT 4 — Overall Visual Design Improvement
   Cards use white background, navy blue borders, and gold
   category accents aligned with the NU color palette.
   ============================================================ */

const ProductCard = ({ product, index }) => {
  const imageSrc = product.image
    ? new URL(`../assets/ProductImages/${product.image}`, import.meta.url).href
    : null;

  return (
    <article className="rounded-3xl border-2 border-nu-blue/20 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-nu-gold hover:shadow-lg">
      <div className="flex aspect-4/3 items-center justify-center overflow-hidden rounded-[1.25rem] bg-nu-gold-light">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={product.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-16 w-16 items-center justify-center border-2 border-nu-gold/40 bg-white text-[10px] font-semibold uppercase tracking-[0.2em] text-nu-blue/50">
            Item
          </div>
        )}
      </div>
      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-nu-gold-dark">
        {product.category} {String(index + 1).padStart(2, '0')}
      </p>
      <h3 className="mt-2 text-lg font-semibold text-nu-blue">{product.title}</h3>
      <p className="mt-2 text-base font-bold text-nu-blue">{product.price}</p>
      <p className="mt-3 text-sm leading-6 text-nu-blue/60">
        {product.content[0].substring(0, 120)}...
      </p>
      <Button to={`/products/${product.name}`} className="mt-4">View Product</Button>
    </article>
  );
};

export default ProductCard;
