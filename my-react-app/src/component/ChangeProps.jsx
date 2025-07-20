import React from "react";

class ChangeProps  extends React.Component {
    constructor (){
        super();
        
        //membuat object  state
        this.state = {
            title: "Belajar react",
            subTitle: "panduan react untuk pemula"
        }
    };

    changeTitle = () =>{ 
        this.setState({
            title: "tutorial react"
        })
    }



    render (){
        return(
        <div>
            <h1>{this.state.title}</h1>
            <h1>{this.state.subTitle}</h1>
            <button onClick={this.changeTitle}> Ubah judul</button>
        </div>
        )
            
        
    }
}

export default ChangeProps ;