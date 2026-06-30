const menu = [
  {
    category: "Starters",
    items: [
      { name: "Loaded Fries", description: "Crispy fries topped with cheese, jalapeños & bacon bits", price: "$8" },
      { name: "Wings (6pc)", description: "Choice of Buffalo, BBQ, or Lemon Pepper", price: "$12" },
    ],
  },
  {
    category: "Mains",
    items: [
      { name: "Space City Burger", description: "Double smash patty, cheddar, caramelized onions, secret sauce", price: "$14" },
      { name: "Brisket Sandwich", description: "Slow-smoked brisket, pickles, coleslaw on a brioche bun", price: "$16" },
      { name: "Shrimp Tacos (3pc)", description: "Grilled gulf shrimp, mango salsa, chipotle crema", price: "$15" },
    ],
  },
  {
    category: "Sides",
    items: [
      { name: "Mac & Cheese", description: "Creamy four-cheese blend", price: "$5" },
      { name: "Coleslaw", description: "House-made, lightly sweet", price: "$4" },
    ],
  },
  {
    category: "Drinks",
    items: [
      { name: "Fountain Drink", description: "Coke, Diet Coke, Sprite, Dr Pepper", price: "$3" },
      { name: "Sweet Tea", description: "Texas-style, fresh brewed", price: "$3" },
      { name: "Lemonade", description: "Fresh-squeezed with mint", price: "$4" },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-2">Our Menu</h1>
      <p className="text-neutral-400 mb-12">Fresh ingredients. Big flavors. Made to order.</p>

      <div className="space-y-12">
        {menu.map(({ category, items }) => (
          <section key={category}>
            <h2 className="text-xs uppercase tracking-widest text-orange-400 mb-4">{category}</h2>
            <div className="space-y-4">
              {items.map(({ name, description, price }) => (
                <div key={name} className="flex justify-between gap-4 border-b border-neutral-800 pb-4">
                  <div>
                    <p className="font-semibold text-white">{name}</p>
                    <p className="text-sm text-neutral-400">{description}</p>
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
