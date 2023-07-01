import React from "react";
import "./Header.css";
import { IconButton } from "@material-tailwind/react";
import { getArticles } from "../api/af_backend";

const Header = (props) => {
  return (
    <div className="headerCont">
      <h3 id="headertext">Gestor de Artículos</h3>
      <IconButton onClick={getArticles}>
        <i className="fas fa-heart" />
      </IconButton>
    </div>
  );
};

export default Header;
