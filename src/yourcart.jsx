import React from "react";
import "./yourcartstyle.css";
import { useState } from "react";
import confirmicon from "./assets/images/icon-order-confirmed.svg";
import Dessertsbage from "./Dessertsbage";



function Yourcart({ products, counts }) {




const total = products.reduce((sum, item) => {
  return sum + (counts[item.id] || 0) * Number(item.price);
}, 0);






const [showSuccess, setShowSuccess] = useState(false);

const [page, setPage] = useState();



if(page === "home"){
  return(
    <Dessertsbage></Dessertsbage>
  )
}




function confirm() {
  if (total === 0) {
    alert("Product selection is required");
    return;
  }

  setShowSuccess(true);

  setTimeout(() => {
    setShowSuccess(false);
  }, 2000);
}






  return (
    <div className="cart">

      <h1 className="h11">Your Cart</h1>

      {products.map((item) => {

        if (counts[item.id] > 0) {

          return (
            <div className="body2" key={item.id}>
              <div className="container2">
                <div className="yourcart" >
                  <h3 className="itemname">{item.name}</h3>
                  <p className="itemprice">
                    <span className="number">{"x" + counts[item.id]}</span>
                    <span className="pricespan">{item.price}</span>
                    <span className="totalspan">
                      ${counts[item.id] * item.price}
                    </span>
                  </p>

                  <div className="hr"></div>

                </div>
              </div>
            </div>
            
          );

        } else {
          return null;
        }

      })}

      <div className="totaldiv">
        <h2 className="totla">Total: ${total}</h2>
        
      </div>



    <div className="yourcartbtns">

      <button className="goback" 
      onClick={() => setPage("home")}>
        Goback
      </button>

      <button 
       className="confirm"
       onClick={confirm}>
        Confirm Order
      </button>

    </div>







       {showSuccess &&  ( // if showSuccess is true//
        <div className="success-message">
          <img src={confirmicon} alt="Order Confirmed" className="confirm-icon" />          
        </div>
      )
       }





    </div>
  );
}

export default Yourcart;