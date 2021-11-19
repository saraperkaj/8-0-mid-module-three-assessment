const Check = (props) => {
  return (
    <div className="checkout-form">
      <label for="name1">First Name:</label>
      <input id="name1" type="text" placeholder="John" required />
      <label for="name2">Last Name:</label>
      <input id="name2" type="text" placeholder="Doe" required />
      <label for="email">Email:</label>
      <input id="email" type="text" placeholder="John.Doe@email.com" required />
      <label for="credit">Credit Card:</label>
      <input
        id="credit"
        type="tel"
        inputmode="numeric"
        pattern="[0-9\s]{13,19}"
        required
        placeholder="xxxx-xxxx-xxxx-xxxx"
      />
      <label for="zip">Zip Code:</label>
      <input id="zip" type="text" placeholder="00000" required />
      <input type="submit" value="submit checkout" />
    </div>
  );
};

export default Check;
