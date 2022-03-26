import React from 'react';

import shopping from '../images/shopping.png';
import crownClothing from '../images/crown-clothing.png';
import food from '../images/food.png';
import memories from '../images/memories.png';
import resumeBuilder from '../images/resumeBuilder.png';
import ticTacToe from '../images/ticTacToe.png';
import toDoList from '../images/toDoList.png';
import angularPortfolio from '../images/angularPortfolio.png';

import Project from './Portfolio/Project';

const Portfolio = () => {
  return (
      <>
      <p className="text-2xl text-black md:text-4xl font-bold text-center">
        Portfolio
      </p>
      <div className="flex flex-wrap pt-4 justify-center">

    <Project img = {shopping} name= "Shopping App" gitHub="" hostingLink="https://shop1-5abc3.web.app/" title="This is a shopping website built using angular and material UI. It consists of shopping cart and guide throw till the end of checkout process" tags={["Angular", "Material UI", "shopping", "Dark mode"]}/>
    <Project img = {crownClothing} name= "Crown Clothing Mens"  gitHub="https://github.com/akhil-anand/crwn-clothing" hostingLink="https://crwn-clothing-mens.herokuapp.com/" title="This is a shopping website built using angular and material UI. It consists of shopping cart and guide throw till the end of checkout process" tags={["ReactJs", "Material UI", "shopping", ]}/>
    <Project img = {food} name= "Fortuna"  gitHub="" hostingLink="https://food1-e9a0a.web.app/" title="This is a static food website " tags={["ReactJs", "Material UI", "shopping", ]}/>
    <Project img = {memories} name= "Memories App"  gitHub="" hostingLink="https://memories-david.netlify.app/" title="A MERN stack application which uses mongo db for database and google auth for authentication" tags={["ReactJs", "Material UI", "memories", ]}/>
    <Project img = {resumeBuilder} name= "Memories App"  gitHub="" hostingLink="https://resume-builder-79633.web.app/" title="A MERN stack application which uses mongo db for database and google auth for authentication" tags={["ReactJs", "Material UI", "memories", ]}/>
    <Project img = {ticTacToe} name= "Memories App"  gitHub="" hostingLink="https://tiktactoe-48014.web.app/" title="Tic Tac Toe application" tags={["Angular", "Nebular"]}/>
    <Project img = {toDoList} name= "ToDo App"  gitHub="" hostingLink="https://todo-list-de42b.web.app/" title="ToDo list application" tags={["Angular"]}/>
    <Project img = {angularPortfolio} name= "Angular Portfolio"  gitHub="" hostingLink="https://port1-4eb3b.web.app/home" title="Angular Portfolio" tags={["Angular", "Material UI"]}/>
         </div>
      </>
  )
}

export default Portfolio