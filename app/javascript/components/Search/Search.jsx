import React from 'react';
import TextField from '@material-ui/core/TextField';

class Search extends React.Component{
    render() {
        const results = this.props.searchResults.map((product,i)=>{
            return <button
                key={i}
                className="btn btn-block btn-outline-primary"
                onClick={()=>{this.props.viewDetails(product)}}
            >
                {product.name}
            </button>
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