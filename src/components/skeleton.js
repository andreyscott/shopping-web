import React from "react";
import Skeleton from "react-loading-skeleton";
const SkeletonCard = () => {
    return (
      <section className="bg-gray-500 flex w-full h-full">
        <h2 className="bg-red-400">
          <Skeleton height={30} width={300} />
        </h2>

        <ul className="list">
          {Array(9)
            .fill()
            .map((item, index) => (
              <li className="" key={index}>
                <Skeleton height={180} />
                <h4 className="card-title">
                <Skeleton circle={true} height={50} width={50} />  
                  <Skeleton height={36} width={`80%`} />
                </h4>
                <p className="card-channel">
                  <Skeleton width={`60%`} />
                </p>
                <div className="card-metrics">
                  <Skeleton width={`90%`} />
                </div>
              </li>
            ))}
        </ul>
      </section>
    );
  };
  export default SkeletonCard;
