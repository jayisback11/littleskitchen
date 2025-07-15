import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { FaFacebookF } from "react-icons/fa";
import { SiDoordash } from "react-icons/si";
import OurMenu from "./components/OurMenu";
import LittleKitchenLogo from "./assets/images/littlekitchenLogo.png";

const TheLittlesKitchen = () => {
  const [navCollapsed, setNavCollapsed] = useState(true);

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
            "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1350&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "70vh",
          paddingTop: "65px",
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
        <img
          src={LittleKitchenLogo} // ✅ Update path if needed
          alt="Little Kitchen Logo"
          className="littleKitchenLogo"
          style={{
            width: "350px", // adjust as needed
            height: "auto",
            marginBottom: "1rem",
          }}
        />
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: "700",
            marginBottom: "0.5rem",
          }}
        >
          Welcome to Little Kitchen
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
            Little Kitchen
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
                  href="https://order.getrevi.com/little-kitchen-1551"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                  style={{
                    color: "white",
                    fontWeight: "600",
                    backgroundColor: "#08cfcfff",
                    borderRadius: "6px",
                    padding: "6px 12px",
                    marginRight: "8px",
                    fontFamily: "'Playfair Display', serif",
                    transition: "background-color 0.3s ease",
                    textAlign: "center",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#08b6b6ff")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#08cfcfff")
                  }
                >
                  Revi
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://www.doordash.com/store/little-kitchen-baton-rouge-31685735/50714946/?srsltid=AfmBOoq_SVuuhW3ELYwoXeV4onSplTIFW9KLgAPr-mGMmMVaAI8UJPRW"
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
                  href="https://www.facebook.com/profile.php?id=100090750182895"
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
              <li class-item="nav-item">
                {/* Phone Number Button */}
                <a
                  href="tel:2253294678"
                  style={{
                    backgroundColor: "#4a3c31",
                    color: "white",
                    padding: "6px 12px",
                    borderRadius: "6px",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    marginLeft: 6,
                  }}
                >
                  <i
                    className="bi bi-telephone-fill"
                    style={{ fontSize: "1.1rem" }}
                  ></i>
                  (225) 329-4678
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
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://order.getrevi.com/little-kitchen-1551"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              style={{
                color: "white",
                fontWeight: "600",
                backgroundColor: "#08cfcfff",
                borderRadius: "6px",
                padding: "6px 12px",
                marginRight: "8px",
                fontFamily: "'Playfair Display', serif",
                transition: "background-color 0.3s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#08b6b6ff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#08cfcfff")
              }
            >
              Order on Revi
            </a>
            <a
              href="https://www.doordash.com/store/little-kitchen-baton-rouge-31685735/50714946/?srsltid=AfmBOoq_SVuuhW3ELYwoXeV4onSplTIFW9KLgAPr-mGMmMVaAI8UJPRW"
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
              href="https://www.facebook.com/profile.php?id=100090750182895"
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
            <a
              href="tel:2253294678"
              style={{
                backgroundColor: "#4a3c31",
                color: "white",
                padding: "6px 12px",
                borderRadius: "6px",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                marginLeft: 6,
              }}
            >
              <i
                className="bi bi-telephone-fill"
                style={{ fontSize: "1.1rem" }}
              ></i>
              (225) 329-4678
            </a>
          </div>
        </section>

        {/* Menu */}
        <OurMenu />

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
            We're located in 940 O'Neal Ln Baton Rouge, LA 70816. Come visit us
            for your Filipino food cravings!
          </p>
          <div className="ratio ratio-16x9 shadow rounded">
            <iframe
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=940%20O'Neal%20Ln%20Baton%20Rouge,%20LA%2070816+(Little%20Kitchen)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
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
            maxWidth: "1000px",
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
              littlekitchen.mq@gmail.com
            </a>
          </p>

          <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
            <strong>Business Hours:</strong>
            <br />
            Mon - Tue: Closed
            <br />
            Wed - Fri: 3:30 PM - 7:00 PM
            <br />
            Sat: 11:00 AM - 6:00 PM
            <br />
            Sun: 11:00 AM - 2:00 PM
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "10px",
              marginBottom: "2rem",
            }}
          >
            <a
              href="https://order.getrevi.com/little-kitchen-1551"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              style={{
                color: "white",
                fontWeight: "600",
                backgroundColor: "#08cfcfff",
                borderRadius: "6px",
                padding: "6px 12px",
                marginRight: "8px",
                fontFamily: "'Playfair Display', serif",
                transition: "background-color 0.3s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#08b6b6ff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#08cfcfff")
              }
            >
              Order on Revi
            </a>
            <a
              href="https://www.doordash.com/store/little-kitchen-baton-rouge-31685735/50714946/?srsltid=AfmBOoq-LxJK-tqo_peaP0dmq4nbZgrIPmZRKsAr6jz0DLOLsZahhzhV"
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
              href="https://www.facebook.com/profile.php?id=100090750182895"
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
            <a
              href="tel:2253294678"
              style={{
                backgroundColor: "#4a3c31",
                color: "white",
                padding: "6px 12px",
                borderRadius: "6px",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                marginLeft: 6,
              }}
            >
              <i
                className="bi bi-telephone-fill"
                style={{ fontSize: "1.1rem" }}
              ></i>
              (225) 329-4678
            </a>
          </div>
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
        &copy; 2025 Little Kitchen. All rights reserved.
      </footer>
    </div>
  );
};

export default TheLittlesKitchen;
