import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <div className="hero">
        <h1>Welcome to Nila's Nostalgia</h1>

        <p>
          Bringing back memories with retro toys, vintage games,
          old-school accessories, and timeless collectibles.
        </p>

        <div className="card">
  <img
    src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4"
    alt="Retro Toys"
    className="card-img"
  />
  <h2>Retro Toys</h2>
  <p>Relive childhood memories with timeless toys.</p>
</div>

<div className="card">
  <img
    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f"
    alt="Vintage Games"
    className="card-img"
  />
  <h2>Vintage Games</h2>
  <p>Classic games from the golden era.</p>
</div>

<div className="card">
  <img
    src="https://images.unsplash.com/photo-1517705008128-361805f42e86"
    alt="Antique Decor"
    className="card-img"
  />
  <h2>Antique Decor</h2>
  <p>Decor pieces that tell stories of the past.</p>
</div>
<div className="card">
  <img
    src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
    alt="Vintage Cameras"
    className="card-img"
  />
  <h2>Vintage Cameras</h2>
  <p>Iconic cameras that captured memories beautifully.</p>
</div>

<div className="card">
  <img
    src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f"
    alt="Music Collections"
    className="card-img"
  />
  <h2>Music Collections</h2>
  <p>Classic vinyl records, cassette tapes and CDs.</p>
</div>

<div className="card">
  <img
    src="https://images.unsplash.com/photo-1508057198894-247b23fe5ade"
    alt="Old Watches"
    className="card-img"
  />
  <h2>Old Watches</h2>
  <p>Elegant timepieces with timeless craftsmanship.</p>
</div>

<div className="card">
  <img
    src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
    alt="Rare Books"
    className="card-img"
  />
  <h2>Rare Books</h2>
  <p>Discover stories and treasures from another era.</p>
</div>

<div className="card">
  <img
    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
    alt="Classic Electronics"
    className="card-img"
  />
  <h2>Classic Electronics</h2>
  <p>Discover vintage radios, televisions, and timeless gadgets from the past.</p>
</div>
      </div>
    </>
  );
}

export default Home;
