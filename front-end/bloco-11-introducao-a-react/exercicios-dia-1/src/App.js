import './App.css';


function App() {
  const Task = (value) => {
    return (
     <div> 
      <li>{'Hello, World!!'}</li>
      <li>{'Hello, Trybe'}</li>
      <li>{'Hello, Iago'}</li>
    </div>  
    );
  }
  return (
    <div className="App">
      <Task/>
    </div>
  );
}

export default App;
