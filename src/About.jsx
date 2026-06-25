import Navbar from "./Navbar";

function About() {
  return (
    <>
      <Navbar />

      <div className="about">
        <h1>About Nila's Nostalgia</h1>

        <p>
          Welcome to Nila's Nostalgia, where memories find a home.
          We specialize in retro toys, vintage games, antique décor,
          and collectibles that bring timeless moments back to life.
        </p>

        <p>
          Our mission is to preserve beautiful memories and connect
          generations through nostalgic treasures.
        </p>
      </div>

      <footer>
        <h3>Contact Us</h3>
        <p>Email : info@nilasnostalgia.com</p>
        <p>Phone : +91 98765 43210</p>
        <p>© 2026 Nila's Nostalgia. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default About;