import "../assets/styles/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div>
        <a href="https://x.com/VulpxVenandi25" target="_blank">
          <img
            className="link"
            src="/img/social/ic-twitter.png"
            alt="Twitter"
          />
        </a>
        <a href="https://t.me/polarfox_box" target="_blank">
          <img
            className="link"
            src="/img/social/ic-telegram.png"
            alt="Telegram"
          />
        </a>
        <a href="https://vulpxvenandi25.itch.io/" target="_blank">
          <img className="link" src="/img/social/ic-itchio.png" alt="Itch.io" />
        </a>
        <a
          href="https://paypal.me/emeldmedina?country.x=CO&locale.x=es_XC"
          target="_blank"
        >
          <img className="link" src="/img/social/ic-paypal.png" alt="Paypal" />
        </a>
        <a
          href="https://patreon.com/ChroniconChimera?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink"
          target="_blank"
        >
          <img
            className="link"
            src="/img/social/ic-patreon.png"
            alt="Patreon"
          />
        </a>
      </div>
      <span>
        Íconos sacados de{" "}
        <a href="https://iconos8.es/icons" target="_blank">
          Icons
        </a>
      </span>
    </div>
  );
}

export default Footer;
