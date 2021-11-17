import React from "react";
import { connect } from 'react-redux';

class RenderClientesData extends React.Component {
    render() {
        const { dataClients } = this.props;
        return(
          <div>
            <h1>Clientes Cadastrados</h1>
            { 
              dataClients.map((element, index) => 
                (
                  <div key={ index }>
                    <p>Nome:{ element.nome }</p>
                    <p>Idade:{ element.idade }</p>
                    <p>Email:{ element.email }</p>
                  </div>
                )
              )
        }
        </div>    
        )
    }
}



const mapStateToProps = (state) => ({
    dataClients: state.clientesReducer
})

export default connect(mapStateToProps)(RenderClientesData);