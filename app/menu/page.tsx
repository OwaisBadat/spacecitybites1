export const metadata = {
  title: "Menu",
  description: "Space City Bites menu — wings, burgers, tacos, loaded fries and more. Houston street food.",
};

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
      {
        name: "Hot Dog",
        description: "Tender marinated beef hot dog. Served how you like it.",
        price: "$9.99",
        popular: true,
      },
      {
        name: "Burger",
        description: "Two hot beef patties. Served how you like it.",
        price: "$4.99",
        popular: false,
      },
      {
        name: "Buffalo Chicken Loaded Fries",
        description: "Crispy fries loaded with buffalo chicken and covered in nacho cheese, ranch or blue cheese drizzle.",
        price: "$8.00+",
        popular: false,
      },
      {
        name: "Chili Cheese Fries",
        description: "Crispy golden fries smothered in rich house-made beef chili and blanketed in warm melted cheese.",
        price: "$4.50",
        popular: false,
      },
      {
        name: "Street Taco",
        description: "Tender marinated beef skirt steak topped with fresh cilantro and onions, served with house-made salsa verde.",
        price: "$2.50",
        popular: true,
      },
      {
        name: "Nachos",
        description: "Crispy tortilla chips loaded with seasoned ground beef, melted cheese, and sliced jalapeños.",
        price: "$6.99",
        popular: false,
      },
    ],
  },
  {
    category: "Traditional Bone-In Wings",
    items: [
      {
        name: "6 Bone-In Wings",
        description: "Choose 1 flavor.",
        price: "$4.20",
        popular: false,
      },
      {
        name: "12 Bone-In Wings",
        description: "Choose up to 2 flavors.",
        price: "$24.70",
        popular: true,
      },
      {
        name: "24 Bone-In Wings",
        description: "Choose up to 2 flavors.",
        price: "$20.00+",
        popular: false,
      },
    ],
  },
  {
    category: "Boneless Wings",
    items: [
      {
        name: "Boneless 5 Pc",
        description: "Choose 1 flavor.",
        price: "$6.05",
        popular: true,
      },
      {
        name: "Boneless 10 Pc",
        description: "Choose 1 flavor.",
        price: "$10.85",
        popular: false,
      },
      {
        name: "Boneless 20 Pc",
        description: "Choose up to 2 flavors.",
        price: "$16.50",
        popular: false,
      },
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
      <p className="text-neutral-400 mb-4">Fresh. Bold. Houston street food.</p>
      <a
        href="https://www.ubereats.com/store/space-city-bites/BEvV1p9CQxucnTUn6EpVHw"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mb-12 bg-orange-500 hover:bg-orange-400 text-white font-bold px-6 py-3 rounded-full transition-colors uppercase tracking-wider text-sm"
      >
        Order on Uber Eats
      </a>

      <div className="space-y-12">
        {menu.map(({ category, items }) => (
          <section key={category}>
            <h2 className="text-xs uppercase tracking-widest text-orange-400 mb-4 pb-2 border-b border-neutral-800">
              {category}
            </h2>
            <div className="space-y-4">
              {items.map(({ name, description, price, popular }) => (
                <div key={name} className="flex justify-between gap-4 pb-4 border-b border-neutral-900">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-white">{name}</p>
                      {popular && (
                        <span className="text-[10px] uppercase tracking-wider bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    {description && (
                      <p className="text-sm text-neutral-400 mt-0.5">{description}</p>
                    )}
                  </div>
                  <span className="text-orange-400 font-medium whitespace-nowrap">{price}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
