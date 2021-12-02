import React from 'react';
import { connect } from 'react-redux';
import { login } from '../redux/actions/actionsLogin';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            senha: '',
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange({ target }) {
      const { name, value } = target;  
      this.setState({ [name]: value});
    }
    
    render() {
        const { logged, login } = this.props;
        const { email, senha } = this.state;
        return( logged ? <Redirect to="/clients-data" /> 
        : (
            <div>
            <h1>Login</h1>
            <form>
                <label>
                    <input value={ email } name="email" onChange={ this.handleChange }/>
                </ label>
                <label>
                    <input value={ senha } name="senha" onChange={ this.handleChange }/>
                </ label>
                <button onClick={ (e) => {
                    e.preventDefault()
                    login(email, senha)
                } }>
                Login
                </ button>
            </form>
        </div>
        )
           
        );
    }
}

const mapStateToProps = (state) => ({
    logged: state.loginReducer.logged,
});

const mapDispatchToProps = (dispatch) => ({
    login: (email, senha) => dispatch(login(email, senha)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)