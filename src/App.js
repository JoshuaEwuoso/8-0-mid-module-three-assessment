import "./App.css";
import Checkout from './Components/Checkout';
import Products from './Components/Products';
import Cart from './Components/Cart';
import productData from './data/productData'



class App extends React.Component {
  constructor(){
    super()
    this.state = {
      items: []
    }
  }
  
  addToCart = (item) =>{
    const { items } = this.state
    this.setState({
      items: [...items, item]
    })
  }


  render(){
  const { items } = this.state
  const subTotal = items.reduce((sum, item)=> sum + item.price, 0)
  const tax = (subTotal * 0.05)
  const total = subTotal + tax
    return (
      <div>
        <Products products={productData} addToCart={this.addToCart}/>
        <Cart items={items} subTotal={subTotal} tax={tax} total={total}/> 
        <Checkout total={total}/> 
      </div>
    )
  }
};




  

//   render() {
//     // console.log(this.state.cartItems)
//     // console.log(this.state.zipCode.length, this.state.creditCard.length)
//     // let subtotalPrice = this.state.addCart.reduce((a,b) => a+b.price, 0)
//     // let tax = (subtotalPrice/100)*5
//     // let totalPrice = subtotalPrice + tax
//     return (
//       <>
//         <h1>My Garage Sale</h1>
//         <section className="products">
//           <form onClick={this.handleSubmit}>
//             <div>
//               <h3>{productData[0].name}</h3>
//               <p>Price: {formatPrice(productData[0].price)}</p>
//               <button type="submit" onClick={this.cart}>Add To Cart</button>
//               <img src="https://via.placeholder.com/200/0000FF/FFFFFF?text=Baseball+Glove"/>
//               <p>{productData[0].description}</p>
//             </div>
//             <div>
//               <h3>{productData[1].name}</h3>
//               <p>Price: {formatPrice(productData[1].price)}</p>
//               <button type="submit" onClick={this.cart}>Add To Cart</button>
//               <img src="https://via.placeholder.com/200/FF0000/FFFFFF?text=Vintage+VCR"/>
//               <p>{productData[1].description}</p>
//             </div>
//             <div>
//               <h3>{productData[2].name}</h3>
//               <p>Price: {formatPrice(productData[2].price)}</p>
//               <button type="submit" onClick={this.cart}>Add To Cart</button>
//               <img src="https://via.placeholder.com/200/000000/FFFFFF?text=Rusty+Bicycle"/>
//               <p>{productData[2].description}</p>
//             </div>
//             <div>
//               <h3>{productData[3].name}</h3>
//               <p>Price: {formatPrice(productData[3].price)}</p>
//               <button type="submit" onClick={this.cart}>Add To Cart</button>
//               <img src="https://via.placeholder.com/200/FFFF00/000000?text=Mismatched+Socks"/>
//               <p>{productData[3].description}</p>
//             </div>
//             <div>
//               <h3>{productData[4].name}</h3>
//               <p>Price: {formatPrice(productData[4].price)}</p>
//               <button type="submit" onClick={this.cart}>Add To Cart</button>
//               <img src="https://via.placeholder.com/200/CCCCCC/000000?text=Old+Newspapers"/>
//               <p>{productData[4].description}</p>
//             </div>
//             <div>
//               <h3>{productData[5].name}</h3>
//               <p>Price: {formatPrice(productData[5].price)}</p>
//               <button type="submit" onClick={this.cart}>Add To Cart</button>
//               <img src="https://via.placeholder.com/200/0000FF/FFFFFF?text=Comfy+Armchair"/>
//               <p>{productData[5].description}</p>
//             </div>
//           </form>
//         </section>
//         <section className="cart">
//           <h3>Cart: {this.addCart}</h3>
//           <h3>Subtotal: {this.subTotal}</h3>
//           <h3>Tax: {this.tax}</h3>
//           <h3>Total: {this.total}</h3>
//         </section>
//         <body className="checkout">
//           <h3>Checkout</h3>
//           <form id="checkout" onSubmit={this.preventDefault} onSubmit={this.alert}>
//             <label>
//               First Name
//                 <input type="text" placeholder="Enter first name..."/>
//             </label>
//             <label>
//               Last Name
//                 <input type="text" placeholder="Enter surname..."/>
//             </label>
//             <label>
//               Email
//                 <input type="text" placeholder="Enter email..."/>
//             </label>
//             <label>
//               Credit Card
//                 <input type="text" placeholder="Enter card number..."/>
//             </label>
//             <label>
//               Zip Code
//                 <input type="text" placeholder="Enter zip code..."/>
//             </label>
//             <button type="submit" onSubmit={this.preventDefault}>Buy Now</button>
//           </form>
//         </body>
//       </>
//     );
//   };
// };

export default App;
