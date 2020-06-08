import React, {Component} from 'react';

export default class Search extends Component {
    constructor() {
        super();
        this.state = {
            buttonDisplay: 'none'
        }
    }

    changeHandler(event){
        this.props.setSearch(event.target.value);
    }

    clickHandler(){
        this.setState({
            buttonDisplay: 'block'
        })
        this.props.getProducts()
    }

    render() {
        return(
            <div className='col-3'>
                <div>
                    <h2>Search</h2>
                    <br/>
                    <input
                        type='text'
                        placeholder='Type product name here..' 
                        onChange={(event)=>{this.changeHandler(event)}}/>
                    <br/>
                    <br/>
                    <button 
                        onClick={()=>{this.clickHandler()}}
                        className='submit'>Submit</button>
                    <br/>
                    <br/>
                    <button
                        className="sort"
                        
                        onClick={()=>{this.clickHandler()}}>
                        All Products
                    </button>
                    <button
                        className="sort"
                        style={{display:this.state.buttonDisplay}}
                        onClick={()=>{ this.props.sortName() }}>
                        Sort by: Name
                    </button>
                    <button
                        className="sort"
                        style={{display:this.state.buttonDisplay}}
                        onClick={()=>{ this.props.sortPrice() }}>
                        Sort by: Price
                    </button>
                </div>
            </div>
        )
    }
}