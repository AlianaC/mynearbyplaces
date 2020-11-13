import placesdata from "./PlacesData.js";

let getAllPlaces = (cat, city, state) => {
    cat = cat.toUpperCase();
    city = city.toUpperCase();
    state = state.toUpperCase();

    let data = [];
    if(cat.length === 0 && city.length === 0 && state.length === 0){
        return placesdata;
    }
    
    if(city.length >0) {
        data = placesdata.filter(x => x.city.toUpperCase() === city);
    }

    if(state.length > 0) {
        if(city.length > 0){
            data = data.filter(x => x.state.toUpperCase() === state);
        }else {
            data = placesdata.filter(x => x.state.toUpperCase() === state);
        }
    }

    if(cat.length > 0){
        if(city.length > 0 || state.length > 0){
            data = data.filter(x => x.cat.toUpperCase() === cat);
        }else {
            data = placesdata.filter(x => x.cat.toUpperCase() === cat);
        }
    }

    return data;
}

let addPlace = (name, city, state, category, description) => {
    let place = {
        name: name,
        city: city,
        state: state,
        cat: category,
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

let addReview = (place, author, rate, rating) => {
    let review = {
        author: author,
        rate: rate,
        rating: rating
    }

    for(let i = 0; i < placesdata.length; i++){
        let curr = placesdata[i];
        if(curr.name === place.name && curr.city === place.city && curr.state === place.state){
            curr.reviews.push(review);
        }
    }
}

let server = {getAllPlaces: getAllPlaces, addPlace: addPlace, deletePlace: deletePlace,
    addReview: addReview};

export default server;
