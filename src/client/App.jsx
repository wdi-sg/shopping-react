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
            gifs: [],
            count: 0,
            favourite:'false'
        }
        this.handleTermChange = this.handleTermChange.bind(this);
        this.counter = this.counter.bind(this);
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

  counter() {
        //console.log('In Counter')

        let counter = this.state.count

        if(this.state.favourite === 'false'){
            counter = counter + 1
            this.setState({count:counter})
            this.setState({favourite:'true'})
        }
        else{
            counter = counter - 1
            this.setState({count:counter})
            this.setState({favourite:'false'})
        }
    }



  render() {
    return (
      <div className={style.app_wrapper}>
        <Favourite count={this.state.count} />
        <Search onTermChange={this.handleTermChange}/>
        <GifList gifs={this.state.gifs} count={this.counter}/>

        <div className={style.footer}>
            <div>Gallereasy POC web app</div>
            <div>2359 Media</div>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);