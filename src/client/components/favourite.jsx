import React from 'react';
import style from '../style.scss';
import gifItem from './gifitem';

class Favourite extends React.Component {




  render() {

        const Count = this.props.count;

    return (
        <div className={style.top_wrapper}>
            <div className={style.gallereasy}>Galler<span>easy</span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Search&nbsp;&nbsp;&nbsp;Favourite&nbsp;({Count})</div>
        </div>
    );
  }

}


export default Favourite;