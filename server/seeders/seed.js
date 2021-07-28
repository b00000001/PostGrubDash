const db = require("../config/connection");
// const { User } = require("../models");
const { User, Product, Category, Restaurant } = require("../models");

const categoryData = require("./categories/categoryData.json");

const platosPlateData = require("./restaurantsMenu/platosPlateData.json");
const kingSpicyData = require("./restaurantsMenu/kingSpicyData.json");
const laBelleHeleneData = require("./restaurantsMenu/laBelleHeleneData.json");
const elAmigoData = require("./restaurantsMenu/elAmigoData.json");
const ohanaBrosData = require("./restaurantsMenu/ohanaBrosData.json");
const yeOldeDonutShopData = require("./restaurantsMenu/yeOldeDonutShopData.json");
const tortugaData = require("./restaurantsMenu/tortugaData.json");

const restaurantDataList = [
  platosPlateData, 
  kingSpicyData, 
  laBelleHeleneData, 
  elAmigoData, 
  ohanaBrosData, 
  yeOldeDonutShopData, 
  tortugaData 
];

// const userSeeds = require("./userSeeds.json");

// db.once("open", async () => {
//   try {
//     await User.deleteMany({});
//     await User.create(userSeeds);
//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }
//   process.exit(0);
// });

db.once("open", async () => {
  
  await Category.deleteMany();

  const categories = await Category.insertMany(categoryData);

  console.log("categories seeded");

  await Product.deleteMany(); 
  await Restaurant.deleteMany();

  const restaurantProductsPP = await Product.insertMany(platosPlateData);
  const restaurantProductIdsPP = restaurantProductsPP.map(o => o._id);

  const restaurantProductsKS = await Product.insertMany(kingSpicyData);
  const restaurantProductIdsKS = restaurantProductsKS.map(o => o._id);
  
  const restaurantProductsLBH = await Product.insertMany(laBelleHeleneData);
  const restaurantProductIdsLBH = restaurantProductsLBH.map(o => o._id);

  const restaurantProductsEA = await Product.insertMany(elAmigoData);
  const restaurantProductIdsEA = restaurantProductsEA.map(o => o._id);

  const restaurantProductsOB = await Product.insertMany(ohanaBrosData);
  const restaurantProductIdsOB = restaurantProductsOB.map(o => o._id);
  
  const restaurantProductsYODS = await Product.insertMany(yeOldeDonutShopData);
  const restaurantProductIdsYODS = restaurantProductsYODS.map(o => o._id);
  
  const restaurantProductsT = await Product.insertMany(tortugaData);
  const restaurantProductIdsT = restaurantProductsT.map(o => o._id);

  const restaurantsData = [
    {
      "name": "Plato's Plate",
      "description":
        "Fresh and delicious Greek food with all the classics!",
      "image": "/platos-plate/gyro.jpg",
      "category": categories[0]._id,
      "price": 4.99,
      "products": restaurantProductIdsPP
    },
    {
      "name": "King Spicy",
      "description":
        "Home to all spicy and flavorful Indian cuisine",
      "image": "/king-spicy/baked-samosa.jpg",
      "category": categories[1]._id,
      "price": 3.99,
      "products": restaurantProductIdsKS
    },
    {
      "name": "La Belle Helene",
      "description":
        "We serve french classics foods and drinks with a modern sensibility",
      "image": "/la-belle-helene/confit-de-canard.jpg",
      "category": categories[2]._id,
      "price": 5.99,
      "products": restaurantProductIdsLBH
    },
    {
      "name": "El Amigo",
      "description":
        "Vibrant Mexican eatery with modern twists on traditional classics",
      "image": "el-amigo/quesadilla.jpg",
      "category": categories[3]._id,
      "price": 4.99,
      "products": restaurantProductIdsEA
    },
    {
      "name": "Ohana Bros",
      "description":
        "Authentic Hawaiian food made with love",
      "image": "/ohana-bros/loco-moco-plate.jpg",
      "category": categories[4]._id,
      "price": 4.99,
      "products": restaurantProductIdsOB
    },
    {
      "name": "Ye Olde Donut Shop",
      "description":
        "Donuts and coffee that you can count on!",
      "image": "/ye-olde-donut-shop/glazed-donut.jpg",
      "category": categories[5]._id,
      "price": 2.99,
      "products": restaurantProductIdsYODS
    },
    {
      "name": "Tortuga",
      "description":
        "Flavorful rustic Mexican dishes",
      "image": "tortuga/birria.jpg",
      "category": categories[3]._id,
      "price": 4.99,
      "products": restaurantProductIdsT
    }
  ];

  const restaurants = await Restaurant.insertMany(restaurantsData);

  console.log("restaurants seeded");

  await User.deleteMany();

  await User.create({
    "username": "user1",
    "email": "user1@gmail.com",
    "password": "password123",
    "orders": []
  });

  await User.create({
    "username": "user2",
    "email": "user2@gmail.com",
    "password": "password123",
    "orders": []
  });

  console.log("users seeded");

  process.exit();
});

