import React from 'react';
import './Places.css';
import { Link } from 'react-router-dom';
import server from './ServerInterface/server';



class Places extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            searchTerm: "",
            places: []
        }
    }

    deletePlace = (name, city, state, cat) => {
        server.deletePlace(name, city, state);
        this.setState({places: server.getAllPlaces(cat, city, state)});
    }

    showPlaces = () => {
        let allPlaces = [];
        let places = this.state.places;

        if (places.length === 0){
            return (
                <h3 className="noRevs">No Places Found Matching that Criteria</h3>
            );
        }
        for(let i = 0; i < places.length; i++){
            let place = places[i]
            let from = {pathname: "/reviews", state: {place1: place}};
            allPlaces.push(
                <div className="place" key={i}>
                    <p className="makeRed">{place.name}</p>
                    <p><b>Category:</b> {place.cat}</p>
                    <p><b>Located:</b> {place.city + ", " + place.state}</p>
                    <p><b>Description:</b> {place.description}</p>
                    <Link to={from}>
                        <button 
                        className="pButton readButton"
                        >Read Reviews</button>
                    </Link>
                    <Link to={{pathname: "/writereview", state: {place1: place}}}>
                        <button 
                        className="pButton"
                        >Write a Review</button>
                    </Link>
                    <button 
                    className="pButton"
                    onClick={() => this.deletePlace(place.name, place.city, place.state, place.cat)}
                    >Delete</button>
                </div>
            )
        }

        return (
            allPlaces
        );
    }

    componentDidMount() {
        const location = this.props.location;
        let term = "";
        let cat = "";
        let city = "";
        let state = "";


        if(location){
            if(location.state){
                if(location.state.searchTerm){
                    cat = location.state.searchTerm;
                    term = term + " " + cat
                }
                if(location.state.city){
                    city = location.state.city;
                    term = term + " " + city
                }
                if(location.state.state){
                    state = location.state.state;
                    term = term + " " + state
                }
            }
        }
        this.setState({searchTerm: term});
        this.setState({places: server.getAllPlaces(cat, city, state)});
    }

    render() {

        return (
            <div>
                <div className="header">
                    <h2>mynearbyplaces</h2>
                </div>
                <br></br>
                <div className="header2">
                    <Link to="/mynearbyplaces">
                        <button className="homeButton pButton">Home</button>
                    </Link>
                    <p>Showing all results:{this.state.searchTerm}</p>
                    <Link to="/addplace">
                        <button className="addPlaceButton pButton">Add a Place</button>
                    </Link>
                </div>
                <hr></hr>
                {this.showPlaces()}
            </div>
        );
    }
}

export default Places;