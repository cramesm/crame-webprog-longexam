import Button from '../../components/Button';
import banner from '../../assets/img/nu_bulldogex_banner.jpg';
import imgEssentials from '../../assets/ProductImages/campus-drawstring-bag.jpg';
import imgSupplies from '../../assets/ProductImages/study-essentials-bundle.jpg';
import imgApparel from '../../assets/ProductImages/bulldogs-hoodie.jpg';

/* ============================================================
   ENHANCEMENT 4 — Overall Visual Design Improvement
   ============================================================ */

/* ============================================================
   ENHANCEMENT 5 — Custom Font Integration
   ============================================================ */

const HomePage = () => {
    return (
        <div className="flex w-full flex-col">
            {/* ── Hero Banner ── */}
            <section className="relative min-h-[30rem] overflow-hidden bg-nu-blue px-4 py-10 sm:px-6 lg:px-8">
                <img
                    src={banner}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-nu-blue-dark/90 via-nu-blue/70 to-nu-blue/40" />

                <div className="relative z-10 flex min-h-[24rem] items-center justify-end text-right sm:min-h-[26rem]">
                    <div className="max-w-xl animate-fade-up">
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-nu-gold">
                            Campus Marketplace
                        </p>
                        <h1 className="text-4xl font-extrabold leading-tight text-white drop-shadow-lg sm:text-5xl">
                            Welcome to<br />BulldogEx Shop
                        </h1>
                        <p className="mt-4 text-sm font-light leading-7 text-white/80 sm:text-base">
                            Explore campus uniforms, student essentials, and school merch in one
                            quick storefront.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-end gap-3">
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

            {/* ── Stats Row ── */}
            <section className="border-b border-nu-blue/10 bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
                <div className="mb-6 animate-fade-up">
                    <p className="gold-bar text-[11px] font-semibold uppercase tracking-[0.28em] text-nu-gold-dark">
                        Store Overview
                    </p>
                    <h2 className="mt-1 text-2xl font-bold text-nu-blue sm:text-3xl">Quick shopping blocks</h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        { num: '08', label: 'Products' },
                        { num: '06', label: 'Categories' },
                        { num: '24', label: 'Orders' },
                        { num: '03', label: 'Pickup Slots' },
                    ].map((stat, i) => (
                        <div
                            key={stat.label}
                            className="rounded-3xl border border-nu-blue/10 bg-nu-cream p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-nu-gold hover:shadow-lg"
                            style={{ animationDelay: `${i * 80}ms` }}
                        >
                            <p className="bg-gradient-to-r from-nu-blue to-nu-blue-light bg-clip-text text-3xl font-extrabold text-transparent">{stat.num}</p>
                            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-nu-gold-dark">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Store Cards ── */}
            <section className="border-b border-nu-blue/10 bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
                <div className="mb-6 animate-fade-up">
                    <p className="gold-bar text-[11px] font-semibold uppercase tracking-[0.28em] text-nu-gold-dark">
                        Shop Sections
                    </p>
                    <h2 className="mt-1 text-2xl font-bold text-nu-blue sm:text-3xl">Simple store cards</h2>
                </div>

                <div className="grid gap-5 md:grid-cols-3">
                    {[
                        { img: imgEssentials, title: 'Daily Essentials', desc: 'Bags, tumblers, lanyards, and items used every school day.', btn: 'View Products' },
                        { img: imgSupplies, title: 'Study Supplies', desc: 'Notes, desk tools, and study kits for class and review weeks.', btn: 'Shop Supplies' },
                        { img: imgApparel, title: 'Campus Apparel', desc: 'Comfortable pieces for class days, commute days, and weekends.', btn: 'View Apparel' },
                    ].map((card) => (
                        <article key={card.title} className="group rounded-3xl border border-nu-blue/10 bg-nu-cream p-4 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-nu-gold hover:shadow-xl">
                            <div className="flex aspect-4/3 items-center justify-center overflow-hidden rounded-[1.25rem] bg-nu-gold-light">
                                <img src={card.img} alt={card.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            </div>
                            <h3 className="mt-4 text-lg font-bold text-nu-blue">{card.title}</h3>
                            <p className="mt-3 text-sm font-light leading-6 text-nu-blue/60">
                                {card.desc}
                            </p>
                            <Button to="/products" className="mt-4" variant="primary">{card.btn}</Button>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HomePage;
