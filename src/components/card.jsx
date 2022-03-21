import React, { useState } from "react";
import defaultMovieUrl from "../assets/images/default-movie.png";
import { ClipLoader } from "react-spinners";
const Card = (props) => {
  const { data, keyVal } = props;

  return (
    <div
      className="rounded overflow-hidden shadow-lg bg-gray-200 hover:bg-gray-100"
      key={`${data.imdbid}_${data.title}_${keyVal}`}
    >
      <img
        className={`w-full h-60 p-3 object-contain `}
        src={
          data.imageurl && data.imageurl.length > 0
            ? data.imageurl[0]
            : defaultMovieUrl
        }
        alt="Mountain"
      />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">{data.title}</div>
        <p className="text-gray-700 text-base">{data.synopsis}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {data.genre.map((item, index) => (
          <span
            key={`${data.title}_${index}_${keyVal}`}
            className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex justify-between px-4 py-2">
        <span className="font-sm">
          <strong>{data.released}</strong>
        </span>
        <span className="font-sm">
          <strong>{data.type}</strong>
        </span>
        {data.imdbrating && (
          <span className="font-sm">
            <strong>{data.imdbrating}</strong>
          </span>
        )}
      </div>
    </div>
  );
};

export default Card;
