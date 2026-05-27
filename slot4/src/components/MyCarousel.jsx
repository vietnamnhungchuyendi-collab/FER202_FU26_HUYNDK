import React, { useEffect, useRef } from 'react';
import { banners } from '../data/bannerData';

function MyCarousel() {
  const carouselRef = useRef(null);

  useEffect(() => {
    // Programmatically initialize Bootstrap Carousel to guarantee auto-slide works in React
    if (window.bootstrap && carouselRef.current) {
      const carouselInstance = new window.bootstrap.Carousel(carouselRef.current, {
        interval: 4000,
        ride: 'carousel'
      });
      return () => {
        carouselInstance.dispose();
      };
    }
  }, []);

  return (
    <div
      ref={carouselRef}
      id="pizzaCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="4000"
    >
      <div className="carousel-inner">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          >
            <img
              src={banner.imageURL}
              className="d-block w-100"
              alt={banner.title}
              style={{ height: '400px', objectFit: 'cover' }}
            />

            <div className="carousel-caption d-none d-md-block">
              <h2>{banner.title}</h2>
              <p>{banner.caption}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#pizzaCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#pizzaCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}

export default MyCarousel;