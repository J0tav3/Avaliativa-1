import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState("#282c34");

  // Função para gerar uma cor aleatória em formato hexadecimal
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Atualiza o contador e muda a cor de fundo
  const handleClick = (increment) => {
    setCount(count + increment);
    setBgColor(getRandomColor()); // Atualiza o estado da cor de fundo
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <header className="App-header">
        <h1>Hello, World!</h1>
        <p>
          Bem-vindo à minha aplicação React. Aqui está um contador com fundo
          dinâmico:
        </p>
        <div>
          <button onClick={() => handleClick(-1)}>-</button>
          <span style={{ margin: "0 10px", fontSize: "1.5rem" }}>{count}</span>
          <button onClick={() => handleClick(1)}>+</button>
        </div>
        <p>Você clicou {count} vezes!</p>
      </header>
    </div>
  );
}

export default App;
