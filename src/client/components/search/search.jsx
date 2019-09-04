import React from 'react';


class Search extends React.Component{

    constructor(){

        super()

        this.state={
            placeHolder: 'Search by name',
            itemName: ''
        }
    }

    searchItem(){
        let value = this.state.itemName
        this.props.searchItem(value)
        this.setState({itemName: ''})

    }


    changeHandler(event){
        let value = event.target.value
        if(event.keyCode === 13){
            this.setState({itemName: value})
            this.searchItem()
        }
        else{
            this.setState({itemName: value})
            this.props.searchItem(value)
        }
    }



    render(){
        return(
            <div className='text-center'>
                <div className='text-center d-flex justify-content-center'>
                    <input className='form' onChange={(event)=>{this.changeHandler(event)}} onKeyDown={(event)=>{this.changeHandler(event)}} placeholder={this.state.placeHolder} value={this.state.itemName}/>
                    <button className='btn btn-md btn-outline-success' onClick={()=>{this.searchItem()}}>Search</button>
                </div>
                <p>{this.state.itemName}</p>
            </div>
        )
    }
}

export default Search;