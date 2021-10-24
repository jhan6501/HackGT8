import Form from "./Form";
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

function Navbar(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }

    return (
        <div>
            {/* <button id="createnew" onClick={setModalIsOpenToTrue}>Create New Post</button>
            <Modal isOpen = {modalIsOpen}>
                <button onClick={setModalIsOpenToFalse}>x</button>
                <Form 
                    onClick={setModalIsOpenToFalse}
                    reload = {props.reload}
                    closeModal={setModalIsOpenToFalse}
                />
            </Modal> */}
        </div>
    )
}

export default Navbar;