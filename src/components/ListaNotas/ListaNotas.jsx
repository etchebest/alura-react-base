import React, { Component } from "react";
import CardNota from "../CardNota";
import "./ListaNotas.css";

class ListaNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {Array.of("Trabalho", "Trabalho", "Estudos").map((cat, i) => {
          return (
            <li key={i} className="lista-notas_item">
              <CardNota />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaNotas;
