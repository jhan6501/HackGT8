import React from 'react'

function Form(props) {
    const handleSubmit = (evt) => {
        evt.preventDefault()
        console.log("handeling the submit")
        console.log(evt.target[0].value) // name
        console.log(evt.target[1].value) // number
        console.log(evt.target[2].value) // price

        let uuid = evt.target[0].value
        let title = evt.target[1].value
        let course = evt.target[2].value
        let price = evt.target[3].value
        let phonenum = evt.target[4].value
        let name = evt.target[5].value
        let pw = evt.target[6].value

    }

    return (
        <>
        <ul>
             <h1>New Post</h1>
             <form onSubmit={handleSubmit}>
                 <label for="uuid">uuid: </label>
                 <input type="text" id="uuid" name="uuid"></input><br></br>

                 <label for="title">Title: </label>
                 <input type="text" id="title" name="title"></input><br></br>

                 <label for="course">Course: </label>
                 <input type="text" id="course" name="course"></input><br></br>

                 <label for="price">Price: </label>
                 <input type="number" id="price" name="price"></input><br></br>

                 <label for="phonenum">Phone Number: </label>
                 <input type="text" id="phonenum" name="phonenum"></input><br></br>

                 <label for="name">Name: </label>
                 <input type="text" id="name" name="name"></input><br></br>

                 <label for="pw">Entry Password: </label>
                 <input type="text" id="pw" name="pw"></input><br></br>

                 <input type="submit" value="Submit" />
             </form>  
        </ul>     
        </>
    )
}

export default Form