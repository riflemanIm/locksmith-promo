// pages/installation-replacement.js
import Head from "next/head";
import Nav from "../components/Nav";

export default function InstallationReplacement() {
  return (
    <>
      <Head>
        <title>Установка и замена замков — Профи по замкам</title>
        <meta
          name="description"
          content="Профессиональная установка и замена дверных, гаражных и автомобильных замков. Монтаж и адаптация фурнитуры любой сложности."
        />
      </Head>
      <Nav />
      <main className="service">
        <p>
          <h1>Установка и замена замков</h1>
        </p>

        <img
          src="/images/installation-replacement.webp"
          alt="Установка и замена замков"
          style={{
            width: "100%",
            maxHeight: "400px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
        <p>
          Предлагаем полный комплекс работ по установке, замене и настройке
          замков. Подберем оптимальную модель, проведем профессиональный монтаж
          и проконсультируем по уходу за механизмом.
        </p>
        <ul>
          <li>Подбор замка под бюджет</li>
          <li>Монтаж за один выезд</li>
          <li>Гарантия до 2 лет</li>
        </ul>
      </main>
      {/* <Contact /> */}
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
