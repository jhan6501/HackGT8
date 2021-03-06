import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import DeleteForm from './DeleteForm';

function List(props) {
    console.log('props in the list are')
    console.log(props)
    console.log('uuid: '+ props.bookDetails.uuid)

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }

    return (
        <div>
            <div id="onebox">
                <div className="details" id="listid"> <i>List ID: {props.bookDetails.uuid}</i> </div>
                <div className="details" id="title"> {props.bookDetails.title} </div>
                <div className="details" id="course"> <b>Course:</b> {props.bookDetails.course} </div>
                <div className="details" id="price"> <b>Price:</b> ${props.bookDetails.price} </div>
                <div className="details" id="name"> <b>Name:</b> {props.bookDetails.nameVendor} </div>
                <div className="details" id="num"> <b>Phone Number:</b> {props.bookDetails.phone_number} </div>
                <button id="delete" onClick={setModalIsOpenToTrue}>x </button>
                <Modal isOpen = {modalIsOpen} className="deletemodal">
                    <button onClick={setModalIsOpenToFalse}>x</button>
                    {/* <Form onClick={setModalIsOpenToFalse}/> */}
                    <DeleteForm
                        uuid = {props.bookDetails.uuid}
                        reload = {props.reload}
                        closeModal = {setModalIsOpenToFalse}
                    />
                </Modal>
            </div>
        </div>
    )
}

export default List