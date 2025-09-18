import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';

function About() {
  return (
    <main>
      <section className="sub-header">
        <Navbar />
        <h1>About Us</h1>
      </section>

      <section className="about-us">
        <div className="row">
          <div className="about-col">
            <h1>We are the world's largest university</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum at laudantium vero dolorum modi, quos asperiores
              doloremque voluptate necessitatibus assumenda reprehenderit quod consequuntur unde dolorem placeat esse, ad ab fuga.
            </p>
            <Link to="/course" className="hero-btn red-btn">
              EXPLORE NOW
            </Link>
          </div>
          <div className="about-col">
            <img src="/images/about.jpg" alt="Students collaborating" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
