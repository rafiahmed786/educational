import React from 'react';

const Team = (props) => {
    const {img,name,title}=props.person;
    return (
        <div className="m-3">
                <div className="card" style={{width: "20rem"}}>
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body pt-4">
            <h5 className="card-text" >{name}</h5>
            <p>{title}</p>
            </div>
        </div>
        
        </div>
    );
};

export default Team;