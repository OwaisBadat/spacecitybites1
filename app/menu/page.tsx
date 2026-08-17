import Image from "next/image";
import FlavorPicker from "@/components/FlavorPicker";
import OrderButton from "@/components/OrderButton";

export const metadata = {
  title: "Menu",
  description: "Space City Bites full menu — 20+ wing flavors, burgers, hot dogs, tacos and more. Halal street food, Houston TX.",
  alternates: { canonical: "/menu" },
};

const flavors = [
  { num: 1, name: "Buffalo" },
  { num: 2, name: "Buffalo 911" },
  { num: 3, name: "Buffalo Minced Garlic" },
  { num: 4, name: "Lemon Pepper Buffalo" },
  { num: 5, name: "BBQ" },
  { num: 6, name: "Spicy BBQ" },
  { num: 7, name: "Honey BBQ" },
  { num: 8, name: "Lemon Pepper BBQ" },
  { num: 9, name: "Teriyaki" },
  { num: 10, name: "Teriyaki BBQ" },
  { num: 11, name: "Honey Teriyaki" },
  { num: 12, name: "Honey Hot" },
  { num: 13, name: "Honey Lemon Pepper" },
  { num: 14, name: "Spicy Honey Lemon Pepper" },
  { num: 15, name: "Garlic Parmesan" },
  { num: 16, name: "Spicy Garlic Parmesan" },
  { num: 17, name: "Caribbean Jerk Wet" },
  { num: 18, name: "Cajun Wet" },
  { num: 19, name: "Mango Habanero" },
  { num: 20, name: "El Nino" },
  { num: 21, name: "Naked" },
  { num: 22, name: "Cajun (Dry Rub)" },
  { num: 23, name: "Lemon Pepper (Dry Rub)" },
  { num: 24, name: "Caribbean Jerk (Dry Rub)" },
];

const menu = [
  {
    category: "Combos",
    items: [
      { name: "6 Pc Bone-In Wing Combo", description: "Six crispy skin-on bone-in wings in your choice of flavor, served with fries and a drink.", price: "$12.99", popular: true },
      { name: "12 Pc Bone-In Wing Combo", description: "A dozen bone-in wings across two flavors, with fries and a drink.", price: "$21.99", popular: false },
      { name: "5 Pc Boneless Combo", description: "Five juicy boneless wings in one flavor, with fries and a drink.", price: "$10.99", popular: false },
      { name: "10 Pc Boneless Combo", description: "Ten boneless wings across two flavors, with fries and a drink.", price: "$18.99", popular: false },
      { name: "Classic Burger Combo", description: "Our Classic beef smash burger served with fries and a drink.", price: "$9.99", popular: true },
    ],
  },
  {
    category: "Fan Fav's",
    items: [
      { name: "The Cosmic Crispy", description: "A marinated chicken thigh fried to perfection and tossed in your choice of sauce, on a potato roll with spicy mayo. Cheese and pickles optional — add beef bacon if you dare.", price: "$11.99", popular: true },
      { name: "Street Taco", description: "Tender marinated beef skirt steak topped with fresh cilantro and onions, served with house-made salsa verde on the side.", price: "$3.50", popular: true },
      { name: "Buffalo Chicken Loaded Fries", description: "Crispy fries piled with boneless buffalo chicken and nacho cheese, finished with a ranch or blue cheese drizzle.", price: "$13.99", popular: false },
      { name: "Chili Cheese Fries", description: "Crispy golden fries smothered in house-made beef chili and warm nacho cheese.", price: "$10.99", popular: false },
      { name: "Breakfast Sandwich", description: "Fluffy egg omelette, crispy beef bacon and American cheese on a butter croissant or potato roll. Add a smash patty if you like.", price: "$7.99", popular: false },
    ],
  },
  {
    category: "Burgers",
    items: [
      { name: "The Classic Smash", description: "A juicy 4oz smashed beef patty with house burger sauce, grilled onions, pickles and American cheese on a soft potato roll.", price: "$6.99", popular: true },
      { name: "BBQ Rodeo Burger", description: "4oz beef patty stacked with slow-simmered beef chili, a crispy onion ring, BBQ sauce, pickles and American cheese on a soft potato roll.", price: "$9.99", popular: false },
      { name: "Jalapeño Blast Burger", description: "4oz beef patty with creamy jalapeño ranch, grilled jalapeños, melted pepper jack and crispy onions on a soft potato roll.", price: "$13.99", popular: false },
    ],
  },
  {
    category: "Hot Dogs",
    items: [
      { name: "Gordo's Dog", description: "A loaded beef hot link with whipped cream cheese, caramelized onions, jalapeño ranch, crispy onions and our special ketchup.", price: "$11.99", popular: true },
      { name: "Chili Cheese Dog", description: "A beef hot link smothered in slow-simmered beef chili and warm nacho cheese.", price: "$9.99", popular: false },
      { name: "Classic Dog", description: "A classic beef hot link on a soft potato bun — dressed just how you like it.", price: "$6.99", popular: false },
    ],
  },
  {
    category: "Traditional Bone-In Wings",
    items: [
      { name: "6 Bone-In Wings", description: "Six skin-on wings, double-fried crispy and tossed in your choice of flavor. Choose 1 flavor.", price: "$10.99", popular: false },
      { name: "12 Bone-In Wings", description: "A dozen skin-on wings, double-fried and tossed to order. Choose up to 2 flavors.", price: "$18.99", popular: true },
      { name: "24 Bone-In Wings", description: "Two dozen skin-on wings for the whole crew, tossed to order. Choose up to 3 flavors.", price: "$39.99", popular: false },
    ],
  },
  {
    category: "Boneless Wings",
    items: [
      { name: "5 Pc Boneless Wings", description: "Cubed all-white chicken breast, marinated 24 hours, hand-breaded and fried golden. Choose 1 flavor.", price: "$8.99", popular: true },
      { name: "10 Pc Boneless Wings", description: "Ten hand-breaded, 24-hour marinated boneless wings fried to order. Choose up to 2 flavors.", price: "$15.99", popular: false },
      { name: "20 Pc Boneless Wings", description: "Twenty boneless wings for sharing, hand-breaded and fried to order. Choose up to 2 flavors.", price: "$31.99", popular: false },
    ],
  },
  {
    category: "Sides",
    items: [
      { name: "French Fries", description: "Crispy golden fries.", price: "$2.99", popular: false },
      { name: "Large French Fries", description: "A generous basket of crispy golden fries.", price: "$4.99", popular: false },
      { name: "Onion Rings", description: "Thick-cut, golden battered onion rings.", price: "$3.99", popular: false },
      { name: "Large Onion Rings", description: "A generous basket of thick-cut battered onion rings.", price: "$5.99", popular: false },
      { name: "Mozzarella Sticks (3 Pc)", description: "Golden fried mozzarella sticks served with marinara.", price: "$3.99", popular: true },
      { name: "Mozzarella Sticks (6 Pc)", description: "Six golden fried mozzarella sticks served with marinara.", price: "$6.99", popular: false },
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
      { name: "Joe's Tea", description: "Ice-cold Joe Tea — sweet and refreshing.", price: "$3.99", popular: true },
      { name: "Can of Soda", description: "Your choice of ice-cold canned soda.", price: "$1.99", popular: false },
      { name: "Bottled Water", description: "", price: "$1.00", popular: false },
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

      {/* Wing flavors — interactive picker */}
      <FlavorPicker flavors={flavors} />
    </div>
    </div>
  );
}
