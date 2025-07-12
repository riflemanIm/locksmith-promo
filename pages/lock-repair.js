// pages/lock-repair.js
import Head from "next/head";
import Nav from "../components/Nav";
import Contact from "../components/Contact";
export default function LockRepair() {
  return (
    <>
      <Head>
        <title>Ремонт замков — Профи по замкам</title>
        <meta
          name="description"
          content="Ремонт и восстановление работоспособности любых замков: дверных, автомобильных, сейфовых, магнитных и умных. Быстро, качественно, с гарантией."
        />
      </Head>
      <Nav />
      <main className="service">
        <p>
          <h1>Ремонт замков</h1>
        </p>
        <img
          src="/images/lock-repair.webp"
          alt="Ремонт замков"
          style={{
            width: "100%",
            maxHeight: "400px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
        <p>
          Восстанавливаем функциональность замков любой сложности: устраняем
          заедания, заменяем изношенные элементы, проводим смазку и настройку
          механизмов. Экстренный и плановый ремонт.
        </p>
        <ul>
          <li>Диагностика за 15 минут</li>
          <li>Замена деталей на оригинальные</li>
          <li>Гарантия качества</li>
        </ul>
      </main>
      <Contact />
      <style jsx>{`
        .service {
          padding: 4rem 1rem;
        }

        .service h1 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          color: #333;
        }
        .service img {
          width: 100%;
          max-height: 400px;
          object-fit: cover;
          border-radius: 18px;
          margin-bottom: 1.5rem;
          background-position: bottom;
        }
        .service p {
          font-size: 1.2rem;
          color: #555;
          line-height: 1.6;
          max-width: 800px;
          margin: 0 auto 1.5rem;
        }
        .service ul {
          list-style: disc;
          padding-left: 1.5rem;
          max-width: 800px;
          margin: 0 auto;
          color: #555;
        }
        .service li {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </>
  );
}
