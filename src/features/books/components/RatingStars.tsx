import React from "react";

interface CustomCSSProperties extends React.CSSProperties {
  "--rating"?: number;
}

const RatingStars: React.FC<{ rating: number }> = ({ rating }) => {
  const style: CustomCSSProperties = {
    "--rating": rating, // Dynamically set the rating
  };
  return (
    <div className="stars" style={style}>
      ★★★★★
    </div>
  );
};

export default RatingStars;
