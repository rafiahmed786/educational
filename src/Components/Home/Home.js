import React from 'react';
import { NavLink } from 'react-router-dom';
import homeImg from "../../images/home.png"
import Card from '../Card/Card';
import useCards from '../hook/useCards';

const Home = () => {
    const [cards]=useCards()
    
    
    return (
    <>  <div className="d-flex" style={{padding:'20px 100px'}}>
            <div className="w-50 d-flex flex-column p-4 mt-4 text-start justify-content-center align-items-start" style={{paddingLeft:"100px"}}>
                <h4 style={{color:'#F14D5D'}} >The Leader in Online Learning</h4>
                <h2 className="fs-1" style={{color:'#333'}}>Learn The Skills You <br /> Need To Success</h2>
            </div>
            <div className='w-50'>
                <img width="100%" src={homeImg}alt="" />
            </div>
            
        </div>
        <div>
            <div>
                <p className="fs-4" style={{color:'#F14D5D'}}>Featured Courses</p>
                <h4 className="fs-2">Pick a Course to Get Started</h4>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
               {
                   cards.slice(0,5).map(card=> <Card card={card} key={card.id}></Card>)
               }
            </div>
            <NavLink to="/course"><button className="btn btn-primary px-4">View All</button></NavLink>
        </div>
    </>

       
    );
};

export default Home;