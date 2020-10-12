import React, { useEffect, useState } from "react";
import "../styles/Portfolio.css";

import axios from "axios";

const Portfolio = () => {
  const [image, setImage] = useState([]);

  const fetchImages = async () => {
    const response = await axios.get(
      "http://localhost:8080/portfolio/fetch.php"
    );

    setImage(response.data);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="Portfolio">
      <div className="Portfolio__home">
        <h1>Our Posts</h1>
      </div>
      <div className="Portfolio__imageContainer">
        {image.map((i) => (
          <img
            className="Portfolio__image"
            key={i.P_id}
            src={i.P_image}
            alt="pict"
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
