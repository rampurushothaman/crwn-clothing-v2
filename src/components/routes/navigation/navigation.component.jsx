import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import CartIcon from "../../card-icon/card-icon.component";
import CartDropDown from "../../cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../../context/user.context";
import { CartContext } from "../../../context/cart.context";

import { ReactComponent as Logo } from "../../../assets/crown.svg";
import { SignOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

const Navigation = () => {
  const { currenUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currenUser ? (
            <span className="nav-link" onClick={SignOutUser}>
              SIGNOUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
