import React from 'react';

class ProductRow extends React.Component{
    render(){
        console.log("stock:", this.props.stockOnly);
        const product = this.props.product;
        const stockOnly = this.props.stockOnly;
        const name = product.stocked ? product.name : <span style={{color: 'red'}}>{product.name}</span>;
        const price = product.price;
        // const transition = !stockOnly ? "example-appear" : "example-leave" ;
        return(
            <tr>
                <td className="example-appear">{name}</td>
                <td className="example-appear">{price}</td>
            </tr>
        );
    }
}

export default ProductRow;