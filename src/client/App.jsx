import React from 'react';
import { hot } from 'react-hot-loader';

import styles from './style.scss';
import Projects from './components/projects/projects'
import Bins from './components/bins/bins'


class App extends React.Component {

    constructor(){
        super()

        this.state={
            value:'',
            projectNames: ['sample']
        }
    }

    deleteProject(data){
        let projectNames = this.state.projectNames
        projectNames.splice(data, 1)
        this.setState({projectNames: projectNames})
    }

    changeHandler(event){
        this.setState({value: event.target.value})
        let projectNames = this.state.projectNames
        if(event.keyCode === 13){
            let newProjectName = event.target.value
            projectNames.push(newProjectName)
            this.setState({projectNames: projectNames, value: ''})
        }
    }

  render() {

    let projects = this.state.projectNames.map((project,index)=>{
        return(
            <div className='card' key={index}>
                <div className='card-header'></div>
                <div className='card-body'>
                    <p>{project}</p>
                </div>
                <div className='card-footer text-right'>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className='header text-center'>
                <div className='row'>
                    <div className='col-4'></div>
                    <div className='col-4'>
                        <h1>Trello Clone</h1>
                    </div>
                    <div className='col-4'>
                        <Bins projects={this.state.projectNames} dropItem={(data)=>{this.deleteProject(data)}}/>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <input onChange={(event)=>{this.changeHandler(event)}} onKeyDown={(event)=>{this.changeHandler(event)}} value={this.state.value}/>
            </div>
            <div className={styles.projects}>
                <Projects projects={this.state.projectNames} deleteProject={(index)=>{this.deleteProject(index)}}/>
            </div>
        </div>
    );
  }
}

export default hot(module)(App);