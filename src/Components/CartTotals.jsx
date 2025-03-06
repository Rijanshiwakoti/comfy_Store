import { useSelector } from "react-redux";

const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cart
  );
  return (
    <div className="card bg-base-200">
      <div className="card-body">
        {/* subtotal */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span>Subtotal</span>
          <span className="font-medium">${cartTotal / 100}</span>
        </p>
        {/* Shipping */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span>Shipping</span>
          <span>${shipping / 100}</span>
        </p>
        {/* tax */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span>tax</span>
          <span>${(tax / 100).toFixed(2)}</span>
        </p>
        {/* total */}
        <p className="mt-4 flex justify-between text-sm pb-2">
          <span>Order Total</span>
          <span>${(orderTotal / 100).toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
};

export default CartTotals;
