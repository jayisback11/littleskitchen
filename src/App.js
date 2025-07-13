import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { FaFacebookF } from "react-icons/fa";
import { SiDoordash } from "react-icons/si";
import menuData from "./menu.json";

const TheLittlesKitchen = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [navCollapsed, setNavCollapsed] = useState(true);

  useEffect(() => {
    setMenuItems(menuData);
  }, []);

  const toggleNav = () => setNavCollapsed(!navCollapsed);

  return (
    <div
      className="site-container"
      style={{
        fontFamily: "'Georgia', serif",
        backgroundColor: "#fdf6f0",
        color: "#4a3c31",
      }}
    >
      {/* Hero Banner */}
      <header
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1350&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
          position: "relative",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
          fontFamily: "'Playfair Display', serif",
        }}
      >
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: "700",
            marginBottom: "0.5rem",
          }}
        >
          The Littles Kitchen
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            maxWidth: "600px",
            textAlign: "center",
            fontFamily: "'Georgia', serif",
          }}
        >
          Authentic Filipino Flavors Crafted with Love
        </p>
      </header>

      {/* Navigation */}
      <nav
        className="navbar navbar-expand-md navbar-light bg-white shadow-sm fixed-top"
        style={{ borderBottom: "1px solid #ddd" }}
      >
        <div className="container">
          <a
            className="navbar-brand fw-bold"
            href="#hero"
            style={{
              color: "#4a3c31",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            The Littles Kitchen
          </a>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarNav"
            aria-expanded={!navCollapsed}
            aria-label="Toggle navigation"
            onClick={toggleNav}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`${
              navCollapsed ? "collapse" : ""
            } navbar-collapse justify-content-end`}
            id="navbarNav"
          >
            <ul className="navbar-nav me-auto">
              {["About", "Menu", "Location", "Contact"].map((section) => (
                <li className="nav-item" key={section}>
                  <a
                    href={`#${section.toLowerCase()}`}
                    className="nav-link"
                    style={{
                      color: "#4a3c31",
                      fontWeight: "600",
                      fontFamily: "'Playfair Display', serif",
                    }}
                    onClick={() => setNavCollapsed(true)}
                  >
                    {section}
                  </a>
                </li>
              ))}
            </ul>
            {/* Social Links */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  href="https://www.doordash.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                  style={{
                    color: "white",
                    fontWeight: "600",
                    backgroundColor: "#ff3008",
                    borderRadius: "6px",
                    padding: "6px 12px",
                    marginRight: "8px",
                    fontFamily: "'Playfair Display', serif",
                    transition: "background-color 0.3s ease",
                    textAlign: "center",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#cc2706")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#ff3008")
                  }
                >
                  <SiDoordash
                    size={20}
                    style={{ marginRight: "6px", verticalAlign: "middle" }}
                  />
                  DoorDash
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                  style={{
                    color: "white",
                    fontWeight: "600",
                    backgroundColor: "#1877f2",
                    borderRadius: "6px",
                    padding: "6px 12px",
                    fontFamily: "'Playfair Display', serif",
                    transition: "background-color 0.3s ease",
                    textAlign: "center",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#145dbf")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#1877f2")
                  }
                >
                  <FaFacebookF
                    size={20}
                    style={{ marginRight: "6px", verticalAlign: "middle" }}
                  />
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Sections */}
      <main style={{ paddingTop: "80px" }}>
        {/* About */}
        <section
          id="about"
          className="container py-5"
          style={{ textAlign: "center" }}
        >
          <h2
            style={{
              borderBottom: "2px solid #4a3c31",
              paddingBottom: "0.5rem",
              maxWidth: "200px",
              margin: "0 auto 2rem auto",
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
            }}
          >
            About Us
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              maxWidth: "700px",
              margin: "0 auto 1rem auto",
              lineHeight: 1.6,
              fontFamily: "'Georgia', serif",
            }}
          >
            Welcome to Little Kitchen!! At Little Kitchen, we bring the rich and
            vibrant flavors of the Philippines, offering a delicious variety of
            authentic Filipino dishes, each crafted with love and the freshest
            ingredients.
          </p>

          <div
            style={{ display: "flex", justifyContent: "center", gap: "1rem" }}
          >
            <a
              href="https://www.doordash.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#ff3008",
                color: "white",
                padding: "0.6rem 1.2rem",
                borderRadius: "6px",
                fontWeight: "600",
                textDecoration: "none",
                fontSize: "1rem",
                boxShadow: "0 3px 6px rgba(255,48,8,0.5)",
                transition: "background-color 0.3s ease",
                fontFamily: "'Playfair Display', serif",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#cc2706")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#ff3008")
              }
            >
              <SiDoordash size={24} style={{ marginRight: "8px" }} />
              Order on DoorDash
            </a>

            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#1877f2",
                color: "white",
                padding: "0.6rem 1.2rem",
                borderRadius: "6px",
                fontWeight: "600",
                textDecoration: "none",
                fontSize: "1rem",
                boxShadow: "0 3px 6px rgba(24,119,242,0.5)",
                transition: "background-color 0.3s ease",
                fontFamily: "'Playfair Display', serif",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#145dbf")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#1877f2")
              }
            >
              <FaFacebookF size={24} style={{ marginRight: "8px" }} />
              Follow on Facebook
            </a>
          </div>
        </section>

        {/* Menu */}
        <section id="menu" className="container py-5">
          <h2
            style={{
              borderBottom: "2px solid #4a3c31",
              paddingBottom: "0.5rem",
              maxWidth: "200px",
              marginBottom: "2rem",
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
            }}
          >
            Our Menu
          </h2>
          <div className="row">
            {menuItems.map((item, idx) => (
              <div key={idx} className="col-12 col-sm-6 col-md-4 mb-4">
                <div
                  style={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 4px 8px rgba(74, 60, 49, 0.15)",
                    backgroundColor: "white",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ height: "200px", overflow: "hidden" }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.3s ease",
                      }}
                      className="menu-image"
                    />
                  </div>
                  <div
                    style={{
                      padding: "1rem",
                      flexGrow: 1,
                      fontFamily: "'Georgia', serif",
                    }}
                  >
                    <h5
                      style={{
                        color: "#4a3c31",
                        fontFamily: "'Playfair Display', serif",
                      }}
                    >
                      {item.name}
                    </h5>
                    <p style={{ fontSize: "0.9rem", color: "#6b5e4a" }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Location */}
        <section id="location" className="container py-5">
          <h2
            style={{
              borderBottom: "2px solid #4a3c31",
              paddingBottom: "0.5rem",
              maxWidth: "200px",
              marginBottom: "2rem",
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
            }}
          >
            Location
          </h2>
          <p
            style={{
              textAlign: "center",
              marginBottom: "1rem",
              fontFamily: "'Georgia', serif",
            }}
          >
            We're located in Baton Rouge, Louisiana. Come visit us for your
            Filipino food cravings!
          </p>
          <div className="ratio ratio-16x9 shadow rounded">
            <iframe
              src="https://www.google.com/maps?q=Baton+Rouge,+Louisiana&output=embed"
              title="Map"
              allowFullScreen
              style={{ borderRadius: "8px" }}
            ></iframe>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="container py-5"
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            fontFamily: "'Georgia', serif",
            color: "#4a3c31",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              borderBottom: "2px solid #4a3c31",
              paddingBottom: "0.5rem",
              maxWidth: "200px",
              margin: "0 auto 2rem auto",
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
            }}
          >
            Contact Us
          </h2>

          <p style={{ fontSize: "1.2rem", marginBottom: "1.5rem" }}>
            We'd love to hear from you! Whether you have questions or want to
            place a special order, reach out anytime.
          </p>

          <p style={{ fontSize: "1.1rem", marginBottom: "0.8rem" }}>
            <strong>Phone:</strong>{" "}
            <a
              href="tel:2253294678"
              style={{ color: "#4a3c31", fontWeight: "600" }}
            >
              (225) 329-4678
            </a>
          </p>

          <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:info@thelittleskitchen.com"
              style={{
                color: "#4a3c31",
                fontWeight: "600",
                textDecoration: "underline",
              }}
            >
              info@thelittleskitchen.com
            </a>
          </p>

          <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
            <strong>Business Hours:</strong>
            <br />
            Mon - Sat: 10:00 AM - 8:00 PM
            <br />
            Sun: Closed
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <a
              href="https://www.doordash.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#ff3008",
                color: "white",
                padding: "0.6rem 1.2rem",
                borderRadius: "6px",
                fontWeight: "600",
                textDecoration: "none",
                fontSize: "1rem",
                boxShadow: "0 3px 6px rgba(255,48,8,0.5)",
                fontFamily: "'Playfair Display', serif",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#cc2706")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#ff3008")
              }
            >
              <SiDoordash size={24} style={{ marginRight: "8px" }} />
              Order on DoorDash
            </a>

            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#1877f2",
                color: "white",
                padding: "0.6rem 1.2rem",
                borderRadius: "6px",
                fontWeight: "600",
                textDecoration: "none",
                fontSize: "1rem",
                boxShadow: "0 3px 6px rgba(24,119,242,0.5)",
                fontFamily: "'Playfair Display', serif",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#145dbf")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#1877f2")
              }
            >
              <FaFacebookF size={24} style={{ marginRight: "8px" }} />
              Follow on Facebook
            </a>
          </div>

          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              maxWidth: "400px",
              margin: "0 auto",
            }}
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                "Thank you for your message! We will get back to you shortly."
              );
              e.target.reset();
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              style={{
                padding: "0.6rem",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontFamily: "'Georgia', serif",
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              style={{
                padding: "0.6rem",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontFamily: "'Georgia', serif",
              }}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              style={{
                padding: "0.6rem",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontFamily: "'Georgia', serif",
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: "#4a3c31",
                color: "white",
                border: "none",
                padding: "0.75rem",
                borderRadius: "6px",
                fontWeight: "600",
                cursor: "pointer",
                fontFamily: "'Playfair Display', serif",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#3b3227")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#4a3c31")
              }
            >
              Send Message
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#4a3c31",
          color: "#fdf6f0",
          textAlign: "center",
          padding: "1rem 0",
          marginTop: "2rem",
          fontSize: "0.9rem",
          fontFamily: "'Georgia', serif",
        }}
      >
        &copy; 2025 The Littles Kitchen. All rights reserved.
      </footer>
    </div>
  );
};

export default TheLittlesKitchen;
