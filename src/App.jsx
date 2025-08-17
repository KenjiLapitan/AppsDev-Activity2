import React, { useState } from 'react'
import ProductCard from './component/ProductCard';
import SearchBar from './component/Searchbar';
import './App.css'

function App() {

  const [Search, setSearch] = useState("");
  
  const product = [
    {
      id: 1,
      image: "./fish1.webp",
      name: "Yellow Halfmoon",
      price: "$90-150",
      description: "The most well-known form of Betta splendens is the halfmoon betta. Its common name comes from the voluminous tail (or caudal fin) that looks like half of a circle or a clean ‘D’ shape that spreads to a full 180 degrees.",
    },
    {
      id: 2,
      image: "./fish2.webp",
      name: "Crowntail Betta",
      price: "$90-130",
      description: "Another very popular form of betta fish has a distinctive, crown-like tail, where the webbing in between each of the fin rays is greatly reduced."
    },
    {
      id: 3,
      image: "./fish3.webp",
      name: "Plakat Betta",
      price: "$75-120",
      description: "The plakat betta fish were once bred to fight for sport, so they do not have the curtain-like, billowy finnage that bettas are known for. Instead, they possess much shorter fins and tail that allow them to zoom through the water. "
    },
    {
      id: 4,
      image: "./fish4.webp",
      name: "Double Tail Betta",
      price: "$90-130",
      description: "These bettas have the unique feature of possessing two separate tails that connect directly to the fish’s body, which looks like a single tail that has been split into two lobes. "
    },
    {
      id: 5,
      image: "./fish5.webp",
      name: "Veiltail Betta",
      price: "$80-130",
      description: "This classic betta fish has been around for a very long time and is usually one of the cheapest forms for sale at the pet store. While it does have a longer tail than a plakat betta, it does not have the expansive, D-shaped tail of the halfmoon."
    },
    {
      id: 6,
      image: "./fish6.webp",
      name: "Alien Betta",
      price: "$90-150",
      description: "This hybridized betta combines the amazing colors of a domesticated betta with the small head and slender body of “wild type” betta species.S"
    }
  ];

  const prodData = product.filter((prod) => {
    return prod.name.toLowerCase().includes(Search.toLocaleLowerCase()) || prod.price.toLowerCase().includes(Search.toLocaleLowerCase())
  })


  return (
  <div className="page-container">
    <div className="searchbar-wrapper">
      <SearchBar Search={Search} setSearch={setSearch} />
    </div>

    <div className="products-container">
      {prodData.map((proditem) => (
        <ProductCard
          key={proditem.id}
          image={proditem.image}
          name={proditem.name}
          price={proditem.price}
          description={proditem.description}
          onBuy={() =>
            console.log(`Thank you for buying: ${proditem.name}`)
          }
        />
      ))}
    </div>
  </div>

  )
}

export default App
