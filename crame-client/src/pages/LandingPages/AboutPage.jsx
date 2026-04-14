import Button from '../../components/Button';
import logo from '../../assets/img/nubdexchange_logo.png';
import imgCap from '../../assets/ProductImages/bulldog-varsity-cap.jpg';
import imgSleeve from '../../assets/ProductImages/campus-laptop-sleeve.jpg';
import imgPlanner from '../../assets/ProductImages/student-planner-2026.jpg';
import imgJug from '../../assets/ProductImages/eco-water-jug.jpg';

/* ============================================================
   ENHANCEMENT 4 — Overall Visual Design Improvement
   AboutPage uses NU Blue, Gold, White palette consistently.
   Category grid now shows actual product images.
   Component order and page structure preserved exactly.
   ============================================================ */

/* ============================================================
   ENHANCEMENT 5 — Custom Font Integration
   "Plus Jakarta Sans" is inherited from the global CSS.
   ============================================================ */

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-nu-blue/15 bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="flex min-h-80 items-center justify-center overflow-hidden rounded-3xl bg-nu-gold-light">
            <img src={logo} alt="BulldogEx" className="h-52 w-52 rounded-full border-4 border-nu-blue bg-white object-contain shadow-lg sm:h-64 sm:w-64" />
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-nu-gold-dark">
              About Store
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-nu-blue sm:text-4xl">
              A campus shop focused on useful products and simple ordering.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-nu-blue/60 sm:text-base">
              BulldogEx Shop keeps the low-fidelity layout system while presenting clear
              product categories, quick actions, and straightforward store information.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" variant="primary">
                Back Home
              </Button>
              <Button to="/products">Open Products</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-nu-blue/15 bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-nu-gold-dark">
            Store Overview
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-nu-blue">Quick store blocks</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-nu-blue/15 bg-nu-cream p-5 transition-all duration-300 hover:-translate-y-1 hover:border-nu-gold hover:shadow-lg">
            <p className="text-2xl font-bold text-nu-blue">08</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-nu-gold-dark">
              Items
            </p>
          </div>
          <div className="rounded-3xl border-2 border-nu-blue/15 bg-nu-cream p-5 transition-all duration-300 hover:-translate-y-1 hover:border-nu-gold hover:shadow-lg">
            <p className="text-2xl font-bold text-nu-blue">06</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-nu-gold-dark">
              Categories
            </p>
          </div>
          <div className="rounded-3xl border-2 border-nu-blue/15 bg-nu-cream p-5 transition-all duration-300 hover:-translate-y-1 hover:border-nu-gold hover:shadow-lg">
            <p className="text-2xl font-bold text-nu-blue">03</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-nu-gold-dark">
              Pickup Slots
            </p>
          </div>
          <div className="rounded-3xl border-2 border-nu-blue/15 bg-nu-cream p-5 transition-all duration-300 hover:-translate-y-1 hover:border-nu-gold hover:shadow-lg">
            <p className="text-2xl font-bold text-nu-blue">24</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-nu-gold-dark">
              Orders
            </p>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-nu-blue/15 bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-nu-gold-dark">
              Store Flow
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-nu-blue">Stacked shopping wireframe</h2>

            <div className="mt-6 space-y-4">
              <article className="rounded-3xl border-2 border-nu-blue/15 bg-nu-cream p-5 transition-all duration-300 hover:-translate-y-1 hover:border-nu-gold hover:shadow-lg">
                <h3 className="text-lg font-semibold text-nu-blue">Curated Catalog</h3>
                <p className="mt-3 text-sm leading-6 text-nu-blue/60">
                  Products are grouped by daily need so shoppers can scan faster.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-nu-blue/15 bg-nu-cream p-5 transition-all duration-300 hover:-translate-y-1 hover:border-nu-gold hover:shadow-lg">
                <h3 className="text-lg font-semibold text-nu-blue">Simple Checkout</h3>
                <p className="mt-3 text-sm leading-6 text-nu-blue/60">
                  Product pages keep price, stock, and action buttons easy to find.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-nu-blue/15 bg-nu-cream p-5 transition-all duration-300 hover:-translate-y-1 hover:border-nu-gold hover:shadow-lg">
                <h3 className="text-lg font-semibold text-nu-blue">Pickup Ready</h3>
                <p className="mt-3 text-sm leading-6 text-nu-blue/60">
                  Store information stays direct for students who need quick order updates.
                </p>
              </article>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-nu-blue/15 bg-nu-cream p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-nu-gold-dark">
              Category Grid
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[1.25rem] bg-nu-gold-light">
                <img src={imgCap} alt="Accessories" className="h-full w-full object-cover" />
              </div>
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[1.25rem] bg-nu-gold-light">
                <img src={imgSleeve} alt="Tech" className="h-full w-full object-cover" />
              </div>
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[1.25rem] bg-nu-gold-light">
                <img src={imgPlanner} alt="Stationery" className="h-full w-full object-cover" />
              </div>
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[1.25rem] bg-nu-gold-light">
                <img src={imgJug} alt="Drinkware" className="h-full w-full object-cover" />
              </div>
            </div>
            <Button to="/products" className="mt-5">View Products</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
