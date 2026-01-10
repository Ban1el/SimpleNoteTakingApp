import { useState } from "react";
import { login } from "../api/auth.api";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await login(username, password);
      localStorage.setItem("token", res.accessToken);
      navigate("/", { replace: true });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="container w-50">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title mb-5">Login</h5>
              <form action={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  ></input>
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </div>

                <div className="mb-3">
                  <button type="submit" className="btn btn-primary">
                    login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
