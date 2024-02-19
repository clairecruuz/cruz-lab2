import React from "react";

function Album({ albumObj, addToCart, removeFromCart }) {
  return (
    <div className="album">
      <div className="image-container">
        <img src={albumObj.image} alt={albumObj.title} />
      </div>
      <div>
        <h3>{albumObj.title}</h3>
        <p>{albumObj.description}</p>
      </div>
      <div>
        {albumObj.quantity > 0 ? (
          <>
            <button onClick={() => addToCart(albumObj)}>Add to Cart</button>
            <button onClick={() => removeFromCart(albumObj)}>Remove</button>
          </>
        ) : (
          <p className="out-of-stock">Out of Stock</p>
        )}
      </div>
    </div>
  );
}

export default Album;
