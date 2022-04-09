import React from "react";
import '../App.css'



class Title extends React.Component {
    render() {
      return (
        <h2 className="title-name">This room's name is: {this.props.name}!</h2>
      );
    }
  }


export default Title;