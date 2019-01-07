import React from 'react';
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';

class ProductTable extends React.Component{
    render(){
        const row = [];
        let lastCategory = null;
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;

        this.props.products.forEach((product) =>{
            if(product.name.indexOf(filterText) === -1){
                return;
            }
            if(inStockOnly && !product.stocked){
                return;
            }
            if(product.category!==lastCategory){
                row.push(
                    <ProductCategoryRow
                        category={product.category}
                        key={product.category}/>
                );
            }
            row.push(
                <ProductRow 
                product={product}
                key={product.name}
                />
            );
            lastCategory = product.category;
        }

        )
        return(
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                    {row}
                </tbody>
            </table>
        );
    }
}

export default ProductTable;