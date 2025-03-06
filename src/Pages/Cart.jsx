import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItemsList from "../Components/CartItemsList";
import SectionTitle from "../Components/SectionTitle";
import CartTotals from "../Components/CartTotals";

const Cart = () => {
  const user = useSelector((state) => state.userState.user);
  const numItemsInCart = useSelector((state) => state.cart.numItemsInCart);
  if (numItemsInCart === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }
  return (
    <>
      <SectionTitle text="Shopping Cart" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <Link className="btn btn-primary btn-block mt-8" to="/checkout">
              Proceed to CheckOut
            </Link>
          ) : (
            <Link className="btn btn-primary btn-block mt-8" to="/login">
              Please Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
