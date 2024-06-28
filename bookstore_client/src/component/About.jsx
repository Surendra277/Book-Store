import React from 'react';
import '../component/About.css';
import bookstoreImage from '../assets/bookstore.jpg';
import ownerImage from '../assets/owner.jpg';
import teamImage from '../assets/team.jpg';

const About = () => {
  return (
    <div className="about-container">
      <HeroSection />
      <ContentSection />
    </div>
  );
};

const HeroSection = () => (
  <div className="hero-section" style={{ backgroundImage: `url(${bookstoreImage})` }}>
    <h1>Welcome to Our Book-Store</h1>
  </div>
);

const ContentSection = () => (
  <div className="content-section">
    <OwnerSection />
    <TeamSection />
  </div>
);

const OwnerSection = () => (
  <div className="owner-section">
    <img src={ownerImage} alt="Owner" />
    <div className="text">
      <h2>About the Store</h2>
      <p>
        Welcome to Bibliomart, your premier destination for all things literary! Founded by book enthusiasts for book enthusiasts, our online bookstore is a haven for readers of all ages and interests. Whether you're a lover of classic literature, a fan of contemporary fiction, or searching for the latest bestsellers, we have something special for everyone.
      </p>
      <h3>Our Mission</h3>
      <p>
        At Bibliomart, our mission is simple: to connect people with the books they love. We believe that reading enriches lives, sparks imagination, and fosters a deeper understanding of the world. Our goal is to provide an extensive, carefully curated selection of books that cater to diverse tastes and preferences.
      </p>
      <h1>What Sets Us Apart</h1>
      <p>
        <strong>Vast Selection:</strong> From timeless classics to modern masterpieces, our collection spans a wide range of genres, including fiction, non-fiction, mystery, romance, science fiction, fantasy, and more. We also offer a selection of rare and hard-to-find titles for the discerning reader.
      </p>
      <p>
        <strong>Expert Recommendations:</strong> Not sure what to read next? Our team of literary experts is here to help! We offer personalized recommendations based on your interests, ensuring you find the perfect book for your next reading adventure.
      </p>
      <p>
        <strong>Exceptional Service:</strong> We pride ourselves on our commitment to customer satisfaction. Our friendly and knowledgeable customer service team is always ready to assist with any questions or concerns, making your shopping experience as smooth and enjoyable as possible.
      </p>
      <p>
        <strong>Fast and Reliable Shipping:</strong> We understand the excitement of receiving a new book, which is why we offer fast and reliable shipping options. Our carefully packaged orders ensure your books arrive in pristine condition, ready to be enjoyed.
      </p>
      <p>
        <strong>Community Focus:</strong> We believe in the power of books to bring people together. That's why we regularly host virtual book clubs, author Q&A sessions, and other community events that celebrate the joy of reading.
      </p>
      <p>
        Join Our Community
        At Bibliomart, we're more than just a bookstore; we're a community of readers, writers, and book lovers. We invite you to explore our collection, join our events, and share your love of books with us. Thank you for choosing Bibliomart as your trusted source for all your reading needs.
      </p>
    </div>
  </div>
);

const TeamSection = () => (
  <div className="team-section">
    <img src={teamImage} alt="Team" />
    <div className="text">
      <h2>Meet Our Team</h2>
      <p>
        Our dedicated team of book experts is here to help you find your next great read. Whether you're looking for a classic novel, the latest bestseller, or a hidden gem, we're here to assist you.
      </p>
    </div>
  </div>
);

export default About;
