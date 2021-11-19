const Items = (props) => {
  //has a name, photo, description, price (formatted correctly) AND an "Add To Cart" button (took care of this on app.js)

  const { img, name, price, description } = props.item;

  return (
    <div
      className="product-item-container"
      // onClick={() => props.handleItemClick(props.item)}
    >
      <h1>{name}</h1>
      <div>price: ${price} </div>
      <img className="item-photo" src={img} alt={name} />
      <div>{description}</div>
      <button onClick={props.item.addItem}>Add To Cart</button>
    </div>
  );
};

export default Items;
