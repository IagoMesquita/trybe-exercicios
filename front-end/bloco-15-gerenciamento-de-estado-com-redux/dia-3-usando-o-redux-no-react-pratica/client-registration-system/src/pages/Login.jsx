import React from 'react';
import { connect } from 'react-redux';
import { login } from '../redux/actions/actionsLogin';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            senha: '',
        }
    }

    handleChange({target: { value, name }}) {
        this.setState({ [name]: value});
    }
    
    render() {
        const { logged, login } = this.props;
        const { email, senha } = this.state;
        return(
            <div>
                <h1>Login</h1>
                <form>
                    <label>
                        <input value={ email } name="email" />
                    </ label>
                    <label>
                        <input value={ senha } name="senha" />
                    </ label>
                    <button onClick={ login(email, senha) }>
                    Login
                    </ button>
                </form>
            </div>
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