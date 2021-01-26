import React from 'react';

const Display = ({balls, strikes}) => {
  return(
    <div>
      <div>Balls: {balls}</div>
      <div>Strikes: {strikes}</div>
    </div>
  );
};

export default Display;
