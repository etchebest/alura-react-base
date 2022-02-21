import React, { Component } from "react";
import "./CardNota.css";
import deleteSVG from "../../assets/image/delete.svg";
// import {ReactComponent as DeleteSVG} from "../../assets/image/delete.svg";

class CardNota extends Component {
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <img src={deleteSVG} alt="Excluir" />
          {/* <DeleteSVG/> */}
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}
export default CardNota;
