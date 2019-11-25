import React from 'react';

const style = {
    margin: "10px"
}

class Search extends React.Component {
    state = {
        search: ""
    }

    updateSearch(e) {
        this.setState({search: e.target.value})
    }
  
    render() {
        const {products} = this.props;
        const {search} = this.state;
        const searchFilter = products.filter((product) => (
            product.name.toLowerCase().includes(search.toLowerCase())
        ))
        return (
            <div style={style}>
                <h1>Search</h1>
                <input type="text" value={search} onChange={e => this.updateSearch(e)}/>
                {searchFilter.map((item, i) => (
                    <p key={i} onClick={e => this.props.selectProduct(e)}>
                        {search !== "" ? item.name : ""}
                    </p>
                ))}
            </div>
        )
    }
}

export default Search;
