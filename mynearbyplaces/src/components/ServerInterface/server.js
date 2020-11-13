import placesdata from "./PlacesData.js";

let getAllPlaces = () => {
    return placesdata;
}

let addPlace = (name, city, state, description) => {
    let place = {
        name: name,
        city: city,
        state: state,
        description: description,
        reviews: []
    };
    
    placesdata.push(place);
}

let deletePlace = (name, city, state) => {
    for(let i = 0; i < placesdata.length; i++){
        let curr = placesdata[i];
        if(curr.name === name && curr.city === city && curr.state === state){
            placesdata.splice(i, i + 1);
        }
    }
}

let server = {getAllPlaces: getAllPlaces, addPlace: addPlace, deletePlace: deletePlace};

export default server;
