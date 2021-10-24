import React from 'react'

function DeleteForm(props) {
    const handleSubmit = (evt) => {
        evt.preventDefault()

        let password = evt.target[0].value
        const requestOptions = {
            method: "POST",
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
            }),
            body: JSON.stringify({ 
                uuid: props.uuid,
                entryPassword: password
            })
        };
        console.log('performing fetch')
        fetch('http://localhost:8000/TexExchange/delete-listing/', requestOptions)
            .then(results => {
                return results.json()
            })
            .then(data => {
                console.log('repsonse is:' + data);
                props.reload()
                props.closeModal()
            });
        console.log('finished')
    }

    return (
        <>
        <ul>
            <h1>Delete Post</h1>
            <form onSubmit={handleSubmit}>

                <label className = "password" for="password">Password: </label>
                <input type="text" id="password" name="password" className="textbox"></input><br></br>
                <input type="submit" value="Submit" />
            </form>  
        </ul>     
        </>
    )
}

export default DeleteForm