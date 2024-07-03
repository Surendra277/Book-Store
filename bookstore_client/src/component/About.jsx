import React from "react";
import "./About.css";
import bookstoreImage from "../assets/bookstore.jpg";
import image from "../assets/new.jpg";
import image1 from "../assets/new1.jpg";
import image2 from "../assets/new2.jpg";
import image3 from "../assets/new3.jpg";

const About = () => {
  return (
    <div className="about-container">
      <HeroSection />
      <ContentSection />
    </div>
  );
};

const HeroSection = () => (
  <div
    className="hero-section h-96 flex items-center justify-center bg-cover bg-center text-white"
    style={{ backgroundImage: `url(${bookstoreImage})` }}
  >
    <h1 className="text-5xl font-bold">About Us</h1>
  </div>
);

const ContentSection = () => (
  <div className="content-section p-6">
    <OwnerSection />
    <TeamSection />
  </div>
);

const OwnerSection = () => (
  <div className="owner-section flex flex-col lg:flex-row items-center my-10 lg:my-20">
    <div className="text lg:w-2/3 p-4 lg:p-8 " >
      <h2 className="text-4xl font-bold">About the Store</h2>
      <p className="mt-4 text-lg mb-5">
        Welcome to Bibliomart, your premier destination for all things literary!
        Founded by book enthusiasts for book enthusiasts, our online bookstore
        is a haven for readers of all ages and interests. Whether you're a lover
        of classic literature, a fan of contemporary fiction, or searching for
        the latest bestsellers, we have something special for everyone. From
        classics to contemporary bestsellers, our online bookstore is your
        gateway to a universe of literature, tailored to every reader's taste.
      </p>
      <h3 className="text-3xl font-semibold mt-12">Our Mission</h3>
      <p className="mt-4 text-lg text-justify">
          At Bibliomart, our mission is simple: to connect people with the books
          they love. We believe that reading enriches lives, sparks imagination,
          and fosters a deeper understanding of the world. Our goal is to provide
          an extensive, carefully curated selection of books that cater to diverse
          tastes and preferences.
      </p>

    </div>
    <div className="image-container w-full lg:w-1/2 p-4 lg:p-8 flex justify-center">
  <img
    src={image1}
    alt="Bookstore"
    className="side-image w-full h-auto max-w-2xl shadow-2xl transform transition-transform"
  />
</div>
  </div>
);

const TeamSection = () => (
  <>
    <div className="team-section flex flex-col lg:flex-row items-center my-10 lg:my-20">
    <div className="text lg:w-2/3 p-4 lg:p-8">
      <h2 className="text-4xl font-bold">Meet Our Team</h2>
      <p className="mt-4 text-lg">
        At Bibliomart, we believe that great things are achieved through the
        collective effort of dedicated individuals. Whether you're looking for
        a classic novel, the latest bestseller, or a hidden gem, we're here to
        assist you.
      </p>
      <p className="mt-4 text-lg">
        By fostering a culture of collaboration, we encourage innovative ideas
        that enhance our services and products. Whether it's curating the
        latest book collections or developing user-friendly website features.
        Behind every successful online bookstore is a well-coordinated team
        managing operations smoothly.
      </p>
    </div>
    <div className="image-container w-full lg:w-1/2 p-4 lg:p-8 flex justify-center">
  <img
    src={image2}
    alt="Bookstore"
    className="side-image w-full h-auto max-w-2xl shadow-2xl transform transition-transform"
  />
</div>
  </div>

  <div className="flex justify-center space-x-4 my-10">
  <div className="flex shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl hover:shadow-black duration-300 w-[550px]">
    <div
      className="h-64 lg:h-auto lg:w-64 flex-none bg-cover bg-center m-4"
      style={{ backgroundImage: `url(${image})` }}
      title="Novel Gallery"
    ></div>
    <div className="p-6 flex flex-col justify-between leading-normal bg-white">
      <div className="mb-8">
        {/* <p className="text-sm text-gray-600 flex items-center">
          <svg
            className="fill-current text-gray-500 w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
          </svg>
          Members only
        </p> */}
        <div className="text-gray-900 font-bold text-2xl mb-2">Browse more</div>
        <p className="text-gray-700 text-base">
            Discover endless possibilities and explore an extensive collection of books across genres and find your perfect match.
        </p>
      </div>
      <div className="flex items-center">
        <div className="text-sm">
          <p className="text-gray-900 leading-none">Team</p>
          <p className="text-gray-600">All Members</p>
        </div>
      </div>
    </div>
  </div>

  <div className="flex shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl hover:shadow-black duration-300 w-[550px]">
    <div
      className="h-64 lg:h-auto lg:w-64 flex-none bg-cover bg-center m-4"
      style={{ backgroundImage: `url(${image3})` }}
      title="Library"
    ></div>
    <div className="p-6 flex flex-col justify-between leading-normal bg-white">
      <div className="mb-8">
        <div className="text-gray-900 font-bold text-2xl mb-2">Join Our Community</div>
        <p className="text-gray-700 text-base">
            Become a part of our literary family and dive deeper into the world of books by joining our community.
        </p>
      </div>
      <div className="flex items-center">
        <div className="text-sm">
          <p className="text-gray-900 leading-none">Team</p>
          <p className="text-gray-600">All Members</p>
        </div>
      </div>
    </div>
  </div>
</div>
  </>
);

export default About;
