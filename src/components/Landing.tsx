import React from 'react';
import './Landing.css'
import { Image } from 'react-bootstrap'

const Profile = () => (
  <Image id="pfp" src="https://imgur.com/JJE5uau.png" roundedCircle />
)

const Title = () => {
  return (
    <h1 className="main-title d-flex justify-content-center"> Hi, I'm Shakib. </h1>
  )
}

const Description = () => {
  return (
    <div>
      <h3 className="sub-desc d-flex justify-content-center"> Sophomore at Rutgers University </h3>
      <h3 className="sub-desc d-flex justify-content-center"> Computer Science and Mathematics </h3>
    </div>
  )
}

const Landing = () => {
  return (
    <div id="headerContainer">
      <Title />
      <Description />
    </div>
  )
}

export default Landing;