import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Team from '../team/Team';

const About = () => {
    const [people , setPeople]= useState([]);
    useEffect(()=>{
        fetch('./team.json')
        .then(res=>res.json())
        .then(data=> setPeople(data))
    },[])
    return (
        <div className="p-4">
            <div>
            <h3 style={{color:'#F14D5D'}}>About Us</h3>
           <h5> Our Mission is to Provide a World‑class Education.</h5>
            </div>
            <div>
                <h3 className="mt-4" >Our PhiloSophy</h3>
                <div className="d-flex flex-wrap">
                <div className=" w-50 mt-4 p-3">
                    <h4>Proven learning approaches</h4>
                    <p>Teaching is one of the most challenging and complex jobs on the planet. Our digital resources, tools, and learning materials are developed by educational experts to incorporate leading pedagogical practices. They are useful in any type of teaching moment and many can be used to support national education standards.</p>
                    
                </div>
                <div className=" w-50 mt-4 p-3">
                    <h4>Empowered educators</h4>
                    <p>From school teachers and tutors to home schoolers and parents, engaged adults are the key to unlocking each child's potential and drive to learn. We empower all kinds of educators to teach kids by providing the best educational resources in any form or device to be used at home, at school, and everywhere in-between.</p>
                    
                </div>
                <div className=" w-50 mt-4 p-3">
                    <h4>Unique experiences</h4>
                    <p>There is no such thing as "one size fits all" in education; each educator and child has unique challenges and goals. We celebrate the diversity of our users by offering differentiated resources that can meet a wide range of educational needs - and raise kids' confidence in learning.</p>
                    
                </div>
                <div className=" w-50 mt-4 p-3">
                    <h4>Conscientious and supportive</h4>
                    <p>We continue to provide academically sound content of the highest caliber and welcome input from our users as we address issues of equity, diversity, inclusivity and representation. Since we know there are many different approaches to teaching and education, we develop our materials to complement these different philosophies across subjects and grades.</p>
                    
                </div>
                </div>
            </div>
            <div className="mt-4">
                <h5 style={{color:'#F14D5D'}}>Meet Our Team</h5>
                <h3>
                Who Makes the Magic Happen? <br /> Know About Them.
                </h3>
                <div className="d-flex flex-wrap justify-content-center">
                {
                    people.map(person=><Team person={person} key={person.id}></Team>)
                }
                </div>
            </div>
            
        </div>
    );
};

export default About;