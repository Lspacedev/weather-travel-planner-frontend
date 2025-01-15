import { useState } from "react";
import { useNavigate } from "react-router";
import { TiLocation } from "react-icons/ti";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();

  async function register() {
    try {
      if (name === "" || email === "" || password === "") {
        alert("Fields cannot be empty");
        return;
      }
      setLoading(true);
      const res = await fetch(
        `${import.meta.env.VITE_PROD_URL}/api/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
          }),
        }
      );
      const data = await res.json();
      if (res.ok) {
        alert("Success");
        navigation("/login");
      } else {
        alert(data.message);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <div className="Register">
      <div className="page-container">
        <div className="form-section">
          <div className="logo">
            <TiLocation className="icon" />
            <div>TravelTides</div>
          </div>
          <p>Register an account.</p>

          {errors &&
            errors.length > 0 &&
            errors.map((err, i) => (
              <span key={i} className="err">
                {err}
              </span>
            ))}
          <div className="form-div">
            <label htmlFor="name">Name</label>
            <input
              type="name"
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
            <br />

            <label htmlFor="email">Email</label>

            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />

            <label htmlFor="password">Password:</label>

            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />

            <button
              className="submit"
              onClick={loading ? console.log() : register}
            >
              {loading ? "Loading..." : "Submit"}
            </button>
            <div className="dont-have">
              <div>Already an account?</div>
              <div className="button" onClick={() => navigation("/login")}>
                Login
              </div>
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

export default Register;
