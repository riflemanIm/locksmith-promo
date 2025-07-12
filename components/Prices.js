// components/Prices.js
export default function Prices() {
  const data = [
    { title: "Вскрытие замков любого типа", price: "1 000 ₽ — 10 000 ₽" },
    { title: "Вскрытие автомобиля", price: "1 000 ₽ — 10 000 ₽" },
    { title: "Вскрытие дверного замка", price: "1 000 ₽ — 10 000 ₽" },
    {
      title: "Вскрытие дверей автомобиля без повреждений",
      price: "1 000 ₽ — 10 000 ₽",
    },
  ];

  return (
    <section className="prices">
      <div className="container">
        <h2>Цены</h2>
        <table>
          <thead>
            <tr>
              <th>Услуга</th>
              <th>Стоимость</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                <td>{row.title}</td>
                <td>{row.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <style jsx>{`
        .prices {
          padding: 4rem 1rem;
        }
        .container {
          max-width: 800px;
          margin: 0 auto;
        }
        h2 {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 2rem;
          color: #333;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th,
        td {
          border: 1px solid #ddd;
          padding: 0.75rem;
          text-align: left;
        }
        th {
          background: #0070f3;
          color: #fff;
        }
      `}</style>
    </section>
  );
}
