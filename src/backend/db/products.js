import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Men's long sleeves white shirt",
    genre:"men",
    price: 545,
    description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    categoryName: "men",
    star:4,
    image: "https://m.media-amazon.com/images/I/71MAn7npbRL._UY679_.jpg"
    
  },
{
 _id: uuid(),
 title: "Mens Casual Premium Slim Fit T-Shirts ",
 genre:"casual",
  price : 450,
  star:2.5,
  categoryName: "men",
  description: 
  "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
  image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
},
  {_id: "3", title: 'Mens Cotton Jacket',  genre:"casual", price: 1700,
  categoryName: "men",
  star:1.5,
  image: "https://www.jiomart.com/images/product/500x630/rvsblojaqr/montrez-men-grey-washed-cotton-blend-single-jacket-product-images-rvsblojaqr-0-202202261803.jpg",
   description: 'great outerwear jackets for Spring/Autumn/Winter, …and or son in this thanksgiving or Christmas Day.', 
   },
,
{_id: uuid()
  , title: 'DANVOUY Womens T Shirt Casual Cotton ',
genre:"casual",
star:3.5,
image:"https://m.media-amazon.com/images/I/61gwL8JOZtL._UY741_.jpg",
 price: 300, description: '95%Cotton,5%Spandex', categoryName: "women"},
  {
    _id: uuid(),
    title: "Men's Slim Fit Single Breasted Blazer",
  price: 3000,
    description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    categoryName: "men",
    genre:"men",
    star:2.2,
    image: "https://m.media-amazon.com/images/I/51eeIluLqFL._UX569_.jpg"
  },
  {
    _id: uuid(),
    title: "Men Solid Round Neck Poly Cotton Black T-Shirt",
  price: 297,
  star:2,
    description: "great sports wear jersey   for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors.",
    categoryName: "men",
    genre:"sports",
    image:"https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/b/7/y/-original-imaghgyaqywafqus.jpeg?q=70"
  },
  {
    _id: uuid(),
    title: "Pack of 2 Solid Men Black, Blue Regular Shorts, Sports Shorts, Night Shorts, Running Shorts",
  price: 429,
  star:1,
    description: "great sports wear jersey   for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors.",
    categoryName: "men",
    genre:"sports",
    image:"https://rukminim1.flixcart.com/image/832/832/kiqbma80-0/short/w/x/i/xxl-ic-24445-indiclub-original-imafygpfzcyx5gjy.jpeg?q=70" 
  }
,
{
  _id: uuid(),
  title: "Women Solid Round Neck Polyester Black T-Shirt",
price: 582,
star:1,
  description: "great sports wear jersey   for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors.",
  categoryName: "women",
  genre:"sports",
  image:
  "https://rukminim1.flixcart.com/image/832/832/l432ikw0/t-shirt/v/8/k/-original-imagf2bcgykdh2zx.jpeg?q=70" 
},
{
  _id: uuid(),
  title: "Women Solid High Neck Pure Cotton Black T-Shirt",
price: 399,
star:2.1,
  description: "great sports wear jersey   for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors.",
  categoryName: "women",
  genre:"sports",
  image:
  "https://rukminim1.flixcart.com/image/832/832/kw3v0cw0/shopsy-t-shirt/n/6/t/s-ap-shopsy-wm-1-4zip-hn-ls-328-white-ap-pulse-original-imaes55eh4wct5ny.jpeg?q=70" 
},
{
  _id: uuid(),
  title: "Kid's Colorblock Sports Jacket",
price: 399,
star:1,
  description: "great sports wear jersey   for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors.",
  categoryName: "kids",
  genre:"sports",
  image:
  "https://rukminim1.flixcart.com/image/832/832/kvgzyq80/jacket/k/m/d/5-6-years-1-no-boywc07olivewht-chimprala-original-imag8d7qyzgur9yb.jpeg?q=70" 
}


,
  {
    _id: uuid(),
    genre:"formal",
    description: "A 100% Tencel Shirt With Double Pocket That Can Take You Everywhere From Evening Get Together With Friends To Parties.",
   
    title: "Olive Green Shirt",
image:"https://m.media-amazon.com/images/I/61BUD4qOnxL._UX679_.jpg",
    price: 1500,
    categoryName: "men",
    star:1.8,
  },
  {
    _id: uuid(),
    title: "Skirt",
    genre:"casual",
    description:"Flared cut showcases the lovely drape of the fabric. Side buttons add a style accent.",
    image:"https://m.media-amazon.com/images/I/71aMn+N22bL._UY879_.jpg",
    price: 1000,
    star:1,
    categoryName: "women",
  },
  {
    _id: uuid(),
    title: "Jacket",
    genre:"formal",
    image:"https://m.media-amazon.com/images/I/71AQqI9GMTL._UX679_.jpg",
    price: 3600,
    star:3.6,
    categoryName: "women",
    description:"Premium down plus technology equals warmth and incredible lightness. In a short length for a balanced style."
  },
  {
    _id: uuid(),
    title: "JumpSuit",
    image:"https://m.media-amazon.com/images/I/31RXhZ-Gu1L.jpg",
    price: 1000,
    genre:"casual",star:4.9,
    description:"Soft and comfortable linen blend fabric. Waist elastic for easy changing.",
    categoryName: "kids",
  },
  {
    _id: uuid(),
    title: "Frock",
    image:"https://m.media-amazon.com/images/I/41jZA9RfMlL._UX679_.jpg",
    genre:"casual",
    description:"Body made of 100% cotton corduroy. A versatile frock for any outfit.Soft and comfortable linen blend fabric.",
    star:4.4,
    price: 500,
    categoryName: "kids",
  },
  {
    _id: uuid(),
    title: "Beige Pant",
    genre:"formal",
    description:"Body made of 100% cotton corduroy. A versatile pant for any outfit.Premium down plus technology equals warmth and incredible lightness. In a short length for a balanced style",
    star:5,
    image:"https://m.media-amazon.com/images/I/41-InzUEMOL._UY550_.jpg", price: 3400,
    categoryName: "men",
  },
  {
    _id: uuid(),
    star:5,
    title: "Black Color Casual Regular Fit Formal Blazer",
    genre:"formal",
    description:"Updated fit and length that goes with anything. Hand-washable so you can wear it however you like.",
    image:"https://m.media-amazon.com/images/I/41ay4YLEwKL._UY550_.jpg",
    price: 1000,
    categoryName: "women",
  },
  {
    _id: uuid(),
    title: "Casual Black Shirt for Men",
    star:5,
    genre:"casual",
    description:"Updated fit and length that goes with anything. Hand-washable so you can wear it however you like.A versatile shirt that looks great with or without a tie. The luxurious texture of ultra-long fiber cotton.",
    image:"https://m.media-amazon.com/images/I/71vy9OBXF8L._UX466_.jpg",
    price: 1000,
    categoryName: "men",
  },
  {
    _id: uuid(),
    title: "Sunny T-Shirt",
    star:3,
    genre:"casual",
    description:"A smooth and silky polo shirt. Wide stripes bring your outfit together.Smooth 'AIRism' with the look of cotton. Fun graphics inspired by the great outdoors.Collection is now available"
    ,
    image:"https://m.media-amazon.com/images/I/61wBT7WW9TL._UX679_.jpg",
    price: 300,
    categoryName: "kids",
  }
];
