import { useParams } from 'react-router-dom';
import Button from '../../components/Button.jsx';
import products from '../../assets/product-content.js';

/* ============================================================
   ENHANCEMENT 1 — Original Product Catalog
   Full product detail view with image support.
   ============================================================ */

/* ============================================================
   ENHANCEMENT 4 — Overall Visual Design Improvement
   NU Blue, Gold, White palette applied throughout.
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
      <div className="flex w-full flex-col gap-6">
        <section className="border-y-2 border-nu-blue/15 bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold text-nu-blue">Product not found</h1>
            <Button to="/products" className="mt-6">Back to Products</Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-6">

      <section className="border-y-2 border-nu-blue/15 bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-4">
            <Button to="/products">Back to Products</Button>
          </div>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-nu-gold-dark">
            {product.category}
          </p>
          <h1 className="text-3xl font-bold leading-tight text-nu-blue sm:text-4xl">
            {product.title}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-nu-blue/60">
            <span className="font-bold text-nu-blue">{product.price}</span>
            <span className="rounded-full border border-nu-gold/50 bg-nu-gold-light px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-nu-gold-dark">
              {product.stock}
            </span>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-nu-blue/15 bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex aspect-4/3 items-center justify-center overflow-hidden rounded-[1.25rem] border-2 border-nu-blue/20 bg-nu-gold-light">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={product.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-24 w-24 items-center justify-center border-2 border-nu-gold/40 bg-white text-[11px] font-semibold uppercase tracking-[0.24em] text-nu-blue/50">
                Item
              </div>
            )}
          </div>

          <div className="prose prose-sm max-w-none space-y-4">
            {product.content.map((paragraph, index) => (
              <p key={index} className="text-base leading-7 text-nu-blue/70 whitespace-pre-wrap">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 border-t-2 border-nu-blue/15 pt-6">
            <Button variant="primary" className="mr-3">Add to Cart</Button>
            <Button to="/products">Back to Products</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductPage;
