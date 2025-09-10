
import { useContext } from 'react';
import Navbar from '../Home/Navbar'
import { CartProvider, useCart } from "react-use-cart";
import { apiValue} from '../Data/AllData'
import { Link } from 'react-router';

function Page() {
  const { addItem } = useCart();

    const products = useContext(apiValue);

  return (

    <div>
        <div className='container'>
            <div className='row'>
      {products.map((result) => (
        <div className='col-md-4 text-center mb-5' key={result.id}>
          <img src={ result.images[0] } className='w-100'></img>     
            <h5>{result.title}</h5>
            <h5>{result.price}$</h5> 
            <h6>{result.id}</h6>
          <button className='btn btn-success' onClick={() => addItem(result)}>Add to cart</button>
        </div>
      ))}
            </div>
        </div>

    </div>
  );
}

function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    totalItems,
    cartTotal,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();

  if (isEmpty) {

    return (
         <h4 className='text-center'>Your cart is empty</h4>
    )
  }
  return (
    <>
      <h1 className='text-center'>Cart ({totalUniqueItems})
            <button onClick={()=>emptyCart()} className='btn btn-danger'>Empty All Data</button>


      </h1>

        <div className='container'>
            <div className='row'>
            <div className='col-md-10 m-auto'>

        <table className='table table-dark text-center'>
           <thead>
            <tr>
                <th>Image</th>
                <th>ID</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Opreation</th>

            </tr>
            </thead> 

            <tbody>
            {items.map((response) => {
                return(
                    <tr>
                        <td>
                            <img src={response.images[0]} style={{width:"70px"}}></img>   
                      </td>   

                        <td>{response.id}</td>
                        <td>{response.title}</td>
                        <td>{response.quantity}</td>
                        <td>{ Math.ceil(response.price * response.quantity)}$</td>
                        <td>
                            <button  onClick={() => updateItemQuantity(response.id, response.quantity - 1)} className='btn btn-warning'>-</button>
                            <button  onClick={() => updateItemQuantity(response.id, response.quantity + 1)} className='btn btn-success mx-3'>+</button>
                            <button  onClick={() => removeItem(response.id)} className='btn btn-danger'>&times;</button>
                        </td>


                    </tr>
                )
            })}
            </tbody>


            <tfoot>
               <tr>
                   <td>Total</td>
                   <td>-----</td>
                   <td>-----</td> 
                   <td>{totalItems}</td>
                   <td>{Math.ceil(cartTotal)}</td>
                   <td>
                       <Link to="/Shop" className='btn btn-primary'>Continue Shop</Link>
                   </td>
               </tr>

            </tfoot>


        </table>




                </div>
             </div>
            </div>
      
    </>
  );
}

function AllShop() {
  return (
    <CartProvider>
        <Navbar/>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <Page/>
         <Cart/>
       </CartProvider>
  );
}
export default AllShop;