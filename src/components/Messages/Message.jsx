import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Message extends Component{

  render(){
    const {message} = this.props;

    var formattedTime = this.formatTime(message.timeStamp);
    return(
      <div className="message">
        <strong>{message.user}</strong>{formattedTime} - {message.text}
      </div>
    )
  }

  formatTime(timeStamp){
    var dt = new Date(timeStamp * 1000);

    var hours =  dt.getHours();
    var mins =  dt.getMinutes();
    var secs =  dt.getSeconds();

    if (hours < 10) {
      hours = '0' + hours;
    }

    if (mins < 10) {
      mins = '0' + mins;
    }

    if (secs < 10) {
      secs = '0' + secs;
    }

    return hours+":"+mins+":"+secs
  }
}

export default Message
