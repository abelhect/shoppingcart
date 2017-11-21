import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {setCartTotal} from '../actions';

class Result extends Component {
  constructor(props){
    super(props);
    this.state = {
      qty: 0
    }
  }

  buyProduct(){
    if (this.state.qty > 0){
      this.setState({qty: this.state.qty + 1});
      const productTotal = this.props.product.price/100;
      // console.log('this products total', productTotal);
      this.updateCartTotal(productTotal);
    } else {
      //increase quantity for this product
      this.setState({qty: this.state.qty + 1});
      //update the total for the entire cart
      // console.log('this products price', this.props.product.price/100, 'this product qty', this.state.qty + 1);
      const productTotal = (this.state.qty + 1) * (this.props.product.price/100);
      // console.log('this products total', productTotal);
      this.updateCartTotal(productTotal);
    }
  }

  removeFromCart(){
    if (this.state.qty > 0){
      this.setState({qty: this.state.qty - 1})
      const productTotal = this.props.product.price/100;
      // console.log('this products total', productTotal);
      this.removeFromCartTotal(productTotal);
    }
  }

  updateCartTotal(productTotal){
    // console.log('product total from updateCartTotal', productTotal);
    const updatedCartTotal = Math.round((this.props.cartTotal + productTotal)*100)/100;
    // console.log('cart total from updateCartTotal', updatedCartTotal);
    // console.log('cartTotal from the updateCartTotal in result', this.props.cartTotal);
    this.props.setCartTotal(updatedCartTotal);
    console.log("Warning: Quantities for each product are not persisted with Redux when using the search bar. Functionality needs work.");
  }

  removeFromCartTotal(productTotal){
    // console.log('product total from updateCartTotal', productTotal);
    const updatedCartTotal = Math.round((this.props.cartTotal - productTotal)*100)/100;
    // console.log('cart total from updateCartTotal', updatedCartTotal);
    // console.log('cartTotal from the updateCartTotal in result', this.props.cartTotal);
    this.props.setCartTotal(updatedCartTotal);
    console.log("Warning: Quantities for each product are not persisted with Redux when using the search bar. Functionality needs work.");
  }

  render(){
    const {title, serverkey, price, description} = this.props.product;
    return(
      <div>
        <div>
          <h3 className="product-title"><strong>{title}</strong></h3>
          <p>[{serverkey}]</p>
        </div>

        <p>$ {price/100.00}</p>
        <p>{description}</p>
          <Button className="btn btn-sm btn-primary"
            onClick={() => this.buyProduct()}>Buy</Button>
          <button className="btn btn-sm"
            onClick={() => this.removeFromCart()}>Remove</button>
          <h4> Qty: {this.state.qty} item(s) </h4>
          <hr/>
      </div>
    )
  }
}

function mapStateToProps(state){
  // console.log('state from the mapStateToProps in result', state);
  const {cartTotal} = state;
  return {cartTotal}
}

export default connect(mapStateToProps, {setCartTotal})(Result);
