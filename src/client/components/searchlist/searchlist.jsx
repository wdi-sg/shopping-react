import React from 'react';
import styles from '../../style.scss';


class SearchList extends React.Component{

    constructor(props) {

        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          products: []
        };

    }


  componentDidMount() {
    fetch("http://localhost:3000/products")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            products: result.products
        });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
   const { error, isLoaded, products } = this.state;

   if (error) {
     return (
         <div className={styles.searchList}>
            <div>Error: {error.message}</div>
         </div>
     ) ;
   } else if (!isLoaded) {
     return (
         <div className={styles.searchList}>
            <div>Loading...</div>
         </div>
     );
   } else {
     return (
        <div className={styles.searchList}>
           <div>
               {products.map((product, index) => {
                   return(
                       <div className={styles.searchItem} key={product.name}>
                            <span className={styles.searchItemPrice}>{product.price}</span>
                            <span className={styles.searchItemName}>{product.name}</span>
                       </div>
                   )
               }
            )}
           </div>
        </div>

    );
   }
 }
}


export default SearchList
