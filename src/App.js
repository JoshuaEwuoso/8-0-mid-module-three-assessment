import React from "react";
import "./App.css";
import productData from "./data/productData";
import formatPrice from "./helpers/formatPrice";

class App extends React.Component {


  preventDefault = (event) => {
    event.preventDefault();
  }
  
  // cart = () => {
  // }

  // subtotal = () => {
   
  // }
  
  // tax = () => {

  // }

  // total = () => {

  // }


  render() {
    return (
      <>
        <h1>My Garage Sale</h1>
        <section className="products">
          <div>
            <h3>{productData[0].name}</h3>
            <p>Price: {formatPrice(productData[0].price)}</p>
            <button type="submit" onClick={this.cart}>Add To Cart</button>
            <img src="https://via.placeholder.com/200/0000FF/FFFFFF?text=Baseball+Glove"/>
            <p>{productData[0].description}</p>
          </div>
          <div>
            <h3>{productData[1].name}</h3>
            <p>Price: {formatPrice(productData[1].price)}</p>
            <button type="submit" onClick={this.cart}>Add To Cart</button>
            <img src="https://via.placeholder.com/200/FF0000/FFFFFF?text=Vintage+VCR"/>
            <p>{productData[1].description}</p>
          </div>
          <div>
            <h3>{productData[2].name}</h3>
            <p>Price: {formatPrice(productData[2].price)}</p>
            <button type="submit" onClick={this.cart}>Add To Cart</button>
            <img src="https://via.placeholder.com/200/000000/FFFFFF?text=Rusty+Bicycle"/>
            <p>{productData[2].description}</p>
          </div>
          <div>
            <h3>{productData[3].name}</h3>
            <p>Price: {formatPrice(productData[3].price)}</p>
            <button type="submit" onClick={this.cart}>Add To Cart</button>
            <img src="https://via.placeholder.com/200/FFFF00/000000?text=Mismatched+Socks"/>
            <p>{productData[3].description}</p>
          </div>
          <div>
            <h3>{productData[4].name}</h3>
            <p>Price: {formatPrice(productData[4].price)}</p>
            <button type="submit" onClick={this.cart}>Add To Cart</button>
            <img src="https://via.placeholder.com/200/CCCCCC/000000?text=Old+Newspapers"/>
            <p>{productData[4].description}</p>
          </div>
          <div>
            <h3>{productData[5].name}</h3>
            <p>Price: {formatPrice(productData[5].price)}</p>
            <button type="submit" onClick={this.cart}>Add To Cart</button>
            <img src="https://via.placeholder.com/200/0000FF/FFFFFF?text=Comfy+Armchair"/>
            <p>{productData[5].description}</p>
          </div>
        </section>
        <section className="cart">
          <h3>Cart: {this.cart}</h3>
          <h3>Subtotal:</h3>
          <h3>Tax:</h3>
          <h3>Total:</h3>
        </section>
        <body className="checkout">
          <h3>Checkout</h3>
          <form id="checkout" onSubmit={this.preventDefault}>
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
            <button type="submit">Buy Now</button>
          </form>
        </body>
      </>
    );
  };
};

export default App;
