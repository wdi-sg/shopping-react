import React from 'react'

class Searchform extends React.Component{
    render(){

        return(
            <div>
                <input placeholder="Search by name"/>
                <select>
                    <option value="10">Under $10</option>
                    <option value="20">Under $20</option>
                    <option value="30">Under $30</option>
                </select>
            </div>
        )
    }
}

export default Searchform