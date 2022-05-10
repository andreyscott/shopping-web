import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";

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

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
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
            className="btn  transbtn text-xs font-medium md:text-3xl"
            onClick={() => filterProduct("men's clothing")}
          >
            Mens' Clothing
          </button>
          <button
             className="btn  transbtn text-xs  font-medium md:text-3xl"

            onClick={() => filterProduct("women's clothing")}
          >
            Womens' Clothing
          </button>
          <button
            className="btn  transbtn text-xs font-medium md:text-4xl"

            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
                     className="btn  transbtn text-xs  font-medium md:text-4xl"
            onClick={() => filterProduct("electronics")}
          >
            Electronic
          </button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div key={product.id} className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={product.id}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="card-img-top pb-3 h-96"
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
      </>
    );
  };

  return (
    <div className="container my-5 py-5 ">
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="text-3xl md:text-4xl border-b-2 pb-3  border-green-400  font-bold text-center text-green-500">
            Latest Products
          </h1>
          <hr />
        </div>
      </div>
      <div className="flex flex-col md:grid grid-cols-3 gap-3 place-items-center justify-center items-center bg-slate-400  justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
}

export default Products;
