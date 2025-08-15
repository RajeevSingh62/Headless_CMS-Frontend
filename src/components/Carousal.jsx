import React from "react";
import Slider from "react-slick";

// Important: make sure these CSS imports exist somewhere (here or in main.jsx/App.jsx)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TravelCarousel = () => {
  const blogs = [
    {
      id: 1,
      title: "Exploring the Beaches of Bali",
      image: "https://picsum.photos/seed/picsum/200/300",
      description:
        "Discover the tropical paradise with crystal clear waters and stunning sunsets.",
    },
    {
      id: 2,
      title: "Hiking the Swiss Alps",
      image: "https://picsum.photos/seed/picsum/200/300",
      description:
        "Experience breathtaking views and adventurous hiking trails in the Swiss Alps.",
    },
    {
      id: 3,
      title: "Cultural Journey in Kyoto",
      image: "https://source.unsplash.com/1200x600/?kyoto,japan",
      description:
        "Step back in time and explore temples, gardens, and traditional tea houses.",
    },
    {
      id: 4,
      title: "Safari Adventure in Kenya",
      image: "https://source.unsplash.com/1200x600/?safari,kenya",
      description:
        "Witness wildlife in its natural habitat across the great African savannah.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    adaptiveHeight: true,
  };

  return (
    <div className="w-full mx-auto my-8">
      <Slider {...settings}>
        {blogs.map((blog) => (
          <div key={blog.id} className="p-2">
            <div className="relative">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 md:h-96 object-cover "
              />
              {/* Optional overlay like your figma hero */}
              <div className="absolute inset-0 bg-black/25 rounded-lg"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h2 className="text-xl md:text-2xl font-semibold drop-shadow">
                  {blog.title}
                </h2>
                <p className="mt-1 text-sm md:text-base opacity-90">
                  {blog.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TravelCarousel;
