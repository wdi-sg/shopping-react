import React from 'react'

function SearchForm(props){

    let results;
    if (props.items){
        results = props.items.map((result,i) => {
            return (
                <tr key={i}>
                    <td>{result.name}</td>
                    <td>{result.price}</td>
                    <td>{result.description}</td>
                </tr>
            )
        })
    }

    return(
        <div>
            <h1>Results</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                {results}
                </tbody>
            </table>
        </div>
    )
}

export default SearchForm