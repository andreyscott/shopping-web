import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <div className="flex flex-col-reverse md:flex-row w-full m-2  justify-around content-around  ">
     
      <div className=" m ">

          <Skeleton width={410} height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
        
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </div>
    );
  };

  const ShowProduct = () => {
    return (
      <div className="m-2 flex flex-col md:flex-row w-full h-full justify-between content-between ">
      
        <div className="pb-2">
          <img
            src={product.image}
            alt={product.title}
            // height="400px"
            // width="400px"
            className="w-80 h-full"
          />
        </div>
        <div className="m-2 pl-2">
          <h4 className="uppercase text-2xl font-bold leading-3 mt-2 pb-3  text-gray-400"> {product.category}</h4>
          <h1 className=" text-4xl  py-1 leading-8">{product.title}</h1>
          <p className="flex pt-2 text-lg font-extrabold">
            Rating {product.rating && product.rating.rate}
         
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 text-yellow-400 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
</svg>
          </p>
          <h3 className=" font-extrabold leading-normal text-5xl my-3"> ${product.price}</h3>
          <p className=" font-serif text-base  leading-relaxed w-full max-w-xl ">{product.description}</p>
          <button
            className="btn transbtn bg-[#2c526a] text-white hover:bg-white hover:text-[#2c526a]  py-2 px-4"
            onClick={() => addProduct(product)}
          >
            {" "}
            Add to Cart
          </button>
          <NavLink to="/cart" className="btn transbtn px-3 py-2 ">
            Go to Cart
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container py-5 ">
        <div className="row py-5">
          {loading ? <Loading /> : <ShowProduct />}
          
           {/* <Loading /> */}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
