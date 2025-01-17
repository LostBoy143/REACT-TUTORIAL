const mockData = [
  {
    name: "Gourmet Haven",
    cost: 25,
    avgRating: 3.9,
    deliveryTime: "35 mins",
    imageUrl:
      "https://source.unsplash.com/150x150/?restaurant",
  },
  {
    name: "The Burger Joint",
    cost: 15,
    avgRating: 4.2,
    deliveryTime: "20 mins",
    imageUrl:
      "https://source.unsplash.com/150x150/?burger",
  },
  {
    name: "Pizza Planet",
    cost: 18,
    avgRating: 3.8,
    deliveryTime: "30 mins",
    imageUrl:
      "https://source.unsplash.com/150x150/?pizza",
  },
  {
    name: "Noodle Nirvana",
    cost: 22,
    avgRating: 4.5,
    deliveryTime: "25 mins",
    imageUrl:
      "https://source.unsplash.com/150x150/?noodles",
  },
  {
    name: "Taco Time",
    cost: 12,
    avgRating: 4.0,
    deliveryTime: "15 mins",
    imageUrl:
      "https://source.unsplash.com/150x150/?taco",
  },
  {
    name: "Grill House",
    cost: 30,
    avgRating: 4.7,
    deliveryTime: "40 mins",
    imageUrl:
      "https://source.unsplash.com/150x150/?grill",
  },
  {
    name: "Sushi Spot",
    cost: 35,
    avgRating: 4.9,
    deliveryTime: "50 mins",
    imageUrl:
      "https://source.unsplash.com/150x150/?sushi",
  },
  {
    name: "Sweet Treats",
    cost: 10,
    avgRating: 3.5,
    deliveryTime: "15 mins",
    imageUrl:
      "https://source.unsplash.com/150x150/?dessert",
  },
  {
    name: "Healthy Harvest",
    cost: 20,
    avgRating: 4.6,
    deliveryTime: "30 mins",
    imageUrl:
      "https://source.unsplash.com/150x150/?salad",
  },
  {
    name: "Curry Culture",
    cost: 28,
    avgRating: 4.1,
    deliveryTime: "45 mins",
    imageUrl:
      "https://source.unsplash.com/150x150/?curry",
  },
  {
    name: "BBQ Bonanza",
    cost: 32,
    avgRating: 4.8,
    deliveryTime: "50 mins",
    imageUrl:
      "https://source.unsplash.com/150x150/?bbq",
  },
  {
    name: "Pasta Perfection",
    cost: 18,
    avgRating: 3.9,
    deliveryTime: "25 mins",
    imageUrl:
      "https://source.unsplash.com/150x150/?pasta",
  },
  {
    name: "Wrap Wonders",
    cost: 12,
    avgRating: 4.3,
    deliveryTime: "15 mins",
    imageUrl:
      "https://source.unsplash.com/150x150/?wrap",
  },
  {
    name: "Mediterranean Magic",
    cost: 27,
    avgRating: 4.2,
    deliveryTime: "35 mins",
    imageUrl:
      "https://source.unsplash.com/150x150/?mediterranean",
  },
  {
    name: "Breakfast Bliss",
    cost: 14,
    avgRating: 4.1,
    deliveryTime: "10 mins",
    imageUrl:
      "https://source.unsplash.com/150x150/?breakfast",
  },
  {
    name: "Fried Feast",
    cost: 20,
    avgRating: 3.7,
    deliveryTime: "25 mins",
    imageUrl:
      "https://source.unsplash.com/150x150/?fried",
  },
  {
    name: "The Foodie's Retreat",
    cost: 26,
    avgRating: 4.4,
    deliveryTime: "30 mins",
    imageUrl:
      "https://source.unsplash.com/150x150/?meal",
  },
  {
    name: "Vegan Delight",
    cost: 23,
    avgRating: 4.0,
    deliveryTime: "30 mins",
    imageUrl:
      "https://source.unsplash.com/150x150/?vegan",
  },
  {
    name: "Spicy Sensations",
    cost: 19,
    avgRating: 3.8,
    deliveryTime: "25 mins",
    imageUrl:
      "https://source.unsplash.com/150x150/?spicy",
  },
  {
    name: "Snack Shack",
    cost: 8,
    avgRating: 3.6,
    deliveryTime: "15 mins",
    imageUrl:
      "https://source.unsplash.com/150x150/?snacks",
  },
  {
    name: "Cafe Central",
    cost: 15,
    avgRating: 4.3,
    deliveryTime: "20 mins",
    imageUrl:
      "https://source.unsplash.com/150x150/?cafe",
  },
  {
    name: "Chaat Chowk",
    cost: 12,
    avgRating: 4.2,
    deliveryTime: "15 mins",
    imageUrl:
      "https://source.unsplash.com/150x150/?streetfood",
  },
  {
    name: "Soup Stop",
    cost: 16,
    avgRating: 3.9,
    deliveryTime: "20 mins",
    imageUrl:
      "https://source.unsplash.com/150x150/?soup",
  },
  {
    name: "Sandwich Spot",
    cost: 14,
    avgRating: 4.0,
    deliveryTime: "15 mins",
    imageUrl:
      "https://source.unsplash.com/150x150/?sandwich",
  },
  {
    name: "Asian Delights",
    cost: 24,
    avgRating: 4.5,
    deliveryTime: "35 mins",
    imageUrl:
      "https://source.unsplash.com/150x150/?asian",
  },
  {
    name: "Fast & Tasty",
    cost: 11,
    avgRating: 4.2,
    deliveryTime: "10 mins",
    imageUrl:
      "https://source.unsplash.com/150x150/?fastfood",
  },
  {
    name: "Luxury Dining",
    cost: 45,
    avgRating: 4.9,
    deliveryTime: "50 mins",
    imageUrl:
      "https://source.unsplash.com/150x150/?luxury",
  },
  {
    name: "Dessert Den",
    cost: 9,
    avgRating: 3.8,
    deliveryTime: "20 mins",
    imageUrl:
      "https://source.unsplash.com/150x150/?dessert",
  },
  {
    name: "Steak Station",
    cost: 30,
    avgRating: 4.7,
    deliveryTime: "45 mins",
    imageUrl:
      "https://source.unsplash.com/150x150/?steak",
  },
  {
    name: "Seafood Shack",
    cost: 35,
    avgRating: 4.6,
    deliveryTime: "50 mins",
    imageUrl:
      "https://source.unsplash.com/150x150/?seafood",
  },
  {
    name: "Grill'n'Chill",
    cost: 25,
    avgRating: 4.4,
    deliveryTime: "40 mins",
    imageUrl:
      "https://source.unsplash.com/150x150/?grill",
  },
  {
    name: "Pantry Paradise",
    cost: 18,
    avgRating: 3.7,
    deliveryTime: "25 mins",
    imageUrl:
      "https://source.unsplash.com/150x150/?pantry",
  },
];

export default mockData;
