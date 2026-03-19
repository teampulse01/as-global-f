import React from "react";
import "./LmsLandingPage.css";

const LmsLandingPage: React.FC = () => {
  return (
    <div className="container">

      {/* Navbar */}
      <header className="navbar">
        <h2 className="logo">LMS</h2>
        <nav>
          <a href="#">Home</a>
          <a href="#">Courses</a>
          <a href="#">Features</a>
          <a href="#">Contact</a>
          <button className="btn">Login</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Learn Anytime, Anywhere</h1>
        <p>Upgrade your skills with online courses from expert instructors.</p>
        <button className="btn">Start Learning</button>
      </section>

      {/* Features */}
      <section className="features">
        <h2>Our Features</h2>

        <div className="feature-grid">
          <div className="card">
            <h3>Expert Teachers</h3>
            <p>Learn from top industry professionals.</p>
          </div>

          <div className="card">
            <h3>Flexible Learning</h3>
            <p>Access courses anytime anywhere.</p>
          </div>

          <div className="card">
            <h3>Certification</h3>
            <p>Get certificates after course completion.</p>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="courses">
        <h2>Popular Courses</h2>

        <div className="course-grid">
          <div className="course-card">
            <h3>Cyber Security</h3>
            <p>Learn ethical hacking and network security.</p>
          </div>

          <div className="course-card">
            <h3>Web Development</h3>
            <p>Master HTML, CSS, JavaScript and React.</p>
          </div>

          <div className="course-card">
            <h3>Data Science</h3>
            <p>Analyze data with Python and AI tools.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        © 2026 LMS Platform | All Rights Reserved
      </footer>

    </div>
  );
};

export default LmsLandingPage;