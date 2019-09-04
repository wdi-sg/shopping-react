import React from 'react';

import styles from './style.scss';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      monkey: 'haha',

    };
  }



    render() {
        console.log("RENDERING SEARCH RESULTS");
        // console.log(this.props.searchRes);
        let searchRes = [this.props.searchRes];
        console.log(searchRes);

            /*let searchItems = searchRes.map((item) => {
            // let itemId = item.id;
            console.log(item.name, item.price)
                    return (
                            <li>{item.name}, {item.price} <button onClick={(e)=>{this.props.prodDetails(e, item.id)}}>Show Details</button>
                            </li>
                        )
                });*/



        return (
          <div>
            <p>{this.state.monkey}</p>

            <ul>

            </ul>
          </div>
        );
    }
}

export default Search;