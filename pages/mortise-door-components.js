// pages/mortise-door-components.js
import Head from "next/head";
import Nav from "../components/Nav";
import Contact from "../components/Contact";
export default function MortiseDoorComponents() {
  return (
    <>
      <Head>
        <title>Врезка замков и дверных ручек — Профи по замкам</title>
        <meta
          name="description"
          content="Профессиональная врезка замков и дверных ручек, установка фурнитуры под любые двери. Точная подгонка, аккуратная отделка, долговечность."
        />
      </Head>
      <Nav />
      <main className="service">
        <p>
          <h1>Врезка замков и дверных ручек</h1>
        </p>
        <img
          src="/images/mortise-door-components.jpg"
          alt="Врезка замков и дверных ручек"
          style={{
            width: "100%",
            maxHeight: "400px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
        <p>
          Выполняем точную врезку замков и дверных ручек в массивные и
          металлические двери. Используем профессиональное оборудование для
          чистых отверстий и идеального расположения фурнитуры.
        </p>
        <ul>
          <li>Работа по шаблонам DIN, ANSI</li>
          <li>Аккуратная отделка торцов</li>
          <li>Совместимость с любыми механизмами</li>
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
