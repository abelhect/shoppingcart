import React, {Component} from 'react';
import {connect} from 'react-redux';
import {productRef} from '../firebase';
import {setProducts} from '../actions';
import {setCartTotal} from '../actions';

import logo from '../images/logo.ico';
import SearchBar from './searchbar';
import Results from './results';
import Admin from './admin'

class ShoppingCart extends Component {
  constructor(props){
    super(props);
    this.state = {
      cartTotal: 0
    }
  }

  componentDidMount() {
    productRef.on('value', snap => {
        let products = [];
        snap.forEach(product => {
          const {title, price, description} = product.val();
          const serverkey = product.key;
          // console.log('serverkey', product.key);
          products.push({title, serverkey, price, description});
        })
        // console.log('products from inside componentDidMount', products);
        this.props.setProducts(products);
        console.log('value of cartTotal from componentDidMount in shoppingcart ', this.state.cartTotal);
        this.props.setCartTotal(this.state.cartTotal);
    })
  }

  render(){
    return(
      <div>
        <div className="Jumbotron">
          <img src={logo} alt="Logo Here"/>
          <h1 className="text-center">ShoppingCart</h1>
          <p className="text-center"><em>This is a simple shopping
            cart that will enable your e-commerce site to add products
            and sell products online with ease.</em></p>
        </div>
        <SearchBar />
        <hr/>
        <Results />
        <hr/>
        <Admin />
      </div>

    )
  }
}

function mapStateToProps(state){
  console.log('state from mapStateToProps in Shoppingcart', state);
  return{}
}

export default connect(mapStateToProps, {setProducts, setCartTotal})(ShoppingCart);
