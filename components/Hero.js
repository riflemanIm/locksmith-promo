// components/Hero.js
export default function Hero() {
  return (
    <section className="hero">
      <div className="overlay" />
      <div className="content">
        <h1>Профессиональное вскрытие замков без повреждений</h1>

        <div className="cta">
          <a
            href="tel:+79262726662"
            aria-label="Профи по замкам — телефон"
            className="btn"
          >
            Позвонить — 8 926 272 66-62
          </a>
          <p>
            Аварийное вскрытие дверей, автомобилей, сейфов и гаражей с гарантией
            сохранности конструкции.
          </p>
          <a
            href="https://t.me/shuhrat_807"
            aria-label="Написать в Telegram"
            className="btn btn-telegram"
          >
            <span className="tg-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false">
                <path d="M21.9 3.6c.4-.2.9.1.8.6l-3.3 15.5c-.1.5-.7.8-1.2.5l-5.2-3.8-2.6 2.5c-.4.4-1 .2-1-.4l.1-4.3 8.2-7.4c.3-.3 0-.5-.4-.3l-10 6.1-4.3-1.3c-.6-.2-.6-1 .1-1.2z" />
              </svg>
            </span>
            Написать
          </a>
        </div>
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
        .cta {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
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
        .phone {
          font-weight: 600;
          letter-spacing: 0.02em;
        }
        .btn-telegram {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #27a7e7;
          color: #fff;
        }
        .tg-icon {
          display: inline-flex;
          width: 1.1rem;
          height: 1.1rem;
        }
        .tg-icon svg {
          width: 100%;
          height: 100%;
          fill: currentColor;
        }
      `}</style>
    </section>
  );
}
