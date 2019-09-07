import React from 'react';



class Project extends React.Component{

    constructor(){
        super()

        this.state = {
            message: 'SELECT PROJECT'
        }
    }


    doneTask(){
        let values = event.target.value.split(',')
        let index = parseInt(values[0])
        let name = values[1]
        let project = this.props.showProject[0]
        let id = parseInt(project.projectId)
        this.props.doneTask(id,name,index)

    }


    render(){
        let showProject = this.props.showProject[0]
        let projectMember;
        let memberTasks;
        if(this.props.showProject.length !== 0){
            projectMember = showProject.members.map((member,index)=>{
                memberTasks = member.tasks.map((task,index)=>{
                    return(
                        <div className='card-body' key={index}>
                            <p>{task}</p>
                            <button className='btn btn-sm' onClick={()=>{this.doneTask()}} value={[index,member.name]}> Complete Task</button>
                        </div>
                    )
                })
                return(
                    <div className='card' style={{width: '200px'}} key={index}>
                        <div className='card-header'>
                            <h6> Members: {member.name} </h6>
                        </div>
                        {memberTasks}
                    </div>
                )
            })
        }
        else{
            projectMember = () =>{
                return(
                    <div>
                        <p> {this.state.message}</p>
                    </div>
                )
            }
        }
        return(
            <div>
                <h1>{this.props.showProject.projectName}</h1>
                <div>
                    {projectMember}
                </div>
            </div>
        )
    }

}

export default Project;