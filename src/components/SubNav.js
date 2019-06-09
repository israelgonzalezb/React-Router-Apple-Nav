import React from "react";
import styled from "styled-components";

class SubNav extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    this.nameSwitch = this.nameSwitch.bind(this);
  }
  
  nameSwitch(){
    switch(this.props.name){
    case 'Mac':
      console.log("switch statement");
    default:
      return null;
    }
  }
  
  render() {
    return (
      <div className={this.props.className}>
        {this.nameSwitch()}
      </div>
      
    )
  }
  
}

const StyledSubNav = styled(SubNav)`
  display: flex;
  color: red;
`

export default StyledSubNav;