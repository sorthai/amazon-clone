import React from "react";
import "./Product.css";
// import { useStateValue } from "./StateProvider";

// passing props in the product
function Product({ id, title, image, price, rating }) {
  // const [{basket}, dispatch] = useStateValue();

  // const addToBasket = () => {

  //     // dispatch the items into the data layer

  //     dispatch({
  //         type: "ADD_TO_BASKET",
  //         item:{
  //             id: id,
  //             title: title,
  //             image: image,
  //             price: price,
  //             rating: rating
  //         },
  //     });
  // }

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
        //   makes array static
            .fill()
            // map fills the array with the same element
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button
      // onClick= {addToBasket}
      >
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
