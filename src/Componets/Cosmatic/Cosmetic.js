import React from 'react';
import './Cosmatic.css'
const Cosmetics = (props) => {
    const {name,price,id}=props.produc;
    const AddToCart =(id)=>{
    }
    return (
        <div className="product">
            <h1>Buy This Cosmatics</h1>
        <h2>Name:{name}</h2>
        <p>Price:${price}</p>
        <p>Id: <small>{id}</small></p>
        <button onClick={()=>AddToCart(id)} className="btn">Buy Now</button>
     <button className="btn2">Ddelete</button>
        </div>
    );
};

export default Cosmetics;