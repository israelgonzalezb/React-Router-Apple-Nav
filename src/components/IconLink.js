import React from "react";

export default class IconLink extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return (
    <div>
      <img src={`/assets/${this.props.name}_large.svg`} />
      </div> 
    
    )
  }
}