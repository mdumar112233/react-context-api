import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Product = () => {
    const category = useContext(CategoryContext);
    return (
        <div>
            <h2>Its product</h2>
            <h4>selected category:  {category}</h4>
        </div>
    );
};

export default Product;