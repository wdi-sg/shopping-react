import React from 'react';
import { hot } from 'react-hot-loader';
import Search from './components/search';
import GifList from './components/giflist';
import Favourite from './components/favourite';
import style from './style.scss';

class App extends React.Component {
   constructor() {
        super();
        this.state = {
            gifs: []
        }
        this.handleTermChange = this.handleTermChange.bind(this);
    }


  handleTermChange(term) {
    console.log(term);
  }

  handleTermChange(term) {
    // console.log(term);
    //---------------------->
    let url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC&limit=8`;
    fetch(url)
    .then(response => response.json())
    .then((gifs) => {
      // console.log(gifs);
      // console.log(gifs.length);
      this.setState({
        gifs: gifs.data
      });
    });
  };

   makeAjaxCall(){

    const thisWord = this;
    const API_KEY = "dc6zaTOxFJmzC"

    var request = new XMLHttpRequest();
    var responseHandler = function(){


        const result = JSON.parse( this.responseText);
        // console.log(result);
        thisWord.setState({searchResults: result.data});
        // console.log(this.state.searchResults);



        // let searchList = thisWord.state.cats? thisWord.state.cats.filter(x=>x.name.toLowerCase().includes(thisWord.state.searchWord.toLowerCase())):null;
        // thisWord.setState({searchResults:searchList})

    };

    request.addEventListener("load", responseHandler);
    request.open("GET", `http://api.giphy.com/v1/gifs/search?q=${(this.state.searchWord).replace(/\s/g, '+')}&api_key=${API_KEY}&limit=8`,true);
    request.send();
  }




  render() {
    return (
      <div className={style.app_wrapper}>
        <Favourite count={this.state.count}/>
        <Search onTermChange={this.handleTermChange}/>
        <GifList gifs={this.state.gifs} />

        <div className={style.footer}>
            <div>Gallereasy POC web app</div>
            <div>2359 Media</div>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);