import React from 'react';

class PostForm extends React.Component {

    constructor(props) {
        super(props);
            this.state = {
                name: " ",
                price: " ",
                description: " "
            }
    }

    changeHandler = (event) => {
        this.setState({ name: event.target.value })
    }


    render() {
        const { name, price, description } = this.this.state

        return(
            <div>
                <form onSubmit = {this.submitHandler}>
                <h3> ADD NEW ITEM </h3>
                    <p> Product Name: </p>
                    <input
                    type = "text"
                    name = "name"
                    value = {name}
                    onChange = {this.changeHandler}/><br/>

                    <p> Price: </p>
                    <input
                    type = "text"
                    name = "price"
                    value ={price}
                    onChange = {this.changeHandler}/><br/>

                    <p> Description: </p>
                    <input
                    type = "text"
                    name = "description"
                    value = {description}
                    onChange = {this.changeHandler}/><br/>

                    <button type = "submit">Update Item</button>

                </form>
            </div>
        )
    }
}

export default PostForm;