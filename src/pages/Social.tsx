import "../assets/styles/social.css";
import "bootstrap/dist/css/bootstrap.css";

function Social() {
  return (
    <div className="social">
      <h1 className="text-h1">Redes Sociales y Apoyo.</h1>
      {/* Los links de redes sociales */}
      <div>
        <h2>Redes Sociales</h2>
        <div className="social-links">
          <a>Link a x red social</a>
          <a>Link a x red social</a>
          <a>Link a x red social</a>
          <a>Link a x red social</a>
          <a>Link a x red social</a>
          <a>Link a x red social</a>
        </div>
      </div>
      <div>
        <h2>Apóyame si puedes ;)</h2>
        <div className="social-links">
          <a>Link a x apoyo</a>
          <a>Link a x apoyo</a>
          <iframe
            id="kofiframe"
            src="https://ko-fi.com/vulpxvenandi25/?hidefeed=true&widget=true&embed=true&preview=true"
            className="kofi-widget"
            height="712"
            title="vulpxvenandi25"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Social;
