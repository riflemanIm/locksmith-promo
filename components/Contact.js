// components/Contact.js
export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Свяжитесь с нами</h2>
        <form>
          <label>
            Ваше имя
            <input type="text" name="name" required />
          </label>
          <label>
            Телефон
            <input type="tel" name="phone" required />
          </label>
          <label>
            Сообщение
            <textarea name="message" rows="4" />
          </label>
          <button type="submit">Отправить</button>
        </form>
      </div>
      <style jsx>{`
        .contact {
          padding: 4rem 1rem;
          background: #fafafa;
        }
        .container {
          max-width: 500px;
          margin: 0 auto;
        }
        h2 {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 2rem;
          color: #333;
        }
        form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        label {
          display: flex;
          flex-direction: column;
          font-weight: 500;
          color: #555;
        }
        input,
        textarea {
          padding: 0.75rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        button {
          padding: 0.75rem;
          background: #0070f3;
          color: #fff;
          border: none;
          border-radius: 4px;
          font-weight: 600;
          cursor: pointer;
        }
      `}</style>
    </section>
  );
}
