
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import App from '../components/App';

class ItemList extends component {

            constructor(){
            super()

            this.state={
                message: []
                availability:true

                    }
            this.clickHandler = this.clickHandler.bind(this)

                }


            clickHandler(){
                this.setState( {

                    message: 'you have chosen this'
                    availability:false
                })

            }

            render() {

                return(

                    <div>

                    <div>{this.state.message} </div>

                    <button onClick={this.clickHandler.bind(this)}> Click </button>
                     <button onClick={this.clickHandler}> Click </button>
                    )
                }

        }