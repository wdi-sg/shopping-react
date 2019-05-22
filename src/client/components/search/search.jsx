/*search component is a child component,
so it does not require the ReactDOM.render... */

/* Though we still need to import the react library so that the computer
can understand jsx syntax*/

import React from 'react';

class Search extends React.Component{
    render(){
        return (
            <React.Fragment>
                <h1>
                    Hello from the child search component
                </h1>
            </React.Fragment>
        )
    }
}

/* then we export the search component so whichever higher component
that wants to use Search can call it by simply importing it */
export default Search;