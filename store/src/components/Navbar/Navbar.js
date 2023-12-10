import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import menuIcon from "../../images/icons/menu.svg";
import logoPlaceholder from "../../images/icons/logo-placeholder.svg";
import avatarIcon from "../../images/icons/avatar.svg";
import cartIcon from "../../images/icons/empty-cart.svg";
import favoriteIcon from "../../images/icons/favorite-white.svg";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search/${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <nav className="navbar">
      <div className="left-section">
        <img src={menuIcon} alt="Menu" className="icon" />
        <img src={logoPlaceholder} alt="Logo" className="logo" />
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Pesquisar"
            className="search-bar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
      </div>
      <div className="right-section">
        <img src={favoriteIcon} alt="Favorite" className="icon" />
        <img src={cartIcon} alt="Cart" className="icon" />
        <img src={avatarIcon} alt="Avatar" className="icon" />
      </div>
    </nav>
  );
};

export default Navbar;
