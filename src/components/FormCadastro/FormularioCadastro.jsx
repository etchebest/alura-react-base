import React, { Component } from "react";
import "./FormularioCadastro.css";

class FormularioCadastro extends Component {
  render() {
    return (
      <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escra sua nota"
          className="form-cadastro_input"
          onChange={this._handleMudancatexto.bind(this)}
        ></textarea>
        <button className="form-cadastro_input form-cadastro_submit">
          Criar nota
        </button>
      </form>
    );
  }

  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
  }
  _handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }
  _handleMudancatexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);
  }
}

export default FormularioCadastro;
