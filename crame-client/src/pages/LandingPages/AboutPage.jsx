import Button from '../../components/Button';
import logo from '../../assets/img/nubdexchange_logo.png';
import imgCap from '../../assets/ProductImages/bulldog-varsity-cap.jpg';
import imgSleeve from '../../assets/ProductImages/campus-laptop-sleeve.jpg';
import imgPlanner from '../../assets/ProductImages/student-planner-2026.jpg';
import imgJug from '../../assets/ProductImages/eco-water-jug.jpg';

/* ============================================================
   ENHANCEMENT 4 — Overall Visual Design Improvement
   ============================================================ */

/* ============================================================
   ENHANCEMENT 5 — Custom Font Integration
\   ============================================================ */

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col">
      {/* ── Hero ── */}
      <section className="border-b border-nu-blue/10 bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="flex min-h-80 items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-nu-gold-light to-nu-cream shadow-inner">
            <img src={logo} alt="BulldogEx" className="h-52 w-52 rounded-full border-4 border-nu-blue bg-white object-contain shadow-lg transition-transform duration-300 hover:scale-105 sm:h-64 sm:w-64" />
          </div>

          <div className="animate-fade-up">
            <p className="gold-bar text-[11px] font-semibold uppercase tracking-[0.28em] text-nu-gold-dark">
              About Store
            </p>
            <h1 className="mt-1 max-w-xl text-3xl font-extrabold leading-tight text-nu-blue sm:text-4xl">
              A campus shop focused on useful products and simple ordering.
            </h1>
            <p className="mt-4 max-w-lg text-sm font-light leading-7 text-nu-blue/60 sm:text-base">
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

      {/* ── Stats ── */}
      <section className="border-b border-nu-blue/10 bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mb-6 animate-fade-up">
          <p className="gold-bar text-[11px] font-semibold uppercase tracking-[0.28em] text-nu-gold-dark">
            Store Overview
          </p>
          <h2 className="mt-1 text-2xl font-bold text-nu-blue sm:text-3xl">Quick store blocks</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { num: '08', label: 'Items' },
            { num: '06', label: 'Categories' },
            { num: '03', label: 'Pickup Slots' },
            { num: '24', label: 'Orders' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-nu-blue/10 bg-nu-cream p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-nu-gold hover:shadow-lg">
              <p className="bg-gradient-to-r from-nu-blue to-nu-blue-light bg-clip-text text-3xl font-extrabold text-transparent">{stat.num}</p>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-nu-gold-dark">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Store Flow + Category Grid ── */}
      <section className="border-b border-nu-blue/10 bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="gold-bar text-[11px] font-semibold uppercase tracking-[0.28em] text-nu-gold-dark">
              Store Flow
            </p>
            <h2 className="mt-1 text-2xl font-bold text-nu-blue sm:text-3xl">Stacked shopping wireframe</h2>

            <div className="mt-6 space-y-4">
              {[
                { title: 'Curated Catalog', desc: 'Products are grouped by daily need so shoppers can scan faster.' },
                { title: 'Simple Checkout', desc: 'Product pages keep price, stock, and action buttons easy to find.' },
                { title: 'Pickup Ready', desc: 'Store information stays direct for students who need quick order updates.' },
              ].map((item) => (
                <article key={item.title} className="rounded-3xl border border-nu-blue/10 bg-nu-cream p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-nu-gold hover:shadow-lg">
                  <h3 className="text-lg font-bold text-nu-blue">{item.title}</h3>
                  <p className="mt-3 text-sm font-light leading-6 text-nu-blue/60">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-nu-blue/10 bg-nu-cream p-5 shadow-sm">
            <p className="gold-bar text-[11px] font-semibold uppercase tracking-[0.28em] text-nu-gold-dark">
              Category Grid
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                { img: imgCap, alt: 'Accessories' },
                { img: imgSleeve, alt: 'Tech' },
                { img: imgPlanner, alt: 'Stationery' },
                { img: imgJug, alt: 'Drinkware' },
              ].map((cat) => (
                <div key={cat.alt} className="group flex aspect-square items-center justify-center overflow-hidden rounded-[1.25rem] bg-nu-gold-light shadow-sm">
                  <img src={cat.img} alt={cat.alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
              ))}
            </div>
            <Button to="/products" className="mt-5">View Products</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
