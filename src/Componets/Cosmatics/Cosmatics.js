import React from 'react';
import Cosmetics from '../Cosmatic/Cosmetic';

const Cosmatics = () => {
    const products =[
        {id:145, name:'Ilona', price:450},
        { id:2452, name:'lipstik', price:750},
        { id:379852, name:'ibore', price:650},
        { id:44458, name:'lapset', price:250},
        { id:58655, name:'maskara', price:620},
        { id:62545, name:'kajol', price:780},
        { id:77825898, name:'isheed', price:150},
    ]
    return (
        <div>
            {
             products.map(produc=><Cosmetics key={produc.id} produc={produc}></Cosmetics>)
            }
        </div>
    );
};

export default Cosmatics;