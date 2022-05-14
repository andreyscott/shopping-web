import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteCart } from "../redux/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Cart() {
  const state = useSelector((state) => state.handleCart);
  const userState = useSelector((userState) => userState.handleUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const removeFromCart = (item) => {
    dispatch(deleteCart(item));
  };

  const proceedCheckout = () => {
    if (userState !== null) {
      navigate("/checkout");
    } else {
      toast("Please login first!");
    }
  };

  const cartItems = (product) => {
    return (
      <div key={product.id} className="px-4 my-5  rounded-md ">
        <div className="container relative tpy-4">
          <button
            onClick={() => removeFromCart(product)}
            className=" absolute right-1 top-2 bg-black rounded-xl "
            aria-label="Close"
          >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 text-white w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
</svg>
          </button>
          <div className="flex flex-col  lg:flex-row content-between justify-center  items-center md:justify-evenly ">
            <div className="m-2 ">
              <img
                src={product.image}
                alt={product.title}
                height="220px"
                width="200px"
              />
            </div>
            <div className="text-2xl  py-1 leading-8">
              <h3 className='text-3xl font-medium'>{product.title}</h3>
              <p className="font-extrabold py-1">${product.price}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  const checkoutButton = () => {
    return (
      <div className="container">
        <div className="row">
          <button
            onClick={proceedCheckout}
            className="btn trans hover:text-white mb-5 w-25 mx-auto"
          >
            Proceed To Checkout
          </button>
          <ToastContainer />
        </div>
      </div>
    );
  };

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && checkoutButton()}
    </>
  );
}

export default Cart;
