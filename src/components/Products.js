import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { NavLink } from "react-router-dom";
import 'react-loading-skeleton/dist/skeleton.css'
//import SkeletonCard from "./skeleton";

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMouted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMouted === true) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        componentMouted = false;
      };
    };

    getProducts();
  }, []);

  const anima = () => {
    return (
      <>
       <div className=" border border-gray-400 shadow rounded-md p-4 max-w-sm w-56 h-72  mx-auto">
  <div className="animate-pulse flex space-x-4">
    <div className="rounded-full bg-slate-200 h-10 w-10"></div>
    <div className="flex-1 space-y-6 py-1">
      <div className="h-2 bg-slate-200 rounded"></div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="h-2 bg-slate-200 rounded col-span-2"></div>
          <div className="h-2 bg-slate-200 rounded col-span-1"></div>
        </div>
        <div className="h-2 bg-slate-200 rounded"></div>
      </div>
    </div>
  </div>
</div>
      </>
    );
  };

  const Loading = () => {
    return (
      <div className="flex flex-col mt-2 md:grid grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5 place-items-center ">
      
        <div className="">
          <Skeleton width={220} height={350} />
        </div>
        <div className="">
          <Skeleton width={230} height={350} />
        </div>
        <div className="">
          <Skeleton width={250} height={350} />
        </div>
        <div className="">
          <Skeleton width={250} height={350} />
        </div>
        
       
  {/* loopthrough anima 4 times in a row  */}
  {/* <div className="flex flex-col  mt-4 md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 place-items-center ">
  {[...Array(4)].map((e, i) => (
    <div className="flex mt-4 md:grid grid-cols-3 xl:grid-cols-4 gap-3 place-items-center ">
      {anima()}
    </div>
  ))}
</div> */}
{/* <SkeletonCard /> */}


      </div>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="flex justify-center  items-center ">
          <button
            className="btn transbtn text-lg   font-medium md:text-4xl me-2 selected"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn  transbtn text-xs font-medium md:text-2xl"
            onClick={() => filterProduct("men's clothing")}
          >
            Mens' Clothing
          </button>
          <button
             className="btn  transbtn text-xs  font-medium md:text-2xl"

            onClick={() => filterProduct("women's clothing")}
          >
            Womens' Clothing
          </button>
          <button
            className="btn  transbtn text-xs font-medium md:text-2xl"

            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
                     className="btn  transbtn text-xs  font-medium md:text-2xl"
            onClick={() => filterProduct("electronics")}
          >
            Electronic
          </button>
        </div>
        <div className="flex flex-col mt-4 md:grid grid-cols-3  lg:grid-cols-4 gap-3 place-items-center justify-center">
        {filter.map((product) => {
          return (
            <>
              <div key={product.id} className="col-md-3 mb-4">
                <div className="card h-100 max-h-full min-h-full shadow-lg rounded-lg text-center p-4 mx-auto" key={product.id}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="card-img-top w-72 h-72 mx-auto md:w-80 md:h-80"
                  />
                  <div className="card-body ">
                    <h5 className="card-title font-medium text-lg leading-loose flex flex-col">
                      {product.title.substring(0, 12)}
                      <p className="mb-1 text-xl font-extrabold">...</p>
                    </h5>
                    <p className="font-medium text-lg leading-loose">${product.price}</p>
                    <NavLink
                      to={`/products/${product.id}`}
                      className="btn transbtn"
                    >
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
        </div>
      </>
    );
  };

  return (
    <div className="container my-5 py-5 ">
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="text-3xl md:text-4xl border-b-2 pb-3  border-sblue font-bold text-center text-sblue">
            Latest Products
          </h1>
          <hr />
        </div>
      </div>
      <div className="flex flex-col  justify-center items-center  justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
        {/* <Loading /> */}
      </div>
    </div>
  );
}

export default Products;
