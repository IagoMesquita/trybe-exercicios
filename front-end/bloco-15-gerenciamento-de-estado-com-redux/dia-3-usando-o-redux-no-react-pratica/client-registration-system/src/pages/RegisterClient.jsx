import React from 'react';
import { connect } from 'react-redux';
import { cadastrarCliente } from '../redux/actions/actionsClientes';

class RegisterClient extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      idade: '',
      email: '',
    }
  }

  handleChange({ target }) {
    const { name , value } = target;
    this.setState({ [name]: value })
  }

  render() {
    const { nome, idade, email, submitInfo } = this.props;
    return (
      <div>
        <label htmlFor="nome"> Nome
          <input 
            type="text"
            id="nome"
            name="nome"
            value={ nome } 
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="idade"> Idade
          <input 
            type="text"
            id="idade"
            name="idade"
            value={ idade }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="email">Email
          <input 
            type="text"
            id="email"
            name="email"
            value={ email }
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor='enviar'> Cadastrar Cliente
          <button
            type='button'
            id='enviar'
            name='enviar'
            onClick={ () => submitInfo(this.state) }
          />
        </label>
      </div>
    );
  }
}



const mapDispatchToProps = (dispatch) => ({
  submitInfo: (state) => dispatch(cadastrarCliente(state))
})

export default connect(null, mapDispatchToProps)(RegisterClient);
