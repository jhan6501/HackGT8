import React, { useState, useEffect } from 'react';
import List from './List';

function ListPanel() {

    const [listings, setListings] = useState(null);

    useEffect(() => {
        // Update the document title using the browser API
        fetch('http://localhost:8000/TexExchange/get-all-listings/')
            .then(results => {
                return results.json()
            })
            .then(data => {
                // console.log(data)
                setListings(data)
                console.log('finished setting the listings')
            });
        }, []);
        console.log('printing the listings now')
        console.log(listings)
    return (
        <div>
            {listings && listings.map(list => (
                <List
                    bookDetails = {list}
                />
            ))}
            This is where our listings of objects to sell will be
        </div>
    )
}

export default ListPanel