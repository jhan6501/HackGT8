function List(props) {
    console.log('props in the list are')
    console.log(props)
    console.log('uuid: '+ props.bookDetails.uuid)
    return (
        <div id="onebox">
            <div className="details" id="listid"> <b>List ID:</b> {props.bookDetails.uuid} </div>
            <div className="details" id="title"> {props.bookDetails.title} </div>
            <div className="details" id="course"> <b>Course:</b> {props.bookDetails.course} </div>
            <div className="details" id="price"> <b>Price:</b> ${props.bookDetails.price} </div>
            <div className="details" id="name"> <b>Name:</b> {props.bookDetails.nameVendor} </div>
            <div className="details" id="num"> <b>Phone Number:</b> {props.bookDetails.phone_number} </div>
        </div>
    )
}

export default List