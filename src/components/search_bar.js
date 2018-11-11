import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';

 class SearchBar extends Component {
     constructor(props){
         super(props);
         this.state = { term: ""}
     }
  render() {
    return (
      <div className="search-bar">
      

          <TextField
          
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
          id="outlined-search"
          label="Search field"
          type="search"
          style={{width: '30em'}}
          margin="normal"
          variant="outlined"
        />
        
      </div>
    );
  }
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
    
  }
}


export default SearchBar; 