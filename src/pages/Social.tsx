import "../assets/styles/social.css";
import "bootstrap/dist/css/bootstrap.css";

function Social() {
  return (
    <div className="social">
      <h1 className="text-h1">Apóyame si puedes ;)</h1>
      <div>
        <div className="social-links">
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
