import React, { useState, useEffect } from 'react';
import List from './List';
import Form from "./Form";
import Modal from 'react-modal';

function ListPanel(props) {

    const [listings, setListings] = useState(null);

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }

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
    return (
        <div>
            <h1 id="titlename">TecBook</h1>
            <p id="subtitle">... for broke college students.</p>

            <button id="createnew" onClick={setModalIsOpenToTrue}>Create New Post</button>
            <Modal isOpen = {modalIsOpen} className="modal">
                <button onClick={setModalIsOpenToFalse}>x</button>
                <Form 
                    onClick={setModalIsOpenToFalse}
                    reload = {loadListings}
                    closeModal={setModalIsOpenToFalse}
                />
            </Modal>
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