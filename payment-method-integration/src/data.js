const foodData = [
  {
    id: 1,
    title: "Chicken skewers",
    description: "Chicken skewers with slices of sweet peppers and dill",
    price: 5,
    imageUrl:
      "https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?t=st=1711132406~exp=1711136006~hmac=fba715f25fede9c5f4a64a06949d104eacca12fcce21a8d1769807511e02aa7d&w=900",
    category: "lunch",
  },
  {
    id: 2,
    title: "Penne pasta",
    description: "Penne pasta in tomato sauce with chicken and tomatoes",
    price: 15,
    imageUrl:
      "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?t=st=1711132458~exp=1711136058~hmac=9153f087ee248bb1f60febadc6cf93201613c0b3be4dbb6a0073ea74ff838d6b&w=900",
    category: "breakfast",
  },
  {
    id: 3,
    title: "Mexican tacos",
    description: "Mexican tacos with beef in tomato sauce and salsa",
    price: 8,
    imageUrl:
      "https://img.freepik.com/free-photo/mexican-tacos-with-beef-tomato-sauce-salsa_2829-14218.jpg?t=st=1711132564~exp=1711136164~hmac=2dfef7501c7958cbc6208261fc617f8af953711eced1fb07f9196ca5509c49f6&w=900",
    category: "dinner",
  },
  {
    id: 4,
    title: "tur meat",
    description: "Chicken skewers with slices of sweet peppers and dill",
    price: 10,
    imageUrl:
      "https://img.freepik.com/free-photo/selective-focus-shot-tur-meat-with-asparagus-tasty-sauce_181624-28769.jpg?t=st=1711132620~exp=1711136220~hmac=9d54b31884ef184325e7a4888cafe0348830bfaee87cca3126e410a0ea3f5244&w=900",
    category: "breakfast",
  },
  {
    id: 5,
    title: "Doner",
    description: "Side view doner on a plate with french fries",
    price: 18,
    imageUrl:
      "https://img.freepik.com/free-photo/side-view-doner-plate-with-french-fries-tomato-fresh-cucumber-yogurt-bread-table_141793-4969.jpg?t=st=1711133357~exp=1711136957~hmac=a38283ce443094ae4582a3cd9ba6fbbcd7928ad1703427b8c4b4dfc222467d5e&w=900",
    category: "lunch",
  },
  {
    id: 6,
    title: "Pasta spaghetti",
    description: "Pasta spaghetti with shrimps and sauce",
    price: 12,
    imageUrl:
      "https://img.freepik.com/free-photo/pasta-spaghetti-with-shrimps-sauce_1220-5072.jpg?t=st=1711133435~exp=1711137035~hmac=720d73f975b87335cd27b5147042c031b7db143e67114fa34a8b6a0cb3eadcd1&w=900",
    category: "lunch",
  },
  {
    id: 7,
    title: "Fried meat",
    description: "Side view fried meat with french fries and ketchup",
    price: 20,
    imageUrl:
      "https://img.freepik.com/free-photo/side-view-fried-meat-with-french-fries-ketchup_141793-4908.jpg?t=st=1711133479~exp=1711137079~hmac=0dde60278266629bc164bb6420b91612b8aa903dbd67bfa6820605366f6bc74b&w=900",
    category: "dinner",
  },
  {
    id: 8,
    title: "Russian cuisine",
    description: "Juicy delicious meat cutlets on a dark table",
    price: 9,
    imageUrl:
      "https://img.freepik.com/free-photo/juicy-delicious-meat-cutlets-dark-table-russian-cuisine_2829-7278.jpg?t=st=1711133546~exp=1711137146~hmac=3f9251df5a7886d59e05e4108e4dd36e5a16ead67ebc0902c393073dd58c0945&w=900",
    category: "dinner",
  },
  {
    id: 9,
    title: "Scrambled Eggs",
    description: "Scrambled eggs served with toast and butter",
    price: 6,
    imageUrl:
      "https://img.freepik.com/free-photo/scrambled-eggs-plate_23-2148592203.jpg?t=st=1713091431~exp=1713095031~hmac=60bc7b8ec18bc581cf2918bf005e9c80e340f921a08612215dea978eb9833209&w=1060",
    category: "breakfast",
  },
  {
    id: 10,
    title: "Pancakes",
    description: "Fluffy pancakes served with maple syrup and fresh berries",
    price: 8,
    imageUrl:
      "https://www.allrecipes.com/thmb/WqWggh6NwG-r8PoeA3OfW908FUY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21014-Good-old-Fashioned-Pancakes-mfs_001-1fa26bcdedc345f182537d95b6cf92d8.jpg",
    category: "breakfast",
  },
  {
    id: 11,
    title: "French Toast",
    description:
      "Classic French toast served with powdered sugar and a side of bacon",
    price: 7,
    imageUrl:
      "https://www.allrecipes.com/thmb/kpI2DQrw7zDake_7B8wOJRkZ-6Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-recipe-16895-fluffy-french-toast-hero-01-ddmfs-4x3-7fd61e054f2c4f0f868b7ab0dd8767ae.jpg",
    category: "breakfast",
  },
  {
    id: 12,
    title: "Caesar Salad",
    description:
      "Fresh romaine lettuce with Caesar dressing, croutons, and parmesan cheese",
    price: 9,
    imageUrl:
      "https://www.thespruceeats.com/thmb/DRaBINVopeoHOpjJn66Yh7pMBSc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-caesar-salad-recipe-996054-Hero_01-33c94cc8b8e841ee8f2a815816a0af95.jpg",
    category: "lunch",
  },
  {
    id: 13,
    title: "Margherita Pizza",
    description:
      "Classic Margherita pizza with tomato sauce, mozzarella, and basil",
    price: 12,
    imageUrl:
      "https://static01.nyt.com/images/2014/04/09/dining/09JPPIZZA2/09JPPIZZA2-superJumbo-v3.jpg",
    category: "lunch",
  },
  {
    id: 14,
    title: "Chicken Alfredo Pasta",
    description:
      "Creamy Alfredo sauce tossed with grilled chicken and fettuccine pasta",
    price: 14,
    imageUrl:
      "https://img.apmcdn.org/5e7b4f4a2fcf4df830f406719c22df84b0a14f78/uncropped/26124e-splendid-table-simple-chicken-alfredo.jpg",
    category: "lunch",
  },
  {
    id: 15,
    title: "Grilled Salmon",
    description:
      "Fresh grilled salmon fillet served with steamed vegetables and rice",
    price: 16,
    imageUrl:
      "https://www.pccmarkets.com/wp-content/uploads/2017/08/pcc-rosemary-grilled-salmon-flo.jpg",
    category: "dinner",
  },
  {
    id: 16,
    title: "Beef Tenderloin",
    description:
      "Tender beef tenderloin steak served with mashed potatoes and gravy",
    price: 20,
    imageUrl:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/6/19/0/WU0501H_peppercorn-roasted-beef-tenderloin-recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1552487731049.jpeg",
    category: "dinner",
  },
  {
    id: 17,
    title: "Vegetable Stir-Fry",
    description:
      "Assorted vegetables stir-fried in a savory sauce served with rice",
    price: 15,
    imageUrl:
      "https://playswellwithbutter.com/wp-content/uploads/2022/02/Beef-and-Vegetable-Stir-Fry-16.jpg",
    category: "dinner",
  },
  {
    id: 18,
    title: "Fruit Bowl",
    description: "Fresh assortment of seasonal fruits served with yogurt",
    price: 6,
    imageUrl:
      "https://img.freepik.com/free-photo/fruits-berries-platter_114579-14057.jpg?t=st=1713091870~exp=1713095470~hmac=efffb1306a3f080398152102af29b60985aec82b8a5e00b785b38b62785cbb44&w=996",
    category: "breakfast",
  },
  {
    id: 19,
    title: "Club Sandwich",
    description:
      "Triple-decker sandwich with turkey, bacon, lettuce, tomato, and mayo",
    price: 10,
    imageUrl:
      "https://img.freepik.com/free-photo/grilled-sandwich-with-bacon-fried-egg-tomato-lettuce-served-wooden-cutting-board_1150-42571.jpg?t=st=1713091918~exp=1713095518~hmac=007de3f50d83e8ba1e1e54d88e80904894ae1a8061e458c771c03b51b1b7aae9&w=996",
    category: "lunch",
  },
  {
    id: 20,
    title: "Spaghetti Bolognese",
    description:
      "Spaghetti pasta served with rich Bolognese sauce and parmesan cheese",
    price: 11,
    imageUrl:
      "https://img.freepik.com/free-photo/bottom-view-spaghetti-with-sauce-frying-pan-fork-cherry-tomatoes-black-table_140725-112138.jpg?t=st=1713091953~exp=1713095553~hmac=3259e14fac93a10310b8f861763d3a66704247b1c81123feff7641dedf336d3e&w=996",
    category: "dinner",
  },
];

export default foodData;
