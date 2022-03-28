import './message.css'
import React, {Component} from 'react';

class Message extends Component{
    render(){
       // console.log('texts', this.props.items)
        return (
                <div>
                {this.props.items.map((item, index) =>
                        <div className="massage-box">
                    <p className={item.classStyle + ' message-text'} key={item.id}>{item.text}</p>
                        </div>
                )}

                </div>
        );
    }
}


export default Message;

