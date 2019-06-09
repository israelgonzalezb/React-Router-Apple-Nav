import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

class TextLink extends React.Component {
  constructor(props) {
    super(props);
  }
  
  handleMenuItem(name) {
    console.log(name);
  }

  render() {
    const lowerCaseName = this.props.name.toLowerCase();
    return <Link className={this.props.className} onClick={()=>this.handleMenuItem(lowerCaseName)} to={`/${lowerCaseName}`}>{this.props.name}</Link>;
  }
}

const StyledTextLink = styled(TextLink)`
  height: 44px;
  line-height: 44px;
  font-size: 14px;
  font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
  transition: opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  text-decoration: none;
  color: #fff;
  &:hover {
    opacity: .65;
  }
`

export default StyledTextLink;