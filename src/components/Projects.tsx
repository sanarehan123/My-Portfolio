
import React from 'react'
import Heading from './Heading';
import Card from './Card';


const data = [
    {
        id: 0,
        title: "Todo List",
        desc: "A React & TypeScript based app for managing and organizing your tasks efficiently",
        img: "/project_01.jpg",
        tags: ["React", "Node", "CSS", "Typescript"],
    },

    {
        id: 1,
        title: "Countdown Timer",
        desc: "A Next.js & TypeScript powered website to track time with an interactive countdown feature",
        img: "/project_02.jpg",
        tags: ["Next.js", "Node", "CSS", "Typescript"],
    },

    {
        id: 2,
        title: "Weather Widget",
        desc: "A Next.js & TypeScript based tool used for weather forecast",
        img: "/project_03.jpg",
        tags: ["React", "Node", "CSS", "Typescript"],
    },

    {
        id: 3,
        title: "Currency Converter",
        desc: "A Simple HTML and Typescript powered tool for converting currencies with real-time rates",
        img: "/project_04.jpg",
        tags: ["HTML", "Node", "CSS", "Typescript"],
    },

    {
        id: 4,
        title: "Static Interactive Resume",
        desc: "A Typescript-based interactive resume built with HTML and CSS, allowing users to showcase their skills dtnamically",
        img: "/project_05.jpg",
        tags: ["HTML", "Node", "CSS", "Typescript"],
    },

    {
        id: 5,
        title: "Simple Calculator Project",
        desc: "A basic HTML CSS and TypeScript calculator for performing basic calculations",
        img: "/project_06.jpg",
        tags: ["HTML", "Node", "CSS", "Typescript"],
    },

];



const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
<Heading title='My Projects' />
<div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
    {data.map((el) => (<Card 
    key={el.id}
    title={el.title}
    desc={el.desc}
    img={el.img}
    tags={el.tags}
    
    />))}
</div>

    </div>
  )
}

export default Projects



