import React from 'react'
import Navbar from '../Home/Navbar'


function AllFeatures() {
    const getData =(event)=>{
   console.log(123)
   console.log(1234)
     console.log(event.target.value); //دي بتجيب القيمه اللي انا بكتبها في الانبوت
        event.preventDefault(); //دي بتوقف السابميت

    }

  return (
    <div>
<Navbar/>
<br></br>
<br></br>
<br></br>
<br></br>
<button onClick={getData} > Click</button>

<br></br>
<br></br>
<br></br>

<form onSubmit={getData}>
<input type="text" name="user" onChange={getData}></input>

<input type='submit' value="Enter"></input>

</form>



    </div>
  )
}

export default AllFeatures