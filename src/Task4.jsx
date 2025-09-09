import React from 'react'

function Task4({allData}) {
  return (
    <div>

   {allData.map( (item) =>{


    if(item.id>=3){
   return(

        <div>

       <h2> my name is {item.firstName} {item.lastName} </h2> 
        <h5> my color is {item.color} </h5>
        <h6> my id is {item.id} </h6>
        <hr></hr>
        </div>

    )
    }else if (item.id===1){
      return(
        <div>

           <h2> Not In range</h2> 

        </div>

      )
    }else{
      return(
      <div>
        <h1> yyy</h1>
      </div>
      )


    }
 

   })}     

    </div>
  )
}

export default Task4