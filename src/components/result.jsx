import React, {Component} from 'react';
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
    //increase quantity for this product
    this.setState({qty: this.state.qty + 1});
    //update the total for the entire cart
    // console.log('this products price', this.props.product.price/100, 'this product qty', this.state.qty + 1);
    const productTotal = (this.state.qty + 1) * (this.props.product.price/100);
    // console.log('this products total', productTotal);
    this.updateCartTotal(productTotal);
  }

  removeFromCart(){
    if (this.state.qty > 0){
      this.setState({qty: this.state.qty - 1})
      const productTotal = (this.state.qty - 1) * (this.props.product.price/100);
      console.log('this products total', productTotal);
    }
  }

  updateCartTotal(productTotal){
    // console.log('product total from updateCartTotal', productTotal);
    const updatedCartTotal = this.props.cartTotal + productTotal;
    console.log('cart total from updateCartTotal', updatedCartTotal);

    // this.setCartTotal(updatedCartTotal);
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
          <button className="btn btn-sm btn-primary"
            onClick={() => this.buyProduct()}>Buy</button>
          <button className="btn btn-sm btn-primary"
            onClick={() => this.removeFromCart()}>Remove</button>
          <h4> Qty: {this.state.qty} item(s) </h4>
          <hr/>
      </div>
    )
  }
}

function mapStateToProps(state){
  // console.log('state from the mapStateToProps in result', state);
  return {}
}

export default connect(mapStateToProps, {setCartTotal})(Result);
