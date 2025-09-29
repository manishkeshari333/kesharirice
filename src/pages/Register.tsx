import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !address || phone.length !== 10) {
      alert("Please fill all fields correctly");
      return;
    }

    // Save data locally (in real app send to backend)
    localStorage.setItem("user", JSON.stringify({ name, address, phone }));

    alert("Registration successful ✅");
    navigate("/login"); // after register, go to login
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        <input
          type="tel"
          placeholder="10 digit Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        <button type="submit" style={{ width: "100%", padding: "10px" }}>
          Register
        </button>
      </form>

      <p style={{ marginTop: "10px" }}>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default Register;
