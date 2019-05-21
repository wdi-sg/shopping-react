import React from 'react';

import styles from './style.scss';

class Test extends React.Component{
    constructor(){
        super()
    }
    componentDidMount(){
        this.setState({video:document.getElementById("video")});

        this.getVideo()
    }
    getVideo(){
        navigator.mediaDevices.getUserMedia({video:true,audio:false}).then(stream=>{let video=document.getElementById("video");
            video.srcObject = stream;
            video.play()
            })
    }

    takePic(){
        let video = document.getElementById("video")
        let canvas = document.getElementById("canvas")

        let ctx = canvas.getContext("2d")

        canvas.height = 400;
        canvas.width = 400;
        ctx.drawImage(video,0,0,400,400);
        ctx.fillStyle="rgba(0,0,0,0.5)"
        ctx.fillRect(0,0,400,400)


    var dataURL = canvas.toDataURL('image/png', 0.5);
    console.log(dataURL);
    var dataString = dataURL.slice(23);
    console.log('this is string', dataString);
    // var decodedData = window.atob(dataString);
    // console.log(decodedData)
    // var stuff = JSON.stringify(decodedData);
    // console.log('helloooo', stuff);
    fetch(`/test`, {
        method: 'POST',
        headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
        },
        body: JSON.stringify({
            "data":`${dataURL}`,
        }),

    }).then(res=>{
        return res;
    })

    }
    render(){
        return(
            <div>
            <p>hello</p>
                        <video id="video" style={{display:"none"}}/>
            <canvas id="canvas" style={{width:400,height:400}}/>

            <button onClick={()=>{this.takePic()}}> Hello </button>
            </div>
        );
    }
}

export default Test;