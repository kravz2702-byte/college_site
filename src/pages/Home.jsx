import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import { campuses, courses, facilities, testimonials } from '../data/homeContent.js';

function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const stars = [];

  for (let index = 0; index < fullStars; index += 1) {
    stars.push(<i key={`star-${index}`} className="fa-solid fa-star" aria-hidden="true" />);
  }

  if (hasHalfStar) {
    stars.push(<i key="half-star" className="fa-solid fa-star-half" aria-hidden="true" />);
  }

  return <div className="rating">{stars}</div>;
}

function Home() {
  return (
    <main>
      <header className="header">
        <Navbar />
        <div className="text-box">
          <h1>The Best College in the world</h1>
          <p>
            Making website is now one of the easiest things in the world. You just need to learn HTML, CSS,
            Javascript and you are good to go.
          </p>
          <Link to="/contact" className="hero-btn">
            Visit Us To Know More
          </Link>
        </div>
      </header>

      <section className="course">
        <h1>Courses we offer</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="row">
          {courses.map((course) => (
            <div className="course-col" key={course.title}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="campus">
        <h1>Our Global Campus</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="row">
          {campuses.map((campus) => (
            <div className="campus-col" key={campus.name}>
              <img src={campus.image} alt={`${campus.name} campus`} />
              <div className="layer">
                <h3>{campus.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="facilities">
        <h1>Our Facilities</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="row">
          {facilities.map((facility) => (
            <div className="facilities-col" key={facility.title}>
              <img src={facility.image} alt={facility.title} />
              <h3>{facility.title}</h3>
              <p>{facility.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials">
        <h1>What Our Students Say</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="row">
          {testimonials.map((testimonial) => (
            <div className="testimonials-col" key={testimonial.name}>
              <img src={testimonial.image} alt={testimonial.name} />
              <div>
                <p>{testimonial.quote}</p>
                <h3>{testimonial.name}</h3>
                {renderStars(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <h1>
          Enroll for our various online courses <br /> from The World
        </h1>
        <Link to="/contact" className="hero-btn">
          CONTACT US
        </Link>
      </section>
    </main>
  );
}

export default Home;
