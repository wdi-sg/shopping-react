import React from 'react';
import style from '../style.scss';


class GifItem extends React.Component {


  render() {

    return (
            <div className={style.gifItem_wrapper}>
                <i className='bx bxs-heart'></i>
                <img src={this.props.gif.images.downsized.url} id={this.key} className={style.gifItem} onClick={this.props.count} />
            </div>
    );
  }

}


export default GifItem;