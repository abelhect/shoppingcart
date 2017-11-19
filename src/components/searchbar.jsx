import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setSearchbarQuery} from '../actions';

class SearchBar extends Component {
  render(){
    return(
      <input type="text"
      placeholder="Search products"
      // onChange={event => this.loadQuery(event)}
      onChange={(event) => this.props.setSearchbarQuery(event.target.value.toLowerCase().trim())}
      />
    )
  }
}

function mapStateToProps(state){
  // console.log('state from mapStateToProps in Searchbar', state);
  return {}
}

export default connect(mapStateToProps, {setSearchbarQuery})(SearchBar);
