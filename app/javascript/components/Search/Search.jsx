import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

class Search extends React.Component{

    render() {
        return (<Paper component="form">
            <InputBase
                placeholder="Search"
                onChange={(event)=>{this.props.onSearchQuery(event)}}
            />
            <IconButton onClick={()=>{this.props.searchProducts()}}>
                <SearchIcon />
            </IconButton>
        </Paper>);
    }
}

export default Search;