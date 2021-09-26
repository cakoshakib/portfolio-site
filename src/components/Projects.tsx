import React from 'react';
import './Projects.css'
import { Image } from 'react-bootstrap'

const Description = ({ link, title, desc }: {link: string, title: string, desc: string}) => {
  return (
    <div>
      <h3 className="projectTitle">{title}</h3>
      <a className="projectLink" href={link}>{link}</a>
      <p className="projectDesc">{desc}</p>
    </div>
  )
}

const Project = ({ title, link, img, desc }: {title: string, link: string, img: string, desc: string}) => {

  return (
    <div className="row">
      <div className="col-sm">
        <Image src={img}/>
      </div>
      <div className="col-sm">
        <Description link={link} title={title} desc={desc}/>  
      </div>
    </div>
  )

}

const Projects = () => {
  return (
    <div id="projectsContainer">
      <Project 
        title="Wrind"
        link="https://github.com/rosalogia/wrind"
        img="https://i.imgur.com/l76pHow.gif"
        desc="This was a project created for HackRU Fall 2020. It ended up winning Best UI/UX! The premise of the project was to help foreign language learners practice their chosen language by allowing them to easily have flashcards made based on a chosen media input. I was in charge of the front end, linking up the backend, and webscraping data to convert into readable csv files."
      />
      <hr />
      <Project 
        title="Late Bus Sign Up App"
        link="https://github.com/nbthstech/late-bus-signup"
        img="https://i.imgur.com/ao6y6bd.png"
        desc="This project was created for my high school. It is a web app that allows the students of the school to sign up for the late bus digitally--improving from the antiquated handwritten procedure. It is currently used across the school (2000 students!)."
      />
      <Project 
        title="Tech Club Website"
        link="https://github.com/nbttech/tech-club-website"
        img="https://i.imgur.com/c67EGuF.png"
        desc="A club website for the Tech Club at my high school. There isn't much to it- just a simple website that allows club members to keep up with various club activities."
      />
      <Project 
        title="Space Shooter Game"
        link="https://github.com/cakoshakib/space-shooter-game"
        img="https://i.imgur.com/GejVE3I.png"
        desc="A simple Shoot 'Em Up made to learn Unity and C# Development. For this project, I went off a tutorial and then added my own boss! One of my first coding projects."
      />
    </div>
  )
}

export default Projects;