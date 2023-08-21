// You don't need to look at this, but you can if you want!

/* 
When building user interfaces, it can be helpful to 
mock out simplified versions of the data that our code
will eventually fetch from backend servers 
*/

const DATA = {
  "/categories": ["Shirts", "Pants", "Shoes", "Accessories"],
  "/items?category=Shirts": ["T-Shirts", "Casual", "Formal"],
  "/items?category=Pants": ["Long Pants", "Sweat Pants", "Shorts", "Swimwear"],
  "/items?category=Shoes": ["Athletic", "Professional", "Casual", "Walking"],
  "/items?category=Accessories": ["Hats", "Wallets", "Belts"],
};
export default DATA;
