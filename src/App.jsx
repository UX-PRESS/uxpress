
import logo from "./assets/uxprex_logo.png"
import heroImage from "./assets/uxprex_hero_imge.png"
function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="container">
        <div className="logo">
          <img src={logo} alt="UXPRESS logo" />
        </div>
          <nav>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-content">
          <h2>
            Building digital experiences
            <span> modern and strategic</span>
          </h2>

          <p>
            Developer focused on performance, clean design, and
            scalable front-end architecture.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">View Projects</button>
            <button className="secondary-btn">Contact</button>
          </div>
       
        </div>
            <div className="hero-image">
             <img src={heroImage} alt="UXPRESS project preview" />
           </div>

      </section>
    </div>
  )
}

export default App
