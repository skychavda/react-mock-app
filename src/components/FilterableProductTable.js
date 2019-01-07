import React from 'react';
import SearchBar from './Searchbar';
import ProductTable from './Producttable';


class FilterabelProductTable extends React.Component{
    state = {
        products:[
            {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
            {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
            {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
            {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
            {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
            {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
        ],
        filterText: '',
        inStockOnly: true
    }

    handleFilterTextChange(filterText){
        this.setState({
            filterText: filterText
        });
    }

    handleInStockChange(inStockOnly){
        this.setState({
            inStockOnly: inStockOnly
        });
    }
    
    render(){
        return(
            <div>
                <SearchBar filterText={this.state.filterText} inStockOnly={this.state.inStockOnly}
                onFilterTextChange={this.handleFilterTextChange.bind(this)}
                onInStockChange={this.handleInStockChange.bind(this)}/>
                <ProductTable products={this.state.products} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly}/>
            </div>
        );
    }
}

export default FilterabelProductTable;