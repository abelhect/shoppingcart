import React, {Component} from 'react';

class Result extends Component {
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
          <button className="btn btn-sm btn-primary">Buy</button>
          <button className="btn btn-sm btn-primary">Remove</button>
          <h4> Qty: 0 item(s) </h4>
          <hr/>
      </div>
    )
  }
}

export default Result;
