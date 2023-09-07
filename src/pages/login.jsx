import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === '') {
      setError("Please Enter correct details");
    } else {
      setError('Login Successful');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <section className="login-wrapper">
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body p-5">
                <h2 className="text-center">LOGIN</h2>
                <p className="text-center mb-4">Welcome Back!</p>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label mb-3">
                      Enter Your Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="enter email here.."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor='password' className="form-lable mb-3">
                      Enter Your Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="enter password here..."
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      required
                    />
                  </div>
                  {error && (
                    <div className="alert alert-danger">{error}</div>
                  )}
                  <div className="mb-3">
                    <Link to="/forgotpassword" className="form-link">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <p className='m-0'>Don't have an account?</p>
                    <Link to="/signup" className="form-link">
                      Sign up
                    </Link>
                  </div>
                  <div className="d-grid gap-2">
                    <button type="submit">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
