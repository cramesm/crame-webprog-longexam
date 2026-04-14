import { useParams } from 'react-router-dom';
import Button from '../../components/Button.jsx';
import products from '../../assets/product-content.js';

/* ============================================================
   ENHANCEMENT 1 — Original Product Catalog
   ============================================================ */

/* ============================================================
   ENHANCEMENT 4 — Overall Visual Design Improvement
   ============================================================ */

function ProductPage() {
  const { name } = useParams();
  const product = products.find((p) => p.name === name);

  const imageSrc =
    product?.image
      ? new URL(`../../assets/ProductImages/${product.image}`, import.meta.url).href
      : null;

  if (!product) {
    return (
      <div className="flex w-full flex-col">
        <section className="border-b border-nu-blue/10 bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-extrabold text-nu-blue">Product not found</h1>
            <Button to="/products" className="mt-6">Back to Products</Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col">
      <section className="border-b border-nu-blue/10 bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="max-w-3xl animate-fade-up">
          <div className="mb-4">
            <Button to="/products">Back to Products</Button>
          </div>
          <p className="gold-bar bg-gradient-to-r from-nu-gold-dark to-nu-gold bg-clip-text text-[11px] font-bold uppercase tracking-[0.28em] text-transparent">
            {product.category}
          </p>
          <h1 className="mt-1 text-3xl font-extrabold leading-tight text-nu-blue sm:text-4xl">
            {product.title}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-nu-blue/60">
            <span className="text-xl font-extrabold text-nu-blue">{product.price}</span>
            <span className="rounded-full border border-nu-gold bg-gradient-to-r from-nu-gold-light to-nu-cream px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-nu-gold-dark shadow-sm">
              {product.stock}
            </span>
          </div>
        </div>
      </section>

      <section className="border-b border-nu-blue/10 bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="group mb-8 flex aspect-4/3 items-center justify-center overflow-hidden rounded-3xl border border-nu-blue/10 bg-nu-gold-light shadow-sm">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={product.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-24 w-24 items-center justify-center rounded-xl border-2 border-nu-gold/40 bg-white text-[11px] font-semibold uppercase tracking-[0.24em] text-nu-blue/50">
                Item
              </div>
            )}
          </div>

          <div className="space-y-4">
            {product.content.map((paragraph, index) => (
              <p key={index} className="text-base font-light leading-8 text-nu-blue/70 whitespace-pre-wrap">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 border-t border-nu-blue/10 pt-6">
            <Button variant="primary" className="mr-3">Add to Cart</Button>
            <Button to="/products">Back to Products</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductPage;
