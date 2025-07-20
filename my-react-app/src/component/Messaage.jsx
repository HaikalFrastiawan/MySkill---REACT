import React from "react";
import ChangeProps from "./ChangeProps";

class Massege extends React.Component{
    render(){
        return (
            <div>
                <small> 
                    {this.props.sender}:
                </small>
                <p>{this.props.content}</p>
            </div>
        );
    }

}

class ChatBox extends React.Component{
    render(){
        return(
            <div>
                <Message sender = 'Haikal' content = 'kamu laper?'></Message>
                <Message sender = 'Repan' content = 'iyaa'></Message>
            </div>
        )
    }
}


ReactDOM.render(<ChatBox />, document.getElementById('root') );



export default Massege ;