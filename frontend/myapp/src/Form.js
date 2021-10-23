import React from 'react'

function Form() {
    return (
        <>
        <ul>
             <h1>New Post</h1>
             <form>
                 <label for="name">Name: </label>
                 <input type="text" id="name" name="name"></input><br></br>
                 <label for="phonenum">Phone Number: </label>
                 <input type="text" id="phonenum" name="phonenum"></input><br></br>
                 <label for="price">Price: </label>
                 <input type="number" id="price" name="price"></input>
             </form>  
        </ul>     
        </>
    )
}

export default Form