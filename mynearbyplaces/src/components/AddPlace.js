import React from 'react';
import './AddPlace.css';
import { Link, Redirect } from 'react-router-dom';
import server from "./ServerInterface/server.js";

class AddPlace extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            city: "",
            state: "",
            description: "",
            complete: false
        }
    }

    onInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]: value});
    }

    submitPlace = (event) => {
        const {name, city, state, description} = this.state;
        server.addPlace(name, city, state, description);
        event.preventDefault();
        this.setState({complete: true});
    }

    render() {
        if(this.state.complete){
            return (<Redirect to={'/mynearbyplaces'} />);
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
                <div className="form">
                    <form onSubmit={this.submitPlace}>
                        <label>Name: </label>
                        <input
                            className="input"
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.onInputChange}
                        ></input><br />
                        <label>City: </label>
                        <input
                            className="input"
                            type="text"
                            name="city"
                            value={this.state.city}
                            onChange={this.onInputChange}
                        ></input>
                        <label>State: </label>
                        <input
                            className="input"
                            type="textarea"
                            name="state"
                            value={this.state.state}
                            onChange={this.onInputChange}
                            maxLength="2"
                            size="2"
                        ></input><br />
                        <label>Description: </label><br />
                        <textarea
                            className="desc"
                            type="text"
                            name="description"
                            value={this.state.description}
                            onChange={this.onInputChange}
                        ></textarea><br />
                        <input
                            type="submit"
                            className="sButton pButton"
                        ></input>
                    </form>
                </div>

            </div>
        )
    }

}

export default AddPlace;