import { useState } from "react";
import { useNavigate } from "react-router";
import { TiLocation } from "react-icons/ti";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();

  async function login() {
    try {
      if (username === "" || password === "") {
        alert("Fields cannot be empty");
        return;
      }
      setLoading(true);

      let userData = { username: username, password: password };

      const res = await fetch(`${import.meta.env.VITE_PROD_URL}/log-in`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      const data = await res.json();

      if (res.ok) {
        alert(data.message);
        localStorage.setItem("token", data.token);
        navigation("/home");
      } else {
        setErrors(data.errors);
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }

  return (
    <div className="Login">
      <div className="page-container">
        <div className="form-section">
          <div className="logo">
            <TiLocation className="icon" />

            <div>TravelTides</div>
          </div>
          <p>Log in to your account.</p>
          <div className="form-div">
            <label htmlFor="username">Username</label>
            <br />

            <input
              type="username"
              id="username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <label htmlFor="password">Password: </label>
            <br />

            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />

            <button
              className="submit"
              onClick={loading ? console.log() : login}
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
          <div className="dont-have">
            <div>Dont have an account?</div>
            <div className="button" onClick={() => navigation("/register")}>
              Register here
            </div>
          </div>
        </div>

        <div className="image-section">
          <img src="/images/image.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Login;
