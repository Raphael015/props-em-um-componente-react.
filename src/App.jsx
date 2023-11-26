import React from 'react';
import './App.css';
import obterMensagem from './api/mensagem';
import MeuComponente from './MeuComponente'; 

function App() {
  const mensagem = obterMensagem();

  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <MeuComponente mensagem={`Olá, Raphael!`} />
        <p>{mensagem}</p>
        <h1>Contador</h1>
        <p>Contagem: {count}</p>
        <button onClick={decrement}>Remover</button>
        <button onClick={increment}>Adicionar</button>
      </header>
    </div>
  );
}

export default App;