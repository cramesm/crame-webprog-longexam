/* ============================================================
   ENHANCEMENT 1 — Original Product Catalog
   ============================================================ */

const products = [
  {
    name: 'bulldog-varsity-cap',
    title: 'Bulldog Varsity Cap',
    category: 'Accessories',
    price: 'PHP 350',
    stock: 'In stock',
    image: 'bulldog-varsity-cap.jpg',
    content: [
      'A structured six-panel cap featuring the NU Bulldogs embroidered logo on the front.',
      'Built with breathable cotton twill and an adjustable snapback closure for a comfortable all-day fit.',
      'Perfect for outdoor PE classes, campus events, and casual weekend wear.',
    ],
  },
  {
    name: 'campus-laptop-sleeve',
    title: 'Campus Laptop Sleeve',
    category: 'Tech',
    price: 'PHP 650',
    stock: 'In stock',
    image: 'campus-laptop-sleeve.jpg',
    content: [
      'A padded neoprene sleeve designed to protect 13 to 15-inch laptops during daily campus commutes.',
      'Features a slim-profile zipper, a front pocket for chargers and cables, and a water-resistant exterior.',
      'Slides easily into any backpack or tote without adding bulk to your carry.',
    ],
  },
  {
    name: 'student-planner-2026',
    title: 'Student Planner 2026',
    category: 'Stationery',
    price: 'PHP 299',
    stock: 'In stock',
    image: 'student-planner-2026.jpg',
    content: [
      'A spiral-bound academic planner covering the full 2026 school year with monthly and weekly spreads.',
      'Includes goal-setting pages, exam trackers, and project deadline layouts tailored for college life.',
      'Printed on thick, bleed-resistant paper with a durable matte laminate cover.',
    ],
  },
  {
    name: 'bulldogs-hoodie',
    title: 'NU Bulldogs Hoodie',
    category: 'Apparel',
    price: 'PHP 1,299',
    stock: 'Preorder',
    image: 'bulldogs-hoodie.jpg',
    content: [
      'A heavyweight pullover hoodie with the Bulldogs wordmark screen-printed across the chest.',
      'Made from a brushed fleece cotton-poly blend for warmth in air-conditioned lecture halls.',
      'Available through preorder so you can secure your preferred size before the next batch drops.',
    ],
  },
  {
    name: 'eco-water-jug',
    title: 'Eco-Friendly Water Jug',
    category: 'Drinkware',
    price: 'PHP 450',
    stock: 'Low stock',
    image: 'eco-water-jug.jpg',
    content: [
      'A 1-liter BPA-free Tritan water jug with time markers to help you stay hydrated between classes.',
      'The wide-mouth opening makes it easy to add ice, clean, and refill at campus water stations.',
      'Comes with a carry strap and a leak-proof flip cap for tossing into your bag worry-free.',
    ],
  },
  {
    name: 'study-essentials-bundle',
    title: 'Study Essentials Bundle',
    category: 'Bundles',
    price: 'PHP 549',
    stock: 'In stock',
    image: 'study-essentials-bundle.jpg',
    content: [
      'An all-in-one kit containing highlighters, correction tape, sticky flags, gel pens, and a mini stapler.',
      'Packed in a reusable zipper pouch that fits inside any pencil case or bag pocket.',
      'A convenient grab-and-go set for midterms, finals week, or everyday note-taking.',
    ],
  },
  {
    name: 'campus-drawstring-bag',
    title: 'Campus Drawstring Bag',
    category: 'Bags',
    price: 'PHP 279',
    stock: 'In stock',
    image: 'campus-drawstring-bag.jpg',
    content: [
      'A lightweight polyester drawstring bag with reinforced grommets and padded shoulder straps.',
      'Roomy enough for gym clothes, a change of shoes, and small personal items.',
      'Folds flat for storage and doubles as a secondary carry for heavy class days.',
    ],
  },
  {
    name: 'wireless-earbuds-case',
    title: 'Wireless Earbuds Case',
    category: 'Tech',
    price: 'PHP 199',
    stock: 'In stock',
    image: 'wireless-earbuds-case.jpg',
    content: [
      'A compact silicone protective case compatible with most wireless earbud charging cases.',
      'Includes a carabiner clip so you can attach it to your bag, lanyard, or belt loop.',
      'Shock-absorbent design keeps your earbuds safe from drops on concrete campus walkways.',
    ],
  },
];

export default products;
