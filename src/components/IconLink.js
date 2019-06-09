import React from "react";
import { Link } from "react-router-dom";

export default class IconLink extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return (
    <div>
      <Link to={`/${this.props.linksTo}`}>
        <img src={`/assets/${this.props.name}_large.svg`} />
      </Link>
      </div> 
    
    )
  }
}