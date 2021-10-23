function List(props) {
    console.log('props in the list are')
    console.log(props)
    console.log('uuid: '+ props.bookDetails.uuid)
    return (
        <div>
            List ID: {props.bookDetails.uuid},
            Book Title: {props.bookDetails.title},
            Course: {props.bookDetails.course},
            Price: {props.bookDetails.price},
            Name: {props.bookDetails.nameVendor},
            Phone Number: {props.bookDetails.phone_number}
        </div>
    )
}

export default List