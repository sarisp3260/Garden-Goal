import React from "react";
import { Link, useParams } from "react-router-dom";
import waterLily from "../../assets/waterLily.svg";
export function Plant({ data }) {
  const params = useParams();
  const id = params.id;
  return (
    <div className="flex flex-col h-52 lg:h-64 relative m-10">
      <Link to={`/plants/${data.name}`}>
        <div className="flex justify-center h-44 lg:h-56">
          <img
            className=" z-10 max-h-full h-auto"
            src={data.image}
            alt={data.name}
          />
        </div>
        <div className="flex absolute bottom-0 z-0">
          <img src={waterLily} alt="waterLily" />
        </div>
      </Link>
    </div>
  );
}
