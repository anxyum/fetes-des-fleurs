import cart from "../assets/cart.svg";

function Component({ src, alt, name, price, url }) {
  return (
    <a className="product-card" href={url}>
      <img className="product-image" src={src} alt={alt} />
      <div className="product-infos-wrapper">
        <div className="product-infos">
          <span>{name}</span>
          <span>{price}$</span>
        </div>

        <img src={cart} alt="cart logo" />
      </div>
    </a>
  );
}

export default Component;
