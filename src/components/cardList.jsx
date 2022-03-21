import React from "react";
import { Card } from "./index";
import { ClipLoader } from "react-spinners";

const CardList = (props) => {
  const { loader, data, dataAvailabe } = props;
  console.log(dataAvailabe);
  return (
    <>
      {loader ? (
        <div className="text-center py-8">
          <ClipLoader color="#8b5cf6" />
        </div>
      ) : (
        <>
          {dataAvailabe ? (
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
              {data.results.map((item, index) => (
                <Card keyVal={index} data={item} />
              ))}
            </div>
          ) : (
            <div className="text-center mt-8">
              <span className="text-2xl text-red-400">No Movie Found</span>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default CardList;
