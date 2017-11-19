import React, {Component} from 'react';
import {connect} from 'react-redux';
import Result from './result';

class Results extends Component {
  constructor(props){
    super(props);
    this.state = {
      foundProducts: []
    }
  }

  componentWillReceiveProps(nextProps){
    // console.log('nextProps from componentWillReceiveProps in Results', nextProps);
    // console.log('products from componentWillReceiveProps in Results = ', nextProps.products[2].title);
    // console.log('query from componentWillReceiveProps in Results', nextProps.search.query);
    let foundProducts = nextProps.products.filter(product => {
      return product.title.toLowerCase().match(nextProps.search.query.toLowerCase())
      || product.description.toLowerCase().match(nextProps.search.query.toLowerCase());
    })
    // console.log('foundProd from componentWillReceiveProps', foundProducts);
    this.setState({
      foundProducts: foundProducts
    });
  }

  render(){
    // console.log('products from Results Render', this.state.foundProducts);
    return(
      <div>
        <h2>Product List</h2>
        <ul>
          {
            this.state.foundProducts.map((product, i) => {
              return (
                <Result product={product} key={i}/>
              )
            })
          }
        </ul>
        <h2>Cart Total = $0</h2>
      </div>
    )
  }
}

function mapStateToProps(state){
  const {products} = state;
  const {search} = state;
  // console.log('products from mapStateToProps in Results', products);
  // console.log('query from mapStateToProps in Results', search);
  return {products, search}
}

export default connect(mapStateToProps, null) (Results);
