import React from 'react';
import { Link } from 'react-router-dom';
import RenderClientesData from '../components/RenderClientsData';

class ClientsData extends React.Component {
    render() {
        const { loged, dataClients } = this.props;
        return( 
          !loged ? <p> Login não efetuado </p> : (
            <div>
                {dataClients.length === 0 ? <p> Nenhum cliente cadastrado </p> : (
                  <RenderClientesData />
                )}
                <button><Link to="/register-client">Cadastre um cliente</Link></button>
            </div>
        )
        );
    }
}



export default ClientsData;