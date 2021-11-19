const Check = (props) => {
  return (
    <div className="checkout-form">
      <input type="text" placeholder="John" required />
      <input type="text" placeholder="Doe" required />
      <input type="text" placeholder="John.Doe@email.com" required />
      <input
        type="tel"
        inputmode="numeric"
        pattern="[0-9\s]{13,19}"
        required
        placeholder="credit card"
      />
      <input type="text" placeholder="zip code" required />
      <input type="submit" value="submit checkout" />
    </div>
  );
};

export default Check;
