import React from 'react'

function Task3({allData}) {
  return (
    <div>

   {allData.map( (item) =>{

    return(

        <div>

       <h2> my name is {item.firstName} {item.lastName} </h2> 
        <h5> my color is {item.color} </h5>
        <h6> my id is {item.id} </h6>
        <hr></hr>
        </div>

    )

   })}     

    </div>
  )
}

export default Task3