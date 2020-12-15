let API = "https://alianac-nearbyplaces-api.herokuapp.com";


let search = (searchTerm, city, state) => {
    let url = new URL(API + `/search?searchTerm=${searchTerm}&city=${city}&state=${state}`);
    return fetch(url).then(x => x.json());
    
}

let addPlace = (name, city, state, cat, description) => {
    return fetch(API + "/place", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, body: JSON.stringify({
            name: name,
            city: city,
            state: state,
            cat: cat,
            description: description
        })
    }).then(x => console.log(x)).catch(e => console.log(e));
}

let getReviews = (placeid) => {
    return fetch(API + `/reviews/${placeid}`).then(x => x.json());
}

let addReview = (author, rate, rating, placeid) => {
    return fetch(API + "/review", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, body: JSON.stringify({
            author: author,
            rate: rate,
            rating: rating,
            placeid: placeid
        })
    }).then(x => console.log(x)).catch(e => console.log(e));
}

let deletePlace = (placeid) => {
    return fetch(API + `/delete/${placeid}`).then(x => console.log(x)).catch(e => console.log(e));
}

let server = {search: search, addPlace: addPlace, getReviews: getReviews, addReview: addReview, deletePlace: deletePlace};

export default server;