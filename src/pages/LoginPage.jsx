import { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/auth.css";

const emptyForm = {
  email: "",
  password: "",
};

export default function LoginPage() {
  const [form, setForm] = useState(emptyForm);
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("muAdminLoggedIn") === "true",
  );

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((currentForm) => {
      return {
        ...currentForm,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const savedAdmin = JSON.parse(localStorage.getItem("muAdmin"));

    if (!savedAdmin) {
      setMessage("No admin account exists yet. Please register first.");
      return;
    }

    if (
      savedAdmin.email === form.email &&
      savedAdmin.password === form.password
    ) {
      localStorage.setItem("muAdminLoggedIn", "true");
      setIsLoggedIn(true);
      setMessage(`Welcome back, ${savedAdmin.name}.`);
      setForm(emptyForm);
      return;
    }

    setMessage("Email or password does not match.");
  }

  return (
    <section className="auth-page">
      <form className="auth-form" onSubmit={handleSubmit}>
        <p className="page-eyebrow">ADMIN ACCESS</p>
        <h1>Log In</h1>
        <p>Use the admin account you created on the register page.</p>

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          onChange={handleChange}
          required
          type="email"
          value={form.email}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          onChange={handleChange}
          required
          type="password"
          value={form.password}
        />

        <button type="submit">Log In</button>

        {message && <p className="auth-message">{message}</p>}

        {isLoggedIn && (
          <p className="auth-success">You are logged in as an MU admin.</p>
        )}

        <p className="auth-switch">
          Need an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </section>
  );
}
