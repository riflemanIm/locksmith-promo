// pages/photo-album.js
import Head from "next/head";
import Nav from "../components/Nav";
import { useState } from "react";

export default function PhotoAlbum() {
  const [fullscreenPhoto, setFullscreenPhoto] = useState(null);

  const photos = [
    {
      src: "/album/photo-1.jpg",
      alt: "Аварийное вскрытие замка входной двери",
    },
    { src: "/album/photo-2.jpg", alt: "Установка дверного замка" },
    { src: "/album/photo-3.jpg", alt: "Ремонт автомобильного замка" },
    { src: "/album/photo-4.jpg", alt: "Врезка замка в межкомнатную дверь" },
    { src: "/album/photo-5.jpg", alt: "Вскрытие автомобильного замка" },
    { src: "/album/photo-6.jpg", alt: "Установка дверной ручки" },
    { src: "/album/photo-7.jpg", alt: "Ремонт сейфового замка" },
    { src: "/album/photo-8.jpg", alt: "Подгонка дверного механизма" },
    { src: "/album/photo-9.jpg", alt: "Замена цилиндрового механизма" },
    { src: "/album/photo-10.jpg", alt: "Аварийное вскрытие гаража" },
    { src: "/album/photo-11.jpg", alt: "Крупный план дверной фурнитуры" },
  ];

  return (
    <>
      <Head>
        <title>Фотоальбом работ — Профи по замкам</title>
        <meta
          name="description"
          content="Фотоальбом выполненных работ по вскрытию, установке и ремонту замков."
        />
      </Head>
      <Nav />
      <main className="album-container">
        {photos.map((photo, idx) => (
          <div
            key={idx}
            className={`photo ${
              idx % 3 === 0 ? "wide" : idx % 2 === 0 ? "tall" : ""
            }`}
            onClick={() => setFullscreenPhoto(photo.src)}
          >
            <img src={photo.src} alt={photo.alt} />
          </div>
        ))}
      </main>
      {fullscreenPhoto && (
        <div className="fullscreen" onClick={() => setFullscreenPhoto(null)}>
          <img
            src={fullscreenPhoto}
            alt="Фотоальбом выполненных работ по вскрытию, установке и ремонту замков"
          />
        </div>
      )}
      <style jsx>{`
        .album-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          grid-auto-rows: 150px;
          grid-auto-flow: dense;
          gap: 4px;
          max-width: 1024px;
          margin: 0 auto;
          padding: 1rem;
        }
        .photo {
          position: relative;
          cursor: pointer;
          overflow: hidden;
          border-radius: 8px;
        }
        .photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px;
        }
        .photo.wide {
          grid-column: span 2;
        }
        .photo.tall {
          grid-row: span 2;
        }
        .fullscreen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 100;
          cursor: pointer;
        }
        .fullscreen img {
          max-width: 95%;
          max-height: 95%;
          border-radius: 8px;
        }
      `}</style>
    </>
  );
}
