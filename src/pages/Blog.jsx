import Navbar from '../components/Navbar.jsx';

const categories = [
  { label: 'Business Analytics', count: 21 },
  { label: 'Data Science', count: 28 },
  { label: 'Machine Learning', count: 15 },
  { label: 'Computer Science', count: 34 },
  { label: 'AutoCAD', count: 42 },
  { label: 'Journalism', count: 22 },
  { label: 'Commerce', count: 30 },
];

function Blog() {
  return (
    <main>
      <section className="sub-header">
        <Navbar />
        <h1>Our Certificate &amp; Online Programs For 2021</h1>
      </section>

      <section className="blog-content">
        <div className="row">
          <article className="blog-left">
            <img src="/images/certificate.jpg" alt="Students celebrating their certificate" />
            <h2>Our Certificate &amp; Online Programs For 2021</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae reiciendis officiis harum, eligendi quos
              aspernatur similique nostrum eum accusantium id sed consectetur dolores fuga. Numquam vero voluptas distinctio
              cupiditate natus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae reiciendis officiis harum, eligendi quos
              aspernatur similique nostrum eum accusantium id sed consectetur dolores fuga. Numquam vero voluptas distinctio
              cupiditate natus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae reiciendis officiis harum, eligendi quos
              aspernatur similique nostrum eum accusantium id sed consectetur dolores fuga. Numquam vero voluptas distinctio
              cupiditate natus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae reiciendis officiis harum, eligendi quos
              aspernatur similique nostrum eum accusantium id sed consectetur dolores fuga. Numquam vero voluptas distinctio
              cupiditate natus.
            </p>

            <div className="comment-box">
              <h3>Leave a comment</h3>
              <form
                className="comment-form"
                onSubmit={(event) => {
                  event.preventDefault();
                }}
              >
                <input type="text" name="name" placeholder="Enter Name" required />
                <input type="email" name="email" placeholder="Enter Email" required />
                <textarea rows="5" name="comment" placeholder="Your comment" required />
                <button type="submit" className="hero-btn red-btn">
                  POST COMMENT
                </button>
              </form>
            </div>
          </article>

          <aside className="blog-right">
            <h3>Post Categories</h3>
            {categories.map((category) => (
              <div key={category.label}>
                <span>{category.label}</span>
                <span>{category.count}</span>
              </div>
            ))}
          </aside>
        </div>
      </section>
    </main>
  );
}

export default Blog;
