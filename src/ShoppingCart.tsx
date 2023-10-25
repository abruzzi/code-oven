import React from "react";
import { IMenuItem } from "./models/IMenuItem";

export const ShoppingCart = ({ cartItems }: { cartItems: IMenuItem[] }) => {
  const totalPrice = cartItems.reduce((acc, item) => (acc += item.price), 0);
  const totalDiscount = cartItems.reduce(
    (acc, item) => (acc += item.calculateDiscount()),
    0
  );

  return (
    <div data-testid="shopping-cart" className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ol>
        {cartItems.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <span>${item.price}</span>
          </li>
        ))}
      </ol>
      <div className="number">Total Discount: ${totalDiscount}</div>
      <div className="number">Total: ${totalPrice - totalDiscount}</div>
      <button disabled={cartItems.length === 0}>Place My Order</button>
    </div>
  );
};
