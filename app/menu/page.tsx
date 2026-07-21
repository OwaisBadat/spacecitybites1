import Image from "next/image";
import FlavorPicker from "@/components/FlavorPicker";
import OrderButton from "@/components/OrderButton";

export const metadata = {
  title: "Menu",
  description: "Space City Bites full menu — 50 wing flavors, halal street food, Houston TX.",
};

const flavors = [
  { num: 1, name: "Buffalo" },
  { num: 2, name: "Buffalo 911" },
  { num: 3, name: "Buffalo Minced Garlic" },
  { num: 4, name: "BBQ" },
  { num: 5, name: "Spicy BBQ" },
  { num: 6, name: "Hickory Smoked BBQ" },
  { num: 7, name: "Honey Hot" },
  { num: 8, name: "Honey Garlic" },
  { num: 9, name: "Teriyaki" },
  { num: 10, name: "Spicy Teriyaki" },
  { num: 11, name: "Honey Teriyaki" },
  { num: 12, name: "Spicy Honey Teriyaki" },
  { num: 13, name: "Teriyaki BBQ" },
  { num: 14, name: "Spicy Teriyaki BBQ" },
  { num: 15, name: "Garlic Teriyaki" },
  { num: 16, name: "Spicy Garlic Teriyaki" },
  { num: 17, name: "Garlic Parmesan" },
  { num: 18, name: "Spicy Garlic Parmesan" },
  { num: 19, name: "Lemon Pepper Buffalo" },
  { num: 20, name: "Lemon Pepper BBQ" },
  { num: 21, name: "Spicy Honey Lemon Pepper" },
  { num: 22, name: "Honey Lemon Pepper" },
  { num: 23, name: "Sriracha Buffalo" },
  { num: 24, name: "Sriracha BBQ" },
  { num: 25, name: "Honey Sriracha" },
  { num: 26, name: "Sriracha Chili" },
  { num: 27, name: "Sriracha Garlic Chili" },
  { num: 28, name: "Chipotle Buffalo" },
  { num: 29, name: "Chipotle Garlic Buffalo" },
  { num: 30, name: "Chipotle BBQ" },
  { num: 31, name: "Honey Chipotle" },
  { num: 32, name: "Soy Sauce" },
  { num: 33, name: "Spicy Soy Sauce" },
  { num: 34, name: "Garlic Soy Sauce" },
  { num: 35, name: "Soy BBQ" },
  { num: 36, name: "Spicy Soy BBQ" },
  { num: 37, name: "Caribbean Jerk Wet" },
  { num: 38, name: "Cajun Wet" },
  { num: 39, name: "Mango Habanero" },
  { num: 40, name: "Garlic Mango Habanero" },
  { num: 41, name: "Sweet Chili" },
  { num: 42, name: "Thai Chili" },
  { num: 43, name: "Naked" },
  { num: 44, name: "Salt & Pepper (Dry Rub)" },
  { num: 45, name: "Hot (Dry Rub)" },
  { num: 46, name: "Cajun (Dry Rub)" },
  { num: 47, name: "Chipotle (Dry Rub)" },
  { num: 48, name: "Sriracha (Dry Rub)" },
  { num: 49, name: "Lemon Pepper (Dry Rub)" },
  { num: 50, name: "Caribbean Jerk (Dry Rub)" },
];

const menu = [
  {
    category: "Combos",
    items: [
      { name: "5 Pc Boneless Combo", description: "5 boneless wings, fries and a drink.", price: "$10.98", popular: false },
      { name: "6 Pc Wings Combo", description: "6 bone-in wings, fries and a drink.", price: "$12.98", popular: true },
      { name: "Hot Dog Combo", description: "Hot dog served with fries and a drink.", price: "$11.98", popular: false },
      { name: "Burger Combo", description: "Double patty burger served with fries and a drink.", price: "$14.98", popular: true },
    ],
  },
  {
    category: "Fan Fav's",
    items: [
      { name: "Hot Dog", description: "1/4 lb all beef hot dog. Served how you like it.", price: "$9.99", popular: true },
      { name: "Burger", description: "Two 4oz beef patties. Served how you like it.", price: "$12.99", popular: false },
      { name: "Buffalo Chicken Loaded Fries", description: "Crispy fries loaded with buffalo chicken and nacho cheese, ranch or blue cheese drizzle.", price: "$13.99", popular: false },
      { name: "Chili Cheese Fries", description: "Crispy golden fries smothered in rich house-made beef chili and warm melted cheese.", price: "$10.99", popular: false },
      { name: "Street Taco", description: "Tender marinated beef skirt steak, fresh cilantro and onions, house-made salsa verde on the side.", price: "$3.50", popular: true },
      { name: "Breakfast Sandwich", description: "Brioche bun or butter croissant, fluffy eggs, crispy beef bacon and cheddar. Add a smash patty if you like.", price: "$7.99", popular: false },
    ],
  },
  {
    category: "Traditional Bone-In Wings",
    items: [
      { name: "6 Bone-In Wings", description: "Choose 1 flavor.", price: "$10.99", popular: false },
      { name: "12 Bone-In Wings", description: "Choose up to 2 flavors.", price: "$18.99", popular: true },
      { name: "24 Bone-In Wings", description: "Choose up to 3 flavors.", price: "$39.99", popular: false },
    ],
  },
  {
    category: "Boneless Wings",
    items: [
      { name: "Boneless 5 Pc", description: "Choose 1 flavor.", price: "$8.99", popular: true },
      { name: "Boneless 10 Pc", description: "Choose 1 flavor.", price: "$15.99", popular: false },
      { name: "Boneless 20 Pc", description: "Choose up to 2 flavors.", price: "$31.99", popular: false },
    ],
  },
  {
    category: "Sides",
    items: [
      { name: "French Fries", description: "", price: "$2.99", popular: false },
      { name: "Onion Rings", description: "", price: "$3.99", popular: false },
      { name: "Mozzarella Sticks (3 Pc)", description: "", price: "$3.99", popular: true },
      { name: "Mozzarella Sticks (6 Pc)", description: "", price: "$6.99", popular: false },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Banana Pudding", description: "Cool, creamy, delicious.", price: "$4.97", popular: false },
      { name: "Biscoff Pudding", description: "Our take — decadent, creamy and luscious.", price: "$3.97", popular: true },
    ],
  },
  {
    category: "Beverages",
    items: [
      { name: "Joe's Tea / Juice", description: "", price: "$3.99", popular: true },
      { name: "Can of Soda", description: "", price: "$1.99", popular: false },
      { name: "Water", description: "", price: "$1.00", popular: false },
    ],
  },
  {
    category: "Extras",
    items: [
      { name: "Extra Blue Cheese", description: "", price: "$0.87", popular: false },
      { name: "Extra Ranch", description: "", price: "$0.87", popular: false },
      { name: "Extra Marinara Sauce", description: "", price: "$0.87", popular: false },
    ],
  },
];

export default function MenuPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-28 sm:py-40 overflow-hidden bg-black min-h-[400px]">
        <Image
          src="/Breakfeast Sandwhich.PNG"
          alt="Space City Bites breakfast sandwich"
          fill
          className="object-cover object-center opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
        <div className="relative z-10 max-w-xl mx-auto">
          <p className="text-blue-400 text-xs uppercase tracking-[0.3em] mb-3 font-bold">100% Halal · Houston, TX</p>
          <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tight text-white mb-3 leading-none">Menu</h1>
          <p className="text-neutral-300 text-sm mb-6">Fresh. Bold. Made to order.</p>
          <OrderButton
            location="menu_hero"
            className="inline-block bg-red-600 hover:bg-red-500 text-white font-black px-8 py-4 rounded-full transition-colors uppercase tracking-wider text-sm shadow-lg shadow-red-900/40"
          >
            Order Online
          </OrderButton>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-16">

      {/* Menu items */}
      <div className="space-y-12 mb-20">
        {menu.map(({ category, items }) => (
          <section key={category}>
            <h2 className="text-xs uppercase tracking-widest text-red-500 mb-4 pb-2 border-b border-neutral-800">
              {category}
            </h2>
            <div className="space-y-4">
              {items.map(({ name, description, price, popular }) => (
                <div key={name} className="flex justify-between gap-4 pb-4 border-b border-neutral-900">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-semibold text-white">{name}</p>
                      {popular && (
                        <span className="text-[10px] uppercase tracking-wider bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    {description && (
                      <p className="text-sm text-neutral-400 mt-0.5">{description}</p>
                    )}
                  </div>
                  <span className="text-red-400 font-bold whitespace-nowrap">{price}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* 50 Flavors — interactive picker */}
      <FlavorPicker flavors={flavors} />
    </div>
    </div>
  );
}
