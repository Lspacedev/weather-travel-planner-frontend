import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import { TiLocation } from "react-icons/ti";

function Landing() {
  return (
    <div className="Landing">
      <nav>
        <div className="logo-land">
          <TiLocation className="icon" />
          <div>TravelTides</div>
        </div>
        <div className="login-register">
          <Link to="login">
            <button className="login-btn">Log in</button>
          </Link>
          <Link to="register">
            <button className="register-btn">Register</button>
          </Link>
        </div>
      </nav>
      <div className="landing-content">
        <div className="landing-page-container">
          <div className="landing-info">
            <div className="landing-title">Weather proof your travels</div>
            <div className="landing-subtitle">Trusted by many.</div>
            <Link to="/register">
              <button className="register-btn2">Register Now</button>
            </Link>
          </div>
          <div className="empty"></div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
