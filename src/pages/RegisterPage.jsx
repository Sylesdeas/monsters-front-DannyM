import { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/auth.css";

const emptyForm = {
  name: "",
  email: "",
  password: "",
};

export default function RegisterPage() {
  const [form, setForm] = useState(emptyForm);
  const [message, setMessage] = useState("");

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

    localStorage.setItem("muAdmin", JSON.stringify(form));
    localStorage.setItem("muAdminLoggedIn", "false");
    setMessage(`Admin account created for ${form.email}.`);
    setForm(emptyForm);
  }

  return (
    <section className="auth-page">
      <form className="auth-form" onSubmit={handleSubmit}>
        <p className="page-eyebrow">ADMIN ACCESS</p>
        <h1>Register</h1>
        <p>
          Anyone can create a Monsters University admin account for this
          project.
        </p>

        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          onChange={handleChange}
          required
          type="text"
          value={form.name}
        />

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

        <button type="submit">Create Account</button>

        {message && <p className="auth-message">{message}</p>}

        <p className="auth-switch">
          Already registered? <Link to="/login">Log in</Link>
        </p>
      </form>
    </section>
  );
}
