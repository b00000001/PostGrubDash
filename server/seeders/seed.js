const db = require('../config/connection');
// const { User } = require('../models');
const { User, Product, Category, Restaurant } = require('../models');
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
    { name: 'Indian' },
    { name: 'French' },
    { name: 'Mexican' },
    { name: 'Hawaiian' },
    { name: 'Donut' }
  ]);

  console.log('categories seeded');

  await Restaurant.deleteMany();

  const restaurants = await Restaurant.insertMany([
    {
      name: 'Plato\'s Plate',
      description:
        'Fresh and delicious Greek food with all the classics!',
      image: '/platos-plate/gyro.jpg',
      category: categories[0]._id,
      price: 4.99,
      products: [
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
    },
    {
      name: 'King Spicy',
      description:
        'Home to all spicy and flavorful Indian cuisine',
      image: '/king-spicy/baked-samosa.jpg',
      category: categories[1]._id,
      price: 3.99,
      products: [
        {
          name: "Tomato Rice",
          description: "A flavorful and delicious dish made with rice and tomatoes,spices and herbs.",
          price: 8.99,
          image: '/king-spicy/tomato-rice.jpg'
        },
        {
          name: "Chana Masala",
          description: "It’s a hearty, saucy chickpea and tomato dish with warming spices.",
          price: 13.99,
          image: '/king-spicy/chana-masala.jpg'
        },
        {
          name: "Pakoda",
          description: "savory indian crisp fried snack made with flour,spices and paneer.",
          price: 14.99,
          image: '/king-spicy/pakoda.jpg'

        },
        {
          name: "Poha",
          description: "succulent and healthy breakfast recipe made with onions, potatoes and seasoning like chillies, crushed peanuts, lemon and curry leaves. ",
          price:10.99,
          image: '/king-spicy/poha.jpg'
        },
        {
          name: "Vegetarian Biryani",
          description: "An aromatic rice dish made with basmati rice, mix veggies, herbs & biryani spice.",
          price: 12.99,
          image: '/king-spicy/veg-biryani.jpg'
        },
        {
          name: "Gulkand Chai",
          description: "Popular preserved tea made from rose petals that are dried and mixed along with sugar mixture.",
          price: 1.50,
          image: '/king-spicy/gulkand_chai.jpg'
        }
      ]
    },
    {
      name: 'La Belle Helene',
      description:
        'We serve french classics foods and drinks with a modern sensibility',
      image: '/la-belle-helene/confit-de-canard.jpg',
      category: categories[2]._id,
      price: 5.99,
      products: [
        {
          name: "Boeuf Bourguignon",
          description: "Stew made from beef braised in red wine, beef broth, and seasoned vegetables including pearl onions and mushrooms..",
          price: 18.99,
          image: '/la-belle-helene/boeuf-bourguignon.jpg'
        },
        {
          name: "Salade Niçoise",
          description: "A mix of lettuce, fresh tomatoes, boiled eggs,tuna, green beans, Nicoise Cailletier olives, and anchovies.",
          price: 4.99,
          image: '/la-belle-helene/salade-nicoise.jpg'
        },
        {
          name: "Coq Au Vin",
          description: "Delicious dish made of chicken braised with wine, mushrooms, salty pork or bacon (lardons), mushrooms, onions, garlic. ",
          price: 20.99,
          image:'/la-belle-helene/coq-au-vin.jpg'
        },
        {
          name: "Flamiche",
          description: "A puff-pastry crust filled with cheese and vegetables and resembles a quiche.",
          price: 4.99,
          image:'/la-belle-helene/flamiche.jpg'
        },
        {
          name: "Ratatouille",
          description: "Most iconic french dishes made with vegetables shallow-fried ",
          price: 12.99,
          image: '/la-belle-helene/ratatouille.jpg'
        },
        {
          name: "Soufflé au chocolat",
          description: "An exquisite dessert that combines dark chocolate with a creamy egg yolk base and fluffy egg whites.",
          price: 5.99,
          image: '/la-belle-helene/chocolate-souffle.jpg'
        },
        {
          name: "Absinthe",
          description: "Bright-green, aniseed-flavored liqueur is famous for its hallucinatory effects.",
          price: 15.99,
          image: '/la-belle-helene/absinthe.jpg'
        },
      ]
    },
    {
      name: 'El Amigo',
      description:
        'Vibrant Mexican eatery with modern twists on traditional classics',
      image: 'el-amigo/quesadilla.jpg',
      category: categories[3]._id,
      price: 4.99,
      products: [
        {
          name: "Burrito",
          description: "Flour tortilla filled with black beans, rice, corn, pico de gallo, shredded cheese, guacamole, and your choice of chicken or carnitas",
          price: 8.99,
          image: '/el-amigo/burrito.png'
        },
        {
          name: "Fajitas",
          description: "Sauteed fresh vegetables served with your choice of chicken or steak",
          price: 10.99,
          image: '/el-amigo/fajitas.jpg'
        },
        {
          name: "Tacos",
          description: "Four flour tortilla tacos filled with pico de gallo, feta cheese, crema, and your choice of chicken or carnitas",
          price: 9.99,
          image: '/el-amigo/tacos.jpg'

        },
        {
          name: "Quesadilla",
          description: "Sliced roasted lamb with sliced onions and tomatos, wrapped in a warm pita.",
          price: 10.99,
          image: '/el-amigo/quesadilla.jpg'
        },
        {
          name: "Nachos Supreme",
          description: "Crispy tortilla chips topped with ground beef, pico de gallo, pinto beans, monterrey cheese, avocados, and a dollop of sour cream, finished off with a sprinkle of jalapenos on top.",
          price: 10.99,
          image: '/el-amigo/nachos-supreme.jpg'
        },
        {
          name: "Bottle of Water",
          description: "Ice cold bottle of water",
          price: 1.99,
          image: '/el-amigo/bottled-water.png'
        }
      ]
    },
    {
      name: 'Ohana Bros',
      description:
        'Authentic Hawaiian food made with love',
      image: '/ohana-bros/loco-moco-plate.jpg',
      category: categories[4]._id,
      price: 4.99,
      products: [
        {
          name: "Kalua Plate",
          description: "Succulent roast pork served with white rice and homemade macaroni salad.",
          price: 12.99,
          image: '/ohana-bros/kalua-plate.jpg'
        },
        {
          name: "Chicken Katsu Plate",
          description: "Crispy, fried chicken served with white rice and homemade macaroni salad.",
          price: 11.99,
          image: '/ohana-bros/chicken-katsu-plate.jpg'
        },
        {
          name: "Loco Moco Plate",
          description: "Burger patty topped with two fried eggs and gravy, served with white rice and homemade macaroni salad.",
          price: 10.99,
          image: '/ohana-bros/loco-moco-plate.jpg'

        },
        {
          name: "Teriyaki Chicken Plate",
          description: "Teriyaki-glazed chicken served with white rice and homemade macaroni salad.",
          price: 10.99,
          image: '/ohana-bros/teriyaki-chicken-plate.jpg'
        },
        {
          name: "Musubi, Stack of 4",
          description: "Grilled Spam slices on top of white rice, wrapped with seaweed.",
          price: 7.99,
          image: '/ohana-bros/musubi.jpg'
        },
        {
          name: "Craft Beer",
          description: "Made with malted barley.",
          price: 16.99,
          image: '/ohana-bros/craft-beer.jpg'
        }
      ]
    },
    {
      name: 'Ye Olde Donut Shop',
      description:
        'Donuts and coffee that you can count on!',
      image: '/ye-olde-donut-shop/glazed-donut.jpg',
      category: categories[5]._id,
      price: 2.99,
      products: [
        {
          name: "Apple Cinnamon Donut",
          description: "An apple donut, coated with cinnamon sugar.",
          price: 1.00,
          image: '/ye-olde-donut-shop/apple-cinnamon-donut.jpg'
        },
        {
          name: "Glazed Donut",
          description: "A yeast dough donut, dipped in a sugary glaze.",
          price: 1.00,
          image: '/ye-olde-donut-shop/glazed-donut.jpg'

        },
        {
          name: "Glazed Sour Cream",
          description: "A sour cream dough donut, dipped in a sugary glaze.",
          price: 1.10,
          image: '/ye-olde-donut-shop/glazed-sour-cream.jpg'
        },
        {
          name: "Raspberry Jelly Donut",
          description: "A sugar coated donut, filled with raspberry jelly.",
          price: 1.05,
          image: '/ye-olde-donut-shop/raspberry-jelly-donut.jpg'
        },
        {
          name: "Crueller",
          description: "A flaky donut, dipped in a sugary glaze.",
          price: 1.35,
          image: '/ye-olde-donut-shop/crueller.jpg'
        },
        {
          name: "Coffee",
          description: "Fresh brewed donut shop coffee.",
          price: 1.00,
          image: '/ye-olde-donut-shop/coffee.jpg'
        },
        {
          name: "Milk",
          description: "Whole milk from a local dairy.",
          price: 1.20,
          image: '/ye-olde-donut-shop/milk.jpg'
        }
      ]
    },
    {
      name: 'Tortuga',
      description:
        'Flavorful rustic mexican dishes',
      image: 'tortuga/birria.jpg',
      category: categories[3]._id,
      price: 4.99,
      products: [
        {
          name: "Birria Quesatacos",
          description: "Our best seller! Beef brisket marinated in 3 diffrenet type of chiles, topped with queso blanco and servered with the birria marinade.",
          price: 13.99,
          image: '/tortuga/birria.jpg'
        },
        {
          name: "Tamales",
          description: "Five steamed cornhusks filled with pork, chiles, and vegetables.",
          price: 11.99,
          image: '/tortuga/tamales.jpg'
        },
        {
          name: "Enchiladas",
          description: "Two beef enchiladas topped with queso blanco servered with a side of our tex-mex avacado salad.",
          price: 15.99,
          image: '/tortuga/enchilada.jpg'

        },
        {
          name: "Churros!",
          description: "Be serious, who can resist fresh made churros?",
          price: 7.99,
          image: '/tortuga/churros.jpg'
        },
        {
          name: "Jarritos",
          description: "Cool off with some soda. Flavors are lime, mango, fruit punch, pineapple, and mandarin",
          price: 1.99,
          image: '/tortuga/jarrito.jpg'
        }
      ]
    },
  ]);

  console.log('restaurants seeded');

  await User.deleteMany();

  await User.create({
    username: 'user1',
    email: 'user1@gmail.com',
    password: 'password123',
    orders: []
  });

  await User.create({
    username: 'user2',
    email: 'user2@gmail.com',
    password: 'password123',
    orders: []
  });

  console.log('users seeded');

  process.exit();
});

