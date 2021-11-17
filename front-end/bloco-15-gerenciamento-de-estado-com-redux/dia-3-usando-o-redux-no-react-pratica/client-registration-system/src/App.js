import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import ClientsData from './pages/ClientsData';
import NotFound from './pages/NotFound ';
import RegisterClient from './pages/RegisterClient';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/login" component={ Login } /> 
        <Route path="/clients-data" component={ ClientsData } /> 
        <Route path="/register-client" component={ RegisterClient } /> 
        <Route path="/*" componet={ NotFound } />
      </Switch>  
    </BrowserRouter>
  );
}

export default App;
