import React from 'react';
import style from '../style.scss';
import GifItem from './gifitem';


class GifList extends React.Component {

  render() {

        const gifItems = this.props.gifs.map((image) => {

        return (
            <GifItem key={image.id} gif={image} count={this.props.count}/>
            )
        });

        return (
            <div className={style.gifList_wrapper}>
                {gifItems}
            </div>
        );

    }
}

export default GifList;
