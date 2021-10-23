import React, { useState, useEffect } from 'react';

function ListPanel() {
    useEffect(() => {
        // Update the document title using the browser API
        console.log('another test ')
        fetch('http://localhost:8000/TexExchange/get-all-listings/')
            .then(results => results.json())
            .then(data => {
                console.log(data)
        });
    });
    return (
        <div>
            This is where our listings of objects to sell will be
        </div>
    )
}

export default ListPanel