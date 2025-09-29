import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"phone" | "otp">("phone");

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length === 10) {
      // Normally you’d call backend API to send OTP here
      alert(`OTP sent to +91-${phone}`);
      setStep("otp");
    } else {
      alert("Please enter valid 10 digit mobile number");
    }
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp === "1234") { // demo OTP
      alert("Login successful ✅");
      // yahan pe localStorage ya backend se token save kar sakte ho
    } else {
      alert("Invalid OTP ❌");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Login</h2>
      {step === "phone" && (
        <form onSubmit={handleSendOtp}>
          <input
            type="tel"
            placeholder="Enter 10 digit mobile number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
          />
          <button type="submit" style={{ width: "100%", padding: "10px" }}>
            Send OTP
          </button>
        </form>
      )}

      {step === "otp" && (
        <form onSubmit={handleVerifyOtp}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
          />
          <button type="submit" style={{ width: "100%", padding: "10px" }}>
            Verify OTP
          </button>
        </form>
      )}

      <p style={{ marginTop: "10px" }}>
        Don’t have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default Login;
