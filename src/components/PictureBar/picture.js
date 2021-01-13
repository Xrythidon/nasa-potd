import React from "react";

export const Picture = ({ apod, className }) => {
  return <img className={className} src={apod.url} alt="NASA Space"></img>;
};
