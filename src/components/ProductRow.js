import React from 'react';
// var ReactTransition = require('react-addons-css-transition-group');

class ProductRow extends React.Component{
    render(){
        console.log("stock:", this.props.stockOnly);
        const product = this.props.product;
        const stockOnly = this.props.stockOnly;
        const name = product.stocked ? product.name : <span style={{color: 'red'}}>{product.name}</span>;
        const price = product.price;
        const transition = stockOnly ? "example-appear" : "example-leave" ;
        return(
            <tr>
                <td className={transition}>{name}</td>
                <td className={transition}>{price}</td>
            </tr>
        );
    }
}

export default ProductRow;