import React from 'react'

class Display extends React.Component {
    render(){
        var display = this.props.displayKey;
        if(Object.keys(display).length === 0){
            return(
                ""
            )
        } else {
            console.log(display)
            return(
                <div>
                    <p>{display.name}</p>
                    <img src={display.image_url}/>
                    <p>Price: {display.price}</p>
                    <p>{display.description}</p>
                    <button onClick={()=>{this.props.addFunc(display)}}>Add to cart</button>
                </div>
            )
        }

    }
}

export default Display;