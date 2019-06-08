import React from "react";
import IconLink from "./IconLink";
import TextLink from "./TextLink";
import styled from "styled-components";

const textLinks = ["Mac", "iPad", "iPhone", "Watch", "TV", "Music", "Support"];

function NavBar(props) {
  return (
    <div className={props.className}>
      <IconLink name="apple" />
      {textLinks.map(link => (
        <TextLink name={link} />
      ))}
      <IconLink name="search" />
      <IconLink name="bag" />
    </div>
  );
}

const StyledNavBar = styled(NavBar)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: space-around;
  background-color: #181818;

`

export default StyledNavBar;
