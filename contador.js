import React from "react";
import PropTypes from "prop-types";
///Debe ser una clase
class Contador extends React.Component {
  //Contructor recibirá los props de entrada
  constructor(props) {
    super(props);

    //definir estado
    this.state = {
      //con this.props estamos diciendo que el valor será el especificado por el consumidor
      valor: this.props.valor
    };
  }
  //manejará el evento onClick, sumando uno al valor, para ello usaremos setState
  sumarUno() {
    this.setState({ valor: this.state.valor + 1 });
  }
  reset() {
    this.setState({ valor: 0 });
  }
  restarUno() {
    this.setState({ valor: this.state.valor - 1 });
  }
  //se ejecuta cuando el componente se renderize
  componentDidMount() {
    console.log("El componente se renderizó");
  }
  render() {
    return (
      <div>
        <h2>Contador</h2>
        {/**Usaremos el atrubuto valor desde el estado porque los props son inmutables */}
        <h3>Valor: {this.state.valor}</h3>
        <button onClick={(e) => this.sumarUno()}>+1</button>
        <button onClick={(e) => this.restarUno()}>-1</button>
        <button onClick={(e) => this.reset()}>Reset</button>
      </div>
    );
  }
}
Contador.propTypes = {
  valor: PropTypes.number
};
export default Contador;
