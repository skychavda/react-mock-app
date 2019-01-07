import React from 'react';

class ProductCategoryRow extends React.Component{
    render(){
        const category = this.props.category;
        return(
            <tr>
                <th colSpan='1' style={{textAlign: "left"}}>
                    {category}
                </th>
            </tr>
        );
    }
}

export default ProductCategoryRow;