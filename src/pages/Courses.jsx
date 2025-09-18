import Navbar from '../components/Navbar.jsx';
import { courses, facilities } from '../data/homeContent.js';

function Courses() {
  return (
    <main>
      <section className="sub-header">
        <Navbar />
        <h1>Our Courses</h1>
      </section>

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
    </main>
  );
}

export default Courses;
