import Navbar from '../components/Navbar.jsx';

function Contact() {
  return (
    <main>
      <section className="sub-header">
        <Navbar />
        <h1>Contact Us</h1>
      </section>

      <section className="location">
        <iframe
          title="College location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22557.022088219004!2d38.98254055844727!3d45.032481420244814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f04fbb9382da17%3A0x42c88ba7cd6e573d!2z0JrQvtC-0L_QtdGA0LDRgtC40LLQvdGL0Lkg0YDRi9C90L7Qug!5e0!3m2!1sru!2sru!4v1653855026128!5m2!1sru!2sru"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <section className="contact-us">
        <div className="row">
          <div className="contact-col">
            <div>
              <i className="fa-solid fa-house" aria-hidden="true" />
              <span>
                <h5>Карасунская ул., 86, Краснодар</h5>
                <p>Краснодарский край, 350000</p>
              </span>
            </div>
            <div>
              <i className="fa-solid fa-phone" aria-hidden="true" />
              <span>
                <h5>+7 (000) 000-00-00</h5>
                <p>Понедельник - Пятница, 10:00 - 18:00</p>
              </span>
            </div>
            <div>
              <i className="fa-solid fa-envelope" aria-hidden="true" />
              <span>
                <h5>info@example.com</h5>
                <p>Мы ответим в течение рабочего дня</p>
              </span>
            </div>
          </div>
          <div className="contact-col">
            <form action="/form-handler.php" method="POST">
              <input type="text" name="name" placeholder="Enter your name" required />
              <input type="email" name="email" placeholder="Enter Email Address" required />
              <input type="text" name="subject" placeholder="Enter your subject" required />
              <textarea rows="8" name="message" placeholder="Message" required />
              <button type="submit" className="hero-btn red-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
