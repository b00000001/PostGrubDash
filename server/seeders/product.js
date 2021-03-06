const db = require('../config/connection');
const { Product} = require('../models');


db.once('open', async () => {
  await Product.deleteMany();

  const products = [
    {
      name: "Greek Fries",
      description: "Crispy, crunchy fries with chunks of feta cheese, drizzled with olive oil.",
      price: 6.99,
      image: '/platos-plate/greek-fries.jpg'
    },
    {
      name: "Spanakopita",
      description: "Tasty spinach cooked with onions and feta cheese, wrapped in a flaky phyllo dough.",
      price: 9.99,
      image: '/platos-plate/spanakopita.jpg'
    },
    {
      name: "Greek Salad",
      description: "Fresh lettuce, sliced onions, slice cucumbers, olives, and feta cheese, tossed with salad dressing.",
      price: 6.99,
      image: '/platos-plate/greek-salad.jpg'

    },
    {
      name: "Gyro",
      description: "Sliced roasted lamb with sliced onions and tomatos, wrapped in a warm pita.",
      price: 10.99,
      image: '/platos-plate/gyro.jpg'
    },
    {
      name: "Moussaka",
      description: "Layered grounded lamb and roasted eggplant, topped with a bechemel sauce.",
      price: 12.99,
      image: '/platos-plate/moussaka.jpg'
    },
    {
      name: "Soft Drink",
      description: "Always cold soda.",
      price: 1.99,
      image: '/platos-plate/soft-drink.jpg'
    }
  ];

  Product.insertMany(products);
  console.log('products seeded');
  process.exit();
});

