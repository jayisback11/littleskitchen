import React, { useState } from "react";
import menuItems from "../menu.json";

const categories = [
  "all",
  "soups",
  "noodles",
  "grilled specials",
  "appetizers",
  "main entrees",
  "combos",
  "weekend specials",
  "party trays",
  "drinks",
  "desserts"
];

const OurMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Remove duplicates by name
  const uniqueItems = Array.from(
    new Map(menuItems.map((item) => [item.name, item])).values()
  );

  // Filter by category and search query
  const filteredItems = uniqueItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="container py-5">
      <h2
        style={{
          borderBottom: "2px solid #4a3c31",
          paddingBottom: "0.5rem",
          maxWidth: "200px",
          marginBottom: "2rem",
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700
        }}
      >
        Our Menu
      </h2>

      {/* Filter controls: dropdown + search */}
      <div
        className="d-flex flex-wrap justify-content-between align-items-center mb-4"
        style={{ gap: "1rem" }}
      >
        {/* Dropdown */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontFamily: "'Playfair Display', serif"
          }}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat === "all" ? "Show All" : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search menu..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            borderRadius: "6px",
            border: "1px solid #ccc",
            flex: "1 1 250px",
            maxWidth: "400px",
            fontFamily: "'Georgia', serif"
          }}
        />
      </div>

      {selectedCategory !== "all" && (
        <h4
          style={{
            fontFamily: "'Playfair Display', serif",
            marginBottom: "1rem",
            color: "#4a3c31"
          }}
        >
          {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
        </h4>
      )}

      <div className="row">
        {filteredItems.map((item, idx) => (
          <div key={idx} className="col-12 col-sm-6 col-md-4 mb-4">
            <div
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 8px rgba(74, 60, 49, 0.15)",
                backgroundColor: "white",
                height: "100%",
                display: "flex",
                flexDirection: "column"
              }}
            >
              <div style={{ height: "200px", overflow: "hidden" }}>
                <img
                  src={
                    item.image ||
                    "https://via.placeholder.com/300x200?text=No+Image"
                  }
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
              </div>
              <div
                style={{
                  padding: "1rem",
                  flexGrow: 1,
                  fontFamily: "'Georgia', serif"
                }}
              >
                <h5
                  style={{
                    color: "#4a3c31",
                    fontFamily: "'Playfair Display', serif"
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
  );
};

export default OurMenu;
