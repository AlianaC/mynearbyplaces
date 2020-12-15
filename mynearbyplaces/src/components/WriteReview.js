import React from 'react';
import './WriteReview.css';
import { Link, Redirect } from 'react-router-dom';
import server from "./ServerInterface/server.js";


class WriteReview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: "",
            rate: 1,
            rating: "",
            complete: false
        }
    }

    onInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]: value});
    }

    submitReview = (place) => {
        const {author, rate, rating} = this.state;
        server.addReview(author, rate, rating, place.id);
        this.setState({complete: true});
    }

    render() {
        const location = this.props.location;
        let place = {};
        if(location){
            if(location.state){
                if(location.state.place1){
                    let curr = location.state.place1;
                    place = curr;
                }
            }
        }

        if (this.state.complete) {
            return (<Redirect to={{pathname: "/reviews", state: {place1: place}}} />);
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
                </div>
                <hr />
                <p className="placeHeader">Write a Review for '{place.name}'</p>
                <form className="form" onSubmit={() => this.submitReview(place)}>
                    <label>Author: </label>
                        <input
                        className="input"
                        type="text"
                        name="author"
                        value={this.state.author}
                        onChange={this.onInputChange}
                    ></input>
                    <label>Stars: </label>
                    <select
                        className="input"
                        type="text"
                        name="rate"
                        value={this.state.rate}
                        onChange={this.onInputChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                    </select><br />
                    <label>Review: </label>
                    <textarea
                        className="desc"
                        type="text"
                        name="rating"
                        value={this.state.rating}
                        onChange={this.onInputChange}
                    ></textarea><br />
                    <input
                        type="submit"
                        className="sButton pButton"
                    ></input>
                </form>
            </div>
        )
    }
}

export default WriteReview;