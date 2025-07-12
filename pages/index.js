// pages/index.js
import Head from "next/head";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Prices from "../components/Prices";
import Contact from "../components/Contact";

export default function Home() {
  const siteUrl = "https://your-domain.com"; // замените на ваш URL
  const title = "Профи по замкам — вскрытие и ремонт замков без повреждений";
  const description =
    "Сервис аварийного вскрытия, установки и ремонта замков любого типа — двери, авто, сейфы, гаражи. Работа без повреждений.";
  const image = `${siteUrl}/hero-bg.jpg`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={siteUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:domain" content="your-domain.com" />
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        {/* Structured Data JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Locksmith",
              name: "Профи по замкам",
              description: description,
              url: siteUrl,
              telephone: "+7XXXXXXXXXX",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ваш город",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "00:00",
                  closes: "23:59",
                },
              ],
            }),
          }}
        />
      </Head>
      <Nav />
      <Hero />
      <Services />
      <Prices />
      <Contact />
    </>
  );
}
