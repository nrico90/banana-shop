import React from "react";

import CustomButton from "../atoms/custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>Go to Checkout</CustomButton>
  </div>
);

export default CartDropdown;
