import React from 'react';
import { hot } from 'react-hot-loader';

import styles from './style.scss';
import Projects from './components/projects/projects'
import Bins from './components/bins/bins'
import Project from './components/project/project'
import Done from './components/done/done'


class App extends React.Component {

    constructor(){
        super()

        this.state={
            value:'',
            projects: [
                {
                    projectId: 1,
                    projectName: 'project 1',
                    projectDescription: 'Daily basic need',
                    members:[{
                            name: 'asshikin',
                            tasks: ['clean toilet', 'go smoke']
                    },
                    {
                        name: 'thea',
                        tasks: ['wash dishes', 'go swimming']
                    }],
                    doneTask: []
                },
                {
                    projectId: 2,
                    projectName: 'project 2',
                    projectDescription: 'TA basic need',
                    members: [{
                        name: 'khai',
                        tasks: ['play with cats', 'go for 9 rounds']
                    },
                    {
                        name: 'herda',
                        tasks: ['put on make up', 'daydreaming']
                    }],
                    doneTask: []
                }
            ],
            showProject: [],
            switchItemIndex: '',
            switchWithIndex: '',
            verifying: '',
            showProjectId: ''
        }
    }

    deleteProject(id){
        let projects = this.state.projects
        let projectIndex = projects.findIndex(project => project.projectId == id)
        projects.splice(projects[projectIndex], 1)
        this.setState({projects: projects})

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


    allowDrop(event){
        event.preventDefault()
        console.log("HELLOOO")
    }

    showProject(id){
        let projects = this.state.projects
        let showProject = this.state.showProject
        let projectIndex = projects.findIndex(project => project.projectId == id)
        if(showProject.length !== 0){
            showProject[0] = projects[projectIndex]
            this.setState({showProject: showProject})
        }
        else{
            showProject.push(projects[projectIndex])
            this.setState({showProject: showProject})
        }
    }

    newMember(id,name){
        let data = {
            id: parseInt(id),
            member: name,
            tasks: []
        }
        let projectDetail = this.state.projectDetail
        projectDetail.push(data)
        this.setState({projectDetail: projectDetail}, ()=>{
            console.log(this.state.projectDetail)
        })
    }


    doneTask(id,name,index){
        let projects = this.state.projects
        let projectIndex = projects.findIndex(project=> project.projectId == id)
        let doneTask = this.state.projects[projectIndex].doneTask
        let memberTaskIndex = projects[projectIndex].members.findIndex(member=> member.name == name)
        let tasks = this.state.projects[projectIndex].members[memberTaskIndex].tasks
        let newDone = tasks.splice(index,1)
        doneTask.push(newDone[0])
        this.setState({doneTask: doneTask, tasks: tasks})

    }

    render() {

    return (
        <div>
            <div className='header text-center'>
                <div className='row'>
                    <div className='col-4'>
                    </div>
                    <div className='col-4'>
                        <h1>Trello Clone</h1>
                    </div>
                    <div className='col-4'>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <input onChange={(event)=>{this.changeHandler(event)}} onKeyDown={(event)=>{this.changeHandler(event)}} value={this.state.value}/>
            </div>
            <div className='row'>
                <div className='col-3 text-center'>
                    <div className={styles.projects}>
                        <Projects projects={this.state.projects} deleteProject={(id)=>{this.deleteProject(id)}}  onDragOver={(event)=>{this.allowDrop(event)}} showProject={(id)=>{this.showProject(id)}} addNewMember={(id,name)=>{this.newMember(id,name)}}/>
                    </div>
                </div>
                <div className='col-6'>
                    <Project showProject={this.state.showProject} doneTask={(id,name,index)=>{this.doneTask(id,name,index)}}/>
                </div>
                <div className='col-3'>
                    <Done showProject={this.state.showProject}/>
                </div>
            </div>
        </div>
    );
  }
}

export default hot(module)(App);