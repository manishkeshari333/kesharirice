const Footer = () => {
  return (
    <footer style={{ background: "#333", color: "white", padding: "20px 10px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          textAlign: "left",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* About Section */}
        <div style={{ flex: "1 1 200px", margin: "10px" }}>
          <h3>About</h3>
          <p>
            Mini Shakuntala Rice Mill provides high quality rice processing
            services with modern technology and customer satisfaction.
          </p>
        </div>

        {/* Gallery Section */}
        <div style={{ flex: "1 1 200px", margin: "10px" }}>
          <h3>Gallery</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>Mill Photos</li>
            <li>Rice Varieties</li>
            <li>Events</li>
          </ul>
        </div>

        {/* Help Section */}
        <div style={{ flex: "1 1 200px", margin: "10px" }}>
          <h3>Help</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>FAQ</li>
            <li>How to Order</li>
            <li>Support</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div style={{ flex: "1 1 200px", margin: "10px" }}>
          <h3>Contact</h3>
          <p>📍 Address: Varanasi, UP, India</p>
          <p>📞 Phone: +91 9876543210</p>
          <p>✉ Email: info@shakuntalaricemill.com</p>
        </div>
      </div>

      <hr style={{ border: "0.5px solid #555", margin: "20px 0" }} />

      <p style={{ textAlign: "center", margin: 0 }}>
        © 2025 Mini Shakuntala Rice Mill. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
