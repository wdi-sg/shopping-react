import React from 'react';

import SearchItem from './searchitem';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            filter: ''
        }
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(e) {
        this.setState({filter: e.target.value});
    }

    renderItems(){
        return this.props.items
                .filter(item => item.name.toLowerCase().includes(this.state.filter))
                .map((item, index) => {
                    return (
                        <React.Fragment>
                            <SearchItem
                                item={item}
                                key={index}
                                editAjax={ this.props.editAjax }
                                showProduct={ this.props.showProduct }
                            />
                        </React.Fragment>
                    )
                })
    }

    render() {
        return (
            <div>
                <input onChange={this.changeHandler} placeholder="Search your product here" /><br/>
                {this.renderItems()}
            </div>
        );
    }
}

export default Search;