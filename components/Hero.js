// components/Hero.js
export default function Hero() {
  return (
    <section className="hero">
      <div className="overlay" />
      <div className="content">
        <h1>Профессиональное вскрытие замков без повреждений</h1>
        <p>
          Аварийное вскрытие дверей, автомобилей, сейфов и гаражей с гарантией
          сохранности конструкции.
        </p>
        <a
          href="tel:+79157661536"
          aria-label="Профи по замкам — телефон"
          className="btn"
        >
          Профи по замкам — 8 915 766 15-36
        </a>
      </div>
      <style jsx>{`
        .hero {
          position: relative;
          height: 70vh;
          background: url("/hero-bg.png") center/cover no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: hsla(212, 100%, 47.6%, 0.7);
        }
        .content {
          position: relative;
          text-align: center;
          color: #fff;
          padding: 0 1rem;
          max-width: 700px;
        }
        h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
        }
        .btn {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          background: #fff;
          color: #0070f3;
          font-weight: 600;
          border-radius: 4px;
          text-decoration: none;
        }
      `}</style>
    </section>
  );
}
