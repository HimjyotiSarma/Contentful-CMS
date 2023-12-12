import heroSvg from './assets/hero.svg'
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Projects CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            earum laudantium? Libero nesciunt dolor quam, itaque molestias
            labore! Eum, soluta. Earum quas expedita sunt nostrum beatae
            voluptates eligendi, iste ipsa? Sunt libero architecto repellat
          </p>
        </div>
        <div className="img-container">
          <img src={heroSvg} alt="" className="img" />
        </div>
      </div>
    </section>
  )
}
