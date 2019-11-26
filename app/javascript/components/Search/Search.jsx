import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

class Search extends React.Component{
    render() {
        const results = this.props.searchResults.map((product,i)=>{
            return <Button
                variant="outlined"
                color="primary"
                key={i}
                onClick={()=>{this.props.viewDetails(product)}}
                className="btn-block"
            >
                {product.name}
            </Button>
        })
        return (<div>
            <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                onChange={(e)=>this.props.onSearchQuery(e)}
                className="btn-block"
            /><br/>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                onChange={(e)=>{console.log(e.target.value)}}
                className="btn-block my-1"
            >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value={"name"}>Name</MenuItem>
                <MenuItem value={"price"}>Price</MenuItem>
            </Select>
            <div className="mt-2">
                {results}
            </div>
        </div>);
    }
}

export default Search;