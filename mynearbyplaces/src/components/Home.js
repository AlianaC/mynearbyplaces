import React from 'react';
import './Home.css';
import { Redirect } from 'react-router-dom';

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            searchTerm:"",
            search: false
        };
    }

    search = (event) => {
        this.setState({search: true})
        event.preventDefault();
    }

    onInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]: value});
    }

    render() {
        if(this.state.search) {
            let from = {pathname: "/places", state: {searchTerm: this.state.searchTerm}};
            return (
                <Redirect to={from} />
            );
        }

        return (
            <div className="home">
                <h1 className="title">mynearbyplaces</h1>
                <form onSubmit={this.search}>
                    <input 
                    className="search" 
                    rows="1" cols="30"
                    type="text"
                    name="searchTerm"
                    value={this.state.searchTerm}
                    onChange={this.onInputChange} />
                    <input
                    type="submit" 
                    className="searchButton" 
                    value="Search">
                    </input>
                </form>
            </div>
        );
    }
}

export default Home;