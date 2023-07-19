import React from "react";
import Links from "./Links";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I made this</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* <h1>Links</h1> */}
      <Links github={props.links.github} linkedin={props.links.linkedin}/>
      {/* {{ links: props.}} */}
     {/* {props.bio} {props.links} */}
    </div>
  );
}

export default About;
