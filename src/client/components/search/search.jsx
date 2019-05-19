import React from 'react';

import styles from './style.scss';

class FormSearch extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <input onChange={(e)=>{this.props.searchForm(e)}} onKeyDown={(e)=>{this.props.searchForm(e)}}
                    className={styles.search_box}/>
                <h5>Press enter to search</h5>
            </div>
        );
    }
}

class Search extends React.Component{
    constructor(){
        super()
        this.searchForm = this.searchForm.bind(this);
        this.state = {
            items:[],
            searchWord:"",
            test:"Bread",
        }

    }

    searchItem(){

        // ..get a hold of component for react
        var reactThis = this;

        console.log('at JSX REACT', this.state.searchWord)
        fetch(`/slipperyfall/${this.state.searchWord}`,{
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                // 'body':{
                //     search:`${this.state.test}`,
                // },
            }
        }).then(res=>{
            return res.json();
        }).then(dataOut=>{
            console.log('at react comp stil...', dataOut)
            reactThis.setState( {items: dataOut.products} )
        })

    }

    searchForm(e){

        //on user pressing enter
        if(e.keyCode == 13){

            this.setState( {searchWord:e.target.value} );
            e.target.value = "";
        }else{
            this.setState( {searchWord:e.target.value} );
        }

    }

    render(){

        const items = this.state.items.map((items,index)=>{
            return <div key={index}><p>{items.name}</p></div>
        })
        return(
            <div>
                <p>Main search list</p>
                <p>Searching for......</p>
                <h3>{this.state.searchWord}</h3>
                <FormSearch searchForm={this.searchForm}/>
                <button
                className={styles.test_button}
                onClick={()=>{this.searchItem()}}>Press this to make Ajax call</button>
                {items}
            </div>
        );
    }
}

export default Search;