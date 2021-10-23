function List(props) {
    console.log('props in the list are')
    console.log(props)
    return (
        <div>
            Course is: {props.course}  Title is: {props.title}
        </div>
    )
}

export default List