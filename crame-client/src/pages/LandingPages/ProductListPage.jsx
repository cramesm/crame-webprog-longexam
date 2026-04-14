import Button from '../../components/Button.jsx';
import ProductList from '../../components/ProductList.jsx';
import products from '../../assets/product-content.js';

/* ============================================================
   ENHANCEMENT 1 — Original Product Catalog
   ============================================================ */

/* ============================================================
   ENHANCEMENT 4 — Overall Visual Design Improvement
   ============================================================ */

const ProductListPage = () => {
  return (
    <div className="flex w-full flex-col">
      <section className="border-b border-nu-blue/10 bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="animate-fade-up">
          <p className="gold-bar text-[11px] font-semibold uppercase tracking-[0.28em] text-nu-gold-dark">
            Products
          </p>
          <h1 className="mt-1 max-w-xl text-3xl font-extrabold leading-tight text-nu-blue sm:text-4xl">
            Shop campus essentials in a simple product grid
          </h1>
          <p className="mt-4 max-w-lg text-sm font-light leading-7 text-nu-blue/60 sm:text-base">
            Browse practical items for class, study, commute, and everyday campus routines.
          </p>
          <div className="mt-6">
            <Button to="/">Back Home</Button>
          </div>
        </div>
      </section>

      <section className="border-b border-nu-blue/10 bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mb-6">
          <p className="gold-bar text-[11px] font-semibold uppercase tracking-[0.28em] text-nu-gold-dark">
            Featured Products
          </p>
          <h2 className="mt-1 text-2xl font-bold text-nu-blue sm:text-3xl">Product card grid</h2>
        </div>

        <ProductList products={products} />
      </section>
    </div>
  );
}

export default ProductListPage;
