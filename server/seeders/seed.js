const db = require('../config/connection');
// const { User } = require('../models');
const { User, Product, Category } = require('../models');
// const userSeeds = require('./userSeeds.json');

// db.once('open', async () => {
//   try {
//     await User.deleteMany({});
//     await User.create(userSeeds);
//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }
//   process.exit(0);
// });

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Greek' },
    { name: 'Household Supplies' },
    { name: 'Electronics' },
    { name: 'Books' },
    { name: 'Toys' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Plato\'s Plate',
      description:
        'Fresh and delicious Greek food with all the classics!',
      image: '/platos-plate/gyro.jpg',
      category: categories[0]._id,
      price: 4.99,
      menuItems: [
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
      ]
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});

