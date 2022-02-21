import React, { Component } from "react";
import CardNota from "../CardNota";
import "./ListaNotas.css";

class ListaNotas extends Component {

  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((nota, i) => {
          return (
            <li key={i} className="lista-notas_item">
              <CardNota
                titulo={nota.titulo}
                texto={nota.texto}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaNotas;
