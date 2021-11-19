const Cart = (props) => {
  const { name, price } = props.cart;

  let cart = [];

  return cart.push(
    <div className="added-in-cart">
      <h4>{name}</h4>
      <div>subtotal:{price}</div>
      <div>tax:</div>
      <div>total:</div>
    </div>
  );
};

export default Cart;
