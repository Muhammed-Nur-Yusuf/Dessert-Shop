import { useState } from "react";
import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import img1 from "./assets/images/image-brownie-desktop.jpg";
import img2 from "./assets/images/image-baklava-desktop.jpg";
import img3 from "./assets/images/image-cake-desktop.jpg";
import img4 from "./assets/images/image-creme-brulee-desktop.jpg";
import img5 from "./assets/images/image-macaron-desktop.jpg";
import img6 from "./assets/images/image-meringue-desktop.jpg";
import img7 from "./assets/images/image-panna-cotta-desktop.jpg";
import img8 from "./assets/images/image-tiramisu-desktop.jpg";
import img9 from "./assets/images/image-waffle-desktop.jpg";
import icon1 from "./assets/images/icon-add-to-cart.svg";
import icon2 from "./assets/images/icon-decrement-quantity.svg";
import icon3 from "./assets/images/icon-increment-quantity.svg";
import Yourcart from "./yourcart";



function Dessertsbage() {

  const products = [
    { id: 1, name: "Salted caramel Brownie", price: 5.5, image: img1, p:"Brownie" },
    { id: 2, name: "Pistachio baklava", price: 4.0, image: img2, p:"Baklava" },
    { id: 3, name: "Red velvet cake", price: 4.5, image: img3, p:"Cake" },
    { id: 4, name: "Vanilla bean creme ", price: 7.0, image: img4, p:"Creme Brulee" },
    { id: 5, name: "Macaron mix of five", price: 8.0, image: img5, p:"Macaron" },
    { id: 6, name: "Lemon meringue pie", price: 5.0, image: img6, p:"Meringue Pie" },
    { id: 7, name: "Vanilla panna cotta", price: 6.5, image: img7, p:"Panna Cotta" },
    { id: 8, name: "Classic tiramisu", price: 5.5, image: img8, p:"Tiramisu" },
    { id: 9, name: "Weffle with berries", price: 6.5, image: img9, p:"Waffle" }
  ];

  const [counts, setCounts] = useState({});
  const [page, setPage] = useState();






if(page === "cart"){
  return(
      <Yourcart products={products} counts={counts}></Yourcart>
  )
}



return (
  <div className="body">
    <h1>Desserts</h1>

    <div className="container">


      <div className="cards">
        {products.map((item) => {

          const itemCount = counts[item.id];
          let buttonContent;

          function add(){
            setCounts({
              ...counts,
              [item.id]: 1
            })
          }

          if (itemCount === 0 || itemCount === undefined) {
            buttonContent = (
              <button className="card-btn" onClick={add}>
                <img className="icon" src={icon1} alt="" />
                Add to Cart
              </button>
            );
          } else {
            buttonContent = (
              <div className="card-btn">
                <button className="btn-style"
                  onClick={() =>
                    setCounts({
                      ...counts,
                      [item.id]: itemCount - 1
                    })
                  }
                >
                  <img className="icon-style" src={icon2} alt="" />
                </button>



                <span>{itemCount}</span>

                <button className="btn-style"
                  onClick={() =>
                    setCounts({
                      ...counts,
                      [item.id]: itemCount + 1
                    })
                  }
                >
                  <img className="icon-style" src={icon3} alt="" />
                </button>
              </div>
            );
          }

          return (
            <div className="card" key={item.id}>
              <img src={item.image} alt={item.name} />
              {buttonContent}
              <p>{item.p}</p>
              <h3>{item.name}</h3>
              <h4>$ {item.price}</h4>
            </div>
          );
        })}

        <button className="next-btn"
        onClick={()=> setPage("cart")}>Next</button>
      </div>


    </div>
  </div>
);
}

export default Dessertsbage;




 