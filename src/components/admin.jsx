import React, {Component} from 'react';
import {Button, Panel} from 'react-bootstrap';
import {productRef} from '../firebase';

class Admin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      title: '',
      price: '',
      description: '',
      serverkey: ''
    }
  }

  loadProduct(){
    console.log('this.state from loadProduct in Admin', this.state);
    const {title, price, description} = this.state;
    productRef.push({title, price, description});
  }

  deleteProduct(){
    const {serverkey} = this.state;
    productRef.child(serverkey).remove();
  }

  render() {
    return (
      <div>
        <Button onClick={() => this.setState({ open: !this.state.open })}>
          Admin
        </Button>
        <Panel collapsible expanded={this.state.open}>
          <div>
            <p className="text-center"><em>This console is for the administrators to load or delete
            products from inventory.</em></p>
            <input type="text"
              className="input"
              placeholder="Product Title"
              onChange={event => this.setState({title: event.target.value})}/>
            <input type="text"
              className="input"
              placeholder="Product Price"
              onChange={event => this.setState({price: event.target.value})}/>
            <textarea type="text" cols="42"
              className="input"
              placeholder="Product Description"
              onChange={event => this.setState({description: event.target.value})}></textarea>
            <button className="btn btn-sm btn-success"
              onClick={() => this.loadProduct()}
              >Load</button>
            <p className="text-center"><em>Delete a product from the database
              by using the unique ID below the product title inside the square brackets.</em></p>
            <input type="text"
              className="input"
              placeholder="Product Unique ID"
              onChange={event => this.setState({serverkey: event.target.value})}/>
            <button className="btn btn-sm btn-danger"
              onClick={() => this.deleteProduct()}
              >Delete</button>
          </div>
        </Panel>
      </div>
    );
  }
}

export default Admin;
