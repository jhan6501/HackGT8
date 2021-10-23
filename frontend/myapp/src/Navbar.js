import Form from "./Form";
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

function Navbar() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }

    return (
        <div>
            Top nav bar
            <button onClick={setModalIsOpenToTrue}>Create New Post</button>
            <Modal isOpen = {modalIsOpen}>
                <button onClick={setModalIsOpenToFalse}>x</button>
                <Form/>
            </Modal>
        </div>
    )
}

export default Navbar;