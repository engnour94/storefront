
  let initialState = {
    products: [
      {

        category: 'FOOD',
        name: 'Grape leaves',
        description: ' The leaves are commonly rolled or stuffed with mixtures of meat and rice to produce dolma, found widely in the Mediterranean, Balkans, and Middle East.They may also be used in various other recipes and dishes.',
        price: '15 JD',
        inventory: 5000,
        imgUrl: 'https://i.pinimg.com/564x/59/29/3d/59293d182dab4baae391159b14364f6f.jpg',
      },
      {

        category: 'FOOD',
        name: 'Chicken taco',
        description: 'is a traditional Mexican dish consisting of a small hand-sized corn or wheat tortilla topped with a filling. The tortilla is then folded around the filling and eaten by hand. A taco can be made with a variety of fillings, including beef, pork, chicken, seafood, beans, vegetables, and cheese, allowing for great versatility and variety.',
        price: '17 JD',
        inventory: 350,
        imgUrl: 'https://i.pinimg.com/564x/04/e1/94/04e194929df9c03a6bb2e04b5159ceff.jpg',
      },
      {

        category: 'FOOD',
        name: 'Mandi',
        description: 'Mandi (Arabic: مندي‎) is a traditional dish that originated from Hadhramaut, Yemen, consisting mainly of meat and rice with a special blend of spices, cooked in a pit underground',
        price: '30 JD',
        inventory: 35,
        imgUrl: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/yx1l3ry95shb6vj6gvqd',
      },
      {

        category: 'ELECTRONICS',
        name: 'Electric guitar',
        description: 'An electric guitar is a guitar that requires external amplification in order to be heard at typical performance volumes, unlike a standard acoustic guitar. It uses one or more pickups to convert the vibration of its strings into electrical signals, which ultimately are reproduced as sound by loudspeakers.',
        price: '950 JD',
        inventory: 3,
        imgUrl: 'https://3.bp.blogspot.com/--a_oNEkajOk/UT9n1O4zEzI/AAAAAAAAABA/hYA2-kEThxg/s1600/Fender+Squire+Bullet+Startocaster.jpg',
      },
      {
        category: 'ELECTRONICS',
        name: 'Tesla X',
        description: 'The Tesla Model X is a mid-size all-electric luxury crossover made by Tesla, Inc. The vehicle is notable in that it uses falcon-wing doors for passenger access.',
        price: '100 000 JD',
        inventory: 3,
        imgUrl: 'https://i.pinimg.com/564x/9b/3a/5e/9b3a5e52e6480f36460cc253160dd410.jpg',
      },
      {
        category: 'ELECTRONICS',
        name: '3D Printer',
        description: '3D printing, or additive manufacturing, is the construction of a three-dimensional object from a CAD model or a digital 3D model',
        price: '400 JD',
        inventory: 3,
        imgUrl: 'https://i.pinimg.com/564x/a8/5b/f7/a85bf7e02285b6010b4a6ae841f46ea9.jpg',
      },
    ]
  };


  // Reducer
  export default function productsReducer(state = initialState, action) {
    // category = payload
    let { type, category } = action;
  
    switch (type) {
      case 'FILTER_PRODUCTS':
        let products = initialState.products.filter(
          (product) => product.category === category
        );
        return { products };
  
      case 'ALL_CATEGORIES':
        return initialState;
  
      default:
        return state;
    }
  }
  

  // actions objects
  export const filterProducts = (category) => {
    return {
      type: 'FILTER_PRODUCTS',
      category
    };
  };
  
  export const allCategories = () => {
    return {
      type: 'ALL_CATEGORIES'
    };
  };
  