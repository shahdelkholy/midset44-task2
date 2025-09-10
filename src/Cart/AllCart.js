import React from "react";
import Navbar from "../Home/Navbar";
import { Link } from "react-router";
import { CartProvider, useCart } from "react-use-cart";

function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    totalItems,
    cartTotal,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) {
    return <h4 className="text-center">Your cart is empty</h4>;
  }
  return (
    <>
      <h1 className="text-center">
        Cart ({totalUniqueItems})
        <button onClick={() => emptyCart()} className="btn btn-danger">
          Empty All Data
        </button>
      </h1>

      <div className="container">
        <div className="row">
          <div className="col-md-10 m-auto">
            <table className="table table-dark text-center">
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
                  return (
                    <tr>
                      <td>
                        <img
                          src={response.images[0]}
                          style={{ width: "70px" }}
                        ></img>
                      </td>

                      <td>{response.id}</td>
                      <td>{response.title}</td>
                      <td>{response.quantity}</td>
                      <td>{Math.ceil(response.price * response.quantity)}$</td>
                      <td>
                        <button
                          onClick={() =>
                            updateItemQuantity(
                              response.id,
                              response.quantity - 1
                            )
                          }
                          className="btn btn-warning"
                        >
                          -
                        </button>
                        <button
                          onClick={() =>
                            updateItemQuantity(
                              response.id,
                              response.quantity + 1
                            )
                          }
                          className="btn btn-success mx-3"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeItem(response.id)}
                          className="btn btn-danger"
                        >
                          &times;
                        </button>
                      </td>
                    </tr>
                  );
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
                    <Link to="/Shop" className="btn btn-primary">
                      Continue Shop
                    </Link>
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

function AllCart() {
  return (
    <CartProvider>
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Cart />
    </CartProvider>
  );
}

export default AllCart;
