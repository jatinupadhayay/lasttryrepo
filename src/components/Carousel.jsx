import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Carousel = () => {
  const [carouselImages, setCarouselImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/carousel')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setCarouselImages(data);
        } else {
          throw new Error("Received data is not an array");
        }
      })
      .catch((error) => {
        console.error('Error fetching carousel images:', error);
        setError(error.message);
      });
  }, []);

  const redirectToLink = (url) => {
    window.location.href = url; // Redirect to the specified URL
  };

  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {error ? (
          <div className="carousel-item active">
            <p>{error}</p>
          </div>
        ) : carouselImages.length === 0 ? (
          <div className="carousel-item active">
            <p>Loading images...</p>
          </div>
        ) : (
          carouselImages.map((item, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <a href="https://www.flipkart.com/travel/flights?param=TravelDT-HPW-FLYFK-5X-refund-booknow-dontmiss" onClick={(e) => {
                e.preventDefault(); // Prevent default anchor behavior
                redirectToLink("https://www.flipkart.com/travel/flights?param=TravelDT-HPW-FLYFK-5X-refund-booknow-dontmiss");
              }}>
                <img src={item.imageUrl} className="d-block w-100" alt={`Carousel item ${index + 1}`} />
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Carousel;
