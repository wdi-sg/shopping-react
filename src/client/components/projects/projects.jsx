import React from 'react';

import styles from './style.scss'

class Projects extends React.Component{

    drop(event){
        event.preventDefault();
        console.log(event.target.id)
        const data = event.dataTransfer.getData('transfer');
        console.log('the dropped item id: ', data)
        this.props.switchItem(data)
    }

    drag(event){
        event.dataTransfer.setData('transfer', event.target.id)
        console.log('drag project id: ', event.target.id)
    }

    allowDrop(event){
        event.stopPropagation()
    }

    render(){

        let projects = this.props.projects.map((project,index)=>{
            return(
                <div id={index} className={styles.card} draggable="true" onDragStart={(event)=>{this.drag(event )}} onDrop={(event)=>{this.drop(event)}} onDragOver={(event)=>{this.allowDrop(event)}} value={index}>
                    <div className='card-body h-100 align-items-end'>
                        <p>{project}</p>
                        <button onClick={()=>{this.deleteProject()}} value={index}>Click me</button>
                    </div>
                </div>
            )
        })

        return(
            <div className='text-center d-flex flex-wrap justify-content-around'>
                {projects}
            </div>
        )
    }
}

export default Projects;