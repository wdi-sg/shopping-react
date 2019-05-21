import React from 'react';

class DisplayProduct extends React.Component {

    render() {
        let currentObj = this.props.currentProduct;

        if (currentObj === undefined || currentObj === null) {
           console.log("ahdkjahdad")
        } else {
            let name = currentObj.name;
        }


        return (
               <p>Name: {name} </p>

        )
    }
}

export default DisplayProduct;