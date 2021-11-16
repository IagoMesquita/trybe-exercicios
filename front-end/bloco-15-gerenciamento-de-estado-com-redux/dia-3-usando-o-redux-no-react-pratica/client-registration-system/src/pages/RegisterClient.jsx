import React from 'react';

class RegisterClient extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  handleChange({ target }) {
    // const { }
  }

  render() {
    const { nome } = this.state;
    return (
      <div>
        <label htmlFor="nome">
          <input 
            type="text"
            id="nome"
            name="nome"
            value={nome}
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }
}
 
export default RegisterClient;
