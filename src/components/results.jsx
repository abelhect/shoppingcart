import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import {setCartTotal} from '../actions';

import Result from './result';

class Results extends Component {
  constructor(props){
    super(props);
    this.state = {
      foundProducts: [],
      cartTotal: 0
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
    // console.log('value of cartTotal from componentWillReceiveProps in results ', this.state.cartTotal);

    // this.props.setCartTotal(this.state.cartTotal);

  }

  render(){
    // console.log('products from Results Render', this.state.foundProducts);
    return(
      <div>
        <Row>
          <Col md={5} mdPush={5}><h3>Product List</h3></Col>
          <Col md={6} mdPull={6}><h3>Cart Total = $ {this.props.cartTotal}</h3></Col>
        </Row>
        <ul>
          {
            this.state.foundProducts.map((product, i) => {
              return (
                <Result product={product} key={i}/>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  const {products} = state;
  const {search} = state;
  const {cartTotal} = state;
  // console.log('products from mapStateToProps in Results', products);
  // console.log('query from mapStateToProps in Results', search);
  // console.log('state from mapStateToProps in Results', state);
  return {products, search, cartTotal}
}

export default connect(mapStateToProps, {setCartTotal}) (Results);
