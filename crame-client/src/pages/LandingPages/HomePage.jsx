import Button from '../../components/Button';
import banner from '../../assets/img/nu_bulldogex_banner.jpg';
import imgEssentials from '../../assets/ProductImages/campus-drawstring-bag.jpg';
import imgSupplies from '../../assets/ProductImages/study-essentials-bundle.jpg';
import imgApparel from '../../assets/ProductImages/bulldogs-hoodie.jpg';

/* ============================================================
   ENHANCEMENT 4 — Overall Visual Design Improvement
   HomePage sections use NU Blue, Gold, and White palette.
   Store cards now display actual product category images.
   Component order and page structure preserved exactly.
   ============================================================ */

/* ============================================================
   ENHANCEMENT 5 — Custom Font Integration
   "Plus Jakarta Sans" is inherited from the global CSS.
   ============================================================ */

const HomePage = () => {
    return (
        <div className="flex w-full flex-col gap-6">
            <section className="relative min-h-[28rem] overflow-hidden border-y-2 border-nu-blue bg-nu-blue px-4 py-10 sm:px-6 lg:px-8">
                <img
                    src={banner}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-nu-blue/55" />

                <div className="relative z-10 flex min-h-[22rem] items-start justify-end text-right sm:min-h-[24rem]">
                    <div className="max-w-xl">
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-nu-gold">
                            Campus Marketplace
                        </p>
                        <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                            Welcome to BulldogEx Shop
                        </h1>
                        <p className="mt-4 text-sm leading-7 text-white/80 sm:text-base">
                            Explore campus uniforms, student essentials, and school merch in one
                            quick storefront.
                        </p>
                        <div className="mt-6 flex flex-wrap justify-end gap-3">
                            <Button to="/products">
                                Shop Now
                            </Button>
                            <Button to="/about" variant="primary">
                                About Store
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-y-2 border-nu-blue/15 bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-nu-gold-dark">
                        Store Overview
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-nu-blue">Quick shopping blocks</h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-3xl border-2 border-nu-blue/15 bg-nu-cream p-5 transition-all duration-300 hover:-translate-y-1 hover:border-nu-gold hover:shadow-lg">
                        <p className="text-2xl font-bold text-nu-blue">08</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-nu-gold-dark">
                            Products
                        </p>
                    </div>
                    <div className="rounded-3xl border-2 border-nu-blue/15 bg-nu-cream p-5 transition-all duration-300 hover:-translate-y-1 hover:border-nu-gold hover:shadow-lg">
                        <p className="text-2xl font-bold text-nu-blue">06</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-nu-gold-dark">
                            Categories
                        </p>
                    </div>
                    <div className="rounded-3xl border-2 border-nu-blue/15 bg-nu-cream p-5 transition-all duration-300 hover:-translate-y-1 hover:border-nu-gold hover:shadow-lg">
                        <p className="text-2xl font-bold text-nu-blue">24</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-nu-gold-dark">
                            Orders
                        </p>
                    </div>
                    <div className="rounded-3xl border-2 border-nu-blue/15 bg-nu-cream p-5 transition-all duration-300 hover:-translate-y-1 hover:border-nu-gold hover:shadow-lg">
                        <p className="text-2xl font-bold text-nu-blue">03</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-nu-gold-dark">
                            Pickup Slots
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-y-2 border-nu-blue/15 bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-nu-gold-dark">
                        Shop Sections
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-nu-blue">Simple store cards</h2>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    <article className="rounded-3xl border-2 border-nu-blue/15 bg-nu-cream p-4 transition-all duration-300 hover:-translate-y-1 hover:border-nu-gold hover:shadow-lg">
                        <div className="flex aspect-4/3 items-center justify-center overflow-hidden rounded-[1.25rem] bg-nu-gold-light">
                            <img src={imgEssentials} alt="Daily Essentials" className="h-full w-full object-cover" />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-nu-blue">Daily Essentials</h3>
                        <p className="mt-3 text-sm leading-6 text-nu-blue/60">
                            Bags, tumblers, lanyards, and items used every school day.
                        </p>
                        <Button to="/products" className="mt-4" variant="primary">View Products</Button>
                    </article>

                    <article className="rounded-3xl border-2 border-nu-blue/15 bg-nu-cream p-4 transition-all duration-300 hover:-translate-y-1 hover:border-nu-gold hover:shadow-lg">
                        <div className="flex aspect-4/3 items-center justify-center overflow-hidden rounded-[1.25rem] bg-nu-gold-light">
                            <img src={imgSupplies} alt="Study Supplies" className="h-full w-full object-cover" />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-nu-blue">Study Supplies</h3>
                        <p className="mt-3 text-sm leading-6 text-nu-blue/60">
                            Notes, desk tools, and study kits for class and review weeks.
                        </p>
                        <Button to="/products" className="mt-4" variant="primary">Shop Supplies</Button>
                    </article>

                    <article className="rounded-3xl border-2 border-nu-blue/15 bg-nu-cream p-4 transition-all duration-300 hover:-translate-y-1 hover:border-nu-gold hover:shadow-lg">
                        <div className="flex aspect-4/3 items-center justify-center overflow-hidden rounded-[1.25rem] bg-nu-gold-light">
                            <img src={imgApparel} alt="Campus Apparel" className="h-full w-full object-cover" />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-nu-blue">Campus Apparel</h3>
                        <p className="mt-3 text-sm leading-6 text-nu-blue/60">
                            Comfortable pieces for class days, commute days, and weekends.
                        </p>
                        <Button to="/products" className="mt-4" variant="primary">
                            View Apparel
                        </Button>
                    </article>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
