// components/Services.js
import Link from "next/link";
import { FiUnlock, FiTool, FiRefreshCcw, FiKey } from "react-icons/fi";

export default function Services() {
  const items = [
    {
      icon: <FiUnlock />,
      title: "Аварийное вскрытие замков",
      href: "/emergency-unlocking",
    },
    {
      icon: <FiKey />,
      title: "Установка и замена замков",
      href: "/installation-replacement",
    },
    { icon: <FiTool />, title: "Ремонт замков", href: "/lock-repair" },
    {
      icon: <FiRefreshCcw />,
      title: "Врезка замков и дверных ручек",
      href: "/mortise-door-components",
    },
  ];
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Наши услуги</h2>
        <div className="grid">
          {items.map((s, i) => (
            <Link key={i} href={s.href}>
              <div className="card">
                <div className="icon">{s.icon}</div>
                <p>{s.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <style jsx>{`
        .services {
          padding: 4rem 1rem;
          background: #f5f5f5;
        }
        .container {
          max-width: 1024px;
          margin: 0 auto;
        }
        h2 {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 2rem;
          color: #333;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }
        .card {
          background: #fff;
          padding: 2rem;
          border-radius: 8px;
          text-align: center;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
          min-height: 160px;
        }
        .icon {
          font-size: 2rem;
          color: #0070f3;
          margin-bottom: 1rem;
        }
        p {
          margin: 0;
          font-weight: 500;
          color: #555;
        }
      `}</style>
    </section>
  );
}
