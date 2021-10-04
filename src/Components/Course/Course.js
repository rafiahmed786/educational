import React from 'react';
import AllCourse from '../allCourse/AllCourse';
import useCards from '../hook/useCards';

const Course = () => {
    const [cards]=useCards();

    return (
        <div className="p-4">
            <h2>View All Course </h2>
            <div className="d-flex flex-wrap justify-content-center">
            {
                cards.map(card=> <AllCourse 
                    card={card}
                    key={card.id}
                ></AllCourse>)
            }
            </div>
        </div>
    );
};

export default Course;