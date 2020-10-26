import React, { useEffect, useState } from "react";
import "../styles/Portfolio.css";

import axios from "axios";

const Portfolio = () => {
  const [image, setImage] = useState([]);

  const fetchImages = async () => {
    const response = await axios.get(
      "https://techtrickz.in/Apis/portfolio/fetch.php"
    );

    setImage(response.data);
  };

  let imgAdd =
    image.length &&
    image.filter((img) => {
      if (img.P_image !== "") {
        return img;
      }
    });

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="Portfolio">
      <div className="Portfolio__home">
        <h1>Our Posts</h1>
      </div>
      <div className="Portfolio__imageContainer">
        {imgAdd &&
          imgAdd.map((i) => (
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
