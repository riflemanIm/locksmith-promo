// components/Nav.js
import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav" role="navigation" aria-label="Главное меню сайта">
      <div className="container">
        <div className="container_logo">
          <div className="logo">
            <Link href="/" aria-label="Профи по замкам — главная">
              <img src="/logo.svg" alt="Профи по замкам" height={44} />
            </Link>
          </div>
          <div className="logo_text">
            <Link href="/" aria-label="Профи по замкам — главная">
              Профи по замкам —
            </Link>
          </div>
          <div className="logo_tel">
            <Link
              href="tel:+79190204137"
              aria-label="Профи по замкам — телефон"
            >
              8 919 020-4137
            </Link>
          </div>
        </div>

        {/* Кнопка гамбургера */}
        <button
          className="burger"
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        {/* Скрытое меню, появляется при isOpen */}
        <ul className={`menu ${isOpen ? "open" : "close"}`}>
          <li>
            <Link href="/emergency-unlocking">Аварийное вскрытие</Link>
          </li>
          <li>
            <Link href="/installation-replacement">Установка и замена</Link>
          </li>
          <li>
            <Link href="/lock-repair">Ремонт замков</Link>
          </li>
          <li>
            <Link href="/mortise-door-components">Врезка замков и ручек</Link>
          </li>
        </ul>
      </div>

      <style jsx>{`
        .nav {
          background: #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 10;
        }
        .container {
          max-width: 1024px;
          margin: 0 auto;
          padding: 0.5rem 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .container_logo {
          display: flex;
          align-items: center;
        }
        .logo_text {
          margin-left: 0.5rem;
          font-size: 1.2rem;
          font-weight: 600;
          color: rgb(27, 38, 51);
          display: none;
        }

        .logo_tel {
          margin-left: 0.5rem;
          font-size: 1.2rem;
          font-weight: 600;
          color: #0070f3;
        }

        /* Показываем текст логотипа только на десктопе */
        @media (min-width: 768px) {
          .logo_text {
            display: block;
          }
        }

        /* Стили меню */
        .menu {
          display: flex;
          gap: 1rem;
          list-style: none;
        }
        .menu a {
          color: #0070f3;
          text-decoration: none;
          font-weight: 500;
        }
        .menu a:hover {
          color: #005bb5;
        }

        /* Бургер-кнопка скрыта на десктопе */
        .burger {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 24px;
          height: 20px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
        }
        .bar {
          display: block;
          width: 100%;
          height: 3px;
          background-color: #0070f3;
          border-radius: 2px;
        }

        /* Мобильные стили */
        @media (max-width: 767px) {
          .menu {
            position: absolute;
            top: 64px;
            right: 1rem;
            background: #fff;
            flex-direction: column;
            gap: 10;
            border: 1px solid #ddd;
            border-radius: 4px;
            overflow: hidden;
            max-height: 0;
            transition: max-height 0.3s ease;
            width: 200px;
            padding: 1rem;
          }
          .menu.open {
            max-height: 400px; /* достаточно для ваших пунктов */
          }
          .menu.close {
            max-height: 0;
            padding: 0;
          }

          .menu li {
            border-bottom: 1px solid #eee;
          }
          .menu li:last-child {
            border-bottom: none;
          }
          .menu a {
            display: block;
            padding: 0.75rem 1rem;
          }

          .burger {
            display: flex;
          }
        }
      `}</style>
    </nav>
  );
}
