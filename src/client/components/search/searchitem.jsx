import React from 'react';

class SearchItem extends React.Component {
    constructor() {
        super();
        this.state = {
            isEditing: false
        };
    }

    renderIfEditing(){
        // console.log("HERE HERE HERE", this.props.item);
        if (this.state.isEditing){
            return (
                <input
                    autoFocus
                    onBlur={e =>{
                              this.setState({isEditing:false})
                              this.props.editAjax(e.target.value, this.props.item.id);
                            }}
                    defaultValue={this.props.item.name}
                />
            )
        }
        return (
            <React.Fragment>
                <p onClick={()=>this.setState({isEditing:true})}>{this.props.item.name}</p>
                <button className="btn btn-primary" onClick={()=>this.props.showProduct(this.props.item)}>Show Product</button>
            </React.Fragment>
        )
    }


    render() {
        return (
            <React.Fragment>
                {this.renderIfEditing()}
                <br/>
            </React.Fragment>
        );
    }
}

export default SearchItem;