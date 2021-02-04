import React from 'react';
import "./product.css";
import { useStateValue } from './StateProvider';

function Product({id,title, image, price, rating}) {
    
    const[{basket}, dispatch] = useStateValue();

    console.log("This is the basket >>>",basket);

     function addToCart() {
        dispatch({
            type: "addToCart",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className="Product">
            <div className="product__info">
                <p>{title}</p>
            <p className="product__price">
                 <small>RM</small>
                 <strong> {price}</strong>
            </p>

            <div class="product__rating">
                    {Array(rating).fill().map((_,i) => (<p>⭐</p>))}
            </div>

            <img src= {image} alt="" />

            <button onClick={addToCart}>Add to Cart</button>

            </div>
        </div>
    );
}

export default Product
