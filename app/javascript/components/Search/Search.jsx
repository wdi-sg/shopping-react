import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
            />
            <div className="mt-2">
                {results}
            </div>
        </div>);
    }
}

export default Search;