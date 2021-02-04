import React from 'react';
import "./checkout.css";
import Subtotal from "./Subtotal"

function Checkout() {
    return (
        <div className="Checkout">
            <div className="checkout__left">
                <img className="Checkout__ads"
                   src=" https://images-na.ssl-images-amazon.com/images/G/01/MaloneLP/9XYZ_header.jpg"  alt=" " />

                
          
             <div>
                 <h2 className="checkout__title">Your SHopping Cart</h2>
             </div>
             </div>
             <div className="checkout__right">
                  <Subtotal/>
            </div>
        </div>
    );
}

export default Checkout
