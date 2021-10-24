import React, { useState, useEffect } from 'react';
import List from './List';

function ListPanel(props) {

    const [listings, setListings] = useState(null);

    useEffect(() => {
        // Update the document title using the browser API
        fetch('http://localhost:8000/TexExchange/get-all-listings/')
            .then(results => {
                return results.json()
            })
            .then(data => {
                console.log("called the api")
                setListings(data)
                console.log('finished setting the listings')
                console.log('printing the listings now')
                console.log(listings)
            });
        }, []);


    const loadListings = e => {
        console.log("loadListings called")
        fetch('http://localhost:8000/TexExchange/get-all-listings/')
            .then(results => {
                return results.json()
            })
            .then(data => {
                // console.log(data)
                setListings(data)
                console.log('finished setting the listings')
            });
    };

    console.log("listings are")
    console.log(listings)
    let reloaded = false
    if (props.reload && !reloaded) {
        loadListings()
        // reloaded = true
        props.setReload(false)
    }
    return (
        <div>
            {listings && listings.map(list => (
                <List
                    bookDetails = {list}
                    reload = {loadListings}
                />
            ))}
        </div>
    )
}

export default ListPanel