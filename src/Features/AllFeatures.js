import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Home/Navbar'
import { apiValue } from '../Data/AllData';

function AllFeatures() {
 //const [text,setText] = useState(0);
  //const [full,setFull] = useState([]);

  const full = useContext(apiValue);
  const [search,setSearch] = useState(0);

 // useEffect(()=>{
 // axios.get('/js/Api.json')
 // .then( (element)=>{
 //   setFull(element.data.products);
 // })
 // } ,[]);

 const getSearch = (event)=>{
  setSearch(event.target.value);  
}

  return (
    <div>
      <Navbar/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 m-auto mb-5'>
            <input className='form-control mb-4' placeholder='search ' onChange={getSearch}></input>
          </div>

          {full.map( (result)=>{

            return search === 0 ? (
              <div key={result.id} className='col-md-4 text-center mb-5'>
                <img src={result.images[0]} alt="" className='img-fluid' style={{height:"350px"}}></img>
                <h4>{result.title}</h4>
                <h4>{result.id}</h4>
                <h6>{result.category}</h6>
                <h6>{result.price}$</h6>
              </div>
            ) : result.id === search ? (
              <div key={result.id} className='col-md-4 text-center mb-5'>
                <img src={result.images[0]} alt="" className='img-fluid' style={{height:"350px"}}></img>
                <h4>{result.title}</h4>
                <h4>{result.id}</h4>
                <h6>{result.category}</h6>
                <h6>{result.price}$</h6>
              </div>
            ) : result.title.toLowerCase().includes(search.toLowerCase()) ? (
              <div key={result.id} className='col-md-4 text-center mb-5'>
                <img src={result.images[0]} alt="" className='img-fluid' style={{height:"350px"}}></img>
                <h4>{result.title}</h4>
                <h4>{result.id}</h4>
                <h6>{result.category}</h6>
                <h6>{result.price}$</h6>
              </div>
            ) : (null)

          } )} 

        </div>
      </div>

      {/* <h4>{text}</h4>
      <button onClick={()=>{setText(text+1)}}> + </button>
      <button onClick={()=>{setText(text-1)}}>-</button>

      <h2>{full}</h2>
      <button onClick={()=>{setFull(full+1)}} >+</button> */}
    </div>
  )
}

export default AllFeatures
