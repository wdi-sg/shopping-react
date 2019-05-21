import React from 'react';

import styles from './style.scss';

class FormSearch extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <input
                    onKeyDown={(e)=>{this.props.searchItem(e)}}
                    className={styles.search_box}
                    placeholder="Search for products"
                    />
            </div>
        );
    }
}

class Items extends React.Component{
    constructor(){
        super()
    }
    render(){
        console.log(this.props)
        const items = this.props.items.map((items,index)=>{
            if(index<5){
            return <div key={index} className={styles.search_item}>
                        <p onClick={(e)=>{this.props.clickedItem(e)}}>{items.name} <ul hidden><li>{items.price}</li><li>{items.description}</li></ul></p>
                    </div>
            }
        })
        return(
            <div>
                {items}
            </div>
        );
    }
}

class Search extends React.Component{
    constructor(){
        super()
        this.searchItem = this.searchItem.bind(this);
        this.state = {
            items:[],
            searchWord:"",
        }
    }

    searchItem(e){
        //need to find a way to clear the search result
        //flag?
        var reactThis = this;
        if(e.keyCode == 8){

            reactThis.setState( {items:[]} );
        }else{
            // ..get a hold of component for react

        this.setState( {searchWord:e.target.value} );

        //do ajax req to search
        fetch(`/search/${this.state.searchWord}`,{
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
            }).then(res=>{
                return res.json();
            }).then(dataOut=>{
                console.log( dataOut )
                reactThis.setState( {items: dataOut.products} )
            })
        }

        if(e.keyCode == 13){

                e.target.value = "";
        }
    }

    render(){

        return(
            <div>
                <p>Main search list</p>
                <FormSearch searchItem={this.searchItem} />
                <Items items={this.state.items} clickedItem={this.props.clickedItem}/>
            </div>
        );
    }
}

export default Search;