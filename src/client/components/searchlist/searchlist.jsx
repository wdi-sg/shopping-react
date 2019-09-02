import React from 'react';
import styles from '../../style.scss';


class SearchList extends React.Component{


  render() {
      console.log(this.props)


     return (
        <div className={styles.searchList}>
            <input/>
           <div>
               {this.props.products.map((product, index) => {
                   return(
                       <div className={styles.searchItem} key={index}>
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


export default SearchList
