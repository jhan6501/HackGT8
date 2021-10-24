import React from 'react'

function Form(props) {
    const handleSubmit = (evt) => {
        evt.preventDefault()
        console.log("handeling the submit")
        console.log(evt.target[0].value) // name
        console.log(evt.target[1].value) // number
        console.log(evt.target[2].value) // price

        // let uuid = evt.target[0].value
        let title = evt.target[0].value
        let course = evt.target[1].value
        let price = evt.target[2].value
        let phonenum = evt.target[3].value
        let name = evt.target[4].value
        let pw = evt.target[5].value
        console.log('clicked submit')
        const requestOptions = {
            method: "POST",
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
            }),
            body: JSON.stringify({ 
                title: title,
                course: course,
                price: price,
                phone_number: phonenum,
                nameVendor: name,
                entryPassword: pw
            })
        };
        console.log('performing fetch')
        fetch('http://localhost:8000/TexExchange/post-listing/', requestOptions)
            .then(results => {
                return results.json()
            })
            .then(data => {
                console.log('repsonse is:');
                props.reload(true)
                props.closeModal()
            });
        console.log('finished')
    }

    return (
        <>
        <ul>
             <h1>New Post</h1>
             <form onSubmit={handleSubmit}>
                 <label className = "labels" for="title">Title: </label>
                 <input type="text" id="titlein" name="title" className="textbox"></input><br></br>

                 <label className = "labels" for="course">Course: </label>
                 <input type="text" id="coursein" name="course" className="textbox"></input><br></br>

                 <label className = "labels" for="price">Price: </label>
                 <input type="number" id="pricein" name="price" className="textbox"></input><br></br>

                 <label className = "labels" for="phonenum">Phone Number: </label>
                 <input type="text" id="numin" name="phonenum" className="textbox"></input><br></br>

                 <label className = "labels" for="name">Name: </label>
                 <input type="text" id="namein" name="name" className="textbox"></input><br></br>

                 <label className = "labels" for="pw">Entry Password: </label>
                 <input type="text" id="pwin" name="pw" className="textbox"></input><br></br>

                 <input type="submit" value="Submit" />
             </form>  
        </ul>     
        </>
    )
}

export default Form