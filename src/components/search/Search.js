import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import ImageResults from '../image-results/ImageResults';
class Search extends Component {
    state={
        searchText: '',
        amount: 0,
        apiUrl:'http://api.tvmaze.com/shows?',
        data:[]
    };

    onTextChange = e => {
        const val = e.target.value;
        this.setState({ [e.target.name]: val }, () => { 
            if(val === ''){
                this.setState({data: []});
            } else {
           axios
             .get(
                 `${this.state.apiUrl}q=${this.state.searchText}&page=${this.state.amount}`
                 )
                    .then (res => this.setState({data: res.data}))
                    .catch(err => console.log(err));

            }
        });
    };

    onAmountChange=(e, index, value) => this.setState({ amount: value});
    
    render() {
        console.log(this.state.data);
        console.log('amount',this.state.amount);
        return (
            <div>
                <h2 style={{textAlign: 'center', cursor: 'none'}}>Please enter any query to start searching Shows</h2>
                <TextField style={{width:350, marginLeft:350}}
                    name="searchText"
                    value={this.state.searchText}
                    onChange={this.onTextChange}
                    floatingLabelText="Search Your Favorite Movie"
                    fullWidth={true}
                />
                <br/>
                <SelectField style={{width:350, marginLeft:350}}
                  name="amount" 
                  floatingLabelText="Page"
                  value={this.state.amount}
                  onChange={this.onAmountChange}
                  >
                  <MenuItem value={1} primaryText="1"/> 
                  <MenuItem value={2} primaryText="2"/>   
                  <MenuItem value={3} primaryText="3"/>   
                  <MenuItem value={4} primaryText="4"/>   
                  <MenuItem value={5} primaryText="5"/>                    
                  </SelectField>
                <br/>
                {this.state.data.length > 0 ? (<ImageResults data={this.state.data}/>) : <h3 style={{textAlign: 'center', cursor: 'none'}}>use the search bar to get shows you want</h3>}
            </div>
        )
    }
}

export default Search;