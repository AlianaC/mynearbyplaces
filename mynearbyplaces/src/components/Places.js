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

    deletePlace = (name, city, state) => {
        server.deletePlace(name, city, state);
        this.setState({places: server.getAllPlaces()});
    }

    showPlaces = () => {
        let allPlaces = [];
        let places = this.state.places;
        for(let i = 0; i < places.length; i++){
            let place = places[i]
            let from = {pathname: "/reviews", state: {place1: place}};
            allPlaces.push(
                <div className="place" key={i}>
                    <p className="makeRed">{place.name}</p>
                    <p><b>Located:</b> {place.city + ", " + place.state}</p>
                    <p><b>Description:</b> {place.description}</p>
                    <Link to={from}>
                        <button 
                        className="pButton readButton"
                        >Read Reviews</button>
                    </Link>
                    <button 
                    className="pButton"
                    >Update</button>
                    <button 
                    className="pButton"
                    >Write a Review</button>
                    <button 
                    className="pButton"
                    onClick={() => this.deletePlace(place.name, place.city, place.state)}
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
        if(location){
            if(location.state){
                if(location.state.searchTerm){
                    this.setState({searchTerm:`for '${location.state.searchTerm}'`});
                }
            }
        }
        this.setState({places: server.getAllPlaces()});
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
                    <p>Showing all results {this.state.searchTerm}</p>
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