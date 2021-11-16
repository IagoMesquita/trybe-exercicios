import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ClientsData extends React.Component {
    render() {
        const { loged, clients } = this.props;
        return( 
          !loged ? <p> Login não efetuado </p> : (
            <div>
                {clients.length === 0 ? <p> Nenhum cliente cadastrado </p> : (
                  <h1>Clientes Cadastrados</h1>
                )}
                <button><Link to="">Cadastre um cliente</Link></button>
            </div>
        )
        );
    }
}

ClientsData.propTypes = {
  loged: PropTypes.bool.isRequired,
  clients: PropTypes.arrayOf(PropTypes.object()).isRequired,
};

export default ClientsData;