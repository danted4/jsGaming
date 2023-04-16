import React from 'react';
import { NavLink } from 'react-router-dom';
const Home = () =>{
  return(
    <div className='text' style={{marginTop:'80px'}}>
      <h4>Welcome to JavaScript Gaming !</h4>
    <p>Please choose one of the games mentioned below.</p>
    <div className="row no-gutters" >
    <div className = 'col-xl-12'><NavLink exact="true" className={({isActive}) => isActive ? 'active': ''} to="/brick"><span className='gSelect'>Brick Game</span></NavLink></div></div>
    <div className="row no-gutters">
    <div className = 'col-xl-12'><NavLink exact="true" className={({isActive}) => isActive ? 'col-xs-6 active': 'col-xs-6'} to="/snake"><span className='gSelect'>Snake Game</span></NavLink></div>
    </div>
    <div className="row no-gutters">
    <div className = 'col-xl-12'><NavLink exact="true" className={({isActive}) => isActive ? 'col-xs-6 active': 'col-xs-6'} to="/t90"><span className='gSelect'>T90 Game</span></NavLink></div>
    </div>
    </div>
  )
}
export default Home;
