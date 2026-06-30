import FlavorPicker from "@/components/FlavorPicker";

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
    category: "Breakfast Served All Day",
    items: [
      {
        name: "Breakfast Sandwich",
        description: "Choice of brioche bun or butter croissant topped with fluffy eggs, crispy beef bacon and cheddar cheese.",
        price: "$7.97",
        popular: false,
      },
    ],
  },
  {
    category: "Fan Fav's",
    items: [
      { name: "Hot Dog", description: "Tender marinated beef hot dog. Served how you like it.", price: "$9.99", popular: true },
      { name: "Burger", description: "Two hot beef patties. Served how you like it.", price: "$4.99", popular: false },
      { name: "Buffalo Chicken Loaded Fries", description: "Crispy fries loaded with buffalo chicken, nacho cheese, ranch or blue cheese drizzle.", price: "$8.00+", popular: false },
      { name: "Chili Cheese Fries", description: "Crispy golden fries smothered in rich house-made beef chili and warm melted cheese.", price: "$4.50", popular: false },
      { name: "Street Taco", description: "Tender marinated beef skirt steak, fresh cilantro and onions, house-made salsa verde.", price: "$2.50", popular: true },
      { name: "Nachos", description: "Crispy tortilla chips loaded with seasoned ground beef, melted cheese, and sliced jalapeños.", price: "$6.99", popular: false },
    ],
  },
  {
    category: "Traditional Bone-In Wings",
    items: [
      { name: "6 Bone-In Wings", description: "Choose 1 flavor.", price: "$4.20", popular: false },
      { name: "12 Bone-In Wings", description: "Choose up to 2 flavors.", price: "$24.70", popular: true },
      { name: "24 Bone-In Wings", description: "Choose up to 2 flavors.", price: "$20.00+", popular: false },
    ],
  },
  {
    category: "Boneless Wings",
    items: [
      { name: "Boneless 5 Pc", description: "Choose 1 flavor.", price: "$6.05", popular: true },
      { name: "Boneless 10 Pc", description: "Choose 1 flavor.", price: "$10.85", popular: false },
      { name: "Boneless 20 Pc", description: "Choose up to 2 flavors.", price: "$16.50", popular: false },
    ],
  },
  {
    category: "Sides",
    items: [
      { name: "French Fries", description: "", price: "$3.97", popular: false },
      { name: "Onion Rings", description: "", price: "$4.97", popular: false },
      { name: "Mozzarella Sticks (3 Pc)", description: "", price: "$4.99", popular: true },
      { name: "Mozzarella Sticks (6 Pc)", description: "", price: "$9.00+", popular: false },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Banana Pudding", description: "Cold, creamy, delicious.", price: "$4.97", popular: false },
      { name: "Biscoff Pudding", description: "Dip, bite — decadent, creamy and luscious.", price: "$3.97", popular: true },
    ],
  },
  {
    category: "Beverages",
    items: [
      { name: "Joe's Tea / Juice", description: "", price: "$4.97", popular: true },
      { name: "Can of Soda", description: "", price: "$2.97+", popular: false },
      { name: "Water", description: "", price: "$0.97", popular: false },
    ],
  },
  {
    category: "Extras",
    items: [
      { name: "Extra Blue Cheese", description: "", price: "$0.97", popular: false },
      { name: "Extra Ranch", description: "", price: "$0.97", popular: false },
      { name: "Extra Marinara Sauce", description: "", price: "$0.97", popular: false },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-black uppercase tracking-tight mb-2">Menu</h1>
      <p className="text-neutral-400 mb-4">100% Halal. Fresh. Bold. Houston street food.</p>
      <a
        href="https://www.ubereats.com/store/space-city-bites/BEvV1p9CQxucnTUn6EpVHw"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mb-12 bg-red-600 hover:bg-red-500 text-white font-black px-6 py-3 rounded-full transition-colors uppercase tracking-wider text-sm"
      >
        Order on Uber Eats
      </a>

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
  );
}
