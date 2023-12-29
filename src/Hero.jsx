import heroSvg from './assets/hero.svg'
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Coding Canvas</h1>
          <p>
            Welcome to my portfolio! I'm <strong>Himjyoti Sarma</strong>, a
            passionate web developer crafting engaging experiences. With
            expertise in <strong>React, JavaScript, CSS, HTML, and more</strong>
            , I bring creativity and functionality to every project.
          </p>
        </div>
        <div className="img-container">
          <img src={heroSvg} alt="" className="img" />
        </div>
      </div>
    </section>
  )
}
