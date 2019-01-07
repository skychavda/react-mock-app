import React from 'react';
var ReactTransition = require('react-addons-css-transition-group');

class ProductRow extends React.Component{
    render(){
        const product = this.props.product;
        const name = product.stocked ? product.name : <span style={{color: 'red'}}>{product.name}</span>;
        const price = product.price;
        return(
            <tr>
                <ReactTransition transitionName="example" transitionAppear={true} transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                    <td>{name}</td>
                    <td>{price}</td>
                </ReactTransition>
            </tr>
        );
    }
}

export default ProductRow;