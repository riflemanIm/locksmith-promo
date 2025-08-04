// components/PhotoAlbum.js
import { useState } from "react";
import Image from "next/image";

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
      <section className="container">
        <h2>Наша работа</h2>
        <div className="album-container">
          {photos.map((photo, idx) => (
            <div
              key={idx}
              className={`photo ${
                idx % 3 === 0 ? "wide" : idx % 4 === 0 ? "tall" : ""
              }`}
              onClick={() => setFullscreenPhoto(photo.src)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 180px"
                style={{ objectFit: "cover", borderRadius: "8px" }}
              />
            </div>
          ))}
        </div>
      </section>

      {fullscreenPhoto && (
        <div className="fullscreen" onClick={() => setFullscreenPhoto(null)}>
          <div className="fullscreen-inner">
            <Image
              loading="lazy"
              src={fullscreenPhoto}
              alt="Фотоальбом выполненных работ по вскрытию, установке и ремонту замков"
              fill
              style={{ objectFit: "contain", borderRadius: "8px" }}
            />
          </div>
        </div>
      )}

      <style jsx>{`
        h2 {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 2rem;
          color: #333;
        }
        .container {
          padding: 4rem 1rem;
          max-width: 1024px;
          margin: 0 auto;
        }
        .album-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          grid-auto-rows: 180px;
          grid-auto-flow: dense;
          gap: 4px;
        }
        .photo {
          position: relative;
          cursor: pointer;
          overflow: hidden;
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
        .fullscreen-inner {
          position: relative;
          width: 90vw;
          height: 90vh;
        }
        .fullscreen-inner :global(.next-image-wrapper) {
          position: absolute !important;
          inset: 0;
        }
      `}</style>
    </>
  );
}
