function Page() {
  return (
    <>
      <header>
        <img src="/src/assets/react.svg" alt="logo en faite" />

        <nav>
          <a className="link" href="/Home">
            Home
          </a>
          <a className="link" href="/Shop">
            Shop
          </a>
          <a className="link" href="/Sales">
            Sales
          </a>
          <a className="link" href="/About">
            About
          </a>
          <a className="link" href="/Contact">
            Contact
          </a>
        </nav>
        <div className="auth-btns">
          <button className="login-btn">Se connecter</button>
          <button className="register-btn">S'inscrire</button>
        </div>
      </header>
      <div>
        <img src="/src/assets/hero-banner.png" alt="" />
      </div>
    </>
  );
}

export default Page;
