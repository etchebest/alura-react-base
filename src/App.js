import React, { Component } from "react";
import FormularioCadastro from "./components/FormCadastro";
import ListaNotas from "./components/ListaNotas";

import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();

    this.state ={
      notas: []
    };
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = { notas: novoArrayNotas};

    this.setState(novoEstado);
    
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaNotas notas={this.state.notas} />
      </section>
    );
  }
}

export default App;