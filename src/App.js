import "./App.css";
import productData from "./data/productData";

const App = () => {
  return (
    <>
    <h1>My Garage Sale</h1>
    <section className="products">
      <h3>{productData[0].name}</h3>
      <p>Price: ${productData[0].price}</p>
      <img 
      src="https://via.placeholder.com/200/0000FF/FFFFFF?text=Baseball+Glove"
      />
      <button>Add To Cart</button>
      <p>{productData[0].description}</p>
      <h3>{productData[1].name}</h3>
      <p>Price: $20.00</p>
      <img
      src="https://via.placeholder.com/200/FF0000/FFFFFF?text=Vintage+VCR"
      />
      <button>Add To Cart</button>
      <p>{productData[1].description}</p>
      <h3>{productData[2].name}</h3>
      <p>Price: ${productData[2].price}</p>
      <img 
      src="https://via.placeholder.com/200/000000/FFFFFF?text=Rusty+Bicycle"
      />
      <button>Add To Cart</button>
      <p>{productData[2].description}</p>
      <h3>{productData[3].name}</h3>
      <p>Price: ${productData[3].price}</p>
      <img 
      src="https://via.placeholder.com/200/FFFF00/000000?text=Mismatched+Socks"
      />
      <button>Add To Cart</button>
      <p>{productData[3].description}</p>
      <h3>{productData[4].name}</h3>
      <p>Price: $7.50</p>
      <img 
      src="https://via.placeholder.com/200/CCCCCC/000000?text=Old+Newspapers"
      />
      <button>Add To Cart</button>
      <p>{productData[4].description}</p>
      <h3>{productData[5].name}</h3>
      <p>Price: $47.00</p>
      <img 
      src="https://via.placeholder.com/200/0000FF/FFFFFF?text=Comfy+Armchair"
      />
      <button>Add To Cart</button>
      <p>{productData[5].description}</p>
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
