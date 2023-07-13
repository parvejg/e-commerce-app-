import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    src: "https://5.imimg.com/data5/AL/RS/MY-2325220/men-ankle-length-jeans-500x500.jpg",
    title: "Men Ankle Length Jeans",
    author: "Stylox",
    price: "700",
    categoryName: "non-fiction",  
  },
  {
    _id: uuid(),
    src: "https://mywebstoreshopping.com/cdn/shop/products/pants-men-streetwear-jeans-men-new-fashion-casual-straight-denim-slim-hole-jeans-blue-38-457.jpg?v=1637536242&width=713",
    title: "Denim Slim Hole Jeans",
    author: "Levis: Men New Fashion",
    price: "3000",
    categoryName: "horror",
  },
  {
    _id: uuid(),
    src: "https://getketchadmin.getketch.com/product/8907787958000/660/HLJN000877_6.jpg",
    title: "Highlander",
    author: "Tapered Fit Stretchable Jeans",
    price: "599",
    categoryName: "fiction",
  },
  {
    _id: uuid(),
    src: "https://mywebstoreshopping.com/cdn/shop/files/bdf5c137-3965-4304-8124-51328d673031.jpg?v=1686835462&width=713",
    title: "Zip Printed Polo Shirt",
    author: "T-shirt is a high-quality stylish",
    price: "6000",
    categoryName: "fiction",
  },
  {
    _id: uuid(),
    src: "https://cdn.thewirecutter.com/wp-content/media/2021/05/mensjeans-2048px-3861.jpg?auto=webp&quality=75&width=980&dpr=1.5",
    title: "Slim-fit Jeans",
    author: "Levi’s Slim Fit Men’s Jeans",
    price: "999",
    categoryName: "fiction",
  },
  {
    _id: uuid(),
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmERFJuBtWleRx1Rr3GjNvESs0adznuNHTnQ&usqp=CAU",
    title: "Blue Ripped Jeans",
    author: "Men's Ripped Printed Baggy",
    price: "1300",
    categoryName: "fiction",
  },

];
