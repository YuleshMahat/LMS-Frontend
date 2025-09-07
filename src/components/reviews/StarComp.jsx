import React, { useState } from "react";
import { FaStar as FullStar } from "react-icons/fa";
import { FaStarHalfAlt as HalfStar } from "react-icons/fa";

const StarComp = ({ rating = 1, type = "non-clickable" }) => {
  // check if half star exists

  rating = parseFloat(rating);
  const halfStar = !Number.isInteger(rating);

  let maxStar = 5;

  //get number of fullstars needed
  let fullStar = Math.floor(rating);

  //calculate number of empty stars needed
  let emptyStar = maxStar - fullStar - (halfStar ? 1 : 0);

  let starArray = [];

  //4.5 = [ful ful ful ful half]
  //push full
  for (let i = 0; i < fullStar; i++) {
    starArray.push(<FullStar className="text-warning" />);
  }

  if (halfStar) {
    starArray.push(<HalfStar className="text-warning" />);
  }

  for (let i = 0; i < emptyStar; i++) {
    starArray.push(<FullStar />);
  }
  return starArray;
};

export default StarComp;
