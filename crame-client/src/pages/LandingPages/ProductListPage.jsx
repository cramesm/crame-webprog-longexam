import Button from '../../components/Button.jsx';
import ProductList from '../../components/ProductList.jsx';
import products from '../../assets/product-content.js';

/* ============================================================
   ENHANCEMENT 1 — Original Product Catalog
   ============================================================ */

/* ============================================================
   ENHANCEMENT 4 — Overall Visual Design Improvement
   NU Blue, Gold, White palette applied. Structure preserved.
   ============================================================ */

/* ============================================================
   ENHANCEMENT 5 — Custom Font Integration
   "Plus Jakarta Sans" inherited from global CSS.
   ============================================================ */

const ProductListPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-nu-blue/15 bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-nu-gold-dark">
          Products
        </p>
        <h1 className="max-w-xl text-3xl font-bold leading-tight text-nu-blue sm:text-4xl">
          Shop campus essentials in a simple product grid
        </h1>
        <p className="mt-4 max-w-lg text-sm leading-7 text-nu-blue/60 sm:text-base">
          Browse practical items for class, study, commute, and everyday campus routines.
        </p>
        <div className="mt-6">
          <Button to="/">Back Home</Button>
        </div>
      </section>

      <section className="border-y-2 border-nu-blue/15 bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-nu-gold-dark">
            Featured Products
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-nu-blue">Product card grid</h2>
        </div>

        <ProductList products={products} />
      </section>
    </div>
  );
}

export default ProductListPage;
