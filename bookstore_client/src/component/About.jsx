
import React from 'react';
import '../component/About.css';
import bookstoreImage from '../assets/bookstore.jpg';

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
    <h1>Welcome to Our BookStore</h1>
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
    <div className="text items-center">
      <h2>About the Store</h2>
      <p>
        Welcome to Bibliomart, your premier destination for all things literary! Founded by book enthusiasts for book enthusiasts, our online bookstore is a haven for readers of all ages and interests. Whether you're a lover of classic literature, a fan of contemporary fiction, or searching for the latest bestsellers, we have something special for everyone. From classics to contemporary bestsellers, our online bookstore is your gateway to a universe of literature, tailored to every reader's taste.
      </p>
      <h3>Our Mission</h3>
      <p>
        At Bibliomart, our mission is simple: to connect people with the books they love. We believe that reading enriches lives, sparks imagination, and fosters a deeper understanding of the world. Our goal is to provide an extensive, carefully curated selection of books that cater to diverse tastes and preferences.
      </p>
      <h3>What Sets Us Apart</h3>
      <p>
        <strong>Vast Selection:</strong> From timeless classics to modern masterpieces, our collection spans a wide range of genres, including fiction, non-fiction, mystery, romance, science fiction, fantasy, and more. We also offer a selection of rare and hard-to-find titles for the discerning reader.
      </p>
      <p>
        <strong>Exceptional Service:</strong> We pride ourselves on our commitment to customer satisfaction. Our friendly and knowledgeable customer service team is always ready to assist with any questions or concerns, making your shopping experience as smooth and enjoyable as possible.
      </p>
      <p>
        <strong>Fast and Reliable Shipping:</strong> We understand the excitement of receiving a new book, which is why we offer fast and reliable shipping options. Our carefully packaged orders ensure your books arrive in pristine condition, ready to be enjoyed.
      </p>
      <p>
        <strong>Join Our Community</strong>
        At Bibliomart, we're more than just a bookstore; we're a community of readers, writers, and book lovers. We invite you to explore our collection, join our events, and share your love of books with us. Thank you for choosing Bibliomart as your trusted source for all your reading needs.
      </p>
    </div>
  </div>
);

const TeamSection = () => (
  <div className="team-section">
    <div className="text">
      <h2>Meet Our Team</h2>
      <p>
        At Bibliomart, we believe that great things are achieved through the collective effort of dedicated individuals. Our team is the heart of our success, working together to bring you an exceptional online bookstore experience.
        Whether you're looking for a classic novel, the latest bestseller, or a hidden gem, we're here to assist you.
      </p>
      <p>
        By fostering a culture of collaboration, we encourage innovative ideas that enhance our services and products. Whether it's curating the latest book collections or developing user-friendly website features.
        Behind every successful online bookstore is a well-coordinated team managing operations smoothly.
      </p>

      <p>
        At Bibliomart, we believe in the power of continuous learning. Through regular training sessions and knowledge-sharing meetings, our team members stay updated with industry trends and best practices. 
        Teamwork extends beyond our bookstore. We actively engage with our community of readers, authors, and partners, building strong relationships that enrich the literary ecosystem. By supporting each other, we create a thriving environment where everyone benefits.
      </p>

    </div>
  </div>
);

export default About;