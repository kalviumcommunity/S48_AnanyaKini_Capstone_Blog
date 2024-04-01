import React, { useState, useEffect } from "react";
import "../../css/Home.css";
import Header from "../Header";
import Footer from "../Footer";
import Posts from "../Posts";
import Logo from "../../images/Logo-arrow.png";
import bg1 from "../../images/bg-1.jpg";
import bg2 from "../../images/bg-2.jpg";
import bg3 from "../../images/bg-3.jpg";
import bg4 from "../../images/bg-4.jpg";
import bg5 from "../../images/bg-5.jpg";
import bg6 from "../../images/bg-6.jpg";
import bg7 from "../../images/bg-7.jpg";
import bg8 from "../../images/bg-8.jpg";
import bg9 from "../../images/bg-9.jpg";

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const images = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    const handleScroll = () => {
      const carouselHeight =
        document.querySelector(".image-carousel").offsetHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= carouselHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [images.length]);

  return (
    <div>
      <Header isScrolled={isScrolled} />
      <div className="container_home">
        <div className="image-carousel-container">
          <div className="image-carousel">
            {images.map((image, index) => (
              <div
                key={index}
                className={`carousel-item ${
                  index === currentImageIndex ? "active" : ""
                }`}
                style={{ backgroundImage: `url(${image})` }}
              />
            ))}
          </div>
          <div className="carousel-content">
            <h1>GlobeTrotters</h1>
            <p>
              Welcome to our travel blog, where wanderlust meets discovery! Join
              us on a journey of exploration and adventure as we uncover hidden
              gems, share insider tips, and immerse ourselves in diverse
              cultures. From breathtaking landscapes to culinary delights, let's
              embark on unforgettable adventures together. Let the exploration
              begin!
            </p>
            <img src={Logo} alt="" />
          </div>
        </div>
      </div>
      <Posts />
      <Footer />
    </div>
  );
};

export default Home;
