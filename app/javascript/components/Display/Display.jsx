import React from 'react';

// import classnames from 'classnames';

// import styles from './style.scss';

// const cx = classnames.bind(styles)




class Display extends React.Component {

  constructor(){
    super();

    this.state = {
      
    };
  }


  
  render() {


    return (
      <div style={{border:"solid", width:"30%", height:"700px", textAlign:"center", padding:"20px", display:"inline"}}>
        Search:
        <input type="text" value={this.state.value} onChange={this.handleChange} /><br/><br/>
        <button onClick={()=>{this.buttonBack()}}>sort by price</button>
      </div>
    );
  }
}

export default Display;
