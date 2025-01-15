import { useState } from "react";
import { useNavigate } from "react-router";
import { TiLocation } from "react-icons/ti";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();

  async function login() {
    try {
      if (email === "" || password === "") {
        alert("Fields cannot be empty");
        return;
      }
      setLoading(true);

      let userData = { email: email, password: password };

      const res = await fetch(`${process.env.PROD_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      const data = await res.json();
      console.log({ name: data.name });
      if (res.ok) {
        alert("Success");
        localStorage.setItem("token", data.token);
        localStorage.setItem("name", data.name);
        localStorage.setItem("email", data.email);
        navigation("/home");
      } else {
        alert(data.message);
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
          <div className="logo" onClick={() => navigation("/")}>
            <TiLocation className="icon" />

            <div>TravelTides</div>
          </div>
          <p>Log in to your account.</p>
          <div className="form-div">
            <label htmlFor="email">Email</label>

            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label htmlFor="password">Password: </label>

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
