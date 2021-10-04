import React from 'react';
import Rating from 'react-rating';

const AllCourse = (props) => {
    const {img,title, price,rating,name}=props.card;

    return (
        <div className="m-3">
                <div className="card" style={{width: "20rem"}}>
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body pt-4">
            <p>{name}</p>
            <h5 className="card-text" style={{height:'85px'}}>{title}</h5>
            <div className="d-flex justify-content-between ">
            <p style={{color:'#000080',fontWeight:'bold',fontSize:"18px"}}>Price: {price}$</p>
            <p><Rating initialRating={rating}  emptySymbol="far fa-star"
                fullSymbol="fas fa-star" readonly/></p>
            </div>
            </div>
        </div>
        
        </div>
    );
};

export default AllCourse;