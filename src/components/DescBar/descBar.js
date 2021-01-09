import React from "react";
import { useSelector } from "react-redux";

import { Desc } from "./desc";

export const DescBar = () => {
  const apod = useSelector((state) => state.apod.apod);

  return (
    <div>
      <Desc apod={apod} />
    </div>
  );
};
