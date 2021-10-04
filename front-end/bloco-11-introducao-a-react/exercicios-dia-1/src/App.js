import React from 'react';
import './App.css';

const arrayHello = ['Hello, World!', 'Hello, Trybe!', 'Hello, Iago'];

function App() {
const Task = (value) => {
return (
<li>{value}</li>
);
}
return (
<div className="App">
{arrayHello.map((hello) => Task(hello) )} 
</div>
);
}

export default App;
