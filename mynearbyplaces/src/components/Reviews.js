import React from 'react';
import { Link } from 'react-router-dom';
import './Reviews.css'

class Reviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            place: {}
        }
    };

    showReviews = (reviews) => {
        let allRevs = [];
        for(let i = 0; i < reviews.length; i++){
            allRevs.push(
                <div className="review" key={i}>
                    <h4><b className="labelRev">Author: </b>{reviews[i].author}</h4>
                    <p>{reviews[i].rate} out of 5</p>
                    <p><b className="labelRev">Rating: </b>{reviews[i].rating}</p>
                    
                </div>
            )
        }        

        return (
            allRevs
        );
    }

    render() {
        const location = this.props.location;
        let place = {};
        if(location){
            if(location.state){
                if(location.state.place1){
                    let curr = location.state.place1;
                    //alert(place.reviews[0].author)
                    //this.setState({place: place});
                    place = curr;
                }
            }
        }
        return (
            <div>
                <div className="header">
                    <h2>mynearbyplaces</h2>
                </div>
                <div className="header2">
                    <Link to="/mynearbyplaces">
                        <button className="homeButton2 pButton">Home</button>
                    </Link>
                    <Link to="/addplace">
                        <button className="addPlaceButton pButton">Write a Review</button>
                    </Link>
                </div>
                <hr />
                <p className="placeHeader">Reviews for {place.name}</p>
                {this.showReviews(place.reviews)}
            </div>
        );
    }
}

export default Reviews;