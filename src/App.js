import "./App.css";

const App = () => {
  return (
    <>
    <h1>My Garage Sale</h1>;
    <section className="products">
      <h3>Baseball Glove</h3>
      <h3>Vintage VCR</h3>
      <h3>Rusty Bicycle</h3>
      <h3>Mismatched Socks</h3>
      <h3>Old Newspapers</h3>
      <h3>Comfy Armchair</h3>
    </section>
    <section className="cart">
      <h3>Cart:</h3>
      <h3>Subtotal:</h3>
      <h3>Tax:</h3>
      <h3>Total:</h3>
    </section>
    <body className="checkout">
    <h3>Checkout</h3>
    <form id="checkout">
      <label>
        First Name
          <input type="text" placeholder="Enter first name..." required/>
      </label>
      <label>
        Last Name
          <input type="text" placeholder="Enter surname..." required/>
      </label>
      <label>
        Email
          <input type="text" placeholder="Enter email..." required/>
      </label>
      <label>
        Credit Card
          <input type="text" placeholder="Enter card number..." required/>
      </label>
      <label>
        Zip Code
          <input type="text" placeholder="Enter zip code..." required/>
      </label>
      <button>Buy Now</button>
    </form>
    </body>
    </>
  );
};

export default App;
