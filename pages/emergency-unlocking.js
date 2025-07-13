// pages/emergency-unlocking.js
import Head from "next/head";
import Nav from "../components/Nav";

import Image from "next/image";
export default function EmergencyUnlocking() {
  return (
    <>
      <Head>
        <title>
          Аварийное вскрытие замков без повреждений — Профи по замкам
        </title>
        <meta
          name="description"
          content="Срочное аварийное вскрытие дверных, автомобильных, сейфовых и гаражных замков без повреждений. Круглосуточно, выезд в любую точку города."
        />
      </Head>
      <Nav />
      <main className="service">
        <p>
          <h1>Аварийное вскрытие замков</h1>
        </p>
        <img
          src="/images/emergency-unlocking.jpg"
          alt="Аварийное вскрытие замков"
        />
        <p>
          Наши специалисты быстро и аккуратно вскроют замок любой сложности без
          повреждений двери и фурнитуры. Работаем с механическими, магнитными и
          кодовыми замками, в том числе автомобильными и сейфовыми.
        </p>
        <ul>
          <li>Выезд в течение 20 минут</li>
          <li>Гарантия сохранности конструкции</li>
          <li>Опыт более 10 лет</li>
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
