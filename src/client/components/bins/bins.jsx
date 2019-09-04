import React from 'react';
import styles from './style.scss'


class Bins extends React.Component{

    drop(event){
        event.preventDefault();
        const data = event.dataTransfer.getData('transfer');
        console.log('the dropped item id: ', data)
        this.props.dropItem(data)
    }

    allowDrop(event){
        event.preventDefault()
    }

    render(){

        return(
            <div className={styles.bin} onDrop={(event)=>{this.drop(event)}} onDragOver={(event)=>{this.allowDrop(event)}}>
                <h1>BIN</h1>
            </div>
        )
    }
}

export default Bins;