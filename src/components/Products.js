import React from 'react';
import Product from './Product';
import "../App.css";


const Products = ({products, addToCart}) =>{
    const productComponent = products.map(item=>{
        return <Product key={item.id} product={item} addToCart={addToCart} />
    })
    return (
        <section className='products'>
            <h2>My Garage Sale</h2>
            {productComponent}
        </section>
    )
}

export default Products; 