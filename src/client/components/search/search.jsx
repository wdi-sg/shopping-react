// import React from 'react';

// import Form from '../form/form';

// class Search extends React.Component {
//     constructor() {
//         super();
//         this.onChangeHandler = this.onChangeHandler.bind(this);
//         this.onClickHandler = this.onClickHandler.bind(this);

//         this.state = {
//             searchQuery: '',
//             queryData: {}
//         };
//     }



// onChangeHandler(searchQuery) {
//     this.setState({searchQuery})
// }

// onClickHandler() {
//     const reactThis = this;
//     const {searchQuery} = this.state;

//     const oReq = new XMLHttpRequest();
//     oReq.addEventListener('load', function reqListner() {
//         console.log('response TEXT: ' + this.responseText);
//         const queryData = JSON.parse(this.responseText);
//         reactThis.setState({queryData});
//     });

//     oReq.open('GET', `http://localhost:3000/api/query?search=${searchQuery}`);
//     oReq.send();
// }

// render() {
//     const {searchQuery} = this.state;

//     return(
//         <div>
//             <Form onChange={this.onChangeHandler} onClick={this.onClickHandler} value={searchQuery} />
//         </div>
//     );
// }
// } 

// export default Search;
