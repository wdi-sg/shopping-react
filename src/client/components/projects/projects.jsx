import React from 'react';

import styles from './style.scss'

let dragged = "";

class Projects extends React.Component{

    constructor(){
        super()
        this.state={
            switchItemIndex: '',
            switchWithIndex: '',
            display:'none',
            value: '',
            newMember:''

        }
    }

    drag(event){
        event.dataTransfer.setData('transfer', event.target.id)
    }

    allowDrop(event){
        event.stopPropagation();
        this.props.allowDrop(event.target.id)
    }

    renderProject(event){
        this.props.showProject(event.target.id)
    }

    showInput(){
        let value = event.target.value
        let display = this.state.display
        console.log(display)
        if(display === 'none'){
            this.setState({value: value, display: ''})
        }
        else{
            this.setState({value: '', display: 'none'})
        }
    }

    addNewMember(){
        this.props.addNewMember(this.state.value, this.state.newMember)
        this.setState({value: '', newMember: ''})
    }


    changeHandler(event){
        console.log(event.target.value)
        if(event.keyCode === 13){
            this.setState({newMember: event.target.value, display: 'none'}, () => {
                this.addNewMember()
            })
        }
    }

    showProject(){
        this.props.showProject(event.target.value)
    }

    deleteProject(){
        this.props.deleteProject(event.target.value)
    }

    render(){

        let projects = this.props.projects.map((project,index)=>{
            return(
                <div key={index} id={project.projectId} className='card my-3'>
                    <div className='card-header'>
                        <h6>{project.projectName}</h6>
                    </div>
                    <div className='card-body'>
                        <p>{project.projectDescription}</p>
                    </div>
                    <div className='card-footer'>
                        <button className='btn btn-sm' onClick={()=>{this.showProject()}} value = {project.projectId}>Show project</button>
                        <button className='btn btn-sm' onClick={()=>{this.deleteProject()}} value = {project.projectId}>Delete Project</button>
                    </div>
                </div>
            )
        })

        return(
            <div id='parent'className='text-center d-flex flex-column justify-content-around' >
                <div className='card-header'>
                    <h4>Projects</h4>
                </div>
                <div className='card-body'>
                    {projects}
                </div>
            </div>
        )
    }
}

export default Projects;