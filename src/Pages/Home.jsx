import Header from "../Components/Header";
import Hero from "../Components/Hero";
import ProductCard from "../Components/ProductCard";

const products = [
  {
    src: "/fleur-3.png",
    alt: "une belle fleur",
    name: "Une orchidée",
    price: 18,
    url: "#",
  },
  {
    src: "/fleur-4.png",
    alt: "une belle fleur",
    name: "Une orchidée",
    price: 18,
    url: "#",
  },
  {
    src: "/fleur-5.png",
    alt: "une belle fleur",
    name: "Une orchidée",
    price: 18,
    url: "#",
  },
];

function Page() {
  return (
    <>
      <Header />
      <Hero />
      <section className="products-section">
        <div className="products-section-header">
          <h2>Spécial fêtes des Mères</h2>
          <a href="#">Voir plus</a>
        </div>
        <div className="products-wrapper">
          {products.map((product, i) => (
            <ProductCard
              src={product.src}
              alt={product.alt}
              name={product.name}
              price={product.price}
              url={product.url}
              key={i}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Page;
